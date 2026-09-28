const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  use: {
    baseURL: 'https://www.croma.com/',
  },

  projects: [
    {
      name: 'setup',
      testMatch: /.*\.setup\.ts/,
    },

    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],

        baseURL: 'https://www.croma.com/',
        
        storageState: 'playwright/.auth/user.json',
        permissions: ['notifications', 'geolocation'],
        geolocation: { latitude: 18.5204, longitude: 73.8567 },
      },
      dependencies: ['setup'],
    },
  ],
});






























/*
// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1,
  
  reporter: [
    ['html', { outputFolder: 'reports/html-report' }],
  ],
  
  use: {
    baseURL: 'https://www.croma.com/',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'setup',
      testMatch: /.*\.setup\.js/,
    },

    {
      name: 'chromium',

      use: {
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/user.json',
        permissions: ['notifications', 'geolocation'],
        geolocation: { latitude: 18.5204, longitude: 73.8567 },
      },
      dependencies: ['setup'],
    },
  ],




  
      },
  ],
});  */

