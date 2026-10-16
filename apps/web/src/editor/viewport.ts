import { scene } from './editor';
import { MAX_ZOOM, useEditor } from './store';

function canvasSize() {
  const el = document.querySelector<HTMLElement>('[data-canvas]');
  return el ? { w: el.clientWidth, h: el.clientHeight } : { w: window.innerWidth, h: window.innerHeight };
}

export function zoomBy(factor: number) {
  const { w, h } = canvasSize();
  useEditor.getState().zoomAt(w / 2, h / 2, factor);
}

export function zoomTo(zoom: number) {
  zoomBy(zoom / useEditor.getState().camera.zoom);
}

export function zoomToFit(ids?: readonly string[]) {
  const frames = (ids?.length ? ids : scene.children(null))
    .map((id) => scene.nodes.get(id)?.frame)
    .filter((f) => f !== undefined);
  if (frames.length === 0) return;
  const minX = Math.min(...frames.map((f) => f.x));
  const minY = Math.min(...frames.map((f) => f.y));
  const maxX = Math.max(...frames.map((f) => f.x + f.width));
  const maxY = Math.max(...frames.map((f) => f.y + f.height));
  const { w, h } = canvasSize();
  const pad = 64;
  const zoom = Math.min(MAX_ZOOM, (w - pad * 2) / (maxX - minX), (h - pad * 2) / (maxY - minY), 1);
  useEditor.getState().setCamera({
    zoom,
    x: (w - (maxX - minX) * zoom) / 2 - minX * zoom,
    y: (h - (maxY - minY) * zoom) / 2 - minY * zoom,
  });
}
