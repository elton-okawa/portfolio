import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver(String)
export class HelloResolver {
  @Query(() => String)
  async hello(@Args('name') name: string) {
    return `Hello ${name}!`;
  }
}
