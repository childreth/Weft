// Makes training data for a small Weft model: breaks good layouts on purpose,
// has a teacher model fix them through Assist, and keeps the fixes that work.
//
//   cd apps/server && npx tsx ../../evals/generate/generate.mts --model qwen3.8:27b-mlx --runs 50
//
// Each run copies a real document, breaks one layer in it (breakages.mts),
// checks the break shows on the measured page, then sends Assist a prompt the
// way a person would, with the broken layer (or its children) selected. The
// turn is traced as usual, to its own folder. Afterwards the page is measured
// again: a fix that didn't restore the layout, touched layers outside the area,
// or deleted any is undone, which writes the undo line the export already
// drops. So `export.mts --dir <out>` keeps only checked fixes.
//
// Options:
//   --model <name>     teacher (an Ollama model; required)
//   --runs <n>         turns to run (default 20)
//   --docs a,b         documents in --data to copy (default: every one)
//   --data <folder>    where they are (default: the repo's .weft-data)
//   --out <folder>     traces and the run log (default: .weft-data/traces/generated)
//   --only a,b         breakages to use (default: all, by weight)
//   --profile <name>   full (default: the teacher gets every instruction; the export rebuilds the small prompt) or small
//   --think on|off     default: the model's own
//   --seed <n>         same seed, same runs (default: the time)
//
// Nothing here touches the documents in --data or a running dev server: the
// copies live in a temp folder served by a second Weft server.
import { cpSync, existsSync, mkdirSync, mkdtempSync, appendFileSync, readdirSync, rmSync, symlinkSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { REPO, connect, startGridServer } from '../replay/shared.mts';
import { BREAKAGES, type Breakage, type Layout, type Measured } from './breakages.mts';
import type { GridDocument, SceneNode } from '../../packages/core/src/index';

const args = process.argv.slice(2);
const value = (name: string) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : undefined;
};
const model = value('model');
if (!model) {
  console.error('--model is required: the teacher, e.g. --model qwen3.8:27b-mlx');
  process.exit(1);
}
const runs = Number(value('runs') ?? 20);
const source = value('data') ?? join(REPO, '.weft-data');
const out = value('out') ?? join(REPO, '.weft-data', 'traces', 'generated');
const profile = value('profile') ?? 'full';
const think = value('think');
const seed = Number(value('seed') ?? Date.now() % 1e9);
const docs = value('docs')?.split(',') ?? readdirSync(source).filter((f) => f.endsWith('.ydoc')).map((f) => f.slice(0, -'.ydoc'.length));
const only = value('only')?.split(',');
const breakages = only ? BREAKAGES.filter((b) => only.includes(b.name)) : BREAKAGES;
if (only && breakages.length !== only.length) {
  console.error(`Unknown breakage in --only. There are: ${BREAKAGES.map((b) => b.name).join(', ')}`);
  process.exit(1);
}

// Seeded, so a run can be repeated.
let state = seed;
const random = () => {
  state = (state + 0x6d2b79f5) | 0;
  let t = Math.imul(state ^ (state >>> 15), 1 | state);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};
const pick = <T,>(items: readonly T[]): T => items[Math.floor(random() * items.length)]!;
const weighted = (items: readonly Breakage[]): Breakage => {
  let r = random() * items.reduce((s, b) => s + b.weight, 0);
  for (const b of items) if ((r -= b.weight) < 0) return b;
  return items.at(-1)!;
};

// A wrong name would otherwise come back as every run "dropped", which reads like a model that can't do the task.
const ollama = process.env.OLLAMA_HOST ? (process.env.OLLAMA_HOST.startsWith('http') ? process.env.OLLAMA_HOST : `http://${process.env.OLLAMA_HOST}`) : 'http://127.0.0.1:11434';
const installed = await fetch(`${ollama}/api/tags`)
  .then((r) => r.json() as Promise<{ models: Array<{ name: string }> }>)
  .then((r) => r.models.map((m) => m.name))
  .catch(() => undefined);
if (!installed) {
  console.error(`Can't reach Ollama at ${ollama}`);
  process.exit(1);
}
if (!installed.some((name) => name === model || name === `${model}:latest`)) {
  console.error(`Ollama has no model "${model}". Installed: ${installed.join(', ')}`);
  process.exit(1);
}

// A second Weft server on copies. Images and fonts are shared with the real data folder (content-addressed caches).
const data = mkdtempSync(join(tmpdir(), 'weft-generate-'));
for (const cache of ['assets', 'fonts']) if (existsSync(join(source, cache))) symlinkSync(join(source, cache), join(data, cache));
mkdirSync(join(out, 'runs'), { recursive: true });
const log = join(out, 'runs', `${new Date().toISOString().replace(/[:.]/g, '-')}.jsonl`);
const server = await startGridServer({ port: 0, dataDir: data, traceDir: out });
const client = await connect(server.httpUrl);

async function measure(doc: string, ids: string[]): Promise<Layout> {
  const res = (await client.callTool({ name: 'get_layout', arguments: { doc, ids } })) as { content: Array<{ text?: string }>; isError?: boolean };
  const text = res.content[0]?.text ?? '';
  if (res.isError) throw new Error(`get_layout: ${text}`);
  return new Map((JSON.parse(text).nodes as Measured[]).map((m) => [m.id, m]));
}

/** Anything that moved or resized by more than a pixel. */
const changed = (a: Layout, b: Layout) =>
  [...a].some(([id, m]) => {
    const [x, y] = [m.box, b.get(id)?.box];
    return !x || !y || Math.abs(x.x - y.x) > 1 || Math.abs(x.y - y.y) > 1 || Math.abs(x.width - y.width) > 1 || Math.abs(x.height - y.height) > 1;
  });

const subtree = (doc: GridDocument, id: string): string[] => [id, ...doc.getChildren(id).flatMap((c) => subtree(doc, c.id))];

/** Every stored layer outside `allowed`, as text, to see whether a turn touched it. */
const outside = (doc: GridDocument, allowed: Set<string>) =>
  new Map(doc.getNodes().filter((n) => !allowed.has(n.id)).map((n) => [n.id, JSON.stringify({ ...n, index: undefined })]));

type Event = { type: string; text?: string; message?: string; edits?: number; name?: string; ok?: boolean };

async function turn(doc: string, session: string, prompt: string, selection: string[]): Promise<Event[]> {
  const res = await fetch(`${server.httpUrl}/assist/chat`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ doc, session, model, prompt, selection, profile, ...(think && { think }) }),
  });
  if (!res.ok) throw new Error(`/assist/chat: ${res.status} ${await res.text()}`);
  return (await res.text()).trim().split('\n').map((l) => JSON.parse(l) as Event);
}

const tally = new Map<string, { kept: number; ran: number }>();
/** Why attempts didn't become runs, to see when a breakage rarely applies. */
const skips = new Map<string, number>();
const skip = (why: string) => skips.set(why, (skips.get(why) ?? 0) + 1);
console.log(`seed ${seed}, ${runs} runs with ${model} (${profile} profile), ${docs.length} documents → ${out}`);

for (let i = 0, attempts = 0; i < runs && attempts < runs * 20; attempts++) {
  const name = `gen-${seed}-${i}`;
  const from = pick(docs);
  // Unloading saves the last attempt's copy, so it comes before the fresh one.
  server.rooms.unload(name);
  cpSync(join(source, `${from}.ydoc`), join(data, `${name}.ydoc`));
  const room = server.rooms.get(name);
  const breakage = weighted(breakages);
  const candidates = breakage.candidates(room.doc);
  if (!candidates.length) {
    skip(`${breakage.name}: nothing to break in ${from}`);
    continue;
  }
  const node = pick(candidates);
  const parent = node.parentId ?? undefined;
  const children = room.doc.getChildren(node.id).filter((c) => !c.hidden).map((c) => c.id);
  const ids = [node.id, ...(parent ? [parent] : []), ...children];

  let before: Layout, broken: Layout;
  let words: Record<string, string> | void;
  try {
    before = await measure(name, ids);
    if (!before.get(node.id)?.visible) {
      skip(`${breakage.name}: layer not visible`);
      continue;
    }
    const unready = breakage.ready?.(before, node.id, children);
    if (unready) {
      skip(`${breakage.name}: ${unready}`);
      continue;
    }
    words = breakage.apply(room.doc, node, before);
    broken = await measure(name, ids);
  } catch (err) {
    skip(`${breakage.name}: ${(err as Error).message.slice(0, 80)}`);
    continue;
  }
  // A break nobody could see (a breakpoint overrides it, or it changed nothing) teaches nothing.
  if (!breakage.invisible && !changed(before, broken)) {
    skip(`${breakage.name}: the break didn't show`);
    continue;
  }

  const prompt = pick(breakage.prompts).replace(/\{(\w+)\}/g, (_, k: string) => (words as Record<string, string> | undefined)?.[k] ?? k);
  // Usually the broken layer is selected; sometimes its children, as a person might.
  const selection = breakage.childrenSelectable && children.length >= 2 && random() < 0.3 ? children : [node.id];
  const allowed = new Set([...subtree(room.doc, node.id), ...(parent ? [parent] : [])]);
  const untouched = outside(room.doc, allowed);
  const nodeIds = new Set(room.doc.getNodes().map((n) => n.id));
  const session = `generate-${name}`;
  const started = Date.now();
  i++;

  const events = await turn(name, session, prompt, selection);
  const error = events.find((e) => e.type === 'error')?.message;
  const edits = events.findLast((e) => e.type === 'done')?.edits ?? 0;
  const refused = events.filter((e) => e.type === 'tool_result' && !e.ok).length;
  let failed: string | undefined = error ? `turn ended: ${error}` : refused ? `${refused} refused call(s)` : undefined;
  if (!failed) {
    const after = await measure(name, ids).catch((err: Error) => err);
    if (after instanceof Error) failed = after.message;
    else failed = breakage.check({ target: node.id, parent, children, before, broken, after, edits });
  }
  if (!failed) {
    const deleted = [...nodeIds].filter((id) => !room.doc.has(id));
    const now = outside(room.doc, allowed);
    const strayed = [...untouched].filter(([id, was]) => now.has(id) && now.get(id) !== was).map(([id]) => id);
    if (deleted.length) failed = `deleted ${deleted.length} layer(s)`;
    else if (strayed.length) failed = `changed ${strayed.length} layer(s) outside the area`;
  }
  if (failed && edits > 0) {
    await fetch(`${server.httpUrl}/assist/undo`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ session }) });
  }
  // An error or refusal already keeps the turn out of the export; an undo does the rest.

  const t = tally.get(breakage.name) ?? { kept: 0, ran: 0 };
  tally.set(breakage.name, { kept: t.kept + (failed ? 0 : 1), ran: t.ran + 1 });
  const calls = events.filter((e) => e.type === 'tool').map((e) => e.name);
  const record = { run: name, from, breakage: breakage.name, target: node.id, targetName: node.name, prompt, selection, model, profile, seed, ms: Date.now() - started, calls, edits, kept: !failed, why: failed };
  appendFileSync(log, `${JSON.stringify(record)}\n`);
  console.log(`${i}/${runs} ${failed ? 'drop' : 'keep'} ${breakage.name} "${node.name}" in ${from}: ${calls.join(', ') || 'no calls'}${failed ? ` (${failed})` : ''} ${Math.round((Date.now() - started) / 1000)}s`);
  server.rooms.unload(name);
}

console.log('\nkept / ran by breakage:');
for (const [name, t] of tally) console.log(`  ${name}: ${t.kept}/${t.ran}`);
if (skips.size) console.log('attempts skipped:');
for (const [why, n] of [...skips].sort((a, b) => b[1] - a[1])) console.log(`  ${n}× ${why}`);
console.log(`run log: ${log}\nexport: npx tsx ../../evals/traces/export.mts --dir ${out} --profile small`);
await client.close();
await server.close();
rmSync(data, { recursive: true, force: true });
process.exit(0);
