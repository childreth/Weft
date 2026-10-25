/**
 * Spoken Assist replies through an Ollama speech model (Phonon), on this
 * machine like the chat models. Ollama lists them with the "speech"
 * capability and serves the OpenAI-style `/v1/audio/speech` route (WAV,
 * 24 kHz mono, streamed as it's generated).
 */

export interface SpeechInfo {
  model: string;
  /** Voice names, "default" first. */
  voices: string[];
}

export const MAX_SPOKEN_CHARS = 2000;

export class Speech {
  /** Voices by model: Ollama only names them in the error for an unknown voice, so ask once. */
  private readonly voices = new Map<string, string[]>();

  constructor(readonly ollamaUrl: string) {}

  /** The installed speech model and its voices, or null when there's none. */
  async info(signal?: AbortSignal): Promise<SpeechInfo | null> {
    const res = await fetch(`${this.ollamaUrl}/api/tags`, { signal });
    if (!res.ok) return null;
    const { models } = (await res.json()) as { models: Array<{ name: string; capabilities?: string[] }> };
    const speech = models.filter((m) => m.capabilities?.includes('speech')).map((m) => m.name);
    // The English Phonon model, when there's a choice.
    const model = speech.find((n) => /^phonon(:latest)?$/.test(n)) ?? speech[0];
    if (!model) return null;
    let voices = this.voices.get(model);
    if (!voices) {
      voices = await this.listVoices(model, signal);
      this.voices.set(model, voices);
    }
    return { model, voices };
  }

  private async listVoices(model: string, signal?: AbortSignal): Promise<string[]> {
    const res = await fetch(`${this.ollamaUrl}/v1/audio/speech`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ model, voice: '\u0000', input: '.' }),
      signal,
    });
    const message = res.ok ? '' : ((await res.json().catch(() => ({}))) as { error?: { message?: string } }).error?.message ?? '';
    const names = /available voices: (.+)$/.exec(message)?.[1]?.split(', ').filter((v) => v && v !== 'default') ?? [];
    return ['default', ...names];
  }

  /** WAV audio of `text`, streamed from Ollama as it's generated. */
  async speak(text: string, voice: string | undefined, signal: AbortSignal): Promise<Response> {
    const info = await this.info(signal);
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
