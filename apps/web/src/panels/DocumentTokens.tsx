import { useMemo, useState } from 'react';
import { COLOR_ROLES, flattenTokens, legacyColorRole, resolvedTokenValues, type FlatToken } from '@weft/core';
import { doc } from '../editor/editor';
import { useDocTokens } from '../editor/fonts';
import { Row } from './controls';

type Source = 'theme' | 'document' | 'default';

const ROLE_ORDER = new Map<string, number>(COLOR_ROLES.map((role, i) => [role, i]));
const SOURCE_ORDER: Record<Source, number> = { theme: 0, document: 1, default: 2 };

interface TokenRow {
  token: FlatToken;
  label: string;
  /** The value as written: a literal, or `→ primary` for an alias. */
  raw: string;
  resolved: string;
  source: Source;
}

/** A token's value as written, with an alias shown as the token it points at. */
function rawLabel(value: string): string {
  const ref = /^var\(--([\w-]+)\)$/.exec(value.trim())?.[1];
  return ref ? `→ ${ref.replace(/^(color|font-family|font-size|font-weight|line-height|letter-spacing|space|radius|shadow)-/, '')}` : value;
}

/**
 * Every token for the document or one theme, like a stylesheet's
 * `[data-theme]` block: what each resolves to there, and where it comes from.
 * What that level sets is marked and listed first in each group.
 */
export function DocumentTokens() {
  const tokens = useDocTokens();
  const [theme, setTheme] = useState('');
  const [query, setQuery] = useState('');
  const [onlySet, setOnlySet] = useState(false);
  const themes = Object.keys(tokens.modes ?? {}).sort();
  const active = themes.includes(theme) ? theme : '';

  const groups = useMemo(() => {
    const resolved = resolvedTokenValues(tokens, active || undefined);
    const themed = new Map(active ? flattenTokens(tokens.modes?.[active] ?? {}).map((t) => [t.name, t.value]) : []);
    const own = doc.getTokens();
    const rows: TokenRow[] = flattenTokens(tokens.tokens).flatMap((t) => {
      const source: Source = themed.has(t.name) ? 'theme' : t.name in own ? 'document' : 'default';
      // Old color names are aliases of roles: listed only where something still sets them.
      if (legacyColorRole(t.name) && source === 'default') return [];
      const value = themed.get(t.name) ?? t.value;
      return [{ token: t, label: t.path.slice(1).join('.'), raw: rawLabel(value), resolved: resolved.get(t.name) ?? value, source }];
    });
    const out = new Map<string, TokenRow[]>();
    for (const row of rows) {
      const group = row.token.path[0]!;
      out.set(group, [...(out.get(group) ?? []), row]);
    }
    // By where each comes from (the theme, the document, Weft's defaults); colors list the Material roles (in Material's order) first.
    const rank = (r: TokenRow) => SOURCE_ORDER[r.source] * 1000 + (ROLE_ORDER.get(r.label) ?? 500);
    for (const [group, list] of out) out.set(group, [...list].sort((a, b) => rank(a) - rank(b) || (group === 'color' ? 0 : list.indexOf(a) - list.indexOf(b))));
    return out;
  }, [tokens, active]);

  const level: Source = active ? 'theme' : 'document';
  const q = query.trim().toLowerCase();
  const setCount = [...groups.values()].flat().filter((r) => r.source === level).length;

  return (
    <section className="gf-section" data-testid="document-tokens">
      <header className="gf-section-header">
        <h2>Tokens</h2>
      </header>
      <Row label="For">
        <select className="gf-input" aria-label="Tokens for" value={active} onChange={(e) => setTheme(e.target.value)}>
          <option value="">Document</option>
          {themes.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </Row>
      <div className="gf-token-filter">
        <input className="gf-input" aria-label="Filter tokens" placeholder="Filter tokens" value={query} spellCheck={false} onChange={(e) => setQuery(e.target.value)} />
        <label className="gf-token-only" title={active ? `Only the tokens ${active} sets` : "Only the document's own tokens"}>
          <input type="checkbox" checked={onlySet} onChange={(e) => setOnlySet(e.target.checked)} />
          Set here ({setCount})
        </label>
      </div>
      {[...groups].map(([group, rows]) => {
        const shown = rows.filter((r) => (!onlySet || r.source === level) && (!q || `${group}.${r.label}`.toLowerCase().includes(q)));
        if (shown.length === 0) return null;
        const set = rows.filter((r) => r.source === level).length;
        return (
          <details key={`${group}:${active}`} className="gf-token-group" open={group === 'color' || !!q || onlySet}>
            <summary>
              {group}
              <span className="gf-font-meta">
                {shown.length}
                {set > 0 && ` · ${set} set`}
              </span>
            </summary>
            <ul className="gf-token-list" aria-label={`${group} tokens`}>
              {shown.map((r, i) => {
                const where = r.source === 'theme' ? `set in ${active}` : r.source === 'document' ? 'set in the document' : 'default';
                // A heading where the source changes: what's set here, then what's inherited.
                const heading =
                  i === 0 || shown[i - 1]!.source !== r.source
                    ? r.source === 'theme'
                      ? `Set in ${active}`
                      : r.source === 'document'
                        ? active ? 'From the document (same in every theme)' : "The document's own"
                        : active ? "Weft's defaults (same in every theme)" : "Weft's defaults"
                    : null;
                return [
                  heading && (
                    <li key={`${r.source}-heading`} className="gf-token-source" role="presentation">
                      {heading}
                    </li>
                  ),
                  <li
                    key={r.token.name}
                    className={`gf-token-item${r.source === level ? ' is-set' : ''}`}
                    data-token={r.token.name}
                    title={`var(${r.token.cssVar}) · ${where}${r.raw !== r.resolved ? ` · ${r.resolved}` : ''}`}
                  >
                    {group === 'color' && <span className="gf-swatch" style={{ background: r.resolved }} />}
                    <span className="gf-token-name">{r.label}</span>
                    <span className="gf-token-value">{r.raw}</span>
                  </li>,
                ];
              })}
            </ul>
          </details>
        );
      })}
    </section>
  );
}
