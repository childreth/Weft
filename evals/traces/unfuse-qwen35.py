"""Splits Qwen 3.5's fused GGUF tensors back into the separate ones older loaders expect.

  PYTHONPATH=<llama.cpp>/gguf-py python unfuse-qwen35.py <in.gguf> <out.gguf>

Recent llama.cpp converters (Unsloth Studio's export among them) stack attn_qkv + attn_gate into attn_qkv_gate and
ssm_beta + ssm_alpha into ssm_beta_alpha, rows in that order. Ollama 0.40.17 couldn't load that ("tensor
'blk.0.ssm_beta.weight' not found"); 0.40.18 can, so this is only for older runtimes. No weights change: the split
sizes come from the file's own ssm.* metadata."""
import sys
import gguf

src, dst = sys.argv[1:3]
r = gguf.GGUFReader(src)
arch = bytes(r.fields['general.architecture'].parts[-1]).decode()
v = lambda k: int(r.fields[f'{arch}.{k}'].parts[-1][0])
k_heads, v_heads, k_dim = v('ssm.group_count'), v('ssm.time_step_rank'), v('ssm.state_size')
value_dim = v('ssm.inner_size')
qkv_rows = 2 * k_heads * k_dim + value_dim
SPLITS = {'attn_qkv_gate': (('attn_qkv', qkv_rows), ('attn_gate', value_dim)),
          'ssm_beta_alpha': (('ssm_beta', v_heads), ('ssm_alpha', v_heads))}

def parts(t):
    bits = t.name.split('.'); kind = bits[2] if len(bits) > 3 else ''
    if kind not in SPLITS:
        return [(t.name, t.data)]
    (a, na), (b, nb) = SPLITS[kind]
    assert t.data.shape[0] == na + nb, (t.name, t.data.shape)
    return [(t.name.replace(kind, a), t.data[:na]), (t.name.replace(kind, b), t.data[na:])]

w = gguf.GGUFWriter(dst, arch, endianess=r.endianess)
for f in r.fields.values():
    if f.name == gguf.Keys.General.ARCHITECTURE or f.name.startswith('GGUF.'):
        continue
    vt = f.types[0]
    w.add_key_value(f.name, f.contents(), vt, sub_type=f.types[-1] if vt == gguf.GGUFValueType.ARRAY else None)
out = [(n, d, t.tensor_type) for t in r.tensors for n, d in parts(t)]
for n, d, tt in out:
    w.add_tensor_info(n, d.shape, d.dtype, d.nbytes, tt)
w.write_header_to_file(); w.write_kv_data_to_file(); w.write_ti_data_to_file()
for n, d, tt in out:
    w.write_tensor_data(d.copy() if not d.flags['C_CONTIGUOUS'] else d, tensor_endianess=r.endianess)
w.close()
print(f'{len(r.tensors)} tensors in, {len(out)} out')
