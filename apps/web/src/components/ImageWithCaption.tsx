'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';

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
      <Transition show={isOpen} as={React.Fragment}>
        <Dialog onClose={() => setIsOpen(false)} className="relative z-50">
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="fixed inset-0 backdrop-blur-sm bg-gray-500/50"
              aria-hidden="true"
            />
          </Transition.Child>

          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="fixed inset-0 flex flex-col items-center justify-center max-w-screen-md h-3/4 m-auto">
              <Image
                alt={caption}
                src={src}
                fill
                className="object-contain"
                quality={100}
              />
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
