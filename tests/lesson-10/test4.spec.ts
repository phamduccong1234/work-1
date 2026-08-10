import { test, expect } from "@playwright/test";
import { MaterialBasePage, PersonalNotesPage } from "./pom/01-pom";
import { newNote } from "./data/note-data";

test("Product page", async ({ page }) => {
  const materialBasePage = new MaterialBasePage(page);
  const personalNotesPage = new PersonalNotesPage(page);

  await test.step("Go to material page", async () => {
    await materialBasePage.openMaterialPage();
  });

  await test.step("Go to Todo page", async () => {
    await materialBasePage.gotoPage(materialBasePage.personalNotePage);
  });

  await test.step("Add new tasks", async () => {
    await personalNotesPage.addNewNote(newNote);
  });

  await test.step("Find by keyword", async () => {
    await personalNotesPage.findNote("Việt Nam");
  });

  await test.step("Check all elements by keyword", async () => {
    await personalNotesPage.findNote("Quốc");
  });
});
