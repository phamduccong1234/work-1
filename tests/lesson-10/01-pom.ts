import { Page, Locator } from "@playwright/test";

export class MaterialBasePage {
  page: Page;
  xpathRegisterPage: string = "//a[@href='01-xpath-register-page.html']";
  xpathProductPage: string = "//a[@href='02-xpath-product-page.html']";
  cssTodoPage: string = "//a[@href='03-xpath-todo-list.html']";
  personalNote: Locator;

  constructor(
    page: Page,
    xpathRegisterPage: string,
    xpathProductPage: string,
    cssTodoPage: string,
    personalNote: Locator,
  ) {
    this.page = page;
    this.xpathRegisterPage = xpathRegisterPage;
    this.xpathProductPage = xpathProductPage;
    this.cssTodoPage = cssTodoPage;
    this.personalNote = personalNote;
  }

  openMaterialPage() {
    return this.page.goto("https://material.playwrightvn.com/");
  }

  gotoPage(pageName: string) {
    return this.page.locator()
  }
}

export class RegisterPage extends MaterialBasePage {
  xpathUsername: string;
  xpathEmail: string;
  xpathGenderMale: string;
  xpathGenderFemale: string;

  constructor(
    xpathUsername: string,
    xpathEmail: string,
    xpathGenderMale: string,
    xpathGenderFemale: string,
    page: Page,
    xpathRegisterPage: string,
    xpathProductPage: string,
    cssTodoPage: string,
    personalNote: Locator,
  ) {
    super(page, xpathRegisterPage, xpathProductPage, cssTodoPage, personalNote);
    this.xpathUsername = xpathUsername;
    this.xpathEmail = xpathEmail;
    this.xpathGenderMale = xpathGenderMale;
    this.xpathGenderFemale = xpathGenderFemale;
  }

  fillUsername() {}

  fillEmail() {}

  checkGender(gender: string) {}
}
