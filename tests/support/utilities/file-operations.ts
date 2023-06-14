import { env, getJsonFromFile } from "./read-config";
import * as fs from "fs";
import type { PageElementMappings } from "./global";

export const mappingFiles = fs.readdirSync(
  `${process.cwd()}${"/tests/locators/"}`,
);

export const pageElementMappings: PageElementMappings = mappingFiles.reduce(
  (pageElementConfigAcc, file) => {
    const key = file.replace(".json", "");
    const elementMappings = getJsonFromFile(`${"/tests/locators/"}${file}`);
    return { ...pageElementConfigAcc, [key]: elementMappings };
  },
  {},
);
