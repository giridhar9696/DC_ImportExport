# Features

## Global shell and navigation

The root layout renders the header, footer, and back-to-top control for every route. Navigation entries are defined in `src/config/navigation.ts`; About, Services, and Media children point to same-page anchors.

Important files: `src/app/layout.tsx`, `src/components/layout/header.tsx`, `src/components/layout/footer.tsx`, `src/components/ui/back-to-top.tsx`.

## Home

`src/app/page.tsx` presents the cargo video hero, company introduction, service overview, trade principles, equipment image carousel, and contact CTA. Equipment imagery is rendered by a client carousel component and uses local assets only.

## About

`src/app/(site)/about/page.tsx` is one continuous page containing company introduction, history placeholders, vision and mission, leadership placeholders, and contact CTA. `SectionNav` provides same-page anchor shortcuts.

## Services

`src/app/(site)/services/page.tsx` renders Import, Export, Logistics, Sourcing, and Documentation as alternating editorial sections rather than separate navigation cards. Service content and imagery are defined in `service-data.ts`.

## Media

`src/app/(site)/media/page.tsx` includes the photo gallery, video placeholders, press placeholders, brochure placeholder, certificate placeholders, and contact CTA. Data is centralized in `media-data.ts`. No fake downloadable brochure or playable video is created.

## Careers

`src/app/(site)/careers/page.tsx` contains illustrative workplace content and four opportunity categories. `career-role-enquiry.tsx` opens a role-specific modal, locks the selected role, validates Name/Email/Message, and prepares a WhatsApp message.

## Contact enquiry

`contact-form.tsx` validates Full Name, Email, Subject, and Message. `src/lib/whatsapp.ts` builds encoded click-to-chat URLs. Optional fields are omitted when empty, and the UI states that the message was prepared rather than claiming delivery.

## SEO and deployment metadata

`src/lib/seo.ts`, `src/app/robots.ts`, and `src/app/sitemap.ts` provide metadata and static SEO files. The workflow in `.github/workflows/deploy-pages.yml` builds and deploys the static output.
