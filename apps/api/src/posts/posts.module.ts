import { DatabaseModule, DATABASE_KEY } from '@/database';
import { Module } from '@nestjs/common';
import { Db } from 'mongodb';
import { PostsService } from './posts.service';
import { DataloaderModule } from '@/graphql-dataloader';

@Module({
  imports: [DatabaseModule, DataloaderModule],
  providers: [
    {
      provide: 'POST_MODEL',
      useFactory: (db: Db) => db.collection('posts'),
      inject: [DATABASE_KEY],
    },
    PostsService,
  ],
  exports: [PostsService],
})
export class PostsModule {}
