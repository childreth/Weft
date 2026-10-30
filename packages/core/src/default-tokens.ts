import { COLOR_ROLES, DEFAULT_SEED, LEGACY_COLOR_ROLES, materialScheme, type ColorRole } from './material';
import type { TokenSet } from './tokens';

const px = (n: number) => ({ $value: `${n}px` });

// The default light scheme and the built-in dark theme come from one seed, like any Material theme.
const LIGHT = materialScheme(DEFAULT_SEED, { variant: 'fidelity' });
const DARK = materialScheme(DEFAULT_SEED, { variant: 'fidelity', dark: true });
const roles = (scheme: Record<ColorRole, string>) => Object.fromEntries(COLOR_ROLES.map((role) => [role, { $value: scheme[role] }]));

export const defaultTokens: TokenSet = {
  tokens: {
    color: {
      $type: 'color',
      white: { $value: '#ffffff' },
      neutral: {
        50: { $value: '#f8fafc' },
        100: { $value: '#f1f5f9' },
        200: { $value: '#e2e8f0' },
        400: { $value: '#94a3b8' },
        600: { $value: '#475569' },
        800: { $value: '#1e293b' },
        900: { $value: '#0f172a' },
        950: { $value: '#020617' },
      },
      blue: {
        500: { $value: '#3b82f6' },
        600: { $value: '#2563eb' },
        700: { $value: '#1d4ed8' },
      },
      // Material 3 roles: what designs use. Themes override them.
      ...roles(LIGHT),
      // Weft's first role names, now aliases of the Material roles.
      ...Object.fromEntries(Object.entries(LEGACY_COLOR_ROLES).map(([name, role]) => [name, { $value: `{color.${role}}` }])),
    },
    space: {
      $type: 'dimension',
      0: px(0), 1: px(4), 2: px(8), 3: px(12), 4: px(16), 5: px(20),
      6: px(24), 8: px(32), 10: px(40), 12: px(48), 16: px(64),
    },
    radius: {
      $type: 'dimension',
      sm: px(4), md: px(8), lg: px(12), xl: px(16), full: px(9999),
    },
    'font-family': {
      $type: 'fontFamily',
      sans: { $value: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'] },
      mono: { $value: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'] },
      // Roles: designs use these, a document points them at its fonts, and themes can swap them.
      heading: { $value: '{font-family.sans}' },
      body: { $value: '{font-family.sans}' },
    },
    'font-size': {
      $type: 'dimension',
      xs: px(12), sm: px(14), md: px(16), lg: px(18), xl: px(20),
      '2xl': px(24), '3xl': px(30), '4xl': px(40), '5xl': px(56),
    },
    'font-weight': {
      $type: 'fontWeight',
      regular: { $value: 400 }, medium: { $value: 500 }, semibold: { $value: 600 }, bold: { $value: 700 },
    },
    'line-height': {
      $type: 'number',
      tight: { $value: 1.15 }, snug: { $value: 1.3 }, normal: { $value: 1.5 },
    },
    shadow: {
      $type: 'shadow',
      sm: { $value: '0 1px 2px rgb(15 23 42 / 0.08)' },
      md: { $value: '0 4px 12px rgb(15 23 42 / 0.12)' },
    },
  },
  modes: {
    dark: { color: roles(DARK) },
  },
};
