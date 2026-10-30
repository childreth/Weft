import { useState } from 'react';
import { DEFAULT_SEED, SCHEME_VARIANT_NAMES, type SchemeVariant } from '@weft/core';
import { doc, run } from '../editor/editor';
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
  useDocTokens(); // re-render (and re-resolve the swatches) when the roles change
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
      <Row label="Theme">
        <input
          className="gf-input"
          aria-label="New theme name"
          placeholder="Document colors"
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
    </section>
  );
}
