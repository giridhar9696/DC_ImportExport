# Database and Persistence

## Current implementation

No database, ORM, file-backed data store, Firebase/Firestore integration, cookies, localStorage, or sessionStorage usage was found in the current codebase.

Page content is compiled from TypeScript constants and local assets. React state exists only for transient browser interactions such as forms, modals, carousels, and visibility controls.

## Data flow

Contact and Careers enquiry values remain in component state until the user explicitly submits a valid form. The client then builds a WhatsApp click-to-chat URL. The application does not persist a copy.

## Future considerations

If enquiry auditability or delivery tracking becomes a requirement, a reviewed server-side data layer would need to be designed separately. That is not part of the current implementation.
