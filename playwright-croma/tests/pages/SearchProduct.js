import  { Basepage }  from "./Basepage.js";

export class SearchProduct extends Basepage {
    
    constructor(page) {
        super(page);
       this.searchfield = page.locator("//input[@id='searchV2']");
       this.enterProductName=page.locator("//input[@id='searchV2']");
    }
    
    async clickonSearch()
    {
        await this.searchfield.click();
    }


    async EnterProductName(searchTerm)
    {
        await this.enterProductName.fill(searchTerm);
    }
 

    async  searchProductAndValidateResults(searchTerm)
    {
    await this.clickonSearch();
    await this.EnterProductName(searchTerm);

    // Wait for dropdown to appear
    await this.page.waitForSelector('//ul[@role="listbox"]', { timeout: 3000 });

    // Click "refrigerators"
    await this.page.locator(`text=${searchTerm}`).first().click();
 
    }
}