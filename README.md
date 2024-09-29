SauceDemo Test Automation Suite
This repository contains automated tests for the SauceDemo application using Playwright. The test suite is designed to verify functionality, accessibility, and visual aspects of the site.

Table of Contents
Project Overview
Prerequisites
Installation
Running the Tests
Test Scenarios
Video Recordings
Test Reports and Logs
Bonus Points
Assumptions
Project Overview
This project automates the following test scenarios for the SauceDemo application:

Verify the sorting order displayed for Z-A on the “All Items” page.
Verify the price order (high-low) displayed on the “All Items” page.
Add multiple items to the cart and validate the checkout journey.
(Bonus) Automated visual tests for the above pages.
(Bonus) Automated accessibility tests for the above pages.
Prerequisites
To run this project, you need to have the following installed:

Node.js (version 14 or later)
npm or yarn
Playwright (version 1.24 or later)
A browser for headed execution (Chrome, Firefox, or WebKit)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/sauce-demo-tests.git
cd sauce-demo-tests
Install dependencies:

bash
Copy code
npm install
Install Playwright browsers:

bash
Copy code
npx playwright install
Running the Tests
1. Run All Tests
To execute the full test suite:

Headed Mode:

bash
Copy code
npx playwright test --headed
Headless Mode:

bash
Copy code
npx playwright test --headless
2. Run Specific Test Scenarios
To run specific test files:

Sorting Tests:

bash
Copy code
npx playwright test tests/sorting.spec.ts
Checkout Tests:

bash
Copy code
npx playwright test tests/checkout.spec.ts
3. Run Tests with Video Recording
To capture video recordings during test execution:

Headed:

bash
Copy code
npx playwright test --headed
Headless:

bash
Copy code
npx playwright test --headless
Test Scenarios
The following test cases are automated:

Z-A Sorting: Ensures that products are sorted alphabetically in reverse order.
Price High-Low: Verifies that products are sorted by price from high to low.
Cart and Checkout: Adds multiple items to the cart and validates the full checkout journey.
Bonus Scenarios
Visual Tests: Verifies the visual consistency of the application pages.
Accessibility Tests: Runs automated accessibility checks using axe-playwright.
Video Recordings
The test execution videos for both headed and headless modes are saved in the test-results/ directory. You can view the recordings after each test run.

Test Reports and Logs
Test execution logs and reports are automatically generated. You can access the HTML report after test runs by using:

bash
Copy code
npx playwright show-report
The HTML report will contain detailed information about each test, including screenshots and videos of failed tests.

Bonus Points
This project includes:

Visual Tests: Automated using Playwright's screenshot comparison feature.
Accessibility Tests: Automated using axe-playwright to ensure the application adheres to web accessibility standards.
Assumptions
The test environment is expected to be stable and free of flaky tests.
Sorting functionality for Z-A and price (high-low) behaves as specified in the requirement.
The checkout process completes successfully without requiring additional authentication.
License
This project is licensed under the MIT License - see the LICENSE file for details.

