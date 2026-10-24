import { useMemo, useState } from 'react';
import {
  ARTBOARD_PRESETS,
  BREAKPOINTS,
  STYLE_PROPS,
  compileTokensCSS,
  getStyleMeta,
  tagsFor,
  type ArtboardFrame,
  type BreakpointId,
  type FlatToken,
  type SemanticTag,
  type StyleProp,
} from '@weft/core';
import { artboardHeight } from '../canvas/elements';
import { doc, history, recordHugHeight, run, updateArtboardFrame, useNode } from '../editor/editor';
import { useDocFonts, useDocTokens, useFlatTokens } from '../editor/fonts';
import { exportArtboard } from '../editor/files';
import { useEditor } from '../editor/store';
import { zoomToFit } from '../editor/viewport';
import { AlignSection } from './AlignSection';
import { CommitInput, Row, Section } from './controls';
import { DocumentFonts, FontPicker, fontForValue, fontVar } from './FontPicker';
import { StylePicker, styleLabel } from './StylePicker';

const PRESET_SUFFIX = new RegExp(` — (${ARTBOARD_PRESETS.map((p) => p.label).join('|')})$`);

/** Copies an artboard at a preset's width beside the original, then shows both. */
function cloneAtPreset(id: string, name: string, preset: (typeof ARTBOARD_PRESETS)[number]) {
  history.beginGesture();
  const copy = run(() =>
    doc.duplicateNode(id, { name: `${name.replace(PRESET_SUFFIX, '')} — ${preset.label}`, frame: { width: preset.width } }),
  );
  requestAnimationFrame(() => {
    if (copy) recordHugHeight(copy);
    history.endGesture();
  });
  if (!copy) return;
  useEditor.getState().select([copy]);
  zoomToFit([id, copy]);
}


function tokenOptions(tokens: readonly FlatToken[], prop: StyleProp) {
  const groups = getStyleMeta(prop).tokenGroups ?? [];
  return tokens.filter((t) => groups.includes(t.path[0]!));
}

export function Inspector() {
  const selection = useEditor((s) => s.selection);
  const tokens = useDocTokens();
  // Token values resolve inside the panel too, for swatches and font samples.
  const scopeCSS = useMemo(() => compileTokensCSS(tokens, '.gf-token-scope'), [tokens]);
  return (
    <aside className="gf-panel gf-inspector gf-token-scope" data-testid="inspector">
      <style>{scopeCSS}</style>
      <TokenDatalists />
      {selection.length === 0 && (
        <>
          <p className="gf-empty">Select a layer to inspect it.</p>
          <DocumentFonts />
        </>
      )}
      {selection.length > 0 && <AlignSection ids={selection} />}
      {selection.length > 1 && <p className="gf-empty">{selection.length} layers selected</p>}
      {selection.length === 1 && <NodeInspector key={selection[0]} id={selection[0]!} />}
    </aside>
  );
}

function TokenDatalists() {
  const tokens = useFlatTokens();
  const props = useMemo(() => STYLE_PROPS.filter((p) => getStyleMeta(p).tokenGroups), []);
  return (
    <>
      {props.map((prop) => (
        <datalist key={prop} id={`tokens-${prop}`}>
          {tokenOptions(tokens, prop).map((t) => (
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
    if (Number.isFinite(n)) updateArtboardFrame(id, { [key]: n });
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
          <div className="gf-presets" role="group" aria-label="Height">
            {(['fixed', 'hug'] as const).map((mode) => (
              <button
                key={mode}
                type="button"
                className={`gf-input gf-preset${(node.frame!.heightMode ?? 'fixed') === mode ? ' is-active' : ''}`}
                aria-pressed={(node.frame!.heightMode ?? 'fixed') === mode}
                title={mode === 'hug' ? 'Height fits the content' : 'Fixed height; overflowing content is clipped'}
                onClick={() =>
                  updateArtboardFrame(
                    id,
                    mode === 'hug' ? { heightMode: 'hug' } : { height: artboardHeight(id) ?? node.frame!.height, heightMode: 'fixed' },
                  )
                }
              >
                {mode === 'hug' ? 'Hug height' : 'Fixed height'}
              </button>
            ))}
          </div>
          <div className="gf-presets" role="group" aria-label="Preview width">
            {ARTBOARD_PRESETS.map((p) => (
              <button
                key={p.label}
                type="button"
                className={`gf-input gf-preset${node.frame!.width === p.width ? ' is-active' : ''}`}
                title={`Resize to ${p.width}px`}
                onClick={() => updateArtboardFrame(id, { width: p.width })}
              >
                {p.label}
              </button>
            ))}
          </div>
          <div className="gf-presets" role="group" aria-label="Clone at width">
            {ARTBOARD_PRESETS.filter((p) => p.width !== node.frame!.width).map((p) => (
              <button
                key={p.label}
                type="button"
                className="gf-input gf-preset"
                title={`Duplicate this artboard at ${p.width}px, beside it`}
                onClick={() => cloneAtPreset(id, node.name, p)}
              >
                + {p.label}
              </button>
            ))}
          </div>
          <div className="gf-presets" role="group" aria-label="Export">
            <button
              type="button"
              className="gf-input gf-preset"
              title="Download this artboard as a standalone HTML page"
              onClick={() => exportArtboard(id)}
            >
              Export HTML
            </button>
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
  const tokens = useFlatTokens();
  const present = STYLE_PROPS.filter((p) => styles[p] !== undefined);
  const missing = STYLE_PROPS.filter((p) => styles[p] === undefined);
  return (
    <Section
      title={title}
      actions={
        <StylePicker
          props={missing}
          label={breakpoint ? `Add ${breakpoint} override` : 'Add style property'}
          onPick={(prop) => {
            const meta = getStyleMeta(prop);
            const initial =
              initialFor?.(prop) ??
              meta.options?.[0] ??
              (tokenOptions(tokens, prop)[0] ? `var(${tokenOptions(tokens, prop)[0]!.cssVar})` : 'auto');
            set(prop, initial);
          }}
        />
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
  const [picking, setPicking] = useState(false);
  const fonts = useDocFonts();
  const row = (
    <div className="gf-style-row" data-style-prop={prop}>
      <span className="gf-row-label" title={prop}>{styleLabel(prop)}</span>
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
      {prop === 'fontFamily' && (
        <button
          className={`gf-icon-btn${picking ? ' is-active' : ''}`}
          aria-label="Choose a font"
          aria-expanded={picking}
          title={fontForValue(value, fonts)?.family ?? 'Choose a Google Font'}
          onClick={() => setPicking((p) => !p)}
        >
          Aa
        </button>
      )}
      <button className="gf-icon-btn" aria-label={`Remove ${prop}`} onClick={() => set(null)}>
        ×
      </button>
    </div>
  );
  if (prop !== 'fontFamily' || !picking) return row;
  return (
    <>
      {row}
      <FontPicker
        label="Search fonts"
        autoFocus
        onPick={(family) => {
          set(fontVar(family));
          setPicking(false);
        }}
      />
    </>
  );
}
