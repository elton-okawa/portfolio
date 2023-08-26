import React from 'react';
import { gql } from '@/__generated__';
import { getClient } from '@/lib/apollo/apollo-ssr-client';
import { toShortDate } from '@/lib/date';

const query = gql(/* GraphQL */ `
  query Post($id: String!) {
    post(id: $id) {
      id
      title
    }
  }
`);

export default async function Layout({ children }: React.PropsWithChildren) {
  const { data } = await getClient().query({
    query,
    variables: { id: '64e4832cdf9b82fc4637f672' }, // TODO use url slug
    context: {
      fetchOptions: {
        next: { revalidate: 3600 },
      },
    },
  });

  // TODO add data on api
  const post = {
    ...data.post,
    description:
      'sem eget dignissim euismod, mauris nisl commodo ex, sit amet dignissim purus sem at metus. Sed accumsan semper magna eget tempus. Nunc tincidunt turpis sed tellus pellentesque, id pulvinar quam tempor',
    updatedAt: new Date(),
  };

  return (
    <div className="max-w-screen-sm mx-auto mt-16 px-5 ">
      <div className="my-2">
        <h1>{post.title}</h1>
        <p className="text-description">{toShortDate(post.updatedAt)}</p>
        <p className="text-description">{post.description}</p>
      </div>
      <div className="bg-default px-5 py-2">{children}</div>
    </div>
  );
}
