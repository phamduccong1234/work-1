import { test } from "./fixture/fixture";
import { newNote } from "./data/note-data";

test("Personal Notes page", async ({ pages }) => {
  await test.step("Go to Personal Notes page", async () => {
    await pages.materialPage.gotoPage(pages.materialPage.personalNotePage);
  });

  await test.step("Add new tasks", async () => {
    await pages.personalNotesPage.addNewNote(newNote);
  });

  await test.step("Find by keyword", async () => {
    await pages.personalNotesPage.findNote("Việt Nam");
  });

  await test.step("Check all elements by keyword", async () => {
    await pages.personalNotesPage.findNote("Quốc");
  });
});
