import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcryptjs";

import { CreateUserDto } from "src/users/dto/create-user.dto";
import { User } from "src/users/users.model";
import { UsersService } from "src/users/users.service";
import { IAuthService } from "./interfaces/auth-service.interface";

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  public async login(dto: CreateUserDto): Promise<{ token: string }> {
    const user = await this.validateUser(dto);
    return this.generateToken(user);
  }

  public async registration(dto: CreateUserDto): Promise<{ token: string }> {
    const { email, password } = dto;
    const candidate = await this.userService.getByEmail(email);
    if (candidate) {
      throw new HttpException("User already exists", HttpStatus.BAD_REQUEST);
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await this.userService.create({
      email,
      password: hashPassword,
    });
    return this.generateToken(user);
  }

  private async generateToken(user: User): Promise<{ token: string }> {
    const { id, email, roles } = user;
    const payload = { id, email, roles };

    return { token: this.jwtService.sign(payload) };
  }

  private async validateUser(dto: CreateUserDto): Promise<User> {
    const user = await this.userService.getByEmail(dto.email);
    const passwordEquals = await bcrypt.compare(dto.password, user.password);
    if (user && passwordEquals) return user;

    throw new UnauthorizedException({ message: "Invalid user credentials" });
  }
}
