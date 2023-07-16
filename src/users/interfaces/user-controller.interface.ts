import { AddRoleDto } from "../dto/add-role.dto";
import { BanUserDto } from "../dto/ban-user.dto";
import { User } from "../users.model";

export interface IUserController {
  getAll(): Promise<User[]>;
  addRole(dto: AddRoleDto): Promise<User>;
  ban(dto: BanUserDto): Promise<User>;
}
