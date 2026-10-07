//import {  expect } from '../fixtures/auth.fixture';
import { expect } from '@playwright/test';
import { BrandFilter} from "../pages/BrandFilter.js";
import { testData } from '../../test-data/testdata.js';
import { test} from "../fixtures/beforeEachFixtures.js";

test.setTimeout(60000);

// Iterate over configured brands and create a test for each
test.describe('Brand Filter Tests', () => {
testData.brands.forEach((brandObj) => {
   test(`Test 1 - filter by ${brandObj.brandFilter} `, async ({ page, login }) => {
     
      const brandfilter = new BrandFilter(page, login);
      await brandfilter.clickonMenu();
      await brandfilter.ClickonTopBrands();
      await brandfilter.clickonBrand(brandObj.brandFilter);
             
   //Step 1: verify page contain
        const convertlower=brandObj.brandFilter.toLocaleLowerCase().replace(/[^a-z0-9]/g, "");
        console.log(`Brand Object ${brandObj.brandFilter}`);
      
       //Step 2:verify the URL contains the brand name
   await page.waitForURL(`**/${convertlower}-store/**`); 
   const currntURL=  page.url();
   //console.log(`Current URL: ${currntURL}`);
   expect(currntURL.toLocaleLowerCase()).toContain((`${convertlower}-store`));


   // STEP 3: Check that products actually loaded
      await page.mouse.wheel(0, 1000); // Scroll down to load products
      const viewAllBtn= page.getByRole('button', { name: 'view all products' });
         await expect(viewAllBtn).toBeVisible({timeout:15000});
         await viewAllBtn.click();


      expect(page.url()).toContain(`products`);
      
      const productLinks = await brandfilter.getAllProductLinks();

      expect(productLinks.length).toBeGreaterThan(0);

      // STEP 4: Check every single product belongs to this brand
      for (const link of productLinks) {
        expect(link.toLowerCase()).toContain(`/${convertlower}-`);
                //console.log(`Product links: ${productLinks}`);

      }


   
     })

   



   });



   

});


