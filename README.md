# Weft

An AI-native design canvas where the canvas *is* the browser's DOM and CSS engine. Edit pages the way you would in any WYSIWYG editor, but every artboard is real HTML and CSS, so what you design is what you ship. People and AI agents edit the same live document.

> Status: early, local-only. M1 and M2 done; M3 (single-user editing) in progress on branch `m3-editing`: multi-select, responsive breakpoints, the layers panel, align/distribute, snapping and artboard cloning are in. See [Roadmap](#roadmap).

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

## Project layout

```
packages/core   Framework-free scene graph: schema, GridDocument commands, history, W3C tokens
apps/web        Vite + React editor: canvas (shadow-DOM artboards), overlay, panels
apps/server     Local Node process: Yjs sync + presence, browser RPC, MCP, persistence
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
- [ ] **M3 — Single-user editing** (in progress)
  - [x] Multi-select: marquee, shift-click, ⌘A, group move
  - [x] Responsive breakpoints: per-node tablet (≤ 1024px) and mobile (≤ 600px) overrides, previewed by artboard width, with Desktop/Tablet/Mobile width presets
  - [x] Clone an artboard at mobile/tablet width to compare layouts side by side (Inspector "+ Mobile"/"+ Tablet"); ⌘D duplicates the selection
  - [ ] Per-breakpoint text, visibility and tag (overrides are styles-only today)
  - [x] Layers panel: double-click rename, hide/lock toggles (locked layers are click-through on the canvas), collapse/expand, drag to reorder and reparent, shift-click range and ⌘-click toggle
  - [x] Align and distribute: artboards by frame; elements in flex/grid parents get CSS alignment, not coordinates (Inspector buttons, ⌥A/H/D/W/V/S, ⌥⇧H/V)
  - [x] Snapping and smart guides: artboard move and resize snap edges and centers to other artboards (hold ⌘/Ctrl to move freely)
- [ ] Components and variants
- [ ] Multiplayer beyond local, remote agents (needs per-agent auth first)
- [ ] Code export (HTML/CSS with the artboard reset and `@media` breakpoints)
- [ ] Google Fonts: searchable typeface picker from a bundled catalog (no API key); a document-level font list (synced, undoable, MCP tool) that generates `--font-family-*` tokens; the editor loads fonts with one `<link>` in the main page, since fonts declared inside shadow roots are ignored; export ships the same `<link>`. Then self-host font files (`.weft-data/` or `@fontsource`) so documents work fully offline
- [ ] In-app local model assist (to consider): a local model built into the editor, separate from MCP agents, for inline suggestions. First idea: on a breakpoint section's "+ Add", suggest mobile/tablet overrides for the selected section (e.g. stack a grid to one column, shrink gap and padding) that the user previews and accepts
- [ ] Desktop shell (Electron)

## Changelog

- **2026-10-18:** Roadmap: Google Fonts typeface picker (self-hosted fonts later, for offline use) and in-app local model assist (suggested breakpoint overrides), separate from MCP agents. Layers panel is resizable by dragging its right edge (240–340px, remembered per browser). Fix: `create_nodes`/`update_nodes` accept a single breakpoint (e.g. only `mobile`); Zod 4 records with enum keys were requiring every breakpoint, pushing agents to pass `tablet: null`, which clears tablet overrides.
- **2026-10-17:** Duplicate and clone at width. `GridDocument.duplicateNode` deep-copies a subtree; artboard copies land to the right of their row. The Inspector's Artboard section clones at Desktop/Tablet/Mobile width beside the original (named "— Mobile" etc.) so breakpoint layouts compare side by side. ⌘D duplicates the selection. New MCP tool `duplicate_node` and `window.weft.agent.duplicateNode`.
- **2026-10-17:** Snapping and smart guides. Dragging artboards snaps the selection's edges and centers to other visible artboards within 6 screen px, and resizing snaps the edges being dragged; guides show what lined up. Hold ⌘/Ctrl to move freely.
- **2026-10-17:** Align and distribute. Artboards align and distribute by their canvas frames. Elements are aligned through CSS: the flex main axis sets the parent's `justifyContent`, the cross axis the child's `alignSelf`, grid children get `justifySelf`/`alignSelf`; distribute sets `space-between` on a flex parent. Inspector Align section (inapplicable buttons are disabled with the reason), ⌥ shortcuts, new MCP tools `align_nodes` and `distribute_nodes`, and `window.weft.agent.alignNodes`/`distributeNodes`.
- **2026-10-17:** Layers panel. Double-click to rename, hide and lock toggles per row (locked layers can't be picked or moved on the canvas), collapse/expand with auto-reveal of selected layers, drag to reorder or reparent (multi-selection moves together, one undo step), shift-click range select and ⌘-click toggle.
- **2026-10-17:** Responsive breakpoints. Nodes carry `breakpoints.tablet` (≤ 1024px) and `breakpoints.mobile` (≤ 600px) style overrides, desktop-first (narrower wins), edited in the Inspector's Tablet/Mobile sections or via `create_nodes`/`update_nodes`. Artboards have Desktop/Tablet/Mobile width presets. On the canvas they follow the artboard's width (container query); `compileBreakpointCSS` emits the same rules as `@media` for export.
- **2026-10-17:** M3 started. Multi-select: marquee on empty canvas, group move as one undo step, ⌘A, group outline.
- **2026-10-17:** Renamed from GridForge to Weft. M2 complete: per-session agent identity, agent cursors, MCP tools.
