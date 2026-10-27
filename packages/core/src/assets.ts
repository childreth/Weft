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
