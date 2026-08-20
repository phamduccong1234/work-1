import { expect } from "@playwright/test";
import { test } from "./fixture/fixture";
import { newUser } from "./data/register-data";

test("Register page", async ({ pages }) => {
  await test.step("Go to Register page", async () => {
    await pages.materialPage.gotoPage(pages.materialPage.xpathRegisterPage);
  });

  await test.step("Input user information", async () => {
    await pages.registerPage.fillUsername(newUser.username);
    await pages.registerPage.fillEmail(newUser.email);
    await pages.registerPage.checkGender(newUser.genderMale);
    await pages.registerPage.checkHobbies(newUser.hobbies);
    await pages.registerPage.selectInterests(newUser.interests);
    await pages.registerPage.selectCountry(newUser.country);
    await pages.registerPage.fillDob(newUser.dob);
    await pages.registerPage.uploadProfile(newUser.profile);
    await pages.registerPage.fillBio(newUser.bio);
    await pages.registerPage.chooseRating();
    await pages.registerPage.fillFavColor(newUser.favColor);
    await expect(await pages.registerPage.hoverTooltip()).toBe(
      "Subscribe to our newsletter for updates",
    );
    await pages.registerPage.checkNewsLetter();
    await pages.registerPage.clickSlider();
    await pages.registerPage.chooseStarRating();
    await pages.registerPage.clickBtnRegister();
  });

  await test.step("Verify user information", async () => {
    const userInfo = await pages.registerPage.verifyUserInfo();
    await expect(userInfo).toContainText(
      `${newUser.username}`,
    );
    await expect(userInfo).toContainText(
      `${newUser.email}`,
    );
    await expect(userInfo).toContainText(
      `Gender: ${newUser.genderMale}`,
    );
    await expect(userInfo).toContainText(
      `Hobbies: ${newUser.hobbies.map((h) => h.toLowerCase()).join(", ")}`,
    );
    await expect(userInfo).toContainText(
      `Country: ${newUser.country}`,
    );
    await expect(userInfo).toContainText(
      `Date of Birth: ${pages.registerPage.formatDob(newUser.dob)}`,
    );
    await expect(userInfo).toContainText(
      `Biography: ${newUser.bio}`,
    );
    await expect(userInfo).toContainText(
      `Rating: ${await pages.registerPage.chooseRating()}`,
    );
    await expect(userInfo).toContainText(
      `Favorite Color: ${newUser.favColor}`,
    );
    await expect(userInfo).toContainText(
      `Newsletter: ${await pages.registerPage.checkNewsLetter() ? "Yes" : "No"}`,
    );
    await expect(userInfo).toContainText(
      `Enable Feature: ${await pages.registerPage.clickSlider() ? "Yes" : "No"}`,
    );
    await expect(userInfo).toContainText(
      `Star Rating: ${await pages.registerPage.chooseStarRating()}⭐`,
    );
  });
});
