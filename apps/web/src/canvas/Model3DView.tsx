import { createElement, useEffect, useMemo, useRef, useState, type PointerEvent as ReactPointerEvent, type WheelEvent as ReactWheelEvent } from 'react';
import { formatCameraOrbit, parseScene3D } from '@weft/core';
import { doc, run } from '../editor/editor';
import { useEditor } from '../editor/store';
import { initialOrbit, renderWeft3D, type OrbitState } from './threeEngine';

interface Model3DViewProps {
  nodeId?: string;
  props: Record<string, unknown>;
  src?: string;
  sceneJson?: string;
  cameraOrbit?: string;
  alt?: string;
}

/**
 * Renders a `<weft-3d>` node on the Weft canvas using the shared Three.js WebGL
 * renderer. In edit mode, pointer events pass through to the canvas; in interact
 * mode, dragging orbits the 3D camera live and scrolling zooms.
 */
export function Model3DView({ nodeId, props, src, sceneJson, cameraOrbit, alt }: Model3DViewProps) {
  const hostRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const interactingCount = useEditor((s) => s.interacting.size);
  const [isInteracting, setIsInteracting] = useState(false);

  const spec = useMemo(() => parseScene3D(sceneJson), [sceneJson]);
  const baseOrbit = useMemo(() => initialOrbit(cameraOrbit, spec), [cameraOrbit, spec]);
  const [orbit, setOrbit] = useState<OrbitState>(baseOrbit);
  const [dirty, setDirty] = useState(false);
  const dragRef = useRef<{ x: number; y: number; theta: number; phi: number } | null>(null);

  // Sync orbit state when document attributes change.
  useEffect(() => {
    setOrbit(baseOrbit);
    setDirty(false);
  }, [baseOrbit]);

  // Detect whether this node's enclosing artboard is currently in interact mode.
  useEffect(() => {
    const el = hostRef.current;
    if (!el) return;
    const root = el.getRootNode();
    const host = root instanceof ShadowRoot ? root.host : null;
    const artboardId = host?.parentElement?.dataset.artboardId;
    setIsInteracting(Boolean(artboardId && useEditor.getState().interacting.has(artboardId)));
  }, [interactingCount]);

  // Render on mount, prop change, orbit change, or resize.
  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas) return;
    let cancelled = false;
    const draw = () => {
      if (cancelled) return;
      void renderWeft3D({ canvas, hostEl: host, src, sceneJson, orbit });
    };
    draw();
    const ro = new ResizeObserver(draw);
    ro.observe(host);
    return () => {
      cancelled = true;
      ro.disconnect();
    };
  }, [src, sceneJson, orbit]);

  const onPointerDown = (e: ReactPointerEvent<HTMLCanvasElement>) => {
    if (!isInteracting) return;
    e.stopPropagation();
    e.currentTarget.setPointerCapture(e.pointerId);
    dragRef.current = { x: e.clientX, y: e.clientY, theta: orbit.theta, phi: orbit.phi };
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLCanvasElement>) => {
    if (!isInteracting || !dragRef.current) return;
    e.stopPropagation();
    const dx = e.clientX - dragRef.current.x;
    const dy = e.clientY - dragRef.current.y;
    const theta = dragRef.current.theta - dx * 0.008;
    const phi = Math.max(0.12, Math.min(Math.PI - 0.12, dragRef.current.phi - dy * 0.008));
    setOrbit((prev) => ({ ...prev, theta, phi }));
    setDirty(true);
  };

  const onPointerUp = (e: ReactPointerEvent<HTMLCanvasElement>) => {
    if (!dragRef.current) return;
    e.stopPropagation();
    dragRef.current = null;
  };

  const onWheel = (e: ReactWheelEvent<HTMLCanvasElement>) => {
    if (!isInteracting) return;
    e.stopPropagation();
    const factor = e.deltaY > 0 ? 1.08 : 0.92;
    setOrbit((prev) => ({ ...prev, radius: Math.max(1.2, Math.min(40, prev.radius * factor)) }));
    setDirty(true);
  };

  const onDoubleClick = () => {
    if (!isInteracting) return;
    setOrbit(baseOrbit);
    setDirty(false);
  };

  const saveCamera = () => {
    if (!nodeId) return;
    const next = formatCameraOrbit(orbit.theta, orbit.phi, orbit.radius);
    run(() => doc.updateNode(nodeId, { attributes: { 'camera-orbit': next } }));
    setDirty(false);
  };

  const existingRef = props.ref as ((el: HTMLElement | null) => void | (() => void)) | undefined;
  const hostStyle: Record<string, unknown> = {
    display: 'block',
    position: 'relative',
    ...(props.style as Record<string, unknown> | undefined),
  };

  return createElement(
    'weft-3d',
    {
      ...props,
      role: props.role ?? 'img',
      'aria-label': props['aria-label'] ?? alt ?? '3D model viewport',
      style: hostStyle,
      ref: (el: HTMLElement | null) => {
        hostRef.current = el;
        return existingRef?.(el);
      },
    },
    createElement('canvas', {
      ref: canvasRef,
      onPointerDown,
      onPointerMove,
      onPointerUp,
      onWheel,
      onDoubleClick,
      style: {
        display: 'block',
        width: '100%',
        height: '100%',
        pointerEvents: isInteracting ? 'auto' : 'none',
        cursor: isInteracting ? 'grab' : 'default',
        touchAction: isInteracting ? 'none' : 'auto',
      },
    }),
    isInteracting && dirty && nodeId
      ? createElement(
          'button',
          {
            type: 'button',
            onClick: saveCamera,
            style: {
              position: 'absolute',
              right: '12px',
              bottom: '12px',
              padding: '6px 10px',
              borderRadius: '4px',
              border: '1px solid var(--color-outline-variant, #475569)',
              backgroundColor: 'var(--color-surface-container-high, #1e293b)',
              color: 'var(--color-on-surface, #f8fafc)',
              fontSize: '12px',
              fontWeight: 600,
              cursor: 'pointer',
            },
          },
          'Save camera',
        )
      : null,
  );
}
