import { test } from '../fixtures/testSetup.js';
import { attachStepScreenshot } from '../utilities/screenshot.js';

class ConfirmationPage {
  constructor(page) {
    this.page = page;

    this.confirmationHeading = page.locator('#confirm_heading, h2:has-text("Booking Confirmed")');
    this.orderNumber = page.locator('#order_no');
    this.customerName = page.locator('#Cname, #name');
  }

  async captureConfirmation() {
    await test.step('Verify booking confirmation', async () => {
      await this.orderNumber.waitFor({ state: 'visible' });
      await attachStepScreenshot(this.page, '12 - Booking confirmation page');
    });
  }
}

export default ConfirmationPage;
