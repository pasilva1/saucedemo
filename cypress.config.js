const { defineConfig } = require("cypress");

module.exports = defineConfig({
 reporter: 'cypress-multi-reporters',
  chromeWebSecurity: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
