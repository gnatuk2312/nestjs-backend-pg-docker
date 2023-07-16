import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";

import { User } from "./users.model";
import { CreateUserDto } from "./dto/create-user.dto";
import { Role } from "src/roles/roles.model";
import { BanUserDto } from "./dto/ban-user.dto";
import { IUserRepository } from "./interfaces/user-repository.interface";
import { IUser } from "./interfaces/user.interface";

@Injectable()
export class UsersRepository implements IUserRepository {
  constructor(
    @InjectModel(User) private readonly userRepository: typeof User
  ) {}

  public async create(dto: CreateUserDto, role: Role): Promise<User> {
    const { email, password } = dto;

    const user = await this.userRepository.create({ email, password });
    await user.$set("roles", [role.id]);
    user.roles = [role];
    return user;
  }

  public async getAll(): Promise<User[]> {
    return await this.userRepository.findAll({ include: ["roles"] });
  }

  public async getByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne({
      where: { email },
      include: ["roles"],
    });
  }

  public async getById(id: number): Promise<User> {
    return await this.userRepository.findByPk(id, { include: ["roles"] });
  }

  public async addRole(user: User, role: Role): Promise<User> {
    await user.$add("role", role.id);
    return user;
  }

  public async ban(dto: BanUserDto, user: User): Promise<User> {
    user.banned = true;
    user.banReason = dto.banReason;

    await user.save();
    return user;
  }
}
