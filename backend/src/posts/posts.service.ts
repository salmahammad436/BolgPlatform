import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post, PostDocument } from 'src/schemas/post.schema';
import { CreatePostDto } from './Dtos/create-post.dto';
import { UpdatePostDto } from './Dtos/update-post.dto'
import { NotFoundException } from '@nestjs/common';


@Injectable()
export class PostsService {
    constructor(@InjectModel(Post.name) private PostModel: Model<PostDocument>) { }
    async findAll(): Promise<PostDocument[] | null> {
        const posts = await this.PostModel.find().sort({ createdAt: -1 });
        if (!posts) {
            throw new NotFoundException(`Posts failed to get`);
        }
      
        return posts;
    }
    


    async findById(id: string): Promise<PostDocument | null> {
        const post = await this.PostModel.findById(id).exec()
        if (!post) {
            throw new NotFoundException('not found')
        }
        return post
    }

    async create(createPostDto: CreatePostDto): Promise<PostDocument> {
        const createdPost = new this.PostModel(createPostDto);
        const savedPost = await createdPost.save();
        if (!savedPost) {
            throw new NotFoundException(`Post failed to save`);
        }
        return savedPost;
    }


    async delete(id: string): Promise<PostDocument | null> {
        return this.PostModel.findByIdAndDelete(id).exec()
    }

    async update(id: string, updatePostDto: UpdatePostDto): Promise<PostDocument | null> {
        const updatedPost = await this.PostModel.findByIdAndUpdate(id, updatePostDto, { new: true }).exec();
        if (!updatedPost) {
            throw new NotFoundException(`Post with ID ${id} not found`);
        }
        return updatedPost;
    }



}
