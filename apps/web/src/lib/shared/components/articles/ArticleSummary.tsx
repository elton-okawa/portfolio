import React from 'react';

import Image from 'next/image';
import { Typography } from '@/lib/shared';

type ArticleSummaryProps = {
  title: string;
  description: string;
  photoUrl: string;
};

export function ArticleSummary(props: ArticleSummaryProps) {
  return (
    <div className="md:flex md:h-32 overflow-hidden gap-1 rounded-xl bg-default border border-default">
      <div className="relative w-full h-48 md:w-48 md:h-full md:shrink-0">
        <Image
          className="object-cover"
          src={props.photoUrl}
          fill
          alt={props.title}
        />
      </div>
      <div className="p-5">
        <p className="font-semibold">{props.title}</p>
        <Typography variant="description">{props.description}</Typography>
      </div>
    </div>
  );
}
