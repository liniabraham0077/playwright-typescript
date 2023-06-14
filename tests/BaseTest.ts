import { test as baseTest } from "@playwright/test";
import { Assertions } from "./support/helpers/assertions";
import { Navigation } from "./support/helpers/navigation";
import { WebActions } from "./support/helpers/web-actions";

const test = baseTest.extend<{
  assertions: Assertions;
  navigation: Navigation;
  webActions: WebActions;
}>({
  assertions: async ({ page }, use) => {
    await use(new Assertions(page));
  },
  navigation: async ({ page }, use) => {
    await use(new Navigation(page));
  },
  webActions: async ({ page }, use) => {
    await use(new WebActions(page));
  },
});
export default test;
