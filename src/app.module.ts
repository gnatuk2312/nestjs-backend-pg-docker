import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";

import { UsersModule } from "./users/users.module";

@Module({
  controllers: [],
  providers: [],
  imports: [
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "12345678",
      database: "nestjs-backend-pg-docker",
      models: [],
      autoLoadModels: true,
    }),
    UsersModule,
  ],
})
export class AppModule {}
