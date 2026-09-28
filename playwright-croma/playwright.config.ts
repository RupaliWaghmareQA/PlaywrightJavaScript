import { defineConfig, devices } from '@playwright/test';






export default defineConfig({
  testDir: './tests',

  use: {
    baseURL: 'https://www.croma.com/',
      permissions: ['geolocation'],
    geolocation: {
      latitude: 18.5204,
      longitude: 73.8567,
  },
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






















