# Systems-Plus_TestRepo

# BrightHorizons Search Functionality Tests

This project automates UI testing for the [BrightHorizons](https://www.brighthorizons.com/) website using [Playwright](https://playwright.dev/). It verifies that the search feature works correctly by checking results for specific search terms.

---

## 📁 Project Structure

. ├── pages/ │ └── home.page.js # Page Object Model (POM) for Home Page ├── tests/ │ └── search.test.js # Search functionality test ├── .github/ │ └── workflows/ │ └── playwright.yml # GitHub Actions CI workflow ├── package.json ├── README.md
---

## 🧪 Tech Stack

- **Playwright** - End-to-end testing framework for modern web apps
- **Node.js** - JavaScript runtime
- **GitHub Actions** - CI/CD to run tests automatically on pushes and PRs
- **JavaScript (ES6)** - Language used for scripting tests

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 recommended)
- npm
--------------------------------------------------------------------------------------------------------------------


### Installation

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install

## running test locally
npx playwright install
npx playwright test
--------------------------------------------------------------------------------------------------------------------


### Page Object Model
File: pages/home.page.js
Encapsulates selectors and interactions for the BrightHorizons home page.
await homePage.acceptCookies();
await homePage.openSearch();
await homePage.searchFor('Your Search Term');
--------------------------------------------------------------------------------------------------------------------

###Continuous Integration
GitHub Actions automatically runs tests on:
- Push to main
- Pull Requests to main
Workflow File: .github/workflows/playwright.yml
- name: Run Playwright tests
  run: |
    npx playwright install
    npx playwright test
--------------------------------------------------------------------------------------------------------------------


### Sample Test Scenario
File: tests/search.test.js
await homePage.acceptCookies();
await homePage.openSearch();
await homePage.searchFor('Employee Education in 2018: Strategies to Watch');



