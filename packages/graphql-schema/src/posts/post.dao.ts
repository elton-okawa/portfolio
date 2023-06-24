import { Service } from 'typedi';
import { plainToInstance } from 'class-transformer';
import { Collection, ObjectId } from 'mongodb';

import { DatabaseClient } from '@/shared';
import { Post } from './post.entity';

@Service()
export class PostDao {
  private posts: Collection<Post>;

  constructor(private client: DatabaseClient) {
    this.posts = this.client.db().collection('posts');
  }

  async getByIds(ids: readonly string[]): Promise<Post[]> {
    const objIds = ids.map((id) => new ObjectId(id));
    const postsData = await this.posts.find({ _id: { $in: objIds } }).toArray();

    return plainToInstance(Post, postsData);
  }
}
