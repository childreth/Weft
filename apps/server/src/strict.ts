import { z } from 'zod';

/**
 * Object schemas for tool arguments that refuse keys they don't know, naming
 * the closest real key. Silently dropping one did damage: `parent` instead of
 * `parentId` made new artboards instead of children, and `get_canvas` with
 * `id` instead of `rootId` returned the whole document, so the agent edited
 * the wrong artboard.
 */
export function strictObject<S extends z.ZodRawShape>(shape: S) {
  const known = Object.keys(shape);
  return z.strictObject(shape, {
    error: (issue) => (issue.code === 'unrecognized_keys' ? unknownKeysMessage(issue.keys, known) : undefined),
  });
}

export function unknownKeysMessage(keys: readonly string[], known: readonly string[]): string {
  const parts = keys.map((key) => {
    const near = closestKey(key, known);
    return near ? `"${key}" (did you mean "${near}"?)` : `"${key}"`;
  });
  return `Unknown ${keys.length === 1 ? 'key' : 'keys'} ${parts.join(', ')}. Allowed: ${known.join(', ')}`;
}

/** The known key a mistyped one most likely meant: same letters in another case, one containing the other, or a near spelling. */
export function closestKey(key: string, known: readonly string[]): string | null {
  const k = key.toLowerCase().replace(/[_-]/g, '');
  let best: { name: string; score: number } | null = null;
  for (const name of known) {
    const n = name.toLowerCase();
    const score = n === k ? 0 : n.includes(k) || k.includes(n) ? 1 + Math.abs(n.length - k.length) / 10 : distance(k, n) <= 2 ? 2 + distance(k, n) : Infinity;
    if (score < (best?.score ?? Infinity)) best = { name, score };
  }
  return best?.name ?? null;
}

function distance(a: string, b: string): number {
  const row = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    let prev = row[0]!;
    row[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const next = Math.min(row[j]! + 1, row[j - 1]! + 1, prev + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = row[j]!;
      row[j] = next;
    }
  }
  return row[b.length]!;
}
