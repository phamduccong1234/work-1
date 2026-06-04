import { test, expect } from "@playwright/test";

test("Expect", async ({}) => {
  expect(1 + 2).toEqual(3);

  const arr = [1, 2, 3];
  expect(arr).toHaveLength(3);

  const str = "Cong Pham";
  expect(str).toContain("Pham");
});

test("Material site - non web-first", async ({ page }) => {
  await page.goto("https://material.playwrightvn.com/019-enable-form.html");
  await page.waitForTimeout(10_000);
  const isEnabled = await page.locator("//button[@id='submitButton']").isEnabled();
  expect(isEnabled).toEqual(true);
});

test("Material site - web-first", async ({ page }) => {
  await page.goto("https://material.playwrightvn.com/019-enable-form.html");
  const btnSubmit = page.locator("//button[@id='submitButton']");
  await expect(btnSubmit).toBeEnabled({ timeout: 10_000 });
});
