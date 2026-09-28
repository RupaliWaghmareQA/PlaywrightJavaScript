import { test as setup } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {

  await page.goto('/');

  
  const pincodeInput = page.locator('input.formControl.dark-input-pincode.pinElem');
  await pincodeInput.clear();
  await pincodeInput.fill('413304');

 // await page.getByLabel('Password').fill('SuperSecretPassword!');

  await page.getByRole('button', { name: 'Continue' }).click();

  await page.getByText('Pincode updated successfully').waitFor();

  await page.context().storageState({
    path: authFile
  });

});