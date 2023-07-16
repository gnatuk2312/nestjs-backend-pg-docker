import { Body, Controller, Param, Post, UsePipes } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

import { CreateUserDto } from "src/users/dto/create-user.dto";
import { AuthService } from "./auth.service";
import { IAuthController } from "./interfaces/auth-controller.interface";

@ApiTags("Authorization")
@Controller("auth")
export default class AuthController implements IAuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: "Login" })
  @ApiResponse({ status: 200 })
  @Post("/login")
  login(@Body() dto: CreateUserDto): Promise<{ token: string }> {
    return this.authService.login(dto);
  }

  @ApiOperation({ summary: "Registration" })
  @ApiResponse({ status: 200 })
  @Post("/registration")
  registration(@Body() dto: CreateUserDto): Promise<{ token: string }> {
    return this.authService.registration(dto);
  }
}
