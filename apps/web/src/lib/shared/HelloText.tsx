'use client';

import React from 'react';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';

import { gql } from '@apollo/client';

const query = gql`
  query Hello {
    hello(name: "client")
  }
`;

export function HelloText() {
  const { data } = useSuspenseQuery<any>(query);

  return <p>{data.hello}</p>;
}
