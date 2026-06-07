
export class Basepage {
    constructor(page) {
        this.page = page;
    }

      // ============ NAVIGATION ============
    async goto(url= '/')
    {
       await this.page.goto(url);
    }


async clickonSearch(timeout =3000) 
{
    await this.page.reload();

    await this.page.locator("//div[text()='Search']").click();    
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


}
