import { expect } from '@playwright/test';
import  { Basepage }  from "./Basepage.js";
export class CromaSorting extends Basepage
{
 constructor(page)
 { super(page);
       this.searchfield = page.locator("//input[@id='searchV2']");
       this.enterProductName=page.locator("//input[@id='searchV2']");
       this.searchResult = page.locator("//ul[@role='listbox']");
       this.sortingdropdown = page.locator("//div[@data-testid='sortdatae1']");

       //div[@data-testid="sortdatae1"]
 }

//locator method

  getSortOptionByDataTestId(optionText) 
  {
    return this.page.locator('[data-testid="sort"]:has-text("' + optionText + '")').click();
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



async enterProductNameAndSearch(searchTerm) {
  await this.enterProductName.waitFor({ state: 'visible', timeout: 30000 });
  await this.enterProductName.click();
  await this.enterProductName.pressSequentially(searchTerm, { delay: 100 });

  // Match the individual suggestion, not the whole listbox, and don't anchor with ^ $
  const suggestion = this.page
    .locator('[role="option"], [role="listbox"] li, ul li')
    .filter({ hasText: new RegExp(`^${searchTerm}$`) })
    .first();

  try {
    await suggestion.waitFor({ state: 'visible', timeout: 10000 });
    await suggestion.click();
  } catch {
    // Fallback: if no dropdown appears, submit the search directly
    await this.enterProductName.press('Enter');
  }
}

   /* async enterProductNameAndSearch(searchTerm)
    {
        await this.enterProductName.fill(searchTerm);
        const suggestion = this.page
        .getByRole('listbox')
        .filter({ hasText: new RegExp(`^${searchTerm}$`) })
        .first();
        await expect(suggestion).toBeVisible({ timeout: 15000 });
        await suggestion.click();

    }*/

  
    

}