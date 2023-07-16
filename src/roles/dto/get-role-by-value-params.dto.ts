import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class GetRoleByValueParamsDto {
  @ApiProperty({ example: "ADMIN", description: "Get role by value" })
  @IsString()
  readonly value: string;
}
