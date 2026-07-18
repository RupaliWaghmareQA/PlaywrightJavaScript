import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base.page';

/**
 * Croma login — phone number + SMS OTP (there is no email/password form).
 *
 * The OTP arrives on a real device, so `login()` cannot complete
 * unattended. Use it in a headed, manual auth flow (see auth.setup.ts) or
 * drive the OTP entry from a test SMS provider.
 */
export class LoginPage extends BasePage {
  readonly phoneInput: Locator;
  readonly continueButton: Locator;
  readonly otpInputs: Locator;
  readonly submitOtpButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.phoneInput = page
      .getByRole('textbox', { name: /mobile|phone/i })
      .or(page.getByPlaceholder(/mobile number/i))
      .first();
    this.continueButton = page.getByRole('button', { name: /continue|confirm|send otp/i });
    this.otpInputs = page.getByRole('textbox', { name: /otp|digit/i });
    this.submitOtpButton = page.getByRole('button', { name: /submit|verify|continue/i });
    this.errorMessage = page.getByRole('alert');
  }

  async goto(): Promise<void> {
    await this.navigate('/login');
  }

  /** Enter the mobile number and request an OTP. */
  async requestOtp(mobile: string): Promise<void> {
    await this.phoneInput.fill(mobile);
    await this.continueButton.click();
  }

  /** Fill a 6-digit OTP. Croma may render one field or six single-digit boxes. */
  async submitOtp(otp: string): Promise<void> {
    const count = await this.otpInputs.count();
    if (count > 1) {
      for (let i = 0; i < otp.length && i < count; i++) {
        await this.otpInputs.nth(i).fill(otp[i]);
      }
    } else {
      await this.otpInputs.first().fill(otp);
    }
    await this.submitOtpButton.click();
  }

  async login(mobile: string, otp: string): Promise<void> {
    await this.requestOtp(mobile);
    await this.submitOtp(otp);
  }

  async expectErrorMessage(message: string | RegExp): Promise<void> {
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toContainText(message);
  }
}
