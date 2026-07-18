import { test, expect } from '../../fixtures/auth.fixture';

/**
 * Wishlist lives behind auth at /my-account/wishlist.
 * These tests are skipped automatically unless a Croma session has been
 * captured via `npm run auth` (see auth.fixture.ts).
 */
test.describe('Wishlist (authenticated)', () => {
  test('should open the wishlist page for a logged-in user @smoke', async ({
    authenticatedPage,
  }) => {
    await authenticatedPage.goto('/my-account/wishlist');
    await expect(authenticatedPage).toHaveURL(/wishlist/);
    await expect(
      authenticatedPage.getByRole('heading', { name: /wishlist/i }),
    ).toBeVisible();
  });

  test('should not redirect an authenticated user to login', async ({
    authenticatedPage,
  }) => {
    await authenticatedPage.goto('/my-account/wishlist');
    await expect(authenticatedPage).not.toHaveURL(/login/);
  });
});
