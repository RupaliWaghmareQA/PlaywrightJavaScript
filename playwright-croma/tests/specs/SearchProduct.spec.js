import { expect } from '@playwright/test';
import { SearchProduct} from "../pages/SearchProduct.js";
import { testData} from '../../test-data/testdata.js'; 
import { test } from "../fixtures/beforeEachFixtures.js";

import {Basepage} from "../pages/Basepage.js";


test.describe("Croma Search Product",() => {

    testData.search.forEach((searchobj) => {
    test(`Search by ${searchobj.searchTerm} `, async ({ page,login}) => 
        {
    const searchproduct= new SearchProduct(page,login);

    await searchproduct.searchProductAndValidateResults(searchobj.searchTerm);
   
    console.log("Test passed");
    });


    });

})