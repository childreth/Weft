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
/** User turns of history sent back to the model. */
const HISTORY_TURNS = 6;
const SESSION_IDLE_MS = 30 * 60 * 1000;
/** Filled in by the assistant, so small models never have to get them right. */
const INJECTED_ARGS = ['doc', 'model'];
/** Not offered to local models: the skill would fill a small context, and most can't see images. */
const LOCAL_EXCLUDED_TOOLS = new Set(['read_skill', 'get_screenshot']);

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

export interface AssistModel {
  name: string;
  size: number;
  thinking: boolean;
  vision: boolean;
  /** Runs on ollama.com through the local daemon: needs a network and sends the prompt off the machine. */
  cloud: boolean;
}

/** Streamed to the editor as NDJSON, one event per line. */
export type AssistEvent =
  | { type: 'tool'; name: string; args: Record<string, unknown> }
  | { type: 'tool_result'; name: string; ok: boolean; text: string }
  | { type: 'message'; text: string }
  | { type: 'error'; message: string }
  | { type: 'done'; edits: number };

interface Session {
  identity: AgentIdentity;
  mcp: McpServer;
  client: Client;
  /** Every MCP tool; each turn offers the ones its model can use (`toolsFor`). */
  tools: OllamaTool[];
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
}

function toOllamaTool(tool: { name: string; description?: string; inputSchema: Record<string, unknown> }): OllamaTool {
  const schema = structuredClone(tool.inputSchema) as { properties?: Record<string, unknown>; required?: string[] };
  for (const key of INJECTED_ARGS) delete schema.properties?.[key];
  if (schema.required) schema.required = schema.required.filter((k) => !INJECTED_ARGS.includes(k));
  return { type: 'function', function: { name: tool.name, description: tool.description ?? '', parameters: schema } };
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
      const seen = new Set<string>();
      let repeats = 0;
      for (let step = 0; step < MAX_STEPS; step++) {
        if (repeats >= MAX_REPEATS) {
          // A looping model ignores "you already made this call"; without tools it has to answer.
          const reply = await this.complete(session, req.model, info, `${system}\n\n${ANSWER_NOW}`, signal);
          session.history.push(reply);
          emit({ type: 'message', text: reply.content.trim() || 'Done.' });
          return;
        }
        const reply = await this.complete(session, req.model, info, system, signal, tools);
        session.history.push(reply);
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
            : await this.callTool(session, tools, name, { ...args, doc: req.doc, model: req.model });
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

  /** One model call; without `tools` the model has to answer in text. */
  private async complete(
    session: Session,
    model: string,
    info: AssistModel | undefined,
    system: string,
    signal: AbortSignal,
    tools?: OllamaTool[],
  ): Promise<ChatMessage> {
    const res = await fetch(`${this.ollamaUrl}/api/chat`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      signal,
      body: JSON.stringify({
        model,
        messages: [{ role: 'system', content: system }, ...recent(session.history)],
        ...(tools && { tools }),
        stream: false,
        // Reasoning makes local models far slower for small edits; cloud models keep it.
        ...(info?.thinking && !info.cloud && { think: false }),
        options: { temperature: 0.2 },
      }),
    });
    if (!res.ok) throw new Error(`Ollama: ${(await res.text()).slice(0, 300) || res.status}`);
    const { message } = (await res.json()) as { message: ChatMessage };
    return { role: 'assistant', content: message.content ?? '', ...(message.tool_calls?.length && { tool_calls: message.tool_calls }) };
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
