import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { MongooseModule } from '@nestjs/mongoose';
import {Post,PostSchema} from '../schemas/post.schema'

@Module({
  imports:[ MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }])],
  providers: [PostsService],
  controllers: [PostsController]
  ,exports:[PostsService]
})

export class PostsModule {}
