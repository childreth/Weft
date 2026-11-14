# Gemma 4 26B and lost tool calls — replay eval — 2026-11-12/13

- **Eval:** replay (`evals/replay`), fixtures `convert-rows-8k` and `convert-rows`
- **Step:** the "DM — Combat tracker" artboard's Initiative list, eight look-alike rows, after two canvas reads. The prompt asks to make one row a component and turn the others into instances, keeping each row's text. The call that does it is one `update_nodes` (bind the text layers, mark the component, convert the rows), 1,500–1,800 characters.
- **Weft version:** branch `tool-result-clip` (on `convert-to-instance`, PR #48)
- **Settings:** thinking on, temperature 0.2, 12 minutes per sample at most, 5 samples per run
- **Machine:** Apple silicon, 52 GB, one large model loaded at a time

## Why

In Assist, `gemma4:26b-mlx` failed this task three times running: tool calls Ollama couldn't parse and dropped (its log: `gemma4 tool call parsing failed`), and reasoning that looped until the step limit. Qwen 3.8 27B and Muse Glimmer 30B did the same task. One run per model can't separate the model from its build, its runtime, or Weft, so the request was captured once and replayed.

## Results

Readable = a tool call came back that could be parsed. Large = the conversion call (`update_nodes`), as opposed to another read.

| Run | Readable | Lost | Loop | Large calls written | Large calls readable | Accepted by Weft |
|---|---|---|---|---|---|---|
| Ollama, `gemma4:26b-mlx` (4-bit), 8k cut | 1 | 3 | 1 | 4 | 1 | 1 |
| Ollama, `gemma4:26b-a4b-it-q8_0` (8-bit), 8k cut | 5 | 0 | 0 | 1 | 1 | 1 |
| Llama.app, `gemma-4-26B-A4B-it` Q8_0, 8k cut | 5 | 0 | 0 | 3 | 3 | 1 (2 refused: `"type"` key) |
| Ollama, `gemma4:26b-a4b-it-q8_0` (8-bit), larger cut | 2 | 3 | 0 | 5 | 2 | 2 |

Two earlier samples of the 4-bit build at a 6-minute limit produced no call at all (34,000 characters of reasoning, still re-checking rows).

## What it shows

1. **Gemma can do this step.** Every build planned it, and the readable calls were mostly right: Weft accepted 5 of 7 conversion calls it was given, and refused the other two only for a key copied from `get_canvas` output.
2. **Long calls lose their end.** Every lost call broke near its end: a string closed with `\"` or `\]` instead of Gemma's own string marker, a missing brace (`}}]}` for `}}}]}`), or two calls run together. Ollama's parser repairs a few Gemma slips (an unclosed string marker, a missing final brace) but not these, so the call is dropped and Assist sees nothing.
3. **Precision helps, but isn't the whole cause.** Counting conversion calls only: 4-bit 1 of 4 readable, Ollama 8-bit 4 of 6, Llama.app 8-bit 3 of 3. The 4-bit build also looped and dithered where the 8-bit ones didn't.
4. **The 8,000-character cut was hurting.** The list's full read is 76,070 characters. Shown the first 8,000, the 8-bit models asked for the same read again in 6 of 10 samples (with a larger `maxDepth`, or unchanged), getting the same cut text back. With the cut at a tenth of the loaded context (39,322 characters here), no sample read again: all five went for the conversion. That is why the last run wrote more large calls, and so lost more.
5. **Not yet known:** whether Llama.app's runtime loses fewer large calls than Ollama's at the same precision. It was 3 of 3 on the old request; the model was removed before the larger-cut request could be replayed there. Three calls is too few either way.

## What changed in Weft

- Tool results for local models are cut to about a tenth of the context Ollama has the model loaded with (`toolResultLimit`), not a flat 8,000 characters.
- `evals/replay`: capture, replay and check, so the next local-model failure can be measured the same way.

## Open

- Replay `convert-rows` against Llama.app's Q8_0 (download it again), to finish the runtime comparison.
- Try asking local models for smaller calls (for example, at most 8 updates per `update_nodes`), captured as a new fixture and replayed: if the end of long calls is what breaks, shorter calls should lose less.
- Report the unrepaired cases to Ollama with the log lines (raw call plus parser error), if the comparison points at its parser.
- `get_canvas` prints `type` on every node and `update_nodes` refuses it: models copy it. Either leave it out of `get_canvas` or accept it when it matches.
