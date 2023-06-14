import type { Config, ProcessVariables } from "../config.type";

export const getLocalConfig = (processVariables: ProcessVariables): Config => ({
  environment: "local",
  logLevel: processVariables.LOG_LEVEL ?? "debug",
  url: "https://rahulshettyacademy.com",
});
