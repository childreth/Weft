import { useEffect, useRef, useState } from 'react';
import {
  DEFAULT_ARTBOARD_STYLES,
  DEFAULT_FRAME_STYLES,
  DEFAULT_TEXT_STYLES,
  VOID_TAGS,
  type ArtboardFrame,
} from '@weft/core';
import { doc, history, isLocked, recordHugHeight, run, scene, useChildren } from '../editor/editor';
import { useEditor, type Camera } from '../editor/store';
import { Artboard } from './Artboard';
import { artboardHeight, nodeElements } from './elements';
import { commitActiveText } from './NodeView';
import { draggableIds, dropTargetAt, isNoop, type DropTarget } from './reorder';
import { SelectionOverlay, type Box, type DragPreview, type Handle } from './SelectionOverlay';
import { SNAP_DISTANCE, snapMove, snapResize, unionFrames, type Guide } from './snapping';

type Gesture =
  | { kind: 'pan'; sx: number; sy: number; camera: Camera }
  | {
      kind: 'move';
      sx: number;
      sy: number;
      /** Every artboard that moves with the drag: the whole selection when the grabbed node is part of it. */
      frames: Map<string, ArtboardFrame>;
      /** Union of `frames` at the start, and the artboards it can snap to. */
      bounds: ArtboardFrame;
      others: ArtboardFrame[];
      active: boolean;
      /** A plain click on a node inside a multi-selection narrows to it on release. */
      collapseTo: string | null;
    }
  | {
      kind: 'reorder';
      sx: number;
      sy: number;
      pointerId: number;
      /** Elements being dragged to a new place in the tree, in document order. */
      ids: string[];
      moving: Set<string>;
      active: boolean;
      collapseTo: string | null;
      target: DropTarget | null;
      /** Inline opacity each dragged element had before it was dimmed. */
      dimmed: Map<HTMLElement, string>;
    }
  | { kind: 'marquee'; sx: number; sy: number; cx: number; cy: number; base: string[]; additive: boolean }
  | { kind: 'resize'; id: string; handle: Handle; sx: number; sy: number; frame: ArtboardFrame; others: ArtboardFrame[] }
  | { kind: 'create'; sx: number; sy: number; cx: number; cy: number };

const DRAG_THRESHOLD = 3;
const MIN_ARTBOARD = 40;

interface Hit {
  id: string | null;
  label: boolean;
}

/** Resolves the node under a pointer event, piercing artboard shadow roots. Locked layers are click-through. */
export function hitTest(event: Event): Hit {
  for (const target of event.composedPath()) {
    if (!(target instanceof HTMLElement)) continue;
    if (target.dataset.artboardLabel) return { id: target.dataset.artboardLabel, label: true };
    if (target.dataset.gfId && !isLocked(target.dataset.gfId)) return { id: target.dataset.gfId, label: false };
    if (target.dataset.canvas !== undefined) break;
  }
  return { id: null, label: false };
}

/** The frame that should receive a child inserted at `id`. */
function containerFor(id: string): string | null {
  const node = scene.nodes.get(id);
  if (!node) return null;
  if (node.type === 'text' || VOID_TAGS.has(node.tag)) return node.parentId;
  return id;
}

function resizeFrame(f: ArtboardFrame, handle: Handle, dx: number, dy: number): ArtboardFrame {
  let { x, y, width, height } = f;
  if (handle.includes('e')) width = Math.max(MIN_ARTBOARD, f.width + dx);
  if (handle.includes('s')) height = Math.max(MIN_ARTBOARD, f.height + dy);
  if (handle.includes('w')) {
    width = Math.max(MIN_ARTBOARD, f.width - dx);
    x = f.x + f.width - width;
  }
  if (handle.includes('n')) {
    height = Math.max(MIN_ARTBOARD, f.height - dy);
    y = f.y + f.height - height;
  }
  return { x: Math.round(x), y: Math.round(y), width: Math.round(width), height: Math.round(height) };
}


/** An artboard's frame with its rendered height when it hugs its content (the stored one may be stale). */
function liveFrame(id: string): ArtboardFrame | undefined {
  const frame = scene.nodes.get(id)?.frame;
  if (frame?.heightMode !== 'hug') return frame;
  return { ...frame, height: artboardHeight(id) ?? frame.height };
}

/** Frames of the visible artboards other than `ids`: what a drag can snap to. */
function snapTargets(ids: Iterable<string>): ArtboardFrame[] {
  const skip = new Set(ids);
  return scene.children(null).flatMap((id) => {
    const n = scene.nodes.get(id);
    const frame = n && !n.hidden && !skip.has(id) ? liveFrame(id) : undefined;
    return frame ? [frame] : [];
  });
}

function handleFromEvent(event: Event): { id: string; handle: Handle } | null {
  for (const target of event.composedPath()) {
    if (target instanceof HTMLElement && target.dataset.handle && target.dataset.handleNode) {
      return { id: target.dataset.handleNode, handle: target.dataset.handle as Handle };
    }
  }
  return null;
}

/**
 * The canvas uses native listeners rather than React's synthetic events:
 * events originating inside a portal into a shadow root are dispatched twice
 * by React, which would double-apply every tool action.
 */
export function Canvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [draft, setDraft] = useState<Box | null>(null);
  const [panning, setPanning] = useState(false);
  const [guides, setGuides] = useState<Guide[]>([]);
  const [drag, setDrag] = useState<DragPreview | null>(null);
  const camera = useEditor((s) => s.camera);
  const tool = useEditor((s) => s.tool);
  const spaceHeld = useEditor((s) => s.spaceHeld);
  const artboardIds = useChildren(null);

  useEffect(() => {
    const el = containerRef.current!;
    let gesture: Gesture | null = null;

    const toCanvas = (clientX: number, clientY: number) => {
      const rect = el.getBoundingClientRect();
      const c = useEditor.getState().camera;
      return { x: (clientX - rect.left - c.x) / c.zoom, y: (clientY - rect.top - c.y) / c.zoom };
    };

    /** Top-level artboards whose rendered box intersects a marquee given in container space. */
    const artboardsIn = (box: Box, container: DOMRect): string[] =>
      scene.children(null).filter((id) => {
        if (isLocked(id)) return false;
        const r = nodeElements.get(id)?.getBoundingClientRect();
        if (!r) return false;
        const x = r.left - container.left;
        const y = r.top - container.top;
        return x < box.x + box.w && x + r.width > box.x && y < box.y + box.h && y + r.height > box.y;
      });

    const showGuides = (next: Guide[]) => setGuides((prev) => (prev.length === 0 && next.length === 0 ? prev : next));

    const begin = (g: Gesture, e: PointerEvent) => {
      gesture = g;
      el.setPointerCapture(e.pointerId);
    };

    // Wheel: pinch / ⌘-scroll zooms around the cursor, plain scroll pans.
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const state = useEditor.getState();
      if (e.ctrlKey || e.metaKey) {
        const rect = el.getBoundingClientRect();
        state.zoomAt(e.clientX - rect.left, e.clientY - rect.top, Math.exp(-e.deltaY * 0.01));
      } else {
        const c = state.camera;
        state.setCamera({ ...c, x: c.x - e.deltaX, y: c.y - e.deltaY });
      }
    };

    const onPointerDown = (e: PointerEvent) => {
      const state = useEditor.getState();
      const hit = hitTest(e);

      // Let the caret move inside the text being edited.
      if (state.editingTextId && hit.id === state.editingTextId && !hit.label) return;
      commitActiveText?.();

      if (e.button === 1 || (e.button === 0 && state.spaceHeld)) {
        setPanning(true);
        begin({ kind: 'pan', sx: e.clientX, sy: e.clientY, camera: state.camera }, e);
        return;
      }
      if (e.button !== 0) return;

      const handle = handleFromEvent(e);
      if (handle) {
        const frame = liveFrame(handle.id);
        if (!frame) return;
        history.beginGesture();
        begin({ kind: 'resize', ...handle, sx: e.clientX, sy: e.clientY, frame, others: snapTargets([handle.id]) }, e);
        return;
      }

      if (state.tool === 'frame') {
        if (!hit.id) {
          begin({ kind: 'create', sx: e.clientX, sy: e.clientY, cx: e.clientX, cy: e.clientY }, e);
          return;
        }
        const parentId = containerFor(hit.id);
        const id = run(() => doc.createNode({ type: 'frame', parentId, styles: DEFAULT_FRAME_STYLES }));
        if (id) state.select([id]);
        state.setTool('select');
        return;
      }

      if (state.tool === 'text') {
        if (!hit.id) return;
        e.preventDefault(); // keep focus on the new editable instead of the click target
        const parentId = containerFor(hit.id);
        history.beginGesture();
        const id = run(() => doc.createNode({ type: 'text', parentId, text: '', styles: DEFAULT_TEXT_STYLES }));
        if (!id) {
          history.endGesture();
          return;
        }
        state.select([id]);
        state.setEditingText(id);
        state.setTool('select');
        return;
      }

      if (!hit.id) {
        if (!e.shiftKey) state.select([]);
        begin(
          { kind: 'marquee', sx: e.clientX, sy: e.clientY, cx: e.clientX, cy: e.clientY, base: e.shiftKey ? state.selection : [], additive: e.shiftKey },
          e,
        );
        return;
      }
      if (e.shiftKey) {
        state.select(
          state.selection.includes(hit.id) ? state.selection.filter((s) => s !== hit.id) : [...state.selection, hit.id],
        );
        return;
      }
      const inGroup = state.selection.length > 1 && state.selection.includes(hit.id);
      if (!inGroup) state.select([hit.id]);
      // Elements reorder and reparent within the tree; artboards move on the canvas.
      if (scene.nodes.get(hit.id)?.parentId != null) {
        const ids = draggableIds(inGroup ? useEditor.getState().selection : [hit.id]);
        if (ids.length > 0) {
          // No pointer capture until the drag starts: it would retarget a double-click away from the text.
          gesture = {
            kind: 'reorder',
            sx: e.clientX,
            sy: e.clientY,
            pointerId: e.pointerId,
            ids,
            moving: new Set(ids),
            active: false,
            collapseTo: inGroup ? hit.id : null,
            target: null,
            dimmed: new Map(),
          };
        } else if (inGroup) {
          state.select([hit.id]);
        }
        return;
      }
      const frames = new Map<string, ArtboardFrame>();
      for (const id of inGroup ? useEditor.getState().selection : [hit.id]) {
        const n = scene.nodes.get(id);
        if (n?.frame && !n.locked) frames.set(id, liveFrame(id)!);
      }
      if (frames.size > 0) {
        begin(
          {
            kind: 'move',
            sx: e.clientX,
            sy: e.clientY,
            frames,
            bounds: unionFrames(frames.values()),
            others: snapTargets(frames.keys()),
            active: false,
            collapseTo: inGroup ? hit.id : null,
          },
          e,
        );
      } else if (inGroup) {
        state.select([hit.id]);
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      const state = useEditor.getState();
      const g = gesture;
      if (!g) {
        const { id } = hitTest(e);
        if (id !== state.hoveredId) state.setHovered(id);
        return;
      }
      const dx = e.clientX - g.sx;
      const dy = e.clientY - g.sy;
      const zoom = state.camera.zoom;
      switch (g.kind) {
        case 'pan':
          state.setCamera({ ...g.camera, x: g.camera.x + dx, y: g.camera.y + dy });
          break;
        case 'move':
          if (!g.active) {
            if (Math.hypot(dx, dy) < DRAG_THRESHOLD) return;
            g.active = true;
            history.beginGesture();
          }
          {
            // Hold ⌘/Ctrl to move freely.
            let mx = dx / zoom;
            let my = dy / zoom;
            if (e.metaKey || e.ctrlKey) {
              showGuides([]);
            } else {
              const snap = snapMove({ ...g.bounds, x: g.bounds.x + mx, y: g.bounds.y + my }, g.others, SNAP_DISTANCE / zoom);
              mx += snap.dx;
              my += snap.dy;
              showGuides(snap.guides);
            }
            run(() => {
              for (const [id, f] of g.frames) {
                doc.updateNode(id, { frame: { x: Math.round(f.x + mx), y: Math.round(f.y + my) } });
              }
            });
          }
          break;
        case 'reorder':
          if (!g.active) {
            if (Math.hypot(dx, dy) < DRAG_THRESHOLD) return;
            g.active = true;
            el.setPointerCapture(g.pointerId);
            state.setHovered(null);
            for (const id of g.ids) {
              const node = nodeElements.get(id);
              if (!node) continue;
              g.dimmed.set(node, node.style.opacity);
              node.style.opacity = '0.3';
            }
          }
          g.target = dropTargetAt(e.clientX, e.clientY, g.moving);
          setDrag({ ids: g.ids, dx, dy, target: g.target });
          break;
        case 'marquee': {
          g.cx = e.clientX;
          g.cy = e.clientY;
          const rect = el.getBoundingClientRect();
          const box = { x: Math.min(g.sx, g.cx) - rect.left, y: Math.min(g.sy, g.cy) - rect.top, w: Math.abs(dx), h: Math.abs(dy) };
          if (box.w < DRAG_THRESHOLD && box.h < DRAG_THRESHOLD) return;
          setDraft(box);
          const hits = artboardsIn(box, rect);
          const next = g.additive ? [...g.base, ...hits.filter((id) => !g.base.includes(id))] : hits;
          if (next.length !== state.selection.length || next.some((id, i) => id !== state.selection[i])) state.select(next);
          break;
        }
        case 'resize': {
          let frame = resizeFrame(g.frame, g.handle, dx / zoom, dy / zoom);
          if (e.metaKey || e.ctrlKey) {
            showGuides([]);
          } else {
            const snap = snapResize(frame, g.handle, g.others, SNAP_DISTANCE / zoom, MIN_ARTBOARD);
            frame = snap.frame;
            showGuides(snap.guides);
          }
          // A hugging artboard keeps hugging while only its width changes; dragging
          // a top or bottom edge sets a height, which makes it fixed.
          const keepHug = g.frame.heightMode === 'hug' && !/[ns]/.test(g.handle);
          run(() => doc.updateNode(g.id, { frame: keepHug ? { x: frame.x, width: frame.width } : { ...frame, heightMode: 'fixed' } }));
          break;
        }
        case 'create': {
          g.cx = e.clientX;
          g.cy = e.clientY;
          const rect = el.getBoundingClientRect();
          setDraft({ x: Math.min(g.sx, g.cx) - rect.left, y: Math.min(g.sy, g.cy) - rect.top, w: Math.abs(dx), h: Math.abs(dy) });
          break;
        }
      }
    };

    const endReorder = (g: Extract<Gesture, { kind: 'reorder' }>) => {
      for (const [node, opacity] of g.dimmed) node.style.opacity = opacity;
      setDrag(null);
    };

    const onPointerUp = (e: PointerEvent) => {
      const g = gesture;
      if (!g) return;
      gesture = null;
      if (el.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
      const state = useEditor.getState();
      switch (g.kind) {
        case 'reorder': {
          endReorder(g);
          if (!g.active) {
            if (g.collapseTo) state.select([g.collapseTo]);
            break;
          }
          const t = g.target;
          if (e.type === 'pointercancel' || !t || isNoop(g.ids, t)) break;
          run(() => doc.transact(() => g.ids.forEach((id) => doc.moveNode(id, t.parentId, t.beforeId))));
          state.select(g.ids);
          break;
        }
        case 'pan':
          setPanning(false);
          break;
        case 'move':
          showGuides([]);
          if (g.active) history.endGesture();
          else if (g.collapseTo) state.select([g.collapseTo]);
          break;
        case 'marquee':
          setDraft(null);
          break;
        case 'resize': {
          showGuides([]);
          // Record the content height a hugging artboard settled at, in the same undo step,
          // after the last width change has rendered.
          const id = g.id;
          requestAnimationFrame(() => {
            recordHugHeight(id);
            history.endGesture();
          });
          break;
        }
        case 'create': {
          setDraft(null);
          const a = toCanvas(g.sx, g.sy);
          const b = toCanvas(g.cx, g.cy);
          const tiny = Math.abs(g.cx - g.sx) < DRAG_THRESHOLD && Math.abs(g.cy - g.sy) < DRAG_THRESHOLD;
          const frame: ArtboardFrame = tiny
            ? { x: Math.round(a.x), y: Math.round(a.y), width: 1280, height: 800 }
            : {
                x: Math.round(Math.min(a.x, b.x)),
                y: Math.round(Math.min(a.y, b.y)),
                width: Math.max(MIN_ARTBOARD, Math.round(Math.abs(b.x - a.x))),
                height: Math.max(MIN_ARTBOARD, Math.round(Math.abs(b.y - a.y))),
              };
          const name = `Artboard ${scene.children(null).length + 1}`;
          const id = run(() => doc.createNode({ type: 'frame', name, frame, styles: DEFAULT_ARTBOARD_STYLES }));
          if (id) state.select([id]);
          state.setTool('select');
          break;
        }
      }
    };

    const onDoubleClick = (e: MouseEvent) => {
      const { id, label } = hitTest(e);
      if (!id || label) return;
      const node = scene.nodes.get(id);
      if (node?.type === 'text' && !node.locked) {
        history.beginGesture();
        useEditor.getState().select([id]);
        useEditor.getState().setEditingText(id);
      }
    };

    // Escape drops nothing: the dragged elements stay where they were.
    const onKeyDown = (e: KeyboardEvent) => {
      const g = gesture;
      if (e.key !== 'Escape' || g?.kind !== 'reorder') return;
      e.preventDefault();
      e.stopPropagation();
      gesture = null;
      if (el.hasPointerCapture(g.pointerId)) el.releasePointerCapture(g.pointerId);
      endReorder(g);
    };

    const onPointerLeave = () => {
      if (!gesture) useEditor.getState().setHovered(null);
    };

    const listeners = [
      ['wheel', onWheel, { passive: false }],
      ['pointerdown', onPointerDown, undefined],
      ['pointermove', onPointerMove, undefined],
      ['pointerup', onPointerUp, undefined],
      ['pointercancel', onPointerUp, undefined],
      ['pointerleave', onPointerLeave, undefined],
      ['dblclick', onDoubleClick, undefined],
    ] as const;
    for (const [type, fn, opts] of listeners) el.addEventListener(type, fn as EventListener, opts);
    window.addEventListener('keydown', onKeyDown, true);
    return () => {
      for (const [type, fn] of listeners) el.removeEventListener(type, fn as EventListener);
      window.removeEventListener('keydown', onKeyDown, true);
    };
  }, []);

  const cursor = panning ? 'grabbing' : spaceHeld ? 'grab' : tool === 'frame' ? 'crosshair' : tool === 'text' ? 'text' : 'default';

  return (
    <div ref={containerRef} className="gf-canvas" data-canvas="" data-testid="canvas" style={{ cursor }}>
      <div
        className="gf-viewport"
        style={{
          transform: `translate(${camera.x}px, ${camera.y}px) scale(${camera.zoom})`,
          ['--gf-zoom' as string]: camera.zoom,
        }}
      >
        {artboardIds.map((id) => (
          <Artboard key={id} id={id} />
        ))}
      </div>
      <SnapGuides guides={guides} />
      <SelectionOverlay containerRef={containerRef} draft={draft} drag={drag} />
    </div>
  );
}

/** Smart guides for the current drag, drawn in screen space. */
function SnapGuides({ guides }: { guides: Guide[] }) {
  const camera = useEditor((s) => s.camera);
  if (guides.length === 0) return null;
  const sx = (x: number) => x * camera.zoom + camera.x;
  const sy = (y: number) => y * camera.zoom + camera.y;
  return (
    <svg className="gf-snap-guides" data-testid="snap-guides">
      {guides.map((g) =>
        g.axis === 'x' ? (
          <line key={`x${g.at}`} x1={sx(g.at)} x2={sx(g.at)} y1={sy(g.from)} y2={sy(g.to)} />
        ) : (
          <line key={`y${g.at}`} x1={sx(g.from)} x2={sx(g.to)} y1={sy(g.at)} y2={sy(g.at)} />
        ),
      )}
    </svg>
  );
}
