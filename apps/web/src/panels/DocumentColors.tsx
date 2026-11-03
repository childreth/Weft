import { useMemo, useState, useSyncExternalStore } from 'react';
import { DEFAULT_SEED, SCHEME_VARIANT_NAMES, type SchemeVariant } from '@weft/core';
import { doc, run, scene } from '../editor/editor';
import { useDocTokens } from '../editor/fonts';
import { Row } from './controls';

/** The roles most designs use, shown as swatches (they resolve in the Inspector's token scope). */
const SWATCH_ROLES = ['primary', 'primary-container', 'secondary', 'tertiary', 'surface', 'surface-container', 'on-surface', 'outline-variant'];

const variantLabel = (v: string) => v.charAt(0).toUpperCase() + v.slice(1).replace(/-/g, ' ');

/**
 * Material color roles from one seed color, like Material Theme Builder: the
 * document's colors and its dark theme, or, given a name, a new theme pair.
 */
export function DocumentColors() {
  const tokens = useDocTokens(); // re-render (and re-resolve the swatches) when the roles change
  const [seed, setSeed] = useState(DEFAULT_SEED);
  const [variant, setVariant] = useState<SchemeVariant>('tonal-spot');
  const [theme, setTheme] = useState('');
  const name = theme.trim();
  return (
    <section className="gf-section" data-testid="document-colors">
      <header className="gf-section-header">
        <h2>Colors</h2>
      </header>
      <div className="gf-role-swatches">
        {SWATCH_ROLES.map((role) => (
          <span key={role} className="gf-role-swatch" title={`var(--color-${role})`} style={{ background: `var(--color-${role})` }} />
        ))}
      </div>
      <Row label="Seed">
        <input type="color" className="gf-seed-input" aria-label="Seed color" value={seed} onChange={(e) => setSeed(e.target.value)} />
      </Row>
      <Row label="Variant">
        <select className="gf-input" aria-label="Scheme variant" value={variant} onChange={(e) => setVariant(e.target.value as SchemeVariant)}>
          {SCHEME_VARIANT_NAMES.map((v) => (
            <option key={v} value={v}>
              {variantLabel(v)}
            </option>
          ))}
        </select>
      </Row>
      <Row label="Name">
        <input
          className="gf-input"
          aria-label="New theme name"
          placeholder="New theme (optional)"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        />
      </Row>
      <button
        type="button"
        className="gf-tool"
        onClick={() => run(() => doc.setSeedColor(seed, { theme: name || undefined, variant }))}
        title="Generates every Material color role, light and dark, from the seed"
      >
        {name ? `Create ${name} and ${name}-dark` : 'Apply to document'}
      </button>
      <LegacyColors tokens={tokens} />
    </section>
  );
}

/**
 * Offers moving a document off Weft's first color names (`var(--color-text)`)
 * onto the roles, while any layer or theme still uses them. Their colors
 * don't show in the role pickers, and a theme that sets them hides its palette.
 */
function LegacyColors({ tokens }: { tokens: unknown }) {
  const nodes = useSyncExternalStore(scene.subscribe, () => scene.nodes);
  const usage = useMemo(() => doc.legacyColorUsage(), [nodes, tokens]);
  const [message, setMessage] = useState<string | null>(null);
  if (usage.layers === 0 && usage.overrides === 0) return message ? <p className="gf-font-meta" data-testid="legacy-colors-result">{message}</p> : null;
  const parts = [usage.layers && `${usage.layers} layer${usage.layers === 1 ? '' : 's'}`, usage.overrides && `${usage.overrides} theme value${usage.overrides === 1 ? '' : 's'}`].filter(Boolean);
  return (
    <div className="gf-legacy-colors" data-testid="legacy-colors">
      <p className="gf-font-meta">
        {parts.join(' and ')} use old color names (text, accent, border…). The role pickers can't show them.
      </p>
      <button
        type="button"
        className="gf-tool"
        title="Moves old color names onto the Material roles they stand for. Layers using them keep their colors; layers already using a role in that theme take the theme's color. Undo reverts it."
        onClick={() =>
          run(() => {
            const result = doc.migrateLegacyColors();
            const plural = (n: number, word: string) => `${n} ${word}${n === 1 ? '' : 's'}`;
            const moved = `Moved ${plural(result.layers, 'layer')}${result.themes.length ? ` and ${result.themes.join(', ')}` : ''} onto the roles.`;
            const restyled = result.restyled ? ` ${plural(result.restyled, 'layer')} already using a role now take${result.restyled === 1 ? 's' : ''} the theme's color.` : '';
            const kept = result.skipped.length ? ` Kept ${result.skipped.map((s) => `${s.name} (${s.reason})`).join('; ')}.` : '';
            setMessage(moved + restyled + kept);
          })
        }
      >
        Update color names
      </button>
      {message && <p className="gf-font-meta" data-testid="legacy-colors-result">{message}</p>}
    </div>
  );
}
