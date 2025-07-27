import React from 'react';
import { ArticleList } from './components';
import { AccentTitle } from '@/components';

export default function Page() {
  return (
    <div className="flex flex-col gap-2 self-center mt-8 max-w-screen-sm w-full">
      <AccentTitle>Recently Published</AccentTitle>
      <ArticleList />
    </div>
  );
}
