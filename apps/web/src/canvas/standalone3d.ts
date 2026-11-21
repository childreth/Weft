import { hasAnimatedParts, parseCameraOrbit, parseScene3D, type ViewPreset3D } from '@weft/core';
import { buildWeft3DScene, initialOrbit, type OrbitState } from './threeEngine';

/**
 * Standalone browser runtime for exported artboards and headless Playwright
 * screenshots. Hydrates every `<weft-3d>` element on the page with Three.js,
 * wires live pointer orbit + wheel zoom + animation toggle + external
 * `data-3d-target` / `data-3d-view` focus buttons, and resolves
 * `window.__weft3dReady` once all initial frames have painted.
 */
declare global {
  interface Window {
    __weft3dReady?: Promise<number>;
  }
}

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

async function hydrateElement(el: HTMLElement): Promise<void> {
  const src = el.getAttribute('src') ?? undefined;
  const sceneJson = el.getAttribute('data-scene') ?? undefined;
  const cameraOrbit = el.getAttribute('camera-orbit') ?? undefined;
  const animateAttr = el.getAttribute('data-animate');
  const elementId = el.getAttribute('id') ?? undefined;
  const spec = parseScene3D(sceneJson);
  const animatable = hasAnimatedParts(spec);
  const baseOrbit = initialOrbit(cameraOrbit, spec);
  let orbit: OrbitState = { ...baseOrbit, target: [...baseOrbit.target] };
  let animating = animateAttr === 'true' || animateAttr === '';
  let elapsed = 0;
  let activeViewKey: string | null = null;
  let activeView: ViewPreset3D | null = null;
  let transitionRaf = 0;

  const canvas = document.createElement('canvas');
  canvas.style.display = 'block';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.cursor = 'grab';
  canvas.style.touchAction = 'none';
  el.textContent = '';
  el.appendChild(canvas);

  const handle = await buildWeft3DScene(el, src, sceneJson);
  const render = () => handle.render(canvas, el, orbit, elapsed, activeView?.highlight);
  render();

  const hud = document.createElement('div');
  hud.setAttribute('role', 'status');
  hud.setAttribute('aria-live', 'polite');
  Object.assign(hud.style, {
    position: 'absolute',
    left: '12px',
    top: '12px',
    maxWidth: '320px',
    padding: '10px 12px',
    borderRadius: '4px',
    border: '1px solid var(--color-outline-variant, #333e4b)',
    backgroundColor: 'color-mix(in srgb, var(--color-surface-container, #1c222a) 92%, transparent)',
    color: 'var(--color-on-surface, #e6ecf2)',
    display: 'none',
    flexDirection: 'column',
    gap: '4px',
  });
  const hudHead = document.createElement('div');
  Object.assign(hudHead.style, { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' });
  const hudTitle = document.createElement('strong');
  Object.assign(hudTitle.style, { fontSize: '13px', fontWeight: '700' });
  const hudReset = document.createElement('button');
  hudReset.type = 'button';
  hudReset.textContent = 'Full view';
  Object.assign(hudReset.style, {
    border: 'none',
    background: 'transparent',
    color: 'var(--color-primary, #7cc4f8)',
    fontSize: '11px',
    fontWeight: '600',
    cursor: 'pointer',
    padding: '0',
  });
  const hudSummary = document.createElement('p');
  Object.assign(hudSummary.style, {
    margin: '0',
    fontSize: '12px',
    lineHeight: '1.45',
    color: 'var(--color-on-surface-variant, #a9b6c4)',
  });
  hudHead.append(hudTitle, hudReset);
  hud.append(hudHead, hudSummary);
  el.appendChild(hud);

  const animateCameraTo = (to: OrbitState) => {
    cancelAnimationFrame(transitionRaf);
    const from: OrbitState = { ...orbit, target: [...orbit.target] };
    const start = performance.now();
    const duration = 450;
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const e = easeOutCubic(t);
      orbit = {
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
      render();
      if (t < 1) transitionRaf = requestAnimationFrame(step);
    };
    transitionRaf = requestAnimationFrame(step);
  };

  const selectView = (key: string | null) => {
    const nextKey = key && key === activeViewKey ? null : key;
    activeViewKey = nextKey;
    activeView = nextKey && spec?.views ? (spec.views[nextKey] ?? null) : null;
    if (elementId) {
      for (const btn of document.querySelectorAll<HTMLElement>(`[data-3d-target="${CSS.escape(elementId)}"]`)) {
        btn.setAttribute('aria-pressed', btn.getAttribute('data-3d-view') === nextKey ? 'true' : 'false');
      }
    }
    if (!activeView) {
      hud.style.display = 'none';
      animateCameraTo(baseOrbit);
      return;
    }
    hudTitle.textContent = activeView.label;
    hudSummary.textContent = activeView.summary ?? '';
    hudSummary.style.display = activeView.summary ? 'block' : 'none';
    hud.style.display = 'flex';
    const parsed = parseCameraOrbit(activeView.orbit);
    animateCameraTo({
      theta: parsed?.theta ?? baseOrbit.theta,
      phi: parsed?.phi ?? baseOrbit.phi,
      radius: parsed?.radius ?? baseOrbit.radius,
      target: activeView.target ? [...activeView.target] : [...baseOrbit.target],
      fov: baseOrbit.fov,
    });
  };

  hudReset.addEventListener('click', () => selectView(null));

  if (elementId && spec?.views) {
    document.addEventListener('click', (e) => {
      const btn = (e.target as HTMLElement | null)?.closest?.<HTMLElement>(`[data-3d-target="${CSS.escape(elementId)}"]`);
      if (!btn) return;
      const viewKey = btn.getAttribute('data-3d-view');
      if (viewKey === null) return;
      e.preventDefault();
      selectView(viewKey === '' || viewKey === 'reset' ? null : viewKey);
    });
  }

  let raf = 0;
  let last = performance.now();
  const loop = (now: number) => {
    if (!animating) return;
    elapsed += Math.min(0.1, (now - last) / 1000);
    last = now;
    render();
    raf = requestAnimationFrame(loop);
  };

  if (animatable) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = animating ? 'Pause rotation' : 'Animate engine';
    btn.setAttribute('aria-pressed', animating ? 'true' : 'false');
    Object.assign(btn.style, {
      position: 'absolute',
      left: '12px',
      bottom: '12px',
      padding: '6px 10px',
      borderRadius: '4px',
      border: '1px solid var(--color-outline-variant, #475569)',
      backgroundColor: 'var(--color-surface-container-high, #1e293b)',
      color: 'var(--color-on-surface, #f8fafc)',
      fontSize: '12px',
      fontWeight: '600',
      cursor: 'pointer',
    });
    btn.addEventListener('click', () => {
      animating = !animating;
      btn.textContent = animating ? 'Pause rotation' : 'Animate engine';
      btn.setAttribute('aria-pressed', animating ? 'true' : 'false');
      if (animating) {
        last = performance.now();
        raf = requestAnimationFrame(loop);
      } else {
        cancelAnimationFrame(raf);
      }
    });
    el.appendChild(btn);
    if (animating) raf = requestAnimationFrame(loop);
  }

  let drag: { x: number; y: number; theta: number; phi: number } | null = null;
  canvas.addEventListener('pointerdown', (e) => {
    cancelAnimationFrame(transitionRaf);
    canvas.setPointerCapture(e.pointerId);
    drag = { x: e.clientX, y: e.clientY, theta: orbit.theta, phi: orbit.phi };
  });
  canvas.addEventListener('pointermove', (e) => {
    if (!drag) return;
    orbit = {
      ...orbit,
      theta: drag.theta - (e.clientX - drag.x) * 0.008,
      phi: Math.max(0.12, Math.min(Math.PI - 0.12, drag.phi - (e.clientY - drag.y) * 0.008)),
    };
    render();
  });
  canvas.addEventListener('pointerup', () => {
    drag = null;
  });
  canvas.addEventListener(
    'wheel',
    (e) => {
      cancelAnimationFrame(transitionRaf);
      e.preventDefault();
      orbit = { ...orbit, radius: Math.max(1.2, Math.min(40, orbit.radius * (e.deltaY > 0 ? 1.08 : 0.92))) };
      render();
    },
    { passive: false },
  );

  const ro = new ResizeObserver(render);
  ro.observe(el);
}

function boot(): Promise<number> {
  const nodes = [...document.querySelectorAll<HTMLElement>('weft-3d')];
  return Promise.all(nodes.map(hydrateElement)).then(() => nodes.length);
}

window.__weft3dReady = document.readyState === 'loading'
  ? new Promise<number>((resolve) => document.addEventListener('DOMContentLoaded', () => void boot().then(resolve), { once: true }))
  : boot();
