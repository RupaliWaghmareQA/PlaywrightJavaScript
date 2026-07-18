import { Page, expect } from '@playwright/test';

/**
 * Dismisses common interstitials Croma shows on first load
 * (location prompt, cookie/notification banners). Best-effort — each is
 * skipped quietly if not present, so it is safe to call at the top of a test.
 */
export async function dismissInterstitials(page: Page): Promise<void> {
  const dismissers = [
    page.getByRole('button', { name: /^(no thanks|not now|maybe later|deny|close)$/i }),
    page.getByRole('button', { name: /accept/i }),
  ];
  for (const locator of dismissers) {
    const button = locator.first();
    if (await button.isVisible().catch(() => false)) {
      await button.click().catch(() => {});
    }
  }
}

/** Waits for a named API response triggered by an action. */
export async function waitForResponseAfter(
  page: Page,
  urlPattern: string | RegExp,
  action: () => Promise<void>,
): Promise<void> {
  const responsePromise = page.waitForResponse(urlPattern);
  await action();
  const response = await responsePromise;
  expect(response.ok()).toBeTruthy();
}
