import { CreatePostDto } from "../dto/create-post.dto";
import { Post } from "../posts.model";

export interface IPostService {
  create(dto: CreatePostDto, image: any): Promise<Post>;
}
