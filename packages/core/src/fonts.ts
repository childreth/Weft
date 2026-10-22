import { FONT_CATALOG_ROWS } from './font-catalog';
import { ICON_FONTS } from './icons';
import type { TokenGroup, TokenSet } from './tokens';

/**
 * Google Fonts support. The catalog is bundled (no API key, works offline);
 * a document lists the fonts it uses, and each becomes a `--font-family-<slug>`
 * token with a fallback stack, so text still renders without the font files.
 */

export type FontCategory = 'sans-serif' | 'serif' | 'display' | 'handwriting' | 'monospace' | 'icons';

export interface CatalogFont {
  family: string;
  category: FontCategory;
  /** Available weights, ascending. */
  weights: readonly number[];
  italic: boolean;
  /** 0 = most popular. */
  rank: number;
}

/** A font the document uses: which family and which weights to load. */
export interface DocumentFont {
  family: string;
  weights: number[];
}

const CATEGORY: Record<string, FontCategory> = { s: 'sans-serif', r: 'serif', d: 'display', h: 'handwriting', m: 'monospace' };

let catalog: CatalogFont[] | null = null;
let byName: Map<string, CatalogFont> | null = null;

export function fontCatalog(): readonly CatalogFont[] {
  catalog ??= FONT_CATALOG_ROWS.map(([family, c, weights, italic], rank) => ({
    family,
    category: CATEGORY[c] ?? 'sans-serif',
    weights,
    italic: italic === 1,
    rank,
  }));
  // Icon fonts aren't in Google's text-font metadata: add the Material Symbols styles (variable weight 100–700).
  for (const family of ICON_FONTS) {
    catalog.push({ family, category: 'icons', weights: [100, 200, 300, 400, 500, 600, 700], italic: false, rank: catalog.length });
  }
  return catalog;
}

/** A catalog family by name, ignoring case. */
export function findFont(family: string): CatalogFont | undefined {
  byName ??= new Map(fontCatalog().map((f) => [f.family.toLowerCase(), f]));
  return byName.get(family.trim().toLowerCase());
}

/** Catalog search: exact match, then prefix, then substring; popular first within each. */
export function searchFonts(query = '', options: { category?: FontCategory; limit?: number } = {}): CatalogFont[] {
  const q = query.trim().toLowerCase();
  const limit = options.limit ?? 20;
  const pool = options.category ? fontCatalog().filter((f) => f.category === options.category) : fontCatalog();
  if (!q) return pool.slice(0, limit);
  const score = (f: CatalogFont) => {
    const name = f.family.toLowerCase();
    if (name === q) return 0;
    if (name.startsWith(q)) return 1;
    if (name.split(/\s+/).some((w) => w.startsWith(q))) return 2;
    return name.includes(q) ? 3 : -1;
  };
  return pool
    .map((f) => [score(f), f] as const)
    .filter(([s]) => s >= 0)
    .sort((a, b) => a[0] - b[0] || a[1].rank - b[1].rank)
    .slice(0, limit)
    .map(([, f]) => f);
}

/** Weights to load when none are asked for: the usual text weights the family has. */
export function defaultWeights(font: CatalogFont): number[] {
  // Each icon weight is a separate ~320 KB file.
  if (font.category === 'icons') return [400];
  const usual = font.weights.filter((w) => w >= 400 && w <= 700);
  return usual.length ? usual : [font.weights.reduce((a, b) => (Math.abs(b - 400) < Math.abs(a - 400) ? b : a))];
}

/** Token key for a family: "Playfair Display" → "playfair-display" (`--font-family-playfair-display`). */
export function fontSlug(family: string): string {
  const slug = family.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  // Don't shadow the built-in stacks.
  return slug === 'sans' || slug === 'mono' ? `${slug}-font` : slug;
}

const FALLBACKS: Record<FontCategory, string[]> = {
  'sans-serif': ['system-ui', 'sans-serif'],
  serif: ['Georgia', 'serif'],
  display: ['system-ui', 'sans-serif'],
  handwriting: ['cursive'],
  monospace: ['ui-monospace', 'monospace'],
  // No fallback draws the icon: without the font, the name shows as text.
  icons: [],
};

/** The family with fallbacks for its category, as a token value. */
export function fontStack(family: string): string[] {
  const font = findFont(family);
  return [`"${font?.family ?? family}"`, ...FALLBACKS[font?.category ?? 'sans-serif']];
}

/** `base` with each document font added to the `font-family` token group. */
export function withFontTokens(base: TokenSet, fonts: readonly DocumentFont[]): TokenSet {
  if (fonts.length === 0) return base;
  const group = { ...((base.tokens['font-family'] as TokenGroup | undefined) ?? { $type: 'fontFamily' }) };
  for (const f of fonts) group[fontSlug(f.family)] = { $value: fontStack(f.family) };
  return { ...base, tokens: { ...base.tokens, 'font-family': group } };
}

/** Google Fonts CSS API URL for the fonts, or null when there are none. */
export function googleFontsCSSUrl(fonts: readonly DocumentFont[], origin = 'https://fonts.googleapis.com'): string | null {
  if (fonts.length === 0) return null;
  const families = [...fonts]
    .sort((a, b) => a.family.localeCompare(b.family))
    .map((f) => `family=${encodeURIComponent(f.family).replace(/%20/g, '+')}:wght@${[...f.weights].sort((a, b) => a - b).join(';')}`);
  return `${origin}/css2?${families.join('&')}&display=swap`;
}

/** Compact query form used by Weft's own font route: `Inter:400,700|Lora:400`. */
export function encodeFontQuery(fonts: readonly DocumentFont[]): string {
  return [...fonts]
    .sort((a, b) => a.family.localeCompare(b.family))
    .map((f) => `${f.family}:${[...f.weights].sort((a, b) => a - b).join(',')}`)
    .join('|');
}

/** Parses `encodeFontQuery` output, keeping only catalog families and weights they have. */
export function decodeFontQuery(query: string): DocumentFont[] {
  const out: DocumentFont[] = [];
  for (const part of query.split('|').slice(0, 30)) {
    const [name, list = ''] = part.split(':');
    const font = name ? findFont(name) : undefined;
    if (!font) continue;
    const weights = list
      .split(',')
      .map(Number)
      .filter((w) => font.weights.includes(w));
    out.push({ family: font.family, weights: weights.length ? weights : defaultWeights(font) });
  }
  return out;
}
