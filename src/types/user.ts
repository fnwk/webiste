import { Post } from "./posts";

export type User = {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
};

export type CreateUserBody = Omit<
  User,
  "id" | "createdAt" | "updatedAt" | "posts"
>;

export type UpdateUserBody = Omit<User, "createdAt" | "updatedAt" | "posts">;
