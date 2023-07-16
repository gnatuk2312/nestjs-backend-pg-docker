import { CreateRoleDto } from "../dto/create-role.dto";
import { GetRoleByValueParamsDto } from "../dto/get-role-by-value-params.dto";
import { Role } from "../roles.model";

export interface IRoleController {
  create(dto: CreateRoleDto): Promise<Role>;
  getByValue(params: GetRoleByValueParamsDto): Promise<Role>;
}
