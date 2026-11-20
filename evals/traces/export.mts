// Turns Assist traces into a dataset mlx-lm can fine-tune on (`mlx_lm.lora --data <out>`).
//
//   cd apps/server && npx tsx ../../evals/traces/export.mts [--dir <traces>] [--out <folder>] [--model <name>]…
//                                                           [--reasoning] [--with-refused] [--valid 0.1] [--profile small]
//                                                           [--max-tokens 6000] [--last-only]
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
// --profile small rebuilds each example as Assist sends it to a model tuned for Weft
// (apps/server/src/profiles.ts): the short system prompt around the selection with only its layout
// styles, and only the quick-fix tools with one-line descriptions. A model is trained on what it will
// be sent, so this is the dataset for a `weft-…` model. Turns that used a tool the profile doesn't
// offer are left out. Without --profile, each example is the prompt as it was sent.
//
// Each step is its own example: the conversation up to and including one assistant message (a tool
// call, or the closing reply). mlx-lm's --mask-prompt trains only an example's last message, so one
// example per turn taught only the closing sentence, and a model trained that way wrote fluent
// summaries of edits it never made. --last-only keeps one example per turn.
//
// --max-tokens leaves out examples longer than that, estimated at 3.3 characters a token (JSON is
// token-heavy: Qwen 3.5's tokenizer averaged 3.45 on these examples, so 4 let 6,400-token ones through). mlx-lm cuts
// a sequence past its --max-seq-length from the end, which is where the reply it learns from is, so
// a long example should be left out rather than cut; and memory in training grows with the longest.
//
// The traces hold your documents' content, and so does the output: it defaults to a folder inside
// .weft-data, which is never committed.
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { TraceMessage, TraceRecord, TraceTurn } from '../../apps/server/src/traces';
import { SMALL_TOOLS, smallSelection, smallSystemPrompt, smallTool } from '../../apps/server/src/profiles';

const REPO = join(fileURLToPath(new URL('.', import.meta.url)), '..', '..');
const args = process.argv.slice(2);
const flag = (name: string) => args.includes(`--${name}`);
const values = (name: string) => args.flatMap((a, i) => (a === `--${name}` && args[i + 1] ? [args[i + 1]!] : []));
const dir = values('dir')[0] ?? join(REPO, '.weft-data', 'traces');
const out = values('out')[0] ?? join(dir, 'mlx');
const models = values('model');
const validShare = Number(values('valid')[0] ?? 0.1);
const profile = values('profile')[0];
const maxTokens = values('max-tokens')[0] ? Number(values('max-tokens')[0]) : undefined;
/** A little under what Qwen 3.5's tokenizer averaged on exported examples (3.45), so a cap errs short. */
const CHARS_PER_TOKEN = 3.3;
if (profile !== undefined && profile !== 'small') {
  console.error(`--profile takes "small" (left out, examples keep the prompt they were sent)`);
  process.exit(1);
}

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
  if (profile === 'small') {
    const outside = t.messages.flatMap((m) => m.tool_calls ?? []).find((c) => !SMALL_TOOLS.includes(c.function.name));
    if (outside) return `used ${outside.function.name}, which the small profile doesn't offer`;
    if (!selectedOf(t)) return "its selection can't be read back";
  }
  return undefined;
}

type Tool = { type: 'function'; function: { name: string; description: string; parameters: Record<string, unknown> } };
const FULL_PROMPT_SELECTION = 'Your edits since are not reflected here:\n';

/** The selected layers: recorded since profiles, read back out of the full prompt before that. */
function selectedOf(t: TraceTurn): Record<string, unknown>[] | undefined {
  if (t.selected) return t.selected;
  const system = t.messages[0]?.content ?? '';
  const at = system.indexOf(FULL_PROMPT_SELECTION);
  if (at === -1) return system.includes('Nothing is selected.') ? [] : undefined;
  try {
    return JSON.parse(system.slice(at + FULL_PROMPT_SELECTION.length)) as Record<string, unknown>[];
  } catch {
    return undefined;
  }
}

/** The turn's messages and tools as the chosen profile sends them. */
function promptOf(t: TraceTurn): { messages: TraceMessage[]; tools: unknown[] } {
  if (profile !== 'small') return { messages: t.messages, tools: t.tools };
  const system = smallSystemPrompt(selectedOf(t)!.map(smallSelection));
  const tools = (t.tools as Tool[]).filter((tool) => SMALL_TOOLS.includes(tool.function.name)).map(smallTool);
  return { messages: [{ role: 'system', content: system }, ...t.messages.slice(1)], tools };
}

/**
 * A call's arguments without `doc` and `model`: Assist fills those in itself and
 * never shows them in a tool's schema, but models write them anyway (Qwen signs
 * its edits "model": "Claude Opus 5.5"), and a student would learn to.
 */
function withoutInjected(args: unknown): unknown {
  if (!args || typeof args !== 'object' || Array.isArray(args)) return args;
  const { doc: _doc, model: _model, ...rest } = args as Record<string, unknown>;
  return rest;
}

/** One message in mlx-lm's (OpenAI-style) chat format. */
function toChat(m: TraceMessage): Record<string, unknown> {
  if (m.role === 'tool') return { role: 'tool', name: m.tool_name, content: m.content };
  if (m.role !== 'assistant') return { role: m.role, content: m.content };
  return {
    role: 'assistant',
    content: m.content,
    // Only the name and arguments: Ollama adds its own fields (`index`) that chat templates don't expect.
    ...(m.tool_calls && { tool_calls: m.tool_calls.map(({ function: { name, arguments: args } }) => ({ type: 'function', function: { name, arguments: withoutInjected(args) } })) }),
    ...(flag('reasoning') && m.thinking && { reasoning_content: m.thinking }),
  };
}

const skipped = new Map<string, number>();
const byModel = new Map<string, number>();
const split = { train: [] as string[], valid: [] as string[] };
const sizes = { before: 0, after: 0 };
let turnsUsed = 0;
const lastOnly = flag('last-only');
for (const t of turns) {
  const why = skip(t);
  if (why) {
    skipped.set(why, (skipped.get(why) ?? 0) + 1);
    continue;
  }
  // The turn id decides the side, so exporting again with more traces never moves an example.
  const side = createHash('sha256').update(t.id).digest()[0]! / 256 < validShare ? 'valid' : 'train';
  const { messages, tools } = promptOf(t);
  // --mask-prompt trains only an example's last message. Ending one example at each assistant
  // message teaches every step (the tool calls); one per turn would teach only the closing sentence.
  const ends = lastOnly ? [messages.length] : messages.flatMap((m, i) => (m.role === 'assistant' ? [i + 1] : []));
  let made = 0;
  for (const end of ends) {
    const line = JSON.stringify({ messages: messages.slice(0, end).map(toChat), tools });
    if (maxTokens && line.length / CHARS_PER_TOKEN > maxTokens) {
      const why = `a step longer than ${maxTokens} tokens`;
      skipped.set(why, (skipped.get(why) ?? 0) + 1);
      continue;
    }
    sizes.after += line.length;
    split[side].push(line);
    made++;
  }
  if (made === 0) continue;
  turnsUsed++;
  byModel.set(t.model, (byModel.get(t.model) ?? 0) + 1);
  sizes.before += JSON.stringify({ messages: t.messages.map(toChat), tools: t.tools }).length;
}

mkdirSync(out, { recursive: true });
for (const side of ['train', 'valid'] as const) writeFileSync(join(out, `${side}.jsonl`), split[side].map((l) => `${l}\n`).join(''));

console.log(`${turns.length} turns in ${dir}`);
console.log(`  ${split.train.length + split.valid.length} examples (${lastOnly ? 'one per turn' : 'one per step'}) from ${turnsUsed} turns: ${split.train.length} train, ${split.valid.length} valid → ${out}`);
for (const [model, n] of byModel) console.log(`    ${n} turns by ${model}`);
const kept = split.train.length + split.valid.length;
if (kept > 0) {
  const k = (n: number, of: number) => `${Math.round(n / of / 1000)}k`;
  console.log(`    ${profile ? `profile ${profile}: ` : ''}${k(sizes.after, kept)} characters an example on average (about ${Math.round(sizes.after / kept / CHARS_PER_TOKEN / 100) / 10}k tokens)${profile ? `; a whole turn was ${k(sizes.before, turnsUsed)} as sent` : ''}`);
}
for (const [why, n] of skipped) console.log(`  ${n} left out: ${why}`);
if (split.valid.length === 0 && split.train.length > 0) console.log('  No validation examples yet: mlx-lm needs valid.jsonl to hold at least one. Collect more turns, or raise --valid.');
