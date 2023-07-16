import { IsString } from "class-validator";

export class GetRoleByValueParamsDto {
  @IsString()
  readonly value: string;
}
