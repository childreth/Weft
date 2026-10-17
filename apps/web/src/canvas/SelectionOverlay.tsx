import { Fragment, useEffect, useLayoutEffect, useRef, useState, type RefObject } from 'react';
import { scene } from '../editor/editor';
import { useEditor } from '../editor/store';
import { CursorTracks, type AgentCursor } from './agentCursors';
import { nodeElements } from './elements';

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
const sameBoxes = (a: Box[], b: Box[]) => a.length === b.length && a.every((box, i) => sameBox(box, b[i]!));
// A handful of cursors at most; structural comparison is cheap enough per frame.
const sameCursors = (a: AgentCursor[], b: AgentCursor[]) => JSON.stringify(a) === JSON.stringify(b);

interface Props {
  containerRef: RefObject<HTMLDivElement | null>;
  /** Draft rectangle in screen space (frame tool). */
  draft: Box | null;
}

/** Screen-space chrome drawn above the DOM canvas: hover, selection, handles, agent cursors. */
export function SelectionOverlay({ containerRef, draft }: Props) {
  const selection = useEditor((s) => s.selection);
  const hoveredId = useEditor((s) => s.hoveredId);
  const zoom = useEditor((s) => s.camera.zoom);
  const activity = useEditor((s) => s.agentActivity);
  const collaborators = useEditor((s) => s.collaborators);
  const [boxes, setBoxes] = useState<{ selected: Box[]; hover: Box | null; agent: Box[]; cursors: AgentCursor[] }>({
    selected: [],
    hover: null,
    agent: [],
    cursors: [],
  });

  const lastRef = useRef(boxes);
  const tracks = useRef(new CursorTracks());
  // Animation time advances only in the rAF loop; re-measuring within a frame
  // (layout effect after our own setState) must give the same answer.
  const frameTime = useRef(performance.now());
  const measureAll = () => {
    const container = containerRef.current;
    if (!container) return;
    const c = container.getBoundingClientRect();
    const measure = (id: string | null): Box | null => {
      const el = id ? nodeElements.get(id) : undefined;
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return { x: r.left - c.left, y: r.top - c.top, w: r.width, h: r.height };
    };
    const selected = selection.map(measure).filter((b): b is Box => b !== null);
    const hover = hoveredId && !selection.includes(hoveredId) ? measure(hoveredId) : null;
    const agent = (activity?.ids ?? []).map(measure).filter((b): b is Box => b !== null);
    const cursors = measureCursors(measure, c);
    const last = lastRef.current;
    if (
      !sameBoxes(selected, last.selected) ||
      !sameBox(hover, last.hover) ||
      !sameBoxes(agent, last.agent) ||
      !sameCursors(cursors, last.cursors)
    ) {
      lastRef.current = { selected, hover, agent, cursors };
      setBoxes(lastRef.current);
    }
  };

  // Cursor motion is driven by `frameTime` (see agentCursors.ts for the choreography).
  const measureCursors = (measure: (id: string) => Box | null, container: DOMRect): AgentCursor[] => {
    const textEnd = (id: string) => {
      const el = nodeElements.get(id);
      if (!el) return null;
      const range = document.createRange();
      range.selectNodeContents(el);
      const rects = range.getClientRects();
      const last = rects[rects.length - 1];
      return last ? { x: last.right - container.left, y: last.top - container.top } : null;
    };
    const agents = collaborators.filter((c) => c.kind === 'agent');
    if (agents.length === 0) return [];
    const { camera } = useEditor.getState();
    const descendants = (id: string, limit: number) => {
      const out: string[] = [];
      const queue = [...scene.children(id)];
      while (queue.length && out.length < limit) {
        const next = queue.shift()!;
        out.push(next);
        queue.push(...scene.children(next));
      }
      return out;
    };
    const measures = { box: measure, textEnd, descendants };
    return tracks.current.update(agents, frameTime.current, camera, measures, scene.children(null)[0] ?? null);
  };
  const measureRef = useRef(measureAll);
  measureRef.current = measureAll;

  // The canvas re-renders this overlay on every camera change; measuring in a
  // layout effect keeps chrome in lockstep with the viewport (no 1-frame lag).
  useLayoutEffect(() => measureRef.current());

  // Layout can also change without a render here (text reflow, remote edits,
  // font loading), so keep sampling every frame.
  useEffect(() => {
    let raf = 0;
    const tick = (time: number) => {
      frameTime.current = time;
      measureRef.current();
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const single = selection.length === 1 ? scene.nodes.get(selection[0]!) : undefined;
  const singleBox = boxes.selected.length === 1 ? boxes.selected[0] : undefined;
  const resizable = single?.parentId === null && !single.locked;

  return (
    <div className="gf-overlay">
      {activity &&
        boxes.agent.map((b, i) => (
          <div
            key={`${activity.seq}-${i}`}
            className="gf-box gf-box-agent"
            data-testid="agent-highlight"
            style={{ ...boxStyle(b), ['--agent-color' as string]: activity.color }}
          />
        ))}
      {boxes.cursors.map((c) => (
        <Fragment key={c.id}>
          {c.outlines.map((b, i) => (
            <div
              key={i}
              className="gf-box gf-box-agent-focus"
              data-testid="agent-focus"
              style={{ ...boxStyle(b), ['--agent-color' as string]: c.color }}
            />
          ))}
          {c.visit && (
            <div
              key={c.visit.key}
              className="gf-box gf-box-agent-visit"
              data-visit-id={c.visit.id}
              style={{ ...boxStyle(c.visit.box), ['--agent-color' as string]: c.color }}
            />
          )}
          <div
            className="gf-agent-cursor"
            data-testid="agent-cursor"
            data-state={c.state}
            style={{ transform: `translate(${c.x}px, ${c.y}px)`, ['--agent-color' as string]: c.color }}
          >
            <div className="gf-agent-cursor-body">
              <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M2 2 L17 8 L10.5 10.5 L8 17 Z" />
              </svg>
              <span className="gf-agent-label" style={{ transform: `translate(${c.labelDx}px, ${c.labelDy}px)` }}>
                <span className="gf-agent-name">{c.model ? `${c.name} · ${c.model}` : c.name}</span>
                {c.state === 'working' && c.action && <span className="gf-agent-action">{c.action}</span>}
                {c.state === 'thinking' && <span className="gf-agent-action gf-agent-thinking">…</span>}
              </span>
            </div>
          </div>
        </Fragment>
      ))}
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
