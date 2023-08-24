import React from 'react';

export default function Layout({ children }: React.PropsWithChildren) {
  return <div className="bg-default p-5">{children}</div>;
}
