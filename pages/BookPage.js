import { test } from '../fixtures/testSetup.js';
import { attachStepScreenshot } from '../utilities/screenshot.js';

class BookPage {
  constructor(page) {
    this.page = page;

    this.firstName = page.locator('#first_name');
    this.lastName = page.locator('#last_name');
    this.address = page.locator('#address');
     this.ccNumber = page.locator('#cc_num');
    this.ccType = page.locator('#cc_type');
    this.ccExpiryMonth = page.locator('#cc_exp_month');
    this.ccExpiryYear = page.locator('#cc_exp_year');
    this.ccCvv = page.locator('#cc_cvv');
    this.bookNowButton = page.locator('#book_now');
  }

  async fillBookingDetails(details) {
    await test.step('Enter customer name', async () => {
      await this.firstName.fill(details.firstName);
      await this.lastName.fill(details.lastName);
      await attachStepScreenshot(this.page, '08 - After name entered');
    });

    await test.step('Enter address', async () => {
      await this.address.fill(details.address);
      await attachStepScreenshot(this.page, '09 - After address entered');
    });

    await test.step('Enter payment details', async () => {
      await this.ccType.selectOption({ label: details.ccType });
      await this.ccNumber.fill(details.ccNumber);
      await this.ccExpiryMonth.selectOption({ label: details.ccExpiryMonth });
      await this.ccExpiryYear.selectOption({ label: details.ccExpiryYear });
      await this.ccCvv.fill(details.ccCvv);
      await attachStepScreenshot(this.page, '10 - After payment details entered');
    });
  }

  async bookNow() {
    await test.step('Click Book Now', async () => {
      await this.bookNowButton.click();
      await attachStepScreenshot(this.page, '11 - After book now click');
    });
  }
}

export default BookPage;
