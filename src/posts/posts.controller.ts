import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import JwtAuthenticationGuard from "src/authentication/jwt-authentication.guard";
import CreatePostDto from "./dto/createPost.dto";
import UpdatePostDto from "./dto/updatePost.dto";
import PostsService from "./posts.service";

@Controller('posts')
export default class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  @UseGuards(JwtAuthenticationGuard)
  async createPost(@Body() post: CreatePostDto) {
    return this.postsService.createPost(post);
  }

  @Get(':id')
  async getPostById(@Param('id') id: string) {
    return this.postsService.getPostById(Number(id));
  }

  @Get()
  getAllPosts() {
    return this.postsService.getAllPosts();
  }

  @Patch(':id')
  async updatePost(@Param('id') id: string, @Body() post: UpdatePostDto ) {
    return this.postsService.updatePost(Number(id), post);
  }

  @Delete(':id')
  async deletePost(@Param('id') id: string) {
    return this.postsService.deletePost(Number(id));
  }

}