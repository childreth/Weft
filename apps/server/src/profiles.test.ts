import { describe, expect, it } from 'vitest';
import { profileFor, selectionParts, smallSelection, smallSystemPrompt, smallTool } from './profiles';

describe('prompt profiles', () => {
  it('gives models built for Weft the small profile, unless asked otherwise', () => {
    expect(profileFor('weft-fix:270m')).toBe('small');
    expect(profileFor('qwen3.8:27b-mlx')).toBe('full');
    expect(profileFor('qwen3.8:27b-mlx', 'small')).toBe('small');
    expect(profileFor('weft-fix:270m', 'full')).toBe('full');
    expect(profileFor('weft-fix:270m', 'huge')).toBe('small');
  });

  it("keeps a selection's layout styles, everywhere in it, and drops the rest", () => {
    const row = {
      id: 'a',
      tag: 'li',
      styles: { display: 'grid', gridTemplateColumns: '1fr 40px', gap: 'var(--space-2)', padding: '8px', color: 'var(--color-on-surface)', fontSize: '14px', borderRadius: '8px' },
      breakpoints: { mobile: { gridTemplateColumns: '1fr', backgroundColor: 'red' }, tablet: { color: 'blue' } },
      states: { hover: { backgroundColor: 'var(--color-surface-container)' } },
      attributes: { 'aria-label': 'Row' },
      children: [{ id: 'b', tag: 'span', text: 'Hi', styles: { fontWeight: '600' } }],
    };
    expect(smallSelection(row)).toEqual({
      id: 'a',
      tag: 'li',
      styles: { display: 'grid', gridTemplateColumns: '1fr 40px', gap: 'var(--space-2)', padding: '8px' },
      breakpoints: { mobile: { gridTemplateColumns: '1fr' } },
      attributes: { 'aria-label': 'Row' },
      children: [{ id: 'b', tag: 'span', text: 'Hi' }],
    });
    expect(smallSystemPrompt([])).toContain('Nothing is selected');
    expect(smallSystemPrompt([{ id: 'a' }])).toContain('[{"id":"a"}]');
  });

  it("shows each selected layer's parent once, trimmed like the selection", () => {
    const nav = { id: 'nav', tag: 'nav', name: 'Nav', styles: { display: 'flex', gap: '24px', color: 'red' }, childCount: 3 };
    const link = (id: string) => ({ id, tag: 'a', text: id, parent: nav });
    expect(selectionParts([link('a'), link('b')])).toEqual({
      layers: [{ id: 'a', tag: 'a', text: 'a', parentId: 'nav' }, { id: 'b', tag: 'a', text: 'b', parentId: 'nav' }],
      parents: [nav],
    });
    // A selected parent is shown in full already, not again as a parent.
    expect(selectionParts([link('a'), link('b'), { id: 'nav', tag: 'nav' }]).parents).toEqual([]);
    // One selected layer is the one to change: no parent, which pulled models away from it.
    expect(selectionParts([link('a')])).toEqual({ layers: [{ id: 'a', tag: 'a', text: 'a' }], parents: [] });
    const prompt = smallSystemPrompt([link('a'), link('b')].map(smallSelection));
    expect(prompt).toContain('"parentId":"nav"');
    expect(prompt.match(/"id":"nav"/g)).toHaveLength(1);
    expect(prompt).toContain('"styles":{"display":"flex","gap":"24px"}');
    expect(prompt).not.toContain('color');
  });

  it("cuts a tool's descriptions to a sentence and drops what tells a model nothing", () => {
    const tool = {
      type: 'function' as const,
      function: {
        name: 'update_nodes',
        description: 'Applies patches in one step. styles are merged; null removes one.',
        parameters: {
          $schema: 'http://json-schema.org/draft-07/schema#',
          type: 'object',
          additionalProperties: false,
          required: ['updates'],
          properties: {
            updates: {
              type: 'array',
              minItems: 1,
              items: {
                type: 'object',
                properties: {
                  // Property names that look like schema keywords are kept.
                  default: { type: 'string', description: 'A name, e.g. a default. Second sentence.' },
                  styles: { type: 'object', propertyNames: { type: 'string' }, additionalProperties: { type: ['string', 'null'] } },
                  mode: { type: 'string', enum: ['fixed', 'hug'], description: '"hug" sizes it to its content: height follows.' },
                },
              },
            },
          },
        },
      },
    };
    expect(smallTool(tool).function).toEqual({
      name: 'update_nodes',
      description: 'Applies patches in one step.',
      parameters: {
        type: 'object',
        required: ['updates'],
        properties: {
          updates: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                default: { type: 'string', description: 'A name, e.g. a default.' },
                styles: { type: 'object', additionalProperties: { type: ['string', 'null'] } },
                mode: { type: 'string', enum: ['fixed', 'hug'], description: '"hug" sizes it to its content: height follows.' },
              },
            },
          },
        },
      },
    });
  });
});
