const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        baseUrl: 'http://localhost:8080',  // Your base URL or local server
        supportFile: false,                // Disable support file if not needed
        specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',  // Default pattern for test files
        chromeWebSecurity: false,           // Disable security for local testing
    },
});
