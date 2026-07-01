import { expect } from '@playwright/test';
import { CromaSorting} from "../pages/CromaSorting.js";
import { testData} from '../../test-data/testdata.js'; 
import { test } from "../fixtures/beforeEachFixtures.js";
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
           

        })

    })