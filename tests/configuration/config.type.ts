import type { Level } from "pino";
export type Environment = "production" | "local" | "test" | string;

export interface Config {
  environment?: Environment;
  url?: string;
  logLevel?: Level;
}

export interface ProcessVariables {
  ENV?: Environment;
  URL?: string;
  LOG_LEVEL?: Level;
}
