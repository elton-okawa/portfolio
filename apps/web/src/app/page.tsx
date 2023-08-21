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
    <main className="flex justify-center flex-col max-w-screen-lg mx-auto px-5">
      <NavBar />
      <div className="mt-5">
        <ArticleList />

        <h1>{data.hello}</h1>
        <HelloText />
      </div>
    </main>
  );
}
