
import { Controller, Body, Param, Get, Post, Delete, Patch, Injectable } from '@nestjs/common';
import { PostsService } from './posts.service'
import { CreatePostDto } from './Dtos/create-post.dto';
import { UpdatePostDto } from './Dtos/update-post.dto';
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) { }
  @Get()
 
   async findAll() {
    return await this.postsService.findAll();
}


  @Get(':id')
  async findById(@Param('id') id: string) {
    return await  this.postsService.findById(id);
  }

  @Post()
  async create(@Body() createPostDto: CreatePostDto) {
    return await this.postsService.create(createPostDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
     const deletedPost=await this.postsService.delete(id);
     return deletedPost
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
     const updatedPost= await this.postsService.update(id, updatePostDto);
     return {message:'updated successfully',updatedPost}
  }
}
