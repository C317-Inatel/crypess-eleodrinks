const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-multi-reporters',  
  reporterOptions: {
    reporterEnabled: 'cypress-mochawesome-reporter, spec, mocha-junit-reporter',
    mochaJunitReporterOptions: {
      mochaFile: 'cypress/reports/junit/results-[hash].xml',
  },
    cypressMochawesomeReporterOptions: {
      charts: true,
      reportPageTitle: 'Relatório de Testes',
      embeddedScreenshots: true,  
      inlineAssets: true,
      saveAllAttempts: false
    },
  },
    chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on); 
      // implement node event listeners here
    },
  },
});
