import { NodeType } from '../shared';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ArticleType extends NodeType {
  @Field()
  slug!: string;

  @Field()
  title!: string;

  @Field()
  description!: string;

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;
}
