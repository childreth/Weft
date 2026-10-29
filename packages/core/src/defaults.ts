import type { StyleMap } from './schema';

export const DEFAULT_ARTBOARD_STYLES: StyleMap = {
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--space-6)',
  padding: 'var(--space-8)',
  backgroundColor: 'var(--color-surface)',
  color: 'var(--color-text)',
  fontFamily: 'var(--font-family-sans)',
  fontSize: 'var(--font-size-md)',
  lineHeight: 'var(--line-height-normal)',
};

export const DEFAULT_FRAME_STYLES: StyleMap = {
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--space-3)',
  padding: 'var(--space-4)',
  backgroundColor: 'var(--color-surface-subtle)',
  borderRadius: 'var(--radius-md)',
  minHeight: '64px',
};

export const DEFAULT_TEXT_STYLES: StyleMap = {};

/**
 * Base CSS every artboard renders with. Exported code must ship the same
 * reset so the canvas and production render identically. A themed frame takes
 * its theme's text color: an inherited color is already computed, so it would
 * keep the parent theme's (inline styles still win).
 */
export const ARTBOARD_RESET_CSS = `
*, *::before, *::after { box-sizing: border-box; }
* { margin: 0; }
button, input { font: inherit; color: inherit; }
img, svg { display: block; max-width: 100%; }
[data-theme] { color: var(--color-text); }
`;
