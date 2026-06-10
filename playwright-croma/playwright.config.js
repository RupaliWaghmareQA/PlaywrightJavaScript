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
  
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        // Grant permissions for notifications and location
        permissions: ['notifications', 'geolocation'],
        geolocation: { latitude: 18.5204, longitude: 73.8567 }, // Pune
      },
    },

   /* {
      name: 'firefox',
      use: { 
        ...devices['Desktop Firefox'],
        permissions: ['notifications', 'geolocation'],
        geolocation: { latitude: 18.5204, longitude: 73.8567 },
      },

    },

    {
      name: 'webkit',
      use: { 
        ...devices['Desktop Safari'],
        permissions: ['notifications', 'geolocation'],
        geolocation: { latitude: 18.5204, longitude: 73.8567 },
      },
    },*/
  ],
});