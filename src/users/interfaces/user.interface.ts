import { Post } from "src/posts/posts.model";
import { Role } from "src/roles/roles.model";

export interface IUser {
  id: number;
  email: string;
  password: string;
  banned: boolean;
  banReason: string;
  roles: Role[];
  posts: Post[];
}
