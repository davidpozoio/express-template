/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },
  moduleNameMapper: {
    "^@app/(.*)$": "<rootDir>/src/$1",
  },
  setupFilesAfterEnv: ["./src/__test__/config/jest-setup.ts"],
};
