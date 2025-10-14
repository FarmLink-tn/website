# FarmLink Website Monorepo

This repository contains the FarmLink marketing experience, authenticated IoT dashboard, AI advisor, and supporting PHP APIs. The original static pages remain at the repository root so legacy deployments can continue to merge safely, while the actively maintained dynamic site lives in [`agrimate-website/`](agrimate-website/).

## Structure

- `index.html`, `about.html`, `how-it-works.html`, `solutions.html`, `ai-advisor.html`, `account.html`, `contact.html` – static marketing entry points preserved for lightweight previews.
- `script.js`, `style.css`, `image/`, etc. – shared frontend assets that legacy branches still expect at the root.
- `server/` – compatibility PHP endpoints that proxy into the dynamic application so older deployments can keep working without merge conflicts.
- `agrimate-website/` – full dynamic PHP project. Each page has a `.php` entry point backed by shared includes, with `.html` twins available for quick static previews.

## Working with the dynamic site

To run the full application with routing handled by PHP:

```bash
cd agrimate-website
php -S localhost:8000
```

This starts PHP's built-in web server with the document root set to the dynamic project. Visit <http://localhost:8000> and open pages like `index.php`, `about.php`, or `solutions.php` directly.

The backend expects the following environment variables:

- `DB_HOST` – Database host
- `DB_NAME` – Database name
- `DB_USER` – Database user
- `DB_PASSWORD` – Database password

## Email delivery configuration

Both `server/contact.php` and `agrimate-website/server/contact.php` load the shared mailer so fixes automatically apply in both locations. Configure delivery with optional environment variables:

- `MAIL_TO_ADDRESS` – Destination mailbox (defaults to `contact@farmlink.tn`).
- `MAIL_FROM_ADDRESS` / `MAIL_FROM_NAME` – Sender identity for PHPMailer and the native fallback.
- `MAIL_ENVELOPE_FROM` – Return-path envelope when PHP's `mail()` transport is used.
- `MAIL_SMTP_HOST`, `MAIL_SMTP_PORT`, `MAIL_SMTP_USERNAME`, `MAIL_SMTP_PASSWORD`, `MAIL_SMTP_SECURE` – Enable authenticated SMTP when PHPMailer is available.

When Composer dependencies (and therefore PHPMailer) are missing, the code automatically falls back to PHP's native `mail()` function with the same headers and sanitized envelope handling.

## Spinning the site into a standalone repository

If you need to promote the dynamic website into its own Git project without losing history:

```bash
cd agrimate-website
rm -rf .git
git init
```

You can then add a remote and push, or copy the directory into a fresh repository. Remember to move or vendor the root-level compatibility files if your deployment still references them.

## AI provider fallback

The `server/ai.php` endpoint attempts to contact the AI provider specified in the request. If the call fails because of a timeout or a 5xx response, it automatically falls back to the other provider. The JSON response includes the provider that ultimately served the request so clients can display which service handled the analysis.
