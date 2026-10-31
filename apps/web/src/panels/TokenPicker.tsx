import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from 'react';
import { COLOR_ROLES, LEGACY_COLOR_ROLES, getStyleMeta, type FlatToken, type StyleProp } from '@weft/core';
import { useFlatTokens } from '../editor/fonts';

interface Option {
  token: FlatToken;
  label: string;
  group: 'roles' | 'other';
  /** Shown on the right: the resolved value, or the role's text pairing. */
  meta: string;
}

const ROLE_ORDER = new Map<string, number>(COLOR_ROLES.map((r, i) => [r, i]));
const hasOn = new Set<string>(COLOR_ROLES.filter((r) => r.startsWith('on-')).map((r) => r.slice(3)));

/** A token's value with references (`{alias}` or `var(--alias)`) followed, for display. */
function resolve(value: string, byRef: ReadonlyMap<string, string>, depth = 0): string {
  const ref = /^\{([^}]+)\}$|^var\((--[\w-]+)\)$/.exec(value.trim());
  const next = ref ? byRef.get(ref[1] ?? ref[2]!) : undefined;
  return next !== undefined && depth < 8 ? resolve(next, byRef, depth + 1) : value;
}

/** A font stack's first family, unquoted: `"Anton", system-ui` → `Anton`. */
const firstFamily = (stack: string) => stack.split(',')[0]!.trim().replace(/^["']|["']$/g, '');

/** The text role to pair with a background role (`primary` → `on-primary`), if Material has one. */
function onRole(role: string): string | undefined {
  if (hasOn.has(role)) return `on-${role}`;
  if (role.startsWith('surface') || role === 'background') return role === 'background' ? 'on-background' : 'on-surface';
  if (role === 'inverse-surface') return 'inverse-on-surface';
  return undefined;
}

export function tokenOptions(tokens: readonly FlatToken[], prop: StyleProp): FlatToken[] {
  const groups = getStyleMeta(prop).tokenGroups ?? [];
  return tokens.filter((t) => groups.includes(t.path[0]!));
}

/**
 * Searchable list of the tokens a style property can use. Colors list the
 * Material roles first (in Material's order), then the document's other
 * colors; the old role names are aliases and stay out of the list. Swatches
 * resolve in the Inspector's token scope, so they show the selection's theme.
 * Typing a value that isn't a token offers it as a raw value.
 */
export function TokenPicker({ prop, value, onPick, onClose }: { prop: StyleProp; value: string; onPick(value: string): void; onClose(): void }) {
  const tokens = useFlatTokens();
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const [showOther, setShowOther] = useState(false);
  const isColor = getStyleMeta(prop).tokenGroups?.includes('color') ?? false;
  const listRef = useRef<HTMLUListElement>(null);

  const all = useMemo<Option[]>(() => {
    const byRef = new Map(tokens.flatMap((t) => [[t.name, t.value], [t.cssVar, t.value]] as const));
    const isFont = prop === 'fontFamily';
    const options = tokenOptions(tokens, prop)
      .filter((t) => !(t.path[0] === 'color' && t.path.length === 2 && t.path[1]! in LEGACY_COLOR_ROLES))
      .map((t): Option => {
        const label = t.path.slice(1).join('.');
        const role = isColor && ROLE_ORDER.has(label);
        const pair = role && prop === 'backgroundColor' ? onRole(label) : undefined;
        return { token: t, label, group: role ? 'roles' : 'other', meta: pair ? `text: ${pair}` : isColor ? '' : isFont ? firstFamily(resolve(t.value, byRef)) : resolve(t.value, byRef) };
      });
    if (!isColor) return options;
    const roles = options.filter((o) => o.group === 'roles').sort((a, b) => ROLE_ORDER.get(a.label)! - ROLE_ORDER.get(b.label)!);
    return [...roles, ...options.filter((o) => o.group === 'other')];
  }, [tokens, prop, isColor]);

  const q = query.trim().toLowerCase();
  const matches = q ? all.filter((o) => o.label.toLowerCase().includes(q)) : all;
  // Colors keep the long tail (primitives, document colors) folded until asked for or searched.
  const folded = isColor && !q && !showOther;
  const visible = folded ? matches.filter((o) => o.group === 'roles') : matches;
  const hidden = matches.length - visible.length;
  const raw = q && !visible.some((o) => o.label.toLowerCase() === q) ? query.trim() : null;
  const count = visible.length + (raw ? 1 : 0);

  useEffect(() => {
    listRef.current?.querySelector('.is-active')?.scrollIntoView({ block: 'nearest' });
  }, [active]);

  const pickAt = (i: number) => {
    if (i < visible.length) onPick(`var(${visible[i]!.token.cssVar})`);
    else if (raw) onPick(raw);
    onClose();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((i) => Math.max(0, Math.min(count - 1, i + (e.key === 'ArrowDown' ? 1 : -1))));
    } else if (e.key === 'Enter' && count > 0) {
      e.preventDefault();
      pickAt(active);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    }
  };

  return (
    <div className="gf-font-picker gf-token-picker" data-testid="token-picker">
      <div className="gf-token-search">
        <input
          className="gf-input"
          aria-label="Search tokens"
          placeholder={isColor ? 'Search roles, or type a color' : 'Search tokens, or type a value'}
          value={query}
          autoFocus
          spellCheck={false}
          onChange={(e) => {
            setQuery(e.target.value);
            setActive(0);
          }}
          onKeyDown={onKeyDown}
        />
        {isColor && <CustomColor value={value} onPick={onPick} />}
      </div>
      <ul ref={listRef} className="gf-font-options" role="listbox" aria-label="Tokens">
        {visible.map((o, i) => {
          const current = value.trim() === `var(${o.token.cssVar})`;
          return (
            <li
              key={o.token.cssVar}
              role="option"
              aria-selected={i === active}
              title={`var(${o.token.cssVar})`}
              className={`gf-font-option gf-token-option${i === active ? ' is-active' : ''}${current ? ' is-current' : ''}`}
              onMouseEnter={() => setActive(i)}
              onMouseDown={(e) => {
                e.preventDefault();
                pickAt(i);
              }}
            >
              {isColor && <span className="gf-swatch" style={{ background: `var(${o.token.cssVar})` }} />}
              <span className="gf-font-name" style={prop === 'fontFamily' ? { fontFamily: `var(${o.token.cssVar})` } : undefined}>
                {o.label}
              </span>
              {o.meta && (
                <span className="gf-font-meta" title={o.meta}>
                  {o.meta}
                </span>
              )}
            </li>
          );
        })}
        {raw && (
          <li
            role="option"
            aria-selected={active === visible.length}
            className={`gf-font-option gf-token-option${active === visible.length ? ' is-active' : ''}`}
            onMouseEnter={() => setActive(visible.length)}
            onMouseDown={(e) => {
              e.preventDefault();
              pickAt(visible.length);
            }}
          >
            {isColor && <span className="gf-swatch" style={{ background: raw }} />}
            <span className="gf-font-name">Use “{raw}”</span>
            <span className="gf-font-meta">raw value</span>
          </li>
        )}
        {hidden > 0 && (
          <li>
            <button type="button" className="gf-token-more" onMouseDown={(e) => e.preventDefault()} onClick={() => setShowOther(true)}>
              Other colors ({hidden})
            </button>
          </li>
        )}
        {count === 0 && <li className="gf-font-meta gf-font-none">No tokens match “{query}”</li>}
      </ul>
    </div>
  );
}

/**
 * A raw color from the system color picker. It commits on `change` (when the
 * picker closes), not on every `input` while dragging, so it's one undo step.
 */
function CustomColor({ value, onPick }: { value: string; onPick(value: string): void }) {
  const ref = useRef<HTMLInputElement>(null);
  const pick = useRef(onPick);
  pick.current = onPick;
  useEffect(() => {
    const input = ref.current!;
    const commit = () => pick.current(input.value);
    input.addEventListener('change', commit);
    return () => input.removeEventListener('change', commit);
  }, []);
  return (
    <input
      ref={ref}
      type="color"
      className="gf-seed-input"
      aria-label="Custom color"
      title="Custom color (raw value)"
      defaultValue={/^#[0-9a-f]{6}$/i.test(value.trim()) ? value.trim() : '#000000'}
    />
  );
}
