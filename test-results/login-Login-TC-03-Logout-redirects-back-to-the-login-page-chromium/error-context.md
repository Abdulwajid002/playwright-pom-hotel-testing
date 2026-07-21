# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> Login >> TC-03: Logout redirects back to the login page
- Location: tests\login.spec.js:38:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('#username')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('#username')

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
    - row "You have successfully logged out. Click here to login again Adactin Hotel Mobile App DOWNLOAD the Hotel Mobile App and extend your experience. Click to know more about how to get the app on Android or IOS. HotelApp Web Services Access Hotel App SOAP and Rest Services to learn web services testing. Click to know more. Sample TestCases DOWNLOAD a complete set of readymade sample TEST CASES for this application. Enjoy automation! Known Defects DOWNLOAD list of known defects for this application. Book on Automation About Adactin Get solutions for all your testing needs. Visit www.adactin.com today!":
      - cell "You have successfully logged out. Click here to login again":
        - table:
          - rowgroup:
            - row "You have successfully logged out. Click here to login again":
              - cell "You have successfully logged out. Click here to login again":
                - text: You have successfully logged out.
                - link "Click here to login again":
                  - /url: index.php
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
  3  | import LoginPage from '../pages/LoginPage.js';
  4  | import { attachStepScreenshot } from '../utilities/screenshot.js';
  5  | 
  6  | test.describe('Login', () => {
  7  |   // TC-01
  8  |   test('TC-01: Login with valid credentials shows welcome message', async ({ page }) => {
  9  |     const loginPage = new LoginPage(page);
  10 |     const data = loginData.validUsers[0];
  11 | 
  12 |     await test.step('Enter credential and login', async () => {
  13 |       await loginPage.login(data.username, data.password);
  14 |     });
  15 | 
  16 |     await test.step('Verify Welcome Message on Landing page', async () => {
  17 |       await expect(loginPage.message.first()).toHaveText(data.ExpectedMsg);
  18 |       await attachStepScreenshot(page, '05 - After welcome message verification');
  19 |     });
  20 |   });
  21 | 
  22 |   // TC-02
  23 |   test('TC-02: Login with invalid credentials shows error message', async ({ page }) => {
  24 |     const loginPage = new LoginPage(page);
  25 |     const data = loginData.invalidUsers[0];
  26 | 
  27 |     await test.step('Enter invalid credential and attempt login', async () => {
  28 |       await loginPage.login(data.username, data.password);
  29 |     });
  30 | 
  31 |     await test.step('Verify error message is displayed', async () => {
  32 |       await expect(page.locator('body')).toContainText(data.ExpectedError);
  33 |       await attachStepScreenshot(page, '05 - After invalid login error verification');
  34 |     });
  35 |   });
  36 | 
  37 |   // TC-03
  38 |   test('TC-03: Logout redirects back to the login page', async ({ page }) => {
  39 |     const loginPage = new LoginPage(page);
  40 |     const data = loginData.validUsers[0];
  41 | 
  42 |     await test.step('Login with valid user', async () => {
  43 |       await loginPage.login(data.username, data.password);
  44 |       await expect(loginPage.message.first()).toHaveText(data.ExpectedMsg);
  45 |     });
  46 | 
  47 |     await test.step('Logout', async () => {
  48 |       await loginPage.logout();
  49 |     });
  50 | 
  51 |     await test.step('Verify login form is visible again', async () => {
> 52 |       await expect(loginPage.username).toBeVisible();
     |                                        ^ Error: expect(locator).toBeVisible() failed
  53 |       await attachStepScreenshot(page, 'After logout verification');
  54 |     });
  55 |   });
  56 | });
  57 | 
```