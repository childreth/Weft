import { describe, expect, it } from 'vitest';
import { z } from 'zod';
import { closestKey, strictObject } from './strict';

describe('strict tool arguments', () => {
  it('names the key a mistyped one meant', () => {
    expect(closestKey('parent', ['doc', 'parentId', 'nodes', 'model'])).toBe('parentId');
    expect(closestKey('id', ['doc', 'rootId', 'detail', 'depth', 'model'])).toBe('rootId');
    expect(closestKey('heightmode', ['width', 'heightMode'])).toBe('heightMode');
    expect(closestKey('stlyes', ['styles', 'states'])).toBe('styles');
    expect(closestKey('banana', ['doc', 'nodes'])).toBeNull();
  });

  it('refuses unknown keys with the closest real one', () => {
    const schema = strictObject({ doc: z.string(), parentId: z.string().nullable().optional() });
    const res = schema.safeParse({ doc: 'a', parent: 'f_1' });
    expect(res.success).toBe(false);
    expect(res.error!.issues[0]!.message).toBe('Unknown key "parent" (did you mean "parentId"?). Allowed: doc, parentId');
    expect(schema.safeParse({ doc: 'a', parentId: null }).success).toBe(true);
  });
});
