import { ASSET_TYPES, GridError, IMAGE_TYPES, exportArtboardHTML, flattenTree, readWeftFile, type AssetExt } from '@weft/core';
import { HTTP_URL, collectAssets, imageFiles, insertImages, storeAssets } from './assets';
import { imageTarget } from './clipboard';
import { doc, docName, run } from './editor';
import { useEditor } from './store';
import { zoomToFit } from './viewport';

/**
 * Saving and opening `.weft` files, and exporting artboards as HTML. All of it
 * happens in the browser: files never go through the server.
 */

/** A name that's safe as a download file name. */
const fileName = (name: string) => name.replace(/[\\/:*?"<>|]+/g, '-').trim() || 'weft';

function download(name: string, text: string, type: string) {
  const url = URL.createObjectURL(new Blob([text], { type }));
  const a = document.createElement('a');
  a.href = url;
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url));
}

/** Downloads the whole document as `<doc>.weft`: the JSON the server saves, plus the images it uses. */
export async function saveDocument() {
  const snapshot = doc.toSnapshot();
  const assets = await collectAssets(snapshot.nodes);
  const file = Object.keys(assets).length ? { ...snapshot, assets } : snapshot;
  download(`${fileName(docName)}.weft`, JSON.stringify(file, null, 2), 'application/json');
}

/** Adds a `.weft` (or server `.weft.json`) file's artboards to this document, as one undo step. */
export async function importDocument(file: File) {
  const { select, setNotice } = useEditor.getState();
  let parsed;
  try {
    parsed = readWeftFile(await file.text());
    await storeAssets(parsed.assets);
  } catch (err) {
    if (err instanceof GridError) return setNotice(`${file.name}: ${err.message}`);
    throw err;
  }
  const ids = run(() => doc.importFile(parsed));
  if (!ids?.length) return;
  select(ids);
  zoomToFit(ids);
}

/** Picks a file with the browser's dialog and imports it. */
export function openDocument() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.weft,.json,application/json';
  input.onchange = () => {
    const file = input.files?.[0];
    if (file) void importDocument(file);
  };
  input.click();
}

/** Picks image files with the browser's dialog and adds them where a paste would go. */
export function pickImages() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = Object.values(IMAGE_TYPES).join(',');
  input.multiple = true;
  input.onchange = () => {
    const files = imageFiles(input.files ?? []);
    if (files.length) void insertImages(files, imageTarget());
  };
  input.click();
}

/** The `<weft-3d>` runtime as a data URL a module script can load, or undefined when the server can't give it. */
async function runtimeDataUrl(): Promise<string | undefined> {
  try {
    const res = await fetch(`${HTTP_URL}/runtime/weft-3d.js`);
    if (!res.ok) return undefined;
    const bytes = new Uint8Array(await res.arrayBuffer());
    let binary = '';
    for (let i = 0; i < bytes.length; i += 0x8000) binary += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
    return `data:text/javascript;base64,${btoa(binary)}`;
  } catch {
    return undefined;
  }
}

/** Downloads an artboard as a standalone HTML page (breakpoints as `@media`, Google Fonts linked, images inline). */
export async function exportArtboard(id: string) {
  // As drawn: an instance's images are in its component, which may be on another artboard.
  const assets = await collectAssets(flattenTree(doc.getExpandedTree(id)));
  const assetUrl = (name: string) => {
    const data = assets[name];
    return data && `data:${ASSET_TYPES[name.split('.')[1] as AssetExt]};base64,${data}`;
  };
  const tree = flattenTree(doc.getExpandedTree(id));
  let runtimeUrl: string | undefined;
  if (tree.some((n) => n.tag === 'weft-3d')) {
    // Embedded, not linked: the page has to draw its models offline, away from this server.
    runtimeUrl = await runtimeDataUrl();
    if (!runtimeUrl) return void run(() => { throw new GridError("Couldn't load the 3D runtime from the Weft server, so this page's 3D models wouldn't draw. Is the server running?"); });
  }
  const html = run(() => exportArtboardHTML(doc, id, { assetUrl, runtimeUrl }));
  if (html) download(`${fileName(doc.getNode(id)?.name ?? 'artboard')}.html`, html, 'text/html');
}
