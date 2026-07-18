import { test as base, Page } from '@playwright/test';
import * as fs from 'node:fs';
import { HomePage } from '../pages/home.page';
import { SearchResultsPage } from '../pages/search-results.page';
import { CartPage } from '../pages/cart.page';

const AUTH_FILE = 'playwright/.auth/user.json';

type CromaFixtures = {
  homePage: HomePage;
  searchResultsPage: SearchResultsPage;
  cartPage: CartPage;
  /** A page with a logged-in Croma session (requires captured storage state). */
  authenticatedPage: Page;
};

export const test = base.extend<CromaFixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await use(homePage);
  },

  searchResultsPage: async ({ page }, use) => {
    await use(new SearchResultsPage(page));
  },

  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },

  authenticatedPage: async ({ browser }, use, testInfo) => {
    if (!fs.existsSync(AUTH_FILE)) {
      testInfo.skip(true, `No auth state at ${AUTH_FILE}. Run \`npm run auth\` first.`);
    }
    const context = await browser.newContext({ storageState: AUTH_FILE });
    const page = await context.newPage();
    await use(page);
    await context.close();
  },
});

export { expect } from '@playwright/test';
