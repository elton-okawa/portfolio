import { HttpLink } from '@apollo/client';
import { IS_CLIENT } from '@/lib/shared/constants';

export function makeHttpLink() {
  const url = getUrl();

  return new HttpLink({
    uri: `${url}/api/graphql`,
  });
}

function getUrl() {
  // On client, apollo can use relative url
  // View 008-apollo-client
  if (IS_CLIENT) {
    return '';
  }

  return (
    process.env.PUBLIC_URL ?? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  );
}
