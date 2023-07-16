import { Body, Controller, Get, Param, Post } from "@nestjs/common";

import { RolesService } from "./roles.service";
import { CreateRoleDto } from "./dto/create-role.dto";
import { GetRoleByValueParamsDto } from "./dto/get-role-by-value-params.dto";
import { Role } from "./roles.model";
import { IRoleController } from "./interfaces/role-controller.interface";

@Controller("roles")
export class RolesController implements IRoleController {
  constructor(private readonly roleService: RolesService) {}

  @Post()
  public create(@Body() dto: CreateRoleDto): Promise<Role> {
    return this.roleService.create(dto);
  }

  @Get(":value")
  public getByValue(@Param() params: GetRoleByValueParamsDto): Promise<Role> {
    return this.roleService.getByValue(params.value);
  }
}
