import { test, expect, request } from "@playwright/test";
import { APIUserManagement } from "./pom/pom-api";
import { adminInfo } from "./data/login-data";
import { UserResponse, newUserInfo } from "./data/user-data";

test.describe("User Management", async () => {
  let token: string;
  let userId: number;

  test.beforeEach(async ({ request }) => {
    const apiRequest = new APIUserManagement(request);
    const response = await apiRequest.login(
      adminInfo.email,
      adminInfo.password,
    );
    const status = response.status;
    const body = response.body;

    expect(status).toBe(200);
    token = body.data.token;
    console.log(token);
  });

  test.afterEach(async ({ request }) => {
    const apiRequest = new APIUserManagement(request);
    const response = await apiRequest.deleteUser(token, userId);

    expect(response.status).toBe(200);
    expect(response.body).toBeTruthy();
    console.log(response.body);

    expect(response.body.deleted.message).toBe("User deleted successfully");
  });

  test("Create user", async ({ request }) => {
    const apiRequest = new APIUserManagement(request);

    await test.step("Step create user", async () => {
      const response = await apiRequest.createUser(newUserInfo, token);

      console.log("Status: ", response.status);
      console.log("Body: ", response.body);

      expect(response.status).toBe(201);
      expect(response.body).toBeTruthy();

      userId = response.body.user.id;
    });

    await test.step("Step get all user", async () => {
      const response = await apiRequest.getUser(token);

      expect(response.status).toBe(200);
      expect(response.body).toBeTruthy();
      console.log(response.body);

      const users: UserResponse[] = response.body.users;
      const createdUser = users.find((user) => user.id === userId);
      expect(createdUser).toBeTruthy();
      expect(createdUser).toMatchObject({
        id: userId,
        name: newUserInfo.name,
        email: newUserInfo.email,
      });
    });
  });
});
