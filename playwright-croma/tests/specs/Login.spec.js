import { expect } from '@playwright/test';
import { Basepage } from "../pages/Basepage.js";
import testData from "../../test-data/testdata.json";

import { test } from "../fixtures/beforeEachFixtures.js";


test("Chroma search", async ({ page, basepage }) => {
    //const basepage= new Basepage(page);
   // await basepage.goto("https://www.croma.com/");
    await basepage.clickonSearch();
    await
    console.log("Test passed");

});


