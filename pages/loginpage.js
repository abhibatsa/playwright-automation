export class LoginPage {
    constructor(page) {
      this.page = page;
      this.emailInput = page.locator('//*[@id="username"]');
      this.loginButton = page.locator('//*[@id="login-button"]');
      this.errorMessage = page.locator('//*[@id="error-message"]');
     // this.email = page.locator(page.getByRole('textbox', { name: 'Username' }))

    }
  
    async goto() {
      await this.page.goto('http://demo-store.com');
    }
  
    async login(email) {
      await this.emailInput.fill(email);
      await this.loginButton.click();
    }

    async loginWithTestData(email) {
      await this.emailInput.fill(email);
      await this.loginButton.click();
    }
  
    async getErrorMessage() {
      return await this.errorMessage.textContent();
    }
    
  
    async isErrorVisible() {
      return await this.errorMessage.isVisible();
    }
  }