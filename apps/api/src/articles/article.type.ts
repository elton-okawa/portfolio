import { NodeType } from '../shared';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ArticleType extends NodeType {
  @Field()
  title!: string;
}
