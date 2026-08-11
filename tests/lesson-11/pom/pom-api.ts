import { APIRequestContext } from "@playwright/test";
import { userInfo } from "../data/user-data";

export class APIUserManagement {
  request: APIRequestContext;
  baseUrl: string = "https://material.playwrightvn.com/api/user-management/v1";

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async login(email: string, password: string) {
    const response = await this.request.post(`${this.baseUrl}/login.php`, {
      data: {
        email: email,
        password: password,
      },
    });
    return {
      status: response.status(),
      body: await response.json(),
    };
  };

  async createUser(userInfo: userInfo, token: string){
    const response = await this.request.post(`${this.baseUrl}/users.php`, {
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: userInfo
    });
    return {
        status: response.status();
        body: await response.json();
    }
  }
}
