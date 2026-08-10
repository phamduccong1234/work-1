import { test, expect } from "@playwright/test";
import { MaterialBasePage, TodoPage } from "./pom/01-pom";

test("Product page", async ({ page }) => {
  const materialBasePage = new MaterialBasePage(page);
  const todoPage = new TodoPage(page);

  await test.step("Go to material page", async () => {
    await materialBasePage.openMaterialPage();
  });

  await test.step("Go to Todo page", async () => {
    await materialBasePage.gotoPage(materialBasePage.cssTodoPage);
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
