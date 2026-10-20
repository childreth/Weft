# Weft

An AI-native design canvas where the canvas *is* the browser's DOM and CSS engine. Edit pages the way you would in any WYSIWYG editor, but every artboard is real HTML and CSS, so what you design is what you ship. People and AI agents edit the same live document.

> Status: early, local-only. M1–M3 done: canvas, AI bridge, and single-user editing (multi-select, responsive breakpoints, layers panel, align/distribute, snapping, artboard cloning and Hug/Fixed height). See [Roadmap](#roadmap).

## Quick start

Requires Node and [pnpm](https://pnpm.io).

```sh
pnpm install
pnpm dev
```

Open http://localhost:5173. This starts both the editor and the local server (`127.0.0.1:4510`).

URL parameters:

| Param | Effect |
|---|---|
| `?doc=name` | Open a named document (default: `default`) |
| `?offline` | Browser-only document stored in IndexedDB, no server |
| `?ephemeral` | Fresh in-memory seed (used by tests) |

![The Weft editor: layers, a dark-mode mobile dashboard artboard with an agent cursor, and the Inspector](docs/images/editor.jpg)

## Connect an AI agent (MCP)

The server speaks MCP over Streamable HTTP at `http://127.0.0.1:4510/mcp`. With the server running:

```sh
claude mcp add --transport http weft http://127.0.0.1:4510/mcp
```

The repo's `.mcp.json` already registers it for Claude Code. Each MCP connection is its own agent with a callsign, colored cursor and undo history, and its edits highlight live in the editor.

| Tool | What it does |
|---|---|
| `get_canvas` | Scene graph as nested JSON (all artboards or one subtree) |
| `get_selection` | What each person has selected |
| `list_tokens` | Design tokens and the CSS value to use |
| `get_layout` | Real rendered boxes and computed styles (needs an editor open) |
| `create_nodes` | Create node subtrees or new artboards, atomically (with optional `breakpoints` overrides) |
| `update_nodes` | Patch names, text, styles, breakpoint overrides, attributes, frames |
| `move_node` | Reparent or reorder |
| `duplicate_node` | Deep-copy a node; clone an artboard at another width (`frame: {width: 390}`) beside the original |
| `align_nodes` | Align left/center/right/top/middle/bottom: artboards by frame, elements via flex/grid CSS (`justifyContent`, `alignSelf`, `justifySelf`) |
| `distribute_nodes` | Even spacing: artboard gaps, or `justifyContent: space-between` on a flex parent |
| `delete_nodes` | Delete nodes and descendants |
| `undo_agent_change` | Revert that agent's last call |
| `select_nodes` | Select and zoom to nodes in every open editor |

## Edit with a local model (Assist)

The prompt bar at the bottom of the canvas edits the document with a model running on your machine through [Ollama](https://ollama.com), fully offline. Select something, describe the change ("stack these cards in one column"), and the model edits it live through the same tools MCP agents use, with its own cursor. **Undo** in the bar reverts the model's whole last turn (⌘Z only undoes your own edits); **New** starts a fresh conversation.

- Run Ollama and pull a model with tool calling, e.g. `ollama pull qwen3.5:4b` (fast) or a 12–30B model (more reliable on multi-step edits). The picker lists local tool-capable models, largest first, and remembers your choice; cloud models are left out.
- The server talks to Ollama at `OLLAMA_HOST` (default `127.0.0.1:11434`).
- Needs the server: not available with `?offline` or `?ephemeral`.
- Server routes (loopback, local origins only): `GET /assist/models`, `POST /assist/chat` (NDJSON progress stream), `POST /assist/undo`, `POST /assist/reset`.

## Project layout

```
packages/core   Framework-free scene graph: schema, GridDocument commands, history, W3C tokens
apps/web        Vite + React editor: canvas (shadow-DOM artboards), overlay, panels
apps/server     Local Node process: Yjs sync + presence, browser RPC, MCP, local-model assist, persistence
```

Documents persist to `.weft-data/` (`<name>.ydoc` plus a readable `<name>.weft.json`). Contributor and agent rules live in [CLAUDE.md](./CLAUDE.md).

## Scripts

| Command | Purpose |
|---|---|
| `pnpm dev` | Server and editor |
| `pnpm test` | Unit tests (core and server, vitest) |
| `pnpm test:e2e` | Playwright against the editor (screenshots in `apps/web/test-results/`) |
| `pnpm typecheck` | Typecheck every package |

## Roadmap

- [x] **M1 — Canvas foundation:** scene graph, shadow-DOM artboards, editing tools
- [x] **M2 — AI bridge:** MCP server, live sync, agent presence and cursors
- [x] **M3 — Single-user editing**
  - [x] Multi-select: marquee, shift-click, ⌘A, group move
  - [x] Responsive breakpoints: per-node tablet (≤ 1024px) and mobile (≤ 600px) overrides, previewed by artboard width, with Desktop/Tablet/Mobile width presets
  - [x] Clone an artboard at mobile/tablet width to compare layouts side by side (Inspector "+ Mobile"/"+ Tablet"); ⌘D duplicates the selection
  - [x] Layers panel: double-click rename, hide/lock toggles (locked layers are click-through on the canvas), collapse/expand, drag to reorder and reparent, shift-click range and ⌘-click toggle
  - [x] Align and distribute: artboards by frame; elements in flex/grid parents get CSS alignment, not coordinates (Inspector buttons, ⌥A/H/D/W/V/S, ⌥⇧H/V)
  - [x] Artboard height: Hug (fits content, follows width changes live; default for new artboards and clones at another width) or Fixed (clips overflow, marked with a dashed red edge)
  - [x] Snapping and smart guides: artboard move and resize snap edges and centers to other artboards (hold ⌘/Ctrl to move freely)
  - [x] Assist: prompt bar that edits with a local Ollama model through the MCP tools (own cursor, whole-turn undo, offline)
  - [x] Drag elements on the canvas to reorder or reparent them, following the parent's flex/grid flow, with an insertion line (Esc cancels)
- [ ] Components and variants
- [ ] Multiplayer beyond local, remote agents (needs per-agent auth first)
- [ ] Code export (HTML/CSS with the artboard reset and `@media` breakpoints)
- [ ] Google Fonts: searchable typeface picker from a bundled catalog (no API key); a document-level font list (synced, undoable, MCP tool) that generates `--font-family-*` tokens; the editor loads fonts with one `<link>` in the main page, since fonts declared inside shadow roots are ignored; export ships the same `<link>`. Then self-host font files (`.weft-data/` or `@fontsource`) so documents work fully offline
- [ ] In-app local model assist (to consider): a local model built into the editor, separate from MCP agents, for inline suggestions. First idea: on a breakpoint section's "+ Add", suggest mobile/tablet overrides for the selected section (e.g. stack a grid to one column, shrink gap and padding) that the user previews and accepts
- [ ] Desktop shell (Electron)

## Changelog

- **2026-10-19:** Assist: a prompt bar at the bottom of the canvas edits the document with a local Ollama model, fully offline. The server runs the tool loop (`/assist/*` routes) against the same MCP tools outside agents use, in process, so the model gets its own cursor, atomic edits and an Undo that reverts its whole turn. It sees the current selection, `doc`/`model` arguments are filled in for it, and tool errors go back to the model to fix. `OLLAMA_HOST` picks the Ollama server.
- **2026-10-19:** Canvas drag and drop for elements. Dragging an element (or a multi-selection) reorders it among its siblings along the parent's flex/grid axis, or reparents it into another container; a dashed outline marks the receiving parent and a line marks the slot. Inside its own parent, siblings take precedence and only the middle half of a sibling container drops into it. One undo step; Esc cancels. Artboards still move by frame.
- **2026-10-18:** M3 complete. Dropped per-breakpoint text, visibility and tag from the roadmap: breakpoint overrides stay styles-only (hide per breakpoint with a `display: none` override).
- **2026-10-18:** Artboard Hug/Fixed height. `frame.heightMode: 'hug'` sizes an artboard to its content, so narrowing it grows it live; dragging a top/bottom handle or setting a height makes it fixed, and fixed artboards mark clipped content. New artboards, the seeded page and clones at another width hug by default. Inspector Fixed/Hug toggle; `create_nodes`/`update_nodes`/`duplicate_node` accept `heightMode` (new MCP artboards hug unless given a height).
- **2026-10-18:** Roadmap: Google Fonts typeface picker (self-hosted fonts later, for offline use) and in-app local model assist (suggested breakpoint overrides), separate from MCP agents. Layers panel is resizable by dragging its right edge (240–340px, remembered per browser). Fix: `create_nodes`/`update_nodes` accept a single breakpoint (e.g. only `mobile`); Zod 4 records with enum keys were requiring every breakpoint, pushing agents to pass `tablet: null`, which clears tablet overrides.
- **2026-10-17:** Duplicate and clone at width. `GridDocument.duplicateNode` deep-copies a subtree; artboard copies land to the right of their row. The Inspector's Artboard section clones at Desktop/Tablet/Mobile width beside the original (named "— Mobile" etc.) so breakpoint layouts compare side by side. ⌘D duplicates the selection. New MCP tool `duplicate_node` and `window.weft.agent.duplicateNode`.
- **2026-10-17:** Snapping and smart guides. Dragging artboards snaps the selection's edges and centers to other visible artboards within 6 screen px, and resizing snaps the edges being dragged; guides show what lined up. Hold ⌘/Ctrl to move freely.
- **2026-10-17:** Align and distribute. Artboards align and distribute by their canvas frames. Elements are aligned through CSS: the flex main axis sets the parent's `justifyContent`, the cross axis the child's `alignSelf`, grid children get `justifySelf`/`alignSelf`; distribute sets `space-between` on a flex parent. Inspector Align section (inapplicable buttons are disabled with the reason), ⌥ shortcuts, new MCP tools `align_nodes` and `distribute_nodes`, and `window.weft.agent.alignNodes`/`distributeNodes`.
- **2026-10-17:** Layers panel. Double-click to rename, hide and lock toggles per row (locked layers can't be picked or moved on the canvas), collapse/expand with auto-reveal of selected layers, drag to reorder or reparent (multi-selection moves together, one undo step), shift-click range select and ⌘-click toggle.
- **2026-10-17:** Responsive breakpoints. Nodes carry `breakpoints.tablet` (≤ 1024px) and `breakpoints.mobile` (≤ 600px) style overrides, desktop-first (narrower wins), edited in the Inspector's Tablet/Mobile sections or via `create_nodes`/`update_nodes`. Artboards have Desktop/Tablet/Mobile width presets. On the canvas they follow the artboard's width (container query); `compileBreakpointCSS` emits the same rules as `@media` for export.
- **2026-10-17:** M3 started. Multi-select: marquee on empty canvas, group move as one undo step, ⌘A, group outline.
- **2026-10-17:** Renamed from GridForge to Weft. M2 complete: per-session agent identity, agent cursors, MCP tools.
