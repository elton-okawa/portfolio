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
  const width = showcase ? 'w-11/12' : 'w-80';
  const height = showcase ? 'h-72' : 'h-48';

  return (
    <div
      className={`bg-default ${width} hover:text-secondary hover:shadow-md p-5`}
    >
      <Link href={`projects/${props.slug}`}>
        <div className={`relative w-full ${height} mb-2`}>
          <Image
            src={props.imagePath}
            alt={props.slug}
            fill
            className="object-contain"
          />
        </div>
        <div className="pt-2">
          <p className="font-bold text-inherit text-lg">{props.title}</p>
          <p className="text-description">{props.description}</p>
          <p className="text-default font-semibold">View project</p>
        </div>
      </Link>
    </div>
  );
}
