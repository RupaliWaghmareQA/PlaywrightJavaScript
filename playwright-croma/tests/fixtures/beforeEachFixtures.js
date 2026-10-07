// tests/fixtures/beforeEachFixture.js
import { test as base } from '@playwright/test';
import { SearchProduct } from '../pages/SearchProduct.js';
import { Basepage } from '../pages/Basepage.js';
import { testData } from '../../test-data/testdata.js'; 


export const test = base.extend({
  login: async ({ page }, use) => {
    // This runs BEFORE each test (beforeEach)
    const basepage = new Basepage(page);
    
    // It Block the third-party scripts that stop load from firing
    await page.route(/google-analytics|googletagmanager|doubleclick|facebook\.net|clevertap|hotjar|clarity\.ms/, route => route.abort());
    await basepage.goto("https://www.croma.com/");
   
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