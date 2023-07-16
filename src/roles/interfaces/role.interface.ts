import { User } from "src/users/users.model";

export interface IRole {
  id: number;
  value: string;
  description: string;
  users: User[];
}
