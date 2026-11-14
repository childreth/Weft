import { request as httpRequest, type IncomingMessage } from 'node:http';
import { request as httpsRequest } from 'node:https';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { InMemoryTransport } from '@modelcontextprotocol/sdk/inMemory.js';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import type { AgentIdentity, AgentRoster } from './agents';
import { ROOM_NAME, type RoomRegistry } from './room';
import { SERVER_INSTRUCTIONS, compact, createMcpServer, type ToolServices } from './tools';

/**
 * In-editor assistant backed by an Ollama model: local, or an Ollama cloud
 * model the user pulled (`ollama signin`, then a `-cloud` tag), which the
 * local daemon forwards to ollama.com. Each editor tab gets
 * its own agent identity and an in-process MCP client to the same tools
 * outside agents use, so local edits get the cursor, highlights, atomic
 * transactions and per-agent undo for free.
 */

export const DEFAULT_OLLAMA_URL = 'http://127.0.0.1:11434';
const MAX_STEPS = 12;
const MAX_TOOL_RESULT_CHARS = 8000;
/** Cloud models have large contexts: room for the whole design skill. */
const MAX_CLOUD_TOOL_RESULT_CHARS = 60_000;
/** Repeats refused before the model is made to answer without tools. */
const MAX_REPEATS = 2;
const ANSWER_NOW = 'You are repeating tool calls. Stop calling tools and answer the user now with what you already know: what you changed, or what you found and would change.';
/**
 * Limits on one model call. An object so tests can shorten them.
 * - `stepMs`: how long a single call may run. Ours, and said plainly when it's
 *   hit: Node's `fetch` gave up on its own after 5 minutes without a byte and
 *   reported only "fetch failed".
 * - `swallowedMs`: a model that went quiet this long and then finished with no
 *   reply and no tool call was writing something Ollama took and threw away:
 *   a tool call it couldn't parse (it logs a warning and returns nothing).
 */
export const assistLimits = { stepMs: 10 * 60 * 1000, swallowedMs: 1500 };
/** Unreadable calls in a row before the turn is stopped: one nudge, then give up. */
const MAX_UNREADABLE = 2;
/**
 * Sent as the last message of the next call only, never kept: a small model follows what it read last.
 * Size isn't the cause it names: gemma4 lost calls holding a single node, and re-sent one unchanged when told only to send less.
 */
const UNREADABLE_CALL =
  '[From Weft, not the user] Your last tool call could not be read, so nothing was changed: its brackets or quotes did not match. Write the call again from the start, do not repeat it as it was. Close every { and [ exactly once and write nothing after the final }. If it holds many nodes, send fewer per call. If you were not calling a tool, answer the user in plain text now.';
const UNREADABLE_NOTICE =
  "The model's last step ended with no reply and no tool call Weft could read: most likely a tool call whose brackets or quotes didn't match. Asking it to write the call again.";
const UNREADABLE_STOP =
  'Stopped: the model again wrote a tool call that could not be read, so nothing from those calls was applied. Try again, ask for one small step, or use another model.';

/** A model call that ran past `assistLimits.stepMs`; `thinking` is what it had reasoned by then. */
class StepLimitError extends Error {
  constructor(
    model: string,
    readonly thinking: string,
  ) {
    const ms = assistLimits.stepMs;
    const spent = ms >= 60_000 ? `${Math.round(ms / 60_000)} minutes` : `${Math.round(ms / 1000)} seconds`;
    super(`Stopped: ${model} spent ${spent} on one step without finishing${thinking ? ' (its reasoning so far is above)' : ''}. Try a smaller request, or a step at a time.`);
  }
}

/**
 * POSTs JSON and resolves with the response once its head arrives. Not `fetch`:
 * that gives up after 5 minutes without a byte, and a model writing a long tool
 * call sends nothing until it's done. This waits as long as `signal` allows.
 */
function postJSON(url: string, body: unknown, signal: AbortSignal): Promise<IncomingMessage> {
  return new Promise((resolve, reject) => {
    const request = url.startsWith('https:') ? httpsRequest : httpRequest;
    const req = request(url, { method: 'POST', headers: { 'content-type': 'application/json' }, signal }, resolve);
    req.on('error', (err: NodeJS.ErrnoException) =>
      reject(signal.aborted || !err.code ? err : new Error(`Can't reach Ollama at ${new URL(url).origin} (${err.code}). Is it running?`)),
    );
    req.end(JSON.stringify(body));
  });
}

/** A response's body as lines, as they arrive (Ollama streams one JSON object per line). */
async function* responseLines(res: IncomingMessage): AsyncGenerator<string> {
  res.setEncoding('utf8');
  let buffer = '';
  for await (const chunk of res) {
    buffer += chunk as string;
    const lines = buffer.split('\n');
    buffer = lines.pop()!;
    for (const line of lines) if (line.trim()) yield line;
  }
  if (buffer.trim()) yield buffer;
}

async function responseText(res: IncomingMessage): Promise<string> {
  let text = '';
  for await (const line of responseLines(res)) text += `${line}\n`;
  return text.trim();
}

/** User turns of history sent back to the model. */
const HISTORY_TURNS = 6;
const SESSION_IDLE_MS = 30 * 60 * 1000;
/** Filled in by the assistant, so small models never have to get them right. */
const INJECTED_ARGS = ['doc', 'model'];
/** Not offered to local models: the skill and flow tests' schema would fill a small context, and most can't see images. */
const LOCAL_EXCLUDED_TOOLS = new Set(['read_skill', 'get_screenshot', 'test_flow']);

export const SESSION_ID = /^[A-Za-z0-9_-]{8,64}$/;

/** Cuts a long tool result, saying so: silently cut JSON sends small models back to re-read it, deeper each time. */
export function clipToolResult(text: string, max = MAX_TOOL_RESULT_CHARS): string {
  if (text.length <= max) return text;
  return `${text.slice(0, max)}
[Cut off: ${text.length} characters, showing the first ${max}. Don't repeat this call or raise maxDepth. Pass rootId to read one part, or detail "outline" to find ids.]`;
}

/** Ollama's server address: `OLLAMA_HOST` may omit the scheme or port. */
export function ollamaUrlFrom(host: string | undefined): string {
  if (!host) return DEFAULT_OLLAMA_URL;
  const withScheme = /^https?:\/\//.test(host) ? host : `http://${host}`;
  const url = new URL(withScheme);
  if (!url.port && !/^https?:\/\/[^/]+:\d+/.test(withScheme)) url.port = '11434';
  return url.origin;
}

interface OllamaTool {
  type: 'function';
  function: { name: string; description: string; parameters: Record<string, unknown> };
}

interface ChatMessage {
  role: 'system' | 'user' | 'assistant' | 'tool';
  content: string;
  tool_calls?: Array<{ function: { name: string; arguments: unknown } }>;
  tool_name?: string;
  /** Base64 PNGs, for models that can see them. */
  images?: string[];
}

/** How much a thinking model reasons: off/on, or an effort level for models that take one. */
export const THINK_CHOICES = ['off', 'on', 'low', 'medium', 'high'] as const;
export type ThinkChoice = (typeof THINK_CHOICES)[number];
/**
 * Families whose `think` takes an effort level. Ollama reports only that a
 * model thinks; any other thinking model treats a level as plain "on".
 */
const THINK_LEVEL_MODELS = /^(gpt-oss|granite4\.2)\b/;

export interface AssistModel {
  name: string;
  size: number;
  thinking: boolean;
  /** `think` takes low/medium/high rather than only on/off. */
  thinkLevels: boolean;
  vision: boolean;
  /** Runs on ollama.com through the local daemon: needs a network and sends the prompt off the machine. */
  cloud: boolean;
}

/** Streamed to the editor as NDJSON, one event per line. */
export type AssistEvent =
  | { type: 'tool'; name: string; args: Record<string, unknown> }
  | { type: 'tool_result'; name: string; ok: boolean; text: string }
  /** A step's reasoning, when thinking is on, and how long that step took. */
  | { type: 'thinking'; text: string; ms: number }
  | { type: 'message'; text: string }
  | { type: 'error'; message: string }
  | { type: 'done'; edits: number };

interface Session {
  identity: AgentIdentity;
  mcp: McpServer;
  client: Client;
  /** Every MCP tool; each turn offers the ones its model can use (`toolsFor`). */
  tools: OllamaTool[];
  /** Per tool, the injected arguments it takes (tools refuse keys they don't know). */
  injects: Map<string, string[]>;
  history: ChatMessage[];
  lastSeen: number;
  busy: boolean;
  /** The agent's undo-stack depth before each turn that edited, newest last. */
  turns: Array<{ doc: string; depth: number }>;
}

export interface ChatRequest {
  doc: string;
  session: string;
  model: string;
  prompt: string;
  selection?: string[];
  /** Left out: local models don't think (slow for small edits), cloud models use Ollama's default. */
  think?: ThinkChoice;
}

/** Ollama's `think` for a request, or undefined to leave it out. */
export function thinkParam(info: Pick<AssistModel, 'thinking' | 'thinkLevels' | 'cloud'> | undefined, choice: ThinkChoice | undefined): boolean | string | undefined {
  if (!info?.thinking) return undefined;
  if (choice === undefined) return info.cloud ? undefined : false;
  if (choice === 'off' || choice === 'on') return choice === 'on';
  return info.thinkLevels ? choice : true;
}

function toOllamaTool(tool: { name: string; description?: string; inputSchema: Record<string, unknown> }): OllamaTool {
  const schema = structuredClone(tool.inputSchema) as { properties?: Record<string, unknown>; required?: string[] };
  for (const key of INJECTED_ARGS) delete schema.properties?.[key];
  if (schema.required) schema.required = schema.required.filter((k) => !INJECTED_ARGS.includes(k));
  return { type: 'function', function: { name: tool.name, description: tool.description ?? '', parameters: schema } };
}

/** The model's arguments plus the injected ones the tool takes (`doc`, `model`): tools refuse keys they don't know. */
export function injectArgs(args: Record<string, unknown>, takes: readonly string[], req: Pick<ChatRequest, 'doc' | 'model'>): Record<string, unknown> {
  const out = { ...args };
  if (takes.includes('doc')) out.doc = req.doc;
  if (takes.includes('model')) out.model = req.model;
  return out;
}

/** Cloud models get the design skill; models that can see images get screenshots. */
export function toolsFor(tools: OllamaTool[], model: Pick<AssistModel, 'cloud' | 'vision'> | undefined): OllamaTool[] {
  return tools.filter(({ function: { name } }) => {
    if (!LOCAL_EXCLUDED_TOOLS.has(name)) return true;
    if (!model?.cloud) return false;
    return name !== 'get_screenshot' || model.vision;
  });
}

function parseArgs(raw: unknown): Record<string, unknown> {
  if (typeof raw === 'string') {
    try {
      const parsed = JSON.parse(raw);
      return parsed && typeof parsed === 'object' ? parsed : {};
    } catch {
      return {};
    }
  }
  return raw && typeof raw === 'object' ? (raw as Record<string, unknown>) : {};
}

/** Some models send a large array or object argument as a JSON string; parse it where the schema expects one. */
function unstringifyArgs(args: Record<string, unknown>, tool: OllamaTool | undefined): Record<string, unknown> {
  const properties = (tool?.function.parameters.properties ?? {}) as Record<string, { type?: unknown }>;
  const out = { ...args };
  for (const [key, value] of Object.entries(args)) {
    const type = properties[key]?.type;
    if (typeof value !== 'string' || (type !== 'array' && type !== 'object')) continue;
    try {
      const parsed: unknown = JSON.parse(value);
      if (type === 'array' ? Array.isArray(parsed) : parsed && typeof parsed === 'object' && !Array.isArray(parsed)) out[key] = parsed;
    } catch {
      // Not JSON: leave it for the tool's validation to report.
    }
  }
  return out;
}

/** History trimmed to the last few user turns, so a turn's tool messages stay with it. */
function recent(history: ChatMessage[]): ChatMessage[] {
  let turns = 0;
  for (let i = history.length - 1; i >= 0; i--) {
    if (history[i]!.role === 'user' && ++turns === HISTORY_TURNS) return history.slice(i);
  }
  return history;
}

export class Assistant {
  private readonly sessions = new Map<string, Session>();
  private readonly sweep: NodeJS.Timeout;

  constructor(
    private readonly rooms: RoomRegistry,
    private readonly roster: AgentRoster,
    readonly ollamaUrl: string,
    private readonly services: ToolServices,
  ) {
    this.sweep = setInterval(() => {
      for (const [id, s] of this.sessions) if (!s.busy && Date.now() - s.lastSeen > SESSION_IDLE_MS) this.end(id);
    }, 60_000).unref();
  }

  /** Models that can call tools: local ones first (offline-first), largest first, then cloud ones. */
  async models(signal?: AbortSignal): Promise<AssistModel[]> {
    const res = await fetch(`${this.ollamaUrl}/api/tags`, { signal });
    if (!res.ok) throw new Error(`Ollama responded ${res.status}`);
    const { models } = (await res.json()) as {
      models: Array<{ name: string; size?: number; remote_host?: string; capabilities?: string[] }>;
    };
    return models
      .filter((m) => !m.capabilities || m.capabilities.includes('tools'))
      .map((m) => ({
        name: m.name,
        size: m.size ?? 0,
        thinking: !!m.capabilities?.includes('thinking'),
        thinkLevels: !!m.capabilities?.includes('thinking') && THINK_LEVEL_MODELS.test(m.name),
        vision: !!m.capabilities?.includes('vision'),
        cloud: !!m.remote_host || /[:-]cloud$/.test(m.name),
      }))
      .sort((a, b) => Number(a.cloud) - Number(b.cloud) || (a.cloud ? a.name.localeCompare(b.name) : b.size - a.size));
  }

  private async open(id: string): Promise<Session> {
    const existing = this.sessions.get(id);
    if (existing) return existing;
    const identity = this.roster.next();
    const mcp = createMcpServer(this.rooms, identity, this.services, { remindSkill: false });
    const client = new Client({ name: 'Weft Assist', version: '0.1.0' });
    const [clientSide, serverSide] = InMemoryTransport.createLinkedPair();
    await mcp.connect(serverSide);
    await client.connect(clientSide);
    const { tools } = await client.listTools();
    const session: Session = {
      identity,
      mcp,
      client,
      tools: tools.map((t) => toOllamaTool(t as Parameters<typeof toOllamaTool>[0])),
      injects: new Map(tools.map((t) => [t.name, INJECTED_ARGS.filter((k) => k in (t.inputSchema.properties ?? {}))])),
      history: [],
      lastSeen: Date.now(),
      busy: false,
      turns: [],
    };
    this.sessions.set(id, session);
    return session;
  }

  private systemPrompt(req: ChatRequest, info: AssistModel | undefined): string {
    const room = this.rooms.get(req.doc);
    const selected = (req.selection ?? []).filter((id) => room.doc.has(id)).slice(0, 20);
    const selection = selected.length
      ? `When the user sent this request they had selected these nodes ("this", "these", "it" refer to them), with their styles: read them here instead of calling get_canvas. Your edits since are not reflected here:\n${JSON.stringify(
          selected.map((id) => compact(room.doc.getTree(id)[0]!, 4)),
        )}`
      : 'Nothing is selected. Call get_canvas to see the document.';
    return `${SERVER_INSTRUCTIONS}

You are the assistant built into the Weft editor, running on ${info?.cloud ? 'a cloud' : 'a local'} model. The "doc" and "model" arguments are filled in for you: never pass them. ${
      !info?.cloud
        ? "read_skill and get_screenshot aren't available here: skip those steps."
        : info.vision
          ? 'Before designing something new, read the skill; check visual changes with get_screenshot.'
          : "Before designing something new, read the skill. get_screenshot isn't available here: check your work with get_layout."
    }
Make the change the user asks for with as few tool calls as possible, batching nodes into one create_nodes or update_nodes call. Use node ids exactly as given. When done, reply in one or two short sentences saying what you changed. Do not paste JSON back to the user.

${selection}`;
  }

  /** Runs one user turn: model ↔ tools until the model answers, emitting progress as it goes. */
  async chat(req: ChatRequest, emit: (e: AssistEvent) => void, signal: AbortSignal): Promise<void> {
    if (!ROOM_NAME.test(req.doc)) throw new Error('Invalid document name');
    const session = await this.open(req.session);
    if (session.busy) throw new Error('Assist is already working on a request in this tab');
    session.busy = true;
    session.lastSeen = Date.now();
    const presence = this.rooms.get(req.doc).agent(session.identity);
    const depth = presence.undo.undoStack.length;
    session.history.push({ role: 'user', content: req.prompt });
    try {
      const info = (await this.models(signal).catch(() => [])).find((m) => m.name === req.model);
      const tools = toolsFor(session.tools, info);
      // Snapshot the selection once: re-reading it after edits makes models think their change was already there.
      const system = this.systemPrompt(req, info);
      /** One model call. Its reasoning is shown, not kept in the history sent back. */
      const ask = async (prompt: string, offered?: OllamaTool[], extra?: ChatMessage[]) => {
        const started = Date.now();
        const showThinking = (text: string) => void (text && emit({ type: 'thinking', text, ms: Date.now() - started }));
        try {
          const result = await this.complete(session, req.model, info, prompt, signal, offered, req.think, extra);
          return { ...result, empty: !result.reply.content.trim() && !result.reply.tool_calls, showThinking };
        } catch (err) {
          // Cut off mid-thought: what it had reasoned is the only clue to why.
          if (err instanceof StepLimitError) showThinking(err.thinking);
          throw err;
        }
      };
      /** Keeps a reply. Some models (Qwen 3.5) put a final answer only in their reasoning: that is the reply then. */
      const keep = ({ reply, thinking, empty, showThinking }: Awaited<ReturnType<typeof ask>>): ChatMessage => {
        if (empty) reply.content = thinking;
        else showThinking(thinking);
        session.history.push(reply);
        return reply;
      };
      const seen = new Set<string>();
      let repeats = 0;
      let unreadable = 0;
      for (let step = 0; step < MAX_STEPS; step++) {
        if (repeats >= MAX_REPEATS) {
          // A looping model ignores "you already made this call"; without tools it has to answer.
          const reply = keep(await ask(`${system}\n\n${ANSWER_NOW}`));
          emit({ type: 'message', text: reply.content.trim() || 'Done.' });
          return;
        }
        const turn = await ask(system, tools, unreadable > 0 ? [{ role: 'user', content: UNREADABLE_CALL }] : undefined);
        // Nothing came back, or the model wrote on after its reasoning and none of it arrived: a tool call Ollama
        // couldn't parse and dropped. Showing the reasoning as the answer (or "Done.") would hide that nothing happened.
        if (turn.empty && (!turn.thinking || turn.silentMs >= assistLimits.swallowedMs)) {
          turn.showThinking(turn.thinking);
          if (++unreadable >= MAX_UNREADABLE) {
            emit({ type: 'error', message: UNREADABLE_STOP });
            return;
          }
          emit({ type: 'error', message: UNREADABLE_NOTICE });
          continue;
        }
        unreadable = 0;
        const reply = keep(turn);
        const calls = reply.tool_calls ?? [];
        if (calls.length === 0) {
          emit({ type: 'message', text: reply.content.trim() || 'Done.' });
          return;
        }
        for (const call of calls) {
          if (signal.aborted) return;
          const name = call.function.name;
          const args = unstringifyArgs(parseArgs(call.function.arguments), tools.find((t) => t.function.name === name));
          emit({ type: 'tool', name, args });
          // Small models loop on the same call; its result is already in the history.
          const key = `${name} ${JSON.stringify(args)}`;
          if (seen.has(key)) repeats++;
          const text = seen.has(key)
            ? { text: 'You already made this exact call in this turn; its result is above. Use it, try something different, or answer the user.', isError: true, images: [] }
            : await this.callTool(session, tools, name, injectArgs(args, session.injects.get(name) ?? [], req));
          seen.add(key);
          emit({ type: 'tool_result', name, ok: !text.isError, text: text.text.slice(0, 400) });
          session.history.push({
            role: 'tool',
            tool_name: name,
            content: clipToolResult(text.text, info?.cloud ? MAX_CLOUD_TOOL_RESULT_CHARS : MAX_TOOL_RESULT_CHARS),
            ...(text.images.length > 0 && { images: text.images }),
          });
        }
      }
      emit({ type: 'error', message: `Stopped after ${MAX_STEPS} steps without a final answer.` });
    } catch (err) {
      if (!signal.aborted) emit({ type: 'error', message: (err as Error).message });
    } finally {
      // Screenshots are for the turn that took them; later turns would resend megabytes.
      for (const m of session.history) delete m.images;
      session.busy = false;
      session.lastSeen = Date.now();
      const edits = presence.undo.undoStack.length - depth;
      if (edits > 0) session.turns.push({ doc: req.doc, depth });
      emit({ type: 'done', edits: Math.max(edits, 0) });
    }
  }

  /**
   * One model call, streamed; without `tools` the model has to answer in text.
   * `extra` messages go after the history for this call only. `silentMs` is how
   * long the model went without sending anything before it finished.
   */
  private async complete(
    session: Session,
    model: string,
    info: AssistModel | undefined,
    system: string,
    signal: AbortSignal,
    tools?: OllamaTool[],
    choice?: ThinkChoice,
    extra: ChatMessage[] = [],
  ): Promise<{ reply: ChatMessage; thinking: string; silentMs: number }> {
    const limit = new AbortController();
    const timer = setTimeout(() => limit.abort(), assistLimits.stepMs);
    const either = AbortSignal.any([signal, limit.signal]);
    const send = (think: boolean | string | undefined) =>
      postJSON(
        `${this.ollamaUrl}/api/chat`,
        {
          model,
          messages: [{ role: 'system', content: system }, ...recent(session.history), ...extra],
          ...(tools && { tools }),
          // Streamed so the connection is never idle for a whole reply, and so what a model had reasoned survives a stop.
          stream: true,
          ...(think !== undefined && { think }),
          options: { temperature: 0.2 },
        },
        either,
      );
    const ok = (res: IncomingMessage) => res.statusCode !== undefined && res.statusCode >= 200 && res.statusCode < 300;
    let thinking = '';
    try {
      const think = thinkParam(info, choice);
      let res = await send(think);
      // A model that turns out not to take a level still thinks with plain "on".
      if (!ok(res) && typeof think === 'string') {
        res.resume();
        res = await send(true);
      }
      if (!ok(res)) throw new Error(`Ollama: ${(await responseText(res)).slice(0, 300) || res.statusCode}`);
      let content = '';
      const calls: NonNullable<ChatMessage['tool_calls']> = [];
      let lastOutput = Date.now();
      let silentMs = 0;
      for await (const line of responseLines(res)) {
        let chunk: { message?: Partial<ChatMessage> & { thinking?: string }; done?: boolean; error?: string };
        try {
          chunk = JSON.parse(line);
        } catch {
          throw new Error(`Ollama sent a reply that isn't JSON: ${line.slice(0, 120)}`);
        }
        // Ollama reports a failure partway through a stream as a line of its own.
        if (chunk.error) throw new Error(`Ollama: ${chunk.error.slice(0, 300)}`);
        const part = chunk.message;
        if (part?.thinking || part?.content || part?.tool_calls?.length) {
          thinking += part.thinking ?? '';
          content += part.content ?? '';
          calls.push(...(part.tool_calls ?? []));
          lastOutput = Date.now();
        }
        if (chunk.done) silentMs = Date.now() - lastOutput;
      }
      return {
        reply: { role: 'assistant', content, ...(calls.length > 0 && { tool_calls: calls }) },
        thinking: thinking.trim(),
        silentMs,
      };
    } catch (err) {
      if (limit.signal.aborted && !signal.aborted) throw new StepLimitError(model, thinking.trim());
      throw err;
    } finally {
      clearTimeout(timer);
    }
  }

  private async callTool(
    session: Session,
    tools: OllamaTool[],
    name: string,
    args: Record<string, unknown>,
  ): Promise<{ text: string; isError: boolean; images: string[] }> {
    if (!tools.some((t) => t.function.name === name)) return { text: `Unknown tool "${name}"`, isError: true, images: [] };
    try {
      const res = (await session.client.callTool({ name, arguments: args })) as {
        content?: Array<{ type: string; text?: string; data?: string }>;
        isError?: boolean;
      };
      const content = res.content ?? [];
      const text = content.map((c) => c.text ?? '').filter(Boolean).join('\n');
      const images = content.flatMap((c) => (c.type === 'image' && c.data ? [c.data] : []));
      return { text, isError: !!res.isError, images };
    } catch (err) {
      return { text: (err as Error).message, isError: true, images: [] };
    }
  }

  /** Reverts every edit of this tab's most recent turn that changed something. */
  undoTurn(id: string): number {
    const session = this.sessions.get(id);
    const turn = session?.turns.pop();
    if (!session || !turn) return 0;
    const { undo } = this.rooms.get(turn.doc).agent(session.identity);
    let undone = 0;
    while (undo.undoStack.length > turn.depth && undo.canUndo()) {
      undo.undo();
      undone++;
    }
    return undone;
  }

  /** Forgets the conversation; the agent (cursor, undo) stays. */
  reset(id: string): void {
    const session = this.sessions.get(id);
    if (session) session.history = [];
  }

  private end(id: string): void {
    const session = this.sessions.get(id);
    if (!session) return;
    this.sessions.delete(id);
    this.rooms.removeAgent(session.identity.key);
    void session.client.close();
    void session.mcp.close();
  }

  close(): void {
    clearInterval(this.sweep);
    for (const id of [...this.sessions.keys()]) this.end(id);
  }
}
