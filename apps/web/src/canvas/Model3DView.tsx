import { createElement, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { formatCameraOrbit, hasAnimatedParts, hasExplodableParts, parseCameraOrbit, parseScene3D, type ViewPreset3D } from '@weft/core';
import { doc, run } from '../editor/editor';
import { useEditor } from '../editor/store';
import { buildWeft3DScene, initialOrbit, type OrbitState, type Weft3DSceneHandle } from './threeEngine';

interface Model3DViewProps {
  nodeId?: string;
  props: Record<string, unknown>;
  src?: string;
  sceneJson?: string;
  cameraOrbit?: string;
  animateAttr?: string;
  explodedAttr?: string;
  alt?: string;
}

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

/**
 * Renders a `<weft-3d>` node on the Weft canvas using the shared Three.js WebGL
 * renderer. Supports live 60fps spool/particle animation with an on/off toggle,
 * smooth exploded/assembled toggling, pointer orbit + wheel zoom in Interact
 * mode, and declarative view presets.
 *
 * Playing with a model in Interact mode (orbit, animate, explode, view presets)
 * never writes the document: it's a preview, like clicking through a popover,
 * and a write would sync to every open editor and add undo steps. Only "Save
 * camera" writes, because it's a deliberate edit. `data-animate` and
 * `data-exploded` are where a viewport starts.
 */
export function Model3DView({ nodeId, props, src, sceneJson, cameraOrbit, animateAttr, explodedAttr, alt }: Model3DViewProps) {
  const hostRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sceneRef = useRef<Weft3DSceneHandle | null>(null);
  const elapsedRef = useRef(0);
  const transitionRef = useRef<number>(0);
  const explodeRafRef = useRef<number>(0);
  const interactingCount = useEditor((s) => s.interacting.size);
  const [isInteracting, setIsInteracting] = useState(false);

  const spec = useMemo(() => parseScene3D(sceneJson), [sceneJson]);
  const animatable = useMemo(() => hasAnimatedParts(spec), [spec]);
  const explodable = useMemo(() => hasExplodableParts(spec), [spec]);
  const baseOrbit = useMemo(() => initialOrbit(cameraOrbit, spec), [cameraOrbit, spec]);
  const [orbit, setOrbit] = useState<OrbitState>(baseOrbit);
  const orbitRef = useRef<OrbitState>(baseOrbit);
  orbitRef.current = orbit;

  const [activeViewKey, setActiveViewKey] = useState<string | null>(null);
  const activeView: ViewPreset3D | null = activeViewKey && spec?.views ? (spec.views[activeViewKey] ?? null) : null;
  const highlightRef = useRef<string[] | undefined>(undefined);
  highlightRef.current = activeView?.highlight;

  // Assembled unless the layer asks to start exploded.
  const initialExploded = explodedAttr === 'true';
  const [exploded, setExploded] = useState(initialExploded);
  const [explodeFactor, setExplodeFactor] = useState(initialExploded ? 1 : 0);
  const explodeFactorRef = useRef(initialExploded ? 1 : 0);
  explodeFactorRef.current = explodeFactor;

  const [animating, setAnimating] = useState(animateAttr === 'true' || animateAttr === '');
  const [dirty, setDirty] = useState(false);
  const dragRef = useRef<{ x: number; y: number; theta: number; phi: number } | null>(null);

  const elementId = typeof props.id === 'string' ? props.id : undefined;

  useEffect(() => {
    setOrbit(baseOrbit);
    setActiveViewKey(null);
    setDirty(false);
  }, [baseOrbit]);

  useEffect(() => {
    setAnimating(animateAttr === 'true' || animateAttr === '');
  }, [animateAttr]);

  useEffect(() => {
    const next = explodedAttr === 'true';
    setExploded(next);
    setExplodeFactor(next ? 1 : 0);
  }, [explodedAttr]);

  useEffect(() => {
    const el = hostRef.current;
    if (!el) return;
    const root = el.getRootNode();
    const host = root instanceof ShadowRoot ? root.host : null;
    const artboardId = host?.parentElement?.dataset.artboardId;
    setIsInteracting(Boolean(artboardId && useEditor.getState().interacting.has(artboardId)));
  }, [interactingCount]);

  const animateCameraTo = useCallback((to: OrbitState) => {
    cancelAnimationFrame(transitionRef.current);
    const from = { ...orbitRef.current, target: [...orbitRef.current.target] as [number, number, number] };
    const start = performance.now();
    const duration = 480;
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const e = easeOutCubic(t);
      const next: OrbitState = {
        theta: lerp(from.theta, to.theta, e),
        phi: lerp(from.phi, to.phi, e),
        radius: lerp(from.radius, to.radius, e),
        fov: lerp(from.fov, to.fov, e),
        target: [
          lerp(from.target[0], to.target[0], e),
          lerp(from.target[1], to.target[1], e),
          lerp(from.target[2], to.target[2], e),
        ],
      };
      setOrbit(next);
      if (t < 1) transitionRef.current = requestAnimationFrame(step);
    };
    transitionRef.current = requestAnimationFrame(step);
  }, []);

  const animateExplodeTo = useCallback((target: number) => {
    cancelAnimationFrame(explodeRafRef.current);
    const from = explodeFactorRef.current;
    const start = performance.now();
    const duration = 540;
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const val = lerp(from, target, easeInOutCubic(t));
      setExplodeFactor(val);
      if (t < 1) explodeRafRef.current = requestAnimationFrame(step);
    };
    explodeRafRef.current = requestAnimationFrame(step);
  }, []);

  const toggleExplode = useCallback(() => {
    const next = !exploded;
    setExploded(next);
    animateExplodeTo(next ? 1 : 0);
    if (!next && activeViewKey) {
      setActiveViewKey(null);
      animateCameraTo(baseOrbit);
    }
  }, [exploded, animateExplodeTo, activeViewKey, animateCameraTo, baseOrbit]);

  const selectView = useCallback(
    (key: string | null) => {
      const nextKey = key && key === activeViewKey ? null : key;
      setActiveViewKey(nextKey);
      if (nextKey && explodable && !exploded) {
        setExploded(true);
        animateExplodeTo(1);
      }
      const root = hostRef.current?.getRootNode();
      if (elementId && (root instanceof ShadowRoot || root instanceof Document)) {
        for (const btn of root.querySelectorAll<HTMLElement>(`[data-3d-target="${CSS.escape(elementId)}"]`)) {
          btn.setAttribute('aria-pressed', btn.getAttribute('data-3d-view') === nextKey ? 'true' : 'false');
        }
      }
      if (!nextKey || !spec?.views?.[nextKey]) {
        animateCameraTo(baseOrbit);
        return;
      }
      const preset = spec.views[nextKey]!;
      const parsed = parseCameraOrbit(preset.orbit);
      const targetOrbit: OrbitState = {
        theta: parsed?.theta ?? baseOrbit.theta,
        phi: parsed?.phi ?? baseOrbit.phi,
        radius: parsed?.radius ?? baseOrbit.radius,
        target: preset.target ? [...preset.target] : [...baseOrbit.target],
        fov: baseOrbit.fov,
      };
      animateCameraTo(targetOrbit);
    },
    [activeViewKey, animateCameraTo, baseOrbit, elementId, spec],
  );

  // Listen for clicks on external station/view buttons inside the same artboard while interacting.
  useEffect(() => {
    if (!isInteracting || !elementId || !spec?.views) return;
    const host = hostRef.current;
    if (!host) return;
    const root = host.getRootNode();
    if (!(root instanceof ShadowRoot) && !(root instanceof Document)) return;
    const onClick = (e: Event) => {
      const target = (e.target as HTMLElement | null)?.closest?.<HTMLElement>(`[data-3d-target="${CSS.escape(elementId)}"]`);
      if (!target) return;
      const viewKey = target.getAttribute('data-3d-view');
      if (viewKey === null) return;
      e.preventDefault();
      selectView(viewKey === '' || viewKey === 'reset' ? null : viewKey);
    };
    root.addEventListener('click', onClick);
    return () => root.removeEventListener('click', onClick);
  }, [isInteracting, elementId, spec, selectView]);

  // Build reusable Three.js scene once per (src, sceneJson) and render on resize.
  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas) return;
    let cancelled = false;
    let handle: Weft3DSceneHandle | null = null;
    const draw = () => {
      if (cancelled || !handle) return;
      handle.render(canvas, host, orbitRef.current, elapsedRef.current, highlightRef.current, explodeFactorRef.current);
    };
    void buildWeft3DScene(host, src, sceneJson).then((built) => {
      if (cancelled) {
        built.dispose();
        return;
      }
      handle = built;
      sceneRef.current = built;
      draw();
    });
    const ro = new ResizeObserver(draw);
    ro.observe(host);
    return () => {
      cancelled = true;
      cancelAnimationFrame(transitionRef.current);
      cancelAnimationFrame(explodeRafRef.current);
      ro.disconnect();
      if (sceneRef.current === handle) sceneRef.current = null;
      handle?.dispose();
    };
  }, [src, sceneJson]);

  // Re-render when orbit, explodeFactor, or active highlight changes while paused.
  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas || !sceneRef.current) return;
    sceneRef.current.render(canvas, host, orbit, elapsedRef.current, activeView?.highlight, explodeFactor);
  }, [orbit, activeView, explodeFactor]);

  // 60fps animation loop when animating is enabled.
  useEffect(() => {
    if (!animating || !animatable) return;
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(0.1, (now - last) / 1000);
      last = now;
      elapsedRef.current += dt;
      const host = hostRef.current;
      const canvas = canvasRef.current;
      if (host && canvas && sceneRef.current) {
        sceneRef.current.render(canvas, host, orbitRef.current, elapsedRef.current, highlightRef.current, explodeFactorRef.current);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [animating, animatable]);

  // Native listeners, as everywhere on the canvas: React dispatches events from
  // portals into shadow roots twice, which zoomed twice per wheel tick.
  const selectViewRef = useRef(selectView);
  selectViewRef.current = selectView;
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isInteracting) return;
    const down = (e: PointerEvent) => {
      cancelAnimationFrame(transitionRef.current);
      e.stopPropagation();
      canvas.setPointerCapture(e.pointerId);
      dragRef.current = { x: e.clientX, y: e.clientY, theta: orbitRef.current.theta, phi: orbitRef.current.phi };
    };
    const move = (e: PointerEvent) => {
      const drag = dragRef.current;
      if (!drag) return;
      e.stopPropagation();
      const theta = drag.theta - (e.clientX - drag.x) * 0.008;
      const phi = Math.max(0.12, Math.min(Math.PI - 0.12, drag.phi - (e.clientY - drag.y) * 0.008));
      setOrbit((prev) => ({ ...prev, theta, phi }));
      setDirty(true);
    };
    const up = (e: PointerEvent) => {
      if (!dragRef.current) return;
      e.stopPropagation();
      dragRef.current = null;
    };
    const wheel = (e: WheelEvent) => {
      cancelAnimationFrame(transitionRef.current);
      e.preventDefault();
      e.stopPropagation();
      const factor = e.deltaY > 0 ? 1.08 : 0.92;
      setOrbit((prev) => ({ ...prev, radius: Math.max(1.2, Math.min(40, prev.radius * factor)) }));
      setDirty(true);
    };
    const dblclick = () => {
      selectViewRef.current(null);
      setDirty(false);
    };
    canvas.addEventListener('pointerdown', down);
    canvas.addEventListener('pointermove', move);
    canvas.addEventListener('pointerup', up);
    canvas.addEventListener('pointercancel', up);
    canvas.addEventListener('wheel', wheel, { passive: false });
    canvas.addEventListener('dblclick', dblclick);
    return () => {
      dragRef.current = null;
      canvas.removeEventListener('pointerdown', down);
      canvas.removeEventListener('pointermove', move);
      canvas.removeEventListener('pointerup', up);
      canvas.removeEventListener('pointercancel', up);
      canvas.removeEventListener('wheel', wheel);
      canvas.removeEventListener('dblclick', dblclick);
    };
  }, [isInteracting]);

  // From the rendered value, not an updater: a click React delivers twice must still toggle once.
  const toggleAnimate = () => setAnimating(!animating);

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

  const btnStyle: Record<string, unknown> = {
    padding: '6px 10px',
    borderRadius: '4px',
    border: '1px solid var(--color-outline-variant, #475569)',
    backgroundColor: 'var(--color-surface-container-high, #1e293b)',
    color: 'var(--color-on-surface, #f8fafc)',
    fontSize: '12px',
    fontWeight: 600,
    cursor: 'pointer',
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
      style: {
        display: 'block',
        width: '100%',
        height: '100%',
        pointerEvents: isInteracting ? 'auto' : 'none',
        cursor: isInteracting ? 'grab' : 'default',
        touchAction: isInteracting ? 'none' : 'auto',
      },
    }),
    isInteracting && activeView
      ? createElement(
          'div',
          {
            role: 'status',
            'aria-live': 'polite',
            style: {
              position: 'absolute',
              left: '12px',
              top: '12px',
              maxWidth: '320px',
              padding: '10px 12px',
              borderRadius: '4px',
              border: '1px solid var(--color-outline-variant, #333e4b)',
              backgroundColor: 'color-mix(in srgb, var(--color-surface-container, #1c222a) 92%, transparent)',
              color: 'var(--color-on-surface, #e6ecf2)',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              pointerEvents: 'auto',
            },
          },
          createElement(
            'div',
            { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' } },
            createElement('strong', { style: { fontSize: '13px', fontWeight: 700 } }, activeView.label),
            createElement(
              'button',
              {
                type: 'button',
                onClick: () => selectView(null),
                style: {
                  border: 'none',
                  background: 'transparent',
                  color: 'var(--color-primary, #7cc4f8)',
                  fontSize: '11px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  padding: '0',
                },
              },
              'Full view',
            ),
          ),
          activeView.summary
            ? createElement(
                'p',
                { style: { margin: 0, fontSize: '12px', lineHeight: 1.45, color: 'var(--color-on-surface-variant, #a9b6c4)' } },
                activeView.summary,
              )
            : null,
        )
      : null,
    isInteracting && (animatable || explodable)
      ? createElement(
          'div',
          {
            style: {
              position: 'absolute',
              left: '12px',
              bottom: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            },
          },
          animatable
            ? createElement(
                'button',
                {
                  type: 'button',
                  'aria-pressed': animating ? 'true' : 'false',
                  onClick: toggleAnimate,
                  style: btnStyle,
                },
                animating ? 'Pause rotation' : 'Animate engine',
              )
            : null,
          explodable
            ? createElement(
                'button',
                {
                  type: 'button',
                  'aria-pressed': exploded ? 'true' : 'false',
                  onClick: toggleExplode,
                  style: btnStyle,
                },
                exploded ? 'Assemble' : 'Explode view',
              )
            : null,
        )
      : null,
    isInteracting && dirty && nodeId
      ? createElement(
          'button',
          {
            type: 'button',
            onClick: saveCamera,
            style: { ...btnStyle, position: 'absolute', right: '12px', bottom: '12px' },
          },
          'Save camera',
        )
      : null,
  );
}
