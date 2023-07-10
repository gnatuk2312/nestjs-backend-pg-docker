import { Body, Controller, Get, Param, Post } from "@nestjs/common";

import { RolesService } from "./roles.service";
import { CreateRoleDto } from "./dto/create-role.dto";

@Controller("roles")
export class RolesController {
  constructor(private readonly roleService: RolesService) {}

  @Post()
  create(@Body() dto: CreateRoleDto) {
    return this.roleService.create(dto);
  }

  @Get(":value")
  getByValue(@Param() params: any) {
    return this.roleService.getByValue(params.value);
  }
}
