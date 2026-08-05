export interface newUser {
  username: string;
  email: string;
  genderMale: string;
  genderFemale: string;
  //   hobbiesReading: string,
  //   hobbiesTraveling: string,
  //   hobbiesCooking: string,
  hobbies: string[];
  interests: string;
  country: string;
  dob: string;
  profile: string;
  bio: string;
  favColor: string;
}

export const newUser: newUser = {
  username: "cong",
  email: "phamduccong1234@gmail.com",
  genderMale: "male",
  genderFemale: "female",
  //   hobbiesReading: "reading",
  //   hobbiesTraveling: "traveling",
  //   hobbiesCooking: "cooking",
  hobbies: ["Traveling", "Cooking"],
  interests: "sports",
  country: "uk",
  dob: "09121998",
  profile: "tests/lesson-10/data/data-test.txt",
  bio: "Cong - 28 years old - Test",
  favColor: "#744949"
};
