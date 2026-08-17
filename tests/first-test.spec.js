import {test, expect} from '@playwright/test';

test('my first test', async ({page}) => {

     // Navigate to website
  await page.goto('http://demo-store.com');
  
  // Verify page title
  await expect(page).toHaveTitle("Demo Store");
  
  // Take a screenshot
  await page.screenshot({ path: 'first-test.png' });
});
