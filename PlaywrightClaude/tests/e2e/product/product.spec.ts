import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/home.page';
import { SearchResultsPage } from '../../pages/search-results.page';
import { ProductPage } from '../../pages/product.page';
import { pincodes, searchTerms } from '../../utils/test-data';

test.describe('Product detail page', () => {
  test.beforeEach(async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();
    await home.search(searchTerms.common);

    const results = new SearchResultsPage(page);
    await results.expectHasResults();
    await results.openFirstProduct();
  });

  test('should show product title and price @smoke', async ({ page }) => {
    const product = new ProductPage(page);
    await product.expectLoaded();
    await expect(product.price).toBeVisible();
  });

  test('should check delivery availability by pincode', async ({ page }) => {
    const product = new ProductPage(page);
    await product.expectLoaded();
    await product.checkDeliveryTo(pincodes.mumbai);

    // Either a delivery estimate or a serviceability message is shown.
    await expect(
      page.getByText(/delivery|deliver by|not serviceable|available/i).first(),
    ).toBeVisible();
  });
});
