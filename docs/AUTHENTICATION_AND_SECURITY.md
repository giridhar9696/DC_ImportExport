# Authentication and Security

## Authentication and authorization

No login, signup, session, token, protected route, role system, or authorization flow exists in the current codebase. All pages are public static pages.

## Input validation

- Contact form requires Full Name, Email, Subject, and Message.
- Contact email validation uses a client-side email pattern.
- Careers role modal requires Name, valid Email, and Message.
- Optional fields remain optional.
- Invalid forms do not open WhatsApp and preserve entered values.

## Data handling

- Form values are held in React state only.
- The application does not log enquiry details to the console.
- The application does not write form values to browser storage or a database.
- Valid submission intentionally places the user-provided message in a WhatsApp click-to-chat URL after explicit user action.

## Security considerations

The WhatsApp URL contains user-entered data by design. The browser and WhatsApp may process that URL according to their own policies. Do not place passwords, payment data, government identifiers, or other sensitive information into this form.

The WhatsApp number is public configuration, not a secret. No API credentials or private keys were found in the repository.

The project uses a static export, which reduces server attack surface. It does not provide server-side validation, rate limiting, spam prevention, or audit logging.

## Review items

- Replace demo contact and career content only with approved information.
- Consider CSP, security headers, abuse protection, and server-side validation if the site later gains a backend.
- Review legacy sitemap entries in `src/lib/seo.ts`; they reference removed detail routes.
