import { scene } from './editor';
import { nodeElements } from '../canvas/elements';
import { MAX_ZOOM, useEditor } from './store';

function canvasSize() {
  const el = document.querySelector<HTMLElement>('[data-canvas]');
  return el ? { w: el.clientWidth, h: el.clientHeight } : { w: window.innerWidth, h: window.innerHeight };
}

/** The canvas point at the middle of the view. */
export function viewCenter(): { x: number; y: number } {
  const { w, h } = canvasSize();
  const c = useEditor.getState().camera;
  return { x: (w / 2 - c.x) / c.zoom, y: (h / 2 - c.y) / c.zoom };
}

export function zoomBy(factor: number) {
  const { w, h } = canvasSize();
  useEditor.getState().zoomAt(w / 2, h / 2, factor);
}

/** Sets the zoom, centred on the nodes when given (and rendered), otherwise on the viewport's center. */
export function zoomTo(zoom: number, ids: readonly string[] = []) {
  const box = renderedBounds(ids);
  if (!box) return zoomBy(zoom / useEditor.getState().camera.zoom);
  useEditor.getState().setCamera({
    zoom,
    x: box.canvas.width / 2 - (box.min.x + box.max.x) / 2 * zoom,
    y: box.canvas.height / 2 - (box.min.y + box.max.y) / 2 * zoom,
  });
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

/** The nodes' rendered bounds in canvas coordinates (so a hug artboard's real height counts), or null. */
function renderedBounds(ids: readonly string[]) {
  const canvas = document.querySelector<HTMLElement>('[data-canvas]');
  const rects = ids.flatMap((id) => {
    const el = nodeElements.get(id);
    return el ? [el.getBoundingClientRect()] : [];
  });
  if (!canvas || rects.length === 0) return null;
  const c = canvas.getBoundingClientRect();
  const { camera } = useEditor.getState();
  const toCanvas = (x: number, y: number) => ({ x: (x - c.left - camera.x) / camera.zoom, y: (y - c.top - camera.y) / camera.zoom });
  return {
    canvas: c,
    min: toCanvas(Math.min(...rects.map((r) => r.left)), Math.min(...rects.map((r) => r.top))),
    max: toCanvas(Math.max(...rects.map((r) => r.right)), Math.max(...rects.map((r) => r.bottom))),
  };
}

/**
 * Fits the viewport to any nodes (not just artboards) using their rendered
 * boxes. `maxZoom` 1 (agent focus) never zooms in past 100%; zoom to selection
 * zooms in on small things.
 */
export function zoomToNodes(ids: readonly string[], maxZoom = 1) {
  const box = renderedBounds(ids);
  if (!box) return;
  const { canvas: c, min, max } = box;
  const pad = 96;
  const w = Math.max(1, max.x - min.x);
  const h = Math.max(1, max.y - min.y);
  const zoom = Math.min(MAX_ZOOM, maxZoom, (c.width - pad * 2) / w, (c.height - pad * 2) / h);
  useEditor.getState().setCamera({
    zoom,
    x: (c.width - w * zoom) / 2 - min.x * zoom,
    y: (c.height - h * zoom) / 2 - min.y * zoom,
  });
}

/** Zoom to selection (⇧2): fits the selected layers, or everything when nothing is selected. */
export function zoomToSelection(ids: readonly string[]) {
  if (ids.length && renderedBounds(ids)) zoomToNodes(ids, 4);
  else zoomToFit();
}
