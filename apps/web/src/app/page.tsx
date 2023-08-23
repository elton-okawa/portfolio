import { Metadata } from 'next';
import React from 'react';
import { NavBar, ArticleList } from './components';

export const metadata: Metadata = {
  title: "Elton's blog",
};

export default function Page() {
  return (
    <main className="flex justify-center flex-col max-w-screen-lg mx-auto px-5">
      <NavBar />
      <div className="mt-5">
        <ArticleList />
      </div>
    </main>
  );
}
