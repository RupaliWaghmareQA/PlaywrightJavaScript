import { text } from "node:stream/consumers";
import {Basepage} from "./Basepage.js";
export class MultiBrandFilters extends Basepage {
    constructor(page) {
        super(page);
         this.searchfield = page.locator("//input[@id='searchV2']");
       this.enterProductName=page.locator("//input[@id='searchV2']");
       this.searchResult = page.locator("//ul[@role='listbox']");
       this.sortingdropdown = page.locator("//div[@data-testid='sortdatae1']");
        this.brandbtn=page.getByRole('button', { name: 'Brand' });
        this.samsung =page.locator("//label[@for='SG-ManufacturerDetails-Brand-Samsung'] ");
        this.lg =page.locator("//label[@for='SG-ManufacturerDetails-Brand-LG'] ");
        this.wh =page.locator("//label[@for='SG-ManufacturerDetails-Brand-Whirlphool'] ");
        this.dell =page.locator("//label[@for='SG-ManufacturerDetails-Brand-Dell']");
        this.hp = page.locator("//label[@for='SG-ManufacturerDetails-Brand-HP']");
    }

    async searchProduct(product)
    {
        await this.searchfield.fill(product);
    }

    async selectProductFromSearchResults(product)
    {
        await this.page.locator(`text=${product}`).first().click();

    }

async clickonBrandFilter()
    {
        await this.brandbtn.click();
    }

async selectLaptopBrands()
{
     await this.dell.click({ force: true });
     await this.samsung.click({ force: true });
     await this.hp.click({ force: true });


}

async selectSamsung()
{
   await this.samsung.click({ force: true });
}

async selectLG()
{
       await this.lg.click({ force: true });
}

async selectWhirlpool()
{
   await this.wh.click({ force: true });
}



   
async selectHP()
{
    //await this.hp.scrollIntoViewIfNeeded();
   await this.hp.click({ force: true });
}




 async getAllProductLinks() {

  // Step 1: find every product link on the page
  const links = this.page.locator('[data-testid="product-img"] a');

  // Step 2: count how many there are
  const count = await links.count();
  console.log(`Found ${count} products`);

  // Step 3: go through each one and grab its link
  const hrefs = [];
  for (let i = 0; i < count; i++) {
    const href = await links.nth(i).getAttribute('href');
    hrefs.push(href);
  }

  console.log(`Product links: ${hrefs}`);
   return hrefs;
 }

}



