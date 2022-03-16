/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  // All imported modules in your tests should be mocked automatically
  automock: false,

  // Automatically clear mock calls, instances and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: false,

  // An array of file extensions your modules use
  moduleFileExtensions: ["js", "jsx", "json", "vue", "ts", "tsx"],

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  // An array of regexp pattern strings, matched against all module paths before considered 'visible' to the module loader
  modulePathIgnorePatterns: [],

  // The test environment that will be used for testing
  testEnvironment: "jsdom",

  // This option sets the URL for the jsdom environment. It is reflected in properties such as location.href
  testURL: "http://localhost/",

  // Setting this value to "fake" allows the use of fake timers for functions such as "setTimeout"
  timers: "fake",

  // A map from regular expressions to paths to transformers
  transform: {
    "^.+\\.ts$": "ts-jest",
    "^.+\\.vue$": "@vue/vue3-jest",
  },

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: ["/node_modules/"],

  // This adds typeahead to pattern search in watch mode
  watchPlugins: [
    require.resolve("jest-watch-typeahead/filename"),
    require.resolve("jest-watch-typeahead/testname"),
  ],
};
