// Captures the exact request Assist sends a model at one step of a turn, as a fixture to replay.
//
//   cd apps/server && npx tsx ../../evals/replay/capture.mts ../../evals/replay/fixtures/<name>.scenario.json [--data <folder>]
//
// It runs a second Weft server on a copy of the document, with a scripted
// stand-in for Ollama: the stand-in makes the scenario's tool calls (the reads a
// real model made first), and the request Assist sends after them is saved. No
// model runs, and the real document and the running dev server aren't touched.
// `--data` is the folder holding `<doc>.ydoc` (default: the repo's .weft-data).
import { createServer } from 'node:http';
import type { AddressInfo } from 'node:net';
import { cpSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { FIXTURES, REPO, copyDocument, startGridServer, type Scenario } from './shared.mts';

const scenario = JSON.parse(readFileSync(process.argv[2], 'utf8')) as Scenario;
const dataFlag = process.argv.indexOf('--data');
const data = copyDocument(scenario.doc, dataFlag > 0 ? process.argv[dataFlag + 1] : join(REPO, '.weft-data'));
// The document as it was for this capture, kept beside the fixture (not committed) so check.mts can apply calls to it.
cpSync(join(data, `${scenario.doc}.ydoc`), join(FIXTURES, `${scenario.name}.local.ydoc`));

const recorded: unknown[] = [];
const fake = createServer(async (req, res) => {
  const chunks: Buffer[] = [];
  for await (const c of req) chunks.push(c as Buffer);
  if (req.url === '/api/tags') {
    // The real model list when Ollama is running, so Assist offers this model what it does in the editor.
    const real = await fetch('http://127.0.0.1:11434/api/tags').then((r) => r.text()).catch(() => undefined);
    return res.end(real ?? JSON.stringify({ models: [{ name: scenario.model, size: 1, capabilities: ['completion', 'tools', 'thinking'] }] }));
  }
  if (req.url === '/api/ps') {
    return res.end(JSON.stringify({ models: scenario.contextTokens ? [{ name: scenario.model, context_length: scenario.contextTokens }] : [] }));
  }
  if (req.url !== '/api/chat') return res.end('{}');
  recorded.push(JSON.parse(Buffer.concat(chunks).toString()));
  const call = scenario.steps[recorded.length - 1];
  const message = call ? { role: 'assistant', content: '', tool_calls: [{ function: call }] } : { role: 'assistant', content: 'captured' };
  res.end(`${JSON.stringify({ message, done: true })}\n`);
});
await new Promise<void>((r) => fake.listen(0, '127.0.0.1', r));
const server = await startGridServer({ port: 0, dataDir: data, ollamaUrl: `http://127.0.0.1:${(fake.address() as AddressInfo).port}` });

const res = await fetch(`${server.httpUrl}/assist/chat`, {
  method: 'POST',
  headers: { 'content-type': 'application/json' },
  body: JSON.stringify({ doc: scenario.doc, session: 'replay-capture-1', model: scenario.model, prompt: scenario.prompt, selection: scenario.selection, think: scenario.think }),
});
const events = (await res.text()).trim().split('\n').map((l) => JSON.parse(l) as { type: string; name?: string; ok?: boolean; text?: string });
console.log('turn:', events.map((e) => (e.type === 'tool_result' ? `${e.name} ${e.ok ? 'ok' : `REFUSED ${e.text}`}` : e.type)).join(' → '));
const request = recorded[scenario.steps.length] as { messages: Array<{ role: string; content: string }>; tools: unknown[]; think?: unknown };
if (!request) throw new Error('The turn ended before the step to capture: a scripted call was probably refused (see the turn above)');
const out = join(FIXTURES, `${scenario.name}.request.json`);
writeFileSync(out, `${JSON.stringify(request, null, 1)}\n`);
console.log(`captured ${out}`);
console.log(`  ${request.messages.length} messages (${request.messages.map((m) => `${m.role} ${m.content.length}`).join(', ')} characters), ${request.tools.length} tools, think = ${request.think}`);
for (const m of request.messages) for (const cut of m.content.match(/\[Cut off: [^\]]*/g) ?? []) console.log(`  ${cut.split('.')[0]}]`);
await server.close();
fake.close();
rmSync(data, { recursive: true, force: true });
process.exit(0);
