import React from 'react';

type ExternalLinkProps = React.PropsWithChildren<{
  href: string;
}>;

export function ExternalLink({ children, href }: ExternalLinkProps) {
  // TODO should add norel ?
  return (
    <a
      href={href}
      className="text-primary border-b border-primary hover:text-secondary hover:border-secondary"
    >
      {children}
    </a>
  );
}
