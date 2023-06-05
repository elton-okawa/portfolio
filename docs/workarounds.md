# Workarounds

## Why using custom `artifactDirectory` and not collocating generated files?

See [thoughts about nextjs-swc](./thoughts/005-nextjs-swc.md)

## Why create a `__generated__` folder before starting `relay-compiler`?

Configuring a custom `artifactDirectory` requires that target directory exists, but `__generated__` folder is usually not committed.
See [open GitHub issue](https://github.com/facebook/relay/issues/3782)