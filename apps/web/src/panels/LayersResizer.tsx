import { useEffect, useRef, useState } from 'react';

export const LAYERS_MIN_WIDTH = 240;
export const LAYERS_MAX_WIDTH = LAYERS_MIN_WIDTH + 100;
const STORAGE_KEY = 'weft:layers-width';

const clamp = (w: number) => Math.min(LAYERS_MAX_WIDTH, Math.max(LAYERS_MIN_WIDTH, Math.round(w)));

function storedWidth(): number {
  try {
    const w = Number(localStorage.getItem(STORAGE_KEY));
    return w ? clamp(w) : LAYERS_MIN_WIDTH;
  } catch {
    return LAYERS_MIN_WIDTH;
  }
}

/** Drag handle on the layers panel's right edge; sets `--layers-width` on the app grid. */
export function LayersResizer() {
  const ref = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const el = ref.current!;
    const app = el.parentElement!;
    let width = storedWidth();
    app.style.setProperty('--layers-width', `${width}px`);
    let start: { x: number; width: number } | null = null;

    const onDown = (e: PointerEvent) => {
      e.preventDefault();
      start = { x: e.clientX, width };
      el.setPointerCapture(e.pointerId);
      setDragging(true);
    };
    const onMove = (e: PointerEvent) => {
      if (!start) return;
      width = clamp(start.width + e.clientX - start.x);
      app.style.setProperty('--layers-width', `${width}px`);
    };
    const onUp = () => {
      if (!start) return;
      start = null;
      setDragging(false);
      try {
        localStorage.setItem(STORAGE_KEY, String(width));
      } catch {
        // Width just won't persist.
      }
    };
    el.addEventListener('pointerdown', onDown);
    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerup', onUp);
    el.addEventListener('pointercancel', onUp);
    return () => {
      el.removeEventListener('pointerdown', onDown);
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerup', onUp);
      el.removeEventListener('pointercancel', onUp);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="gf-layers-resizer"
      role="separator"
      aria-orientation="vertical"
      aria-label="Resize layers panel"
      data-testid="layers-resizer"
      data-dragging={dragging || undefined}
    />
  );
}
