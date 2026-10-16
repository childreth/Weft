# GridForge

AI-native design canvas where the canvas *is* the browser's DOM/CSS engine. Figma-like editing (components, variants, multiplayer later), output is real HTML/CSS.

## Layout
- `packages/core` — framework-free scene graph: schema, `GridDocument` commands, `History`, W3C tokens. Source-only (no build), consumed via `exports` → `src/index.ts`.
- `apps/web` — Vite + React editor. `src/editor` (singletons, UI store, shortcuts, `connection.ts`), `src/canvas` (viewport, shadow-DOM artboards, overlay), `src/panels`.
- `apps/server` — local Node process (127.0.0.1:4510): Yjs sync relay + awareness (`/<doc>`), browser RPC (`/rpc/<doc>`), MCP over Streamable HTTP (`/mcp`), persistence to `.gridforge-data/` (`.ydoc` + `.gridforge.json`). It owns seeding.
- Electron shell (`apps/desktop`) comes later; keep `core` and the canvas shell-agnostic.

## Commands
- `pnpm dev` — server + editor at http://localhost:5173. URL params: `?doc=name` (document), `?offline` (browser-only IndexedDB), `?ephemeral` (fresh in-memory seed, used by tests)
- MCP: `.mcp.json` registers `http://127.0.0.1:4510/mcp`; the server must be running
- `pnpm test` — core unit tests (vitest)
- `pnpm test:e2e` — Playwright against the editor; writes `apps/web/test-results/m1-editor.png`
- `pnpm typecheck`

## Rules
- Every document mutation goes through `GridDocument` commands with an origin (`ORIGIN_LOCAL`, `ORIGIN_AGENT`, `ORIGIN_SEED`). Never write to the Yjs maps directly from UI code.
- MCP tools (`apps/server/src/tools.ts`) run each mutating call through `mutate()`: one transaction, rolled back on error, undoable via `undo_agent_change`, and reported as awareness `activity` so editors highlight it. New commands need a tool here (and in `window.gridforge.agent` for in-page use).
- The server binds to loopback and rejects non-local Host/Origin headers (DNS rebinding / cross-site sockets). Keep it that way until auth exists.
- Validation lives in core (`assertStyles`, `assertAttributes`, `isValidTag`), not in the UI. UI wraps commands in `run()` to surface `GridError`s.
- Continuous interactions (drag, resize, text edit) wrap their commands in `history.beginGesture()/endGesture()` so they undo as one step.
- Overlay chrome measures in a layout effect (camera changes) plus a rAF loop (other layout changes); never only one.
- Canvas pointer handling uses native listeners: React dispatches events from portals into shadow roots twice.
- Artboard CSS = compiled tokens + `ARTBOARD_RESET_CSS`; exported code must ship the same reset.
- Verify UI changes with Playwright (screenshots) before calling them done.
