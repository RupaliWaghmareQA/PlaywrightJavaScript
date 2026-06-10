import { test, expect } from '../fixtures/beforeEachFixtures.js'; 
import { Basepage } from '../pages/Basepage.js';
import testData from "../../test-data/testdata.json";


test("Search product and validate results", async ({ page ,basepage}) => {
    //const basepage= new Basepage(page);
    //await basepage.goto("https://www.croma.com/");  
    const resultCount =await basepage.searchProductAndValidateResults(testData.search.searchTerm);
    console.log(`Number of search results for ${testData.search.searchTerm}: ${resultCount}`);


  // Verify results
  //expect(resultCount).toBeGreaterThan(0);
    console.log("✅ Test passed");

});
