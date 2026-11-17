import { join, resolve } from 'node:path';
import { startGridServer } from './server';

const port = Number(process.env.WEFT_PORT ?? 4510);
const data = process.env.WEFT_DATA ?? resolve(import.meta.dirname, '../../../.weft-data');
const dataDir = data === ':memory:' ? null : data;

// Opt-in: Assist turns written down as training data (traces.ts). They hold document content and stay in the data folder.
const traceDir = process.env.WEFT_TRACES === '1' && dataDir ? join(dataDir, 'traces') : undefined;

const server = await startGridServer({ port, dataDir, traceDir });

console.log(`Weft server on ${server.httpUrl}`);
console.log(`  documents: ${dataDir ?? '(in memory)'}`);
console.log(`  sync:      ${server.wsUrl}/<doc>`);
console.log(`  MCP:       ${server.httpUrl}/mcp`);
if (traceDir) console.log(`  traces:    ${traceDir} (Assist turns, for training)`);
console.log(`  connect Claude Code: claude mcp add --transport http weft ${server.httpUrl}/mcp`);

let closing = false;
for (const signal of ['SIGINT', 'SIGTERM'] as const) {
  process.on(signal, async () => {
    if (closing) return;
    closing = true;
    await server.close();
    process.exit(0);
  });
}
