# Project Structure

```text
.
├── .github/workflows/deploy-pages.yml  GitHub Pages workflow
├── public/assets/                       Images, logo, video, equipment assets
├── src/
│   ├── app/
│   │   ├── layout.tsx                   Global layout
│   │   ├── page.tsx                     Home page
│   │   ├── globals.css                  Global CSS and Tailwind component styles
│   │   └── (site)/                      Public route pages
│   │       ├── about/page.tsx
│   │       ├── careers/page.tsx
│   │       ├── careers/career-role-enquiry.tsx
│   │       ├── contact-us/page.tsx
│   │       ├── contact-us/contact-form.tsx
│   │       ├── facility/page.tsx
│   │       ├── media/page.tsx
│   │       ├── media/media-data.ts
│   │       ├── media/media-ui.tsx
│   │       ├── services/page.tsx
│   │       ├── services/service-data.ts
│   │       └── services/services-ui.tsx
│   ├── components/
│   │   ├── layout/                      Header and footer
│   │   └── ui/                          Reusable visual and interaction components
│   ├── config/navigation.ts              Navigation model
│   └── lib/                              Asset, SEO, logo, and WhatsApp helpers
├── next.config.ts                       Static export configuration
├── tailwind.config.ts                   Design tokens and content scanning
├── postcss.config.js                    CSS processing
├── tsconfig.json                         TypeScript configuration
└── package.json                          Scripts and dependencies
```

## Major directory responsibilities

| Directory | Responsibility |
| --- | --- |
| `src/app` | App Router routes, layouts, metadata, global styles, robots, and sitemap |
| `src/components/layout` | Site-wide header and footer |
| `src/components/ui` | Shared buttons, image wrappers, carousels, section navigation, and utility UI |
| `src/config` | Static configuration such as navigation |
| `src/lib` | Small cross-route helpers and centralized integrations |
| `public/assets` | Browser-served local media |
| `.github/workflows` | CI/CD deployment automation |

The `(site)` directory is a route group; it organizes public pages without adding a URL segment.
