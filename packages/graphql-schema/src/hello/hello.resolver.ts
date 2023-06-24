import { Arg, Query, Resolver } from 'type-graphql';
import { Service } from 'typedi';

@Service()
@Resolver(String)
export class HelloResolver {
  @Query(() => String)
  async hello(@Arg('name') name: string) {
    return `Hello ${name}!`;
  }
}
