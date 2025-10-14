
=======

# FarmLink Website

This repository contains the dynamic files for the FarmLink website. All public pages are now rendered through PHP in the project root so you can point your web server at the repository root (or start PHP's built-in server) and immediately reach the site at `/`.

For stakeholders who simply need to preview the marketing site without running PHP, a set of static `.html` twins (for example `index.html`, `about.html`, etc.) mirrors the public pages. Open them directly in your browser or host them with any static file server to review the experience with the original design intact.

## Structure
- `index.php` / `index.html` – landing page
- `about.php` / `about.html` – about FarmLink
- `how-it-works.php` / `how-it-works.html` – explanation of our process
- `solutions.php` / `solutions.html` – overview of available solutions
- `ai-advisor.php` / `ai-advisor.html` – access to the AI advisor
- `account.php` / `register.php` – authentication flows
- `profile.php` – authenticated IoT dashboard
- `admin.php` – administration console (requires admin role)
- `contact.php` / `contact.html` – contact form
- `image/` – shared images
- `script.js`, `style.css` – client-side assets
- `server/` – PHP backend scripts

Obsolete files from the previous `farmlink_website/` directory have been removed.

# website

## Configuration

This project reads database connection details from environment variables:

- `DB_HOST` – Database host
- `DB_NAME` – Database name
- `DB_USER` – Database user
- `DB_PASSWORD` – Database password

Ensure these are set in your environment before running the application.

## Local development

To explore the site locally without configuring Apache or Nginx, use PHP's built-in server from the repository root:

```bash
php -S localhost:8000
```

Then visit <http://localhost:8000> in your browser. All of the site entry points (`index.php`, `about.php`, etc.) live directly in the project root, which is why you do not see a separate `public/` or `dist/` directory.



## AI Provider Fallback

The `server/ai.php` endpoint attempts to contact the AI provider specified in the request. If the call fails due to a timeout or a 5xx error, it automatically falls back to the other provider. The JSON response includes the provider ultimately used so that clients can display which service handled the request.

