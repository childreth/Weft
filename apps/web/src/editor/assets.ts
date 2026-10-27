import { GridError, IMAGE_TYPES, MAX_IMAGE_BYTES, assetName, assetNamesIn, assetRef, loadableSrc, type SceneTree } from '@weft/core';
import { SERVER_URL } from './connection';
import { doc, history, run } from './editor';
import { useEditor } from './store';

/**
 * Images in the editor. Files go to the server's asset store, never into the
 * document: a layer holds `asset:<sha256>.<ext>` and the canvas loads it from
 * the server. Saved files and exports carry the bytes, so they work anywhere.
 */

const HTTP_URL = SERVER_URL.replace(/^ws/, 'http');

/** What the canvas should load for an `img` src: the server's copy of an asset, a data URI, or nothing (an old remote URL). */
export function displaySrc(src: string | undefined): string | undefined {
  const name = assetName(src);
  return name ? `${HTTP_URL}/assets/${name}` : loadableSrc(src);
}

/** Image files the browser offers (pasted or dropped), in a type the server takes. */
export const imageFiles = (files: Iterable<File>): File[] =>
  [...files].filter((f) => (Object.values(IMAGE_TYPES) as string[]).includes(f.type));

/** Stores an image on the server; returns its asset name. `name` (from a saved file) is checked against the content. */
async function upload(body: Blob, name?: string): Promise<string> {
  if (body.size > MAX_IMAGE_BYTES) throw new GridError(`Images can be up to ${MAX_IMAGE_BYTES / 1024 / 1024} MB`);
  let res: Response;
  try {
    res = await fetch(`${HTTP_URL}/assets${name ? `?name=${name}` : ''}`, { method: 'POST', body });
  } catch {
    throw new GridError('Images need the Weft server (pnpm dev)');
  }
  const data = (await res.json().catch(() => ({}))) as { name?: string; error?: string };
  if (!res.ok || !data.name) throw new GridError(data.error ?? `Upload failed (${res.status})`);
  return data.name;
}

async function naturalSize(file: Blob): Promise<{ width: number; height: number } | null> {
  try {
    const bitmap = await createImageBitmap(file);
    const size = { width: bitmap.width, height: bitmap.height };
    bitmap.close();
    return size;
  } catch {
    return null;
  }
}

/** "IMG_2034.jpeg" → "IMG_2034"; screenshots pasted from the clipboard are all "image.png". */
const layerName = (file: File) => file.name.replace(/\.[a-z0-9]+$/i, '').trim() || 'Image';

/**
 * The attributes for an image layer showing `file`: its asset ref, and its
 * size, so the layout keeps the image's shape before it loads.
 */
export async function imageAttributes(file: File): Promise<Record<string, string>> {
  const [name, size] = await Promise.all([upload(file), naturalSize(file)]);
  return { src: assetRef(name), ...(size && { width: String(size.width), height: String(size.height) }) };
}

/**
 * An image layer for each file, ready for `insertTrees`. Alt text starts empty
 * (decorative) for the user to fill in; the Inspector asks for it.
 */
export async function imageLayers(files: readonly File[]): Promise<SceneTree[]> {
  return Promise.all(
    files.map(async (file) => ({
      id: '',
      type: 'frame' as const,
      tag: 'img' as const,
      name: layerName(file),
      // Fits its container, keeping its shape.
      styles: { display: 'block', maxWidth: '100%', height: 'auto' },
      attributes: { ...(await imageAttributes(file)), alt: '' },
      children: [],
    })),
  );
}

async function base64(blob: Blob): Promise<string> {
  const url = await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(blob);
  });
  return url.slice(url.indexOf(',') + 1);
}

/** The images `nodes` use, base64 by asset name, for a file or export that must stand alone. Missing ones are left out. */
export async function collectAssets(nodes: Iterable<{ attributes: Readonly<Record<string, string>> }>): Promise<Record<string, string>> {
  const entries = await Promise.all(
    assetNamesIn(nodes).map(async (name) => {
      try {
        const res = await fetch(`${HTTP_URL}/assets/${name}`);
        return res.ok ? ([name, await base64(await res.blob())] as const) : null;
      } catch {
        return null;
      }
    }),
  );
  return Object.fromEntries(entries.filter((e) => e !== null));
}

/** Stores a saved file's images on the server before its layers are imported. */
export async function storeAssets(assets: Readonly<Record<string, string>>): Promise<void> {
  await Promise.all(
    Object.entries(assets).map(([name, data]) => {
      const bytes = Uint8Array.from(atob(data), (c) => c.charCodeAt(0));
      return upload(new Blob([bytes]), name);
    }),
  );
}

/** Widest an image's own artboard starts out (a large photo dropped on the empty canvas). */
const MAX_IMAGE_ARTBOARD = 1440;

/**
 * Adds image layers for `files` as one undo step and selects them: into
 * `target` (before `beforeId`), or, with no target, each on its own artboard
 * at `at` (canvas px).
 */
export async function insertImages(
  files: readonly File[],
  target: { parentId: string; beforeId: string | null } | { at: { x: number; y: number } },
): Promise<void> {
  const { select, setNotice } = useEditor.getState();
  let layers: SceneTree[];
  try {
    layers = await imageLayers(files);
  } catch (err) {
    if (err instanceof GridError) return setNotice(err.message);
    throw err;
  }
  history.beginGesture();
  try {
    const ids = run(() => {
      if ('parentId' in target) return doc.insertTrees(layers, target);
      let x = target.at.x;
      return layers.flatMap((layer) => {
        const width = Math.min(Number(layer.attributes.width) || 800, MAX_IMAGE_ARTBOARD);
        const board = doc.createNode({ type: 'frame', name: layer.name, frame: { x, y: target.at.y, width, height: 600, heightMode: 'hug' } });
        x += width + 100;
        doc.insertTrees([{ ...layer, styles: { ...layer.styles, width: '100%' } }], { parentId: board });
        return [board];
      });
    });
    if (ids?.length) select(ids);
  } finally {
    history.endGesture();
  }
}
