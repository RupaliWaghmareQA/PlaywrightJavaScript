//import { test, expect } from '../fixtures/auth.fixture';

//import { expect } from '@playwright/test';
import { CromaSorting} from "../pages/CromaSorting.js";
import { testData} from '../../test-data/testdata.js'; 
import { test,expect } from "../fixtures/beforeEachFixtures.js";
import { SearchProduct } from '../pages/SearchProduct.js';

import {Basepage} from "../pages/Basepage.js";


test.describe("Croma Search & Sort - All Options",() => {

    // test.beforeEach(async ({page,login}) =>
    // {
    //  await cromasort.clickonSearch();
    //  await cromasort.EnterProductNameAndSearch(testData.searchproduct);

    // })

    // ===== DISCOUNT SORTING TESTS =====

    test(`TC-001: Sort by Discount (Descending)`, async ({ page,login}) => 
        {
         const cromasort = new CromaSorting(page);   //global declaration

        await cromasort.clickonSearch();
        await cromasort.enterProductNameAndSearch(testData.searchproduct);
        await cromasort.clickSortingDropdown();
        await cromasort.getSortOptionByDataTestId("Price (Lowest First)");
           

        // 2. Get all discount texts (update the selector after checking DevTools)
            const discounttext =await page.locator('//*[contains(@class,"discount-mob-plp")]').allTextContents();
            console.log(discounttext);


        // 3. Convert text like "(25% off)" into number 25
            const discounts= discounttext.map(text => parseFloat(text.match(/\d+/)[0]));
            console.log(discounts);

       // 4. Make a sorted copy (highest to lowest)

            const sorted= [...discounts].sort((a, b) => b-a ); // Sort in descending order
            console.log(sorted);

     // 5. Compare: page order should match the sorted order

              expect(discounts).toEqual(sorted);

        })

    })