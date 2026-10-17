import { defineConfig, devices } from '@playwright/test';

const PORT = 5199;
export const SERVER_PORT = 4599;

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  reporter: [['list']],
  use: {
    baseURL: `http://localhost:${PORT}`,
    viewport: { width: 1440, height: 900 },
    trace: 'retain-on-failure',
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'], viewport: { width: 1440, height: 900 } } }],
  webServer: [
    {
      command: `pnpm --filter @weft/server start`,
      url: `http://127.0.0.1:${SERVER_PORT}/health`,
      env: { WEFT_PORT: String(SERVER_PORT), WEFT_DATA: ':memory:' },
      reuseExistingServer: false,
    },
    {
      command: `pnpm exec vite --port ${PORT} --strictPort`,
      url: `http://localhost:${PORT}`,
      env: { VITE_WEFT_SERVER: `ws://127.0.0.1:${SERVER_PORT}` },
      reuseExistingServer: false,
    },
  ],
});
