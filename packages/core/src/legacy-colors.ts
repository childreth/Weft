import { LEGACY_COLOR_ROLES, type ColorRole } from './material';

/**
 * Weft's first color names (`color.text`, `color.accent`…) are aliases of
 * Material roles. Old designs still use them, and old themes override them,
 * which hides the theme's colors from the role pickers. These helpers find
 * them and plan moving a document onto the roles.
 */

/** The role an old color name stands for: `color.text` → `on-surface`. */
export function legacyColorRole(path: string): ColorRole | undefined {
  const name = /^color\.([\w-]+)$/.exec(path)?.[1];
  return name !== undefined && Object.hasOwn(LEGACY_COLOR_ROLES, name) ? LEGACY_COLOR_ROLES[name] : undefined;
}

/** The old name a style value uses whole (`var(--color-text)` → `text`), if any. */
export function legacyColorOfValue(value: string): string | undefined {
  const name = /^var\(--color-([\w-]+)\)$/.exec(value.trim())?.[1];
  return name !== undefined && Object.hasOwn(LEGACY_COLOR_ROLES, name) ? name : undefined;
}

const nameAlternation = (names: readonly string[]) =>
  // Longest first, so text-muted isn't read as text.
  [...names].sort((a, b) => b.length - a.length).map((n) => n.replace(/[-]/g, '\\-')).join('|');

const usePattern = (names: readonly string[]) => new RegExp(`(var\\(--color-|\\{color\\.)(${nameAlternation(names)})(?![\\w-])`, 'g');

/** Whether a style or token value refers to an old name (`var(--color-text)`, `{color.text}`). */
export function usesLegacyColor(value: string, names: readonly string[] = Object.keys(LEGACY_COLOR_ROLES)): boolean {
  return names.length > 0 && usePattern(names).test(value);
}

/** `value` with references to the given old names pointed at their roles. */
export function renameLegacyColors(value: string, names: readonly string[]): string {
  if (names.length === 0) return value;
  return value.replace(usePattern(names), (_, prefix: string, name: string) => `${prefix}${LEGACY_COLOR_ROLES[name]}`);
}

/**
 * Setting an old name is refused (removing one is fine): it would start a
 * second palette the role pickers can't show. Unchanged values pass, so
 * resending a theme as it is works.
 */
export function legacyColorIssues(
  entries: Readonly<Record<string, string | null>>,
  current: Readonly<Record<string, string>>,
  prefix = '',
): string[] {
  return Object.entries(entries).flatMap(([path, value]) => {
    const role = legacyColorRole(path);
    if (!role || value === null || value.trim() === current[path]) return [];
    return [`${prefix}"${path}" is an old name for color.${role}; set color.${role} instead`];
  });
}

export interface LegacyColorPlan {
  /** Old names moved onto their roles, with the role each became. */
  renamed: Record<string, ColorRole>;
  /** Old names left alone, and why: moving them would change how something looks. */
  skipped: { name: string; reason: string }[];
  /** The document's tokens and themes after the move. */
  tokens: Record<string, string>;
  themes: Record<string, Record<string, string>>;
}

/**
 * Plans moving every override of an old name onto its role, in the document's
 * tokens and each theme. An old name is skipped when that would change a
 * color anywhere: a theme (or the document) sets both it and its role to
 * different values, the role refers to the old name, or the document sets the
 * old name while a theme (built-in ones included, `effectiveThemes`) sets only
 * the role, or `keep` names it (with the reason). Layers can follow every
 * name that isn't skipped.
 */
export function planLegacyColors(
  tokens: Readonly<Record<string, string>>,
  themes: Readonly<Record<string, Readonly<Record<string, string>>>>,
  effectiveThemes: Readonly<Record<string, ReadonlySet<string>>>,
  keep: Readonly<Record<string, string>> = {},
): LegacyColorPlan {
  const scopes: [string, Readonly<Record<string, string>>][] = [['', tokens], ...Object.entries(themes)];
  const where = (scope: string) => (scope ? `the ${scope} theme` : 'the document');
  const isRef = (value: string, role: string) => value === `{color.${role}}` || value === `var(--color-${role})`;
  const renamed: Record<string, ColorRole> = {};
  const skipped: LegacyColorPlan['skipped'] = [];
  for (const [name, role] of Object.entries(LEGACY_COLOR_ROLES)) {
    const old = `color.${name}`;
    const target = `color.${role}`;
    let reason: string | null = keep[name] ?? null;
    for (const [scope, set] of reason ? [] : scopes) {
      const value = set[old];
      const roleValue = set[target];
      if (roleValue !== undefined && usesLegacyColor(roleValue, [name])) reason = `${where(scope)} sets ${target} to ${roleValue}`;
      else if (value !== undefined && roleValue !== undefined && !isRef(value, role) && value !== roleValue)
        reason = `${where(scope)} sets ${old} (${value}) and ${target} (${roleValue}) to different colors`;
      if (reason) break;
    }
    const base = tokens[old];
    if (!reason && base !== undefined && !isRef(base, role)) {
      const theme = Object.entries(effectiveThemes).find(([theme, paths]) => paths.has(target) && !(old in (themes[theme] ?? {})));
      if (theme) reason = `the document sets ${old}, but the ${theme[0]} theme sets ${target}`;
    }
    if (reason) skipped.push({ name, reason });
    else renamed[name] = role;
  }
  const names = Object.keys(renamed);
  const move = (set: Readonly<Record<string, string>>): Record<string, string> => {
    const next: Record<string, string> = { ...set };
    for (const name of names) {
      const old = `color.${name}`;
      const value = next[old];
      if (value === undefined) continue;
      delete next[old];
      const target = `color.${renamed[name]}`;
      if (!isRef(value, renamed[name]!) && next[target] === undefined) next[target] = value;
    }
    return Object.fromEntries(Object.entries(next).map(([path, value]) => [path, renameLegacyColors(value, names)]));
  };
  return {
    renamed,
    skipped,
    tokens: move(tokens),
    themes: Object.fromEntries(Object.entries(themes).map(([theme, set]) => [theme, move(set)])),
  };
}

/**
 * Weft's first palette (white, Tailwind's slate grays, three blues), no
 * longer default tokens: designs use the roles. A document that still uses
 * one gets it back as its own token, with the same value, so it renders as
 * saved (`retiredColorsIn`, `GridDocument.restoreRetiredColors`).
 */
export const RETIRED_COLORS: Readonly<Record<string, string>> = {
  'color.white': '#ffffff',
  'color.neutral.50': '#f8fafc',
  'color.neutral.100': '#f1f5f9',
  'color.neutral.200': '#e2e8f0',
  'color.neutral.400': '#94a3b8',
  'color.neutral.600': '#475569',
  'color.neutral.800': '#1e293b',
  'color.neutral.900': '#0f172a',
  'color.neutral.950': '#020617',
  'color.blue.500': '#3b82f6',
  'color.blue.600': '#2563eb',
  'color.blue.700': '#1d4ed8',
};

/** The retired colors `text` (any JSON: styles, token values, theme keys) uses, by token path. */
export function retiredColorsIn(text: string): Record<string, string> {
  const used: Record<string, string> = {};
  for (const m of text.matchAll(/--color-(white|neutral-\d+|blue-\d+)(?![\w-])|color\.(white|neutral\.\d+|blue\.\d+)(?![\w.-])/g)) {
    const path = m[1] ? `color.${m[1].replace('-', '.')}` : `color.${m[2]}`;
    if (path in RETIRED_COLORS) used[path] = RETIRED_COLORS[path]!;
  }
  return used;
}
