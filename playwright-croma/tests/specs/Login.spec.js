import { test, expect } from '@playwright/test';

import{ Basepage } from "../pages/Basepage.js";

test("Chroma search", async ({ page }) => {
    const basepage= new Basepage(page);
    await basepage.goto("https://www.chroma.com/");
    await basepage.clickonSearch();
    console.log("Test passed");

});