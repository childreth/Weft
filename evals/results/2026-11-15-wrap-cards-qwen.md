# Wrapping cards in buttons: Qwen 3.8, before and after `adopt`

**Date:** 2026-11-15
**Model:** `qwen3.8:27b-mlx` in Assist (Ollama, thinking on)
**Document:** the user's Druid character sheet, "Beast forms" list selected
**Change between runs:** only Weft. Before: `a11y-warnings` (`c2ca29a`). After: `adopt-layers`, which adds `adopt` to `create_nodes`. Same model, same selection, same prompt.

## Task

An earlier Qwen accessibility pass had put `role="button"` and `tabindex="0"` on four `li` cards. That takes away their list-item role and promises keyboard behaviour that needs a script. The prompt asked for the standard fix:

> The four wild-shape form cards have role="button" and tabindex="0" on their li. Undo that: remove role and tabindex from each li, and move the focus and active states off it. Instead, put a real button inside each li that holds the card's content, so the list keeps its items and the keyboard works without scripts. Give each button type="button" and the focus outline. Brown bear is the chosen form, so its button gets aria-pressed="true", and the other three get aria-pressed="false". The cards should look the same afterwards.

## Results

| | Before (no `adopt`) | After (`adopt`) |
|---|---|---|
| Outcome | Stopped by Assist's 10-minute step limit | Done, correct |
| Edits | 0 | 2: one `create_nodes` wrapping all four cards, one `update_nodes` cleaning the `li`s |
| Other calls | none | 2 `get_canvas` checks, 1 selection |
| First step | > 600 s thinking, no call | 260 s thinking |
| Later steps | none | 4–27 s each |

**Checked in the document afterwards:**
- each `li` holds one `button` with the card's original layers (same ids, so moved, not rebuilt);
- no `role`, `tabindex`, cursor or states left on the `li`s;
- `aria-pressed` is `"true"` only on Brown bear;
- the focus, hover and active states moved onto the buttons, each keeping its card's own colours;
- the screenshot matches, with buttons filling their `li`s (`width: 100%`, flex column, padding and `textAlign: left` moved over).

One small difference: a new `button` starts with the label text role, so the card text inherits label size and weight instead of body.

## What it shows

Without a wrap operation, the fix cost twelve single-layer `move_node` calls or a rebuild of the whole list in one long nested call. Qwen spent its step planning that and never acted. With `adopt` the route is short, and the first step's planning fits well inside the limit.

A thinking model's first step grows with how complicated the route is. When a capable local model times out, check what the tools make it plan before blaming the model.
