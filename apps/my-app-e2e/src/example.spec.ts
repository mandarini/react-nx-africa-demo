import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect at least one h1 to be present.
  expect(await page.locator('h1').count()).toBeGreaterThan(0);
});
