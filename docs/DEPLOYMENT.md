# Deployment

## Target platform

The repository is configured for GitHub Pages through GitHub Actions.

Workflow: `.github/workflows/deploy-pages.yml`.

## Build process

The workflow:

1. Checks out `main`.
2. Configures GitHub Pages.
3. Installs Node.js 22 with npm cache.
4. Runs `npm ci`.
5. Runs `npm run build` with:

```text
NEXT_PUBLIC_BASE_PATH=/DC_ImportExport
NEXT_PUBLIC_SITE_URL=https://giridhar9696.github.io
```

6. Verifies `out/index.html` exists.
7. Uploads `out/` as a Pages artifact.
8. Deploys through `actions/deploy-pages`.

The workflow runs on pushes to `main` and grants Pages deployment permissions.

## Static-export requirements

`next.config.ts` sets `output: "export"`, `trailingSlash: true`, and `images.unoptimized: true`. Dynamic server features are not available in the deployed output.

## Production considerations

- Configure the repository’s GitHub Pages settings to use the Actions deployment source.
- Keep `NEXT_PUBLIC_BASE_PATH` aligned with the repository path.
- Set `NEXT_PUBLIC_SITE_URL` to the canonical public host.
- Verify asset paths and sitemap URLs after deployment.
- The current sitemap route list contains legacy paths that no longer have page files; this should be corrected in application code before treating the sitemap as authoritative.

No server secrets or deployment credentials are committed. GitHub’s environment and Actions permissions handle deployment authorization.
