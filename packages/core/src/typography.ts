import type { StyleMap } from './schema';

/**
 * Text roles, like the color roles (`body-lg` lead text, `body-md` default,
 * `body-sm` secondary, `label` for controls, `caption` for what explains something else): a role is a set of tokens (`font-size.h1`,
 * `font-weight.h1`, `line-height.h1`, `letter-spacing.h1`) plus a font role, and
 * a layer uses one through ordinary styles (`textRoleStyles`). Documents and
 * themes change a role by setting its tokens. Nothing applies by tag in CSS, so
 * designs made before the roles keep their look.
 */
export const TEXT_ROLES = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body-lg', 'body-md', 'body-sm', 'label', 'caption'] as const;
export type TextRole = (typeof TEXT_ROLES)[number];

/** What each role points at by default. */
export const TEXT_ROLE_DEFAULTS: Record<TextRole, { size: string; weight: string; lineHeight: string; letterSpacing: string }> = {
  h1: { size: '5xl', weight: 'bold', lineHeight: 'tight', letterSpacing: 'tighter' },
  h2: { size: '4xl', weight: 'bold', lineHeight: 'tight', letterSpacing: 'tight' },
  h3: { size: '3xl', weight: 'semibold', lineHeight: 'snug', letterSpacing: 'tight' },
  h4: { size: '2xl', weight: 'semibold', lineHeight: 'snug', letterSpacing: 'normal' },
  h5: { size: 'xl', weight: 'semibold', lineHeight: 'snug', letterSpacing: 'normal' },
  h6: { size: 'lg', weight: 'semibold', lineHeight: 'snug', letterSpacing: 'normal' },
  'body-lg': { size: 'lg', weight: 'regular', lineHeight: 'normal', letterSpacing: 'normal' },
  'body-md': { size: 'md', weight: 'regular', lineHeight: 'normal', letterSpacing: 'normal' },
  'body-sm': { size: 'sm', weight: 'regular', lineHeight: 'normal', letterSpacing: 'normal' },
  label: { size: 'sm', weight: 'medium', lineHeight: 'snug', letterSpacing: 'normal' },
  caption: { size: 'xs', weight: 'regular', lineHeight: 'normal', letterSpacing: 'wide' },
};

/** The token groups a role has a token in, by the style each one sets. */
export const TEXT_ROLE_GROUPS = {
  fontSize: 'font-size',
  fontWeight: 'font-weight',
  lineHeight: 'line-height',
  letterSpacing: 'letter-spacing',
} as const;

const isHeading = (role: TextRole) => role.length === 2 && role.startsWith('h');

/** The styles that make a layer use `role`. */
export function textRoleStyles(role: TextRole): StyleMap {
  return {
    fontFamily: `var(--font-family-${isHeading(role) ? 'heading' : 'body'})`,
    fontSize: `var(--font-size-${role})`,
    fontWeight: `var(--font-weight-${role})`,
    lineHeight: `var(--line-height-${role})`,
    letterSpacing: `var(--letter-spacing-${role})`,
  };
}

/** The role a layer's styles use exactly, or null if it has none or has changed part of it. */
export function textRoleOf(styles: Readonly<StyleMap>): TextRole | null {
  return (
    TEXT_ROLES.find((role) => {
      const expected = textRoleStyles(role) as Record<string, string>;
      return Object.keys(expected).every((prop) => (styles as Record<string, unknown>)[prop] === expected[prop]);
    }) ?? null
  );
}

/** The role a tag starts with: headings, controls, and the tags that mean a caption. */
export function textRoleForTag(tag: string): TextRole | null {
  if (/^h[1-6]$/.test(tag)) return tag as TextRole;
  if (tag === 'button' || tag === 'label') return 'label';
  return tag === 'figcaption' || tag === 'small' ? 'caption' : null;
}

const TYPE_STYLES = ['fontFamily', 'fontSize', 'fontWeight', 'lineHeight', 'letterSpacing'];

/** Styles for a new layer: its tag's role, with what was asked for on top. */
export function withTagTextRole(tag: string | undefined, styles: Readonly<StyleMap> | undefined): StyleMap | undefined {
  const role = tag ? textRoleForTag(tag) : null;
  return role ? { ...textRoleStyles(role), ...styles } : (styles as StyleMap | undefined);
}

/**
 * Styles to set when a layer's tag changes to `tag`: its role, if it follows one
 * or has no type styles of its own. Hand-set type is left alone.
 */
export function textRoleForTagChange(tag: string, styles: Readonly<StyleMap>): StyleMap | undefined {
  const role = textRoleForTag(tag);
  if (!role) return undefined;
  const untouched = !TYPE_STYLES.some((prop) => prop in styles);
  return untouched || textRoleOf(styles) ? textRoleStyles(role) : undefined;
}
