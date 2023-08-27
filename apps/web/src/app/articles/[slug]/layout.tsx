import React from 'react';
import { gql } from '@/__generated__';
import { getClient } from '@/lib/apollo/apollo-ssr-client';
import { toShortDate } from '@/lib/date';

const query = gql(/* GraphQL */ `
  query Article($slug: String!) {
    article(slug: $slug) {
      title
      description
      updatedAt
    }
  }
`);

type LayoutProps = React.PropsWithChildren<{
  params: { slug: string };
}>;

export default async function Layout({ children, params }: LayoutProps) {
  const {
    data: { article },
  } = await getClient().query({
    query,
    variables: { slug: params.slug },
    context: {
      fetchOptions: {
        next: { revalidate: 3600 },
      },
    },
  });

  return (
    <div className="max-w-screen-sm mx-auto mt-16 px-5 ">
      <div className="my-2">
        <h1>{article.title}</h1>
        <p className="text-description">
          {toShortDate(new Date(article.updatedAt))}
        </p>
        <p className="text-description">{article.description}</p>
      </div>
      <div className="bg-default px-5 py-2">{children}</div>
    </div>
  );
}
