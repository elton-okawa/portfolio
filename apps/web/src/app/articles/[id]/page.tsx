import React from 'react';
import { Article } from './components/Article';

type PageProps = {
  params: {
    id: string;
  };
};

export default function Page({ params }: PageProps) {
  return <Article id={params.id} />;
}
