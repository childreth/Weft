import { useEffect, useRef, useState } from 'react';
import {
  DEFAULT_ARTBOARD_STYLES,
  DEFAULT_FRAME_STYLES,
  DEFAULT_TEXT_STYLES,
  VOID_TAGS,
  type ArtboardFrame,
} from '@gridforge/core';
import { doc, history, run, scene, useChildren } from '../editor/editor';
import { useEditor, type Camera } from '../editor/store';
import { Artboard } from './Artboard';
import { commitActiveText } from './NodeView';
import { SelectionOverlay, type Box, type Handle } from './SelectionOverlay';

type Gesture =
  | { kind: 'pan'; sx: number; sy: number; camera: Camera }
  | { kind: 'move'; id: string; sx: number; sy: number; frame: ArtboardFrame; active: boolean }
  | { kind: 'resize'; id: string; handle: Handle; sx: number; sy: number; frame: ArtboardFrame }
  | { kind: 'create'; sx: number; sy: number; cx: number; cy: number };

const DRAG_THRESHOLD = 3;
const MIN_ARTBOARD = 40;

interface Hit {
  id: string | null;
  label: boolean;
}

/** Resolves the node under a pointer event, piercing artboard shadow roots. */
export function hitTest(event: Event): Hit {
  for (const target of event.composedPath()) {
    if (!(target instanceof HTMLElement)) continue;
    if (target.dataset.artboardLabel) return { id: target.dataset.artboardLabel, label: true };
    if (target.dataset.gfId) return { id: target.dataset.gfId, label: false };
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
        const frame = scene.nodes.get(handle.id)?.frame;
        if (!frame) return;
        history.beginGesture();
        begin({ kind: 'resize', ...handle, sx: e.clientX, sy: e.clientY, frame }, e);
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
        state.select([]);
        return;
      }
      if (e.shiftKey) {
        state.select(
          state.selection.includes(hit.id) ? state.selection.filter((s) => s !== hit.id) : [...state.selection, hit.id],
        );
        return;
      }
      state.select([hit.id]);
      const node = scene.nodes.get(hit.id);
      if (node?.frame && !node.locked) {
        begin({ kind: 'move', id: node.id, sx: e.clientX, sy: e.clientY, frame: node.frame, active: false }, e);
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
          run(() =>
            doc.updateNode(g.id, {
              frame: { x: Math.round(g.frame.x + dx / zoom), y: Math.round(g.frame.y + dy / zoom) },
            }),
          );
          break;
        case 'resize':
          run(() => doc.updateNode(g.id, { frame: resizeFrame(g.frame, g.handle, dx / zoom, dy / zoom) }));
          break;
        case 'create': {
          g.cx = e.clientX;
          g.cy = e.clientY;
          const rect = el.getBoundingClientRect();
          setDraft({ x: Math.min(g.sx, g.cx) - rect.left, y: Math.min(g.sy, g.cy) - rect.top, w: Math.abs(dx), h: Math.abs(dy) });
          break;
        }
      }
    };

    const onPointerUp = (e: PointerEvent) => {
      const g = gesture;
      if (!g) return;
      gesture = null;
      if (el.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
      const state = useEditor.getState();
      switch (g.kind) {
        case 'pan':
          setPanning(false);
          break;
        case 'move':
          if (g.active) history.endGesture();
          break;
        case 'resize':
          history.endGesture();
          break;
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
    return () => {
      for (const [type, fn] of listeners) el.removeEventListener(type, fn as EventListener);
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
      <SelectionOverlay containerRef={containerRef} draft={draft} />
    </div>
  );
}
