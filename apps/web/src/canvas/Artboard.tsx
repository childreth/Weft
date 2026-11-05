import { memo, useLayoutEffect, useMemo, useRef, useState, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import { ARTBOARD_RESET_CSS, compileBreakpointCSS, compileStateCSS, compileTokensCSS, type SceneNode } from '@weft/core';
import { scene, useNode } from '../editor/editor';
import { useEditor } from '../editor/store';
import { zoomTo } from '../editor/viewport';
import { linkedArtboard, startInteracting } from './interact';
import { useDocTokens } from '../editor/fonts';
import { NodeView } from './NodeView';

// color-scheme: the editor's own (dark) would inherit into artboards and restyle default controls, unlike an exported page.
const ARTBOARD_BASE_CSS = `
:host { display: block; width: 100%; height: 100%; overflow: hidden; user-select: none; container: artboard / inline-size; color-scheme: normal; }
:host([data-interact]) { user-select: auto; }
${ARTBOARD_RESET_CSS}
[contenteditable] { user-select: text; cursor: text; outline: none; min-height: 1lh; min-width: 1ch; }
`;

/** Tokens (including the document's font tokens), compiled for a shadow root; any frame can take a theme. */
function ArtboardStyles() {
  const tokens = useDocTokens();
  const css = useMemo(() => `${compileTokensCSS(tokens, ':host', (mode) => `[data-theme="${mode}"]`)}\n${ARTBOARD_BASE_CSS}`, [tokens]);
  return <style>{css}</style>;
}

/** One artboard: a canvas-positioned host with its own shadow root. */
export const Artboard = memo(function Artboard({ id }: { id: string }) {
  const node = useNode(id);
  const hostRef = useRef<HTMLDivElement>(null);
  const [root, setRoot] = useState<ShadowRoot | null>(null);

  const interacting = useEditor((s) => s.interacting.has(id));
  const selected = useEditor((s) => s.selection.includes(id));

  useLayoutEffect(() => {
    const host = hostRef.current!;
    setRoot(host.shadowRoot ?? host.attachShadow({ mode: 'open' }));
  }, []);

  // Links and forms never navigate the editor. In interact mode a link to another
  // artboard (#<id> or #<name>) pans to it and turns interact on there too.
  useLayoutEffect(() => {
    if (!root) return;
    const onClick = (e: Event) => {
      const link = e.composedPath().find((t): t is HTMLAnchorElement => t instanceof HTMLAnchorElement && t.hasAttribute('href'));
      if (!link) return;
      e.preventDefault();
      if (!useEditor.getState().interacting.has(id)) return;
      const target = linkedArtboard(link.getAttribute('href')!);
      if (!target || target === id) return;
      startInteracting(target);
      zoomTo(useEditor.getState().camera.zoom, [target]);
    };
    const onSubmit = (e: Event) => e.preventDefault();
    root.addEventListener('click', onClick);
    root.addEventListener('submit', onSubmit);
    return () => {
      root.removeEventListener('click', onClick);
      root.removeEventListener('submit', onSubmit);
    };
  }, [root, id]);

  if (!node?.frame) return null;
  const { x, y, width, height, heightMode } = node.frame;
  const hug = heightMode === 'hug';
  return (
    <div
      className="gf-artboard"
      style={{ left: x, top: y, width, height: hug ? undefined : height }}
      data-artboard-id={id}
      data-height-mode={hug ? 'hug' : 'fixed'}
      data-interact={interacting || undefined}
    >
      <div className="gf-artboard-label" data-artboard-label={id}>
        {node.name}
      </div>
      <button
        type="button"
        className="gf-artboard-interact"
        data-artboard-chrome=""
        data-show={selected || interacting || undefined}
        data-testid={`interact-${id}`}
        aria-pressed={interacting}
        title={interacting ? 'Stop interacting to edit this artboard' : 'Interact: use this artboard like a web page (hover, inputs, scrolling, links)'}
        onClick={() => (interacting ? useEditor.getState().setInteracting(id, false) : startInteracting(id))}
      >
        {interacting ? 'Interacting' : 'Interact'}
      </button>
      <div className="gf-artboard-host" ref={hostRef} data-testid={`artboard-${id}`} data-interact={interacting || undefined} />
      {!hug && root && <ClipMarker root={root} />}
      {root &&
        createPortal(
          <>
            <ArtboardStyles />
            <BreakpointStyles rootId={id} />
            <NodeView id={id} isRoot />
          </>,
          root,
        )}
    </div>
  );
});

/**
 * Marks a fixed-height artboard whose content is clipped at the bottom edge.
 * Content can change size without a document change (fonts, images), so it
 * watches the root and its children rather than the scene.
 */
function ClipMarker({ root }: { root: ShadowRoot }) {
  const [clipped, setClipped] = useState(false);
  useLayoutEffect(() => {
    let el: Element | null = null;
    const check = () => {
      if (el) setClipped(el.scrollHeight > el.clientHeight + 1);
    };
    const resize = new ResizeObserver(check);
    const observe = () => {
      resize.disconnect();
      el = [...root.children].find((c) => c.tagName !== 'STYLE') ?? null;
      if (!el) return setClipped(false);
      resize.observe(el);
      for (const child of el.children) resize.observe(child);
      check();
    };
    const mutations = new MutationObserver(observe);
    mutations.observe(root, { childList: true, subtree: true, characterData: true });
    observe();
    return () => {
      resize.disconnect();
      mutations.disconnect();
    };
  }, [root]);
  return clipped ? <div className="gf-artboard-clipped" data-testid="artboard-clipped" title="Content is clipped: set height to Hug to fit it" /> : null;
}

/**
 * Breakpoint and state overrides for one artboard. Breakpoints key off the
 * artboard's own width (a container query), so resizing an artboard previews
 * them. Real states (:hover…) apply only in interact mode, so editing doesn't
 * flicker through them; the Inspector's Preview forces one on a layer.
 */
function BreakpointStyles({ rootId }: { rootId: string }) {
  const getCSS = useMemo(() => {
    let nodes: typeof scene.nodes | null = null;
    let css = '';
    return () => {
      if (scene.nodes !== nodes) {
        nodes = scene.nodes;
        const subtree: SceneNode[] = [];
        const stack = [rootId];
        while (stack.length) {
          const id = stack.pop()!;
          const node = scene.nodes.get(id);
          if (node) subtree.push(node);
          stack.push(...scene.children(id));
        }
        css = [
          compileBreakpointCSS(subtree, (w) => `@container artboard (max-width: ${w}px)`),
          compileStateCSS(subtree, { scope: ':host([data-interact])', preview: (state) => `[data-gf-preview="${state}"]` }),
        ]
          .filter(Boolean)
          .join('\n');
      }
      return css;
    };
  }, [rootId]);
  const css = useSyncExternalStore(scene.subscribe, getCSS);
  return css ? <style data-breakpoints>{css}</style> : null;
}
