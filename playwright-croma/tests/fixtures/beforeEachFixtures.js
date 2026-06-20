// tests/fixtures/beforeEachFixture.js
import { test as base } from '@playwright/test';
import { SearchProduct } from '../pages/SearchProduct.js';
import { Basepage } from '../pages/Basepage.js';
import { testData } from '../../test-data/testdata.js'; 


export const test = base.extend({
  login: async ({ page }, use) => {
    // This runs BEFORE each test (beforeEach)
    const basepage = new Basepage(page);
    await basepage.goto("https://www.croma.com/");
   // await basepage.waitForLoginModel(); //Load the login pop-up

    await basepage.enterPincode(testData.pincode);
    await basepage.clickonContinueButton();
    console.log('✅ beforeEach hook executed');
    
    // Test runs here
    await use(basepage);

   
    // This runs AFTER each test (afterEach)
    console.log('✅ afterEach hook executed');
  },




  search: async ({ page }, use) => {
    const search = new SearchProduct(page);
    await use(search);

  },
  });

export { expect } from '@playwright/test';