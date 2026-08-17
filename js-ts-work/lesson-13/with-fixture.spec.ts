import { expect } from "@playwright/test";
import { test } from "./fixture";

test.describe("Material Page with POM", async () => {
  test("Registration page", async ({ materialPage }) => {
    await materialPage.page
      .getByText("Bài học 1: Register Page (có đủ các element)")
      .click();
    await expect(
      materialPage.page.getByText("User Registration"),
    ).toBeVisible();
  });

  test("Product page", async ({ materialPage }) => {
    await materialPage.page.getByText("Bài học 2: Product page").click();
    await expect(
      materialPage.page.getByText("Simple E-commerce"),
    ).toBeVisible();
  });
});
