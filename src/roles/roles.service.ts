import { Injectable } from "@nestjs/common";

import { CreateRoleDto } from "./dto/create-role.dto";
import { RolesRepository } from "./roles.repository";
import { IRoleService } from "./interfaces/role-service.interface";
import { Role } from "./roles.model";

@Injectable()
export class RolesService implements IRoleService {
  constructor(private readonly roleRepository: RolesRepository) {}

  public async create(dto: CreateRoleDto): Promise<Role> {
    return await this.roleRepository.create(dto);
  }

  public async getByValue(value: string): Promise<Role> {
    return await this.roleRepository.getByValue(value);
  }
}
