import React from 'react';
import { ArticleList } from './components';

export default function Page() {
  return (
    <div className="flex flex-col gap-2 self-center mt-16 max-w-screen-sm w-full">
      <ArticleList />
    </div>
  );
}
