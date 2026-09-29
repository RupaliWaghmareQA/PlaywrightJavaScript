import { text } from "node:stream/consumers";
import {Basepage} from "./Basepage.js";
export class MultiBrandFilters extends Basepage {
    constructor(page) {
        super(page);
       this.searchfield = page.locator("//input[@id='searchV2']");
       this.enterProductName=page.locator("//input[@id='searchV2']");
       this.searchResult = page.locator("//ul[@role='listbox']");
       this.sortingdropdown = page.locator("//div[@data-testid='sortdatae1']");

       // this.brandbtn=page.getByRole('button', { name: 'Brand' });

        this.brandbtn =page.locator('p.accorian-title', { hasText: 'Brand' }).first();

        this.samsung =page.locator("//label[@for='SG-ManufacturerDetails-Brand-Samsung'] ");
        this.lg =page.locator("//label[@for='SG-ManufacturerDetails-Brand-LG'] ");
        this.wh =page.locator("//label[@for='SG-ManufacturerDetails-Brand-Whirlphool'] ");
        this.dell =page.locator("//label[@for='SG-ManufacturerDetails-Brand-Dell']");
        this.hp =      page.locator('label[for="SG-ManufacturerDetails-Brand-HP"]');
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

        //await this.brandbtn.waitFor({ state: 'visible' });
        await this.brandbtn.click({ force: true });
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


async selectDell()
{
    //await this.dell.scrollIntoViewIfNeeded();
    await this.dell.evaluate(el => el.click())
}
   
async selectHP()
{
    //await this.hp.scrollIntoViewIfNeeded();
   //await this.hp.click({ force: true });
        //await this.hp.scrollIntoViewIfNeeded();
        await this.hp.evaluate(el => el.click())
}




 async getAllProductLinks() {

  // Step 1: find every product link on the page
  const links = this.page.locator('[data-testid="product-img"] a');


    // wait until at least one product is on the page
  await links.first().waitFor({ state: 'visible', timeout: 20000 });


  // grab all hrefs in one go
  const hrefs = await links.evaluateAll(els => els.map(el => el.href));

 

  console.log(`Product links: ${hrefs}`);
   return hrefs;
 }

}



