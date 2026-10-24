import { GridError, VOID_TAGS, readClipboard, type ClipboardPayload, type SceneTree } from '@weft/core';
import { doc, run, scene } from './editor';
import { isTyping, outermost } from './shortcuts';
import { useEditor } from './store';

/**
 * Layer copy/cut/paste through the browser's clipboard events, so ⌘C/⌘X/⌘V and
 * the browser's Edit menu both work. Text fields, text editing and selected
 * page text (e.g. an Assist reply) keep the native behavior.
 */

const MIME = 'application/x-weft+json';
const MAX_PASTED_TEXT = 10_000;
/** Fallback for browsers that drop custom clipboard types: the last copy, matched by its plain text. */
let lastCopy: { text: string; json: string } | null = null;

const plainText = (trees: SceneTree[]): string => {
  const parts: string[] = [];
  const walk = (t: SceneTree) => (t.text ? parts.push(t.text) : t.children.forEach(walk));
  trees.forEach(walk);
  return parts.join('\n') || trees.map((t) => t.name).join('\n');
};

/** Text the user highlighted on the page: ⌘C copies it, not the selected layers. */
const selectingText = () => !!document.getSelection()?.toString().trim();

function onCopy(e: ClipboardEvent, cut: boolean) {
  // ⌘X on highlighted text does nothing natively; it must not delete the layers either.
  if (isTyping(e) || selectingText() || !e.clipboardData) return;
  const { selection, select } = useEditor.getState();
  const ids = outermost(selection).filter((id) => scene.nodes.has(id));
  if (ids.length === 0) return;
  e.preventDefault();
  const payload: ClipboardPayload = { format: 'weft-clipboard', version: 1, nodes: doc.copyNodes(ids) };
  const json = JSON.stringify(payload);
  const text = plainText(payload.nodes);
  e.clipboardData.setData(MIME, json);
  e.clipboardData.setData('text/plain', text);
  lastCopy = { text, json };
  if (cut) {
    run(() => doc.deleteNodes(ids));
    select([]);
  }
}

/**
 * Where pasted layers go, from the last selected layer: into it if it can hold
 * layers (unless it's one of the copied layers), otherwise right after it.
 */
function pasteTarget(copied: ReadonlySet<string>): { parentId: string | null; beforeId: string | null } {
  const { selection } = useEditor.getState();
  const node = scene.nodes.get(selection.at(-1) ?? '');
  if (!node) return { parentId: null, beforeId: null };
  if (node.type === 'frame' && !VOID_TAGS.has(node.tag) && !copied.has(node.id)) return { parentId: node.id, beforeId: null };
  const siblings = scene.children(node.parentId);
  return { parentId: node.parentId, beforeId: siblings[siblings.indexOf(node.id) + 1] ?? null };
}

function onPaste(e: ClipboardEvent) {
  if (isTyping(e) || !e.clipboardData) return;
  const text = e.clipboardData.getData('text/plain');
  const json = e.clipboardData.getData(MIME) || (lastCopy && text === lastCopy.text ? lastCopy.json : '');
  if (!json && !text.trim()) return;
  e.preventDefault();
  const { select, setNotice } = useEditor.getState();

  let trees: SceneTree[];
  if (json) {
    try {
      trees = readClipboard(json);
    } catch (err) {
      if (err instanceof GridError) return setNotice(err.message);
      throw err;
    }
  } else {
    // Plain text from elsewhere becomes a paragraph.
    trees = [{ id: '', type: 'text', tag: 'p', name: 'Text', text: text.trim().slice(0, MAX_PASTED_TEXT), styles: {}, attributes: {}, children: [] }];
  }
  if (trees.length === 0) return;
  const target = pasteTarget(new Set(trees.map((t) => t.id)));
  const pasted = run(() => doc.insertTrees(trees, target));
  if (pasted?.length) select(pasted);
}

export function installClipboard(): () => void {
  const copy = (e: ClipboardEvent) => onCopy(e, false);
  const cut = (e: ClipboardEvent) => onCopy(e, true);
  document.addEventListener('copy', copy);
  document.addEventListener('cut', cut);
  document.addEventListener('paste', onPaste);
  return () => {
    document.removeEventListener('copy', copy);
    document.removeEventListener('cut', cut);
    document.removeEventListener('paste', onPaste);
  };
}
