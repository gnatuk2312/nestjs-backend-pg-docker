import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateRoleDto {
  @ApiProperty({ example: "ADMIN", description: "Create role" })
  @IsString()
  readonly value: string;

  @ApiProperty({
    example: "System administrator",
    description: "Role description",
  })
  @IsString()
  readonly description: string;
}
