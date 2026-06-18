import { Page } from "@playwright/test";

export class MyLoginPage {
  page: Page;
  logoXpath: string = "";
  usernameXpath: string = "#user_login";
  passwordXpath: string = "#user_pass";
  rememberMeXpath: string = "";
  loginBtnXpath: string = "#wp-submit";

  constructor(page: Page) {
    this.page = page;
  }

  async fillUsername(username: string) {
    await this.page.locator(this.usernameXpath).fill(username);
  }

  async fillPassword(password: string) {
    await this.page.locator(this.passwordXpath).fill(password);
  }

  async clickLoginBtn() {
    await this.page.locator(this.loginBtnXpath).click();
  }
}
