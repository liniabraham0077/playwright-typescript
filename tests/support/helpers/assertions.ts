import type { Page } from "@playwright/test";
import { expect } from "@playwright/test";

export class Assertions {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
    // this.context = context;
  }

  async verifyPageTitle(title: string): Promise<void> {
    await expect(this.page).toHaveTitle(title);
  }

  async verifyPageTitleContains(title: string): Promise<void> {
    const pageTitle = await this.getPageTitle();
    expect(pageTitle).toContain(title);
  }

  async verifyText(
    expected: string | null,
    actual: string | null,
  ): Promise<void> {
    expect(expected).toBe(actual);
  }

  async getPageTitle(): Promise<string> {
    return await this.page.title();
  }
}
