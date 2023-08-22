import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class NodeType {
  @Field(() => ID)
  id!: string;
}
