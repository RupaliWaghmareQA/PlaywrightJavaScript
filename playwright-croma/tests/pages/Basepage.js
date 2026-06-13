import { testData } from '../../test-data/testdata.js'; 
import { expect } from '@playwright/test'; // ✅ Add this import


export class Basepage {
    constructor(page) {
        this.page = page;
        this.testdata = testData;
        this.pincodefield = page.getByPlaceholder("Enter Pincode");
        this.continueButton = page.locator('button:has-text("Continue")');
    }

      // ============ NAVIGATION ============
    async goto(url= '/')
    {
       await this.page.goto(url);
    }
    
             async enterPincode(pincode) {
                await this.pincodefield.click();
                await this.pincodefield.fill(' ');
               //
    
                await this.pincodefield.fill(testData.pincode);
        }   
            async clickonContinueButton() {
                await this.continueButton.click();
            }           
 
 
}
