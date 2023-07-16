import { AddRoleDto } from "../dto/add-role.dto";
import { BanUserDto } from "../dto/ban-user.dto";
import { CreateUserDto } from "../dto/create-user.dto";
import { User } from "../users.model";

export interface IUserService {
  create(dto: CreateUserDto): Promise<User>;
  getAll(): Promise<User[]>;
  getByEmail(email: string): Promise<User>;
  addRole(dto: AddRoleDto): Promise<User>;
  ban(dto: BanUserDto): Promise<User>;
}
