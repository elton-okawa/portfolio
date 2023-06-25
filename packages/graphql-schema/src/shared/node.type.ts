import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class NodeType {
  @Field(() => ID)
  id!: string;
}
