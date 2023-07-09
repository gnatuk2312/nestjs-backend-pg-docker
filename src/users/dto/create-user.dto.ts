import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
  @ApiProperty({ example: "hnat@gmail.com", description: "unique email" })
  @IsString({ message: "email should be a string" })
  @IsEmail({}, { message: "email is not valid" })
  readonly email: string;

  @ApiProperty({ example: "12345678", description: "password" })
  @IsString({ message: "password should be a string" })
  @Length(4, 16, { message: "password should be min 4 max 16 symbols" })
  readonly password: string;
}
