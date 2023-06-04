# Jun 03, 2023 - Adding type-graphql with next.js

Next.js allows usage of custom `babel` config, which is required when using `relay` because we need to add a plugin to it.
After adding `type-graphql` types and resolvers I started receiving an error pointing to one decorator:

```
Syntax error: Support for the experimental syntax 'decorators-legacy' isn't currently enabled
 > 3 | @Resolver(String)
```

In order to solve this, I followed instructions on [this comment on next.js GitHub issue](https://github.com/vercel/next.js/issues/4707#issuecomment-659231837):

> Note @babel/core is required by @babel/plugin-proposal-decorators
```
yarn add -D babel-plugin-transform-typescript-metadata @babel/core @babel/plugin-proposal-decorators
```

`.babelrc`
```json
{
  "presets": ["next/babel"],
  "plugins": [
    "babel-plugin-transform-typescript-metadata",
    ["@babel/plugin-proposal-decorators", { "legacy": true }]
  ]
}
```

After that I started receiving another error:

```
Error: The top-level-await experiment is not enabled (set experiments.topLevelAwait: true to enabled it)
```

[This Stackoverflow comment](https://stackoverflow.com/a/68339259) had the solution, I just needed to modify `next.config.js`:

```ts
const nextConfig = {
  webpack: (config) => {
    config.experiments = { ...config.experiments, topLevelAwait: true };

    return config;
  },
}
```

References:
- https://github.com/MichalLytek/type-graphql/issues/55
- https://github.com/vercel/next.js/issues/4707#issuecomment-659231837
- https://stackoverflow.com/a/68339259
