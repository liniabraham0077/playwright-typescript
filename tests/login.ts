import test from "../tests/BaseTest";
import { getConfig } from "./configuration/configs/get-config";
import { logger } from "./support/utilities/logger";
import { pageElementMappings } from "./support/utilities/file-operations";

test("has title", async ({ navigation, assertions, webActions }) => {
  console.log(pageElementMappings.login.username);
  console.log(typeof pageElementMappings.login.username);

  // console.log(login)
  await navigation.navigateToURL("/loginpagePractise/");
  await assertions.verifyPageTitle("LoginPage Practise | Rahul Shetty Academy");
  await webActions.inputElementValue("login", "username", "rahulshettyacademy");
  await webActions.inputElementValue("login", "password", "learning123");
  await webActions.clickElement("login", "signinBtn");
  const actualError: string | null = await webActions.getText(
    "login",
    "errorBanner",
  );
  logger.info(actualError);
  await assertions.verifyText("Incorrect username/password.", actualError);
  // await webActions.waitFor(20000);
  // const config = getConfig({ ENV: `${process.env.ENV}` });
  // logger.info("config is ");
  // logger.debug("debug is ");
  // logger.debug(config.environment);
  // logger.info(config.url);
  // logger.info(config.logLevel);
});

// test("has title", async () => {
//   const config = getConfig({ ENV: "local" });
//   console.log("config is ");
//   console.log(config.environment);
// });
