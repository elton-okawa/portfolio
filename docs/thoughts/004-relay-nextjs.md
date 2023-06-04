# Jun 04, 2023 - Relay Nextjs

## relay-nextjs

Some important remarks from `relay-nextjs` to remember in the future:

> relay-nextjs is designed to run on both the server and client. To avoid pulling in server dependencies to the client bundle configure Webpack to ignore any files in src/lib/server

> client only one environment is ever created because there is only one app, but on the server we must create an environment per-render to ensure the cache is not shared between requests.

We don't need `relay-config` package with Relay >=13
> Only works with Relay 12 and below, Relay 13 does not use this format

See: [npm relay-config](https://www.npmjs.com/package/relay-config)
