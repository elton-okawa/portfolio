import React from 'react';

import { AccentTitle, ProjectList } from '@/components';

export default function Page() {
  return (
    <div className="max-w-screen-md w-full mt-8 mx-auto">
      <AccentTitle>Latest Projects</AccentTitle>
      <ProjectList />
    </div>
  );
}
