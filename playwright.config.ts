import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',  // Folder for tests
  timeout: 30000,      // 30 seconds per test timeout
  retries: 2,          // Retry failed tests twice
  use: {
    headless: true,    // Run tests in headless mode by default
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'on',       // Record video for each test
  },
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]], // Add this line
});
