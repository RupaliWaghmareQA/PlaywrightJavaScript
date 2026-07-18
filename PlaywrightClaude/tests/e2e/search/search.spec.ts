import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/home.page';
import { SearchResultsPage } from '../../pages/search-results.page';
import { searchTerms } from '../../utils/test-data';

test.describe('Product search', () => {
  let home: HomePage;

  test.beforeEach(async ({ page }) => {
    home = new HomePage(page);
    await home.goto();
    await home.expectLoaded();
  });

  test('should return results for a common query @smoke', async ({ page }) => {
    await home.search(searchTerms.common);

    const results = new SearchResultsPage(page);
    await expect(page).toHaveURL(/searchB|search|\?q=/i);
    await results.expectHasResults();
  });

  test('should open a product from the results grid', async ({ page }) => {
    await home.search(searchTerms.phone);

    const results = new SearchResultsPage(page);
    await results.expectHasResults();
    await results.openFirstProduct();

    await expect(page).toHaveURL(/\/p\//);
  });

  test('should handle a query with no matches gracefully', async ({ page }) => {
    await home.search(searchTerms.noResults);

    // Croma shows a "no results" state rather than an error page.
    await expect(
      page.getByText(/no results|couldn.t find|no products/i),
    ).toBeVisible();
  });
});
