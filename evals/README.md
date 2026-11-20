# Evals

Prompts for testing how well agents build in Weft, and a log of the results. Use them to compare models and to check whether a change to Weft (the skill, the tools, the error messages) actually helps.

```
evals/
  prompts/      Prompts to paste into an agent, one per eval
  references/   Reference images the prompts use (yours to add)
  results/      One file per run, from results/TEMPLATE.md
  replay/       Replay evals: one captured Assist request, sent to a model many times
  traces/       Turning Assist traces into a fine-tuning dataset
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

## Replay evals

A build eval runs a whole task once and a person scores it. A replay eval asks a narrower question many times: given the exact request Assist sends at one step, how often does this model, in this runtime, come back with a tool call that can be read? It exists because a single Assist run can't tell a model that can't do the task from one that is unlucky, badly quantized, or let down by its runtime.

1. **Capture** the request. A scenario (`replay/fixtures/<name>.scenario.json`) names the document, the prompt, the selection and the tool calls a model made first. `capture.mts` runs a second Weft server on a copy of the document with a scripted stand-in for Ollama, plays those calls, and saves the request Assist sends next as `<name>.request.json`. No model runs; the real document and the dev server aren't touched.
2. **Replay** it. `replay.mts` sends that request N times to Ollama (`ollama`, exactly as Assist does) or to an OpenAI-compatible server such as Llama.app (`openai`), and writes one line per sample to `replay/runs/`: `call`, `lost` (the runtime dropped a call it couldn't parse), `loop` (reasoning repeating itself, by the check Assist uses), `text`, `timeout` or `error`, with the model's reasoning.
3. **Check** the calls. `check.mts` applies each call from a run to a copy of the document and says whether Weft accepted it. A readable call isn't yet a useful one.

```sh
cd apps/server
npx tsx ../../evals/replay/capture.mts ../../evals/replay/fixtures/convert-rows.scenario.json
npx tsx ../../evals/replay/replay.mts convert-rows ollama gemma4:26b-a4b-it-q8_0 5 12   # 5 samples, 12 minutes each at most
npx tsx ../../evals/replay/replay.mts convert-rows openai ggml-org/gemma-4-26B-A4B-it-GGUF:Q8_0 5 12
npx tsx ../../evals/replay/check.mts convert-rows ../../evals/replay/runs/<run>.jsonl
```

Change one thing at a time between runs (the model, its quantization, the runtime, or Weft itself by capturing again), and keep the sample count and time limit the same. Only one large model fits in memory at once: unload the other runtime's first. A fixture's document snapshot (`fixtures/<name>.local.ydoc`) is the whole document, so it isn't committed; `check.mts` needs it, `replay.mts` doesn't.

| Fixture | The step it captures |
|---|---|
| `convert-rows` | A list of eight look-alike rows, after two canvas reads: the model has to mark one a component, bind its text and convert the others in place (`update_nodes` with `instance`) |
| `convert-rows-8k` | The same step as Assist sent it while tool results were cut at 8,000 characters: the baseline for the change to the cut |

| Date | Fixture | Runtime, model | Samples | Readable call | Lost | Loop | Notes |
|---|---|---|---|---|---|---|---|
| 2026-11-12 | `convert-rows-8k` | Ollama, `gemma4:26b-mlx` (4-bit) | 5 | 1 | 3 | 1 | The one call converted three rows and was accepted. Lost calls closed strings with `\"` or `\]` and dropped braces; the loop went back and forth over the HP bar's width. [Write-up](results/2026-11-13-gemma-tool-calls.md) |
| 2026-11-12 | `convert-rows-8k` | Ollama, `gemma4:26b-a4b-it-q8_0` (8-bit) | 5 | 5 | 0 | 0 | Four of the five were the same list read again (it had seen a tenth of it); one conversion, accepted |
| 2026-11-12 | `convert-rows-8k` | Llama.app (llama.cpp), `gemma-4-26B-A4B-it` Q8_0 | 5 | 5 | 0 | 0 | Three conversions: one accepted, two refused for a `"type"` key echoed from `get_canvas`; two reads again |
| 2026-11-13 | `convert-rows` | Ollama, `gemma4:26b-a4b-it-q8_0` (8-bit) | 5 | 2 | 3 | 0 | With the larger cut nothing was read again: all five went for the conversion. Both readable calls accepted, one converting all seven rows; the lost ones were a brace short at the end (`}}]}` for `}}}]}`). Llama.app not rerun: its model had been removed |

## Log

| Date | Eval | Model / client | Weft version | Tool calls | Rejected | Tokens (in / out) | Score /30 | Notes |
|---|---|---|---|---|---|---|---|---|
| 2026-10-20 | build-from-reference (no reference reached the agent) | Claude Opus 5.5 | `4c380da` | 27 (23 Weft) | 1 | not recorded | 22 (reviewer), 23 (self) | [Health screens](results/2026-10-20-health-screens-opus.md): led to the duplicate id map, the outline mode, the dl/table tags and the skill changes |
| 2026-10-20 | none (free brief, eval prompt not used) | Grok | `6250395` | not reported | not reported | not recorded | 22 (reviewer) | [Bloom Health](results/2026-10-20-bloom-health-grok.md): strong look and font pairing; raw hex, no aria on charts, tabs without href |
| 2026-10-22 | build-from-reference (cg.local.png) | Claude Opus 5.5 / Claude Code | `ae8691e` | 24 (22 Weft) | 1 | not recorded | 25 (reviewer), 24 (self) | [CarGurus home](results/2026-10-22-cg-home-opus.md): close match at 1440; mobile nav lost; sentence case rewrote the reference copy; icons, logos and photos are placeholders; `listStyle` rejected |
| 2026-10-22 | build-from-reference (cg.local.png) | Grok (remote) | `ae8691e` | not reported | 1 | not available | 23 (reviewer), 24 (self) | [CarGurus home](results/2026-10-22-cg-home-grok.md): kept the reference copy verbatim; search is a label, not an input; mobile nav lost; exposed the sessionless reminder bug |
| 2026-11-09 | skill comparison, 4 free prompts before/after | Claude Opus 5.5 / Claude Code subagents | `57a2136` → `skill-app-screens` | ~20 each | 0–2 | not recorded | not scored | [App screens skill](results/2026-11-09-app-screens-skill.md): Material tint gone, more domain detail, variety back in round 2; found silently dropped argument keys |
| 2026-11-15 | wrap 4 cards in buttons, same prompt before/after | Qwen 3.8 27B (MLX) / Assist | `c2ca29a` → `adopt-layers` | 0 → 2 edits (+3 reads) | 0 | not recorded | not scored | [Wrapping cards](results/2026-11-15-wrap-cards-qwen.md): stopped at the 10-minute step limit with no calls (12 moves or a rebuild needed); with `adopt`, done in one wrap and one cleanup, first step 260 s |
| 2026-11-17 | name icon buttons through an attribute prop | Qwen 3.8 27B (MLX) / Assist | `51c22b5` + `trace-logging` | 1 edit (8 updates) | 0 | not recorded | not scored | [Labeling buttons](results/2026-11-17-label-buttons-qwen.md): component `aria-label` bound to `optionsLabel`, five instances named, two plain buttons labeled, no warnings left; 105 s; first recorded trace |

## Traces (training data)

Evals measure a model; traces collect material to teach one. Start Weft with `WEFT_TRACES=1 pnpm dev` and each Assist turn is appended to `.weft-data/traces/<date>.jsonl`: what the model saw at its last step, the tools it was offered and how the turn ended. Undoing a turn adds a line that points at it. They hold your documents and never leave `.weft-data`.

`traces/export.mts` builds a dataset for [mlx-lm](https://github.com/ml-explore/mlx-lm)'s LoRA trainer from the turns worth learning from: answered, kept, and with every tool call accepted.

```sh
cd apps/server
npx tsx ../../evals/traces/export.mts                          # every model → .weft-data/traces/mlx/{train,valid}.jsonl
npx tsx ../../evals/traces/export.mts --model qwen3.8 --reasoning   # one teacher's turns, with its reasoning
npx tsx ../../evals/traces/export.mts --profile small               # as a model tuned for Weft is sent them (see below)
mlx_lm.lora --model <base model> --train --data ../../.weft-data/traces/mlx --mask-prompt
```

It prints how many turns it kept, by model, and why it left the others out. Some things to know before training on them:

- **The answer is the last reply.** Each example is a whole conversation, and `--mask-prompt` trains only on its final message, so a turn teaches the step that finished it. A turn of four calls teaches its last one; teaching the earlier steps means cutting the conversation at each assistant message, which the export doesn't do yet.
- **Train on what the model will be sent.** As sent to Qwen, an example is about 13,500 tokens: 6,200 of tool definitions (21 tools; it used one), 2,400 of server instructions, 3,700 of selection, and the turn itself. `--profile small` rebuilds it the way Assist prompts a tuned model (`weft-…`, `apps/server/src/profiles.ts`): a few lines of instructions, the selection's layout styles only, and five tools with one-line descriptions. That's about 5,500 tokens, mostly the selection. A model trained this way must be run with the same profile, and Assist does that by name. Turns that used a tool the profile doesn't offer are left out.
- **Kept isn't the same as good.** A turn you didn't undo may still be wrong in a way you didn't notice. Read a sample before training, and keep the replay fixtures and their documents out: they're for measuring, and a model trained on its test learns nothing you can measure.
- **Teachers:** a turn from a cloud model is still that provider's output; check its terms before training on it. Open-weight models (Qwen, Gemma) are the simpler teachers.
