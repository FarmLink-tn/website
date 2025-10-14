## FarmLink Website Monorepo

This repository hosts the FarmLink marketing site, dashboards, and backend APIs. The actively maintained dynamic application lives in [`agrimate-website/`](agrimate-website/), but we also keep a small compatibility layer at the repository root so existing deployments (or long lived branches) that expect assets like `script.js` or `server/auth.php` continue to merge cleanly.
codex/transform-to-fully-dynamic-website-zc2hd8

## Repository layout

- `agrimate-website/` – full dynamic PHP application that powers every public page, the authenticated IoT dashboard, the AI advisor, and the administration console. Static `.html` twins are kept next to their `.php` counterparts for quick previews without a PHP runtime.
- `script.js`, `server/auth.php` – thin passthrough copies of their counterparts in `agrimate-website/` to avoid merge conflicts with branches that still reference the legacy root structure. Update the files inside `agrimate-website/` and mirror changes here to keep them in sync.
- `image/`, `style.css`, `aos.css`, etc. – when the dynamic site is used in-place these assets should be served from inside `agrimate-website/`. If you spin the application out into its own repository, move the assets alongside it or update the asset paths accordingly.

## Using the dynamic site
=======

## Repository layout

codex/transform-to-fully-dynamic-website-iy4522
- `agrimate-website/` – full dynamic PHP application that powers every public page, the authenticated IoT dashboard, the AI advisor, and the administration console. Static `.html` twins are kept next to their `.php` counterparts for quick previews without a PHP runtime.
- `script.js`, `server/auth.php` – thin passthrough copies of their counterparts in `agrimate-website/` to avoid merge conflicts with branches that still reference the legacy root structure. Update the files inside `agrimate-website/` and mirror changes here to keep them in sync.
- `image/`, `style.css`, `aos.css`, etc. – when the dynamic site is used in-place these assets should be served from inside `agrimate-website/`. If you spin the application out into its own repository, move the assets alongside it or update the asset paths accordingly.

## Using the dynamic site
=======
This repository contains the dynamic files for the FarmLink website. All public pages are now rendered through PHP in the project root.

## Structure
- `index.php` – landing page
- `about.php` – about FarmLink
- `how-it-works.php` – explanation of our process
- `solutions.php` – overview of available solutions
- `ai-advisor.php` – access to the AI advisor
- `account.php` / `register.php` – authentication flows
- `profile.php` – authenticated IoT dashboard
- `admin.php` – administration console (requires admin role)
- `contact.php` – contact form
- `image/` – shared images
- `script.js`, `style.css` – client-side assets
- `server/` – PHP backend scripts
## main


To work exclusively with the dynamic application:

```bash
cd agrimate-website
php -S localhost:8000
```

This starts PHP's built-in web server with the document root set to the dynamic project. Visit <http://localhost:8000> and browse pages such as `index.php`, `about.php`, `solutions.php`, or any other entry point directly.

The backend expects the following environment variables to be available before you hit the authenticated endpoints:

- `DB_HOST` – Database host
- `DB_NAME` – Database name
- `DB_USER` – Database user
- `DB_PASSWORD` – Database password

## Spinning the site into a standalone repository

If you need to promote the website into its own Git project without losing history:

```bash
cd agrimate-website
rm -rf .git
git init
```

You can then add a remote and push, or copy the directory into a fresh repository. Remember to move or vendor the root-level compatibility files if your deployment still references them.

## AI provider fallback

The `server/ai.php` endpoint attempts to contact the AI provider specified in the request. If the call fails because of a timeout or a 5xx response, it automatically falls back to the other provider. The JSON response includes the provider that ultimately served the request so clients can display which service handled the analysis.
