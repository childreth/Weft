import {
  Hct,
  MaterialDynamicColors,
  SchemeContent,
  SchemeExpressive,
  SchemeFidelity,
  SchemeMonochrome,
  SchemeNeutral,
  SchemeTonalSpot,
  SchemeVibrant,
  argbFromHex,
  hexFromArgb,
  type DynamicColor,
} from '@material/material-color-utilities';

/**
 * Material 3 color roles (https://m3.material.io/styles/color/roles). Weft names
 * them `color.<role>` (`var(--color-primary)`); Material's own name is
 * `md.sys.color.<role>` (`--md-sys-color-primary`). Every document has all of
 * them: their values change (per document, per theme), their names don't.
 */
export const COLOR_ROLES = [
  'primary', 'on-primary', 'primary-container', 'on-primary-container',
  'secondary', 'on-secondary', 'secondary-container', 'on-secondary-container',
  'tertiary', 'on-tertiary', 'tertiary-container', 'on-tertiary-container',
  'error', 'on-error', 'error-container', 'on-error-container',
  'surface', 'on-surface', 'on-surface-variant',
  'surface-dim', 'surface-bright',
  'surface-container-lowest', 'surface-container-low', 'surface-container', 'surface-container-high', 'surface-container-highest',
  'surface-variant', 'background', 'on-background',
  'outline', 'outline-variant',
  'inverse-surface', 'inverse-on-surface', 'inverse-primary',
  'surface-tint', 'shadow', 'scrim',
  'primary-fixed', 'primary-fixed-dim', 'on-primary-fixed', 'on-primary-fixed-variant',
  'secondary-fixed', 'secondary-fixed-dim', 'on-secondary-fixed', 'on-secondary-fixed-variant',
  'tertiary-fixed', 'tertiary-fixed-dim', 'on-tertiary-fixed', 'on-tertiary-fixed-variant',
] as const;

export type ColorRole = (typeof COLOR_ROLES)[number];

/**
 * Weft's first role names, kept as aliases so older designs keep rendering
 * (and follow themes): `color.accent` is `color.primary`.
 */
export const LEGACY_COLOR_ROLES: Readonly<Record<string, ColorRole>> = {
  accent: 'primary',
  'on-accent': 'on-primary',
  text: 'on-surface',
  'text-muted': 'on-surface-variant',
  'surface-subtle': 'surface-container',
  border: 'outline-variant',
};

/** How a scheme turns a seed color into roles; Material's default is `tonal-spot`. */
export const SCHEME_VARIANTS = {
  'tonal-spot': SchemeTonalSpot,
  fidelity: SchemeFidelity,
  content: SchemeContent,
  vibrant: SchemeVibrant,
  expressive: SchemeExpressive,
  neutral: SchemeNeutral,
  monochrome: SchemeMonochrome,
} as const;

export type SchemeVariant = keyof typeof SCHEME_VARIANTS;
export const SCHEME_VARIANT_NAMES = Object.keys(SCHEME_VARIANTS) as SchemeVariant[];

/** The seed of Weft's default scheme (the `fidelity` variant keeps it recognizable). */
export const DEFAULT_SEED = '#2563eb';

const HEX = /^#(?:[0-9a-f]{3}|[0-9a-f]{6})$/i;

/** Why `seed` can't seed a scheme, or null. */
export function seedIssue(seed: string): string | null {
  return HEX.test(seed.trim()) ? null : `seed: expected a hex color (#b85c38), got "${seed}"`;
}

const camel = (role: string) => role.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());

/** Every role's value (lowercase hex) in the light or dark scheme Material derives from `seed`. */
export function materialScheme(
  seed: string,
  { dark = false, variant = 'tonal-spot' }: { dark?: boolean; variant?: SchemeVariant } = {},
): Record<ColorRole, string> {
  const issue = seedIssue(seed);
  if (issue) throw new Error(issue);
  const hex = seed.trim().length === 4 ? `#${[...seed.trim().slice(1)].map((c) => c + c).join('')}` : seed.trim();
  const scheme = new SCHEME_VARIANTS[variant](Hct.fromInt(argbFromHex(hex)), dark, 0);
  const colors = MaterialDynamicColors as unknown as Record<string, DynamicColor>;
  return Object.fromEntries(COLOR_ROLES.map((role) => [role, hexFromArgb(colors[camel(role)]!.getArgb(scheme))])) as Record<ColorRole, string>;
}

/** A scheme as token entries for `setTokens`/`setTheme`: `color.primary` → hex. */
export function schemeTokens(scheme: Readonly<Record<ColorRole, string>>): Record<string, string> {
  return Object.fromEntries(COLOR_ROLES.map((role) => [`color.${role}`, scheme[role]]));
}
