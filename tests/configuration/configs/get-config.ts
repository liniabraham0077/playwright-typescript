import type { Config, Environment, ProcessVariables } from "../config.type";
import { getLocalConfig } from "./get-local-config";
import { getProductionConfig } from "./get-production-config";
import { getTestConfig } from "./get-test-config";

export const getConfig = (processVariables: ProcessVariables): Config => {
  const environment: Environment = processVariables.ENV ?? "local";
  console.log(`environment izz ${environment}`);
  switch (environment) {
    case "production":
      return getProductionConfig(processVariables);
    case "local":
      return getLocalConfig(processVariables);
    case "test":
      return getTestConfig(processVariables);
    default:
      throw new Error(
        `Unknown environment: ${environment}`,
      ); /* eslint-disable */
  }
};
