import { User } from "../users.model";
import { Role } from "src/roles/roles.model";
import { BanUserDto } from "../dto/ban-user.dto";
import { CreateUserDto } from "../dto/create-user.dto";

export interface IUserRepository {
  create(dto: CreateUserDto, role: Role): Promise<User>;
  getAll(): Promise<User[]>;
  getByEmail(email: string): Promise<User>;
  getById(id: number): Promise<User>;
  addRole(user: User, role: Role): Promise<User>;
  ban(dto: BanUserDto, user: User): Promise<User>;
}
