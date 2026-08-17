# Playwright Automation Project

A test automation framework built using Playwright and JavaScript.

## 🚀 Features
* Built-in demo-store application
* Automated end-to-end web testing
* Custom Page Object Model (POM) architecture
* Auto-generated HTML and XML test reporting
* Creates .webm videos for the tests

## 🛠️ Prerequisites
Before running the tests, ensure you have the following installed:
* [Node.js](https://nodejs.org) (v16 or higher)

## 📦 Setup Instructions
1. Clone the repository:
   ```bash
   git clone git@github.com:abhibatsa/playwright-automation.git
   ```
2. Navigate into the project folder:
   ```bash
   cd playwright-automation
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Install required Playwright browsers:
   ```bash
   npx playwright install
   ```

## 🧪 Running Tests
* Run all tests in headless mode:
  ```bash
  npx playwright test
  ```
* Run tests with the UI visual runner:
  ```bash
  npx playwright test --ui
  ```
* View the latest test report:
  ```bash
  npx playwright show-report
  ```

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
