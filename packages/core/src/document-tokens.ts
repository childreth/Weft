import { flattenTokens, type TokenGroup, type TokenSet } from './tokens';

/**
 * A document's own design tokens (a brand palette, a type scale), layered over
 * the defaults: each entry adds a token to a group or overrides a default, e.g.
 * `{ "color.ember-500": "#c2410c", "color.accent": "{color.ember-500}" }`.
 * Font families come from the document's fonts instead.
 */

/** A token path: its group, then one or two kebab-case names (`color.ember-500`, `color.ember.500`). */
const PATH = /^([a-z-]+)\.([a-z0-9]+(?:-[a-z0-9]+)*)(?:\.([a-z0-9]+(?:-[a-z0-9]+)*))?$/;
const ALIAS = /^\{([a-z0-9.-]+)\}$/;
/** A CSS function call, allowing one level of nested parentheses (`var(…)` inside `color-mix(…)`). */
const call = (names: string) => new RegExp(`^(?:${names})\\((?:[^()]|\\([^()]*\\))*\\)$`, 'i');
const COLOR_FN = call('rgba?|hsla?|hwb|lab|lch|oklab|oklch|color|color-mix');
const MATH_FN = call('calc|clamp|min|max');
const LENGTH = /^(?:0|-?(?:\d+|\d*\.\d+)(?:px|rem|em|%))$/;
/** Never in a value: they could end the declaration or reach the network. */
const FORBIDDEN = /[;{}<>\\@]|\/\*|url\(|image-set\(|expression\(/i;

const GROUPS: Record<string, { type: string; valid: (v: string) => boolean; expect: string }> = {
  color: {
    type: 'color',
    valid: (v) => /^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(v) || COLOR_FN.test(v) || /^[a-z]+$/i.test(v),
    expect: 'a color (#c2410c, rgb(…), oklch(…), color-mix(…)), not a gradient',
  },
  space: { type: 'dimension', valid: (v) => LENGTH.test(v) || MATH_FN.test(v), expect: 'a length (16px, 1rem) or calc()/clamp()' },
  radius: { type: 'dimension', valid: (v) => LENGTH.test(v) || MATH_FN.test(v), expect: 'a length (12px)' },
  'font-size': { type: 'dimension', valid: (v) => LENGTH.test(v) || MATH_FN.test(v), expect: 'a length (18px, 1.125rem) or clamp()' },
  'font-weight': { type: 'fontWeight', valid: (v) => /^[1-9]00$/.test(v), expect: 'a weight from 100 to 900' },
  'line-height': { type: 'number', valid: (v) => /^(?:\d+|\d*\.\d+)$/.test(v), expect: 'a unitless number (1.4)' },
  // Only the roles (FONT_ROLES), pointed at a font: the fonts themselves come from the document's fonts.
  'font-family': {
    type: 'fontFamily',
    valid: () => false,
    expect: 'a reference to a font, e.g. {font-family.fraunces} (add_fonts adds one)',
  },
  shadow: { type: 'shadow', valid: (v) => v === 'none' || /^[a-z0-9#.,%() -]+$/i.test(v), expect: 'a box-shadow (0 4px 12px rgb(0 0 0 / 0.12))' },
};

export const DOCUMENT_TOKEN_GROUPS: readonly string[] = Object.keys(GROUPS);

/** The semantic font tokens designs use (`var(--font-family-heading)`); documents and themes point them at fonts. */
export const FONT_ROLES = ['heading', 'body'] as const;
const isFontRole = (path: string) => FONT_ROLES.some((role) => path === `font-family.${role}`);
const FONT_ROLE_HINT = `set the roles ${FONT_ROLES.map((r) => `font-family.${r}`).join(' and ')} to one, e.g. {font-family.fraunces}`;
export const MAX_DOCUMENT_TOKENS = 200;
const MAX_VALUE_LENGTH = 200;

/**
 * Problems with setting `entries` (null removes a document token) on a
 * document whose tokens are `current`, over `base` (defaults and font tokens).
 */
export function documentTokenIssues(
  entries: Readonly<Record<string, string | null>>,
  current: Readonly<Record<string, string>>,
  base: TokenSet,
): string[] {
  const next: Record<string, string> = { ...current };
  for (const [path, value] of Object.entries(entries)) {
    if (value === null) delete next[path];
    else next[path] = value.trim();
  }
  const known = new Set(flattenTokens(withDocumentTokens(base, next).tokens).map((t) => t.name));
  // A token can't replace a group (color.neutral) or sit inside a token (color.accent.soft).
  const before = [...flattenTokens(withDocumentTokens(base, current).tokens).map((t) => t.name), ...Object.keys(entries)];
  const tokenNames = new Set(before);
  const groupNames = new Set(before.flatMap(groupsOf));
  const issues: string[] = [];
  for (const [path, raw] of Object.entries(entries)) {
    const at = `"${path}"`;
    if (raw === null) {
      if (!(path in current)) issues.push(`${at} isn't one of this document's tokens, so there's nothing to remove`);
      continue;
    }
    const group = PATH.exec(path)?.[1];
    if (!group) {
      issues.push(`${at}: a token path is its group and a kebab-case name, e.g. color.ember-500`);
      continue;
    }
    const rule = GROUPS[group];
    if (!rule) {
      issues.push(`${at}: unknown group "${group}" (allowed: ${DOCUMENT_TOKEN_GROUPS.join(', ')})`);
      continue;
    }
    if (group === 'font-family' && !isFontRole(path)) {
      issues.push(`${at}: fonts come from the document's fonts (add_fonts); ${FONT_ROLE_HINT}`);
      continue;
    }
    if (groupNames.has(path)) {
      issues.push(`${at} is a group of tokens; set one inside it, e.g. ${path}.500`);
      continue;
    }
    const parent = path.split('.').slice(0, -1).join('.');
    if (parent.includes('.') && tokenNames.has(parent)) {
      issues.push(`${at}: ${parent} is a token, not a group; use a name like ${parent}-soft`);
      continue;
    }
    const value = raw.trim();
    const alias = ALIAS.exec(value)?.[1];
    if (!value || value.length > MAX_VALUE_LENGTH) issues.push(`${at}: the value must be 1–${MAX_VALUE_LENGTH} characters`);
    else if (alias !== undefined) {
      if (alias === path) issues.push(`${at} can't refer to itself`);
      else if (!known.has(alias)) issues.push(`${at} refers to {${alias}}, which isn't a token`);
      else if (!alias.startsWith(`${group}.`)) issues.push(`${at} must refer to another ${group} token`);
      else if (cycles(path, next)) issues.push(`${at}: its references go in a circle`);
    } else if (FORBIDDEN.test(value) || !rule.valid(value)) issues.push(`${at}: expected ${rule.expect}, got "${value}"`);
  }
  if (Object.keys(next).length > MAX_DOCUMENT_TOKENS) issues.push(`A document can have at most ${MAX_DOCUMENT_TOKENS} tokens of its own`);
  return issues;
}

/** A theme name: kebab-case, like a token name (`dark`, `ember`, `high-contrast`). */
const THEME_NAME = /^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/;
export const MAX_THEMES = 20;

/** Problems with a theme's name, e.g. before creating it. */
export function themeNameIssue(name: string): string | null {
  if (!THEME_NAME.test(name) || name.length > 32) return `"${name}": a theme name is kebab-case, up to 32 characters (dark, ember, high-contrast)`;
  if (name === 'default') return `"default" is the document without a theme; pick another name`;
  return null;
}

/**
 * Problems with setting `entries` on theme `name`, whose current overrides are
 * `current` (null removes one), over `base` (the full token set without themes).
 * A theme only overrides tokens that exist; fonts only through their roles.
 */
export function themeIssues(
  name: string,
  entries: Readonly<Record<string, string | null>>,
  current: Readonly<Record<string, string>>,
  base: TokenSet,
): string[] {
  const nameIssue = themeNameIssue(name);
  if (nameIssue) return [nameIssue];
  const flat = new Map(flattenTokens(base.tokens).map((t) => [t.name, t]));
  const next: Record<string, string> = { ...current };
  for (const [path, value] of Object.entries(entries)) {
    if (value === null) delete next[path];
    else next[path] = value.trim();
  }
  const issues: string[] = [];
  for (const [path, raw] of Object.entries(entries)) {
    const at = `${name}: "${path}"`;
    if (raw === null) {
      if (!(path in current)) issues.push(`${at} isn't set in this theme, so there's nothing to remove`);
      continue;
    }
    const group = path.split('.')[0]!;
    const rule = GROUPS[group];
    if (!flat.has(path)) {
      issues.push(`${at} isn't a token; a theme overrides existing tokens (add new ones with set_tokens first)`);
      continue;
    }
    if (!rule) {
      issues.push(`${at}: ${group} tokens can't be themed`);
      continue;
    }
    if (group === 'font-family' && !isFontRole(path)) {
      issues.push(`${at}: a theme changes fonts through their roles; ${FONT_ROLE_HINT}`);
      continue;
    }
    const value = raw.trim();
    const alias = ALIAS.exec(value)?.[1];
    if (!value || value.length > MAX_VALUE_LENGTH) issues.push(`${at}: the value must be 1–${MAX_VALUE_LENGTH} characters`);
    else if (alias !== undefined) {
      if (alias === path) issues.push(`${at} can't refer to itself`);
      else if (!flat.has(alias)) issues.push(`${at} refers to {${alias}}, which isn't a token`);
      else if (!alias.startsWith(`${group}.`)) issues.push(`${at} must refer to another ${group} token`);
      else if (cycles(path, { ...aliasesOf(base.tokens), ...next })) issues.push(`${at}: its references go in a circle`);
    } else if (FORBIDDEN.test(value) || !rule.valid(value)) issues.push(`${at}: expected ${rule.expect}, got "${value}"`);
  }
  if (Object.keys(next).length > MAX_DOCUMENT_TOKENS) issues.push(`A theme can override at most ${MAX_DOCUMENT_TOKENS} tokens`);
  return issues;
}

/** Every token in a group whose value is an alias, as path → `{alias}`. */
function aliasesOf(group: TokenGroup, path: string[] = []): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [key, value] of Object.entries(group)) {
    if (key.startsWith('$') || typeof value !== 'object' || value === null) continue;
    const at = [...path, key];
    if ('$value' in value) {
      const v = (value as { $value: unknown }).$value;
      if (typeof v === 'string' && ALIAS.test(v)) out[at.join('.')] = v;
    } else Object.assign(out, aliasesOf(value as TokenGroup, at));
  }
  return out;
}

/** The groups a token sits in: `color.neutral.100` → `color`, `color.neutral`. */
function groupsOf(name: string): string[] {
  const parts = name.split('.');
  return parts.slice(1).map((_, i) => parts.slice(0, i + 1).join('.'));
}

/** Whether following `path`'s aliases through the document's tokens comes back to it. */
function cycles(path: string, tokens: Readonly<Record<string, string>>): boolean {
  let at: string | undefined = path;
  for (let i = 0; at && i <= MAX_DOCUMENT_TOKENS; i++) {
    at = ALIAS.exec(tokens[at] ?? '')?.[1];
    if (at === path) return true;
  }
  return false;
}

/** `base` with the document's tokens added to (or overriding) their groups. */
export function withDocumentTokens(base: TokenSet, tokens: Readonly<Record<string, string>>): TokenSet {
  const entries = Object.entries(tokens);
  if (entries.length === 0) return base;
  const root: TokenGroup = { ...base.tokens };
  for (const [path, value] of entries) {
    const segments = path.split('.');
    let group = root;
    for (const key of segments.slice(0, -1)) {
      const child = group[key];
      // Copy each group on the way down, so the base set is never changed.
      const copy: TokenGroup = child && typeof child === 'object' && !('$value' in child) ? { ...(child as TokenGroup) } : {};
      if (group === root && !copy.$type && GROUPS[key]) copy.$type = GROUPS[key].type;
      group[key] = copy;
      group = copy;
    }
    group[segments.at(-1)!] = { $value: value };
  }
  return { ...base, tokens: root };
}
