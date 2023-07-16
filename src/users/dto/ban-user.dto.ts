import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class BanUserDto {
  @ApiProperty({ example: "1", description: "User id" })
  @IsNumber()
  readonly userId: number;

  @ApiProperty({ example: "Hooligan", description: "Reason of the ban" })
  @IsString()
  readonly banReason: string;
}
