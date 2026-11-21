import { parseScene3D } from '@weft/core';
import { initialOrbit, renderWeft3D, type OrbitState } from './threeEngine';

/**
 * Standalone browser runtime for exported artboards and headless Playwright
 * screenshots. Hydrates every `<weft-3d>` element on the page with Three.js,
 * wires live pointer orbit + wheel zoom, and resolves `window.__weft3dReady`
 * once all initial frames have painted.
 */
declare global {
  interface Window {
    __weft3dReady?: Promise<number>;
  }
}

function hydrateElement(el: HTMLElement): Promise<void> {
  const src = el.getAttribute('src') ?? undefined;
  const sceneJson = el.getAttribute('data-scene') ?? undefined;
  const cameraOrbit = el.getAttribute('camera-orbit') ?? undefined;
  const spec = parseScene3D(sceneJson);
  let orbit: OrbitState = initialOrbit(cameraOrbit, spec);

  const canvas = document.createElement('canvas');
  canvas.style.display = 'block';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.cursor = 'grab';
  canvas.style.touchAction = 'none';
  el.textContent = '';
  el.appendChild(canvas);

  const render = () => renderWeft3D({ canvas, hostEl: el, src, sceneJson, orbit });

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
    void render();
  });
  canvas.addEventListener('pointerup', () => {
    drag = null;
  });
  canvas.addEventListener(
    'wheel',
    (e) => {
      e.preventDefault();
      orbit = { ...orbit, radius: Math.max(1.2, Math.min(40, orbit.radius * (e.deltaY > 0 ? 1.08 : 0.92))) };
      void render();
    },
    { passive: false },
  );

  const ro = new ResizeObserver(() => void render());
  ro.observe(el);
  return render();
}

function boot(): Promise<number> {
  const nodes = [...document.querySelectorAll<HTMLElement>('weft-3d')];
  return Promise.all(nodes.map(hydrateElement)).then(() => nodes.length);
}

window.__weft3dReady = document.readyState === 'loading'
  ? new Promise<number>((resolve) => document.addEventListener('DOMContentLoaded', () => void boot().then(resolve), { once: true }))
  : boot();
