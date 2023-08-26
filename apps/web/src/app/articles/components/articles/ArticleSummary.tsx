import React from 'react';

import Link from 'next/link';

type ArticleSummaryProps = {
  slug: string;
  title: string;
  description: string;
};

export function ArticleSummary(props: ArticleSummaryProps) {
  return (
    <div className="flex overflow-hidden gap-1 rounded-xl bg-default hover:text-secondary">
      <Link href={`/articles/${props.slug}`}>
        <div className="px-5">
          <h5 className="font-semibold text-inherit">{props.title}</h5>
          <p className="text-description">{props.description}</p>
          <p className="text-default font-semibold mt-2">Read more</p>
        </div>
      </Link>
    </div>
  );
}
