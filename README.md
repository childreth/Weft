# Weft

An AI-native design canvas where the canvas *is* the browser's DOM and CSS engine. Edit pages the way you would in Figma, but every artboard is real HTML and CSS, so what you design is what you ship. People and AI agents edit the same live document.

> Status: early, local-only. M1 and M2 done; M3 (single-user editing) in progress on branch `m3-editing`: multi-select and responsive breakpoints are in, layers panel is next. See [Roadmap](#roadmap).

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
  - [ ] Clone an artboard at mobile/tablet width to compare layouts side by side
  - [ ] Per-breakpoint text, visibility and tag (overrides are styles-only today)
  - [ ] Layers panel: rename, hide/lock, collapse, drag to reorder
  - [ ] Align and distribute
  - [ ] Snapping and smart guides
- [ ] Components and variants
- [ ] Multiplayer beyond local, remote agents (needs per-agent auth first)
- [ ] Code export (HTML/CSS with the artboard reset and `@media` breakpoints)
- [ ] Desktop shell (Electron)

## Changelog

- **2026-10-17:** Responsive breakpoints. Nodes carry `breakpoints.tablet` (≤ 1024px) and `breakpoints.mobile` (≤ 600px) style overrides, desktop-first (narrower wins), edited in the Inspector's Tablet/Mobile sections or via `create_nodes`/`update_nodes`. Artboards have Desktop/Tablet/Mobile width presets. On the canvas they follow the artboard's width (container query); `compileBreakpointCSS` emits the same rules as `@media` for export.
- **2026-10-17:** M3 started. Multi-select: marquee on empty canvas, group move as one undo step, ⌘A, group outline.
- **2026-10-17:** Renamed from GridForge to Weft. M2 complete: per-session agent identity, agent cursors, MCP tools.
