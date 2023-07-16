import { CreateUserDto } from "src/users/dto/create-user.dto";

export interface IAuthController {
  login(dto: CreateUserDto): Promise<{ token: string }>;
  registration(dto: CreateUserDto): Promise<{ token: string }>;
}
