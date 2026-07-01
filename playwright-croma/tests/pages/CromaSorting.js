import  { Basepage }  from "./Basepage.js";
export class CromaSorting extends Basepage
{
 constructor(page)
 { super(page);
       this.searchfield = page.locator("//input[@id='searchV2']");
       this.enterProductName=page.locator("//input[@id='searchV2']");
       this.searchResult = page.locator("//ul[@role='listbox']");
       this.sortingdropdown = page.locator("//div[@data-testid='sortdatae1']");
 }

//locator method

  getSortOptionByDataTestId(optionText) 
  {
    return this.page.locator('[data-testid="sort"]:has-text("' + optionText + '")');
  }
    
     async clickSortingDropdown()
    {
    await this.sortingdropdown.click();
    }


     //Action method

     async clickonSearch()
    {
        await this.searchfield.click();
    }


    async enterProductNameAndSearch(searchTerm)
    {
        await this.enterProductName.fill(searchTerm);
        await this.page.locator(`text=${searchTerm}`).first().click();

    }

  

}