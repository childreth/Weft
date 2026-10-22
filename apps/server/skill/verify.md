# Checking your work

Look at what you built after every section, not only at the end. `get_screenshot` works with no editor open and shows the artboard exactly as the browser renders it.

## Tools

- `get_screenshot({ id })`: a PNG of an artboard or any node, plus the boxes of its children (position, size, `overflows`). Pass `width: 390` (or 768) to render the artboard at another width and check the breakpoints. Pass `depth` for more levels of boxes.
- `get_layout`: exact computed boxes and styles, but only when the user has the editor open.

## Checklist after each section

- **Nothing collapsed:** no zero-height containers and no text squeezed into a narrow column.
- **Nothing clipped:** no box with `overflows: true` that should show all its content. On a fixed-height artboard, nothing runs past the bottom.
- **Alignment:** edges line up across sections and gaps are consistent.
- **Hierarchy:** the focal point reads first and secondary text is quieter.
- **Contrast:** text is readable on its background.
- **The reference:** if the user gave one, put them side by side. Check the proportions, spacing, type weight and color.
- **Other widths:** check at least the other end from the one you designed at, and fix what breaks there with `breakpoints` or `maxWidth` before calling it done. Don't just list it as a weakness. For a desktop design, `width: 390`: nothing overflows sideways, grids stack, text stays readable. For a mobile design, `width: 768` or `1440`: content doesn't stretch into long lines or leave huge gaps (cap it with `maxWidth`).

## Critique when it's built

The checklist finds broken things. This finds generic ones. Judge the screenshots, not your node tree: you'll read your intentions into the code.

1. **One second.** Glance at the screenshot. What did you see? It should be one thing (a number, a headline, an object). If the answer is "a website" or "some cards", there's no focal point.
2. **Squint.** Treat the text as grey bars. The design should reduce to two or three big masses with clearly different sizes. Many similar medium masses means nothing leads.
3. **Cover the name.** Could this belong to a competitor or another industry with the name swapped? Then it has no idea yet (`style.md`, "Start from an idea").
4. **Edges.** Count the distinct left edges of text blocks. Two or three is composed; six means things were placed one at a time.
5. **Sameness.** Write one word for each section's layout. The same word twice in a row is the template showing.
6. **Tells.** Go through the generic tells table in `style.md` and name each one the screenshot shows. Remove it, unless the user's design system, brand, reference or request calls for it.

Fix in this order, since later fixes can't rescue earlier problems: the idea, hierarchy, composition, type, color, detail. When removing something leaves a gap, close the gap or enlarge what remains rather than adding an ornament. Stop after about three rounds of critique and fixes, and in your reply name what's still weak rather than calling it done.

## Fixing

- Fix in place with `update_nodes`, and batch all the fixes for a section into one call.
- If an agent edit went wrong, `undo_agent_change` reverts your last call. Don't delete and rebuild sections.
- When it's done, `select_nodes` on the result and tell the user what you changed and anything you couldn't do.
