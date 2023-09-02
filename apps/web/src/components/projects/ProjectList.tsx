import React from 'react';
import { ProjectSummary } from './ProjectSummary';
import projects from './projects.json';

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
