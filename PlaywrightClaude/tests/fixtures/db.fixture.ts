import { test as base } from '@playwright/test';

/**
 * Placeholder data fixture.
 *
 * The Croma suite runs against the live public site, so there is no test
 * database to seed. Keep this file as the seam for when you point the suite
 * at a staging environment with an API you control — wire the arrange/teardown
 * steps below to that API.
 */
type DataFixtures = {
  cleanCart: void;
};

export const test = base.extend<DataFixtures>({
  cleanCart: [
    async ({ context }, use) => {
      // Arrange: a fresh context already starts with an empty guest cart.
      await use();
      // Teardown: clear cookies so the next test also starts clean.
      await context.clearCookies();
    },
    { auto: false },
  ],
});

export { expect } from '@playwright/test';
