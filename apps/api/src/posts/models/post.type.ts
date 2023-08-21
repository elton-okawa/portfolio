import { NodeType } from '../../shared';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PostType extends NodeType {
  @Field()
  title!: string;
}
