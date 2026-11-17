// Turns Assist traces into a dataset mlx-lm can fine-tune on (`mlx_lm.lora --data <out>`).
//
//   cd apps/server && npx tsx ../../evals/traces/export.mts [--dir <traces>] [--out <folder>] [--model <name>]…
//                                                           [--reasoning] [--with-refused] [--valid 0.1]
//
// Traces are written by a Weft server started with WEFT_TRACES=1 (apps/server/src/traces.ts): one
// line per Assist turn, plus a line for each turn the user undid. A turn makes a training example
// when it ended with an answer, the user kept it, and (unless --with-refused) every tool call in it
// was accepted. Each example is the conversation the model saw at its last step, in the chat format
// mlx-lm reads: {"messages": [...], "tools": [...]}. --model keeps only turns by models whose name
// contains one of the values (a teacher, say); --reasoning keeps each reply's reasoning as
// `reasoning_content`, which Qwen 3's chat template puts in a <think> block. Examples are split into
// train.jsonl and valid.jsonl by turn id, so the same turn always lands on the same side.
//
// The traces hold your documents' content, and so does the output: it defaults to a folder inside
// .weft-data, which is never committed.
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { TraceMessage, TraceRecord, TraceTurn } from '../../apps/server/src/traces';

const REPO = join(fileURLToPath(new URL('.', import.meta.url)), '..', '..');
const args = process.argv.slice(2);
const flag = (name: string) => args.includes(`--${name}`);
const values = (name: string) => args.flatMap((a, i) => (a === `--${name}` && args[i + 1] ? [args[i + 1]!] : []));
const dir = values('dir')[0] ?? join(REPO, '.weft-data', 'traces');
const out = values('out')[0] ?? join(dir, 'mlx');
const models = values('model');
const validShare = Number(values('valid')[0] ?? 0.1);

if (!existsSync(dir)) {
  console.error(`No traces at ${dir}. Start Weft with WEFT_TRACES=1 pnpm dev and use Assist first.`);
  process.exit(1);
}

const records = readdirSync(dir)
  .filter((f) => f.endsWith('.jsonl'))
  .sort()
  .flatMap((f) =>
    readFileSync(join(dir, f), 'utf8')
      .split('\n')
      .filter(Boolean)
      .map((line) => JSON.parse(line) as TraceRecord),
  );
const undone = new Set(records.flatMap((r) => (r.type === 'undo' ? [r.turn] : [])));
const turns = records.filter((r): r is TraceTurn => r.type === 'turn');

/** Why a turn isn't an example, or undefined when it is one. */
function skip(t: TraceTurn): string | undefined {
  if (models.length > 0 && !models.some((m) => t.model.includes(m))) return 'another model';
  if (t.outcome !== 'answered') return t.outcome === 'stopped' ? 'stopped by the user' : 'ended in an error';
  if (undone.has(t.id)) return 'undone by the user';
  if (t.refused > 0 && !flag('with-refused')) return 'had a refused tool call';
  return undefined;
}

/** One message in mlx-lm's (OpenAI-style) chat format. */
function toChat(m: TraceMessage): Record<string, unknown> {
  if (m.role === 'tool') return { role: 'tool', name: m.tool_name, content: m.content };
  if (m.role !== 'assistant') return { role: m.role, content: m.content };
  return {
    role: 'assistant',
    content: m.content,
    // Only the name and arguments: Ollama adds its own fields (`index`) that chat templates don't expect.
    ...(m.tool_calls && { tool_calls: m.tool_calls.map(({ function: { name, arguments: args } }) => ({ type: 'function', function: { name, arguments: args } })) }),
    ...(flag('reasoning') && m.thinking && { reasoning_content: m.thinking }),
  };
}

const skipped = new Map<string, number>();
const byModel = new Map<string, number>();
const split = { train: [] as string[], valid: [] as string[] };
for (const t of turns) {
  const why = skip(t);
  if (why) {
    skipped.set(why, (skipped.get(why) ?? 0) + 1);
    continue;
  }
  byModel.set(t.model, (byModel.get(t.model) ?? 0) + 1);
  // The turn id decides the side, so exporting again with more traces never moves an example.
  const side = createHash('sha256').update(t.id).digest()[0]! / 256 < validShare ? 'valid' : 'train';
  split[side].push(JSON.stringify({ messages: t.messages.map(toChat), tools: t.tools }));
}

mkdirSync(out, { recursive: true });
for (const side of ['train', 'valid'] as const) writeFileSync(join(out, `${side}.jsonl`), split[side].map((l) => `${l}\n`).join(''));

console.log(`${turns.length} turns in ${dir}`);
console.log(`  ${split.train.length + split.valid.length} examples: ${split.train.length} train, ${split.valid.length} valid → ${out}`);
for (const [model, n] of byModel) console.log(`    ${n} by ${model}`);
for (const [why, n] of skipped) console.log(`  ${n} left out: ${why}`);
if (split.valid.length === 0 && split.train.length > 0) console.log('  No validation examples yet: mlx-lm needs valid.jsonl to hold at least one. Collect more turns, or raise --valid.');
