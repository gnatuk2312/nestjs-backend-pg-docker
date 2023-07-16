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
import { IUserService } from "./interfaces/user-service.interface";
import { User } from "./users.model";

@Injectable()
export class UsersService implements IUserService {
  constructor(
    private readonly userRepository: UsersRepository,
    private readonly roleService: RolesService
  ) {}

  public async create(dto: CreateUserDto): Promise<User> {
    const role = await this.roleService.getByValue("USER");
    return await this.userRepository.create(dto, role);
  }

  public async getAll(): Promise<User[]> {
    return await this.userRepository.getAll();
  }

  public async getByEmail(email: string): Promise<User> {
    return await this.userRepository.getByEmail(email);
  }

  public async addRole(dto: AddRoleDto): Promise<User> {
    const user = await this.userRepository.getById(dto.userId);
    const role = await this.roleService.getByValue(dto.value);

    if (role && user) {
      return await this.userRepository.addRole(user, role);
    }

    throw new HttpException("User or Role not found", HttpStatus.NOT_FOUND);
  }

  public async ban(dto: BanUserDto): Promise<User> {
    const user = await this.userRepository.getById(dto.userId);

    if (!user) {
      throw new HttpException("User not found", HttpStatus.NOT_FOUND);
    }

    return await this.userRepository.ban(dto, user);
  }
}
