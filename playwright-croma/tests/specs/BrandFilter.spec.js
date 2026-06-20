import { expect } from '@playwright/test';
import { BrandFilter } from "../pages/BrandFilter.js";
import { testData } from '../../test-data/testdata.js';
import { test } from "../fixtures/beforeEachFixtures.js";

test.setTimeout(60000);

// Iterate over configured brands and create a test for each
testData.brands.forEach((brandObj) => {
   test.only(`filter by ${brandObj.brandFilter} `, async ({ page, login }) => {
      
      
      const brandfilter = new BrandFilter(page, login);
      await brandfilter.CickonBrandFilter();
      await brandfilter.ClickonTopBrands();
      // assume BrandFilter page object can click a brand by name
      // e.g. await brandfilter.clickBrandByName(brand);

      await brandfilter.clickBrandByName(brandObj.brandFilter);

      const convertlower=brandObj.brandFilter.toLocaleLowerCase();

    await page.goto(`https://www.croma.com/${convertlower}-store/b/b-0025`);


      const URL = await page.url();
      expect(URL.toLowerCase()).toContain(String(brandObj.brandFilter).toLowerCase());
      
      
          console.error(`Brand filter test failed for ${brandObj}:`);
            //throw error;
      
   });
});
