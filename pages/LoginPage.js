import { test } from '../fixtures/testSetup.js';
import { attachStepScreenshot } from '../utilities/screenshot.js';

class LoginPage {
  constructor(page) {
    this.page = page;

    this.username = page.locator('#username');
    this.password = page.locator('#password');
    this.loginButton = page.locator('#login');
    this.message = page.locator('.welcome_menu');
    this.errorMessage = page.locator('#login_form p.pull-left, .fail, #err_msg, .error');
    this.logoutLink = page.locator('#logout_link, a:has-text("Logout")');
  }

  async login(username, password) {
    await test.step('After URL open', async () => {
      await attachStepScreenshot(this.page, '01 - After URL open');
    });

    await test.step('Enter username', async () => {
      await this.username.fill(username);
      await attachStepScreenshot(this.page, '02 - After username');
    });

    await test.step('Enter password', async () => {
      await this.password.fill(password);
      await attachStepScreenshot(this.page, '03 - After password');
    });

    await test.step('Click Login', async () => {
      await this.loginButton.click();
      await attachStepScreenshot(this.page, '04 - After login click');
    });
  }

  async logout() {
    await test.step('Click Logout', async () => {
      await this.logoutLink.click();
      await attachStepScreenshot(this.page, 'After logout click');
    });
  }
}

export default LoginPage;
