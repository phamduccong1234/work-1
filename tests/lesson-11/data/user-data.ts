export interface userInfo {
  name: string,
  email: string,
  password: string,
  facebook: string,
  avatar: string,
  hobbies: string,
  role: string
};

export const newUserInfo: userInfo = {
  name: "Cong Pham",
  email: "cong@example.com",
  password: "password",
  facebook: "https://facebook.com/newuser",
  avatar: "https://i.pravatar.cc/150?img=20",
  hobbies: "Reading, Coding",
  role: "user",
};