import { test } from "@playwright/test";

test("Request method POST", async ({ request }) => {
  const baseURL = "https://material.playwrightvn.com/api/user-management/v1";

  // Login -> token
  const loginResponse = await request.post(`${baseURL}/login.php`, {
    data: {
      email: "admin@example.com",
      password: "password",
    },
  });

  const loginResponseJSON = await loginResponse.json();
  const token = loginResponseJSON.data.token;

  // call api with token
  const userResponse = await request.post(`${baseURL}/users.php`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const userResponseJSON = await userResponse.json();
  console.log(userResponseJSON);
});
