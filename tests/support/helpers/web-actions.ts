import { pageElementMappings } from "../../support/utilities/file-operations";
import type { Page, ElementHandle } from "@playwright/test";
export type PageMapping = Record<string, string>;

export class WebActions {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async navigateToURL(): Promise<void> {
    await this.page.goto("/");
  }

  async verifyFirstColumnTableHeader(header: string): Promise<void> {
    // const headerText = await this.WEB_TABLES_HEADER.allTextContents(); // Get all Text from WebTable Header
    // expect(headerText[0] == header).toBeTruthy(); // Verify the First Column Header here we are comparing string values
  }

  async clickElement(page: string, locator: string): Promise<void> {
    const elementIdentifier = await this.getElementLocator(page, locator);
    await this.page.click(elementIdentifier);
  }

  async inputElementValue(
    page: string,
    locator: string,
    input: string,
  ): Promise<void> {
    const elementIdentifier = await this.getElementLocator(page, locator);
    await this.page.focus(elementIdentifier);
    await this.page.fill(elementIdentifier, input);
  }

  async selectElementValue(
    elementIdentifier: string,
    option: string,
  ): Promise<void> {
    await this.page.focus(elementIdentifier);
    await this.page.selectOption(elementIdentifier, option);
  }

  async checkElement(elementIdentifier: string): Promise<void> {
    await this.page.check(elementIdentifier);
  }

  async uncheckElement(elementIdentifier: string): Promise<void> {
    await this.page.uncheck(elementIdentifier);
  }

  async scrollElementIntoView(elementIdentifier: string): Promise<void> {
    const element = this.page.locator(elementIdentifier);
    await element.scrollIntoViewIfNeeded();
  }

  async getElementLocator(page: string, element: string): Promise<string> {
    // const pageMapping: PageMapping;
    console.log(pageElementMappings[page]?.[element]);
    return pageElementMappings[page]?.[element];
  }

  waitFor = async (time: number): Promise<void> => {
    await new Promise(function (resolve) {
      setTimeout(resolve, time);
    });
  };

  async getText(page: string, locator: string): Promise<string | null> {
    const elementIdentifier = await this.getElementLocator(page, locator);
    return await this.page.textContent(elementIdentifier);
  }
}
