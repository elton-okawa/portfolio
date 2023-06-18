import { Arg, Query, Resolver } from 'type-graphql';
import { User } from './user';

@Resolver(User)
export class UserResolver {
  @Query(() => User)
  async user(@Arg('id') id: string) {
    return { id, name: 'User from server!' };
  }
}
