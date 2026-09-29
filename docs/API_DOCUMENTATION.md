# API Documentation

## Internal API layer

No internal HTTP API routes, route handlers, server actions, or backend endpoints were found in the current codebase.

## Third-party integration: WhatsApp click-to-chat

| Item | Details |
| --- | --- |
| Service | WhatsApp standard click-to-chat |
| URL format | `https://wa.me/<number>?text=<URL-encoded-message>` |
| Authentication | None in this implementation |
| Trigger | Explicit user submission of a valid enquiry form |
| Implementation | `src/lib/whatsapp.ts`, `contact-form.tsx`, `career-role-enquiry.tsx` |
| Data transport | Form data is placed in the browser URL opened for WhatsApp |

The site does not use WhatsApp Business API, API credentials, webhooks, email, CRM, database, or external application endpoints.

## Client-side message builders

- `buildWhatsAppEnquiryUrl()` formats the general Contact Us form.
- `buildWhatsAppCareerEnquiryUrl()` formats a role-specific Careers enquiry.
- Both use the centralized `WHATSAPP_NUMBER` and `encodeURIComponent`.

No API keys, tokens, or credentials are stored in the repository.
