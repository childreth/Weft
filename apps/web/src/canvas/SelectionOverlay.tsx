import { useEffect, useState, type RefObject } from 'react';
import { scene } from '../editor/editor';
import { useEditor } from '../editor/store';
import { nodeElements } from './NodeView';

export interface Box {
  x: number;
  y: number;
  w: number;
  h: number;
}

export type Handle = 'n' | 's' | 'e' | 'w' | 'ne' | 'nw' | 'se' | 'sw';
const HANDLES: Handle[] = ['nw', 'n', 'ne', 'e', 'se', 's', 'sw', 'w'];

function handlePosition(box: Box, h: Handle): { left: number; top: number } {
  const left = h.includes('w') ? box.x : h.includes('e') ? box.x + box.w : box.x + box.w / 2;
  const top = h.includes('n') ? box.y : h.includes('s') ? box.y + box.h : box.y + box.h / 2;
  return { left, top };
}

const sameBox = (a: Box | null, b: Box | null) =>
  a === b || (!!a && !!b && a.x === b.x && a.y === b.y && a.w === b.w && a.h === b.h);

interface Props {
  containerRef: RefObject<HTMLDivElement | null>;
  /** Draft rectangle in screen space (frame tool). */
  draft: Box | null;
}

/** Screen-space chrome drawn above the DOM canvas: hover, selection, handles. */
export function SelectionOverlay({ containerRef, draft }: Props) {
  const selection = useEditor((s) => s.selection);
  const hoveredId = useEditor((s) => s.hoveredId);
  const zoom = useEditor((s) => s.camera.zoom);
  const [boxes, setBoxes] = useState<{ selected: Box[]; hover: Box | null }>({ selected: [], hover: null });

  // Layout can change from any source (text reflow, agent edits, resizes), so
  // measure live DOM every frame rather than tracking every cause.
  useEffect(() => {
    let raf = 0;
    let last = boxes;
    const measure = (id: string | null): Box | null => {
      const el = id ? nodeElements.get(id) : undefined;
      const container = containerRef.current;
      if (!el || !container) return null;
      const r = el.getBoundingClientRect();
      const c = container.getBoundingClientRect();
      return { x: r.left - c.left, y: r.top - c.top, w: r.width, h: r.height };
    };
    const tick = () => {
      const selected = selection.map(measure).filter((b): b is Box => b !== null);
      const hover = hoveredId && !selection.includes(hoveredId) ? measure(hoveredId) : null;
      const changed =
        selected.length !== last.selected.length ||
        selected.some((b, i) => !sameBox(b, last.selected[i]!)) ||
        !sameBox(hover, last.hover);
      if (changed) {
        last = { selected, hover };
        setBoxes(last);
      }
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selection, hoveredId, containerRef]);

  const single = selection.length === 1 ? scene.nodes.get(selection[0]!) : undefined;
  const singleBox = boxes.selected.length === 1 ? boxes.selected[0] : undefined;
  const resizable = single?.parentId === null && !single.locked;

  return (
    <div className="gf-overlay">
      {boxes.hover && <div className="gf-box gf-box-hover" style={boxStyle(boxes.hover)} />}
      {boxes.selected.map((b, i) => (
        <div key={i} className="gf-box gf-box-selected" style={boxStyle(b)} />
      ))}
      {single && singleBox && resizable &&
        HANDLES.map((h) => (
          <div
            key={h}
            className={`gf-handle gf-handle-${h}`}
            data-handle={h}
            data-handle-node={single.id}
            style={handlePosition(singleBox, h)}
          />
        ))}
      {single && singleBox && (
        <div className="gf-size-badge" style={{ left: singleBox.x + singleBox.w / 2, top: singleBox.y + singleBox.h + 8 }}>
          {Math.round(singleBox.w / zoom)} × {Math.round(singleBox.h / zoom)}
        </div>
      )}
      {draft && <div className="gf-box gf-box-draft" style={boxStyle(draft)} />}
    </div>
  );
}

function boxStyle(b: Box) {
  return { transform: `translate(${b.x}px, ${b.y}px)`, width: b.w, height: b.h };
}
