/** Live DOM element for each node id, used for hit-testing, overlays and layout queries. */
export const nodeElements = new Map<string, HTMLElement>();

/** Rendered height of an artboard in canvas px (unaffected by zoom), or undefined if not mounted. */
export function artboardHeight(id: string): number | undefined {
  const el = document.querySelector<HTMLElement>(`[data-artboard-id="${CSS.escape(id)}"]`);
  return el ? el.offsetHeight : undefined;
}
