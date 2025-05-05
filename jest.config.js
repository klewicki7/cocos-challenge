/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+\.tsx?$": ["ts-jest",{}],
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@utils/(.*)$": "<rootDir>/src/utils/$1",
    "^@entities/(.*)$": "<rootDir>/src/entities/$1",
    "^@generated/prisma$": "<rootDir>/__mocks__/prisma.js",
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "src/services/**/*.{ts,tsx}",
    "src/utils/**/*.{ts,tsx}",
    "!src/**/__tests__/**",
    "!src/**/index.ts"
  ],
  coverageDirectory: "coverage",
};