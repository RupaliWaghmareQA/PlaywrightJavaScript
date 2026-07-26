import { expect } from '@playwright/test';
import { MultiBrandFilters} from "../pages/MultiBrandFilters.js";
import { testData } from '../../test-data/testdata.js';
import { test } from "../fixtures/beforeEachFixtures.js";

test.describe('Select Multiple Brands', () => {


   test(`Select Samsung, LG and Whirlpool `, async ({ page, login }) => {

        const multibrand = new MultiBrandFilters(page, login);
       await multibrand.searchfield.fill(testData.searchproduct);
       await multibrand.selectProductFromSearchResults(testData.searchproduct);
       await multibrand.clickonBrandFilter();
       await multibrand.selectSamsung();
     await multibrand.selectdell();
     await multibrand.selectHP();
    })

   })







