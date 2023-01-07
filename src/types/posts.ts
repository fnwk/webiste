import { User } from "./user";

export type Author = Omit<User, "posts" | "createdAt" | "updatedAt">;

export type Post = {
  id: string;
  title: string;
  content: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
  author: Author;
};

export type CreatePostBody = Omit<Post, "createdAt" | "updatedAt">;
export type UpdatePostBody = Omit<Post, "createdAt" | "updatedAt">;
