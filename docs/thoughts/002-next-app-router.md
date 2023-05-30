# 05/28/23 Next App Router

Latest Nextjs version 13.4 deprecates `Page Router` in favor of `App Router`. It's not clear how to deal with those changes using `Relay`, there is an implementation on [relayjs examples](https://github.com/relayjs/relay-examples/tree/main/issue-tracker-next-v13) but it seems experimental

The main idea here would be fetching query on Server and them **serialize it to the Client, filling client's relay cache**

References
- [Next v13 with relay](https://github.com/relayjs/relay-examples/tree/main/issue-tracker-next-v13)
  - [Implementation step by step](https://github.com/Roshanjossey/nextjs-13-relay)
- [relay-nextjs](https://reverecre.github.io/relay-nextjs/) - only for `Page Router` at the moment
- Some GitHub issues discussing about Nextjs usage with Relay
  - [Relay and Next13](https://github.com/facebook/relay/issues/4107)
  - [useLazyLoadQuery](https://github.com/facebook/relay/issues/4195)