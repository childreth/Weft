# Naming icon buttons through an attribute prop: Qwen 3.8

**Date:** 2026-11-17
**Model:** `qwen3.8:27b-mlx` in Assist (Ollama, thinking on)
**Document:** the user's "DM — Combat tracker", "Initiative order" list selected
**Weft:** `main` at `51c22b5` (attribute props, accessibility warnings, `adopt`) plus the `trace-logging` branch, so this is the first turn recorded as a trace

## Task

The accessibility check found three icon buttons a screen reader can only call "button": the Options button in the Vex component, which five instances draw, and two buttons in rows that aren't instances (Remove in "Goblin B (defeated)", Options in "Thora (dying)"). The prompt said what a good name is and where the shared one has to go:

> The icon buttons in these rows have no name a screen reader can read. Give every Options and Remove button an aria-label that says what it does and for whom, like "Options for Vex". The rows that are instances of the Vex component share its button: label it on the component through an attribute prop, and set the prop on each instance.

Two easy mistakes were open to it: editing inside an instance (refused), or one fixed `aria-label="Options"` on the component, which clears the warning but leaves six rows announcing the same "Options".

## Results

| | |
|---|---|
| Outcome | Done, correct |
| Calls | 1 `update_nodes` (8 updates), no reads: the selection in its prompt had the ids |
| Refused | 0 |
| Time | 105 s for the turn; one step of reasoning (8,566 characters), then the call, then the reply |

**Checked in the document afterwards** (the drawn tree, instances expanded):
- the component's Options button has `bind: { attributes: { "aria-label": "optionsLabel" } }` and its own `aria-label="Options for Vex"` as the default;
- each of the five instances sets `optionsLabel` to its own name ("Options for Goblin Boss" … "Options for Mirelle"), and its drawn button carries it;
- the two standalone buttons got "Options for Thora" and "Remove Goblin B";
- `accessibilityIssues` on the artboard: none.

Its reasoning worked out the structure from the selection (component, five instances, two plain rows with their button ids), checked the tool description for how a prop's default works ("otherwise every instance gets the component's") and whether `props` merges with an instance's existing ones, then sent everything in one batch.

## The trace

The turn's trace is one 63 KB line: a 25,081-character system prompt, the prompt, the call with its reasoning, the 181-character result and the reply, plus 21 tool definitions. `evals/traces/export.mts` turned it into one mlx-lm example. Two things it showed:
- Ollama adds an `index` to each tool call's `function`; the export now keeps only `name` and `arguments`.
- The task is a small part of the example. Almost all of it is the system prompt and the tool schemas, which a small model's context can't hold: they need trimming to what the task uses before a small model trains on it.

## What it shows

When the tools have a direct route, a capable local model takes it in one call. This turn and the wrap-cards run with `adopt` (2026-11-15) were both short once the operation existed; the timeouts came when it didn't. The prompt did name the route (an attribute prop), so this measures carrying out a known fix, not finding it. A next run could leave that out and see whether the accessibility warning's own fix text is enough.
