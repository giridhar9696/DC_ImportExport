# Dependencies

## Runtime dependencies

| Package | Purpose | Usage |
| --- | --- | --- |
| `next` | App Router, static export, image and metadata framework | `src/app`, `next.config.ts` |
| `react` | Component model and client state | All React components |
| `react-dom` | React browser rendering | Next.js runtime |
| `lucide-react` | Accessible SVG icons | Navigation, forms, cards, CTAs, carousels |

## Build and development dependencies

| Package | Purpose |
| --- | --- |
| `typescript` | Static typing and build checking |
| `tailwindcss` | Utility CSS and design tokens |
| `postcss` | CSS transformation pipeline |
| `autoprefixer` | Browser vendor prefix handling |
| `eslint` | Static code quality checks |
| `eslint-config-next` | Next.js ESLint rules |
| `@types/node`, `@types/react`, `@types/react-dom` | TypeScript type definitions |

No state-management, database, authentication, payment, HTTP client, or backend SDK dependency is installed.
