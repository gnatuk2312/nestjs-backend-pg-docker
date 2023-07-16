import { User } from "src/users/users.model";

export interface IPost {
  id: number;
  title: string;
  content: string;
  image: string;
  userId: number;
  author: User;
}
