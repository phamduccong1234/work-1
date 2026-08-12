export interface User {
  name: string;
  email: string;
  password: string;
  facebook: string;
  avatar: string;
  hobbies: string;
  role: string;
}

export interface UserResponse {
  id: number;
  name: string;
  email: string;
  facebook: string;
  avatar: string;
  hobbies: string;
  role: string;
  is_active: number;
  created_at: string;
  updated_at: string;
}

export const newUserInfo = {
  name: "Cong Pham",
  email: "cong@example.com",
  password: "password",
  facebook: "https://facebook.com/newuser",
  avatar: "https://i.pravatar.cc/150?img=20",
  hobbies: "Reading",
  role: "user",
};
