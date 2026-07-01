import  { Basepage }  from "./Basepage.js";

export class SearchProduct extends Basepage {
    
    constructor(page) {
        super(page);
       this.searchfield = page.locator("//input[@id='searchV2']");
       this.enterProductName=page.locator("//input[@id='searchV2']");
       this.searchResult = page.locator("//ul[@role='listbox']");
       this.sortBydropdown=page.locator("//div[@data-testid='sortdatae1']");
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

    // Click "refrigerators"
    await this.page.locator(`text=${searchTerm}`).first().click();
 console.log(`${searchTerm}`);
    

    }


}