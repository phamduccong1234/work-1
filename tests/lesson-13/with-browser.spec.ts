import { expect } from "@playwright/test";
import { test } from "./fixture/browser-fixture";

test("Open 2 browser", async ({ pages }) => {
  await expect(
    pages.materialPage.page.getByRole("heading", {
      name: "Tài liệu học automation test",
    }),
  ).toBeVisible();

  await expect(
    pages.ecommercePage.page.getByRole("link", {
      name: "E-commerce site testing",
    }),
  ).toBeVisible();
});
