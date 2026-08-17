import { expect } from "@playwright/test";
import { test } from "./fixture";

test.describe("Material Page with POM", async () => {
  test("Todo page", async ({ materialPage }) => {
    await materialPage.page.getByText("Bài học 3: Todo page").click();
    await expect(materialPage.page.getByText("To-Do List")).toBeVisible();
  });
});
