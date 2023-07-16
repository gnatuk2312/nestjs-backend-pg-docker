import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";

import { Role } from "./roles.model";
import { CreateRoleDto } from "./dto/create-role.dto";
import { IRoleRepository } from "./interfaces/role-repository.interface";

@Injectable()
export class RolesRepository implements IRoleRepository {
  constructor(
    @InjectModel(Role) private readonly roleRepository: typeof Role
  ) {}

  public async create(dto: CreateRoleDto): Promise<Role> {
    const { value, description } = dto;
    return await this.roleRepository.create({ value, description });
  }

  public async getByValue(value: string): Promise<Role> {
    return await this.roleRepository.findOne({ where: { value } });
  }
}
