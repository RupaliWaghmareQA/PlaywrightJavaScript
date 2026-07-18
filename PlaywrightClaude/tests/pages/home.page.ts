import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base.page';

/**
 * Croma homepage — header search, profile (login), cart, and category nav.
 *
 * Selectors favour role/label/placeholder. Croma's markup is not fully
 * accessible in places, so a few fall back to id/testid; adjust against the
 * live DOM (`npm run codegen -- https://www.croma.com`) if they drift.
 */
export class HomePage extends BasePage {
  readonly searchInput: Locator;
  readonly profileButton: Locator;
  readonly cartLink: Locator;
  readonly wishlistLink: Locator;

  constructor(page: Page) {
    super(page);
    // Croma's search input id is `searchV2`; placeholder reads like
    // "What are you looking for?". Try an accessible name first, then id.
    this.searchInput = page
      .getByPlaceholder(/what are you looking for/i)
      .or(page.locator('#searchV2'))
      .first();
    this.profileButton = page.getByRole('link', { name: /log ?in|profile|account/i }).first();
    this.cartLink = page.getByRole('link', { name: /cart/i }).first();
    this.wishlistLink = page.getByRole('link', { name: /wishlist/i }).first();
  }

  async goto(): Promise<void> {
    await this.navigate('/');
  }

  async search(term: string): Promise<void> {
    await this.searchInput.click();
    await this.searchInput.fill(term);
    await this.searchInput.press('Enter');
  }

  async expectLoaded(): Promise<void> {
    await expect(this.searchInput).toBeVisible();
  }
}
