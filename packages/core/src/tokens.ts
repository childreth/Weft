/**
 * W3C Design Tokens (DTCG) → CSS custom properties.
 * Token path `color.surface-subtle` becomes `--color-surface-subtle`.
 */

export interface DesignToken {
  $value: unknown;
  $type?: string;
  $description?: string;
}

export interface TokenGroup {
  $type?: string;
  $description?: string;
  [key: string]: unknown;
}

export interface TokenSet {
  tokens: TokenGroup;
  /** Partial overrides per mode, e.g. { dark: { color: { surface: … } } }. */
  modes?: Record<string, TokenGroup>;
}

export interface FlatToken {
  path: string[];
  name: string;
  cssVar: string;
  type: string;
  value: string;
}

function isToken(value: unknown): value is DesignToken {
  return typeof value === 'object' && value !== null && '$value' in value;
}

function cssName(path: readonly string[]): string {
  return path.join('-').replace(/[^a-zA-Z0-9_-]/g, '-');
}

export function tokenVar(path: string): string {
  return `var(--${cssName(path.split('.'))})`;
}

function formatValue(value: unknown): string {
  if (typeof value === 'string') return value.replace(/\{([^}]+)\}/g, (_, ref: string) => tokenVar(ref));
  if (typeof value === 'number') return String(value);
  if (Array.isArray(value)) return value.map(formatValue).join(', ');
  if (typeof value === 'object' && value !== null) {
    const v = value as Record<string, unknown>;
    if ('value' in v && 'unit' in v) return `${v.value}${v.unit}`;
    if ('offsetX' in v) {
      return [v.inset ? 'inset' : '', v.offsetX, v.offsetY, v.blur, v.spread, v.color]
        .filter((p) => p !== '' && p !== undefined)
        .map(formatValue)
        .join(' ');
    }
  }
  return String(value);
}

export function flattenTokens(group: TokenGroup, path: string[] = [], inheritedType?: string): FlatToken[] {
  const groupType = typeof group.$type === 'string' ? group.$type : inheritedType;
  const out: FlatToken[] = [];
  for (const [key, value] of Object.entries(group)) {
    if (key.startsWith('$')) continue;
    const childPath = [...path, key];
    if (isToken(value)) {
      out.push({
        path: childPath,
        name: childPath.join('.'),
        cssVar: `--${cssName(childPath)}`,
        type: value.$type ?? groupType ?? 'unknown',
        value: formatValue(value.$value),
      });
    } else if (typeof value === 'object' && value !== null) {
      out.push(...flattenTokens(value as TokenGroup, childPath, groupType));
    }
  }
  return out;
}

function declarations(tokens: FlatToken[]): string {
  return tokens.map((t) => `  ${t.cssVar}: ${t.value};`).join('\n');
}

/** `base` with `overrides` laid over it, group by group; neither is changed. */
export function mergeTokenGroups(base: TokenGroup, overrides: TokenGroup): TokenGroup {
  const out: TokenGroup = { ...base };
  for (const [key, value] of Object.entries(overrides)) {
    const current = out[key];
    const isGroup = (v: unknown) => typeof v === 'object' && v !== null && !isToken(v);
    out[key] = isGroup(value) && isGroup(current) ? mergeTokenGroups(current as TokenGroup, value as TokenGroup) : value;
  }
  return out;
}

/**
 * CSS custom properties for a token set. Each mode (theme) block declares every
 * token, not just its overrides: an alias (`--color-accent: var(--color-blue-600)`)
 * is resolved where it's declared, so it must be declared again under the theme
 * for an override of what it points to to reach it.
 */
export function compileTokensCSS(
  set: TokenSet,
  selector = ':root',
  modeSelector: (mode: string) => string = (mode) => `${selector}[data-theme="${mode}"]`,
): string {
  const blocks = [`${selector} {\n${declarations(flattenTokens(set.tokens))}\n}`];
  for (const [mode, overrides] of Object.entries(set.modes ?? {})) {
    blocks.push(`${modeSelector(mode)} {\n${declarations(flattenTokens(mergeTokenGroups(set.tokens, overrides)))}\n}`);
  }
  return blocks.join('\n\n');
}

/**
 * The custom properties (`--color-accent`) whose value a mode changes: the ones
 * it overrides, and the aliases that lead to them.
 */
export function modeChangedVars(set: TokenSet, mode: string): Set<string> {
  const overrides = set.modes?.[mode];
  if (!overrides) return new Set();
  const resolver = (tokens: FlatToken[]) => {
    const values = new Map(tokens.map((t) => [t.cssVar, t.value]));
    const resolve = (value: string, depth = 0): string =>
      depth > 20 ? value : value.replace(/var\((--[\w-]+)\)/g, (ref, name: string) => (values.has(name) ? resolve(values.get(name)!, depth + 1) : ref));
    return (name: string) => resolve(values.get(name) ?? '');
  };
  const base = flattenTokens(set.tokens);
  const before = resolver(base);
  const after = resolver(flattenTokens(mergeTokenGroups(set.tokens, overrides)));
  return new Set(base.map((t) => t.cssVar).filter((name) => before(name) !== after(name)));
}
