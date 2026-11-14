# Ashish Kumar Bisoi — Portfolio

A single-page portfolio built with React and Vite.

## Requirements

- Node.js `^20.19.0` or `>=22.12.0`
- Corepack, to provide the pnpm version pinned in `package.json`

## Development

```sh
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

## Checks and production build

```sh
pnpm lint
pnpm build
pnpm preview
```

The generated static site is written to `dist/`. See [DEPLOY.md](DEPLOY.md) for Docker-based deployment options.
