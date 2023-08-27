import React from 'react';

import { AccentTitle, ProjectList } from '@/components';

export default function Page() {
  return (
    <div className="max-w-screen-sm mt-16 mx-auto">
      <AccentTitle>Latest Projects</AccentTitle>
      <ProjectList />
    </div>
  );
}
