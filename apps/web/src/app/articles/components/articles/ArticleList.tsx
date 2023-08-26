import React from 'react';
import { ArticleSummary } from './ArticleSummary';
import { getClient } from '@/lib/apollo/apollo-ssr-client';
import { gql } from '@/__generated__/gql';

const query = gql(/* GraphQL */ `
  query Posts {
    posts {
      id
      title
    }
  }
`);

export async function ArticleList() {
  const { data } = await getClient().query({
    query,
    context: {
      fetchOptions: {
        next: { revalidate: 3600 },
      },
    },
  });

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-lg text-accent font-bold mt-5">Recently Published</h3>
      {data.posts.map((post) => (
        <ArticleSummary
          key={post.id}
          {...post}
          // TODO add on api
          slug="placeholder"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque placerat urna, vitae luctus lectus. Suspendisse id eros at elit suscipit vulputate quis sed sapien. In id tellus varius, gravida nibh sed, faucibus felis. Mauris eleifend hendrerit feugiat. Cras at aliquet tortor. Maecenas orci ligula, cursus ac "
        />
      ))}
    </div>
  );
}
