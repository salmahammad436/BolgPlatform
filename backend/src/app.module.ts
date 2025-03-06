import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
dotenv.config();


@Module({
  imports: [MongooseModule.forRoot(process.env.MONGODB_URL as string),PostsModule],
  controllers: [AppController],
  providers: [AppService],
})



export class AppModule {}

