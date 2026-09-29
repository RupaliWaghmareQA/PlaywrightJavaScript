//import { test, expect } from '../fixtures/auth.fixture';

//import { expect } from '@playwright/test';
import { MultiBrandFilters} from "../pages/MultiBrandFilters.js";
import { testData } from '../../test-data/testdata.js';
import { test,expect } from "../fixtures/beforeEachFixtures.js";

test.describe('Select Multiple Brands', () => {


   test.only(`Select Samsung, LG and Whirlpool `, async ({ page ,login}) => {
  test.setTimeout(90000);

        const multibrand = new MultiBrandFilters(page,login);
       await multibrand.searchfield.fill(testData.searchproduct);
       await multibrand.selectProductFromSearchResults(testData.searchproduct);
       await multibrand.clickonBrandFilter();
      //  await multibrand.selectLaptopBrands();
         //await multibrand.selectLG();
      // await multibrand.selectWhirlpool();

              await multibrand.selectSamsung();
              await multibrand.selectHP();
              await page.waitForTimeout(1000);  // wait for filter to apply

              await multibrand.selectDell();
                await page.waitForTimeout(1000);  // wait for filter to apply



        const allowedBrands = ['samsung','hp','dell']; // List of allowed brands
        //const productLinks = await brandFilterPage.getAllProductLinks();

        const productLinks = await multibrand.getAllProductLinks();


        expect(productLinks.length).toBeGreaterThan(0);

  for (const link of productLinks) {

      const slug = new URL(link).pathname.slice(1).toLowerCase();

    const normalizedLink = link.toLowerCase().replace(/[^a-z0-9]/g, "");
    //const matchesOneBrand = allowedBrands.some((b) => normalizedLink.includes(b));

      const matchesOneBrand = allowedBrands.some(b => slug.startsWith(b + '-'));

    expect(matchesOneBrand, `${link} didn't match Samsung, Dell, or HP ${allowedBrands.join(', ')}`).toBe(true);

    console.log(`Product link: ${link} matches one of the allowed brands.`);
  }


    })

   })







