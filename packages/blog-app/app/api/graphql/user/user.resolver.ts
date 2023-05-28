import { Arg, Query, Resolver } from "type-graphql";
import { User } from "./user";

@Resolver(User)
export class UserResolver {
  @Query(returns => User)
  async user(@Arg("id") id: string) {
    return { id, name: 'test' };
  }
}