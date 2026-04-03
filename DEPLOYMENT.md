# Custom Stair House Deployment Guide

## What is already done
- Next.js site built
- Core and support pages built
- Quote form wired with server-side validation
- Quote form now sends email via SMTP environment variables

## Environment variables required
Set these in Vercel Project Settings → Environment Variables:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_SECURE`
- `SMTP_USER`
- `SMTP_PASS`
- `QUOTE_TO_EMAIL`
- `QUOTE_FROM_EMAIL`

Example values are in `.env.example`.

## Recommended deployment path
### 1. Install Vercel CLI locally if needed
```bash
npm i -g vercel
```

### 2. From the project folder, link and deploy
```bash
cd custom-stair-house-site
vercel
```

### 3. For production deploy
```bash
vercel --prod
```

## Recommended project settings
- Framework preset: Next.js
- Root directory: project root
- Build command: `npm run build`
- Output: default Next.js output

## Domain steps
Once the Vercel project is live:
1. Add the production domain in Vercel
2. Update DNS at the domain registrar
3. Confirm HTTPS is active
4. Test the quote form on production

## Post-deploy checklist
- Homepage loads
- All core pages load
- Quote form validates correctly
- Quote request email is received
- Thank-you redirect works
- Mobile layout looks clean
