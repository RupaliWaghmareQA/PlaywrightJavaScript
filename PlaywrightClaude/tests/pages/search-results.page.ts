import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base.page';

/** Croma search / plp results grid. */
export class SearchResultsPage extends BasePage {
  readonly productCards: Locator;
  readonly productTitles: Locator;
  readonly addToCartButtons: Locator;

  constructor(page: Page) {
    super(page);
    // Croma product tiles use the `.product-item` / `.cp-product` pattern.
    this.productCards = page.locator('[class*="product-item"], li[class*="product"]');
    this.productTitles = page.locator('h3[class*="product-title"], a[class*="product-title"]');
    this.addToCartButtons = page.getByRole('button', { name: /add to cart/i });
  }

  async expectHasResults(): Promise<void> {
    await expect(this.productCards.first()).toBeVisible();
  }

  async openFirstProduct(): Promise<void> {
    await this.productTitles.first().click();
  }

  async addFirstToCart(): Promise<void> {
    await this.addToCartButtons.first().click();
  }
}
