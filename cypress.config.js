const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    env: {
      apiUrl: 'https://fakestoreapi.com/products'
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
