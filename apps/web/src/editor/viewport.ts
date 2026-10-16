import { scene } from './editor';
import { nodeElements } from '../canvas/elements';
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

/** Fits the viewport to any nodes (not just artboards) using their rendered boxes. */
export function zoomToNodes(ids: readonly string[]) {
  const canvas = document.querySelector<HTMLElement>('[data-canvas]');
  const rects = ids.flatMap((id) => {
    const el = nodeElements.get(id);
    return el ? [el.getBoundingClientRect()] : [];
  });
  if (!canvas || rects.length === 0) return;
  const c = canvas.getBoundingClientRect();
  const { camera } = useEditor.getState();
  const toCanvas = (x: number, y: number) => ({ x: (x - c.left - camera.x) / camera.zoom, y: (y - c.top - camera.y) / camera.zoom });
  const min = toCanvas(Math.min(...rects.map((r) => r.left)), Math.min(...rects.map((r) => r.top)));
  const max = toCanvas(Math.max(...rects.map((r) => r.right)), Math.max(...rects.map((r) => r.bottom)));
  const pad = 96;
  const w = Math.max(1, max.x - min.x);
  const h = Math.max(1, max.y - min.y);
  const zoom = Math.min(MAX_ZOOM, (c.width - pad * 2) / w, (c.height - pad * 2) / h, 1);
  useEditor.getState().setCamera({
    zoom,
    x: (c.width - w * zoom) / 2 - min.x * zoom,
    y: (c.height - h * zoom) / 2 - min.y * zoom,
  });
}
