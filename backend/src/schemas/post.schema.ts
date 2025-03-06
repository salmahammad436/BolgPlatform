import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type PostDocument = Post & Document;

@Schema({ timestamps: true }) 
export class Post {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    author: string;

    @Prop({ required: true })
    content: string;
    @Prop({ type: Date, default: Date.now }) 
    createdAt?:Date;
}

export const PostSchema = SchemaFactory.createForClass(Post);
PostSchema.index({ createdAt: -1 });
