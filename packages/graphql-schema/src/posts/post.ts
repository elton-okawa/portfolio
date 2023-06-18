import { Node } from '../shared';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class Post extends Node {
  @Field()
  title!: string;
}
