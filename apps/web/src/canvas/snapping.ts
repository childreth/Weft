import type { ArtboardFrame } from '@weft/core';
import type { Handle } from './SelectionOverlay';

/** Screen pixels within which an edge or center snaps. */
export const SNAP_DISTANCE = 6;

/**
 * A smart guide in canvas space: a vertical line at x = `at` (axis 'x') or a
 * horizontal one at y = `at` (axis 'y'), spanning `from`..`to` on the other axis.
 */
export interface Guide {
  axis: 'x' | 'y';
  at: number;
  from: number;
  to: number;
}

type Axis = 'x' | 'y';
const POS = { x: 'x', y: 'y' } as const;
const SIZE = { x: 'width', y: 'height' } as const;
const OTHER: Record<Axis, Axis> = { x: 'y', y: 'x' };

/** Start, center and end of a frame on one axis. */
function lines(f: ArtboardFrame, axis: Axis): number[] {
  const start = f[POS[axis]];
  const size = f[SIZE[axis]];
  return [start, start + size / 2, start + size];
}

/**
 * The smallest offset (within `threshold`) that lines one of `edges` up with
 * a start, center or end of another frame, or 0 when nothing is close.
 */
function nearest(edges: number[], others: ArtboardFrame[], axis: Axis, threshold: number): number {
  let best = 0;
  let bestDistance = threshold;
  for (const other of others) {
    for (const target of lines(other, axis)) {
      for (const edge of edges) {
        const d = Math.abs(target - edge);
        if (d <= bestDistance) {
          bestDistance = d;
          best = target - edge;
        }
      }
    }
  }
  return best;
}

/** Guides for every line of `others` that one of `edges` of `box` now sits on. */
function guidesFor(box: ArtboardFrame, edges: number[], others: ArtboardFrame[], axis: Axis): Guide[] {
  const across = OTHER[axis];
  const byLine = new Map<number, Guide>();
  for (const other of others) {
    for (const target of lines(other, axis)) {
      if (!edges.some((edge) => Math.abs(target - edge) < 0.5)) continue;
      const [lo, , hi] = lines(other, across);
      const [boxLo, , boxHi] = lines(box, across);
      const guide = byLine.get(target) ?? { axis, at: target, from: boxLo!, to: boxHi! };
      guide.from = Math.min(guide.from, lo!);
      guide.to = Math.max(guide.to, hi!);
      byLine.set(target, guide);
    }
  }
  return [...byLine.values()];
}

/** Snaps a moving box (the union of the dragged artboards) to the other artboards. */
export function snapMove(box: ArtboardFrame, others: ArtboardFrame[], threshold: number) {
  const dx = nearest(lines(box, 'x'), others, 'x', threshold);
  const dy = nearest(lines(box, 'y'), others, 'y', threshold);
  const snapped = { ...box, x: box.x + dx, y: box.y + dy };
  const guides = [
    ...guidesFor(snapped, lines(snapped, 'x'), others, 'x'),
    ...guidesFor(snapped, lines(snapped, 'y'), others, 'y'),
  ];
  return { dx, dy, guides };
}

/** Snaps only the edges a resize handle moves, keeping the opposite edges fixed. */
export function snapResize(frame: ArtboardFrame, handle: Handle, others: ArtboardFrame[], threshold: number, min: number) {
  const out = { ...frame };
  const moved: Record<Axis, number[]> = { x: [], y: [] };
  for (const axis of ['x', 'y'] as const) {
    const [startSide, endSide] = axis === 'x' ? ['w', 'e'] : ['n', 's'];
    const pos = POS[axis];
    const size = SIZE[axis];
    if (handle.includes(endSide!)) {
      const edge = out[pos] + out[size];
      out[size] = Math.max(min, out[size] + nearest([edge], others, axis, threshold));
      moved[axis] = [out[pos] + out[size]];
    } else if (handle.includes(startSide!)) {
      const end = out[pos] + out[size];
      const d = nearest([out[pos]], others, axis, threshold);
      out[size] = Math.max(min, out[size] - d);
      out[pos] = end - out[size];
      moved[axis] = [out[pos]];
    }
  }
  const guides = [...guidesFor(out, moved.x, others, 'x'), ...guidesFor(out, moved.y, others, 'y')];
  return { frame: out, guides };
}

/** Bounding box of several frames. */
export function unionFrames(frames: Iterable<ArtboardFrame>): ArtboardFrame {
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for (const f of frames) {
    x0 = Math.min(x0, f.x);
    y0 = Math.min(y0, f.y);
    x1 = Math.max(x1, f.x + f.width);
    y1 = Math.max(y1, f.y + f.height);
  }
  return { x: x0, y: y0, width: x1 - x0, height: y1 - y0 };
}
