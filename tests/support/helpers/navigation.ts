import type { Page } from "@playwright/test";
import test from "../../BaseTest";
import defineConfig from "../../../playwright.config";

export class Navigation {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async navigateToURL(path: string): Promise<void> {
    await test.step(`navigating to url ${defineConfig.use?.baseURL}${path}`, async () => {
      await this.page.goto(path);
    });
  }
}
