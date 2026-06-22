import { expect } from '@playwright/test';
import { BrandFilter } from "../pages/BrandFilter.js";
import { testData } from '../../test-data/testdata.js';
import { test } from "../fixtures/beforeEachFixtures.js";

test.setTimeout(60000);

// Iterate over configured brands and create a test for each
test.describe('Brand Filter Tests', () => {

testData.brands.forEach((brandObj) => {
   test.only(`Test 1 - filter by ${brandObj.brandFilter} `, async ({ page, login }) => {
     
      const brandfilter = new BrandFilter(page, login);
      await brandfilter.clickonMenu();
      await brandfilter.ClickonTopBrands();
      // assume BrandFilter page object can click a brand by name
      // e.g. await brandfilter.clickBrandByName(brand);

      await brandfilter.clickonBrand(brandObj.brandFilter);
      
            //throw error;
         
   
//verify page contains
   
      const convertlower=brandObj.brandFilter.toLocaleLowerCase();
       await page.url(`https://www.croma.com/${convertlower}-store/b/b-0025`);
      // const URL = await page.url();
      // expect(URL.toLowerCase()).toContain(String(brandObj.brandFilter).toLowerCase());
       console.log(`Brand Object ${brandObj.brandFilter}`);

      // // const title = await page.title();
      // expect(title).toContain(brandObj.brandFilter);
      
   });


});

  
})
