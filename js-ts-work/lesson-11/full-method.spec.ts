import { request, test } from "@playwright/test";

test.describe("Full method API", async () => {
  let id: any;

  test("Create todo", async ({ request }) => {
    // Lay ra id
    const response = await request.post(
      "https://material.playwrightvn.com/api/todo-app/v1/todo.php",
      {
        data: {
          title: "Cong Pham",
          description: "Better Life",
          status: "in_progress",
          priority: "medium",
          due_date: "2026-08-11 12:00:00",
          user_id: 1,
        },
      },
    );
    const responseJson = await response.json();
    console.log(responseJson);

    // Luu lai
    id = responseJson.todo.id;
  });

  test("Delete todo", async ({ request }) => {
    const response = await request.delete(
      "https://material.playwrightvn.com/api/todo-app/v1/todo.php",
      {
        data: {
          id: id
        },
      },
    );
    const responseJson = await response.json();
    console.log(responseJson);
  });
});
