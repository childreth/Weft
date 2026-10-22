import { ICON_CATALOG_ROWS } from './icon-catalog';
import type { StyleMap } from './schema';

/**
 * Material Symbols icons. An icon is a text node whose text is the icon's name
 * (`search`), set in a Material Symbols font: the font's ligatures draw it. The
 * fonts are ordinary document fonts (`add_fonts`), so they load, cache offline
 * and export like any other Google Font. Until the font loads, the name shows
 * as plain text. The name list is bundled, so search works offline.
 */

/** The Material Symbols styles, as Google Fonts families. */
export const ICON_FONTS = ['Material Symbols Outlined', 'Material Symbols Rounded', 'Material Symbols Sharp'] as const;

/** Styles an icon text node needs: ligatures break with letter spacing, a text transform or wrapping. */
export const ICON_STYLES: StyleMap = {
  fontSize: '24px',
  fontWeight: '400',
  lineHeight: '1',
  letterSpacing: 'normal',
  textTransform: 'none',
  whiteSpace: 'nowrap',
};

export interface CatalogIcon {
  name: string;
  /** Search words from Google's icon metadata. */
  tags: readonly string[];
  /** 0 = most popular. */
  rank: number;
}

let icons: CatalogIcon[] | null = null;
let names: Set<string> | null = null;

export function iconCatalog(): readonly CatalogIcon[] {
  icons ??= ICON_CATALOG_ROWS.map((row, rank) => {
    const [name = '', tags = ''] = row.split(' ');
    return { name, tags: tags ? tags.split(',') : [], rank };
  });
  return icons;
}

/** Whether a Material Symbols font draws this name as an icon. */
export function isIconName(name: string): boolean {
  names ??= new Set(iconCatalog().map((i) => i.name));
  return names.has(name);
}

/**
 * Icon search by name and tags ("heart" finds `favorite`): exact name, then a
 * whole word of the name or an exact tag, then prefixes, part of the name,
 * part of a tag, then icons matching more of several words. Popular first
 * within each.
 */
export function searchIcons(query = '', limit = 20): CatalogIcon[] {
  const q = query.trim().toLowerCase().replace(/[\s-]+/g, '_');
  if (!q) return iconCatalog().slice(0, limit);
  const word = q.replace(/_/g, ' ');
  const parts = q.split('_').filter(Boolean);
  const score = (i: CatalogIcon) => {
    if (i.name === q) return 0;
    const words = i.name.split('_');
    if (words.includes(q) || i.tags.includes(word)) return 1;
    if (i.name.startsWith(q) || words.some((w) => w.startsWith(q))) return 2;
    if (i.name.includes(q)) return 3;
    if (i.tags.some((t) => t.startsWith(word))) return 4;
    // Several words ("chevron down"): icons matching more of them first.
    const matched = parts.filter((p) => words.some((w) => w.startsWith(p)) || i.tags.some((t) => t.startsWith(p))).length;
    return parts.length > 1 && matched ? 5 + parts.length - matched : -1;
  };
  return iconCatalog()
    .map((i) => [score(i), i] as const)
    .filter(([s]) => s >= 0)
    .sort((a, b) => a[0] - b[0] || a[1].rank - b[1].rank)
    .slice(0, limit)
    .map(([, i]) => i);
}
