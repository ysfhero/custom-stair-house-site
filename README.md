# Custom Stair House Site

Production website for Custom Stair House built in Next.js.

## Status
- Site structure built
- Core commercial pages built
- Support pages built
- Quote request form wired
- SMTP-based email delivery supported through environment variables

## Local development
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Environment variables
Copy `.env.example` to `.env.local` for local development and fill in the required values.

Required variables:
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_SECURE`
- `SMTP_USER`
- `SMTP_PASS`
- `QUOTE_TO_EMAIL`
- `QUOTE_FROM_EMAIL`

## Deployment
See `DEPLOYMENT.md`.
