import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreatePostDto {
  @ApiProperty({
    example: "How to choose software dev partner",
    description: "Post title",
  })
  @IsString()
  readonly title: string;

  @ApiProperty({
    example: "First of all you need ...",
    description: "Post content",
  })
  @IsString()
  readonly content: string;

  @ApiProperty({ example: "1", description: "Author id" })
  @IsString()
  readonly userId: string;
}
