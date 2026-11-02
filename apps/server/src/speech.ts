/**
 * Spoken Assist replies through an Ollama speech model (Phonon, LFM3-Audio…),
 * on this machine like the chat models. Ollama lists them with the "speech"
 * capability and serves the OpenAI-style `/v1/audio/speech` route (WAV,
 * 24 kHz mono, streamed as it's generated).
 */

export interface SpeechModel {
  model: string;
  /** Voice names, "default" first. */
  voices: string[];
}

export const MAX_SPOKEN_CHARS = 2000;

/**
 * Voice names from Ollama's error for an unknown voice, which is the only place
 * it lists them. Models name them ("available voices: Miles, Zoey, default") or
 * build them ("use female or male, optionally followed by a language such as
 * female-french (languages: arabic, french)").
 */
export function voicesFromError(message: string): string[] {
  const named = /available voices: (.+)$/.exec(message)?.[1];
  const names = named
    ? named.split(', ')
    : (() => {
        const built = /use (.+?), optionally followed by a language\b.*\(languages: (.+)\)\s*$/.exec(message);
        if (!built) return [];
        const bases = built[1]!.split(' or ');
        const languages = built[2]!.split(', ');
        return [...bases, ...languages.flatMap((language) => bases.map((base) => `${base}-${language}`))];
      })();
  return ['default', ...names.filter((v) => v && v !== 'default')];
}

export class Speech {
  /** Voices by model: Ollama only names them in the error for an unknown voice, so ask once. */
  private readonly voices = new Map<string, string[]>();

  constructor(readonly ollamaUrl: string) {}

  /** The installed speech models and their voices, the one to start with first. */
  async models(signal?: AbortSignal): Promise<SpeechModel[]> {
    const res = await fetch(`${this.ollamaUrl}/api/tags`, { signal });
    if (!res.ok) return [];
    const { models } = (await res.json()) as { models: Array<{ name: string; capabilities?: string[] }> };
    const speech = models.filter((m) => m.capabilities?.includes('speech')).map((m) => m.name);
    // The English Phonon model first, when there's a choice.
    const phonon = (name: string) => /^phonon(:latest)?$/.test(name);
    const ordered = [...speech.filter(phonon), ...speech.filter((name) => !phonon(name))];
    return Promise.all(ordered.map(async (model) => ({ model, voices: await this.voicesOf(model, signal) })));
  }

  private async voicesOf(model: string, signal?: AbortSignal): Promise<string[]> {
    const known = this.voices.get(model);
    if (known) return known;
    const voices = await this.listVoices(model, signal);
    this.voices.set(model, voices);
    return voices;
  }

  private async listVoices(model: string, signal?: AbortSignal): Promise<string[]> {
    const res = await fetch(`${this.ollamaUrl}/v1/audio/speech`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ model, voice: '\u0000', input: '.' }),
      signal,
    });
    const message = res.ok ? '' : ((await res.json().catch(() => ({}))) as { error?: { message?: string } }).error?.message ?? '';
    return voicesFromError(message);
  }

  /** WAV audio of `text`, streamed from Ollama as it's generated. */
  async speak(text: string, voice: string | undefined, model: string | undefined, signal: AbortSignal): Promise<Response> {
    const models = await this.models(signal);
    // A model that's gone falls back to the first, like a voice that's gone.
    const info = models.find((m) => m.model === model) ?? models[0];
    if (!info) throw new Error('No speech model installed (ollama pull phonon)');
    const res = await fetch(`${this.ollamaUrl}/v1/audio/speech`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        model: info.model,
        input: text.slice(0, MAX_SPOKEN_CHARS),
        ...(voice && voice !== 'default' && info.voices.includes(voice) && { voice }),
        response_format: 'wav',
      }),
      signal,
    });
    if (!res.ok || !res.body) throw new Error(`Ollama: ${(await res.text()).slice(0, 300) || res.status}`);
    return res;
  }
}
