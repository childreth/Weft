# Weft

AI-native design canvas where the canvas *is* the browser's DOM/CSS engine. Figma-like editing (components, variants, multiplayer later), output is real HTML/CSS.

## Layout
- `packages/core` — framework-free scene graph: schema, `GridDocument` commands, `History`, W3C tokens. Source-only (no build), consumed via `exports` → `src/index.ts`.
- `apps/web` — Vite + React editor. `src/editor` (singletons, UI store, shortcuts, `connection.ts`), `src/canvas` (viewport, shadow-DOM artboards, overlay), `src/panels`.
- `apps/server` — local Node process (127.0.0.1:4510; `/mcp` optionally reachable through a tunnel, `remote.ts`): Yjs sync relay + awareness (`/<doc>`), browser RPC (`/rpc/<doc>`), MCP over Streamable HTTP (`/mcp`), local-model assist (`/assist/*`, Ollama tool loop over the MCP tools in process: `assist.ts`; spoken replies through an Ollama speech model: `speech.ts`), the agent design skill (`skill/*.md`, served by `read_skill`; `{{STYLE_PROPS}}`-style placeholders are filled from the schema, so keep lists out of the prose), artboard screenshots (`render.ts`, headless Chromium via `playwright-core` rendering `exportArtboardHTML` from core), persistence to `.weft-data/` (`.ydoc` + `.weft.json`), images in `.weft-data/assets/` by content hash (`assets.ts`, `/assets`). It owns seeding.
- Electron shell (`apps/desktop`) comes later; keep `core` and the canvas shell-agnostic.

## Commands
- `pnpm dev` — server + editor at http://localhost:5173. URL params: `?doc=name` (document), `?offline` (browser-only IndexedDB), `?ephemeral` (fresh in-memory seed, used by tests)
- MCP: `.mcp.json` registers `http://127.0.0.1:4510/mcp`; the server must be running
- In this repo, "the selection", "this section", "the canvas" etc. mean the Weft editor: use the `weft` MCP tools (`get_selection`, `get_canvas`). Use Figma tools only when the user names Figma. If the `weft` tools are missing, say so (start `pnpm dev`, then `/mcp` to connect) instead of falling back to another design tool.
- `pnpm test` — core unit tests (vitest)
- `pnpm test:e2e` — Playwright against the editor; writes screenshots to `apps/web/test-results/` (`m1-editor.png`, `m2-cursors.png`, `m2-agent.png`, `m3-reorder.png`, `m3-assist.png`, `m3-assist-cloud.png`, `m3-assist-speech.png`, `m3-style-picker.png`, `m3-remote.png`, `m3-clipboard.png`, `m3-authoring.png`, `m3-files.png`, `m3-export.png`, `m4-images.png`, `m4-icons.png`, `m4-icon-font.png`, `m4-tokens.png`)
- `pnpm typecheck`

## Rules
- Every document mutation goes through `GridDocument` commands with an origin (`ORIGIN_LOCAL`, `ORIGIN_AGENT`, `ORIGIN_SEED`). Never write to the Yjs maps directly from UI code.
- MCP tools (`apps/server/src/tools.ts`) run each mutating call through `mutate()`: one transaction, rolled back on error, undoable via `undo_agent_change`, and reported as awareness `activity` so editors highlight it. Each MCP session is one agent (`agents.ts`): its own callsign/color, awareness client (cursor `focus`), transaction origin `agent:<key>` and undo stack. Every tool should call `agent.look()` or go through `mutate()` (which calls `reportEdit`) with an action label, so the cursor follows and stays alive; cursor choreography lives in `apps/web/src/canvas/agentCursors.ts`. New commands need a tool here (and in `window.weft.agent` for in-page use).
- The server binds to loopback and rejects non-local Host/Origin headers (DNS rebinding / cross-site sockets). Requests carrying proxy headers (`x-forwarded-for` etc.) are never local. The only exception is remote access (`remote.ts`): when switched on in the editor, tunneled requests may reach `/mcp` only, with no Origin and a per-agent token. Everything else (sync, RPC, `/assist`, `/remote` settings) stays local-only.
- Validation lives in core (`assertStyles`, `assertAttributes`, `isValidTag`), not in the UI. UI wraps commands in `run()` to surface `GridError`s.
- Continuous interactions (drag, resize, text edit) wrap their commands in `history.beginGesture()/endGesture()` so they undo as one step.
- Overlay chrome measures in a layout effect (camera changes) plus a rAF loop (other layout changes); never only one.
- Canvas pointer handling uses native listeners: React dispatches events from portals into shadow roots twice.
- Artboard CSS = compiled tokens + `ARTBOARD_RESET_CSS`; exported code must ship the same reset.
- Artboard `frame.heightMode: 'hug'` renders with no height (content decides). Its stored `height` is only a last-measured value, written by `recordHugHeight` at the end of local gestures, never on render (every open editor would write it). Canvas code that needs the real box (snapping, resize) reads the DOM via `artboardHeight`.
- Tokens and fonts: a document's own tokens live in `doc.tokens` (`setTokens`, validated by `documentTokenIssues`) and its Google Fonts in `doc.fonts`, which become `--font-family-<slug>` tokens; both are undoable and synced. Every token consumer (canvas, Inspector, export, screenshots, `list_tokens`) must use `doc.tokenSet()`, not `defaultTokens` alone. Fonts load through one `<link>` in the main page (`installFontLoader`): @font-face inside shadow roots is ignored. The server's `FontCache` fetches from Google once and serves from `.weft-data/fonts/`; the font catalog is bundled, never fetched at runtime.
- Images: a layer holds an asset ref (`asset:<sha256>.<ext>`, core `assets.ts`), never file bytes or a remote URL. Every renderer resolves refs itself: the canvas via `displaySrc` (server URL), screenshots via the renderer's routed `RENDER_ASSETS`, export via `exportArtboardHTML`'s `assetUrl` (data URIs in the editor). Anything that writes a document out on its own (Save, export) must carry the images it uses.
- Responsive: per-node `breakpoints` overrides (`BREAKPOINTS` in `schema.ts`, widest first so narrower wins) compile through `compileBreakpointCSS`. The canvas feeds it an artboard container query (resize an artboard to preview), export must use `@media`. A new breakpoint needs only a `BREAKPOINTS` entry; the Inspector, MCP schema and instructions derive from it.
- Verify UI changes with Playwright (screenshots) before calling them done.
- Keep `README.md` current: when a change adds or alters a command, URL param, MCP tool, package, or roadmap item, update the README in the same commit and add a dated line to its Changelog.

## Offline-first (product principle)
Working offline with local models and local data is part of the value prop. Remote services (Google Fonts, model APIs, CDNs) may ship as an online first step, but every feature needs a planned local path (e.g. font files served from `.weft-data/`, local models) and must degrade gracefully without a network: bundled catalogs over live APIs, fallback stacks over missing assets. No hard network dependencies in the editor, canvas or export.

## Future: remote agents & hosting (partly built — design around it)
Goal: hosted Weft that outside agents (e.g. Muse, GrokBot) can connect to over MCP. Today the server is loopback-only, except opt-in tunnel access to `/mcp` with per-agent tokens (`remote.ts`, Remote panel); don't regress that, but don't paint into a corner either.
- Hosting split: `apps/web` is static (Netlify-able). `apps/server` is a long-lived process (WebSocket Yjs relay + in-memory docs + disk persistence), so it needs a persistent host with a volume (Fly/Railway/Render/VPS), not Netlify functions.
- Before hosting or opening `/<doc>` (sync) to non-local clients: auth for browser sync, a configurable allowed-origin list replacing the hard-coded loopback set in `server.ts`, per-agent write rate limits, and per-token doc scoping. Per-agent tokens with names already exist (`remote.ts`).
- Keep persistence behind an interface (today `.weft-data/` files) so it can move to a managed store.
- `get_layout`/`select_nodes` need a connected editor (`callEditor`); remote agents must degrade gracefully when none is open.
- Keep agent identity/transport out of `core`; `GridDocument` commands stay origin-based so any client can plug in.
