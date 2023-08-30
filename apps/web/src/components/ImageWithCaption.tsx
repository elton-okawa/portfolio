import React from 'react';
import Image from 'next/image';

type ImageWithCaptionProps = {
  src: string;
  caption: string;
  className?: string;
};

export function ImageWithCaption({
  src,
  caption,
  className = '',
}: ImageWithCaptionProps) {
  return (
    <div className={`flex flex-col gap-2 w-full h-full pb-5 ${className}`}>
      <div className="relative flex-1">
        <Image alt={caption} src={src} fill className="object-contain" />
      </div>
      <p className="text-description text-center">{caption}</p>
    </div>
  );
}
