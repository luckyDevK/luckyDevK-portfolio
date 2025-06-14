export default {
  testEnvironment: "jest-environment-jsdom", // Same name of the lib you installed
  setupFiles: ["<rootDir>/jest.polyfill.js"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // The file you created to extend jest config and "implement" the jest-dom environment in the jest globals
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": ["@swc/jest"],
  },
  moduleNameMapper: {
    "\\.svg$": "<rootDir>/src/components/test/__mocks__/svgMock.js",
    "^.+\\.svg\\?react$": "<rootDir>/src/components/test/__mocks__/svgMock.js",
    "^.+\\.svg$": "<rootDir>/src/components/test/__mocks__/svgMock.js",
    "\\.(gif|ttf|eot|png)$": "<rootDir>/test/__mocks__/fileMock.js",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};
