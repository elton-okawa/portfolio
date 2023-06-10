import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Node {
  @Field(type => ID)
  id!: string;

  constructor(){}
}