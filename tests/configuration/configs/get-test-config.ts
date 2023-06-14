import type { Config, ProcessVariables } from "../config.type";

export const getTestConfig = (processVariables: ProcessVariables): Config => ({
  environment: "test",
  url: "",
  // logLevel: processVariables.LOG_LEVEL ?? "info",
});
