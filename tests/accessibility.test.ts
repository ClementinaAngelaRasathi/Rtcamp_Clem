import { test } from '@playwright/test';
import { injectAxe, checkA11y } from 'axe-playwright';

test('Accessibility test for All Items page', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Inject the Axe-core accessibility tool into the page
  await injectAxe(page);

  // Run the accessibility check (no need for 'null', just omit or pass 'undefined')
  await checkA11y(page, undefined, { detailedReport: true, detailedReportOptions: { html: true } });

  // No need to check violations manually, axe-playwright will log them
  console.log('Accessibility test completed.');
});
