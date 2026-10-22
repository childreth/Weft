import { GridError, exportArtboardHTML, readWeftFile } from '@weft/core';
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

/** Downloads the whole document as `<doc>.weft`: the same JSON the server saves. */
export function saveDocument() {
  download(`${fileName(docName)}.weft`, JSON.stringify(doc.toSnapshot(), null, 2), 'application/json');
}

/** Adds a `.weft` (or server `.weft.json`) file's artboards to this document, as one undo step. */
export async function importDocument(file: File) {
  const { select, setNotice } = useEditor.getState();
  let parsed;
  try {
    parsed = readWeftFile(await file.text());
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

/** Downloads an artboard as a standalone HTML page (breakpoints as `@media`, Google Fonts linked). */
export function exportArtboard(id: string) {
  const html = run(() => exportArtboardHTML(doc, id));
  if (html) download(`${fileName(doc.getNode(id)?.name ?? 'artboard')}.html`, html, 'text/html');
}
