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

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService
  ) {}

  async login(userDto: CreateUserDto) {
    const user = await this.validateUser(userDto);
    return this.generateToken(user);
  }

  async registration(userDto: CreateUserDto) {
    const { email, password } = userDto;
    const candidate = await this.userService.getUserByEmail(email);
    if (candidate) {
      throw new HttpException(
        `User: ${email} already exists`,
        HttpStatus.BAD_REQUEST
      );
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await this.userService.createUser({
      email,
      password: hashPassword,
    });
    return this.generateToken(user);
  }

  private async generateToken(user: User) {
    const { id, email, roles } = user;
    const payload = { id, email, roles };

    return { token: this.jwtService.sign(payload) };
  }

  private async validateUser(userDto: CreateUserDto) {
    const user = await this.userService.getUserByEmail(userDto.email);
    const passwordEquals = await bcrypt.compare(
      userDto.password,
      user.password
    );
    if (user && passwordEquals) return user;

    throw new UnauthorizedException({ message: "Invalid user credentials" });
  }
}
