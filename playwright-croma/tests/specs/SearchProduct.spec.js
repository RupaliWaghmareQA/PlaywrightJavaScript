import { expect } from '@playwright/test';
import { SearchProduct} from "../pages/SearchProduct.js";
import { testData} from '../../test-data/testdata.js'; 
import { test } from "../fixtures/beforeEachFixtures.js";

import {Basepage} from "../pages/Basepage.js";


test.only("Croma Search Product", async ({ page,login,search }) => {
    const searchproduct= new SearchProduct(page,login,SearchProduct);
   await searchproduct.searchProductAndValidateResults(testData.search.searchTerm);
    console.log("Test passed");

});


