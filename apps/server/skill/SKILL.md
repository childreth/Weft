---
name: weft
description: Design on the Weft canvas, where every artboard is real HTML + CSS. Read this before creating or restyling anything in Weft.
---

# Designing in Weft

Weft artboards are real web pages rendered by the browser. You build a tree of semantic HTML nodes styled with CSS (flexbox, grid, design tokens), and the user watches it appear live. What you make is what ships, so build it the way a good front-end developer would.

## Read these before your first create_nodes

This file is only the overview. Before you build anything, also read:

| File | What's in it |
| --- | --- |
| `read_skill({ path: "layout.md" })` | Layout recipes: pages, grids, headings with spans, buttons, cards, responsive |
| `read_skill({ path: "style.md" })` | Style rules: tokens, hierarchy, restraint, accessibility, matching a reference |
| `read_skill({ path: "verify.md" })` | The checklist to run after each section |

## The rules that matter most

1. Lay out with flex or grid and `gap`. Every wrapper needs a job (a layout, a background or a semantic tag).
2. Take values from tokens (`list_tokens`). Use raw values only to match a reference, and then the same value every time.
3. Restraint: no cards inside cards, and pick one of border, background or shadow.
4. Screenshot after every section (`get_screenshot`) and fix what you see before moving on.
5. Check at least two widths: the artboard's own and the other end (390 for a desktop design, 1440 or 768 for a mobile one).

## The model in one minute

- Top-level nodes are **artboards**: `type: "frame"` with a canvas `frame` {x, y, width, heightMode}. Use `heightMode: "hug"` (the default) so the page grows with its content. Typical widths: 1440 desktop, 768 tablet, 390 mobile.
- Everything inside an artboard is positioned by CSS, never by coordinates.
- **frame** nodes are containers. Tags: {{CONTAINER_TAGS}}, or a `ds-*` custom element.
- **text** nodes hold `text`. Tags: {{TEXT_TAGS}}.
- **Mixed styles in one line** (a heading with one colored word): make the heading a frame with tag `h1` and give it `span` text children.
- `styles` are camelCase CSS properties with CSS string values. Allowed: {{STYLE_PROPS}}. Anything else is rejected, so pick from this list instead of guessing.
- `backgroundImage` takes gradients only. `url()`, images, icons and web fonts aren't supported yet. Don't fake photos or logos with shapes: use a plain block with a short label ("Product photo") so the user can see what goes there.
- Responsive overrides go in `breakpoints`: {{BREAKPOINTS}}. They are desktop-first and narrower wins.
- Values should come from design tokens (`var(--space-4)`, `var(--color-accent)`). Call `list_tokens` once to see them.

## Workflow

1. **Orient.** `get_selection`, or `get_canvas` with `detail: "outline"` (ids, names and text only; full detail can be huge), and `list_tokens`. Read a subtree in full only when you're about to restyle it.
2. **Plan the structure, not the pixels.** Name the sections and their layout (grid of 3 cards, two-column hero, …) before writing nodes.
3. **Build one section per call.** Each `create_nodes` call is atomic: it applies entirely or not at all, and a rejection lists every problem with its path. Fix them all and resend.
4. **Look at it.** `get_screenshot` on the artboard after each section. Compare it with the reference if the user gave one, and fix what's off with `update_nodes`. Don't delete and rebuild.
5. **Check other widths.** `get_screenshot` with `width: 390` shows the mobile layout. Add `breakpoints` overrides where it breaks.
6. **Show the user.** `select_nodes` on what you made, then reply in a sentence or two.

## Rules

- Do only what was asked. Don't restyle or reorganize things the user didn't mention.
- Reuse what's there: duplicate an existing card, section or screen (`duplicate_node`) and edit the copy rather than rebuilding it. `duplicate_node` returns `ids`, a map from every original node id to its copy, so you don't need to read the copy again.
- Name layers for what they are ("Pricing card", "Hero copy"), not "Frame 12".
- The document is shared and live. If a node you expect is gone or changed, re-read it instead of recreating it, and never undo the user's edits.
- Pass your model name in `model` on your first call so the user sees who's editing.
