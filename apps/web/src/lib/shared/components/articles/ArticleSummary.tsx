import React from 'react';

import Image from 'next/image';

type ArticleSummaryProps = {
  title: string;
  description: string;
  photoUrl: string;
};

export function ArticleSummary(props: ArticleSummaryProps) {
  return (
    <div className="md:flex md:h-32 overflow-hidden gap-1 rounded-xl bg-white border border-gray-100">
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
        <p className="text-slate-500">{props.description}</p>
      </div>
    </div>
  );
}
