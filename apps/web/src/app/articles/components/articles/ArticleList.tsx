import React from 'react';
import { ArticleSummary } from './ArticleSummary';
import { articles } from '../../domain/article';

export async function ArticleList() {
  return (
    <>
      {articles.map((article) => (
        <ArticleSummary key={article.slug} {...article} />
      ))}
    </>
  );
}
