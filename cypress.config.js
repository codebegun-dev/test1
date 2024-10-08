const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        baseUrl: 'http://localhost:8080',  // Your base URL
        setupNodeEvents(on, config) {
            // implement node event listeners here if needed
        },
        chromeWebSecurity: false,           // Disable security for local testing
    },
});
