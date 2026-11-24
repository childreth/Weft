# Case study: teaching a 4B local model to fix layouts

Weft is a design canvas where the canvas is the browser's own DOM and CSS. Its Assist panel lets a local model, run through Ollama on the user's machine, make quick fixes like "space these out" or "this row is stacked, fix it". Large local models do this well and slowly. Small ones are fast enough to feel instant and mostly fail. This is the story of fine-tuning a 4-billion-parameter model to close part of that gap, on one laptop (an M-series Mac with 48 GB), with no human-labelled data.

**Result so far:** on a frozen set of 60 layout breakages, the base Qwen3-4B fixes 28. Fine-tuned on the same data, Qwen3-4B fixes 45, and the newer Qwen 3.5 4B goes from 25 untrained to 50 (49 on a second run), against about 85% for the 27B teacher they learn from. The biggest single gain came from training on *fewer*, cleaner examples; a second runtime and then a newer student each added about five more.

## The approach

The method is **distillation through synthetic data, filtered by measurement**:

1. **Break a real layout on purpose.** A generator copies one of the user's documents, picks a layer, and applies a breakage: a row stacked into a column, a gap removed, padding removed, a child wider than its container, flex lost, a grid collapsed to one column. There is also a control where nothing is broken and the right answer is to change nothing. Each breakage comes with prompts a person might type, and the right layers are selected, the way a user would select them.
2. **Let a teacher fix it.** A 27B model (`qwen3.8:27b`) gets the request through the real Assist loop, with the real tools.
3. **Measure, don't trust.** A check renders the page headless and reads measured boxes: are the children side by side again, with space between them, inside their container? It doesn't compare stored styles, so any fix that looks right passes. Fixes that delete layers, touch layers they shouldn't, or have a tool call refused are thrown away and undone. This is *rejection sampling*: generate many attempts, keep only verified ones.
4. **Train the student on what the teacher did**, one example per step, in exactly the prompt format the student will be sent.
5. **Score it the same way**, on breakages it never trained on, against the untrained base model.

No one labels anything. The browser is the judge.

## Design decisions that mattered

**A small prompt for a small model.** The full Assist prompt explains how Weft works, describes every tool in a paragraph, and includes every style of the selection. A tuned model doesn't need the explanations; it learned them. The `small` profile sends a few lines of instructions, five tools with one-line descriptions, and only the layout styles of the selection. That leaves more of the context, and more of the model's attention, for the task. The base model did as well on the small prompt as on the full one (25 vs 24 of 60), so nothing was lost before training began.

**The training data is rebuilt, not replayed.** Traces record the untrimmed selection, and the export rebuilds each example in whichever prompt profile is asked for. Changing the prompt doesn't mean regenerating data: 450 teacher turns were re-exported several times as the prompt evolved.

**Show the parent, but only when it matters.** Fixing "space these out" with three cards selected means editing the cards' *parent*, which the model couldn't see. Showing every selected layer's parent made things worse: on single-layer fixes it pulled models away from the layer itself (23 → 10 of 50). Showing the parent only when two or more selected layers share it got the best of both. The base model went from 25 to 33 of 60 and the tuned one from 29 to 38, measured on the test set before it was frozen (see below). A prompt change gained as much as training did.

## Training

- **Student:** `Qwen3-4B-Instruct-2507`, 4-bit, trained with LoRA (rank 8, last 8 layers, learning rate 1e-5) using `mlx-lm`. About 4 seconds per step and 12 GB of memory.
- **Masking:** only the assistant's message is trained (`--mask-prompt`), not the prompt or tool results.
- **Data:** 629 examples from 294 verified teacher turns that read the document at most once, about 3.3k tokens each (801 from 355 before filtering).
- **Merge:** the adapter is fused into a full-precision copy, then imported into Ollama as a `weft-…` model, which Assist automatically sends the small prompt.

## Results

All on the same frozen 60 breakages (seed 777, small prompt):

| Model | Training data | Fixed |
|---|---|---|
| Qwen3-4B, base | none | 28 / 60 |
| Qwen3-4B, tuned | 439 examples | 35 / 60 |
| Qwen3-4B, tuned | 801 examples | 35 / 60 |
| Qwen3-4B, tuned (mlx-lm) | 629 efficient examples | 40 / 60 |
| Qwen3-4B, tuned (Unsloth Studio) | the same 629 | 45 / 60 |
| Qwen 3.5 4B, base | none | 25 / 60 |
| **Qwen 3.5 4B, tuned (Unsloth Studio)** | **the same 629** | **50 / 60** (49 on a rerun) |
| Gemma 4 E4B, base | none | 4 / 60 |
| Teacher, 27B | none | about 85% |

Doubling the data didn't help. Looking at failures explained why: on "flex lost" breakages, where the teacher succeeds 49 times out of 53, the student fixed 2 of 12. It kept calling `get_canvas` to read the document, repeating the exact same call until Weft refused it, and never made the edit. The training data taught that: in 101 examples the teacher reads again right after a read, and in 43 of them that second read is another `get_canvas`. A 27B model can read twice and still finish; a 4B model copies the habit and loses the thread. More data of the same kind reinforced the habit.

So the next run trained only on the teacher's *efficient* turns, those that read the document at most once (`export.mts --max-reads 1`): 629 examples instead of 801. It fixed 40 of 60, five more than either earlier student, and the habit was gone:

| On the same 60 | All 801 examples | 629 efficient examples |
|---|---|---|
| Fixed | 35 | 40 |
| `get_canvas` calls | 51 | 5 |
| Turns with a refused call | 6 | 0 |
| "Flex lost" fixed | 2 / 12 | 4 / 12 |
| "Padding removed" fixed | 6 / 8 | 7 / 8 |

The student copies *how* the teacher works, not only whether it succeeds. Passing the check is a floor for a training example, not the bar: of two fixes that both work, train on the one you'd want a small model to imitate.

**Gemma 4 E4B, untrained, fixed 4.** It made no tool call in 56 of 60 runs. Instead it described the edit it would make ("I will update the display of the Actions frame…") or asked which layer was meant, though the selection was in the prompt. That isn't Weft dropping its calls: the same recorded requests sent straight to Ollama got no call 5 times in 5, streamed or not, at temperature 0.2 or 1.0. Given one simple tool it calls correctly, and with thinking on it returned nothing at all. Out of the box, it talks about tools more than it uses them. Fine-tuning teaches exactly that step, but from a much lower start than Qwen's 28.

## Pitfalls, in the order they bit

Each of these produced a model that trained without errors and was quietly wrong:

1. **Only the last message was learned.** `--mask-prompt` trains an example's final message. With one example per conversation, that's the closing sentence ("I added a 16px gap"), so the model learned to write fluent summaries of edits it never made. Fix: one example per step, so every tool call is a final message somewhere.
2. **The template didn't match.** The 4-bit upload ships a chat template that wraps the reply in an empty `<think>` block, which the Instruct model never writes and Ollama never renders. The student trained on one format and was served another. Fix: patch the template in a local copy before training.
3. **Merging into 4-bit lost half the learning.** Loss on the reply went from 1.0 with the adapter to 2.7 after fusing into the quantized weights. The adapter's small changes were rounded away. Fix: fuse into full precision (`--dequantize`): 0.54.
4. **The wrong tool-call parser.** Ollama's importer guessed a coder variant whose XML tool calls it then couldn't read. Every call silently vanished. Fix: set the renderer and parser explicitly.
5. **Too long, silently cut.** A 4-characters-per-token estimate let 6,400-token examples past a 6,144-token limit. mlx-lm cuts from the end, which is where the reply being learned is, and validation loss came back `nan`. Fix: measure the real ratio (3.45 for this JSON-heavy data) and leave long examples out rather than cutting them.
6. **The test set moved.** The generator draws breakages from the live documents, and one was edited between runs: 21 of 60 breakages changed and two models looked comparable when they weren't. Fix: freeze a copy of the documents for scoring.
7. **Memory.** In mlx-lm, Qwen 3.5 4B's hybrid linear-attention layers needed 31 GB at 1k tokens in training, so the work moved to Qwen3-4B (7 GB at 6k tokens). Unsloth Studio later trained Qwen 3.5 in under 8 GB (see below). The 28 GB teacher and training can't share the GPU either; they take turns.
8. **An export the runtime couldn't open.** Studio's GGUF of the tuned Qwen 3.5 stored two pairs of weights stacked into one tensor each, a newer llama.cpp layout. Ollama 0.40.17 refused it ("tensor 'blk.0.ssm_beta.weight' not found"). Splitting the stacked tensors back (`evals/traces/unfuse-qwen35.py`) changed no weights and worked; Ollama 0.40.18, out the same day, reads the stacked file directly. Scores from both files agree within run-to-run noise.

## Honest caveats

- **The test isn't fully held out.** Test breakages come from the same documents as training ones, with different random draws. The score measures fixing known layouts broken in new ways, not unseen designs. A stricter split keeps whole documents out of training.
- **60 cases is small.** One fix is about 1.7 points; differences of 2 or 3 fixes are noise. Scoring the same model twice gave 50 and 49, with 5 cases flipping in each direction.
- **One teacher.** The student can't learn what the teacher never does well, such as "too wide" fixes at 52 of 68.

## A second runtime: Unsloth Studio

The same student and the same 629 examples, trained in Unsloth Studio's Mac app instead of mlx-lm, scored on the same 60 breakages. If the score moves, the runtime moved it. It fixed **45 of 60**, five more than the mlx-lm run.

Getting the data in was the lesson so far. Studio guessed the columns of the prompt / completion file and showed the guess as a detected mapping: each conversation pasted into one user message as JSON, the reply as JSON text, and the tool schemas dropped. It would have trained without complaint, and the model would have learned to type out tool calls as text instead of making them. Rendering each example with the student's own (patched) template into a single `text` column fixed it: Studio reads that as raw text and uses it as is, so its template can't add an empty `<think>` block either.

Studio's defaults are set for a different job, and each one would have changed the run:

| | mlx-lm run (40 / 60) | Studio default | Set to |
|---|---|---|---|
| Learning rate | 1e-5 | 2e-4 | 1e-5 |
| Batch | 1 | 2 × 4 = 8 (850 steps would be 12 epochs) | 1 × 1 |
| LoRA rank / strength | 8, scale 20 | rank 32, alpha 32 | rank 8, alpha 160 |
| Context | 6,144 | 2,048 (cuts most examples) | 8,192 |
| Weight decay | none | 0.001 | 0 |

Three differences remain because Studio has no setting for them: it trains every layer, not the last 8; the learning rate decays (linear) instead of staying constant; and raw text trains on the prompt as well as the reply. On an M5 Pro with 48 GB it took 1 hour 55 minutes for 850 steps (0.12 to 0.17 steps a second as the GPU heated up), in 7 GB. Eval loss fell from 0.65 at step 50 to 0.156 at step 850 and never turned up, including in the second pass over the data. The adapter was merged and exported as a 16-bit GGUF, the same precision as the mlx-lm model, so the export isn't a fourth difference.

| On the same 60 | mlx-lm | Unsloth Studio |
|---|---|---|
| Fixed | 40 | 45 |
| No gap | 13 / 16 | 15 / 16 |
| One column | 4 / 6 | 5 / 6 |
| No padding | 7 / 8 | 6 / 8 |
| Flex lost | 4 / 12 | 6 / 12 |
| Too wide | 3 / 9 | 4 / 9 |
| `get_canvas` calls | 5 | 11 |
| Turns with a refused call | 0 | 1 |

The two models disagree on 9 of the 60 cases: Unsloth's fixes 7 that mlx-lm's missed, and misses 2 that it fixed. Five fixes is beyond the 2 or 3 this set can't tell apart, but it is one run, and it can't say which of the three differences made it: training every layer gives the adapter more room, and training on the prompt as well as the reply is a different signal. Retraining with one difference at a time would tell. The cost shows too: `get_canvas` reads doubled, and one turn read the page five times and had two calls refused, the habit the efficient data removed. "Too wide" is still the weakest breakage: in four of its five misses the model measured the layer and stopped without editing it.

## A newer student: Qwen 3.5 4B

Studio trained Qwen 3.5 4B where mlx-lm couldn't fit it, so the same 629 examples went to the newer model with the same settings. It needed its own training files: Qwen 3.5 writes tool calls as XML (`<function=update_nodes><parameter=updates>…`) where Qwen3 writes JSON, and a student trained on the other model's format would make calls its runtime can't read. `render-text.py` renders them with Qwen 3.5's own template, unpatched this time: Assist turns thinking off, and Qwen 3.5 is served with an empty `<think>` block before its reply, so the training text should have one too.

It trained in 7.75 GB in 1 hour 40 minutes (Studio added about 5 warmup steps on its own). Eval loss fell from 0.170 to 0.135 and flattened in the second pass without turning up. It started much further away (loss 4.4 against Qwen3's 1.9: the format was new to it) and came down within 40 steps. Losses can't be compared across the two models, which split text into different tokens.

| On the same 60 | Qwen3 (mlx-lm) | Qwen3 (Studio) | Qwen 3.5 (Studio) |
|---|---|---|---|
| Fixed | 40 | 45 | 50 |
| Stacked row | 8 / 8 | 8 / 8 | 8 / 8 |
| No gap | 13 / 16 | 15 / 16 | 14 / 16 |
| One column | 4 / 6 | 5 / 6 | 5 / 6 |
| No padding | 7 / 8 | 6 / 8 | 8 / 8 |
| Flex lost | 4 / 12 | 6 / 12 | 12 / 12 |
| Too wide | 3 / 9 | 4 / 9 | 2 / 9 |
| `get_canvas` calls | 5 | 11 | 7 |
| Median time per fix | | 4.2 s | 10.3 s |

"Flex lost", where the Qwen3 students fixed 4 and 6 of 12, went to 12 of 12. "Too wide" is now the one weak breakage, and the teacher's weakest too (52 of 68), so the data has the least to teach there. Untrained, Qwen 3.5 4B fixed 25, three fewer than untrained Qwen3 (1 of 12 "flex lost", none of the "too wide"), so nearly all of the 50 is training: the newer model didn't start ahead, it learned more from the same examples. (The untrained score is Ollama's own 4-bit build with its default sampling settings; the tuned one is 16-bit.)

It's slower: 10.3 seconds per fix against 4.2. Not the runtime: both models write about 30 tokens a second, and the cache is reused between steps. The XML call format takes about twice the tokens of JSON for the same call (85 against 41 in one case), and every step is mostly a call. For a fix that should feel instant, that's the trade: five more fixed in 60, at more than twice the wait.

## What's next

- Find which Studio difference gained the five (every layer, or the prompt in the loss), one at a time.
- Teach "too wide" better: the teacher's weakest breakage is now the students' too.
- Try other students on the same data. The dataset is plain chat messages plus tool schemas, so any model mlx-lm can train and Ollama can serve is a candidate. Gemma 4 E4B is first.
- Teach recovery: examples where a call is refused and the model does the right thing next.
- Hold out whole documents for a stricter test.

## Where the code is

- `evals/generate/`: the breakages, checks and generator
- `evals/traces/export.mts`: traces to mlx-lm examples (`--profile small`, `--max-reads`, `--max-tokens`)
- `evals/traces/render-text.py`: an export as one `text` column per example, for Unsloth Studio
- `evals/traces/unfuse-qwen35.py`: splits a Qwen 3.5 GGUF's stacked tensors for runtimes that predate them
- `apps/server/src/profiles.ts`: the small prompt, its tools, and the selection with parents
- `evals/README.md`: how to run each step
