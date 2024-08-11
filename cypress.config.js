const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // baseUrl: 'http://localhost:8080',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    fixturesFolder: 'cypress/fixtures',
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    supportFile: 'cypress/support/e2e.{js,jsx,ts,tsx}',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    env: {
      apiUrl: 'http://localhost:8080/api'
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});
