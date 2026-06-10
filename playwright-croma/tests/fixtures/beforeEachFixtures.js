// tests/fixtures/beforeEachFixture.js
import { test as base } from '@playwright/test';
import { Basepage } from '../pages/Basepage.js';
import testData from '../../test-data/testdata.json';


export const test = base.extend({
  basepage: async ({ page }, use) => {
    // This runs BEFORE each test (beforeEach)
    const basepage = new Basepage(page);
    await basepage.goto("https://www.croma.com/");
    await basepage.waitForLoginModel(); //Load the location pop-up
    await basepage.enterPincode(testData.pincode);
    await basepage.clickonContinueButton();

    
    console.log('✅ beforeEach hook executed');
    
    // Test runs here
    await use(basepage);
    
    // This runs AFTER each test (afterEach)
    console.log('✅ afterEach hook executed');
  },
});

export { expect } from '@playwright/test';