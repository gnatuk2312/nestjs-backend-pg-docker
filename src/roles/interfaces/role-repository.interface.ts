import { CreateRoleDto } from "../dto/create-role.dto";
import { Role } from "../roles.model";

export interface IRoleRepository {
  create(dto: CreateRoleDto): Promise<Role>;
  getByValue(value: string): Promise<Role>;
}
