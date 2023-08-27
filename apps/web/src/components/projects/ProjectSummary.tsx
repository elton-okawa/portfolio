import React from 'react';
import Image from 'next/image';

type ProjectSummaryProps = {
  slug: string;
  title: string;
  description: string;
  imagePath: string;
  tags: string[];
};

export function ProjectSummary(props: ProjectSummaryProps) {
  return (
    <div className="w-80">
      <div className="relative w-full h-48">
        <Image
          src={props.imagePath}
          alt={props.slug}
          fill
          className="object-cover"
        />
      </div>
      <p className="font-bold">{props.title}</p>
      <p className="text-description">{props.description}</p>
    </div>
  );
}
