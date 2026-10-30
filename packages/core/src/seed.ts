import { ORIGIN_SEED, type GridDocument, type Origin } from './document';
import { DEFAULT_ARTBOARD_STYLES } from './defaults';
import type { SemanticTag, StyleMap } from './schema';

/** A starter landing page that exercises flex, grid and tokens. */
export function seedLandingPage(doc: GridDocument, origin: Origin = ORIGIN_SEED): string {
  return doc.transact(() => {
    const frame = (parentId: string, tag: SemanticTag, name: string, styles: StyleMap) =>
      doc.createNode({ type: 'frame', parentId, tag, name, styles }, origin);
    const text = (parentId: string, tag: SemanticTag, value: string, styles: StyleMap = {}) =>
      doc.createNode({ type: 'text', parentId, tag, text: value, name: value.slice(0, 24), styles }, origin);

    const page = doc.createNode(
      {
        type: 'frame',
        tag: 'main',
        name: 'Landing — Desktop',
        frame: { x: 0, y: 0, width: 1280, height: 860, heightMode: 'hug' },
        styles: { ...DEFAULT_ARTBOARD_STYLES, gap: 'var(--space-16)', padding: 'var(--space-12)' },
      },
      origin,
    );

    const header = frame(page, 'header', 'Header', {
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    });
    text(header, 'p', 'Weft', { fontWeight: 'var(--font-weight-bold)', fontSize: 'var(--font-size-xl)' });
    const nav = frame(header, 'nav', 'Nav', { display: 'flex', gap: 'var(--space-6)' });
    for (const label of ['Product', 'Docs', 'Pricing']) {
      text(nav, 'a', label, { color: 'var(--color-on-surface-variant)' });
    }

    const hero = frame(page, 'section', 'Hero', {
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
      gap: 'var(--space-12)',
      alignItems: 'center',
    });
    const copy = frame(hero, 'div', 'Hero copy', { display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' });
    text(copy, 'h1', "Design in the browser's own layout engine.", {
      fontSize: 'var(--font-size-5xl)',
      lineHeight: 'var(--line-height-tight)',
      fontWeight: 'var(--font-weight-bold)',
    });
    text(copy, 'p', 'Every artboard is real DOM and CSS Grid, bound to design tokens and editable by people and agents alike.', {
      fontSize: 'var(--font-size-lg)',
      color: 'var(--color-on-surface-variant)',
    });
    const actions = frame(copy, 'div', 'Actions', { display: 'flex', gap: 'var(--space-3)' });
    text(actions, 'button', 'Get started', {
      backgroundColor: 'var(--color-primary)',
      color: 'var(--color-on-primary)',
      padding: 'var(--space-3) var(--space-5)',
      borderRadius: 'var(--radius-md)',
      borderWidth: '0',
      fontWeight: 'var(--font-weight-semibold)',
    });
    text(actions, 'button', 'Read the docs', {
      backgroundColor: 'var(--color-surface)',
      padding: 'var(--space-3) var(--space-5)',
      borderRadius: 'var(--radius-md)',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'var(--color-outline-variant)',
      fontWeight: 'var(--font-weight-semibold)',
    });
    frame(hero, 'figure', 'Hero visual', {
      minHeight: '320px',
      backgroundColor: 'var(--color-surface-container)',
      borderRadius: 'var(--radius-xl)',
    });

    const features = frame(page, 'section', 'Features', {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
      gap: 'var(--space-6)',
    });
    const cards: Array<[string, string]> = [
      ['Native CSS Grid', 'fr, minmax and auto-fit behave exactly as they will in production.'],
      ['Governed tokens', 'Every color, space and type value binds to a design token.'],
      ['Agent-native', 'AI agents edit the same scene graph you do, through the same commands.'],
    ];
    for (const [title, body] of cards) {
      const card = frame(features, 'article', title, {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-2)',
        padding: 'var(--space-6)',
        backgroundColor: 'var(--color-surface-container)',
        borderRadius: 'var(--radius-lg)',
      });
      text(card, 'h3', title, { fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-semibold)' });
      text(card, 'p', body, { color: 'var(--color-on-surface-variant)' });
    }
    return page;
  }, origin);
}
