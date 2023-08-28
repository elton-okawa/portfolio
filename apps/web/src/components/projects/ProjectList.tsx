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

type ProjectListProps = {
  showcase?: boolean;
};

export function ProjectList({ showcase = false }: ProjectListProps) {
  const firstIndex = showcase ? 1 : 0;

  return (
    <div className="flex flex-wrap gap-5 justify-around">
      {showcase && projects.length > 0 && (
        <ProjectSummary {...projects[0]} showcase={showcase} />
      )}
      {projects.slice(firstIndex).map((proj) => (
        <ProjectSummary key={proj.slug} {...proj} />
      ))}
    </div>
  );
}
