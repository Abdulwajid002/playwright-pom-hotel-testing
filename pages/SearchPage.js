import { test } from '../fixtures/testSetup.js';
import { attachStepScreenshot } from '../utilities/screenshot.js';

// NOTE: Selectors below reflect the well-known Adactin Hotel App demo structure.
// Verify against the live DOM (right-click -> Inspect) before your first real run,
// since ids can shift slightly between app versions.
class SearchPage {
  constructor(page) {
    this.page = page;

    this.location = page.locator('#location');
    this.hotels = page.locator('#hotels');
    this.roomType = page.locator('#room_type');
    this.noOfRooms = page.locator('#room_nos');
    this.checkInDate = page.locator('#datepick');
    this.checkOutDate = page.locator('#datepick2');
    this.adultRoom = page.locator('#adult_room_no');
    this.childRoom = page.locator('#child_room_no');
    this.searchButton = page.locator('#Submit');
    this.searchResultsTable = page.locator('#hotel-search-results, table#Table1');
    this.noHotelsMessage = page.locator('text=No Rooms Available');
  }

  async searchHotel({ location, hotel, roomType, noOfRooms }) {
    await test.step('Select search location', async () => {
      await this.location.selectOption({ label: location });
      await attachStepScreenshot(this.page, '01 - After location selected');
    });

    await test.step('Select hotel', async () => {
      await this.hotels.selectOption({ label: hotel });
      await attachStepScreenshot(this.page, '02 - After hotel selected');
    });

    await test.step('Select room type', async () => {
      await this.roomType.selectOption({ label: roomType });
      await attachStepScreenshot(this.page, '03 - After room type selected');
    });

    await test.step('Select number of rooms', async () => {
      await this.noOfRooms.selectOption({  value: String(noOfRooms) });
      await attachStepScreenshot(this.page, '04 - After room count selected');
    });

    await test.step('Click Search', async () => {
      await this.searchButton.click();
      await attachStepScreenshot(this.page, '05 - After search click');
    });
  }
}

export default SearchPage;
