# Project Overview

## Introduction

DC Imports & Exports is a static corporate website concept for an international trade and logistics company. It gives visitors a structured way to understand the company presentation, service categories, facility themes, career themes, media resources, and enquiry flow.

## Problem and solution

The site solves a presentation problem: trade-related information is organized into a responsive, navigable web experience while unverified business facts are clearly marked as illustrative. The solution is a statically generated Next.js site with reusable layout, content, imagery, section navigation, and client-only enquiry interactions.

## Target users

- Public visitors reviewing company and service information.
- Prospective customers preparing a trade enquiry.
- Prospective candidates reviewing illustrative career categories.
- Developers maintaining the website and replacing demo content with approved material.

## Main objectives

- Present a professional responsive company website.
- Keep About, Services, and Media content on continuous single pages.
- Provide a low-infrastructure deployment to GitHub Pages.
- Prepare enquiry details in WhatsApp without a backend.
- Avoid unsupported claims about operations, certifications, vacancies, or contact details.

## Existing features

- Home, About, Services, Facility, Careers, Media, and Contact Us routes.
- Cream background, navy typography, teal accent, liquid-glass navigation buttons, responsive layouts, footer, and back-to-top control.
- Service sections for Import, Export, Logistics, Sourcing, and Documentation.
- Media sections for Photos, Videos, Press, Brochure, and Certificates.
- Careers opportunity cards and role-specific enquiry modal.
- Contact enquiry form with required-field and email validation.
- WhatsApp click-to-chat URLs with URL-encoded messages.
- Static metadata, robots, sitemap generation, and GitHub Pages workflow.

## Scope boundaries

The current repository does not implement a backend, database, login, CMS, live vacancy system, real document download, verified press feed, or WhatsApp Business API. Video, brochure, certificate, contact, leadership, and historical content remain demo-safe where assets or facts were not supplied.

## Future improvements

These are suggestions, not current functionality:

- Replace illustrative content with approved company data.
- Add a CMS or content data source if frequent non-developer updates are required.
- Replace the client-only WhatsApp flow with a reviewed server-side enquiry process if auditability or delivery tracking becomes necessary.
- Correct legacy route entries in `src/lib/seo.ts` so generated sitemap entries match the current route set.
- Add automated browser and accessibility regression tests.
