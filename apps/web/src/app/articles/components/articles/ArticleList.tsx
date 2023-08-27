import React from 'react';
import { ArticleSummary } from './ArticleSummary';
import { getClient } from '@/lib/apollo/apollo-ssr-client';
import { gql } from '@/__generated__/gql';

const query = gql(/* GraphQL */ `
  query Articles {
    articles {
      slug
      title
      description
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
    <>
      <h3 className="text-lg text-accent font-bold mt-5">Recently Published</h3>
      {data.articles.map((article) => (
        <ArticleSummary key={article.slug} {...article} />
      ))}
    </>
  );
}
