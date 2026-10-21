# Evals

Prompts for testing how well agents build in Weft, and a log of the results. Use them to compare models and to check whether a change to Weft (the skill, the tools, the error messages) actually helps.

```
evals/
  prompts/      Prompts to paste into an agent, one per eval
  references/   Reference images the prompts use (yours to add)
  results/      One file per run, from results/TEMPLATE.md
```

## Running an eval

1. Start Weft (`pnpm dev`) and make sure the agent has the `weft` MCP tools: locally through `.mcp.json`, or remotely through the Remote panel and a tunnel (see the main README).
2. Paste the prompt from `prompts/` and attach its reference image.
3. When the agent finishes, copy `results/TEMPLATE.md` to `results/<date>-<eval>-<model>.md` and fill it in from the agent's report.
4. Get the token numbers from your client, not the agent: most models can't see their own usage.
   - Claude Code: `/cost` (or `/usage`) right after the run
   - API or console: the response's `usage`, or the console's usage page
   - claude.ai, Muse and other chat apps: usually not shown, so record tool calls and time instead
5. Score the result yourself with the rubric in the template. Agents grade themselves generously.
6. Add a row to the log below.

Each run gets its own artboard named `Eval — <model> — <date>`, so runs sit side by side on the canvas. `get_screenshot` on each one gives you images to compare.

## Evals

| Eval | What it tests |
|---|---|
| [build-from-reference](prompts/build-from-reference.md) | Rebuilding a page from a reference image: fidelity, responsiveness, semantics, and how efficiently the agent uses the tools |

## Log

| Date | Eval | Model / client | Weft version | Tool calls | Rejected | Tokens (in / out) | Score /30 | Notes |
|---|---|---|---|---|---|---|---|---|
