import { test } from "@playwright/test";

test("Bài học 2: Product Page", async ({ page }) => {
  await test.step("Go the home page", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });

  await test.step("Access into Bài học 2", async () => {
    await page.locator("//a[text()='Bài học 2: Product page']").click();
  });

  await test.step("Add product 1", async () => {
    await page.locator("//button[@data-product-id='1']").dblclick();
  });

  await test.step("Add product 2", async () => {
    await page
      .locator("//button[@data-product-id='2']")
      .click({ clickCount: 3 });
  });

  await test.step("Add product 3", async () => {
    await page.locator("//button[@data-product-id='3']").click();
  });
});
