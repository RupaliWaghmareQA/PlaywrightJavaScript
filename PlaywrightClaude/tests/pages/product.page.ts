import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base.page';

/** Croma product detail page (PDP). */
export class ProductPage extends BasePage {
  readonly title: Locator;
  readonly price: Locator;
  readonly addToCartButton: Locator;
  readonly buyNowButton: Locator;
  readonly deliveryPincodeInput: Locator;

  constructor(page: Page) {
    super(page);
    this.title = page.getByRole('heading', { level: 1 });
    this.price = page.locator('[class*="amount"], [class*="price"]').first();
    this.addToCartButton = page.getByRole('button', { name: /add to cart/i });
    this.buyNowButton = page.getByRole('button', { name: /buy now/i });
    this.deliveryPincodeInput = page.getByPlaceholder(/enter pincode|pin code/i);
  }

  async addToCart(): Promise<void> {
    await this.addToCartButton.click();
  }

  async checkDeliveryTo(pincode: string): Promise<void> {
    await this.deliveryPincodeInput.fill(pincode);
    await this.deliveryPincodeInput.press('Enter');
  }

  async expectLoaded(): Promise<void> {
    await expect(this.title).toBeVisible();
  }
}
