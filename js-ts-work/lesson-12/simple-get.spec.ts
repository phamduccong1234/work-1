import { test, expect } from "@playwright/test";
import { TodoApiPage } from "./todo.api.page";

test("Get all todos", async ({ request }) => {
  const todoApiPage = new TodoApiPage(request);
  const responseJson = await todoApiPage.getAllTodo();

  console.log("Length: ", responseJson.todos.length);
  expect(responseJson.todos.length).toBe(16);
});

test("Get todo by id", async ({ request }) => {
  const todoApiPage = new TodoApiPage(request);
  const responseJson = await todoApiPage.getTodo(6);

  console.log(responseJson);
  expect(responseJson.todo.title).toContain("chao")
  expect(responseJson.todo.status).toContain("pending")
});
