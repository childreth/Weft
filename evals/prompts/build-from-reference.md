# Eval: build from reference

Paste everything below the line into the agent and attach the reference image (from `../references/`).

---

# Weft build eval

You're being evaluated on building a page in Weft, a design canvas where every artboard is real HTML + CSS. You're connected to it through the `weft` MCP tools. Work as you normally would; the process counts as much as the result.

## Task

Rebuild the attached reference image as a new artboard in Weft.

If you can't see an attached image, stop and say so. Don't design something else instead.

- Create one new artboard, 1440 wide, named `Eval — <your model name> — <today's date>`. Place it to the right of the existing artboards and don't modify any other artboard.
- Match the reference as closely as Weft allows: layout, proportions, spacing, type hierarchy, colors.
- Make it responsive: it should also work at 390px wide (mobile).
- Use semantic HTML (header, nav, section, h1, button, a, …) and design tokens where they fit.
- Fonts: use the reference's typeface if it's a Google Font (`search_fonts`, `add_fonts`), or the closest match, and say which.
- Things Weft can't do yet (photos, icons, logos): use a clean placeholder and list them in your report. Don't fake them out of shapes.

## How to work

1. Start with `read_skill` (no path: it returns the whole guide) and follow it. The reference is your design direction, so it overrides the guide's style defaults.
2. Build section by section. After each section, call `get_screenshot` and compare it with the reference before moving on.
3. Check mobile with `get_screenshot` at `width: 390` and fix what breaks.
4. When you're done, call `select_nodes` on the artboard.

Pass your exact model name in `model` on every call.

## Report (required, at the end)

Reply with this report and nothing else after it:

### 1. Result
- Artboard id and name
- One-paragraph summary of what you built

### 2. Process metrics
| Metric | Value |
|---|---|
| Total tool calls | |
| Calls per tool (e.g. create_nodes ×4, update_nodes ×6, get_screenshot ×7) | |
| Rejected calls (tool returned an error) | |
| Screenshots taken | |
| Times you rebuilt or deleted something you'd made | |
| Did you read the skill first? Which files? | |
| Did any tool reply include a `note`? What did it say? | |

### 3. Rejections
For each rejected call: the tool, the error message (shortened), and what you changed.

### 4. Token usage
Report exactly what your environment tells you: input tokens, output tokens, cache reads/writes, total, and cost if shown.
**If you don't have access to exact numbers, write "not available". Do not estimate or guess.**

### 5. Self-assessment against the reference (score 1–5 each, with one line why)
- Layout and proportions
- Typography (sizes, weights, hierarchy)
- Color and contrast
- Spacing and alignment
- Mobile layout at 390px
- Semantic structure and token use

### 6. Gaps
- What you couldn't reproduce, and why (Weft limitation vs. your choice)
- What in Weft's tools, skill or error messages slowed you down or confused you
- One change to Weft that would have helped most
