import { createDefaultPreset, JestConfigWithTsJest } from "ts-jest";

const config: JestConfigWithTsJest = {
  verbose: true,
  rootDir: "src",
  ...createDefaultPreset(),
  resolver: "ts-jest-resolver",
};

export default config;
