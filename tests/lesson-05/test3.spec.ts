import { test } from "@playwright/test";

test("Bài học 3: Todo page", async ({ page }) => {
  await test.step("Go the home page", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });

  await test.step("Access into Bài học 3", async () => {
    await page.locator("//a[text()='Bài học 3: Todo page']").click();
  });

  await test.step("Add todo work", async () => {
    let count = 0;
    for (let i = 0; i <= 100; i++) {
      await page.locator("//input[@id='new-task']").fill(`Todo ${i}`);
      await page.locator("//button[@id='add-task']").click();
      count++;
    }
    console.log(count);
  });

  await test.step("Delete todo tasks with odds number", async () => {
    page.on("dialog", (dialog) => dialog.accept());
    for (let i = 1; i <= 100; i += 2) {
      await page.locator(`//button[@id='todo-${i}-delete']`).click();
    }
  });
});
