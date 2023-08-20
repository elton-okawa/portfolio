# Aug 19, 2023 - Apollo Client

### Apollo Client

In my opinion, Apollo Client had better documentation about how to use with newest Nextjs 13 features in comparison with Relay, while Apollo Client had an official blog post and an experimental library to use, Relay only had a community example. That's why I decided to change my GraphQL client.

References

- https://www.apollographql.com/blog/announcement/frontend/using-apollo-client-with-next-js-13-releasing-an-official-library-to-support-the-app-router/
- https://github.com/apollographql/apollo-client-nextjs/tree/main/examples/app-dir-experiments
- https://github.com/apollographql/apollo-client-nextjs
- https://github.com/relayjs/relay-examples/tree/main/issue-tracker-next-v13
- https://github.com/facebook/relay/issues/4107

### GraphQL API url

Apollo client only works with relative url on client but not on server because it can determine the origin domain in one but not in other. It's not a problem that the library can handle.

On the server side, we can use Nextjs `NEXT_PUBLIC_VERCEL_URL` environment variable to know the current domain, unfortunately it does not expose custom domains, so we need to do a workaround. The idea is handling `local` and `production` environment with the distinct domain and let `development` and `preview` use the default one.

First we define an environment variable called `PUBLIC_URL`:

```
// .env (local)
PUBLIC_URL=http://localhost:3000

// preview and development (defined on Vercel)
none

// production (defined on Vercel)
PUBLIC_URL=<custom domain>
```

Then on our `server side code`:

```
const url = process.env.PUBLIC_URL ??
    `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
```

Note that this `url` does not need to be exposed to the client - it does not need to have `NEXT_` prefix - because we'll use it only on the server.

References:

- https://github.com/apollographql/apollo-client/issues/8371#issuecomment-931802286
- https://github.com/vercel/next.js/discussions/16429#discussioncomment-1302156
- https://vercel.com/docs/projects/environment-variables/system-environment-variables#framework-environment-variables
