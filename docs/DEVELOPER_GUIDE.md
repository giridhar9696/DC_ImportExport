# Developer Guide

## Working conventions

- Use TypeScript and the `@/*` path alias for imports from `src`.
- Prefer existing Tailwind tokens: cream background, navy text, teal accent, `container-page`, `section-spacing`, `heading-lg`, and `body-copy`.
- Keep factual copy demo-safe unless verified source material is provided.
- Use `assetPath()` for public assets so base paths work in GitHub Pages builds.
- Keep browser-only state in client components; leave static page content as Server Components where possible.

## Add a page

Create `src/app/(site)/<route>/page.tsx`, add page metadata through `pageMetadata()`, reuse the global layout, and add the route to SEO configuration only when it is an actual public route. Use local assets through `assetPath()`.

## Add a reusable component

Place cross-route UI in `src/components/ui/` and route-specific client UI beside its page. Keep props typed, use accessible labels and buttons, and avoid adding a dependency for behavior available from the browser or React.

## Add a feature

1. Inspect an existing component with similar behavior.
2. Keep content/data separate where it is already modeled separately, such as `service-data.ts` and `media-data.ts`.
3. Reuse existing design tokens and button patterns.
4. Add validation at the UI boundary for user input.
5. Avoid persistence or network calls unless explicitly required.
6. Run `npm run lint` and `npm run build`.

## Add an integration

Centralize public configuration and URL/message construction in `src/lib`. Do not put secrets in client code. For the current WhatsApp integration, both form types reuse `WHATSAPP_NUMBER` from `src/lib/whatsapp.ts`.

## Common pitfalls

- Forgetting `NEXT_PUBLIC_BASE_PATH` breaks asset and route URLs on GitHub Pages.
- Hardcoding `/assets/...` bypasses the base-path helper.
- Adding a factual-sounding claim to demo content violates the project’s content boundary.
- Adding a new detail route conflicts with the single-page About, Services, and Media architecture.
- Updating route pages without updating SEO metadata can leave sitemap entries inconsistent.
