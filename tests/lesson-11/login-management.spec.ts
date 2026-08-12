import { test, expect, request } from "@playwright/test";
import { APIUserManagement } from "./pom/pom-api";
import { adminInfo, userInfo } from "./data/login-data";

test("Login success", async ({ request }) => {
  const apiRequest = new APIUserManagement(request);
  const accounts = [
    { step: "Step 1", user: adminInfo },
    { step: "Step 2", user: userInfo },
  ];

  for (const account of accounts) {
    await test.step(`${account.step} : Login as ${account.user.role} successfully`, async () => {
      const response = await apiRequest.login(
        account.user.email,
        account.user.password,
      );
      const status = response.status;
      const body = response.body;

      expect(status).toBe(200);
      const tokenBody = body.data.token;
      expect(tokenBody).toBeTruthy();
    });
  }
});