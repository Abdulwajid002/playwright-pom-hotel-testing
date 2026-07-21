# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: search.spec.js >> Hotel Search >> TC-06: Search with an unavailable combination shows no-results message
- Location: tests\search.spec.js:44:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('text=No Rooms Available').or(locator('#hotel-search-results, table#Table1'))
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('text=No Rooms Available').or(locator('#hotel-search-results, table#Table1'))

```

```yaml
- table:
  - rowgroup:
    - 'row "AdactIn Group Adactin Group: Hotel Reservation System"':
      - cell "AdactIn Group":
        - img "AdactIn Group"
      - 'cell "Adactin Group: Hotel Reservation System"':
        - 'img "Adactin Group: Hotel Reservation System"'
    - row:
      - cell
- table:
  - rowgroup:
    - row "Welcome to Adactin Group of Hotels Hello Username! Search Hotel | Booked Itinerary | Change Password | Logout Adactin Hotel Mobile App DOWNLOAD the Hotel Mobile App and extend your experience. Click to know more about how to get the app on Android or IOS. HotelApp Web Services Access Hotel App SOAP and Rest Services to learn web services testing. Click to know more. Sample TestCases DOWNLOAD a complete set of readymade sample TEST CASES for this application. Enjoy automation! Known Defects DOWNLOAD list of known defects for this application. Book on Automation About Adactin Get solutions for all your testing needs. Visit www.adactin.com today!":
      - cell "Welcome to Adactin Group of Hotels"
      - cell "Hello Username! Search Hotel | Booked Itinerary | Change Password | Logout":
        - text: Hello Username!
        - link "Search Hotel":
          - /url: SearchHotel.php
        - text: "|"
        - link "Booked Itinerary":
          - /url: BookedItinerary.php
        - text: "|"
        - link "Change Password":
          - /url: ChangePassword.php
        - text: "|"
        - link "Logout":
          - /url: Logout.php
      - cell "Adactin Hotel Mobile App DOWNLOAD the Hotel Mobile App and extend your experience. Click to know more about how to get the app on Android or IOS. HotelApp Web Services Access Hotel App SOAP and Rest Services to learn web services testing. Click to know more. Sample TestCases DOWNLOAD a complete set of readymade sample TEST CASES for this application. Enjoy automation! Known Defects DOWNLOAD list of known defects for this application. Book on Automation About Adactin Get solutions for all your testing needs. Visit www.adactin.com today!":
        - table:
          - rowgroup:
            - row "Adactin Hotel Mobile App DOWNLOAD the Hotel Mobile App and extend your experience. Click to know more about how to get the app on Android or IOS.":
              - cell "Adactin Hotel Mobile App DOWNLOAD the Hotel Mobile App and extend your experience. Click to know more about how to get the app on Android or IOS.":
                - heading "Adactin Hotel Mobile App" [level=4]
                - link "DOWNLOAD":
                  - /url: https://adactinhotelapp.com/resources/AdactinHotelApp_SetupGuide.pdf
                - text: the Hotel Mobile App and extend your experience. Click to know more about how to get the app on Android or IOS.
            - row "HotelApp Web Services Access Hotel App SOAP and Rest Services to learn web services testing. Click to know more.":
              - cell "HotelApp Web Services Access Hotel App SOAP and Rest Services to learn web services testing. Click to know more.":
                - heading "HotelApp Web Services" [level=4]
                - text: Access Hotel App SOAP and Rest Services to learn web services testing.
                - link "Click":
                  - /url: https://adactinhotelapp.com/HotelAdactinWebServices/
                - text: to know more.
            - row "Sample TestCases DOWNLOAD a complete set of readymade sample TEST CASES for this application. Enjoy automation!":
              - cell "Sample TestCases DOWNLOAD a complete set of readymade sample TEST CASES for this application. Enjoy automation!":
                - heading "Sample TestCases" [level=4]
                - link "DOWNLOAD":
                  - /url: http://adactinhotelapp.com/resources/Sample-TestCases_HotelApplication.pdf
                - text: a complete set of readymade sample TEST CASES for this application. Enjoy automation!
            - row "Known Defects DOWNLOAD list of known defects for this application.":
              - cell "Known Defects DOWNLOAD list of known defects for this application.":
                - heading "Known Defects" [level=4]
                - link "DOWNLOAD":
                  - /url: http://adactinhotelapp.com/resources/KnownDefects_HotelApp.pdf
                - text: list of known defects for this application.
            - row "Book on Automation":
              - cell "Book on Automation":
                - heading "Book on Automation" [level=4]
                - iframe
            - row "About Adactin Get solutions for all your testing needs. Visit www.adactin.com today!":
              - cell "About Adactin Get solutions for all your testing needs. Visit www.adactin.com today!":
                - heading "About Adactin" [level=4]
                - text: Get solutions for all your testing needs. Visit
                - link "www.adactin.com":
                  - /url: http://www.adactin.com
                - text: today!
    - row "Select Hotel Select Hotel Name Location Rooms Arrival Date Departure Date No. of Days Rooms Type Price per Night Total Price (excl. GST) Hotel Sunshine London 1 Rooms 03/07/2026 04/07/2026 1 Days Standard AUD $ 175 AUD $ 185 Continue Cancel":
      - cell "Select Hotel Select Hotel Name Location Rooms Arrival Date Departure Date No. of Days Rooms Type Price per Night Total Price (excl. GST) Hotel Sunshine London 1 Rooms 03/07/2026 04/07/2026 1 Days Standard AUD $ 175 AUD $ 185 Continue Cancel":
        - table:
          - rowgroup:
            - row "Select Hotel":
              - cell "Select Hotel"
            - row "Select Hotel Name Location Rooms Arrival Date Departure Date No. of Days Rooms Type Price per Night Total Price (excl. GST) Hotel Sunshine London 1 Rooms 03/07/2026 04/07/2026 1 Days Standard AUD $ 175 AUD $ 185":
              - cell "Select Hotel Name Location Rooms Arrival Date Departure Date No. of Days Rooms Type Price per Night Total Price (excl. GST) Hotel Sunshine London 1 Rooms 03/07/2026 04/07/2026 1 Days Standard AUD $ 175 AUD $ 185":
                - table:
                  - rowgroup:
                    - row "Select Hotel Name Location Rooms Arrival Date Departure Date No. of Days Rooms Type Price per Night Total Price (excl. GST)":
                      - cell "Select":
                        - strong: Select
                      - cell "Hotel Name":
                        - strong: Hotel Name
                      - cell "Location":
                        - strong: Location
                      - cell "Rooms":
                        - strong: Rooms
                      - cell "Arrival Date":
                        - strong: Arrival Date
                      - cell "Departure Date":
                        - strong: Departure Date
                      - cell "No. of Days":
                        - strong: No. of Days
                      - cell "Rooms Type":
                        - strong: Rooms Type
                      - cell "Price per Night":
                        - strong: Price per Night
                      - cell "Total Price (excl. GST)":
                        - strong: Total Price (excl. GST)
                    - row "Hotel Sunshine London 1 Rooms 03/07/2026 04/07/2026 1 Days Standard AUD $ 175 AUD $ 185":
                      - cell:
                        - radio
                      - cell "Hotel Sunshine":
                        - textbox: Hotel Sunshine
                      - cell "London":
                        - textbox: London
                      - cell "1 Rooms":
                        - textbox: 1 Rooms
                      - cell "03/07/2026":
                        - textbox: 03/07/2026
                      - cell "04/07/2026":
                        - textbox: 04/07/2026
                      - cell "1 Days":
                        - textbox: 1 Days
                      - cell "Standard":
                        - textbox: Standard
                      - cell "AUD $ 175":
                        - textbox: AUD $ 175
                      - cell "AUD $ 185":
                        - textbox: AUD $ 185
            - row "Continue Cancel":
              - cell "Continue Cancel":
                - button "Continue"
                - button "Cancel"
- table:
  - rowgroup:
    - row:
      - cell
    - row "© 2026 - Adactin.com. All Rights Reserved. Adactin Group Pty. Ltd.":
      - cell "© 2026 - Adactin.com. All Rights Reserved. Adactin Group Pty. Ltd.":
        - text: © 2026 -
        - link "Adactin.com":
          - /url: http://www.adactin.com
        - text: . All Rights Reserved. Adactin Group Pty. Ltd.
```

# Test source

```ts
  1  | import { test, expect } from '../fixtures/testSetup.js';
  2  | import loginData from '../testdata/loginData.json' assert { type: 'json' };
  3  | import searchData from '../testdata/searchData.json' assert { type: 'json' };
  4  | import LoginPage from '../pages/LoginPage.js';
  5  | import SearchPage from '../pages/SearchPage.js';
  6  | import { attachStepScreenshot } from '../utilities/screenshot.js';
  7  | 
  8  | test.describe('Hotel Search', () => {
  9  |   // Each test logs in first, since search requires an authenticated session.
  10 |   test.beforeEach(async ({ page }) => {
  11 |     const loginPage = new LoginPage(page);
  12 |     const data = loginData.validUsers[0];
  13 |     await loginPage.login(data.username, data.password);
  14 |     await expect(loginPage.message.first()).toHaveText(data.ExpectedMsg);
  15 |   });
  16 | 
  17 |   // TC-04
  18 |   test('TC-04: Search hotel with valid single-room criteria returns results', async ({ page }) => {
  19 |     const searchPage = new SearchPage(page);
  20 |     const criteria = searchData.singleRoomSearch;
  21 | 
  22 |     await searchPage.searchHotel(criteria);
  23 | 
  24 |     await test.step('Verify search results are displayed', async () => {
  25 |       await expect(searchPage.searchResultsTable).toBeVisible();
  26 |       await attachStepScreenshot(page, '06 - Search results displayed');
  27 |     });
  28 |   });
  29 | 
  30 |   // TC-05
  31 |   test('TC-05: Search hotel with multiple rooms returns results', async ({ page }) => {
  32 |     const searchPage = new SearchPage(page);
  33 |     const criteria = searchData.multiRoomSearch;
  34 | 
  35 |     await searchPage.searchHotel(criteria);
  36 | 
  37 |     await test.step('Verify search results are displayed for multi-room search', async () => {
  38 |       await expect(searchPage.searchResultsTable).toBeVisible();
  39 |       await attachStepScreenshot(page, '06 - Multi-room search results displayed');
  40 |     });
  41 |   });
  42 | 
  43 |   // TC-06
  44 |   test('TC-06: Search with an unavailable combination shows no-results message', async ({ page }) => {
  45 |     const searchPage = new SearchPage(page);
  46 |     const criteria = searchData.invalidCombinationSearch;
  47 | 
  48 |     await searchPage.searchHotel(criteria);
  49 | 
  50 |     await test.step('Verify no-hotels-available message is shown', async () => {
> 51 |       await expect(searchPage.noHotelsMessage.or(searchPage.searchResultsTable)).toBeVisible();
     |                                                                                  ^ Error: expect(locator).toBeVisible() failed
  52 |       await attachStepScreenshot(page, '06 - No-results or results state captured');
  53 |     });
  54 |   });
  55 | });
  56 | 
```