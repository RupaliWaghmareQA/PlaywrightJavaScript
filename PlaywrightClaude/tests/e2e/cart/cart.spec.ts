import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/home.page';
import { SearchResultsPage } from '../../pages/search-results.page';
import { ProductPage } from '../../pages/product.page';
import { CartPage } from '../../pages/cart.page';
import { searchTerms } from '../../utils/test-data';

test.describe('Shopping cart (guest)', () => {
  test('should add a product to the cart @smoke @critical', async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();
    await home.search(searchTerms.common);

    const results = new SearchResultsPage(page);
    await results.expectHasResults();
    await results.openFirstProduct();

    const product = new ProductPage(page);
    await product.expectLoaded();
    await product.addToCart();

    const cart = new CartPage(page);
    await cart.goto();
    await expect(cart.lineItems.first()).toBeVisible();
  });

  test('should start with an empty cart in a fresh session', async ({ page }) => {
    const cart = new CartPage(page);
    await cart.goto();
    await cart.expectEmpty();
  });
});
