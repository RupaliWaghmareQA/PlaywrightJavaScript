import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base.page';

/** Croma shopping cart / bag. Usable as a guest. */
export class CartPage extends BasePage {
  readonly lineItems: Locator;
  readonly orderTotal: Locator;
  readonly proceedButton: Locator;
  readonly emptyMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.lineItems = page.locator('[class*="cart-item"], [class*="product-item"]');
    this.orderTotal = page.locator('[class*="total"], [class*="amount"]').first();
    this.proceedButton = page.getByRole('button', { name: /proceed|place order|checkout/i });
    this.emptyMessage = page.getByText(/your (cart|bag) is empty/i);
  }

  async goto(): Promise<void> {
    await this.navigate('/cart');
  }

  async expectItemCount(count: number): Promise<void> {
    await expect(this.lineItems).toHaveCount(count);
  }

  async expectEmpty(): Promise<void> {
    await expect(this.emptyMessage).toBeVisible();
  }
}
