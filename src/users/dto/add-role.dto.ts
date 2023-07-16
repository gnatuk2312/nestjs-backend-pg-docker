import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class AddRoleDto {
  @ApiProperty({ example: "ADMIN", description: "Role value/variant" })
  @IsString()
  readonly value: string;

  @ApiProperty({ example: "1", description: "User id" })
  @IsNumber()
  readonly userId: number;
}
