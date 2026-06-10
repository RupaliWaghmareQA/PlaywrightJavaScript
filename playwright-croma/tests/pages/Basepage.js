import testData from '../../test-data/testdata.json';
import { expect } from '@playwright/test'; // ✅ Add this import


export class Basepage {
    constructor(page) {
        this.page = page;
        this.testdata = testData;
    }

      // ============ NAVIGATION ============
    async goto(url= '/')
    {
       await this.page.goto(url);
    }

    async waitForLoginModel(timeout = 3000)
    {
        await this.page.getByPlaceholder("Enter Pincode").waitFor({ timeout });
    }

    async clickonContinueButton(timeout =3000)
    {   await this.page.locator("//button[text()='Continue']").waitFor({ timeout });
        await this.page.locator("//button[text()='Continue']").click();
    }

    async enterPincode(pincode)
    {
    await this.page.getByPlaceholder('Enter Pincode').fill(' ');
    await this.page.getByPlaceholder('Enter Pincode').fill(pincode);
    }

 


async clickonSearch(timeout =3000) 
{
   // await this.page.reload();
    const searchfield= this.page.locator("//input[@id='searchV2']");
    await searchfield.waitFor({ state: 'visible', timeout });
    await searchfield.click();
    await searchfield.fill(this.testdata.search.searchTerm);
}



async enterEmailinLoginModel(email)
{
    const emailInput= this.page.locator("//input[@Placeholder='Enter your Email ID or phone number']");
    await emailInput.fill(email);
}

async clickContinueButton()
{
    const continueButton = this.page.locator("//button[text()='Continue']").click();
}

async  searchProductAndValidateResults(searchTerm)
{
    await this.clickonSearch();
 const searchfield=this.page.locator("//input[@id='searchV2']");
 await searchfield.fill(searchTerm);
// Wait for dropdown to appear
await this.page.waitForSelector('//ul[@role="listbox"]', { timeout: 5000 });

// Click "haier refrigerators"
await this.page.locator('text=godrej refrigerators').click();
 

// // Click first matching suggestion
//     await this.page.locator(`(//div[@data-testid="search-list"])[2]:has-text("${searchTerm}"):first`).click();

//       // Validate results appear
//     const resultsCount = await this.page.locator('[data-testid*="p"]').count();
    
//     expect(resultsCount).toBeGreaterThan(0);
    
//     console.log(`Found ${resultsCount} results for "${searchTerm}"`);
    
//     return resultsCount;
}



}
