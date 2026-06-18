import { test } from "@playwright/test";

test("Playwright selector", async ({ page }) => {
  await page.goto("https://material.playwrightvn.com/index.html");
  await page
    .getByRole("link", { name: "Bài học 1: Register Page (có đủ các element)" })
    .click();
  const title = await page.locator("//h1[@id='self']").textContent();
  const title2 = await page
    .getByRole("heading", { name: "User Registration" })
    .textContent();

  await page.getByRole("checkbox", { name: "Traveling" }).check();
  await page.getByRole("checkbox", { name: "Cooking" }).check();
  await page.getByRole("radio", { name: "Male", exact: true }).click();

  await page.getByLabel("Username").fill("playwright");
});

test("Playwright selector 2", async ({ page }) => {
  await page.goto("https://material.playwrightvn.com/index.html");
  await page
    .getByRole("link", { name: "Bài học 2: Thực hành DOM relation" })
    .click();
  const listItems = await page
    .getByRole("listitem")
    .filter({ hasText: "mì" })
    .textContent();
  console.log(listItems);
});
