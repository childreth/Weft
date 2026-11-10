import { createServer, type Server } from 'node:http';
import type { AddressInfo } from 'node:net';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';
import { MAX_IMAGE_BYTES } from '@weft/core';
import { AssetStore } from './assets';
import { ImageImporter, isPublicAddress } from './import-image';
import { startGridServer, type GridServer } from './server';

/** The start of a PNG: enough for its type and size to be read. */
function pngHeader(width: number, height: number): Buffer {
  const head = Buffer.alloc(33);
  Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]).copy(head);
  head.writeUInt32BE(13, 8);
  head.write('IHDR', 12, 'ascii');
  head.writeUInt32BE(width, 16);
  head.writeUInt32BE(height, 20);
  return head;
}

const png = pngHeader(320, 200);
let host: Server;
let base: string;
let hits = 0;

beforeAll(async () => {
  // Stands in for a site on the internet.
  host = createServer((req, res) => {
    hits++;
    const path = req.url!;
    if (path === '/photo.png') return void res.writeHead(200, { 'content-type': 'image/png' }).end(png);
    if (path === '/moved') return void res.writeHead(302, { location: '/photo.png' }).end();
    if (path === '/to-private') return void res.writeHead(302, { location: 'http://127.0.0.2:9/secret.png' }).end();
    if (path === '/loop') return void res.writeHead(302, { location: '/loop' }).end();
    if (path === '/page') return void res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' }).end('<html><img src="photo.png"></html>');
    if (path === '/huge') {
      // Says nothing about its length, then keeps sending.
      res.writeHead(200, { 'content-type': 'image/png' });
      res.write(png);
      const chunk = Buffer.alloc(1024 * 1024);
      const more = () => {
        while (!res.destroyed && res.write(chunk));
        if (!res.destroyed) res.once('drain', more);
      };
      res.on('error', () => {});
      return more();
    }
    res.writeHead(404).end();
  });
  await new Promise<void>((resolve) => host.listen(0, '127.0.0.1', resolve));
  base = `http://127.0.0.1:${(host.address() as AddressInfo).port}`;
});

afterAll(() => {
  host.closeAllConnections();
  host.close();
});

describe('isPublicAddress', () => {
  it('refuses loopback, private, link-local and reserved addresses, however they are written', () => {
    const refused = [
      '127.0.0.1', '127.8.8.8', '0.0.0.0', '10.1.2.3', '172.16.0.1', '172.31.255.255', '192.168.1.1', '169.254.169.254', '100.64.0.1', '224.0.0.1',
      '255.255.255.255', '::1', '::', '::ffff:127.0.0.1', '::ffff:7f00:1', '::ffff:10.0.0.1', '::127.0.0.1', 'fe80::1', 'fd00::1', 'fc00::1',
      'ff02::1', '64:ff9b::7f00:1', 'not-an-address', '',
    ];
    for (const address of refused) expect(isPublicAddress(address), address).toBe(false);
  });

  it('allows public addresses', () => {
    for (const address of ['8.8.8.8', '1.1.1.1', '172.32.0.1', '172.15.255.255', '192.169.0.1', '100.128.0.1', '2606:4700:4700::1111', '::ffff:8.8.8.8']) {
      expect(isPublicAddress(address), address).toBe(true);
    }
  });
});

describe('ImageImporter', () => {
  // The fake host is on loopback, so these tests allow it; a second loopback address stands in for a private network.
  const onlyFakeHost = (address: string) => address === '127.0.0.1';
  const importer = () => new ImageImporter(new AssetStore(null), onlyFakeHost);

  it('stores the image and reports its ref, type and size', async () => {
    const assets = new AssetStore(null);
    const image = await new ImageImporter(assets, onlyFakeHost).import(`${base}/photo.png`);
    expect(image).toEqual({ src: expect.stringMatching(/^asset:[0-9a-f]{64}\.png$/), type: 'image/png', bytes: png.length, width: 320, height: 200 });
    expect(assets.get(image.src.slice('asset:'.length))!.body.equals(png)).toBe(true);
  });

  it('follows a redirect to an allowed address', async () => {
    expect((await importer().import(`${base}/moved`)).width).toBe(320);
  });

  it('never connects to this machine or a private network by default', async () => {
    const guarded = new ImageImporter(new AssetStore(null));
    const before = hits;
    await expect(guarded.import(`${base}/photo.png`)).rejects.toThrow(/private network/);
    // A name that resolves to loopback is caught where the connection is made.
    await expect(guarded.import(`http://localhost:${new URL(base).port}/photo.png`)).rejects.toThrow(/private network/);
    await expect(guarded.import('http://[::1]/photo.png')).rejects.toThrow(/private network/);
    // Other ways of writing 127.0.0.1.
    await expect(guarded.import(`http://2130706433:${new URL(base).port}/photo.png`)).rejects.toThrow(/private network/);
    await expect(guarded.import('http://169.254.169.254/latest/meta-data/')).rejects.toThrow(/private network/);
    expect(hits).toBe(before);
  });

  it('checks every redirect, so an allowed site cannot forward to a private address', async () => {
    await expect(importer().import(`${base}/to-private`)).rejects.toThrow(/private network/);
    await expect(importer().import(`${base}/loop`)).rejects.toThrow(/Too many redirects/);
  });

  it('refuses what is not an image URL, saying why', async () => {
    await expect(importer().import(`${base}/page`)).rejects.toThrow(/Not a supported image.*text\/html.*a web page, not an image file/);
    await expect(importer().import(`${base}/missing.png`)).rejects.toThrow(/answered 404/);
    await expect(importer().import('file:///etc/passwd')).rejects.toThrow(/Only http and https/);
    await expect(importer().import('photo.png')).rejects.toThrow(/Not a URL/);
    await expect(importer().import(`http://user:pass@127.0.0.1/photo.png`)).rejects.toThrow(/username or password/);
  });

  it('stops reading once an image passes the size limit', async () => {
    await expect(importer().import(`${base}/huge`)).rejects.toThrow(new RegExp(`up to ${MAX_IMAGE_BYTES / 1024 / 1024} MB`));
  });
});

describe('import_image tool', () => {
  let server: GridServer;
  let client: Client;
  const call = async (args: Record<string, unknown>) => {
    const res = (await client.callTool({ name: 'import_image', arguments: args })) as { content: Array<{ text: string }>; isError?: boolean };
    return { text: res.content[0]!.text, isError: !!res.isError };
  };

  beforeAll(async () => {
    server = await startGridServer({ port: 0, dataDir: null, imageAddressAllowed: (address) => address === '127.0.0.1' });
    client = new Client({ name: 'test', version: '1.0.0' });
    await client.connect(new StreamableHTTPClientTransport(new URL(`${server.httpUrl}/mcp`)));
  });

  afterAll(async () => {
    await client.close();
    await server.close();
  });

  it('returns a node that create_nodes accepts, served from the store afterwards', async () => {
    const res = await call({ url: `${base}/photo.png` });
    expect(res.isError).toBe(false);
    const { src, node } = JSON.parse(res.text) as { src: string; node: { attributes: Record<string, string> } };
    expect(node.attributes).toMatchObject({ src, width: '320', height: '200' });

    const room = server.rooms.get('default');
    const [page] = room.doc.getTree();
    const created = (await client.callTool({
      name: 'create_nodes',
      arguments: { parentId: page!.id, nodes: [{ ...node, attributes: { ...node.attributes, alt: 'A test photo' } }] },
    })) as { isError?: boolean };
    expect(created.isError).toBeFalsy();
    const served = await fetch(`${server.httpUrl}/assets/${src.slice('asset:'.length)}`);
    expect(Buffer.from(await served.arrayBuffer()).equals(png)).toBe(true);
  });

  it('reports a refused URL as a tool error the agent can act on', async () => {
    const res = await call({ url: `${base}/page` });
    expect(res.isError).toBe(true);
    expect(res.text).toContain('a web page, not an image file');
  });
});
