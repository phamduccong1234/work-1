import { test as base, expect } from "@playwright/test";
import {
  MaterialPage,
  PersonalNotesPage,
  ProductPage,
  RegisterPage,
  TodoPage,
} from "../pom/pom";

type Pages = {
  materialPage: MaterialPage;
  registerPage: RegisterPage
  productPage: ProductPage;
  todoPage: TodoPage;
  personalNotesPage: PersonalNotesPage;
};

const test = base.extend<{ pages: Pages }>({
  pages: async ({ page }, use) => {
    const pages = {
      materialPage: new MaterialPage(page),
      registerPage: new RegisterPage(page),
      productPage: new ProductPage(page),
      todoPage: new TodoPage(page),
      personalNotesPage: new PersonalNotesPage(page),
    };

    await pages.materialPage.openMaterialPage();
    await pages.materialPage.checkHeaderVisible();

    await use(pages);

    console.log("End of test");
  },
});

export { test };
