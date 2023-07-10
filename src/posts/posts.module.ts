import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";

import { PostsController } from "./posts.controller";
import { PostsService } from "./posts.service";
import { PostsRepository } from "./posts.repository";
import { User } from "src/users/users.model";
import { Post } from "./posts.model";
import { FilesModule } from "src/files/files.module";

@Module({
  providers: [PostsService, PostsRepository],
  controllers: [PostsController],
  imports: [SequelizeModule.forFeature([Post, User]), FilesModule],
})
export class PostsModule {}
