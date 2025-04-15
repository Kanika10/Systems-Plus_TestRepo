// tests/search.test.js
const { test, expect, chromium } = require('@playwright/test');
const { HomePage } = require('../pages/home.page');

const timeout = 5000;

test.describe('Search Functionality', () => {
  test('should return results for a valid search term', async ({ browser }) => {
    // Set up context with location permission and mocked geolocation
    const context = await browser.newContext({
      geolocation: { latitude: 37.7749, longitude: -122.4194 }, // San Francisco
      permissions: ['geolocation'],
      locale: 'en-US'
    });

    const page = await context.newPage();
    const homePage = new HomePage(page);

    await page.goto('https://www.brighthorizons.com/');
    await page.waitForTimeout(timeout); // Replace with smarter wait later

    await homePage.acceptCookies();
    await homePage.openSearch();
    await homePage.searchFor('Employee Education in 2018: Strategies to Watch');

    const results = await homePage.getSearchResultTitles();
    expect(results[0]).toContain('Employee Education in 2018: Strategies to Watch');
  });
});
