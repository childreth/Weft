import { randomUUID } from 'node:crypto';
import { createServer, type IncomingMessage, type ServerResponse } from 'node:http';
import type { AddressInfo } from 'node:net';
import { WebSocketServer } from 'ws';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import { isInitializeRequest } from '@modelcontextprotocol/sdk/types.js';
import { AgentRoster, type AgentIdentity } from './agents';
import { Assistant, SESSION_ID, ollamaUrlFrom, type AssistEvent, type ChatRequest } from './assist';
import { RemoteAccess } from './remote';
import { ROOM_NAME, RoomRegistry } from './room';
import { createMcpServer } from './tools';

export interface GridServerOptions {
  port?: number;
  host?: string;
  /** Directory for persisted documents; null keeps everything in memory. */
  dataDir?: string | null;
  /** Ollama server for the in-editor assistant; defaults to OLLAMA_HOST or 127.0.0.1:11434. */
  ollamaUrl?: string;
}

export interface GridServer {
  port: number;
  httpUrl: string;
  wsUrl: string;
  rooms: RoomRegistry;
  remote: RemoteAccess;
  close(): Promise<void>;
}

const LOCAL_HOSTNAMES = new Set(['localhost', '127.0.0.1', '[::1]', '::1']);
/** Set by tunnels and reverse proxies: the request came from elsewhere, whatever its Host says. */
const PROXY_HEADERS = ['x-forwarded-for', 'x-forwarded-host', 'forwarded', 'cf-connecting-ip', 'x-real-ip'];
const MAX_BODY_BYTES = 4 * 1024 * 1024;
const SESSION_IDLE_MS = 30 * 60 * 1000;

/** One connected agent: an MCP session with its own identity (cursor). */
interface AgentSession {
  transport: StreamableHTTPServerTransport;
  mcp: McpServer;
  identity: AgentIdentity;
  /** '' for local clients, else the remote agent's id: a session is only usable with the token that opened it. */
  owner: string;
  lastSeen: number;
}

function hostnameOf(value: string | undefined, withScheme: boolean): string | null {
  if (!value) return null;
  try {
    return new URL(withScheme ? value : `http://${value}`).hostname;
  } catch {
    return null;
  }
}

/** Blocks DNS-rebinding: only requests addressed to a loopback hostname and not relayed by a tunnel or proxy. */
function hostAllowed(req: IncomingMessage): boolean {
  const host = hostnameOf(req.headers.host, false);
  return host !== null && LOCAL_HOSTNAMES.has(host) && !PROXY_HEADERS.some((h) => h in req.headers);
}

/** Bearer token, or `?key=` for agents that only take a URL. */
function presentedToken(req: IncomingMessage, url: URL): string | null {
  const auth = req.headers.authorization;
  if (auth?.startsWith('Bearer ')) return auth.slice('Bearer '.length).trim();
  return url.searchParams.get('key');
}

/** Browsers always send Origin; only local pages may open a socket. */
function originAllowed(req: IncomingMessage): boolean {
  const origin = req.headers.origin;
  if (!origin) return true;
  const host = hostnameOf(origin, true);
  return host !== null && LOCAL_HOSTNAMES.has(host);
}

async function readJson(req: IncomingMessage): Promise<unknown> {
  const chunks: Buffer[] = [];
  let size = 0;
  for await (const chunk of req) {
    size += (chunk as Buffer).length;
    if (size > MAX_BODY_BYTES) throw new Error('Request body too large');
    chunks.push(chunk as Buffer);
  }
  return JSON.parse(Buffer.concat(chunks).toString('utf8'));
}

function json(res: ServerResponse, status: number, body: unknown): void {
  res.writeHead(status, { 'content-type': 'application/json' }).end(JSON.stringify(body));
}

/** The editor runs on another local port, so assist and remote settings answer CORS for local origins only. */
function allowLocalOrigin(req: IncomingMessage, res: ServerResponse): void {
  if (!req.headers.origin) return;
  res.setHeader('access-control-allow-origin', req.headers.origin);
  res.setHeader('access-control-allow-methods', 'GET, POST, OPTIONS');
  res.setHeader('access-control-allow-headers', 'content-type');
  res.setHeader('vary', 'origin');
}

export async function startGridServer(options: GridServerOptions = {}): Promise<GridServer> {
  const host = options.host ?? '127.0.0.1';
  const rooms = new RoomRegistry(options.dataDir ?? null);
  const roster = new AgentRoster();
  const remote = new RemoteAccess(options.dataDir ?? null);
  const sessions = new Map<string, AgentSession>();
  const assistant = new Assistant(rooms, roster, options.ollamaUrl ?? ollamaUrlFrom(process.env.OLLAMA_HOST));
  // Clients that skip sessions share one identity per owner.
  const sessionless = new Map<string, AgentIdentity>();

  const endSession = (id: string) => {
    const session = sessions.get(id);
    if (!session) return;
    sessions.delete(id);
    rooms.removeAgent(session.identity.key);
    void session.mcp.close();
  };
  const sweep = setInterval(() => {
    for (const [id, s] of sessions) if (Date.now() - s.lastSeen > SESSION_IDLE_MS) endSession(id);
  }, 60_000).unref();

  const endRemoteSessions = (owner?: string) => {
    for (const [id, s] of sessions) if (s.owner && (!owner || s.owner === owner)) endSession(id);
    for (const key of [...sessionless.keys()]) {
      if (key && (!owner || key === owner)) {
        rooms.removeAgent(sessionless.get(key)!.key);
        sessionless.delete(key);
      }
    }
  };

  /** `agent` is null for local clients. */
  async function handleMcp(req: IncomingMessage, res: ServerResponse, agent: { id: string; name: string } | null): Promise<void> {
    const owner = agent?.id ?? '';
    const sessionId = req.headers['mcp-session-id'];
    const found = typeof sessionId === 'string' ? sessions.get(sessionId) : undefined;
    const existing = found?.owner === owner ? found : undefined;
    if (sessionId && !existing) {
      // Unknown or expired session: the client must re-initialize.
      return json(res, 404, { jsonrpc: '2.0', error: { code: -32001, message: 'Session not found' }, id: null });
    }
    if (existing) {
      existing.lastSeen = Date.now();
      const body = req.method === 'POST' ? await readJson(req) : undefined;
      return existing.transport.handleRequest(req, res, body);
    }
    if (req.method !== 'POST') {
      return json(res, 405, { jsonrpc: '2.0', error: { code: -32000, message: 'Method not allowed' }, id: null });
    }
    const body = await readJson(req);

    if (isInitializeRequest(body)) {
      const identity = agent ? roster.named(agent.name) : roster.next();
      const mcp = createMcpServer(rooms, identity);
      const transport = new StreamableHTTPServerTransport({
        sessionIdGenerator: () => randomUUID(),
        enableJsonResponse: true,
        onsessioninitialized: (id) => void sessions.set(id, { transport, mcp, identity, owner, lastSeen: Date.now() }),
      });
      transport.onclose = () => transport.sessionId && endSession(transport.sessionId);
      await mcp.connect(transport);
      return transport.handleRequest(req, res, body);
    }

    // Stateless fallback: a fresh server + transport per request.
    let identity = sessionless.get(owner);
    if (!identity) sessionless.set(owner, (identity = agent ? roster.named(agent.name) : roster.next()));
    const mcp = createMcpServer(rooms, identity);
    const transport = new StreamableHTTPServerTransport({ sessionIdGenerator: undefined, enableJsonResponse: true });
    res.on('close', () => {
      void transport.close();
      void mcp.close();
    });
    await mcp.connect(transport);
    await transport.handleRequest(req, res, body);
  }

  async function handleAssist(req: IncomingMessage, res: ServerResponse, route: string): Promise<void> {
    if (route === 'models' && req.method === 'GET') {
      try {
        return json(res, 200, { ollama: assistant.ollamaUrl, models: await assistant.models(AbortSignal.timeout(3000)) });
      } catch {
        return json(res, 503, { ollama: assistant.ollamaUrl, error: `Ollama isn't reachable at ${assistant.ollamaUrl}` });
      }
    }
    if (req.method !== 'POST') return json(res, 405, { error: 'Method not allowed' });
    const body = (await readJson(req)) as Partial<ChatRequest>;
    if (typeof body.session !== 'string' || !SESSION_ID.test(body.session)) return json(res, 400, { error: 'Invalid session' });
    if (route === 'undo') return json(res, 200, { undone: assistant.undoTurn(body.session) });
    if (route === 'reset') {
      assistant.reset(body.session);
      return json(res, 200, { ok: true });
    }
    if (route !== 'chat') return json(res, 404, { error: 'Not found' });
    if (typeof body.prompt !== 'string' || !body.prompt.trim() || typeof body.model !== 'string') {
      return json(res, 400, { error: 'prompt and model are required' });
    }
    // Stream progress as NDJSON; closing the request (Stop) aborts the model call.
    res.writeHead(200, { 'content-type': 'application/x-ndjson', 'cache-control': 'no-cache' });
    const controller = new AbortController();
    res.on('close', () => controller.abort());
    const emit = (e: AssistEvent) => void (!res.writableEnded && res.write(`${JSON.stringify(e)}\n`));
    try {
      await assistant.chat(
        {
          doc: body.doc ?? 'default',
          session: body.session,
          model: body.model,
          prompt: body.prompt.slice(0, 4000),
          selection: Array.isArray(body.selection) ? body.selection.filter((id): id is string => typeof id === 'string') : [],
        },
        emit,
        controller.signal,
      );
    } catch (err) {
      emit({ type: 'error', message: (err as Error).message });
      emit({ type: 'done', edits: 0 });
    }
    res.end();
  }

  async function handleRemoteSettings(req: IncomingMessage, res: ServerResponse, route: string): Promise<void> {
    if (route === '' && req.method === 'GET') return json(res, 200, await remote.status(port));
    if (req.method !== 'POST') return json(res, 405, { error: 'Method not allowed' });
    const body = (await readJson(req)) as { enabled?: unknown; name?: unknown; id?: unknown };
    if (route === 'enabled' && typeof body.enabled === 'boolean') {
      remote.setEnabled(body.enabled);
      if (!body.enabled) endRemoteSessions();
      return json(res, 200, await remote.status(port));
    }
    if (route === 'agents' && typeof body.name === 'string') {
      try {
        return json(res, 200, remote.addAgent(body.name));
      } catch (err) {
        return json(res, 400, { error: (err as Error).message });
      }
    }
    if (route === 'revoke' && typeof body.id === 'string') {
      const revoked = remote.revoke(body.id);
      if (revoked) endRemoteSessions(body.id);
      return json(res, revoked ? 200 : 404, { revoked });
    }
    return json(res, 400, { error: 'Bad request' });
  }

  const http = createServer(async (req, res) => {
    const url = new URL(req.url ?? '/', 'http://localhost');
    const { pathname } = url;
    // Outside this machine (a tunnel): only /mcp, only while remote access is on, never from a web page, and with an agent token.
    let agent: { id: string; name: string } | null = null;
    if (!hostAllowed(req)) {
      if (pathname !== '/mcp' || !remote.enabled || req.headers.origin) return json(res, 403, { error: 'Forbidden host' });
      agent = remote.authenticate(presentedToken(req, url));
      if (!agent) return void res.writeHead(401, { 'content-type': 'application/json', 'www-authenticate': 'Bearer' }).end('{"error":"Invalid token"}');
    }

    if (pathname === '/health') return json(res, 200, { ok: true, documents: rooms.names() });

    if (pathname === '/remote' || pathname.startsWith('/remote/')) {
      if (!originAllowed(req)) return json(res, 403, { error: 'Forbidden origin' });
      allowLocalOrigin(req, res);
      if (req.method === 'OPTIONS') return void res.writeHead(204).end();
      try {
        await handleRemoteSettings(req, res, pathname.slice('/remote/'.length));
      } catch (err) {
        if (!res.headersSent) json(res, err instanceof SyntaxError ? 400 : 500, { error: (err as Error).message });
      }
      return;
    }

    if (pathname.startsWith('/assist/')) {
      if (!originAllowed(req)) return json(res, 403, { error: 'Forbidden origin' });
      allowLocalOrigin(req, res);
      if (req.method === 'OPTIONS') return void res.writeHead(204).end();
      try {
        await handleAssist(req, res, pathname.slice('/assist/'.length));
      } catch (err) {
        if (!res.headersSent) json(res, err instanceof SyntaxError ? 400 : 500, { error: (err as Error).message });
      }
      return;
    }

    if (pathname === '/mcp') {
      try {
        await handleMcp(req, res, agent);
      } catch (err) {
        if (err instanceof SyntaxError || (err as Error).message === 'Request body too large') {
          return json(res, 400, { jsonrpc: '2.0', error: { code: -32700, message: (err as Error).message }, id: null });
        }
        console.error('[mcp]', err);
        if (!res.headersSent) json(res, 500, { jsonrpc: '2.0', error: { code: -32603, message: 'Internal error' }, id: null });
      }
      return;
    }

    json(res, 404, { error: 'Not found' });
  });

  const wss = new WebSocketServer({ noServer: true });
  http.on('upgrade', (req, socket, head) => {
    const reject = (status: string) => {
      socket.write(`HTTP/1.1 ${status}\r\n\r\n`);
      socket.destroy();
    };
    if (!hostAllowed(req) || !originAllowed(req)) return reject('403 Forbidden');
    const segments = new URL(req.url ?? '/', 'http://localhost').pathname.split('/').filter(Boolean);
    const isRpc = segments[0] === 'rpc';
    const name = isRpc ? segments[1] : segments[0];
    if (!name || !ROOM_NAME.test(name) || segments.length !== (isRpc ? 2 : 1)) return reject('404 Not Found');
    wss.handleUpgrade(req, socket, head, (ws) => {
      const room = rooms.get(name);
      if (isRpc) room.addRpcClient(ws);
      else room.addConnection(ws);
    });
  });

  await new Promise<void>((resolve, reject) => {
    http.once('error', reject);
    http.listen(options.port ?? 4510, host, resolve);
  });
  const { port } = http.address() as AddressInfo;

  return {
    port,
    httpUrl: `http://${host}:${port}`,
    wsUrl: `ws://${host}:${port}`,
    rooms,
    remote,
    close: async () => {
      clearInterval(sweep);
      assistant.close();
      for (const id of [...sessions.keys()]) endSession(id);
      for (const client of wss.clients) client.terminate();
      wss.close();
      rooms.close();
      await new Promise<void>((resolve) => {
        http.close(() => resolve());
        http.closeAllConnections(); // open SSE streams from agents
      });
    },
  };
}
