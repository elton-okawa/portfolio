# Blog

## Quick start

### Requirements

Setup `api` environment files by copying `.env.base` as `.env`:

```
cd apps/api
cp .env.base .env
```

You must update the following values:

- `DB_NAME`
- `DB_URL`

Setup `app` environment files following the same idea:

```
cd apps/app
cp .env.base .env
```

### Running

```
pnpm install
turbo start:dev
```

## Take a look

- [Resources](./docs/resources.md) - links that helped me taking some decisions or getting started with some tools
- [Thoughts](./docs/thoughts/) - reflection and decisions made throughout this project
  - ⚠️ Those are only my personal opinions, take them with a grain of salt, I'm open to discuss about them and even change my opinion 😊
- [Workarounds](./docs/workarounds.md) - 🚧 temporary solutions and reasons to use them
