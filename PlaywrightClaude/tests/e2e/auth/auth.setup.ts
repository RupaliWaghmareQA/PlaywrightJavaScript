import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { account } from '../../utils/test-data';

const authFile = 'playwright/.auth/user.json';

/**
 * Captures a logged-in Croma session for reuse.
 *
 * Croma requires an SMS OTP, so this is intended to be run HEADED and
 * completed by hand once:
 *
 *   CROMA_MOBILE=98XXXXXXXX npx playwright test --project=setup --headed
 *
 * The test enters your number, then pauses so you can type the OTP that
 * arrives on your phone. After you resume, it saves storage state to
 * playwright/.auth/user.json for the other projects to load.
 */
setup('authenticate', async ({ page }) => {
  setup.skip(!account.mobile, 'Set CROMA_MOBILE to capture a Croma session.');
  setup.setTimeout(180_000);

  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.requestOtp(account.mobile);

  if (account.otp) {
    // Automated path: OTP supplied via env (e.g. from a test SMS provider).
    await loginPage.submitOtp(account.otp);
  } else {
    // Manual path: pause for a human to enter the OTP in the headed browser.
    await page.pause();
  }

  // Logged-in users see their account entry point rather than "Log in".
  await expect(page.getByRole('link', { name: /log ?in/i })).toHaveCount(0);
  await page.context().storageState({ path: authFile });
});
