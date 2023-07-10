import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";

import { User } from "./users.model";
import { CreateUserDto } from "./dto/create-user.dto";
import { Role } from "src/roles/roles.model";
import { BanUserDto } from "./dto/ban-user.dto";

@Injectable()
export class UsersRepository {
  constructor(
    @InjectModel(User) private readonly userRepository: typeof User
  ) {}

  async create(dto: CreateUserDto, role: Role) {
    const { email, password } = dto;

    const user = await this.userRepository.create({ email, password });
    await user.$set("roles", [role.id]);
    user.roles = [role];
    return user;
  }

  async getAll() {
    return await this.userRepository.findAll({ include: ["roles"] });
  }

  async getByEmail(email: string) {
    return await this.userRepository.findOne({
      where: { email },
      include: ["roles"],
    });
  }

  async getById(id: number) {
    return await this.userRepository.findByPk(id, { include: ["roles"] });
  }

  async addRole(user: User, role: Role) {
    // TODO: check what we got in this return
    return user.$add("role", role.id);
  }

  async ban(dto: BanUserDto, user: User) {
    user.banned = true;
    user.banReason = dto.banReason;

    await user.save();
    return user;
  }
}
