import { expect, test } from "@playwright/test";
import { MaterialPage } from "./pom";

test.describe("Material Page with POM", async () => {
  let materialPage: MaterialPage;
  test.beforeEach(async ({ page }) => {
    materialPage = new MaterialPage(page);
    await materialPage.navigateTo();
  });
  test("Todo page", async () => {
    await materialPage.page
      .getByText("Bài học 3: Todo page")
      .click();
    await expect(
      materialPage.page.getByText("To-Do List"),
    ).toBeVisible();
  });
});
