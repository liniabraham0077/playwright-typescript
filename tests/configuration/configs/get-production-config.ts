import type { Config, ProcessVariables } from "../config.type";

export const getProductionConfig = (
  processVariables: ProcessVariables,
): Config => ({
  environment: "production",
  // logLevel: processVariables.LOG_LEVEL ?? "info",
  // url: "",
});
