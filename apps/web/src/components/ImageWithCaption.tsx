'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Dialog } from '@headlessui/react';

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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={`flex flex-col gap-2 w-full h-full pb-5 ${className}`}>
        <div className="relative flex-1">
          <Image
            alt={caption}
            src={src}
            fill
            className="object-contain"
            onClick={() => setIsOpen(true)}
          />
        </div>
        <p className="text-description text-center">{caption}</p>
      </div>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="fixed inset-0 backdrop-blur-sm" aria-hidden="true" />

        <Dialog.Panel className="fixed inset-0 flex flex-col items-center justify-center max-w-screen-lg h-3/4 m-auto p-4">
          <Image alt={caption} src={src} fill className="object-contain" />
        </Dialog.Panel>
      </Dialog>
    </>
  );
}
