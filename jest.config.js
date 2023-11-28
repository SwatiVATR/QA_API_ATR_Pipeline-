module.exports = {
  rootDir: ".",

  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "node"],

  // The test environment that will be used for testing
  testEnvironment: "node",

  // Directories that Jest should use to search for files
  roots: ["<rootDir>"],

  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",

  // Transform files before running tests
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
 
  reporters: [
    "default",
    [
      "jest-html-reporters",
      {
        publicPath: "./html-report",
        filename: "report.html",
        openReport: true,
        pageTitle: "ATR Report",
        darkTheme: false,
        inlineSource: true,
        hideIcon: false,
        includeFailureMsg: true
      },
    ],
  ],
};
