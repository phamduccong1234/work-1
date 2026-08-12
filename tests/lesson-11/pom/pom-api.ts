import { APIRequestContext } from "@playwright/test";
import { User } from "../data/user-data";

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
  }

  async createUser(userInfo: User, token: string) {
    const response = await this.request.post(`${this.baseUrl}/users.php`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: userInfo,
    });
    return {
      status: response.status(),
      body: await response.json(),
    };
  }

  async getUser(token: string) {
    const response = await this.request.get(`${this.baseUrl}/users.php`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return {
      status: response.status(),
      body: await response.json(),
    };
  }

  async deleteUser(token: string, userId: number) {
    const response = await this.request.delete(`${this.baseUrl}/users.php`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        id: userId,
      },
    });
    return {
      status: response.status(),
      body: await response.json(),
    };
  }
}
