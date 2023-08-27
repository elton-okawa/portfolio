import React from 'react';
import { ProjectSummary } from './ProjectSummary';

const projects = Array.from({ length: 3 }, () => ({
  title: 'Placeholder Project',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque placerat urna, vitae luctus lectus. Suspendisse id eros at elit suscipit vulputate quis sed sapien',
  slug: 'placeholder',
  imagePath: '/placeholder.jpg',
  tags: ['Node.js', 'React'],
}));

export function ProjectList() {
  return (
    <div className="flex flex-wrap gap-5 justify-around">
      {projects.map((proj) => (
        <ProjectSummary key={proj.slug} {...proj} />
      ))}
    </div>
  );
}
