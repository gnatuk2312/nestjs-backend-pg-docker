import { CreatePostDto } from "../dto/create-post.dto";
import { Post } from "../posts.model";

export interface IPostRepository {
  create(dto: CreatePostDto, image: string): Promise<Post>;
}
