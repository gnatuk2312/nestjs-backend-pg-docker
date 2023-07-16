import { Body, Controller, Param, Post, UsePipes } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { CreateUserDto } from "src/users/dto/create-user.dto";
import { AuthService } from "./auth.service";
import { IAuthController } from "./interfaces/auth-controller.interface";

@ApiTags("Authorization")
@Controller("auth")
export default class AuthController implements IAuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("/login")
  login(@Body() userDto: CreateUserDto) {
    return this.authService.login(userDto);
  }

  @Post("/registration")
  registration(@Body() userDto: CreateUserDto) {
    return this.authService.registration(userDto);
  }
}
