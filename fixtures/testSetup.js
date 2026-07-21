import { test as base } from '@playwright/test';
import BasePage from '../pages/BasePage.js';
import { attachScreenshotAfterEach } from '../utilities/screenshot.js';

const APP_URL = 'https://adactinhotelapp.com/index.php';

export const test = base.extend({
  // beforeEach equivalent: runs automatically for every test, no need to
  // destructure/request it manually in each test signature.
  pageSetup: [
    async ({ page }, use) => {
      const basePage = new BasePage(page);
      await basePage.navigate(APP_URL);
      await use();
    },
    { auto: true },
  ],
});

// afterEach equivalent: attaches a final (and, on failure, an extra) screenshot
// to the Allure / HTML report for every test automatically.
test.afterEach(async ({ page }, testInfo) => {
  await attachScreenshotAfterEach(page, testInfo);
});

export { expect } from '@playwright/test';
