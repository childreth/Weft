import { invokerAction, type Command } from '@weft/core';
import { scene } from '../editor/editor';
import { useEditor } from '../editor/store';
import { zoomTo } from '../editor/viewport';
import { linkedArtboard, startInteracting } from './interact';
import { nodeElements } from './elements';

/**
 * HTML attributes as React props. React drops a boolean attribute whose value
 * is "" (`open=""`, `disabled=""`), and warns about lowercase names it knows
 * in camelCase, so both are mapped. `checked` becomes `defaultChecked`: the
 * page owns the box while interacting.
 */
const BOOLEAN_PROPS: Readonly<Record<string, string>> = {
  open: 'open', disabled: 'disabled', required: 'required', multiple: 'multiple', hidden: 'hidden', inert: 'inert',
  checked: 'defaultChecked', selected: 'selected', readonly: 'readOnly',
  novalidate: 'noValidate', formnovalidate: 'formNoValidate', playsinline: 'playsInline',
};
const RENAMED_PROPS: Readonly<Record<string, string>> = {
  popovertarget: 'popoverTarget', popovertargetaction: 'popoverTargetAction', tabindex: 'tabIndex', maxlength: 'maxLength',
  minlength: 'minLength', readonly: 'readOnly', autocomplete: 'autoComplete', enterkeyhint: 'enterKeyHint', inputmode: 'inputMode',
  for: 'htmlFor', crossorigin: 'crossOrigin', srcset: 'srcSet', colspan: 'colSpan', rowspan: 'rowSpan',
};

export function reactAttributes(attributes: Readonly<Record<string, string>>): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [name, value] of Object.entries(attributes)) {
    const lower = name.toLowerCase();
    // React turns autoFocus into a focus on mount, which would steal focus while editing; an opened dialog reads this instead.
    if (lower === 'autofocus') out['data-gf-autofocus'] = '';
    else if (lower in BOOLEAN_PROPS) {
      if (value !== 'false') out[BOOLEAN_PROPS[lower]!] = true;
    } else out[RENAMED_PROPS[lower] ?? name] = value;
  }
  return out;
}

/** Whether this layer hides its content until opened: a popover, a dialog, or closed details. */
export const isRevealable = (tag: string, attributes: Readonly<Record<string, string>>) =>
  tag === 'dialog' || tag === 'details' || attributes.popover !== undefined;

/** Whether `id` is a selected layer or an ancestor of one. */
export function holdsSelection(id: string, selection: readonly string[]): boolean {
  return selection.some((sel) => {
    for (let n: string | null | undefined = sel; n; n = scene.nodes.get(n)?.parentId) if (n === id) return true;
    return false;
  });
}

const FORM_CONTROLS = new Set(['INPUT', 'SELECT', 'TEXTAREA', 'BUTTON', 'SUMMARY', 'LABEL', 'OPTION']);
const FOCUSABLE = 'button, [href], input, select, textarea, summary, [tabindex]:not([tabindex="-1"])';

/** The layer element an event happened in, by its scene id. */
function layerOf(path: EventTarget[], root: ShadowRoot): HTMLElement | null {
  for (const t of path) {
    if (t === root) break;
    if (t instanceof HTMLElement && t.dataset.gfId) return t;
  }
  return null;
}

/**
 * Behavior for one artboard's shadow root. Editing: clicks never act (a
 * summary doesn't toggle, a checkbox doesn't tick, a select doesn't open), so
 * they only select. Interacting: native behavior, except that popovers and
 * dialogs open inside the artboard (`data-gf-open`, styled by the artboard
 * CSS), since the browser's top layer would draw them over the editor at
 * 100% and a real modal would make the editor inert. Links never navigate the
 * editor; one to another artboard pans there.
 */
export function installBehaviors(root: ShadowRoot, artboardId: string): () => void {
  const interacting = () => useEditor.getState().interacting.has(artboardId);
  /** Open emulated popovers and dialogs, oldest first. */
  const open: HTMLElement[] = [];

  const elementById = (id: string): HTMLElement | null => {
    const node = [...scene.nodes.values()].find((n) => n.attributes.id === id && artboardOf(n.id) === artboardId);
    return node ? (nodeElements.get(node.id) ?? null) : null;
  };
  const artboardOf = (id: string): string | undefined => {
    let n = scene.nodes.get(id);
    while (n?.parentId) n = scene.nodes.get(n.parentId);
    return n?.id;
  };

  // Turning interact off remounts the page, so forget elements that left it.
  const prune = () => {
    for (const el of [...open]) if (!el.isConnected) open.splice(open.indexOf(el), 1);
  };

  const show = (el: HTMLElement, modal: boolean, invoker?: HTMLElement) => {
    prune();
    if (el.hasAttribute('data-gf-open')) return;
    // An auto popover closes the other auto popovers that don't contain it, like the real thing.
    if (!modal && el.getAttribute('popover') !== 'manual') {
      for (const other of [...open]) if (other.getAttribute('popover') !== 'manual' && other.hasAttribute('popover') && !other.contains(el)) hide(other);
    }
    el.setAttribute('data-gf-open', modal ? 'modal' : '');
    open.push(el);
    invoker?.setAttribute('aria-expanded', 'true');
    if (modal) (el.querySelector<HTMLElement>('[data-gf-autofocus]') ?? el.querySelector<HTMLElement>(FOCUSABLE))?.focus();
  };
  const hide = (el: HTMLElement) => {
    if (!el.hasAttribute('data-gf-open')) return;
    el.removeAttribute('data-gf-open');
    open.splice(open.indexOf(el), 1);
    const id = el.id;
    if (id) root.querySelectorAll(`[popovertarget="${CSS.escape(id)}"], [commandfor="${CSS.escape(id)}"]`).forEach((b) => b.setAttribute('aria-expanded', 'false'));
  };
  const run = (action: Command, el: HTMLElement, invoker?: HTMLElement) => {
    const isOpen = el.hasAttribute('data-gf-open');
    if (action === 'show-modal') show(el, true, invoker);
    else if (action === 'close' || action === 'request-close' || action === 'hide-popover') hide(el);
    else if (action === 'show-popover') show(el, false, invoker);
    else if (isOpen) hide(el);
    else show(el, false, invoker);
  };

  const onClick = (e: Event) => {
    const path = e.composedPath();
    const target = path[0];
    if (!interacting()) {
      if (!(target instanceof HTMLElement && target.isContentEditable)) e.preventDefault();
      return;
    }
    // A modal blocks the page behind it.
    prune();
    const modal = open.findLast((el) => el.getAttribute('data-gf-open') === 'modal');
    if (modal && !path.includes(modal)) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    const layer = layerOf(path, root);
    for (let el: HTMLElement | null = layer; el; el = el.parentElement) {
      const node = el.dataset.gfId ? scene.nodes.get(el.dataset.gfId) : undefined;
      const invoke = node && node.tag === 'button' ? invokerAction(node.attributes) : null;
      if (invoke) {
        e.preventDefault();
        const targetEl = elementById(invoke.target);
        if (targetEl) run(invoke.action, targetEl, el);
        return;
      }
      if (el.dataset.gfId && scene.nodes.get(el.dataset.gfId)?.parentId === null) break;
    }
    const link = path.find((t): t is HTMLAnchorElement => t instanceof HTMLAnchorElement && t.hasAttribute('href'));
    if (link) {
      e.preventDefault();
      const to = linkedArtboard(link.getAttribute('href')!);
      if (to && to !== artboardId) {
        startInteracting(to);
        zoomTo(useEditor.getState().camera.zoom, [to]);
      }
    }
  };

  // Light dismiss: pressing outside the newest auto popover closes it (and any it was opened from).
  const onPointerDown = (e: Event) => {
    if (!interacting()) return;
    prune();
    const path = e.composedPath();
    for (const el of [...open].reverse()) {
      if (el.getAttribute('data-gf-open') === 'modal' || el.getAttribute('popover') === 'manual') break;
      if (path.includes(el)) break;
      const invoker = path.find((t) => t instanceof HTMLElement && (t.getAttribute('popovertarget') === el.id || t.getAttribute('commandfor') === el.id));
      if (invoker) break;
      hide(el);
    }
  };

  // Escape closes the newest popover or dialog; a dialog's form with method="dialog" closes it.
  const onKeyDown = (e: Event) => {
    if (!interacting() || (e as KeyboardEvent).key !== 'Escape') return;
    prune();
    const el = open.findLast((o) => o.getAttribute('popover') !== 'manual');
    if (el) {
      e.preventDefault();
      hide(el);
    }
  };
  const onSubmit = (e: Event) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    if (interacting() && form.getAttribute('method')?.toLowerCase() === 'dialog') {
      const dialog = form.closest('dialog');
      if (dialog) hide(dialog);
    }
  };

  // Editing: a form control mustn't take focus or open (a select's list opens on mousedown).
  const onMouseDown = (e: Event) => {
    if (interacting()) return;
    const target = e.composedPath()[0];
    if (target instanceof HTMLElement && !target.isContentEditable) {
      for (const t of e.composedPath()) {
        if (t === root) break;
        if (t instanceof HTMLElement && FORM_CONTROLS.has(t.tagName)) return void e.preventDefault();
      }
    }
  };

  const listeners = [
    ['click', onClick],
    ['pointerdown', onPointerDown],
    ['keydown', onKeyDown],
    ['submit', onSubmit],
    ['mousedown', onMouseDown],
  ] as const;
  for (const [type, fn] of listeners) root.addEventListener(type, fn, true);
  return () => {
    for (const [type, fn] of listeners) root.removeEventListener(type, fn, true);
  };
}
