import { test, expect } from '@playwright/test';

test.describe('Login Functionality', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://demo-store.com');
  });

  test('successful login with valid credentials', async ({ page }) => {
    // Fill login form
   
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('testuser');
   
    // Submit form
    await page.getByRole('button', { name: 'Sign in' }).click();
    
    // Verify successful login
    await expect(page).toHaveTitle("Demo Store");
    await page.getByText('Demo Store', { exact: true });
  });

  test('login fails with invalid credentials', async ({ page }) => {
    // Fill with invalid credentials
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('wronguser');
    
    // Submit form
    await page.getByRole('button', { name: 'Sign in' }).click();
    
    // Verify error message appears
    await expect(page.getByText('Invalid Credentials')).toBeVisible();
    
    // Verify we're still on login page
    await expect(page).toHaveURL("http://demo-store.com");
  });

  test('form validation for empty fields', async ({ page }) => {

    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('');
    // Try to submit empty form
    await page.getByRole('button', { name: 'Sign in' }).click();
    // Check validation messages
    await expect(page.getByText('Invalid Credentials')).toBeVisible();
  });
});