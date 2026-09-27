# Freelance Homepage

A modern freelancer portfolio and landing site: hero, services, work showcase, testimonials, pricing, and a **working contact form** whose submissions are stored in a [Neon](https://neon.tech) Postgres database via a Next.js API route. Dark/light mode included. Built with Next.js 15, React 19, Tailwind CSS, and shadcn/ui. Originally generated with v0 by Vercel.

> The site currently uses the placeholder persona "Alex Johnson" — swap the name, copy, and portfolio items in `app/page.tsx` for your own.

## Features

- **Hero section** — headline, availability badge, call-to-action buttons
- **Services grid** — cards describing offered services with icons
- **Portfolio / work showcase** — project cards with descriptions
- **Testimonials** — client quotes section
- **Pricing section** — plan cards
- **Contact form** — validated client-side and server-side; submissions saved to Postgres (`contact_requests` table) through `POST /api/contact`
- **Server-side email validation** — rejects malformed addresses before insert
- **Dark / light mode** — theme toggle powered by `next-themes`
- **Toasts** — success/error feedback on form submission (`sonner` + shadcn toast)
- **Fully responsive** — Tailwind mobile-first layout

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| UI | React 19, Tailwind CSS, shadcn/ui, Radix UI primitives |
| Icons | Lucide React |
| Database | Neon serverless Postgres (`@neondatabase/serverless`) |
| API | `app/api/contact/route.ts` (Next.js route handler) |
| Validation | react-hook-form + zod-style server checks |
| Theme | next-themes |
| Analytics | @vercel/analytics |
| Language | TypeScript |

## Quick Start

Requirements: Node.js 18+ and npm (or pnpm). You also need a Neon database — the contact form does nothing without one (see Environment Variables).

```bash
# install dependencies
npm install

# create .env.local with your database URL (see below)
cp .env.example .env.local   # then edit DATABASE_URL — or create the file manually

# initialize the schema (optional — the API route creates the table on first use)
psql "$DATABASE_URL" -f scripts/001-setup-database.sql

# run the dev server
npm run dev
# open http://localhost:3000

# production build
npm run build && npm start
```

With pnpm:

```bash
pnpm install
pnpm dev
pnpm build
```

## Project Structure

```
freelance-homepage/
├── app/
│   ├── page.tsx            # the whole landing page (hero, services, work, pricing, contact)
│   ├── layout.tsx          # root layout, metadata, theme provider
│   ├── globals.css         # Tailwind + theme tokens
│   └── api/
│       └── contact/
│           └── route.ts    # POST /api/contact — validates + inserts into Neon Postgres
├── components/
│   ├── contact-form.tsx    # contact form (react-hook-form, posts to /api/contact)
│   ├── theme-toggle.tsx / theme-provider.tsx
│   └── ui/                 # shadcn/ui primitives (button, card, input, textarea, ...)
├── hooks/
│   └── use-toast.ts
├── lib/
│   └── utils.ts            # cn() class helper
├── scripts/
│   ├── 001-setup-database.sql      # creates contact_requests table + indexes + trigger
│   └── 002-reset-with-mock-data.sql # wipes and seeds demo contact requests
├── public/                 # favicons, images, manifest
└── components.json         # shadcn/ui config
```

## Environment Variables

| Variable | Required | Purpose |
|---|---|---|
| `DATABASE_URL` | yes (for contact form) | Neon Postgres connection string, e.g. `postgresql://user:password@ep-xxx.neon.tech/db?sslmode=require` |

Create `.env.local`:

```bash
DATABASE_URL=postgresql://<user>:<password>@<host>/<db>?sslmode=require
```

Without `DATABASE_URL`, the site renders fine but the contact form's API route will fail (it calls `neon(process.env.DATABASE_URL!)`).

## API Reference

### `POST /api/contact`

Stores a contact request.

```json
{ "name": "Jane", "email": "jane@example.com", "message": "Hi, I need a website." }
```

- Validates that `name`, `email`, `message` are present and the email matches a basic format check.
- Creates the `contact_requests` table on first call (idempotent), then inserts the row with `status = 'new'`.
- Returns `201`-style JSON `{ success: true }` on success, `400` on validation errors, `500` on DB failure.

## Deployment

This app needs a Node.js server (the API route) plus a Neon database, so it is **not** a static site — it cannot run on GitHub Pages.

Deploy options:

- **Vercel** (recommended for Next.js): import the repo, set `DATABASE_URL` in project env vars, deploy. `npm run build` is the build command.
- **Netlify / Cloudflare Workers**: possible, but requires the maintainer's permission to set up (per project policy).

After deploying with a real database, run `scripts/001-setup-database.sql` once against your Neon DB (or let the API route create the table lazily on the first form submission).

## Customization

- Replace the "Alex Johnson" persona: name, hero copy, services, portfolio items, testimonials, and pricing in `app/page.tsx`.
- Theming: brand colors live in `app/globals.css` and `tailwind.config.ts`.

## License

No license file is present in this repository. All rights reserved by the author unless stated otherwise.

---

Built by Girish Lade — https://ladestack.in
