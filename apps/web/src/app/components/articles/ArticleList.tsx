import React from 'react';
import { ArticleSummary } from './ArticleSummary';
import { getClient } from '@/lib/apollo/apollo-ssr-client';
import { gql } from '@/__generated__/gql';

const query = gql(/* GraphQL */ `
  query Posts {
    posts {
      id
      title
    }
  }
`);

export async function ArticleList() {
  const { data } = await getClient().query({
    query,
    context: {
      fetchOptions: {
        next: { revalidate: 3600 },
      },
    },
  });

  return (
    <div className="flex flex-col gap-2">
      {data.posts.map((post) => (
        <ArticleSummary
          key={post.id}
          {...post}
          // TODO add on api
          photoUrl="/placeholder.jpg"
          description="placeholder description"
        />
      ))}
    </div>
  );
}
