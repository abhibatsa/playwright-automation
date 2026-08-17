import {defineConfig} from '@playwright/test';
import {devices} from '@playwright/test';
export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 2,
  use: {
    baseURL: 'http://demo-store.com',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    video: 'on'
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
    //  { name: 'Mobile Chrome', use: { ...devices['iPhone 11'] } }
    // { name: 'Mobile Safari', use: { ...devices['iPhone 12'] } }
  ],
  reporter: [
    ['html', { outputFolder: 'playwright-report' }],
    ['json', { outputFile: 'test-results.json' }],
    ['junit', { outputFile: 'results.xml' }]
  ],
});

// Optionally, you can add Environment Variables to your config file
// For example, to set a base URL based on the environment:
// process.env.NODE_ENV = 'Stage'; // or 'Production', 'Development', etc.
// You can use this to dynamically set the base URL or other configurations based on the environment.
// Uncomment the following lines to set a dynamic base URL based on the environment
// const config: {
//   use: {
//     baseURL: process.env.NODE_ENV === 'Stage' 
//       ? 'https://prod.example.com' 
//       : 'https://staging.example.com',
//   },
// }