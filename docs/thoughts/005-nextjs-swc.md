# Jun 04, 2023 - Next.js SWC

[relay installation docs](https://relay.dev/docs/getting-started/installation-and-setup/#set-up-babel-plugin-relay) instruct us to configure their plugin in `.babelrc`:

```json
{
  "plugins": [
    "relay"
  ]
}
```

By having `.babelrc` file, Next.js tell us that `SWC` is disabled:

```
Disabled SWC as replacement for Babel because of custom Babel configuration ".babelrc" https://nextjs.org/docs/messages/swc-disabled
```

The provided link gives an alternative to use an experimental config `experimental.forceSwcTransforms` to force its usage with the presence of `.babelrc`. It didn't look like a good solution and it might bring problems in the future.

I found out that [next.js SWC supports relay](https://nextjs.org/docs/architecture/nextjs-compiler#relay), I just need to add a relay config on the `next.config.js`:

```js
{
  ...
  compiler: {
    relay: require('./relay.config'),
  }
}
```

Almost everything worked correctly, but I started receiving an error message:

```
Invariant Violation: graphql: Unexpected invocation at runtime
```

Being honest I didn't understand why, but it seems related to using the `relay` default collocated `__generated__` folder
- I could collocate because I was using [pageExtensions](https://nextjs.org/docs/pages/api-reference/next-config-js/pageExtensions)

Adding a custom `artifactDirectory` on `relay.config.js` solved this problem.
