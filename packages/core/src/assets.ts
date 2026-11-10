/**
 * Images. A document refers to an image by its content: `asset:<sha256>.<ext>`
 * in an `img` node's `src`. The bytes live outside the document (the server's
 * `.weft-data/assets/`), so the same image is stored once and the synced
 * document stays small. Every renderer turns a ref into something loadable:
 * the canvas into a server URL, screenshots into a routed request, export into
 * a data URI. Remote URLs are never loaded: work must not depend on a network.
 */

export const IMAGE_TYPES = {
  png: 'image/png',
  jpg: 'image/jpeg',
  webp: 'image/webp',
  gif: 'image/gif',
  avif: 'image/avif',
} as const;
export type ImageExt = keyof typeof IMAGE_TYPES;

/** Uploads above this are refused. */
export const MAX_IMAGE_BYTES = 10 * 1024 * 1024;
/** Inline `data:` images (an agent's small SVG illustration) stay in the document, so they're kept small. */
export const MAX_INLINE_IMAGE_CHARS = 100_000;

/** `<sha256>.<ext>`: an asset's file name, and what follows `asset:` in a ref. */
export const ASSET_NAME = /^([0-9a-f]{64})\.(png|jpg|webp|gif|avif)$/;
const ASSET_REF = /^asset:([0-9a-f]{64}\.(?:png|jpg|webp|gif|avif))$/;
const INLINE_IMAGE = /^data:image\/(?:png|jpeg|webp|gif|avif|svg\+xml)[;,]/i;

export const assetRef = (name: string) => `asset:${name}`;

/** The file name in an asset ref (`<sha256>.<ext>`), or null when `src` isn't one. */
export function assetName(src: string | undefined): string | null {
  return src ? (ASSET_REF.exec(src)?.[1] ?? null) : null;
}

/** The image type from a file's first bytes; the name or claimed type of an upload isn't trusted. */
export function sniffImage(bytes: Uint8Array): ImageExt | null {
  const at = (offset: number, ...sig: number[]) => sig.every((b, i) => bytes[offset + i] === b);
  const ascii = (offset: number, s: string) => at(offset, ...[...s].map((c) => c.charCodeAt(0)));
  if (at(0, 0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a)) return 'png';
  if (at(0, 0xff, 0xd8, 0xff)) return 'jpg';
  if (ascii(0, 'GIF87a') || ascii(0, 'GIF89a')) return 'gif';
  if (ascii(0, 'RIFF') && ascii(8, 'WEBP')) return 'webp';
  if (ascii(4, 'ftypavif') || ascii(4, 'ftypavis')) return 'avif';
  return null;
}

/**
 * An image's pixel size from its header, without decoding it (the server has
 * no image decoder; the editor measures with the browser instead). Null when
 * the header can't be read. A JPEG rotated by its EXIF orientation reports the
 * stored size, and an AVIF its first declared size.
 */
export function imageSize(bytes: Uint8Array): { width: number; height: number } | null {
  const u16 = (o: number) => (bytes[o]! << 8) | bytes[o + 1]!;
  const u16le = (o: number) => bytes[o]! | (bytes[o + 1]! << 8);
  const u24le = (o: number) => u16le(o) | (bytes[o + 2]! << 16);
  const u32 = (o: number) => u16(o) * 0x10000 + u16(o + 2);
  const tag = (o: number) => String.fromCharCode(...bytes.subarray(o, o + 4));
  const size = (width: number, height: number) => (width > 0 && height > 0 ? { width, height } : null);

  switch (sniffImage(bytes)) {
    case 'png':
      return bytes.length >= 24 ? size(u32(16), u32(20)) : null;
    case 'gif':
      return bytes.length >= 10 ? size(u16le(6), u16le(8)) : null;
    case 'jpg': {
      // Segments are FF <marker> <length>; the frame header (SOF) holds the size.
      let i = 2;
      while (i + 9 < bytes.length) {
        if (bytes[i] !== 0xff) return null;
        const marker = bytes[i + 1]!;
        if (marker === 0xff) i += 1;
        else if (marker === 0x01 || (marker >= 0xd0 && marker <= 0xd9)) i += 2;
        else if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) return size(u16(i + 7), u16(i + 5));
        else i += 2 + u16(i + 2);
      }
      return null;
    }
    case 'webp': {
      if (bytes.length < 30) return null;
      const kind = tag(12);
      if (kind === 'VP8 ') return size(u16le(26) & 0x3fff, u16le(28) & 0x3fff);
      if (kind === 'VP8X') return size(1 + u24le(24), 1 + u24le(27));
      if (kind === 'VP8L') {
        const [b0, b1, b2, b3] = [bytes[21]!, bytes[22]!, bytes[23]!, bytes[24]!];
        return size(1 + (((b1 & 0x3f) << 8) | b0), 1 + (((b3 & 0x0f) << 10) | (b2 << 2) | (b1 >> 6)));
      }
      return null;
    }
    case 'avif': {
      // The "ispe" property: 4 bytes of version and flags, then width and height.
      const end = Math.min(bytes.length, 65536) - 16;
      for (let i = 4; i < end; i++) if (bytes[i] === 0x69 && tag(i) === 'ispe') return size(u32(i + 8), u32(i + 12));
      return null;
    }
    default:
      return null;
  }
}

/** Why `src` can't be an image source, or null when it can. */
export function imageSrcIssue(src: string): string | null {
  if (ASSET_REF.test(src)) return null;
  if (INLINE_IMAGE.test(src)) {
    return src.length > MAX_INLINE_IMAGE_CHARS ? `Inline image is too large (over ${MAX_INLINE_IMAGE_CHARS / 1000}K characters); upload it as an asset` : null;
  }
  return 'Attribute "src" must be an uploaded image (asset:<sha256>.<ext>) or a small data:image URI; remote URLs are not loaded';
}

/** `src` if a renderer may load it; anything else (a remote URL from an old document) renders as no image. */
export const loadableSrc = (src: string | undefined): string | undefined => (src !== undefined && imageSrcIssue(src) === null ? src : undefined);

/** Images need alt text: a description, or "" when the image is decorative. */
export function altIssue(tag: string, attributes: Readonly<Record<string, string | null | undefined>>): string | null {
  return tag === 'img' && typeof attributes.alt !== 'string'
    ? 'Images need an "alt" attribute: describe the image, or "" if it\'s only decorative'
    : null;
}

/** The asset names a set of nodes uses, for saving or exporting them with their images. */
export function assetNamesIn(nodes: Iterable<{ attributes: Readonly<Record<string, string>> }>): string[] {
  const names = new Set<string>();
  for (const node of nodes) {
    const name = assetName(node.attributes.src);
    if (name) names.add(name);
  }
  return [...names];
}
