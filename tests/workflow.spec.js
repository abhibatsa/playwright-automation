import { test, expect } from '@playwright/test';

test.describe('Login Functionality', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://demo-store.com');
  });

  test('shopping journey ~ cart checkout', async ({ page }) => {
    // Fill login form
   
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('testuser');
   
    // Submit form
    await page.getByRole('button', { name: 'Sign in' }).click();
    
    // Verify successful login
    await expect(page).toHaveTitle("Demo Store");
    await page.getByText('Demo Store', { exact: true });

    // Verify Test User is logged in
    await expect(page.getByText('Welcome, Test User')).toBeVisible();

    //Verify Search Functionality
    await page.getByRole('textbox', { name: 'Search for products...' }).fill('headphones');
    await page.getByRole('textbox', { name: 'Search for products...' }).click();
    await page.getByRole('button', { name: 'Search' }).click();


    await page.getByText('Premium Wireless Headphones').first().click();
    await expect(page.getByRole('heading', { name: 'Premium Wireless Headphones' })).toBeVisible();


    // Verify Add to Cart Functionality
    // await page.locator('.product-card > .p-4 > .flex').first().getByRole('heading', { name: 'Premium Wireless Headphones' }).click();
    // await page.getByRole('heading', { name: 'Premium Wireless Headphones' }).click();
    await page.getByRole('button', { name: 'Add to Cart' }).first().click();
    await page.getByRole('button', { name: 'View cart' }).click();

    // Verify cart page
    await expect(page.getByRole('heading', { name: 'Your Cart' })).toBeVisible();   


    // Verify product details in cart
   // await expect(page.getByRole('heading', { name: 'Premium Wireless Headphones' })).toBeVisible();
    await expect(page.getByText('Total:')).toBeVisible();
    await expect(page.getByText('Your Cart')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Checkout' })).toBeVisible();


  });
});