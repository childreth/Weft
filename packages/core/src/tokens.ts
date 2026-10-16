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

export function compileTokensCSS(
  set: TokenSet,
  selector = ':root',
  modeSelector: (mode: string) => string = (mode) => `${selector}[data-theme="${mode}"]`,
): string {
  const blocks = [`${selector} {\n${declarations(flattenTokens(set.tokens))}\n}`];
  for (const [mode, overrides] of Object.entries(set.modes ?? {})) {
    blocks.push(`${modeSelector(mode)} {\n${declarations(flattenTokens(overrides))}\n}`);
  }
  return blocks.join('\n\n');
}
