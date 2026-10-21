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
- **Mobile:** at `width: 390`, check that nothing overflows sideways, grids stack and text stays readable.

## Fixing

- Fix in place with `update_nodes`, and batch all the fixes for a section into one call.
- If an agent edit went wrong, `undo_agent_change` reverts your last call. Don't delete and rebuild sections.
- When it's done, `select_nodes` on the result and tell the user what you changed and anything you couldn't do.
