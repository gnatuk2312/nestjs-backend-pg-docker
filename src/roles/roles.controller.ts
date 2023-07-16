import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

import { RolesService } from "./roles.service";
import { CreateRoleDto } from "./dto/create-role.dto";
import { GetRoleByValueParamsDto } from "./dto/get-role-by-value-params.dto";
import { Role } from "./roles.model";
import { IRoleController } from "./interfaces/role-controller.interface";

@ApiTags("Roles")
@Controller("roles")
export class RolesController implements IRoleController {
  constructor(private readonly roleService: RolesService) {}

  @ApiOperation({ summary: "Create Role" })
  @ApiResponse({ status: 200, type: Role })
  @Post()
  public create(@Body() dto: CreateRoleDto): Promise<Role> {
    return this.roleService.create(dto);
  }

  @ApiOperation({ summary: "Get Role By Value" })
  @ApiResponse({ status: 200, type: Role })
  @Get(":value")
  public getByValue(@Param() params: GetRoleByValueParamsDto): Promise<Role> {
    return this.roleService.getByValue(params.value);
  }
}
