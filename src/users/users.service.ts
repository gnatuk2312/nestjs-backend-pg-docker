import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from "@nestjs/common";

import { CreateUserDto } from "./dto/create-user.dto";
import { RolesService } from "src/roles/roles.service";
import { AddRoleDto } from "./dto/add-role.dto";
import { BanUserDto } from "./dto/ban-user.dto";
import { UsersRepository } from "./users.repository";

@Injectable()
export class UsersService {
  constructor(
    private readonly userRepository: UsersRepository,
    private readonly roleService: RolesService
  ) {}

  async create(dto: CreateUserDto) {
    const role = await this.roleService.getByValue("USER");
    return await this.userRepository.create(dto, role);
  }

  async getAll() {
    return await this.userRepository.getAll();
  }

  async getByEmail(email: string) {
    return await this.userRepository.getByEmail(email);
  }

  async addRole(dto: AddRoleDto) {
    const user = await this.userRepository.getById(dto.userId);
    const role = await this.roleService.getByValue(dto.value);

    if (role && user) {
      return await this.userRepository.addRole(user, role);
    }

    throw new HttpException("User or Role not found", HttpStatus.NOT_FOUND);
  }

  async ban(dto: BanUserDto) {
    const user = await this.userRepository.getById(dto.userId);

    if (!user) {
      throw new HttpException("User not found", HttpStatus.NOT_FOUND);
    }

    return await this.userRepository.ban(dto, user);
  }
}
