import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";

import { Role } from "./roles.model";
import { CreateRoleDto } from "./dto/create-role.dto";

@Injectable()
export class RolesRepository {
  constructor(
    @InjectModel(Role) private readonly roleRepository: typeof Role
  ) {}

  async create(dto: CreateRoleDto) {
    const { value, description } = dto;
    return await this.roleRepository.create({ value, description });
  }

  async getByValue(value: string) {
    return await this.roleRepository.findOne({ where: { value } });
  }
}
