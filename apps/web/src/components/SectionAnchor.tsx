import React from 'react';

type SectionAnchorProps = {
  href?: string;
};

export function SectionAnchor({
  href,
  children,
}: React.PropsWithChildren<SectionAnchorProps>) {
  return (
    <a
      href={href}
      className='flex items-center hover:after:content-["🔗"] after:text-xl after:ml-1'
    >
      {children}
    </a>
  );
}
