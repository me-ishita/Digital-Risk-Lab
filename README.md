<<<<<<< HEAD
# Digital-Risk-Lab
=======
# Digital Risk Academy (standalone site)

This folder is a standalone build of the Academy section only, intended to be deployed to `digitalriskacademy.com`.

## What's in here
- Only Academy pages: Home, Programs (incl. Investment Banking), Certifications, Resources
- Contact page (kept, used by "Get Started" CTAs)
- Shared Layout / UI components / assets copied from the main project

Routes are mounted at the root (`/`, `/programs`, `/certifications`, `/resources`, `/contact`). Legacy `/academy/*` URLs 301-redirect to the new root paths.

## Local dev
```
cd academy-site
npm install
npm run dev
```

## Build
```
npm run build
```
Output goes to `dist/`. Upload the contents of `dist/` (the files inside it, not the folder itself) to your host.

## Deploy to Hostinger (static hosting)
1. In Hostinger, attach `digitalriskacademy.com` to your hosting plan so the nameservers move off `dns-parking`.
2. Open File Manager → `public_html` for that domain.
3. Delete the default parking files.
4. Upload every file from `dist/` into `public_html/`.
5. Because this is a single-page app, add a `.htaccess` in `public_html/` so React Router can handle deep links:

```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## Deploy to Vercel / Netlify (alternative)
A `vercel.json` is included. Either service will auto-detect Vite. Then point `digitalriskacademy.com` at the deployment via A / CNAME records in Hostinger DNS.
>>>>>>> 8ddbbf9 (Initial commit)
