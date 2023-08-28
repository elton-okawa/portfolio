import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type ProjectSummaryProps = {
  slug: string;
  title: string;
  description: string;
  imagePath: string;
  tags: string[];
  showcase?: boolean;
};

export function ProjectSummary({
  showcase = false,
  ...props
}: ProjectSummaryProps) {
  const width = showcase ? 'w-11/12' : 'w-72';

  return (
    <div className={`${width} hover:text-secondary hover:shadow-md`}>
      <Link href={`projects/${props.slug}`}>
        <div className="relative w-full h-48 mb-2">
          <Image
            src={props.imagePath}
            alt={props.slug}
            fill
            className="object-cover"
          />
        </div>
        <div className="px-5 py-2">
          <p className="font-bold text-inherit text-lg">{props.title}</p>
          <p className="text-description">{props.description}</p>
          <p className="text-default font-semibold">View project</p>
        </div>
      </Link>
    </div>
  );
}
