import { lookup as dnsLookup } from 'node:dns';
import { request as httpRequest, type IncomingMessage } from 'node:http';
import { request as httpsRequest } from 'node:https';
import { BlockList, isIP, type LookupFunction } from 'node:net';
import { IMAGE_TYPES, MAX_IMAGE_BYTES, assetRef, imageSize } from '@weft/core';
import { AssetError, type AssetStore } from './assets';

/**
 * Fetches an image from a URL an agent names into the asset store, so the
 * bytes never pass through the model and the image is local from then on.
 *
 * An agent choosing what this server fetches could point it at things only
 * this machine can reach (the server's own routes, a router's admin page, a
 * cloud metadata address), so only public addresses are fetched. That's
 * checked where the connection is made, on the address the name resolved to,
 * and again for every redirect: checking the URL alone would miss a public
 * name that resolves to a private address.
 */

export class ImportError extends Error {}

export interface ImportedImage {
  /** `asset:<sha256>.<ext>`, for an img node's src. */
  src: string;
  type: string;
  bytes: number;
  width?: number;
  height?: number;
}

const MAX_REDIRECTS = 5;
const TIMEOUT_MS = 15_000;
const NOT_PUBLIC = 'Only images on the public internet can be imported: that address is on this machine or a private network';

const reserved = new BlockList();
for (const [net, prefix] of [
  ['0.0.0.0', 8], // "this network"
  ['10.0.0.0', 8], // private
  ['100.64.0.0', 10], // carrier NAT
  ['127.0.0.0', 8], // loopback
  ['169.254.0.0', 16], // link-local, cloud metadata
  ['172.16.0.0', 12], // private
  ['192.0.0.0', 24], // protocol assignments
  ['192.168.0.0', 16], // private
  ['198.18.0.0', 15], // benchmarking
  ['224.0.0.0', 4], // multicast
  ['240.0.0.0', 4], // reserved, broadcast
] as const) {
  reserved.addSubnet(net, prefix, 'ipv4');
}
for (const [net, prefix] of [
  ['::', 96], // unspecified, loopback, and the old way of writing an IPv4 address
  ['64:ff9b::', 96], // NAT64: reaches IPv4 addresses
  ['fc00::', 7], // unique local
  ['fe80::', 10], // link-local
  ['ff00::', 8], // multicast
] as const) {
  reserved.addSubnet(net, prefix, 'ipv6');
}

/** Whether an IP address is on the public internet (not loopback, private, link-local or otherwise reserved). */
export function isPublicAddress(address: string): boolean {
  const family = isIP(address);
  if (family === 4) return !reserved.check(address, 'ipv4');
  if (family !== 6) return false;
  // An IPv4 address written as IPv6 (::ffff:127.0.0.1) is judged as the IPv4 address it reaches.
  const mapped = /^::ffff:(\d+\.\d+\.\d+\.\d+)$/i.exec(address);
  if (mapped) return isPublicAddress(mapped[1]!);
  return !reserved.check(address, 'ipv6');
}

interface Fetched {
  status: number;
  location?: string;
  contentType: string;
  body: Buffer;
}

export class ImageImporter {
  private readonly lookup: LookupFunction;

  /** `allowed` decides which resolved addresses may be fetched from (tests point it at a local fake). */
  constructor(
    private readonly assets: AssetStore,
    private readonly allowed: (address: string) => boolean = isPublicAddress,
  ) {
    // Runs when the socket connects, so the address checked is the one used.
    this.lookup = ((hostname: string, options: object, callback: (err: Error | null, address?: unknown, family?: number) => void) => {
      dnsLookup(hostname, options, (err, address, family) => {
        if (err) return callback(err);
        const addresses = Array.isArray(address) ? address.map((a: { address: string }) => a.address) : [address as unknown as string];
        if (!addresses.every((a) => this.allowed(a))) return callback(new ImportError(NOT_PUBLIC));
        callback(null, address, family);
      });
    }) as unknown as LookupFunction;
  }

  async import(source: string, signal?: AbortSignal): Promise<ImportedImage> {
    const timeout = AbortSignal.timeout(TIMEOUT_MS);
    const abort = signal ? AbortSignal.any([signal, timeout]) : timeout;
    let url = this.parse(source);
    for (let hop = 0; ; hop++) {
      let res: Fetched;
      try {
        res = await this.get(url, abort);
      } catch (err) {
        if (err instanceof ImportError) throw err;
        if (timeout.aborted) throw new ImportError(`${url.hostname} didn't answer within ${TIMEOUT_MS / 1000} seconds`);
        throw new ImportError(`Couldn't reach ${url.hostname} (${(err as NodeJS.ErrnoException).code ?? (err as Error).message}). Check the URL, or the network may be offline`);
      }
      if (res.status >= 300 && res.status < 400 && res.location) {
        if (hop === MAX_REDIRECTS) throw new ImportError('Too many redirects');
        url = this.parse(new URL(res.location, url).href);
        continue;
      }
      if (res.status !== 200) throw new ImportError(`${url.hostname} answered ${res.status} for that URL`);
      try {
        const stored = this.assets.put(res.body);
        const size = imageSize(res.body);
        return { src: assetRef(stored.name), type: stored.type, bytes: stored.bytes, ...(size ?? {}) };
      } catch (err) {
        if (!(err instanceof AssetError)) throw err;
        const got = res.contentType ? ` The URL returned ${res.contentType.split(';')[0]}` : '';
        const page = /html/i.test(res.contentType) ? ': a web page, not an image file. Use the address of the image itself' : '';
        throw new ImportError(`${err.message}.${got}${page}`);
      }
    }
  }

  /** A URL this may fetch: http(s), no credentials, and not a private address written out. */
  private parse(source: string): URL {
    let url: URL;
    try {
      url = new URL(source);
    } catch {
      throw new ImportError('Not a URL: pass the full address of an image (https://…)');
    }
    if (url.protocol !== 'https:' && url.protocol !== 'http:') throw new ImportError('Only http and https URLs can be imported');
    if (url.username || url.password) throw new ImportError('URLs with a username or password are not fetched');
    // A literal address never goes through the lookup. (URL has already turned forms like 0x7f.1 into 127.0.0.1.)
    const host = url.hostname.replace(/^\[|\]$/g, '');
    if (isIP(host) && !this.allowed(host)) throw new ImportError(NOT_PUBLIC);
    return url;
  }

  private get(url: URL, signal: AbortSignal): Promise<Fetched> {
    return new Promise((resolve, reject) => {
      const send = url.protocol === 'https:' ? httpsRequest : httpRequest;
      const req = send(
        url,
        {
          lookup: this.lookup,
          signal,
          headers: { accept: Object.values(IMAGE_TYPES).join(', '), 'user-agent': 'Mozilla/5.0 (compatible; image-import)' },
        },
        (res: IncomingMessage) => {
          const status = res.statusCode ?? 0;
          const done = (body: Buffer) => resolve({ status, location: res.headers.location, contentType: res.headers['content-type'] ?? '', body });
          if (status !== 200) {
            res.resume();
            return done(Buffer.alloc(0));
          }
          const tooLarge = () => {
            req.destroy();
            reject(new ImportError(`Images can be up to ${MAX_IMAGE_BYTES / 1024 / 1024} MB`));
          };
          if (Number(res.headers['content-length']) > MAX_IMAGE_BYTES) return tooLarge();
          const chunks: Buffer[] = [];
          let size = 0;
          res.on('data', (chunk: Buffer) => {
            size += chunk.length;
            // The length a server states isn't trusted: count what arrives.
            if (size > MAX_IMAGE_BYTES) return tooLarge();
            chunks.push(chunk);
          });
          res.on('end', () => done(Buffer.concat(chunks)));
          res.on('error', reject);
        },
      );
      req.on('error', reject);
      req.end();
    });
  }
}
