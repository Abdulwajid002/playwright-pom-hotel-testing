# 🏨 Adactin Hotel Reservation - Playwright Automation Framework

A scalable and maintainable **End-to-End UI Automation Testing Framework** built using **Playwright** and **JavaScript** for the **Adactin Hotel Reservation** application. This project follows the **Page Object Model (POM)** design pattern to ensure reusable, organized, and maintainable test automation.

> Developed as a portfolio project to demonstrate modern UI automation testing practices, framework design, and test execution using Playwright.

---

## 🚀 Project Overview

This automation framework validates the complete hotel booking workflow of the Adactin Hotel Reservation application, including:

- User Login
- Hotel Search
- Hotel Selection
- Hotel Booking
- Booking Confirmation
- Logout

The framework is designed with scalability and maintainability in mind, making it suitable for real-world automation testing projects.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| Playwright | UI Automation |
| JavaScript (ES6+) | Programming Language |
| Node.js | Runtime Environment |
| Page Object Model (POM) | Framework Design Pattern |
| Git & GitHub | Version Control |

---

## 📂 Project Structure

```
adactin-hotel-playwright-automation/
│
├── pages/
│   ├── LoginPage.js
│   ├── SearchHotelPage.js
│   ├── SelectHotelPage.js
│   ├── BookPage.js
│   └── ConfirmationPage.js
│   └── BasePage.js
│
├── tests/
│   └── booking.spec.js
│   └── e2e.spec.js
│   └── login.spec.js
│   └── search.spec.js
│
├── fixtures/
│   └── testSetup.js
├── utilities/
│   └── screenshot.js
├── test-data/
│   └── bookingData.json
│   └── loginData.json
│   └── searchData.json
│
├── playwright.config.js
│
├── package.json
│
└── README.md
```

---

## ✨ Framework Features

- ✅ End-to-End UI Automation
- ✅ Page Object Model (POM)
- ✅ Reusable Page Classes
- ✅ Clean Project Architecture
- ✅ Screenshot Capture
- ✅ Assertions & Validations
- ✅ Easy Test Maintenance
- ✅ Cross-Browser Support
- ✅ Automatic Waits
- ✅ Modular Test Design

---

## 📋 Test Scenarios Covered

### Login Module
- Valid Login
- Invalid Login Validation

### Search Hotel
- Select Location
- Select Hotel
- Select Room Type
- Number of Rooms
- Adults per Room
- Children per Room
- Search Hotel

### Select Hotel
- Select Available Hotel
- Continue Booking

### Book Hotel
- Enter Customer Details
- Payment Information
- Confirm Booking

### Booking Confirmation
- Verify Booking Confirmation
- Validate Order Number
- Capture Booking Details

### Logout
- Successful Logout

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/your-username/adactin-hotel-playwright-automation.git
```

Move into the project directory

```bash
cd adactin-hotel-playwright-automation
```

Install dependencies

```bash
npm install
```

Install Playwright browsers

```bash
npx playwright install
```

---

## ▶️ Running Tests

Run all tests

```bash
npx playwright test
```

Run a specific test

```bash
npx playwright test tests/booking.spec.js
```

Run in headed mode

```bash
npx playwright test --headed
```

Run using Chromium

```bash
npx playwright test --project=chromium
```

Run using Firefox

```bash
npx playwright test --project=firefox
```

Run using WebKit

```bash
npx playwright test --project=webkit
```

---

## 📊 Test Reports

Generate HTML Report

```bash
npx playwright show-report
```

---

## 📸 Screenshots

The framework automatically captures screenshots during test execution and on failures for easier debugging.

---

## 🎯 Design Pattern

This project follows the **Page Object Model (POM)** architecture.

Benefits:

- Improved Code Reusability
- Better Readability
- Easier Maintenance
- Reduced Code Duplication
- Scalable Automation Framework

---

## 📈 Future Enhancements

- API Testing Integration
- Data-Driven Testing
- CI/CD using GitHub Actions
- Docker Support
- Parallel Execution
- Allure Reporting
- Environment Configuration
- Excel Data Provider

---

## 👨‍💻 Author

**Abdul Wajid**

Software Engineering Student

QA Automation | Playwright | JavaScript | API Testing | Performance Testing | SQL

GitHub: https://github.com/Abdulwajid002

LinkedIn: www.linkedin.com/in/abdulwajid1947

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

---

## 📄 License

This project is created for educational and portfolio purposes.
