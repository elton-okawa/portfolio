import { gql } from '@/__generated__/gql';
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
  const { data } = await getClient().query({
    query,
    variables: { id },
    // TODO revalidate
  });

  return <p>{JSON.stringify(data.post)}</p>;
}
