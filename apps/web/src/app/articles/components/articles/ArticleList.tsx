import React from 'react';
import { ArticleSummary } from './ArticleSummary';

type Article = {
  slug: string;
  title: string;
  description: string;
}

export async function ArticleList() {
  const articles: Article[] = [];

  return (
    <>
      {articles.map((article) => (
        <ArticleSummary key={article.slug} {...article} />
      ))}
    </>
  );
}
