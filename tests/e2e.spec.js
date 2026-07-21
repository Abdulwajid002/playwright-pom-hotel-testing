import { test, expect } from '../fixtures/testSetup.js';
import loginData from '../testdata/loginData.json' assert { type: 'json' };
import searchData from '../testdata/searchData.json' assert { type: 'json' };
import bookingData from '../testdata/bookingData.json' assert { type: 'json' };
import LoginPage from '../pages/LoginPage.js';
import SearchPage from '../pages/SearchPage.js';
import SelectHotelPage from '../pages/SelectHotelPage.js';
import BookPage from '../pages/BookPage.js';
import ConfirmationPage from '../pages/ConfirmationPage.js';
import { attachStepScreenshot } from '../utilities/screenshot.js';

test.describe('End-to-End Flow', () => {
  // TC-10
  test('TC-10: Full journey - login, search, select, book, confirm, logout', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const searchPage = new SearchPage(page);
    const selectHotelPage = new SelectHotelPage(page);
    const bookPage = new BookPage(page);
    const confirmationPage = new ConfirmationPage(page);

    const user = loginData.validUsers[0];
    const criteria = searchData.singleRoomSearch;
    const customer = bookingData.primaryCustomer;

    await test.step('Login', async () => {
      await loginPage.login(user.username, user.password);
      await expect(loginPage.message.first()).toHaveText(user.ExpectedMsg);
    });

    await test.step('Search for a hotel', async () => {
      await searchPage.searchHotel(criteria);
      await expect(searchPage.searchResultsTable).toBeVisible();
    });

    await test.step('Select hotel and continue', async () => {
      await selectHotelPage.selectFirstHotelAndContinue();
    });

    await test.step('Fill booking details and book', async () => {
      await bookPage.fillBookingDetails(customer);
      await bookPage.bookNow();
    });

    await test.step('Verify booking confirmation', async () => {
      await confirmationPage.captureConfirmation();
      await expect(confirmationPage.orderNumber).toBeVisible();
      await attachStepScreenshot(page, '13 - End-to-end confirmation reached');
    });

    await test.step('Logout', async () => {
      await loginPage.logout();
      await expect(loginPage.username).toBeVisible();
    });
  });
});
