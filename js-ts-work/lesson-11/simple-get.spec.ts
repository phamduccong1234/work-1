import { test, expect } from "@playwright/test";

test("Get all todos", async ({ request }) => {
  const response = await request.get(
    "https://material.playwrightvn.com/api/todo-app/v1/todos.php",
  );
  const responseJson = await response.json();
  console.log(responseJson);

  expect(response.status()).toBe(200);
});
