import { test } from '../fixtures/testSetup.js';
import { attachStepScreenshot } from '../utilities/screenshot.js';

class SelectHotelPage {
  constructor(page) {
    this.page = page;

    this.firstRadioButton = page.locator('input[name="radiobutton_0"]').first();
    this.continueButton = page.locator('#continue');
  }

  async selectFirstHotelAndContinue() {
    await test.step('Select first available hotel', async () => {
      await this.firstRadioButton.check();
      await attachStepScreenshot(this.page, '06 - After hotel radio selected');
    });

    await test.step('Click Continue', async () => {
      await this.continueButton.click();
      await attachStepScreenshot(this.page, '07 - After continue click');
    });
  }
}

export default SelectHotelPage;
