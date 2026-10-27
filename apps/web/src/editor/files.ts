import { GridError, IMAGE_TYPES, exportArtboardHTML, readWeftFile, type ImageExt } from '@weft/core';
import { collectAssets, imageFiles, insertImages, storeAssets } from './assets';
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

/** Downloads an artboard as a standalone HTML page (breakpoints as `@media`, Google Fonts linked, images inline). */
export async function exportArtboard(id: string) {
  const ids = [id, ...doc.getDescendantIds(id)];
  const assets = await collectAssets(ids.flatMap((i) => doc.getNode(i) ?? []));
  const assetUrl = (name: string) => {
    const data = assets[name];
    return data && `data:${IMAGE_TYPES[name.split('.')[1] as ImageExt]};base64,${data}`;
  };
  const html = run(() => exportArtboardHTML(doc, id, { assetUrl }));
  if (html) download(`${fileName(doc.getNode(id)?.name ?? 'artboard')}.html`, html, 'text/html');
}
