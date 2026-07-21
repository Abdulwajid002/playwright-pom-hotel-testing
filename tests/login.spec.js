import { test, expect } from '../fixtures/testSetup.js';
import loginData from '../testdata/loginData.json' assert { type: 'json' };
import LoginPage from '../pages/LoginPage.js';
import { attachStepScreenshot } from '../utilities/screenshot.js';

test.describe('Login', () => {
  // TC-01
  test('TC-01: Login with valid credentials shows welcome message', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const data = loginData.validUsers[0];

    await test.step('Enter credential and login', async () => {
      await loginPage.login(data.username, data.password);
    });

    await test.step('Verify Welcome Message on Landing page', async () => {
      await expect(loginPage.message.first()).toHaveText(data.ExpectedMsg);
      await attachStepScreenshot(page, '05 - After welcome message verification');
    });
  });

  // TC-02
  test('TC-02: Login with invalid credentials shows error message', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const data = loginData.invalidUsers[0];

    await test.step('Enter invalid credential and attempt login', async () => {
      await loginPage.login(data.username, data.password);
    });

    await test.step('Verify error message is displayed', async () => {
      await expect(page.locator('body')).toContainText(data.ExpectedError);
      await attachStepScreenshot(page, '05 - After invalid login error verification');
    });
  });

  // TC-03
  test('TC-03: Logout redirects back to the login page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const data = loginData.validUsers[0];

    await test.step('Login with valid user', async () => {
      await loginPage.login(data.username, data.password);
      await expect(loginPage.message.first()).toHaveText(data.ExpectedMsg);
    });

    await test.step('Logout', async () => {
      await loginPage.logout();
    });

    await test.step('Verify login form is visible again', async () => {
      await expect(loginPage.username).toBeVisible();
      await attachStepScreenshot(page, 'After logout verification');
    });
  });
});
