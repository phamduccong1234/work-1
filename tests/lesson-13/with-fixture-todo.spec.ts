import { test } from "./fixture/fixture";

test("Todo page", async ({ pages }) => {
  await test.step("Go to Todo page", async () => {
    await pages.materialPage.gotoPage(pages.materialPage.cssTodoPage);
  });

  await test.step("Add new tasks", async () => {
    await pages.todoPage.addNewTask();
  });

  await test.step("Delete task", async () => {
    await pages.todoPage.deleteOddTask();
  });

  await test.step("Verify todo tasks", async () => {
    await pages.todoPage.checkVisibleTodoTask(90);
    await pages.todoPage.checkHiddenTodoTask(21);
  });
});
