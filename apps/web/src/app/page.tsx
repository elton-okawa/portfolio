import { Metadata } from 'next';
import React from 'react';
import { ArticleList } from './components';

export const metadata: Metadata = {
  title: "Elton's blog",
};

export default function Page() {
  return (
    <div>
      <ArticleList />
    </div>
  );
}
