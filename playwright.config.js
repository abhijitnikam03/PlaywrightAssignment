import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  retries: 1,
  reporter: [['html', { outputFolder: 'playwright-report' }]],
  outputDir: 'test-results',
  use: {
    headless: false,
    video: 'on',
    trace: 'on',
    screenshot: 'only-on-failure',
    baseURL: 'https://www.lambdatest.com/selenium-playground',
  },
  projects: [
    { name: 'Chromium', use: { browserName: 'chromium' } },
    { name: 'Firefox', use: { browserName: 'firefox' } },
  ],
});
