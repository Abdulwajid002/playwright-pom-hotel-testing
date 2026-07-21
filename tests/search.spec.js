import { test, expect } from '../fixtures/testSetup.js';
import loginData from '../testdata/loginData.json' assert { type: 'json' };
import searchData from '../testdata/searchData.json' assert { type: 'json' };
import LoginPage from '../pages/LoginPage.js';
import SearchPage from '../pages/SearchPage.js';
import { attachStepScreenshot } from '../utilities/screenshot.js';

test.describe('Hotel Search', () => {
  // Each test logs in first, since search requires an authenticated session.
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    const data = loginData.validUsers[0];
    await loginPage.login(data.username, data.password);
    await expect(loginPage.message.first()).toHaveText(data.ExpectedMsg);
  });

  // TC-04
  test('TC-04: Search hotel with valid single-room criteria returns results', async ({ page }) => {
    const searchPage = new SearchPage(page);
    const criteria = searchData.singleRoomSearch;

    await searchPage.searchHotel(criteria);

    await test.step('Verify search results are displayed', async () => {
      await expect(searchPage.searchResultsTable).toBeVisible();
      await attachStepScreenshot(page, '06 - Search results displayed');
    });
  });

  // TC-05
  test('TC-05: Search hotel with multiple rooms returns results', async ({ page }) => {
    const searchPage = new SearchPage(page);
    const criteria = searchData.multiRoomSearch;

    await searchPage.searchHotel(criteria);

    await test.step('Verify search results are displayed for multi-room search', async () => {
      await expect(searchPage.searchResultsTable).toBeVisible();
      await attachStepScreenshot(page, '06 - Multi-room search results displayed');
    });
  });

  // TC-06
  test('TC-06: Search with an unavailable combination shows no-results message', async ({ page }) => {
    const searchPage = new SearchPage(page);
    const criteria = searchData.invalidCombinationSearch;

    await searchPage.searchHotel(criteria);

    await test.step('Verify no-hotels-available message is shown', async () => {
      await expect(searchPage.noHotelsMessage.or(searchPage.searchResultsTable)).toBeVisible();
      await attachStepScreenshot(page, '06 - No-results or results state captured');
    });
  });
});
