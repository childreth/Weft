import { describe, expect, it } from 'vitest';
import { imageSize } from './assets';

const ascii = (s: string) => [...s].map((c) => c.charCodeAt(0));
const be16 = (n: number) => [n >> 8, n & 0xff];
const be32 = (n: number) => [0, 0, ...be16(n)];
const le16 = (n: number) => [n & 0xff, n >> 8];
const le24 = (n: number) => [...le16(n & 0xffff), n >> 16];
const bytes = (...parts: number[][]) => new Uint8Array(parts.flat());
const pad = (n: number) => new Array<number>(n).fill(0);

describe('imageSize', () => {
  it('reads a PNG header', () => {
    const png = bytes([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a], be32(13), ascii('IHDR'), be32(640), be32(480), pad(5));
    expect(imageSize(png)).toEqual({ width: 640, height: 480 });
  });

  it('reads a GIF header', () => {
    expect(imageSize(bytes(ascii('GIF89a'), le16(300), le16(200), pad(4)))).toEqual({ width: 300, height: 200 });
  });

  it('finds the frame header of a JPEG past the segments before it', () => {
    const app0 = [0xff, 0xe0, ...be16(16), ...pad(14)];
    const quant = [0xff, 0xdb, ...be16(4), 0, 0];
    // SOF2 (progressive): length, precision, height, width.
    const frame = [0xff, 0xc2, ...be16(17), 8, ...be16(600), ...be16(800), ...pad(10)];
    expect(imageSize(bytes([0xff, 0xd8], app0, quant, frame))).toEqual({ width: 800, height: 600 });
    // A Huffman table (C4) is not a frame header.
    const huffman = [0xff, 0xc4, ...be16(6), ...pad(4)];
    expect(imageSize(bytes([0xff, 0xd8], huffman, frame))).toEqual({ width: 800, height: 600 });
    expect(imageSize(bytes([0xff, 0xd8, 0xff], pad(20)))).toBeNull();
  });

  it('reads the three kinds of WebP', () => {
    const riff = (kind: string, body: number[]) => bytes(ascii('RIFF'), pad(4), ascii('WEBP'), ascii(kind), pad(4), body, pad(12));
    // Lossy: frame tag (3), start code (3), then 14-bit width and height.
    expect(imageSize(riff('VP8 ', [...pad(6), ...le16(320), ...le16(240)]))).toEqual({ width: 320, height: 240 });
    // Extended: flags (4), then width - 1 and height - 1 in 24 bits.
    expect(imageSize(riff('VP8X', [...pad(4), ...le24(1919), ...le24(1079)]))).toEqual({ width: 1920, height: 1080 });
    // Lossless: signature byte, then 14 bits of width - 1 and 14 of height - 1, packed.
    const packed = (500 - 1) | ((300 - 1) << 14);
    const lossless = [0x2f, packed & 0xff, (packed >> 8) & 0xff, (packed >> 16) & 0xff, (packed >> 24) & 0xff];
    expect(imageSize(riff('VP8L', lossless))).toEqual({ width: 500, height: 300 });
  });

  it('reads an AVIF from its ispe property', () => {
    const avif = bytes(be32(24), ascii('ftypavif'), pad(40), be32(20), ascii('ispe'), pad(4), be32(1200), be32(900), pad(16));
    expect(imageSize(avif)).toEqual({ width: 1200, height: 900 });
  });

  it('is null for what it cannot read', () => {
    expect(imageSize(new TextEncoder().encode('<svg xmlns="http://www.w3.org/2000/svg"/>'))).toBeNull();
    expect(imageSize(bytes([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))).toBeNull();
    expect(imageSize(new Uint8Array())).toBeNull();
  });
});
