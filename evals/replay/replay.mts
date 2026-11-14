// Sends a captured request to a model N times and records what comes back each time.
//
//   cd apps/server && npx tsx ../../evals/replay/replay.mts <fixture> ollama <model> [n=5] [minutes=12]
//   cd apps/server && npx tsx ../../evals/replay/replay.mts <fixture> openai <model> [n=5] [minutes=12] [--url http://127.0.0.1:9931]
//
// `ollama` posts the request to Ollama's /api/chat exactly as Assist does.
// `openai` posts the same conversation to an OpenAI-compatible server (Llama.app,
// llama.cpp's server, LM Studio…), to tell a model's own behaviour from a runtime's.
// Each sample is one line in runs/<date>-<fixture>-<runtime>-<model>.jsonl:
//   call     a tool call that could be read (check.mts says whether Weft accepts it)
//   lost     the reply ended with no text and no readable call: the runtime dropped a malformed one
//   loop     the reasoning was repeating itself, by the check Assist uses, and the sample was ended
//   text     an answer in words, no call
//   timeout  nothing final within the time allowed
//   error    the runtime refused or failed
import { appendFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { FIXTURES, RUNS, isRepeating } from './shared.mts';

const [fixture, runtime, model] = process.argv.slice(2);
const numbers = process.argv.slice(5).filter((a) => /^\d+$/.test(a)).map(Number);
const [count = 5, minutes = 12] = numbers;
const urlFlag = process.argv.indexOf('--url');
const base = urlFlag > 0 ? process.argv[urlFlag + 1] : runtime === 'ollama' ? 'http://127.0.0.1:11434' : 'http://127.0.0.1:9931';
if (!fixture || !['ollama', 'openai'].includes(runtime) || !model) throw new Error('Usage: replay.mts <fixture> <ollama|openai> <model> [n] [minutes] [--url base]');

interface Message {
  role: string;
  content: string;
  tool_calls?: Array<{ function: { name: string; arguments: unknown } }>;
}
const captured = JSON.parse(readFileSync(join(FIXTURES, `${fixture}.request.json`), 'utf8')) as { messages: Message[]; tools: unknown[]; think?: unknown; options?: { temperature?: number } };
mkdirSync(RUNS, { recursive: true });
const out = join(RUNS, `${new Date().toISOString().slice(0, 10)}-${fixture}-${runtime}-${model.replace(/[^a-zA-Z0-9.]+/g, '_')}.jsonl`);

type Outcome = 'call' | 'lost' | 'loop' | 'text' | 'timeout' | 'error';
interface Result {
  outcome: Outcome;
  tool?: string;
  arguments?: unknown;
  detail?: string;
}
/** What the model has reasoned in the current sample, kept here so a timeout can still report it. */
let reasoning = '';

/** The reply's lines as they arrive; a line may be Ollama's JSON or an SSE `data:` line. */
async function* lines(res: Response): AsyncGenerator<string> {
  let buffer = '';
  for await (const chunk of res.body as unknown as AsyncIterable<Uint8Array>) {
    buffer += Buffer.from(chunk).toString('utf8');
    const parts = buffer.split('\n');
    buffer = parts.pop()!;
    for (const part of parts) if (part.trim()) yield part;
  }
  if (buffer.trim()) yield buffer;
}

function finish(calls: Array<{ name: string; arguments: unknown }>, content: string): Result {
  if (calls.length > 0) {
    try {
      const args = typeof calls[0].arguments === 'string' ? JSON.parse(calls[0].arguments) : calls[0].arguments;
      return { outcome: 'call', tool: calls.map((c) => c.name).join('+'), arguments: args };
    } catch {
      return { outcome: 'lost', detail: `arguments aren't JSON: ${String(calls[0].arguments).slice(0, 300)}` };
    }
  }
  return content.trim() ? { outcome: 'text', detail: content.slice(0, 400) } : { outcome: 'lost' };
}

async function ollama(signal: AbortSignal): Promise<Result> {
  const res = await fetch(`${base}/api/chat`, { method: 'POST', signal, body: JSON.stringify({ ...captured, model, stream: true }) });
  if (!res.ok) return { outcome: 'error', detail: (await res.text()).slice(0, 400) };
  let content = '';
  const calls: Array<{ name: string; arguments: unknown }> = [];
  for await (const line of lines(res)) {
    const part = JSON.parse(line) as { error?: string; message?: { thinking?: string; content?: string; tool_calls?: Array<{ function: { name: string; arguments: unknown } }> } };
    if (part.error) return { outcome: 'error', detail: part.error.slice(0, 400) };
    reasoning += part.message?.thinking ?? '';
    content += part.message?.content ?? '';
    calls.push(...(part.message?.tool_calls ?? []).map((c) => c.function));
    // Leaving the loop closes the response, which is what stops the model.
    if (isRepeating(reasoning)) return { outcome: 'loop' };
  }
  return finish(calls, content);
}

async function openai(signal: AbortSignal): Promise<Result> {
  // The same conversation in OpenAI's shape: a tool call has an id and its arguments as a JSON string.
  let id = 0;
  const messages = captured.messages.map((m) => {
    if (m.role === 'assistant' && m.tool_calls) {
      return { role: 'assistant', content: m.content, tool_calls: m.tool_calls.map((c) => ({ id: `call_${++id}`, type: 'function', function: { name: c.function.name, arguments: JSON.stringify(c.function.arguments) } })) };
    }
    return m.role === 'tool' ? { role: 'tool', tool_call_id: `call_${id}`, content: m.content } : { role: m.role, content: m.content };
  });
  const res = await fetch(`${base}/v1/chat/completions`, {
    method: 'POST',
    signal,
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ model, messages, tools: captured.tools, temperature: captured.options?.temperature ?? 0.2, stream: true }),
  });
  if (!res.ok) {
    const text = await res.text();
    return { outcome: /pars/i.test(text) ? 'lost' : 'error', detail: text.slice(0, 400) };
  }
  let content = '';
  const calls: Array<{ name: string; arguments: string }> = [];
  for await (const line of lines(res)) {
    if (!line.startsWith('data:') || line.includes('[DONE]')) continue;
    const part = JSON.parse(line.slice(5)) as {
      error?: { message?: string };
      choices?: Array<{ delta?: { content?: string; reasoning_content?: string; tool_calls?: Array<{ index: number; function?: { name?: string; arguments?: string } }> } }>;
    };
    if (part.error) return { outcome: /pars/i.test(part.error.message ?? '') ? 'lost' : 'error', detail: JSON.stringify(part.error).slice(0, 400) };
    const delta = part.choices?.[0]?.delta;
    reasoning += delta?.reasoning_content ?? '';
    content += delta?.content ?? '';
    for (const call of delta?.tool_calls ?? []) {
      calls[call.index] ??= { name: '', arguments: '' };
      calls[call.index].name += call.function?.name ?? '';
      calls[call.index].arguments += call.function?.arguments ?? '';
    }
    if (isRepeating(reasoning)) return { outcome: 'loop' };
  }
  return finish(calls, content);
}

/** A call in a line: enough to tell a read from the work. */
function brief(result: Result): string {
  const args = result.arguments as { updates?: Array<Record<string, unknown>> } | undefined;
  if (result.outcome !== 'call') return (result.detail ?? reasoning.slice(-160)).replace(/\s+/g, ' ').slice(0, 160);
  if (!Array.isArray(args?.updates)) return `${result.tool} ${JSON.stringify(args).slice(0, 120)}`;
  const n = (key: string) => args.updates!.filter((u) => u[key] !== undefined && u[key] !== null).length;
  return `${result.tool} ${args.updates.length} updates: ${n('component')} component, ${n('bind')} bind, ${n('instance')} instance`;
}

const tally: Partial<Record<Outcome, number>> = {};
for (let i = 1; i <= count; i++) {
  const started = Date.now();
  reasoning = '';
  const limit = AbortSignal.timeout(minutes * 60_000);
  let result: Result;
  try {
    result = await (runtime === 'ollama' ? ollama(limit) : openai(limit));
  } catch (err) {
    result = limit.aborted ? { outcome: 'timeout' } : { outcome: 'error', detail: String(err).slice(0, 300) };
  }
  const seconds = Math.round((Date.now() - started) / 1000);
  tally[result.outcome] = (tally[result.outcome] ?? 0) + 1;
  appendFileSync(out, `${JSON.stringify({ i, fixture, runtime, model, at: new Date().toISOString(), seconds, ...result, reasoningChars: reasoning.length, reasoning })}\n`);
  console.log(`${i}/${count} ${result.outcome} ${seconds}s (reasoning ${reasoning.length}) ${brief(result)}`);
}
console.log(`\n${runtime} ${model}: ${Object.entries(tally).map(([k, v]) => `${k} ${v}`).join(', ')} of ${count}\n${out}`);
