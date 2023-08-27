import React from 'react';

export function AccentTitle({ children }: React.PropsWithChildren) {
  return <p className="text-lg text-accent font-bold mt-5">{children}</p>;
}
