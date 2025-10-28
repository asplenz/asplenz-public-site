# Asplenz — Website (Next.js + i18n FR/EN + Contact API)

- Next.js App Router with locale routes: `/fr` and `/en`
- Middleware redirects `/` to the best locale (defaults to FR)
- Contact form posts to `/api/contact` (Nodemailer)

## Local dev
npm install
npm run dev

Open http://localhost:3000 (will redirect to /fr or /en)

## Deploy on Vercel
- Import the repo
- Add env vars: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO, CONTACT_FROM
- Deploy

