# Croma E2E Tests

End-to-end test suite for [croma.com](https://www.croma.com) built with
[Playwright](https://playwright.dev), following the Page Object Model (POM) and
user-centric, resilient-selector conventions.

> These tests run against the **live public site**. Selectors are written
> against Croma's real markup but can drift when the site changes — use
> `npm run codegen` to re-record any that break.

## Structure

```
tests/
  e2e/
    auth/        login (phone + OTP) + auth.setup.ts session capture
    search/      header search and results grid
    product/     product detail page (price, delivery pincode)
    cart/        guest add-to-cart and empty-cart states
    account/     wishlist (requires a captured session)
  fixtures/      custom fixtures (auth storage state, data seam)
  pages/         Page Object Model classes (home, login, search, product, cart)
  utils/         shared test data and helpers
playwright.config.ts
```

## Getting started

```bash
npm install
npm run install:browsers
npm test                     # runs the guest-accessible specs
```

## Authentication (phone + OTP)

Croma logs in with a mobile number and an **SMS OTP** — there is no
email/password form and the OTP arrives on a real device, so it can't be
automated headlessly. Capture a session once, then reuse it:

```bash
CROMA_MOBILE=98XXXXXXXX npm run auth
```

This opens a headed browser, submits your number, and pauses (`page.pause()`)
so you can type the OTP. Resume in the Playwright Inspector and it saves storage
state to `playwright/.auth/user.json`. Auth-gated specs (e.g. wishlist)
**skip automatically** until that file exists.

If you have a test SMS provider, set `CROMA_OTP` as well and the setup runs
unattended.

## Useful commands

| Command                    | What it does                          |
| -------------------------- | ------------------------------------- |
| `npm test`                 | Run all tests headless                |
| `npm run test:headed`      | Run with a visible browser            |
| `npm run test:ui`          | Open the interactive UI mode          |
| `npm run test:smoke`       | Run only `@smoke`-tagged tests        |
| `npm run auth`             | Capture a logged-in Croma session     |
| `npm run codegen`          | Record actions against croma.com      |
| `npm run report`           | Open the last HTML report             |

## Configuration

- `baseURL` defaults to `https://www.croma.com` (override with `BASE_URL`).
- There is no local `webServer` — the suite targets the live site.
- Bot protection / interstitials: `utils/helpers.ts` exposes
  `dismissInterstitials(page)` for the location and cookie prompts.

## Conventions

- Prefer role/label/placeholder selectors; CSS is a documented last resort.
- Rely on Playwright's auto-waiting; never use `waitForTimeout`.
- Keep every test isolated — no shared mutable state, no ordering dependencies.
- Tag critical paths with `@smoke` / `@critical` for selective runs.
- Never hardcode a real phone number — pass it via `CROMA_MOBILE`.
