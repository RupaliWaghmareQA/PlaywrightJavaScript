import { text } from "node:stream/consumers";
import {Basepage} from "./Basepage.js";
export class BrandFilter extends Basepage {
    constructor(page) {
        super(page);
        this.mainMenu = page.locator("//div[@data-testid='open-desktop-menu']");
        this.topBrands=page.locator("//h4[text()='Top Brands']");
        this.brandfilterApple=page.locator("//li[@id='category-Apple']");
        this.brandFilterBosch=page.locator("//li[@id='category-Bosch']");
        this.brandFilterLG=page.locator("//li[@id='category-LG']");
        this.pageheading=page.locator("//div[@class='sec-head flex-width']");
        this.brandName= page.locator("//h5[@class='text l1-sublist-item']"); 
        this.verifyBrandTitle=page.locator("//div[@class='sec-head flex-width']");
    }
    


    async clickonMenu()
    {
        await this.mainMenu.click();
    }
    async clickonBrand(brandName)
    {
      const brandLocator = this.page.locator(`//div[@id='Top Brands']//ul//li[@id='category-${brandName}']`);
     console.log(`Clicked on brand: ${brandName}`);

      //await brandLocator.waitForLoadState({ state: 'visible', timeout: 1000 });
       await brandLocator.click();
    }


    async ClickonTopBrands()
    {
        await this.topBrands.click();
    }

  

    async pageHeading()
    {
        await this.pageheading;
    }

// Gets the link (href) of every product shown on the page
 async getAllProductLinks() {
  const links = this.page.locator('[data-testid="product-img"] a' );

  await links.first().waitFor({ state: 'attached' });

  // Grab every href in one go — no per-item waiting, no timeout risk
  const hrefs = await links.evaluateAll((elements) =>
    elements.map((el) => el.getAttribute('href'))
  );
  console.log(`Product links: ${hrefs}`);

  return hrefs;
}


}
