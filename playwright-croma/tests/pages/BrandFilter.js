import { text } from "node:stream/consumers";
import {Basepage} from "./Basepage.js";
export class BrandFilter extends Basepage {
    constructor(page) {
        super(page);
        this.brandFilterLocator = page.locator("//div[@data-testid='open-desktop-menu']");
        this.topBrands=page.locator("//h4[text()='Top Brands']");
        this.brandfilterApple=page.locator("//li[@id='category-Apple']");
        this.brandFilterBosch=page.locator("//li[@id='category-Bosch']");
        this.brandFilterLG=page.locator("//li[@id='category-LG']");
        this.pageheading=page.locator("//div[@class='sec-head flex-width']");
        this.brandName= page.locator("//h5[@class='text l1-sublist-item']")
    }
    

    async clickBrandByName(brandName)
    {
      const brandLocator = this.page.locator(`//div[@id='Top Brands']//ul//li[@id="category-${brandName}"]`);



      //`//div[@id='Top Brands']//ul//li[@id="category-${categoryName}"]`
      
      //`//h5[@class='text 11-sublist-item' and contains(text(), '${brandName}')]`
     
   /*wait brandLocator.scrollIntoViewIfNeeded();

   const count = await brandLocator.count();
   console.log(`Found ${count} element(s) for brand: ${brandName}`);
   
   if (count == 0) {
      console.log(`Brand "${brandName}" not found on page`);
   }
   */
   //await brandLocator.
   console.log(`Clicked on brand: ${brandName}`);
//   await this.page.locator(`//h5[@class='text 11-sublist-item' and contains(text(), '${brandName}')]`);
    }


    async CickonBrandFilter()
    {
        await this.brandFilterLocator.click();
    }

    async ClickonTopBrands()
    {
        await this.topBrands.click();
    }

    async ClickonAppleBrandFilter()
    {
        await this.brandfilterApple.click();
    }

    async ClickonBoschBrandFilter()
    {
        await this.brandFilterBosch.click();
    }
    async ClickonLGBrandFilter()
    {
        await this.brandFilterLG.click();
    }

    async pageHeading()
    {
        await this.pageheading;
    }

}
