/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from "jest";

const config: Config = {
  coverageDirectory: "coverage",
  roots: ["<rootDir>/src"],
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  testEnvironment: "node",
  transform: {
    ".+\\.ts$": "ts-jest",
  },
  coverageProvider: "v8",
};

export default config;
