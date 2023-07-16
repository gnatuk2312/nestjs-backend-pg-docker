import { CreateUserDto } from "src/users/dto/create-user.dto";

export interface IAuthService {
  login(dto: CreateUserDto): Promise<{ token: string }>;
  registration(dto: CreateUserDto): Promise<{ token: string }>;
}
