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

// Shared helper so each test doesn't repeat the login -> search chain.
async function loginAndSearch(page) {
  const loginPage = new LoginPage(page);
  const data = loginData.validUsers[0];
  await loginPage.login(data.username, data.password);
  await expect(loginPage.message.first()).toHaveText(data.ExpectedMsg);

  const searchPage = new SearchPage(page);
  await searchPage.searchHotel(searchData.singleRoomSearch);

  return { loginPage, searchPage };
}

test.describe('Hotel Booking', () => {
  // TC-07
  test('TC-07: Select a hotel from results and continue to booking page', async ({ page }) => {
    await loginAndSearch(page);
    const selectHotelPage = new SelectHotelPage(page);

    await selectHotelPage.selectFirstHotelAndContinue();

    await test.step('Verify booking page is displayed', async () => {
      await expect(page.locator('#first_name')).toBeVisible();
      await attachStepScreenshot(page, '07 - Booking page displayed');
    });
  });

  // TC-08
  test('TC-08: Book hotel with valid customer and payment details', async ({ page }) => {
    await loginAndSearch(page);
    const selectHotelPage = new SelectHotelPage(page);
    await selectHotelPage.selectFirstHotelAndContinue();

    const bookPage = new BookPage(page);
    await bookPage.fillBookingDetails(bookingData.primaryCustomer);
    await bookPage.bookNow();

    await test.step('Verify booking confirmation is shown', async () => {
      const confirmationPage = new ConfirmationPage(page);
      await confirmationPage.captureConfirmation();
      await expect(confirmationPage.orderNumber).toBeVisible();
    });
  });

  // TC-09
  test('TC-09: Booking confirmation displays a generated order number', async ({ page }) => {
    await loginAndSearch(page);
    const selectHotelPage = new SelectHotelPage(page);
    await selectHotelPage.selectFirstHotelAndContinue();

    const bookPage = new BookPage(page);
    await bookPage.fillBookingDetails(bookingData.primaryCustomer);
    await bookPage.bookNow();

    const confirmationPage = new ConfirmationPage(page);
    await confirmationPage.captureConfirmation();

    await test.step('Verify order number is non-empty', async () => {
      // const orderText = await confirmationPage.orderNumber.inputValue();
      // expect(orderText?.trim().length).toBeGreaterThan(0);
      const orderText = await confirmationPage.orderNumber.inputValue();

console.log("Order Number:", orderText);

expect(orderText.trim().length).toBeGreaterThan(0);
      await attachStepScreenshot(page, '12 - Order number verified');
    });
  });
});
