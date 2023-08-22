import { DataloaderService } from '@/graphql-dataloader';
import { Inject, Injectable } from '@nestjs/common';
import { Post } from './post.model';
import { Collection, ObjectId } from 'mongodb';
import { plainToInstance } from 'class-transformer';
import { PostType } from './post.type';

@Injectable()
export class PostsService {
  constructor(
    @Inject('POST_MODEL') private posts: Collection<Post>,
    private dataloaderService: DataloaderService,
  ) {
    this.dataloaderService.register(PostType, this.getByIds.bind(this));
  }

  async getByIds(ids: readonly string[]): Promise<Post[]> {
    const objIds = ids.map((id) => new ObjectId(id));
    const postsData = await this.posts.find({ _id: { $in: objIds } }).toArray();

    return plainToInstance(Post, postsData);
  }
}
