const ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

export function createId(prefix: string): string {
  let out = '';
  for (const byte of crypto.getRandomValues(new Uint8Array(10))) out += ALPHABET[byte % ALPHABET.length];
  return `${prefix}_${out}`;
}
