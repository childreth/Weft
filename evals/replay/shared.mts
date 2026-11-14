// Shared by the replay scripts: where things are, and the pieces of Weft's server they run.
// Run the scripts from apps/server, where tsx and the server's dependencies are installed:
//   cd apps/server && npx tsx ../../evals/replay/<script>.mts …
import { createRequire } from 'node:module';
import { cpSync, existsSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

export const HERE = fileURLToPath(new URL('.', import.meta.url));
export const REPO = join(HERE, '..', '..');
export const FIXTURES = join(HERE, 'fixtures');
export const RUNS = join(HERE, 'runs');

export interface Scenario {
  /** Fixture name: `fixtures/<name>.request.json`. */
  name: string;
  doc: string;
  /** The Ollama model Assist is told it's talking to (decides tools and thinking). */
  model: string;
  /** Context the stand-in reports the model as loaded with; decides how much of a tool result Assist keeps. */
  contextTokens?: number;
  think?: 'on' | 'off';
  prompt: string;
  selection: string[];
  /** Tool calls the stand-in model makes, in order, before the request that gets captured. */
  steps: Array<{ name: string; arguments: Record<string, unknown> }>;
}

export const { startGridServer } = (await import(join(REPO, 'apps/server/src/server.ts'))) as typeof import('../../apps/server/src/server');
export const { isRepeating } = (await import(join(REPO, 'apps/server/src/assist.ts'))) as typeof import('../../apps/server/src/assist');

/** An MCP client connected to a Weft server, as an outside agent would be. */
export async function connect(httpUrl: string) {
  const require = createRequire(join(REPO, 'apps/server/package.json'));
  const { Client } = (await import(require.resolve('@modelcontextprotocol/sdk/client/index.js'))) as typeof import('@modelcontextprotocol/sdk/client/index.js');
  const { StreamableHTTPClientTransport } = (await import(require.resolve('@modelcontextprotocol/sdk/client/streamableHttp.js'))) as typeof import('@modelcontextprotocol/sdk/client/streamableHttp.js');
  const client = new Client({ name: 'weft-replay-eval', version: '1.0.0' });
  await client.connect(new StreamableHTTPClientTransport(new URL(`${httpUrl}/mcp`)));
  return client;
}

/**
 * A throwaway copy of one document, so nothing an eval does reaches the real
 * one. `from` is a folder holding `<doc>.ydoc`; a fixture's own snapshot
 * (`fixtures/<name>.local.ydoc`) is used when `from` is a fixture name.
 */
export function copyDocument(doc: string, from: string): string {
  const dir = mkdtempSync(join(tmpdir(), 'weft-replay-'));
  const snapshot = join(FIXTURES, `${from}.local.ydoc`);
  if (existsSync(snapshot)) {
    cpSync(snapshot, join(dir, `${doc}.ydoc`));
    return dir;
  }
  const source = join(from, `${doc}.ydoc`);
  if (!existsSync(source)) throw new Error(`No document to copy: ${source} (and no fixture snapshot ${snapshot})`);
  cpSync(source, join(dir, `${doc}.ydoc`));
  return dir;
}
