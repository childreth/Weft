import { VOID_TAGS, type SceneNode } from '@weft/core';
import { scene } from '../editor/editor';
import type { Box } from './SelectionOverlay';
import { nodeElements } from './elements';

/** Where a canvas drag would drop: before `beforeId` in `parentId` (null = at the end). */
export interface DropTarget {
  parentId: string;
  beforeId: string | null;
  /** The parent's flow direction, which sets the insertion line's orientation. */
  axis: 'x' | 'y';
}

/** Near the edge of a container hit on its own padding (screen px, capped at a quarter of its size), a drop goes beside it rather than inside. */
const EDGE_BAND = 10;

const isLeaf = (id: string) => {
  const node = scene.nodes.get(id);
  return !node || node.type === 'text' || VOID_TAGS.has(node.tag);
};

const rectOf = (id: string): DOMRect | null => {
  const r = nodeElements.get(id)?.getBoundingClientRect();
  return r && r.width > 0 && r.height > 0 ? r : null;
};

const contains = (r: DOMRect, x: number, y: number) => x >= r.left && x <= r.right && y >= r.top && y <= r.bottom;

/** Main axis children flow along: flex direction, multi-column grids read across, everything else stacks. */
function layoutAxis(id: string): 'x' | 'y' {
  const el = nodeElements.get(id);
  if (!el) return 'y';
  const cs = getComputedStyle(el);
  if (cs.display.includes('flex')) return cs.flexDirection.startsWith('row') ? 'x' : 'y';
  if (cs.display.includes('grid')) return cs.gridTemplateColumns.trim().split(/\s+/).length > 1 ? 'x' : 'y';
  return 'y';
}

/** The ids that actually move: unlocked elements (not artboards), minus any inside another moving node, in document order. */
export function draggableIds(ids: readonly string[]): string[] {
  const wanted = new Set(ids.filter((id) => {
    const n = scene.nodes.get(id);
    return n && n.parentId !== null && !n.locked;
  }));
  const out: string[] = [];
  const walk = (parentId: string | null) => {
    for (const id of scene.children(parentId)) {
      if (wanted.has(id)) out.push(id);
      else walk(id);
    }
  };
  walk(null);
  return out;
}

/** The deepest visible node under a client point, never entering the nodes being dragged. */
function deepestAt(x: number, y: number, moving: ReadonlySet<string>): string | null {
  let found: string | null = null;
  let level: readonly string[] = scene.children(null);
  for (;;) {
    // Later siblings paint on top.
    const hit = [...level].reverse().find((id) => {
      if (moving.has(id) || scene.nodes.get(id)?.hidden) return false;
      const r = rectOf(id);
      return !!r && contains(r, x, y);
    });
    if (!hit) return found;
    found = hit;
    level = scene.children(hit);
  }
}

/** Before or after sibling `id` of `parentId`, by which half of it the pointer is in along the parent's axis. */
function besideSibling(parentId: string, id: string, x: number, y: number, moving: ReadonlySet<string>): DropTarget {
  const axis = layoutAxis(parentId);
  const r = rectOf(id)!;
  const before = axis === 'x' ? x < r.left + r.width / 2 : y < r.top + r.height / 2;
  const siblings = scene.children(parentId).filter((s) => !moving.has(s));
  return { parentId, beforeId: before ? id : (siblings[siblings.indexOf(id) + 1] ?? null), axis };
}

/**
 * Resolves the drop for a pointer at client (x, y) while dragging `moving`.
 * Inside the dragged nodes' own parent, siblings win: the pointer goes before
 * or after the sibling it is over, and only the middle half of a sibling
 * container drops into it. Elsewhere a leaf drops beside itself, and a
 * container hit on its own padding or gap drops into it, or beside it near its
 * leading or trailing edge.
 */
export function dropTargetAt(x: number, y: number, moving: ReadonlySet<string>): DropTarget | null {
  const hit = deepestAt(x, y, moving);
  if (!hit) return null;

  const parents = new Set([...moving].map((id) => scene.nodes.get(id)?.parentId));
  const home = parents.size === 1 ? [...parents][0] : undefined;
  if (home) {
    let sibling: string | null = hit;
    while (sibling && scene.nodes.get(sibling)?.parentId !== home) sibling = scene.nodes.get(sibling)?.parentId ?? null;
    if (sibling) {
      const r = rectOf(sibling)!;
      const [start, size, pos] = layoutAxis(home) === 'x' ? [r.left, r.width, x] : [r.top, r.height, y];
      const middle = pos > start + size / 4 && pos < start + (size * 3) / 4;
      if (isLeaf(sibling) || !middle) return besideSibling(home, sibling, x, y, moving);
    }
  }

  if (isLeaf(hit)) return besideSibling(scene.nodes.get(hit)!.parentId!, hit, x, y, moving);
  let parentId: string | null = hit;
  // Walk out of containers whose edge the pointer is hugging, so siblings stay reachable.
  while (parentId) {
    const node: SceneNode = scene.nodes.get(parentId)!;
    if (node.parentId === null) break; // the artboard root is always a valid parent
    const r = rectOf(parentId);
    if (!r) break;
    const [start, end, pos] = layoutAxis(node.parentId) === 'x' ? [r.left, r.right, x] : [r.top, r.bottom, y];
    const band = Math.min(EDGE_BAND, (end - start) / 4);
    if (pos - start > band && end - pos > band) break;
    parentId = node.parentId;
  }
  if (!parentId) return null;

  const axis = layoutAxis(parentId);
  const siblings = scene.children(parentId).filter((id) => !moving.has(id));
  let nearest: { id: string; d: number } | null = null;
  for (const id of siblings) {
    const r = rectOf(id);
    if (!r) continue;
    const d = Math.hypot(Math.max(r.left - x, 0, x - r.right), Math.max(r.top - y, 0, y - r.bottom));
    if (!nearest || d < nearest.d) nearest = { id, d };
  }
  return nearest ? besideSibling(parentId, nearest.id, x, y, moving) : { parentId, beforeId: null, axis };
}

/** True when dropping `ids` at `target` would leave the document as it is. */
export function isNoop(ids: readonly string[], target: DropTarget): boolean {
  if (ids.length !== 1) return false;
  const node = scene.nodes.get(ids[0]!);
  if (node?.parentId !== target.parentId) return false;
  const siblings = scene.children(target.parentId);
  return (siblings[siblings.indexOf(ids[0]!) + 1] ?? null) === target.beforeId;
}

/**
 * Screen geometry for a drop target, relative to `origin`: the receiving
 * parent's box and a 2px insertion line in the gap where the nodes would land.
 */
export function measureDrop(target: DropTarget, moving: ReadonlySet<string>, origin: DOMRect): { parent: Box; line: Box } | null {
  const el = nodeElements.get(target.parentId);
  const pr = el?.getBoundingClientRect();
  if (!el || !pr) return null;
  const cs = getComputedStyle(el);
  const scale = el.offsetWidth > 0 ? pr.width / el.offsetWidth : 1;
  const pad = (v: string) => (parseFloat(v) || 0) * scale;
  const content = {
    left: pr.left + pad(cs.paddingLeft) + pad(cs.borderLeftWidth),
    right: pr.right - pad(cs.paddingRight) - pad(cs.borderRightWidth),
    top: pr.top + pad(cs.paddingTop) + pad(cs.borderTopWidth),
    bottom: pr.bottom - pad(cs.paddingBottom) - pad(cs.borderBottomWidth),
  };

  const visible = scene.children(target.parentId).filter((id) => !moving.has(id) && rectOf(id));
  const at = target.beforeId === null ? visible.length : visible.indexOf(target.beforeId);
  const prev = at > 0 ? rectOf(visible[at - 1]!) : null;
  const next = at >= 0 && at < visible.length ? rectOf(visible[at]!) : null;

  let line: Box;
  if (target.axis === 'y') {
    const y = prev && next ? (prev.bottom + next.top) / 2 : next ? next.top : prev ? prev.bottom : content.top;
    line = { x: content.left, y: y - 1, w: content.right - content.left, h: 2 };
  } else {
    const sameRow = prev && next && prev.top < next.bottom && next.top < prev.bottom;
    const x = sameRow ? (prev.right + next.left) / 2 : next ? next.left : prev ? prev.right : content.left;
    const ref = next ?? prev;
    const [top, bottom] = ref ? [ref.top, ref.bottom] : [content.top, content.bottom];
    line = { x: x - 1, y: top, w: 2, h: bottom - top };
  }
  return {
    parent: { x: pr.left - origin.left, y: pr.top - origin.top, w: pr.width, h: pr.height },
    line: { ...line, x: line.x - origin.left, y: line.y - origin.top },
  };
}
