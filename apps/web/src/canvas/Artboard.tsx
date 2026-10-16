import { memo, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ARTBOARD_RESET_CSS, compileTokensCSS, defaultTokens } from '@gridforge/core';
import { useNode } from '../editor/editor';
import { NodeView } from './NodeView';

const ARTBOARD_CSS = `
${compileTokensCSS(defaultTokens, ':host', (mode) => `:host([data-theme="${mode}"])`)}
:host { display: block; width: 100%; height: 100%; overflow: hidden; user-select: none; }
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
  const { x, y, width, height } = node.frame;
  return (
    <div className="gf-artboard" style={{ left: x, top: y, width, height }} data-artboard-id={id}>
      <div className="gf-artboard-label" data-artboard-label={id}>
        {node.name}
      </div>
      <div className="gf-artboard-host" ref={hostRef} data-testid={`artboard-${id}`} />
      {root &&
        createPortal(
          <>
            <style>{ARTBOARD_CSS}</style>
            <NodeView id={id} isRoot />
          </>,
          root,
        )}
    </div>
  );
});
