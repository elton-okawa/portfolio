# Jun 24, 2023

### Optional `mongodb` dependencies warning with webpack

```
warn: Module not found: Can't resolve 'kerberos' in '/home/e11even/projects/js/blog/node_modules/.pnpm/mongodb@5.6.0/node_modules/mongodb/lib'
...
some others mongodb dependency
```

The application still works because I'm not using features that depends on them but those warnings appear every time you compile `Next.js` and can be misleading.

The following changes on `next.config.js` silent those warnings but it might not be ideal because if we ever need the dependencies, I will not receive any message just a usage error like `cannot read properties of 'undefined'`.

```js
const nextConfig = {
  webpack: (config, { isServer, webpack }) => {
    ...
    config.resolve = {
      ...config.resolve,
      fallback: {
        ...config.resolve.fallback,
        kerberos: false,
        '@mongodb-js/zstd': false,
        '@aws-sdk/credential-providers': false,
        snappy: false,
        'mongodb-client-encryption': false,
        aws4: false,
      },
    },
    ...
  };
};
```

References:

- Similar issue: https://github.com/vercel/next.js/issues/49696
- Similar issue: https://jira.mongodb.org/browse/NODE-3199
- https://github.com/mongodb/node-mongodb-native/pull/2606
- https://webpack.js.org/configuration/resolve/#resolvefallback

### mongodb and webpack - Critical dependency error

```bash
warn: node_modules/mongodb/lib/utils.js
Critical dependency: the request of a dependency is an expression
```

I think mongodb does this in order to not import optional dependencies, one workaround is adding `exprContextCritical` on `next.config.js`.
I didn't find any resources explaining consequences of disabling this feature.

```js
const nextConfig = {
  webpack: (config, { isServer, webpack }) => {
    ...
    config.module = {
      ...config.module,
      exprContextCritical: false,
    },
    ...
  },
}
```

References:

- https://github.com/i18next/next-i18next/issues/1545#issuecomment-1005990731
- https://github.com/webpack/webpack/issues/15957
- https://github.com/google/model-viewer/issues/4091
