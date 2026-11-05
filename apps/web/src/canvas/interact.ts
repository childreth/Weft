import { scene } from '../editor/editor';
import { useEditor } from '../editor/store';

/**
 * The artboard in interact mode an event happened inside (its content, not its
 * label or chrome), or null. The canvas and shortcuts step aside for these.
 */
export function interactingArtboard(event: Event): string | null {
  const { interacting } = useEditor.getState();
  if (interacting.size === 0) return null;
  for (const target of event.composedPath()) {
    if (!(target instanceof HTMLElement)) continue;
    if (target.classList.contains('gf-artboard-host')) {
      const id = target.parentElement?.dataset.artboardId;
      return id && interacting.has(id) ? id : null;
    }
    if (target.dataset.canvas !== undefined) break;
  }
  return null;
}

/** Whether a wheel delta can scroll something inside the artboard the event came from. */
export function canScrollInside(event: WheelEvent): boolean {
  for (const target of event.composedPath()) {
    if (!(target instanceof HTMLElement)) continue;
    if (target.classList.contains('gf-artboard-host')) return false;
    const style = getComputedStyle(target);
    const y = /(auto|scroll)/.test(style.overflowY) && target.scrollHeight > target.clientHeight;
    const x = /(auto|scroll)/.test(style.overflowX) && target.scrollWidth > target.clientWidth;
    if (y && event.deltaY !== 0) {
      const room = event.deltaY > 0 ? target.scrollHeight - target.clientHeight - target.scrollTop : target.scrollTop;
      if (room > 0) return true;
    }
    if (x && event.deltaX !== 0) {
      const room = event.deltaX > 0 ? target.scrollWidth - target.clientWidth - target.scrollLeft : target.scrollLeft;
      if (room > 0) return true;
    }
  }
  return false;
}

/** The artboard a link's `#fragment` names: its id, or its name (any case, spaces or dashes). */
export function linkedArtboard(href: string): string | null {
  if (!href.startsWith('#') || href.length < 2) return null;
  const key = decodeURIComponent(href.slice(1));
  const slug = (s: string) => s.trim().toLowerCase().replace(/[\s_]+/g, '-');
  const ids = scene.children(null);
  return ids.find((id) => id === key) ?? ids.find((id) => slug(scene.nodes.get(id)?.name ?? '') === slug(key)) ?? null;
}

/** Turns interact on for an artboard; a selection inside it moves up to the artboard, whose chrome would cover the page. */
export function startInteracting(id: string) {
  const state = useEditor.getState();
  state.setInteracting(id, true);
  const inside = state.selection.filter((sel) => {
    for (let p = scene.nodes.get(sel)?.parentId; p; p = scene.nodes.get(p)?.parentId) if (p === id) return true;
    return false;
  });
  if (inside.length) state.select([...state.selection.filter((sel) => !inside.includes(sel)), ...(state.selection.includes(id) ? [] : [id])]);
}
