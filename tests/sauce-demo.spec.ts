import { test, expect } from '@playwright/test';

// Test to verify the sorting order Z-A
test('Verify sorting order Z-A', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Navigate to sorting and select Z-A
  await page.selectOption('.product_sort_container', 'za');
  const productTitles = await page.$$eval('.inventory_item_name', items => items.map(item => item.textContent));

  const sortedTitles = [...productTitles].sort().reverse();
  expect(productTitles).toEqual(sortedTitles);
});

// Test to verify price order high-low
test('Verify price order high-low', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Navigate to sorting and select high to low
  await page.selectOption('.product_sort_container', 'hilo');
  const productPrices = await page.$$eval('.inventory_item_price', items => items.map(item => parseFloat(item.textContent?.replace('$', '')!)));

  const sortedPrices = [...productPrices].sort((a, b) => b - a);
  expect(productPrices).toEqual(sortedPrices);
});

// Test to add multiple items and validate checkout
test('Add items to cart and checkout', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Add multiple items to cart
  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  await page.click('[data-test="add-to-cart-sauce-labs-bike-light"]');
  await page.click('.shopping_cart_link');

  // Proceed to checkout
  await page.click('[data-test="checkout"]');
  await page.fill('[data-test="firstName"]', 'Test');
  await page.fill('[data-test="lastName"]', 'User');
  await page.fill('[data-test="postalCode"]', '12345');
  await page.click('[data-test="continue"]');
  await page.click('[data-test="finish"]');

  // Check that the checkout is successful
  const successMessage = await page.textContent('.complete-header');
  expect(successMessage).toBe('THANK YOU FOR YOUR ORDER');
});
