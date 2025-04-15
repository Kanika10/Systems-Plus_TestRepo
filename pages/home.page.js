// pages/home.page.js
exports.HomePage = class HomePage {
    constructor(page) {
      this.page = page;
      this.cookieAcceptButton = page.getByRole('button', { name: 'Accept All' });
      this.searchIcon = page.locator('a[aria-controls="subnav-search-desktop-top"]');
      this.searchInput = page.getByRole('textbox', { name: 'Type to Search' });
      this.searchButton = page.getByRole('button', { name: 'Search' });
      this.searchResults = page.locator('.search-results');
    }
  
    async acceptCookies() {
      if (await this.cookieAcceptButton.isVisible()) {
        await this.cookieAcceptButton.click();
      }
    }
  
    async openSearch() {
      await this.searchIcon.click();
    }
  
    async searchFor(query) {
      await this.searchInput.fill(query);
      await this.searchButton.click();
    }
  
    async getSearchResultTitles() {
      await this.page.waitForSelector('.search-result', { timeout: 5000 });
      const titles = await this.page.locator('.search-result h3').allTextContents();
      return titles;
    }
  };
  