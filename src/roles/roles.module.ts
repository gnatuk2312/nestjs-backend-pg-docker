import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";

import { RolesController } from "./roles.controller";
import { RolesService } from "./roles.service";
import { RolesRepository } from "./roles.repository";
import { Role } from "./roles.model";
import { User } from "src/users/users.model";
import { UserRoles } from "./user-roles.model";

@Module({
  providers: [RolesService, RolesRepository],
  controllers: [RolesController],
  imports: [SequelizeModule.forFeature([Role, User, UserRoles])],
  exports: [RolesService],
})
export class RolesModule {}
