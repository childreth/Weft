import { hasAnimatedParts, parseScene3D } from '@weft/core';
import { buildWeft3DScene, initialOrbit, type OrbitState } from './threeEngine';

/**
 * Standalone browser runtime for exported artboards and headless Playwright
 * screenshots. Hydrates every `<weft-3d>` element on the page with Three.js,
 * wires live pointer orbit + wheel zoom + animation toggle, and resolves
 * `window.__weft3dReady` once all initial frames have painted.
 */
declare global {
  interface Window {
    __weft3dReady?: Promise<number>;
  }
}

async function hydrateElement(el: HTMLElement): Promise<void> {
  const src = el.getAttribute('src') ?? undefined;
  const sceneJson = el.getAttribute('data-scene') ?? undefined;
  const cameraOrbit = el.getAttribute('camera-orbit') ?? undefined;
  const animateAttr = el.getAttribute('data-animate');
  const spec = parseScene3D(sceneJson);
  const animatable = hasAnimatedParts(spec);
  let orbit: OrbitState = initialOrbit(cameraOrbit, spec);
  let animating = animateAttr === 'true' || animateAttr === '';
  let elapsed = 0;

  const canvas = document.createElement('canvas');
  canvas.style.display = 'block';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.cursor = 'grab';
  canvas.style.touchAction = 'none';
  el.textContent = '';
  el.appendChild(canvas);

  const handle = await buildWeft3DScene(el, src, sceneJson);
  const render = () => handle.render(canvas, el, orbit, elapsed);
  render();

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
