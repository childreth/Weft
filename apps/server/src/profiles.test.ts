import { describe, expect, it } from 'vitest';
import { profileFor, smallSelection, smallSystemPrompt, smallTool } from './profiles';

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
