import { randomUUID } from 'node:crypto';
import { createServer, type IncomingMessage, type ServerResponse } from 'node:http';
import type { AddressInfo } from 'node:net';
import { WebSocketServer } from 'ws';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import { isInitializeRequest } from '@modelcontextprotocol/sdk/types.js';
import { AgentRoster, type AgentIdentity } from './agents';
import { ROOM_NAME, RoomRegistry } from './room';
import { createMcpServer } from './tools';

export interface GridServerOptions {
  port?: number;
  host?: string;
  /** Directory for persisted documents; null keeps everything in memory. */
  dataDir?: string | null;
}

export interface GridServer {
  port: number;
  httpUrl: string;
  wsUrl: string;
  rooms: RoomRegistry;
  close(): Promise<void>;
}

const LOCAL_HOSTNAMES = new Set(['localhost', '127.0.0.1', '[::1]', '::1']);
const MAX_BODY_BYTES = 4 * 1024 * 1024;
const SESSION_IDLE_MS = 30 * 60 * 1000;

/** One connected agent: an MCP session with its own identity (cursor). */
interface AgentSession {
  transport: StreamableHTTPServerTransport;
  mcp: McpServer;
  identity: AgentIdentity;
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

/** Blocks DNS-rebinding: only requests addressed to a loopback hostname. */
function hostAllowed(req: IncomingMessage): boolean {
  const host = hostnameOf(req.headers.host, false);
  return host !== null && LOCAL_HOSTNAMES.has(host);
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

export async function startGridServer(options: GridServerOptions = {}): Promise<GridServer> {
  const host = options.host ?? '127.0.0.1';
  const rooms = new RoomRegistry(options.dataDir ?? null);
  const roster = new AgentRoster();
  const sessions = new Map<string, AgentSession>();
  // Clients that skip sessions share one identity.
  let sessionless: AgentIdentity | null = null;

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

  async function handleMcp(req: IncomingMessage, res: ServerResponse): Promise<void> {
    const sessionId = req.headers['mcp-session-id'];
    const existing = typeof sessionId === 'string' ? sessions.get(sessionId) : undefined;
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
      const identity = roster.next();
      const mcp = createMcpServer(rooms, identity);
      const transport = new StreamableHTTPServerTransport({
        sessionIdGenerator: () => randomUUID(),
        enableJsonResponse: true,
        onsessioninitialized: (id) => void sessions.set(id, { transport, mcp, identity, lastSeen: Date.now() }),
      });
      transport.onclose = () => transport.sessionId && endSession(transport.sessionId);
      await mcp.connect(transport);
      return transport.handleRequest(req, res, body);
    }

    // Stateless fallback: a fresh server + transport per request.
    sessionless ??= roster.next();
    const mcp = createMcpServer(rooms, sessionless);
    const transport = new StreamableHTTPServerTransport({ sessionIdGenerator: undefined, enableJsonResponse: true });
    res.on('close', () => {
      void transport.close();
      void mcp.close();
    });
    await mcp.connect(transport);
    await transport.handleRequest(req, res, body);
  }

  const http = createServer(async (req, res) => {
    if (!hostAllowed(req)) return json(res, 403, { error: 'Forbidden host' });
    const { pathname } = new URL(req.url ?? '/', 'http://localhost');

    if (pathname === '/health') return json(res, 200, { ok: true, documents: rooms.names() });

    if (pathname === '/mcp') {
      try {
        await handleMcp(req, res);
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
    close: async () => {
      clearInterval(sweep);
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
