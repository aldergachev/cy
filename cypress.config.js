const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'w8nojt',
  e2e: {
    baseUrl: 'https://itrum.ru',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
