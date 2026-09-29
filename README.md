# DC Imports & Exports

DC Imports & Exports is a responsive corporate website for presenting international trade, logistics, sourcing, documentation, careers, media, facility, and contact content. The current copy and imagery are explicitly demo-safe where verified company information is unavailable.

## What the project provides

- Static, responsive marketing pages built with Next.js App Router.
- Home page with cargo video, trade introduction, service overview, equipment imagery, and contact CTA.
- Single-page About, Services, and Media experiences with in-page section navigation.
- Facility and Careers pages with illustrative content.
- Contact form with client-side validation and WhatsApp click-to-chat handoff.
- Careers role enquiry modal with a locked selected role and WhatsApp handoff.
- Cream/navy/teal visual system, responsive navigation, footer, and back-to-top control.
- Static export suitable for GitHub Pages.

## Technology stack

- Next.js 16 App Router and static export
- React 19 and TypeScript 5
- Tailwind CSS 3 with PostCSS and Autoprefixer
- `lucide-react` icons
- GitHub Actions and GitHub Pages deployment

There is no server-side application, database, authentication system, or internal API in the current codebase.

## Prerequisites

- Node.js 22 (the deployment workflow uses Node 22)
- npm
- Git

## Local setup

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

For a production-style local check:

```bash
npm run build
npm run start
```

## Configuration

The application reads these public environment variables:

| Variable | Purpose | Local default |
| --- | --- | --- |
| `NEXT_PUBLIC_BASE_PATH` | Optional deployment subpath and asset prefix | Empty string |
| `NEXT_PUBLIC_SITE_URL` | Absolute metadata, robots, and sitemap URL base | `http://localhost:3000` for URL helpers |

The WhatsApp destination is centralized in `src/lib/whatsapp.ts` as `WHATSAPP_NUMBER`.

## Useful commands

```bash
npm run dev      # Development server
npm run build    # Static production build in out/
npm run start    # Serve the production build locally
npm run lint     # ESLint checks
```

## Repository map

Application source is under [`src/`](src/). Public images and video are under [`public/assets/`](public/assets/). GitHub Pages automation is under [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml).

Detailed documentation:

- [Project overview](docs/PROJECT_OVERVIEW.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Project structure](docs/PROJECT_STRUCTURE.md)
- [Features](docs/FEATURES.md)
- [Setup and installation](docs/SETUP_AND_INSTALLATION.md)
- [API documentation](docs/API_DOCUMENTATION.md)
- [Database](docs/DATABASE.md)
- [Authentication and security](docs/AUTHENTICATION_AND_SECURITY.md)
- [Developer guide](docs/DEVELOPER_GUIDE.md)
- [Dependencies](docs/DEPENDENCIES.md)
- [Deployment](docs/DEPLOYMENT.md)

## Troubleshooting

- If assets fail under GitHub Pages, set `NEXT_PUBLIC_BASE_PATH` to the repository subpath before building.
- If metadata URLs are incorrect, set `NEXT_PUBLIC_SITE_URL` and rebuild.
- If a page appears stale during development, restart `npm run dev` and reload the browser.
- `npm run build` is the authoritative check for TypeScript and static route generation.

## Development notes

Keep public-facing claims demo-safe unless verified business content is supplied. Reuse the existing tokens, components, and asset helpers. Client-side enquiry flows intentionally do not persist or log submitted data.
