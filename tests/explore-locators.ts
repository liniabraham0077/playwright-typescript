import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://bookcart.azurewebsites.net/");
  await expect(page).toHaveTitle("BookCart");
  await page.getByText("Login").click();
  await page.getByLabel("Username").fill("ortoni");
  await page.getByLabel("Password").fill("pass1234");
  await Promise.all([
    page.waitForNavigation(),
    page.locator("button.mat-primary").click(),
  ]);
  await page
    .getByPlaceholder("Search books or authors")
    .type("The Hate U Give");
  console.log(`cwd is ${process.cwd()}`);
  await page.screenshot({
    path: `${process.cwd()}/screenshots/screenshot.png`,
    fullPage: true,
  });
  const options = page.getByRole("option");
  await options.getByText("The Hate U Give").click();
  await page.screenshot({
    path: `${process.cwd()}/screenshots/select-book.png`,
    fullPage: true,
  });
  await page.getByAltText("Book cover image").click();
  await page.screenshot({
    path: `${process.cwd()}/screenshots/book-details.png`,
    fullPage: true,
  });
  await page.getByText("Add to Cart").click();
  await page.screenshot({
    path: `${process.cwd()}/screenshots/added-to-cart.png`,
    fullPage: true,
  });
  await page.pause();
});

// test("get started link", async ({ page }) => {
//   await page.goto("https://playwright.dev/");

//   // Click the get started link.
//   await page.getByRole("link", { name: "Get started" }).click();

//   // Expects the URL to contain intro.
//   await expect(page).toHaveURL(/.*intro/);
// });
