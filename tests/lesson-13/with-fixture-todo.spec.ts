import { expect } from "@playwright/test";
import { test } from "./fixture/fixture";

test("Product page", async ({ pages }) => {
  await test.step("Go to Todo page", async () => {
    await pages.materialPage.gotoPage(materialBasePage.cssTodoPage);
  });

  await test.step("Add new tasks", async () => {
    await todoPage.addNewTask();
  });

  await test.step("Delete task", async () => {
    await todoPage.deleteOddTask();
  });

  await test.step("Verify todo tasks", async () => {
    await todoPage.checkVisibleTodoTask(90);
    await todoPage.checkHiddenTodoTask(21);
  });
});
