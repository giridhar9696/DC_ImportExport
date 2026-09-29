# Setup and Installation

## Requirements

- Node.js 22 or a compatible current Node.js release. Node 22 is used in CI.
- npm
- Git

## Install

```bash
git clone <repository-url>
cd dc-_importsandexports-main
npm ci
```

## Environment

No `.env` file is required for local development. Optional public variables are:

```text
NEXT_PUBLIC_BASE_PATH=
NEXT_PUBLIC_SITE_URL=
```

Use `NEXT_PUBLIC_BASE_PATH=/DC_ImportExport` for the GitHub Pages repository deployment.

## Run locally

```bash
npm run dev
```

Then open `http://localhost:3000`.

## Verify a production build

```bash
npm run lint
npm run build
npm run start
```

The build is a static export and writes the generated site to `out/`.

## Troubleshooting

- Missing assets under a subpath: set `NEXT_PUBLIC_BASE_PATH` before building.
- Incorrect canonical or sitemap URLs: set `NEXT_PUBLIC_SITE_URL` before building.
- Dependency mismatch: use `npm ci` so `package-lock.json` is respected.
- Stale development output: restart the dev server and reload the page.
- Build failure: run `npm run lint` first, then inspect the TypeScript output from `npm run build`.

No database, migration, service credential, or backend setup is required by the current codebase.
