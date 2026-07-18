import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/home.page';
import { LoginPage } from '../../pages/login.page';

test.describe('Croma login (phone + OTP)', () => {
  test('should open the login screen from the header @smoke', async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();
    await home.profileButton.click();

    const login = new LoginPage(page);
    await expect(login.phoneInput).toBeVisible();
  });

  test('should prompt for OTP after entering a valid mobile number', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.requestOtp('9000000000');

    // An OTP field appears; we do not submit a real OTP in automated runs.
    await expect(login.otpInputs.first()).toBeVisible();
  });

  test('should reject an invalid mobile number', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.phoneInput.fill('123');
    await login.continueButton.click();

    // Croma blocks progression to OTP for malformed numbers.
    await expect(login.otpInputs).toHaveCount(0);
  });
});
