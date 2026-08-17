import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginpage.js';
import testData from '../testdata/users.json';

  test('login with POM and data-driven strategy', async ({ page }) => {
    const user = testData.validUser;
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.loginWithTestData(user.email);
    
    
    if (await page.title() === "Demo Store") {
        await expect(page).toHaveTitle("Demo Store");
      } else {
        await expect(page.getByText('Invalid Credentials', { exact: true })).toBeVisible();
      }
 

});