module.exports = {
  rootDir: ".",
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "node"],
  testEnvironment: "node",
  roots: ["<rootDir>"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  reporters: ["default", "jest-allure"],
  testRunner: "jest-jasmine2",
  setupFilesAfterEnv: ["jest-allure/dist/setup"],
};
