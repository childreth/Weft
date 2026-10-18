import { useMemo } from 'react';
import {
  ARTBOARD_PRESETS,
  BREAKPOINTS,
  STYLE_PROPS,
  compileTokensCSS,
  defaultTokens,
  flattenTokens,
  getStyleMeta,
  tagsFor,
  type ArtboardFrame,
  type BreakpointId,
  type SemanticTag,
  type StyleProp,
} from '@weft/core';
import { doc, run, useNode } from '../editor/editor';
import { useEditor } from '../editor/store';
import { CommitInput, Row, Section } from './controls';

const TOKENS = flattenTokens(defaultTokens.tokens);
const TOKEN_SCOPE_CSS = compileTokensCSS(defaultTokens, '.gf-token-scope');

const label = (prop: string) => prop.replace(/([A-Z])/g, ' $1').replace(/^./, (c) => c.toUpperCase());

function tokenOptions(prop: StyleProp) {
  const groups = getStyleMeta(prop).tokenGroups ?? [];
  return TOKENS.filter((t) => groups.includes(t.path[0]!));
}

export function Inspector() {
  const selection = useEditor((s) => s.selection);
  return (
    <aside className="gf-panel gf-inspector gf-token-scope" data-testid="inspector">
      <style>{TOKEN_SCOPE_CSS}</style>
      <TokenDatalists />
      {selection.length === 0 && <p className="gf-empty">Select a layer to inspect it.</p>}
      {selection.length > 1 && <p className="gf-empty">{selection.length} layers selected</p>}
      {selection.length === 1 && <NodeInspector key={selection[0]} id={selection[0]!} />}
    </aside>
  );
}

function TokenDatalists() {
  const props = useMemo(() => STYLE_PROPS.filter((p) => getStyleMeta(p).tokenGroups), []);
  return (
    <>
      {props.map((prop) => (
        <datalist key={prop} id={`tokens-${prop}`}>
          {tokenOptions(prop).map((t) => (
            <option key={t.cssVar} value={`var(${t.cssVar})`} label={t.value} />
          ))}
        </datalist>
      ))}
    </>
  );
}

function NodeInspector({ id }: { id: string }) {
  const node = useNode(id);
  if (!node) return null;

  const setFrame = (key: keyof ArtboardFrame, value: string) => {
    const n = Number(value);
    if (Number.isFinite(n)) run(() => doc.updateNode(id, { frame: { [key]: n } }));
  };

  return (
    <>
      <Section title="Layer">
        <Row label="Name">
          <CommitInput label="Name" value={node.name} onCommit={(name) => run(() => doc.updateNode(id, { name }))} />
        </Row>
        <Row label="Tag">
          <select
            className="gf-input"
            aria-label="Tag"
            value={node.tag}
            onChange={(e) => run(() => doc.updateNode(id, { tag: e.target.value as SemanticTag }))}
          >
            {(tagsFor(node.type).includes(node.tag) ? tagsFor(node.type) : [node.tag, ...tagsFor(node.type)]).map((t) => (
              <option key={t} value={t}>{`<${t}>`}</option>
            ))}
          </select>
        </Row>
        <p className="gf-meta">{node.id}</p>
      </Section>

      {node.frame && (
        <Section title="Artboard">
          <div className="gf-grid-2">
            {(['x', 'y', 'width', 'height'] as const).map((key) => (
              <Row key={key} label={key === 'width' ? 'W' : key === 'height' ? 'H' : key.toUpperCase()}>
                <CommitInput label={key} numeric value={String(node.frame![key])} onCommit={(v) => setFrame(key, v)} />
              </Row>
            ))}
          </div>
          <div className="gf-presets" role="group" aria-label="Preview width">
            {ARTBOARD_PRESETS.map((p) => (
              <button
                key={p.label}
                type="button"
                className={`gf-input gf-preset${node.frame!.width === p.width ? ' is-active' : ''}`}
                title={`Resize to ${p.width}px`}
                onClick={() => run(() => doc.updateNode(id, { frame: { width: p.width } }))}
              >
                {p.label}
              </button>
            ))}
          </div>
        </Section>
      )}

      {node.type === 'text' && (
        <Section title="Text">
          <CommitInput
            label="Text content"
            multiline
            value={node.text ?? ''}
            onCommit={(text) => run(() => doc.updateNode(id, { text }))}
          />
        </Section>
      )}

      <StyleSection title="Styles" styles={node.styles} set={(prop, v) => run(() => doc.updateNode(id, { styles: { [prop]: v } }))} />

      {BREAKPOINTS.map((bp) => (
        <StyleSection
          key={bp.id}
          title={`${bp.label} ≤ ${bp.maxWidth}px`}
          breakpoint={bp.id}
          styles={node.breakpoints?.[bp.id] ?? {}}
          set={(prop, v) => run(() => doc.updateNode(id, { breakpoints: { [bp.id]: { [prop]: v } } }))}
          initialFor={(prop) => node.styles[prop]}
        />
      ))}
    </>
  );
}

type SetStyle = (prop: StyleProp, value: string | null) => void;

function StyleSection({
  title,
  styles,
  set,
  breakpoint,
  initialFor,
}: {
  title: string;
  styles: Partial<Record<StyleProp, string>>;
  set: SetStyle;
  breakpoint?: BreakpointId;
  /** Starting value for a newly added property (breakpoints start from the base style). */
  initialFor?: (prop: StyleProp) => string | undefined;
}) {
  const present = STYLE_PROPS.filter((p) => styles[p] !== undefined);
  const missing = STYLE_PROPS.filter((p) => styles[p] === undefined);
  return (
    <Section
      title={title}
      actions={
        <select
          className="gf-input gf-add-style"
          aria-label={breakpoint ? `Add ${breakpoint} override` : 'Add style property'}
          value=""
          onChange={(e) => {
            const prop = e.target.value as StyleProp;
            const meta = getStyleMeta(prop);
            const initial =
              initialFor?.(prop) ??
              meta.options?.[0] ??
              (tokenOptions(prop)[0] ? `var(${tokenOptions(prop)[0]!.cssVar})` : 'auto');
            set(prop, initial);
          }}
        >
          <option value="">+ Add</option>
          {missing.map((p) => (
            <option key={p} value={p}>{label(p)}</option>
          ))}
        </select>
      }
    >
      <div data-breakpoint={breakpoint ?? 'base'}>
        {present.length === 0 && <p className="gf-empty">{breakpoint ? 'No overrides' : 'No styles'}</p>}
        {present.map((prop) => (
          <StyleRow key={prop} prop={prop} value={styles[prop]!} set={(v) => set(prop, v)} />
        ))}
      </div>
    </Section>
  );
}

function StyleRow({ prop, value, set }: { prop: StyleProp; value: string; set: (v: string | null) => void }) {
  const meta = getStyleMeta(prop);
  const bound = value.includes('var(--');
  return (
    <div className="gf-style-row" data-style-prop={prop}>
      <span className="gf-row-label" title={prop}>{label(prop)}</span>
      {meta.group === 'fill' || prop === 'color' || prop === 'borderColor' ? (
        <span className="gf-swatch" style={{ background: value }} />
      ) : null}
      {meta.options ? (
        <select className="gf-input" aria-label={prop} value={value} onChange={(e) => set(e.target.value)}>
          {(meta.options.includes(value) ? meta.options : [value, ...meta.options]).map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      ) : (
        <CommitInput label={prop} value={value} list={meta.tokenGroups ? `tokens-${prop}` : undefined} onCommit={set} />
      )}
      {meta.tokenGroups && (
        <span
          className={`gf-badge ${bound ? 'gf-badge-token' : 'gf-badge-raw'}`}
          title={bound ? 'Bound to a design token' : 'Raw value — not bound to a token'}
        >
          {bound ? 'token' : 'raw'}
        </span>
      )}
      <button className="gf-icon-btn" aria-label={`Remove ${prop}`} onClick={() => set(null)}>
        ×
      </button>
    </div>
  );
}
