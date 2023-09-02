import { SRC_PATH } from '@/lib/constants';
import { readdir } from 'fs/promises';
import { join } from 'path';
import React from 'react';

type ArticlePageProps = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: ArticlePageProps) {
  const mdxFile = await import(`./${params.slug}.mdx`);
  const Component = mdxFile.default;

  return <Component />;
}

const root = join(SRC_PATH, 'app', 'articles', '[slug]');
export const dynamicParams = false;
export async function generateStaticParams() {
  const dir = await readdir(root);

  const mdxFiles = dir.filter((filename) => filename.endsWith('.mdx'));
  return mdxFiles.map((filename) => ({
    slug: filename.substring(0, filename.length - 4), // remove .mdx ending
  }));
}
