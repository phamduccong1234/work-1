import { test, expect } from '@playwright/test';
import { MaterialBasePage, RegisterPage } from './pom/01-pom';
import { newUser } from './data/register-data';

test("Register page", async ({ page }) => {
  const materialBasePage = new MaterialBasePage(page);
  const registerPage = new RegisterPage(page);

  await test.step("Go to material page", async () => {
    await materialBasePage.openMaterialPage();
  });

  await test.step("Go to Register page", async () => {
    await materialBasePage.gotoPage(materialBasePage.xpathRegisterPage);
  });

  await test.step("Input user information", async () => {
    await registerPage.fillUsername(newUser.username);
    await registerPage.fillEmail(newUser.email);
    await registerPage.checkGender(newUser.genderMale);
    await registerPage.checkHobbies(newUser.hobbies);
    await registerPage.selectInterests(newUser.interests);
    await registerPage.selectCountry(newUser.country);
    await registerPage.fillDob(newUser.dob);
    await registerPage.uploadProfile(newUser.profile);
    await registerPage.fillBio(newUser.bio);
    await registerPage.chooseRating();
    await registerPage.fillFavColor(newUser.favColor);
    await expect(await registerPage.hoverTooltip()).toBe("Subscribe to our newsletter for updates");
    aw
  });
});