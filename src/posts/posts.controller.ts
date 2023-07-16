import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";

import { CreatePostDto } from "./dto/create-post.dto";
import { PostsService } from "./posts.service";
import { IPostController } from "./interfaces/post-controller.interface";
import { Post as PostModel } from "./posts.model";

@Controller("posts")
export class PostsController implements IPostController {
  constructor(private readonly postService: PostsService) {}

  @Post()
  @UseInterceptors(FileInterceptor("image"))
  public create(
    @Body() dto: CreatePostDto,
    @UploadedFile() image: any
  ): Promise<PostModel> {
    return this.postService.create(dto, image);
  }
}
