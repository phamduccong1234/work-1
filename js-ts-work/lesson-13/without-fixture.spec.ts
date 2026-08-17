import { expect, test } from "@playwright/test";
import { MaterialPage } from "./pom";

test.describe("Material Page with POM", async () => {
  let materialPage: MaterialPage;
  test.beforeEach(async ({ page }) => {
    materialPage = new MaterialPage(page);
    await materialPage.navigateTo();
  });
  test("Registration page", async () => {
    await materialPage.page
      .getByText("Bài học 1: Register Page (có đủ các element)")
      .click();
    await expect(
      materialPage.page.getByText("User Registration"),
    ).toBeVisible();
  });

  test("Product page", async () => {
    await materialPage.page.getByText("Bài học 2: Product page").click();
    await expect(
      materialPage.page.getByText("Simple E-commerce"),
    ).toBeVisible();
  });
});
