import React from 'react';

import Link from 'next/link';
import { Typography } from '@/components';

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
          <Typography component="h5" className="font-semibold text-inherit">
            {props.title}
          </Typography>
          <Typography variant="description">{props.description}</Typography>
          <Typography className="font-semibold mt-2">Read more</Typography>
        </div>
      </Link>
    </div>
  );
}
