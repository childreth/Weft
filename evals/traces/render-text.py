"""Renders an export (`export.mts`: {messages, tools} per line) into one `text` column per example, for trainers
that take raw text, such as Unsloth Studio. Studio's column guess read a message list as one user message and
dropped the tools; a `text` column is used as is.

  python render-text.py <tokenizer dir> <export dir> <out dir>

<tokenizer dir> holds the student's tokenizer and the chat_template.jinja to render with: the patched one, with no
empty <think> block (see evals/README.md). Needs `transformers` (mlx-lm's Python has it). Writes
<out dir>/{train,valid}.text.jsonl and prints each split's longest example in tokens, to pick the context length.
"""
import json
import sys
from pathlib import Path

from transformers import AutoTokenizer

tokenizer_dir, export_dir, out_dir = (Path(a) for a in sys.argv[1:4])
tokenizer = AutoTokenizer.from_pretrained(tokenizer_dir)
template = (tokenizer_dir / "chat_template.jinja").read_text()
out_dir.mkdir(parents=True, exist_ok=True)

for split in ("train", "valid"):
    source = export_dir / f"{split}.jsonl"
    if not source.exists():
        continue
    rows = [json.loads(line) for line in source.open()]
    texts = [tokenizer.apply_chat_template(r["messages"], tools=r["tools"], tokenize=False, chat_template=template) for r in rows]
    with (out_dir / f"{split}.text.jsonl").open("w") as f:
        for text in texts:
            f.write(json.dumps({"text": text}, ensure_ascii=False) + "\n")
    lengths = [len(tokenizer(t)["input_ids"]) for t in texts]
    empty_think = sum("<think>\n\n</think>" in t for t in texts)
    print(f"{split}: {len(texts)} examples, longest {max(lengths)} tokens" + (f", {empty_think} with an empty <think> block: patch the template" if empty_think else ""))
