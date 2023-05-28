# 05/28/23 Initial Stack

Frontend
- `Nextjs` brings Server Side Rendering
- `Relay` optimized fetching from GraphQL APIs

Backend
- `GraphQL Yoga` seems to be an improved version of `GraphQL Http`
- `TypeGraphQL` seems to have a better developer experience when working with Typescript
- `Dataloader` solves GraphQL n+1 problem
- `MongoDB` as database

## `TypeGraphQL` vs other `schema-first` or `code-first` approaches

### `schema-first` 

A `schema-first` approach usually look like this, you define your GraphQL schema and then use another tool like `@graphql-codegen/typescript` to generate your typings:

```graphql
type Book {
  title: String
  author: String
}

type Query {
  books(author: String): [Book]
}
```

```ts
import { QueryResolvers } from '__generated__/resolvers-types';

const queries: QueryResolvers = {
  Query: {
    books: (_parent, args, _context, _info) => {
      ...
    },
  },
};
```

Advantages:
- GraphQL schema is clear

Disadvantages:
- Setup the typing generation is a real pain, especially when you want to split your schema in multiple files
- We do not always use all resolver handler's arguments, so we end up "skipping" them like `(_, args) => {}` or `(_, __, context) => {}`

### other `code-first` like `graphqljs` 

A `code-first` approach usually look like this, you define some instances or classes that will result in the GraphQL schema:

```ts
import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';

const bookType = new GraphQLObjectType({
  name: "Book",
  fields: {
    title: { type: GraphQLString },
    author: { type: GraphQLString },
  },
})

const queryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    books: {
      type: new GraphQLList(bookType),
      args: {
        author: { type: GraphQLString },
      },
      resolve: (_parent, args, _context, _info) => {
        ...
      },
    },
  },
});
```

Advantages:
- Typing without extra setup

Disadvantages
- Schema is not so clear as `schema-first` and bit more work to define them
- Same resolver handler problem

### `TypeGraphQL`

Using `TypeGraphQL` you use decorators:

```ts
import { Field, ID, ObjectType, Resolver, Query, Arg } from "type-graphql";

@ObjectType()
export class Book {
  @Field()
  title!: string;

  @Field()
  author!: string;
}

@Resolver(Book)
export class BookResolver {
  @Query(returns => [Book])
  async books(@Arg("author") author?: string) {
    ...
  }
}
```

I think that it has all advantages and solves all problems described in other approaches because of its declarative approach, you basically say "books query needs author argument".
The disadvantages I see it'd be the "magic of decorators", when you are not used to it, it's difficult in the beginning to understand how things wire up and when it does not work, debugging the real issue might not be easy