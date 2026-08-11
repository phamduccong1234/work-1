export interface loginInfo {
  email: string;
  password: string;
  role: string;
}

export const adminInfo: loginInfo = {
  email: "admin@example.com",
  password: "password",
  role: "admin"
};

export const userInfo: loginInfo = {
  email: "john@example.com",
  password: "password",
  role: "user"
};
