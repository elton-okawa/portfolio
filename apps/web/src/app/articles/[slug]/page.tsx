import React from 'react';
import { articles } from '../domain/article';
import { toShortDate } from '@/lib/date';

type ArticlePageProps = {
  params: { slug: string };
};

export default async function Page({ params }: ArticlePageProps) {
  const { slug } = params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) {
    return <div>Article not found</div>;
  }

  const mdxFile = await import(`./${article.slug}.mdx`);
  const Component = mdxFile.default;

  return (
    <div className="max-w-screen-sm mx-auto mt-16 px-5 ">
      <div className="my-2">
        <h1>{article.title}</h1>
        <p className="text-description">
          {toShortDate(new Date(article.updatedAt))}
        </p>
        <p className="text-description">{article.description}</p>
      </div>
      <div className="bg-default px-5 py-2">
        <Component />
      </div>
    </div>
  );
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}
