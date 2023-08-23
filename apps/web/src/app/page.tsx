import { Metadata } from 'next';
import React from 'react';
import { NavBar, ArticleList } from './components';
import { getClient } from '@/lib/apollo/apollo-ssr-client';

import { gql } from '@/__generated__/gql';

export const metadata: Metadata = {
  title: "Elton's blog",
};

const query = gql(/* GraphQL */ `
  query Posts {
    posts {
      id
      title
    }
  }
`);

export const dynamic = 'force-dynamic';

export default async function Page() {
  const { data } = await getClient().query({ query });

  return (
    <main className="flex justify-center flex-col max-w-screen-lg mx-auto px-5">
      <NavBar />
      <div className="mt-5">
        <ArticleList />

        {data.posts.map((post) => (
          <p key={post.id}>{post.title}</p>
        ))}
      </div>
    </main>
  );
}
