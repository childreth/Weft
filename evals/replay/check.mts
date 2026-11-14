// Would Weft accept the calls a run produced? Applies each one to a copy of the document, then undoes it.
//
//   cd apps/server && npx tsx ../../evals/replay/check.mts <fixture> ../../evals/replay/runs/<run>.jsonl
//
// Needs the document as it was when the fixture was captured: capture.mts keeps
// it as fixtures/<fixture>.local.ydoc (not committed: it is the whole document).
import { readFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { FIXTURES, connect, copyDocument, startGridServer, type Scenario } from './shared.mts';

const [fixture, run] = process.argv.slice(2);
const scenario = JSON.parse(readFileSync(join(FIXTURES, `${fixture}.scenario.json`), 'utf8')) as Scenario;
const data = copyDocument(scenario.doc, fixture);
const server = await startGridServer({ port: 0, dataDir: data });
const client = await connect(server.httpUrl);
const READS = /^(get_|list_|search_|read_)/;
let accepted = 0;
let refused = 0;
for (const line of readFileSync(run, 'utf8').trim().split('\n')) {
  const r = JSON.parse(line) as { i: number; outcome: string; tool?: string; arguments?: Record<string, unknown> };
  if (r.outcome !== 'call' || !r.tool || READS.test(r.tool) || r.tool.includes('+')) continue;
  const res = await client.callTool({ name: r.tool, arguments: { ...r.arguments, doc: scenario.doc } });
  const text = (res.content as Array<{ text?: string }>).map((c) => c.text ?? '').join('').replace(/\s+/g, ' ');
  console.log(`#${r.i} ${r.tool} ${res.isError ? 'REFUSED' : 'ACCEPTED'}: ${text.slice(0, 400)}`);
  if (res.isError) refused++;
  else {
    accepted++;
    await client.callTool({ name: 'undo_agent_change', arguments: { doc: scenario.doc } });
  }
}
console.log(`\n${accepted} accepted, ${refused} refused`);
await client.close();
await server.close();
rmSync(data, { recursive: true, force: true });
process.exit(0);
