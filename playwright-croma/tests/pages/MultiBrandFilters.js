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


        this.dell =page.locator("//input[@id='SG-ManufacturerDetails-Brand-Dell']");
        this.hp= page.locator("//label[@for='SG-ManufacturerDetails-Brand-HP']");
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
async selectdell()
{
    await this.dell.scrollIntoViewIfNeeded();
     await this.dell.click({ force: true });
}
async selectSamsung()
{
    await this.samsung.scrollIntoViewIfNeeded();
   await this.samsung.click({ force: true });


}
   
async selectHP()
{
    await this.hp.scrollIntoViewIfNeeded();
   await this.hp.click({ force: true });
}
  // await this.whirlpool.scrollIntoViewIfNeeded();
   //await this.whirlpool.click({ force: true });
}


