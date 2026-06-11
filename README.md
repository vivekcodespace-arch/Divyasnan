# Divyasnan · दिव्यस्नान

A holy dip, from your home. Marketing + booking site for the Divyasnan photo-snan seva.

Built with Next.js (App Router) + TypeScript + Tailwind CSS v4. Bilingual (English + Hindi) with a persistent language toggle. No backend required.

## Getting Started

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Environment variables

Copy `.env.example` to `.env.local` and fill in. The booking flow needs at least `NEXT_PUBLIC_BUSINESS_WHATSAPP` to actually deliver sankalps.

| Var | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_BUSINESS_WHATSAPP` | ✅ | Digits-only WhatsApp number that receives every sankalp (e.g. `919279726893`). Used to build the `wa.me` click-to-chat link. |
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` | optional | Your Cloudinary cloud name. |
| `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET` | optional | An **unsigned** upload preset, created in the Cloudinary console (Settings → Upload → Add upload preset, Signing Mode = Unsigned). |

Cloudinary is optional — without it, the booking flow still works and the photograph is sent separately in the chat.

## Sankalp delivery (no payment on the site)

The site does **not** collect money. The 6-step booking flow ends with **Confirm**:

1. Photo (multi-upload, local preview).
2. Devotee — name, gotra, sankalp, **customer WhatsApp number** (required).
3. River / ghat.
4. Seva tier.
5. Review.
6. **Confirm** — tap "Send sankalp on WhatsApp":
   - Photos are uploaded to Cloudinary (if env vars are set).
   - A prefilled WhatsApp message is opened to the business number.
   - The customer taps Send. We receive everything.
   - The customer is routed to the confirmation screen + Divya Snan Certificate.

## Scripts

- `npm run dev` — dev server
- `npm run build` — production build
- `npm start` — serve the production build
- `npm run lint` — ESLint
