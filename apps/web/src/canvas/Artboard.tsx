import { memo, useLayoutEffect, useMemo, useRef, useState, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import { ARTBOARD_RESET_CSS, compileBreakpointCSS, compileTokensCSS, defaultTokens, type SceneNode } from '@weft/core';
import { scene, useNode } from '../editor/editor';
import { NodeView } from './NodeView';

const ARTBOARD_CSS = `
${compileTokensCSS(defaultTokens, ':host', (mode) => `:host([data-theme="${mode}"])`)}
:host { display: block; width: 100%; height: 100%; overflow: hidden; user-select: none; container: artboard / inline-size; }
${ARTBOARD_RESET_CSS}
[contenteditable] { user-select: text; cursor: text; outline: none; min-height: 1lh; min-width: 1ch; }
`;

/** One artboard: a canvas-positioned host with its own shadow root. */
export const Artboard = memo(function Artboard({ id }: { id: string }) {
  const node = useNode(id);
  const hostRef = useRef<HTMLDivElement>(null);
  const [root, setRoot] = useState<ShadowRoot | null>(null);

  useLayoutEffect(() => {
    const host = hostRef.current!;
    setRoot(host.shadowRoot ?? host.attachShadow({ mode: 'open' }));
  }, []);

  if (!node?.frame) return null;
  const { x, y, width, height, heightMode } = node.frame;
  const hug = heightMode === 'hug';
  return (
    <div
      className="gf-artboard"
      style={{ left: x, top: y, width, height: hug ? undefined : height }}
      data-artboard-id={id}
      data-height-mode={hug ? 'hug' : 'fixed'}
    >
      <div className="gf-artboard-label" data-artboard-label={id}>
        {node.name}
      </div>
      <div className="gf-artboard-host" ref={hostRef} data-testid={`artboard-${id}`} />
      {!hug && root && <ClipMarker root={root} />}
      {root &&
        createPortal(
          <>
            <style>{ARTBOARD_CSS}</style>
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
 * Breakpoint overrides for one artboard. They key off the artboard's own
 * width (a container query), so resizing an artboard previews the breakpoint.
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
        css = compileBreakpointCSS(subtree, (w) => `@container artboard (max-width: ${w}px)`);
      }
      return css;
    };
  }, [rootId]);
  const css = useSyncExternalStore(scene.subscribe, getCSS);
  return css ? <style data-breakpoints>{css}</style> : null;
}
