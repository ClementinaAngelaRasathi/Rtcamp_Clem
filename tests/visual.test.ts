import { test, expect } from '@playwright/test';

const BASE_URL = 'https://www.saucedemo.com/';

test('Visual regression test for All Items page', async ({ page }) => {
  await page.goto(BASE_URL);
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await page.waitForTimeout(1000); // Wait for the page to load

  // Take a screenshot for visual testing
  await expect(page).toHaveScreenshot(); // Takes a screenshot for comparison
});
