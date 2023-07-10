import { Injectable } from "@nestjs/common";

import { CreateRoleDto } from "./dto/create-role.dto";
import { RolesRepository } from "./roles.repository";

@Injectable()
export class RolesService {
  constructor(private readonly roleRepository: RolesRepository) {}

  async create(dto: CreateRoleDto) {
    return await this.roleRepository.create(dto);
  }

  async getByValue(value: string) {
    return await this.roleRepository.getByValue(value);
  }
}
