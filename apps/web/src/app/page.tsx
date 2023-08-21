import { Metadata } from 'next';
import React from 'react';
import { HelloText, NavBar, ArticleList } from '@/lib/shared';
import { getClient } from '@/lib/server';

import { gql } from '@apollo/client';

export const metadata: Metadata = {
  title: "Elton's blog",
};

const query = gql`
  query Hello {
    hello(name: "world!")
  }
`;

export const dynamic = 'force-dynamic';

export default async function Page() {
  const { data } = await getClient().query({ query });

  return (
    <main className="container xl mx-auto flex justify-center flex-col">
      <NavBar />
      <ArticleList />

      <h1>{data.hello}</h1>
      <HelloText />
    </main>
  );
}
