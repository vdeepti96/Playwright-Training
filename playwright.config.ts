import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: [['html', { outputFolder: 'playwright-report', open: 'always' }]],
  use: {
    headless: false,
    trace: 'retain-on-failure'
  }
});