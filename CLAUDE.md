# Weft

AI-native design canvas where the canvas *is* the browser's DOM/CSS engine. Figma-like editing (components, variants, multiplayer later), output is real HTML/CSS.

## Layout
- `packages/core` — framework-free scene graph: schema, `GridDocument` commands, `History`, W3C tokens. Source-only (no build), consumed via `exports` → `src/index.ts`.
- `apps/web` — Vite + React editor. `src/editor` (singletons, UI store, shortcuts, `connection.ts`), `src/canvas` (viewport, shadow-DOM artboards, overlay), `src/panels`.
- `apps/server` — local Node process (127.0.0.1:4510): Yjs sync relay + awareness (`/<doc>`), browser RPC (`/rpc/<doc>`), MCP over Streamable HTTP (`/mcp`), persistence to `.weft-data/` (`.ydoc` + `.weft.json`). It owns seeding.
- Electron shell (`apps/desktop`) comes later; keep `core` and the canvas shell-agnostic.

## Commands
- `pnpm dev` — server + editor at http://localhost:5173. URL params: `?doc=name` (document), `?offline` (browser-only IndexedDB), `?ephemeral` (fresh in-memory seed, used by tests)
- MCP: `.mcp.json` registers `http://127.0.0.1:4510/mcp`; the server must be running
- `pnpm test` — core unit tests (vitest)
- `pnpm test:e2e` — Playwright against the editor; writes screenshots to `apps/web/test-results/` (`m1-editor.png`, `m2-cursors.png`, `m2-agent.png`)
- `pnpm typecheck`

## Rules
- Every document mutation goes through `GridDocument` commands with an origin (`ORIGIN_LOCAL`, `ORIGIN_AGENT`, `ORIGIN_SEED`). Never write to the Yjs maps directly from UI code.
- MCP tools (`apps/server/src/tools.ts`) run each mutating call through `mutate()`: one transaction, rolled back on error, undoable via `undo_agent_change`, and reported as awareness `activity` so editors highlight it. Each MCP session is one agent (`agents.ts`): its own callsign/color, awareness client (cursor `focus`), transaction origin `agent:<key>` and undo stack. Every tool should call `agent.look()` or go through `mutate()` (which calls `reportEdit`) with an action label, so the cursor follows and stays alive; cursor choreography lives in `apps/web/src/canvas/agentCursors.ts`. New commands need a tool here (and in `window.weft.agent` for in-page use).
- The server binds to loopback and rejects non-local Host/Origin headers (DNS rebinding / cross-site sockets). Keep it that way until auth exists.
- Validation lives in core (`assertStyles`, `assertAttributes`, `isValidTag`), not in the UI. UI wraps commands in `run()` to surface `GridError`s.
- Continuous interactions (drag, resize, text edit) wrap their commands in `history.beginGesture()/endGesture()` so they undo as one step.
- Overlay chrome measures in a layout effect (camera changes) plus a rAF loop (other layout changes); never only one.
- Canvas pointer handling uses native listeners: React dispatches events from portals into shadow roots twice.
- Artboard CSS = compiled tokens + `ARTBOARD_RESET_CSS`; exported code must ship the same reset.
- Responsive: per-node `breakpoints` overrides (`BREAKPOINTS` in `schema.ts`, widest first so narrower wins) compile through `compileBreakpointCSS`. The canvas feeds it an artboard container query (resize an artboard to preview), export must use `@media`. A new breakpoint needs only a `BREAKPOINTS` entry; the Inspector, MCP schema and instructions derive from it.
- Verify UI changes with Playwright (screenshots) before calling them done.
- Keep `README.md` current: when a change adds or alters a command, URL param, MCP tool, package, or roadmap item, update the README in the same commit and add a dated line to its Changelog.

## Future: remote agents & hosting (not built — design around it)
Goal: hosted Weft that outside agents (e.g. Muse, GrokBot) can connect to over MCP. Today everything is loopback-only; don't regress that, but don't paint into a corner either.
- Hosting split: `apps/web` is static (Netlify-able). `apps/server` is a long-lived process (WebSocket Yjs relay + in-memory docs + disk persistence), so it needs a persistent host with a volume (Fly/Railway/Render/VPS), not Netlify functions.
- Before opening `/mcp` or `/<doc>` to non-local clients: per-agent API tokens (identity → `agents.ts` callsign/origin), configurable allowed-host/origin list replacing the hard-coded loopback set in `server.ts`, per-agent write rate limits, and per-token doc scoping.
- Keep persistence behind an interface (today `.weft-data/` files) so it can move to a managed store.
- `get_layout`/`select_nodes` need a connected editor (`callEditor`); remote agents must degrade gracefully when none is open.
- Keep agent identity/transport out of `core`; `GridDocument` commands stay origin-based so any client can plug in.
