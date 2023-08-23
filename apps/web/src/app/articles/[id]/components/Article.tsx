import { gql } from '@/__generated__/gql';
import { Typography } from '@/components';
import { getClient } from '@/lib/apollo/apollo-ssr-client';
import React from 'react';

const query = gql(/* GraphQL */ `
  query Post($id: String!) {
    post(id: $id) {
      id
      title
    }
  }
`);

type ArticleProps = {
  id: string;
};

export async function Article({ id }: ArticleProps) {
  // TODO handle not exist
  const {
    data: { post: original },
  } = await getClient().query({
    query,
    variables: { id },
    // TODO revalidate
  });

  // TODO remaining data from api
  const post = { ...original, description: 'Placeholder description' };

  return (
    <div className="bg-default p-5">
      <Typography component="h1">{post.title}</Typography>
      <Typography variant="description">{post.description}</Typography>
    </div>
  );
}
