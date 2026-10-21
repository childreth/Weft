import type { Alignment, Axis } from '@weft/core';
import { doc, history, run, scene } from './editor';
import { useEditor } from './store';
import { zoomBy, zoomTo, zoomToFit } from './viewport';

const ALIGN_KEYS: Record<string, Alignment> = {
  KeyA: 'left', KeyH: 'center', KeyD: 'right', KeyW: 'top', KeyV: 'middle', KeyS: 'bottom',
};
const DISTRIBUTE_KEYS: Record<string, Axis> = { KeyH: 'horizontal', KeyV: 'vertical' };

/** Drops ids whose ancestor is also in the list. */
export function outermost(ids: readonly string[]): string[] {
  const set = new Set(ids);
  return ids.filter((id) => {
    for (let p = scene.nodes.get(id)?.parentId; p; p = scene.nodes.get(p)?.parentId) if (set.has(p)) return false;
    return true;
  });
}

export function isTyping(e: Event): boolean {
  const target = e.composedPath()[0];
  if (!(target instanceof HTMLElement)) return false;
  return target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName);
}

function onKeyDown(e: KeyboardEvent) {
  if (isTyping(e)) return;
  const state = useEditor.getState();
  const mod = e.metaKey || e.ctrlKey;
  const key = e.key.toLowerCase();

  if (e.code === 'Space') {
    e.preventDefault();
    if (!state.spaceHeld) state.setSpaceHeld(true);
    return;
  }
  if (mod && key === 'z') {
    e.preventDefault();
    if (e.shiftKey) history.redo();
    else history.undo();
    return;
  }
  if (mod && (key === '=' || key === '+')) return void (e.preventDefault(), zoomBy(1.25));
  if (mod && key === '-') return void (e.preventDefault(), zoomBy(0.8));
  if (mod && key === '0') return void (e.preventDefault(), zoomTo(1));
  if (e.shiftKey && e.code === 'Digit1') return void (e.preventDefault(), zoomToFit());
  if (e.shiftKey && e.code === 'Digit2') return void (e.preventDefault(), zoomToFit(state.selection));
  if (mod && key === 'd') {
    e.preventDefault();
    const copies = run(() => doc.transact(() => outermost(state.selection).map((id) => doc.duplicateNode(id))));
    if (copies?.length) state.select(copies);
    return;
  }
  if (mod && key === 'a') {
    e.preventDefault();
    const first = state.selection[0] ? scene.nodes.get(state.selection[0]) : undefined;
    state.select([...scene.children(first ? first.parentId : null)]);
    return;
  }
  if (e.altKey && !mod && state.selection.length > 0) {
    // ⌥A/D/H left/right/center, ⌥W/S/V top/bottom/middle, ⌥⇧H/V distribute. Codes: ⌥ remaps e.key on macOS.
    const axis = e.shiftKey ? DISTRIBUTE_KEYS[e.code] : undefined;
    const align = e.shiftKey ? undefined : ALIGN_KEYS[e.code];
    if (axis || align) {
      e.preventDefault();
      run(() => (axis ? doc.distributeNodes(state.selection, axis) : doc.alignNodes(state.selection, align!)));
      return;
    }
  }
  if (mod) return;

  switch (key) {
    case 'v':
      state.setTool('select');
      break;
    case 'f':
    case 'a':
      state.setTool('frame');
      break;
    case 't':
      state.setTool('text');
      break;
    case 'escape': {
      if (state.tool !== 'select') return state.setTool('select');
      const parent = state.selection.length === 1 ? scene.nodes.get(state.selection[0]!)?.parentId : null;
      state.select(parent ? [parent] : []);
      break;
    }
    case 'enter': {
      const node = state.selection.length === 1 ? scene.nodes.get(state.selection[0]!) : undefined;
      if (!node) return;
      e.preventDefault();
      if (node.type === 'text') {
        history.beginGesture();
        state.setEditingText(node.id);
      } else {
        const first = scene.children(node.id)[0];
        if (first) state.select([first]);
      }
      break;
    }
    case 'backspace':
    case 'delete':
      if (state.selection.length === 0) return;
      e.preventDefault();
      run(() => doc.deleteNodes(state.selection));
      state.select([]);
      break;
  }
}

function onKeyUp(e: KeyboardEvent) {
  if (e.code === 'Space') useEditor.getState().setSpaceHeld(false);
}

export function installShortcuts(): () => void {
  const onBlur = () => useEditor.getState().setSpaceHeld(false);
  window.addEventListener('keydown', onKeyDown);
  window.addEventListener('keyup', onKeyUp);
  window.addEventListener('blur', onBlur);
  return () => {
    window.removeEventListener('keydown', onKeyDown);
    window.removeEventListener('keyup', onKeyUp);
    window.removeEventListener('blur', onBlur);
  };
}
