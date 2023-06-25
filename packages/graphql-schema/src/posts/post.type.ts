import { NodeType } from '../shared';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class PostType extends NodeType {
  @Field()
  title!: string;
}
