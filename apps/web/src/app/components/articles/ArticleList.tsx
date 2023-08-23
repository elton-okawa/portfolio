import React from 'react';
import { ArticleSummary } from './ArticleSummary';

const article = {
  id: 'id',
  title: 'Super title',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus fermentum tempus. Integer elementum, neque a rhoncus finibus.',
  photoUrl: '/placeholder.jpg',
};

const data = Array.from({ length: 5 }, (_, i) => ({
  ...article,
  id: `${article.id}-${i}`,
}));

export function ArticleList() {
  return (
    <div className="flex flex-col gap-2">
      {data.map((article) => (
        <ArticleSummary key={article.id} {...article} />
      ))}
    </div>
  );
}
