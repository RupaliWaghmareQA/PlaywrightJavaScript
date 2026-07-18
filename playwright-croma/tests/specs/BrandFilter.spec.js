import { expect } from '@playwright/test';
import { BrandFilter } from "../pages/BrandFilter.js";
import { testData } from '../../test-data/testdata.js';
import { test } from "../fixtures/beforeEachFixtures.js";

test.setTimeout(60000);

// Iterate over configured brands and create a test for each
test.describe('Brand Filter Tests', () => {

testData.brands.forEach((brandObj) => {
   test(`Test 1 - filter by ${brandObj.brandFilter} `, async ({ page, login }) => {
     
      const brandfilter = new BrandFilter(page, login);
      await brandfilter.clickonMenu();
      await brandfilter.ClickonTopBrands();
      await brandfilter.clickonBrand(brandObj.brandFilter);
             
   //verify page contain
        const convertlower=brandObj.brandFilter.toLocaleLowerCase();
        const removedSpaces=convertlower.replace(/\s+/g, "");

       await page.url(`https://www.croma.com/${removedSpaces}-store/b/b-0025`)
       console.log(`Brand Object ${brandObj.brandFilter}`);
      
       //verify the URL contains the brand name
       
   const currntURL= await page.url();
   console.log(`Current URL: ${currntURL}`);
   expect(currntURL.toLocaleLowerCase()).toContain((`${removedSpaces}-store`));
   

   
     })

   



   });



   

});


