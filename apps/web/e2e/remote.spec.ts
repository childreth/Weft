import { expect, test } from '@playwright/test';

test('remote access: switch on, issue a token once, revoke', async ({ page }) => {
  // Against the real (in-memory) test server; the tunnel is stubbed in the status response.
  await page.route('**/remote', async (route) => {
    const res = await route.fetch();
    return route.fulfill({ response: res, json: { ...(await res.json()), publicUrl: 'https://weft-demo.ngrok.app/mcp' } });
  });
  await page.goto(`/?doc=remote-${Date.now()}`);
  await page.waitForFunction(() => window.weft?.scene.nodes.size > 0);

  const button = page.getByTestId('remote-button');
  await expect(button).toHaveText('Remote');
  await button.click();
  const panel = page.getByTestId('remote-panel');
  await expect(panel.getByTestId('remote-url')).toHaveText('https://weft-demo.ngrok.app/mcp');

  await panel.getByRole('switch').click();
  await expect(button).toHaveText('Remote on');

  await panel.getByLabel('Agent name').fill('Muse');
  await panel.getByRole('button', { name: 'Add' }).click();
  const token = panel.getByTestId('remote-token');
  await expect(token).toContainText('Token for Muse');
  await expect(token.locator('code').first()).toHaveText(/^weft_/);
  await expect(panel.getByTestId('remote-agent')).toContainText('Muse');
  await expect(panel.getByTestId('remote-agent')).toContainText('never connected');
  await page.screenshot({ path: 'test-results/m3-remote.png' });

  await token.getByRole('button', { name: 'Done' }).click();
  await expect(token).toHaveCount(0);
  await panel.getByRole('button', { name: 'Revoke' }).click();
  await expect(panel.getByTestId('remote-agent')).toHaveCount(0);

  await panel.getByRole('switch').click();
  await expect(button).toHaveText('Remote');
  await page.keyboard.press('Escape');
  await expect(panel).toHaveCount(0);
});

test('remote access is hidden without the server', async ({ page }) => {
  await page.goto('/?ephemeral');
  await page.waitForFunction(() => window.weft?.scene.nodes.size > 0);
  await expect(page.getByTestId('remote-button')).toHaveCount(0);
});
