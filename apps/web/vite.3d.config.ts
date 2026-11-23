import { resolve } from 'node:path';
import { defineConfig } from 'vite';

/**
 * Bundles `standalone3d.ts` (including Three.js + GLTFLoader) into a single
 * offline ES module served by `@weft/server` for headless 3D screenshots and
 * standalone HTML exports.
 */
export default defineConfig({
  build: {
    lib: {
      entry: resolve(import.meta.dirname, 'src/canvas/standalone3d.ts'),
      formats: ['es'],
      fileName: () => 'weft-3d-runtime.js',
    },
    outDir: resolve(import.meta.dirname, '../server/dist-runtime'),
    emptyOutDir: true,
    minify: 'esbuild',
    sourcemap: false,
  },
});
