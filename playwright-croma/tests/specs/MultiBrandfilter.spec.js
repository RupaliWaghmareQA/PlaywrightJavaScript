//import { test, expect } from '../fixtures/auth.fixture';

//import { expect } from '@playwright/test';
import { MultiBrandFilters} from "../pages/MultiBrandFilters.js";
import { testData } from '../../test-data/testdata.js';
import { test,expect } from "../fixtures/beforeEachFixtures.js";

test.describe('Select Multiple Brands', () => {


   test(`Select Samsung, LG and Whirlpool `, async ({ page, login }) => {

        const multibrand = new MultiBrandFilters(page, login);
       await multibrand.searchfield.fill(testData.searchproduct);
       await multibrand.selectProductFromSearchResults(testData.searchproduct);
       await multibrand.clickonBrandFilter();
       //await multibrand.selectSamsung();
     await multibrand.selectLaptopBrands();
// await multibrand.selectLG();
// await multibrand.selectWhirlpool();


const allowedBrands = ['samsung', 'Dell', 'hp'];
  const productLinks = await brandFilterPage.getAllProductLinks();

  expect(productLinks.length).toBeGreaterThan(0);

  for (const link of productLinks) {
    const normalizedLink = link.toLowerCase().replace(/[^a-z0-9]/g, "");
    const matchesOneBrand = allowedBrands.some((b) => normalizedLink.includes(b));
    expect(matchesOneBrand, `${link} didn't match Samsung, Dell, or HP`).toBe(true);
  }


    })

   })







