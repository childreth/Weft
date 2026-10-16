# GridForge

AI-native design canvas where the canvas *is* the browser's DOM/CSS engine. Figma-like editing (components, variants, multiplayer later), output is real HTML/CSS.

## Layout
- `packages/core` — framework-free scene graph: schema, `GridDocument` commands, `History`, W3C tokens. Source-only (no build), consumed via `exports` → `src/index.ts`.
- `apps/web` — Vite + React editor. `src/editor` (singletons, UI store, shortcuts), `src/canvas` (viewport, shadow-DOM artboards, overlay), `src/panels`.
- Electron shell (`apps/desktop`) and MCP server come later; keep `core` and the canvas shell-agnostic.

## Commands
- `pnpm dev` — editor at http://localhost:5173 (`?ephemeral` = fresh seeded doc, no IndexedDB; `?doc=name` = separate persisted doc)
- `pnpm test` — core unit tests (vitest)
- `pnpm test:e2e` — Playwright against the editor; writes `apps/web/test-results/m1-editor.png`
- `pnpm typecheck`

## Rules
- Every document mutation goes through `GridDocument` commands with an origin (`ORIGIN_LOCAL`, `ORIGIN_AGENT`, `ORIGIN_SEED`). Never write to the Yjs maps directly from UI code. Agents use `window.gridforge.agent` (the future MCP surface) — keep it in sync with new commands.
- Validation lives in core (`assertStyles`, `assertAttributes`, `isValidTag`), not in the UI. UI wraps commands in `run()` to surface `GridError`s.
- Continuous interactions (drag, resize, text edit) wrap their commands in `history.beginGesture()/endGesture()` so they undo as one step.
- Canvas pointer handling uses native listeners: React dispatches events from portals into shadow roots twice.
- Artboard CSS = compiled tokens + `ARTBOARD_RESET_CSS`; exported code must ship the same reset.
- Verify UI changes with Playwright (screenshots) before calling them done.
