import { test as base, expect } from "@playwright/test";
import { MaterialPage } from "./pom";

const test = base.extend<{ materialPage: MaterialPage }>({
  materialPage: async ({ page }, use) => {
    const materialPage = new MaterialPage(page);
    await materialPage.navigateTo();
    await expect(materialPage.page.getByText("Tài liệu học automation test")).toBeVisible();

    await use(materialPage);
  },
});

export {test};