import { useMemo, useState } from 'react';
import { COLOR_ROLES, flattenTokens, legacyColorRole, resolvedTokenValues, type FlatToken } from '@weft/core';
import { doc } from '../editor/editor';
import { useDocTokens } from '../editor/fonts';

type Source = 'theme' | 'document' | 'default';

const ROLE_ORDER = new Map<string, number>(COLOR_ROLES.map((role, i) => [role, i]));

/** A length in px (`px` or `rem`), or null: lets a scale list in size order wherever its tokens come from. */
function lengthPx(value: string): number | null {
  const m = /^(-?[\d.]+)(px|rem)$/.exec(value.trim());
  return m ? Number(m[1]) * (m[2] === 'rem' ? 16 : 1) : null;
}

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
 * Each group keeps its own order (colors in Material's, scales by size), with
 * what that level sets marked in place. `theme` is the Inspector's theme menu.
 */
export function DocumentTokens({ theme }: { theme: string }) {
  const tokens = useDocTokens();
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
    // One structure whatever the source: colors in Material's role order, scales by size, the rest as declared.
    for (const [group, list] of out) {
      const sizes = list.map((r) => lengthPx(r.resolved));
      const bySize = group !== 'color' && sizes.every((n) => n !== null);
      const rank = (r: TokenRow, i: number) => (group === 'color' ? ROLE_ORDER.get(r.label) ?? 500 : bySize ? sizes[i]! : i);
      out.set(group, list.map((r, i) => [r, rank(r, i), i] as const).sort((a, b) => a[1] - b[1] || a[2] - b[2]).map(([r]) => r));
    }
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
              {shown.map((r) => {
                const where = r.source === 'theme' ? `set in ${active}` : r.source === 'document' ? 'set in the document' : 'default';
                return (
                  <li
                    key={r.token.name}
                    className={`gf-token-item${r.source === level ? ' is-set' : ''}`}
                    data-token={r.token.name}
                    title={`var(${r.token.cssVar}) · ${where}${r.raw !== r.resolved ? ` · ${r.resolved}` : ''}`}
                  >
                    {group === 'color' && <span className="gf-swatch" style={{ background: r.resolved }} />}
                    <span className="gf-token-name">{r.label}</span>
                    <span className="gf-token-value">{r.raw}</span>
                  </li>
                );
              })}
            </ul>
          </details>
        );
      })}
    </section>
  );
}
