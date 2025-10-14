
=======

# FarmLink Website

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

Obsolete files from the previous `farmlink_website/` directory have been removed.

# website

## Configuration

This project reads database connection details from environment variables:

- `DB_HOST` – Database host
- `DB_NAME` – Database name
- `DB_USER` – Database user
- `DB_PASSWORD` – Database password

Ensure these are set in your environment before running the application.



## AI Provider Fallback

The `server/ai.php` endpoint attempts to contact the AI provider specified in the request. If the call fails due to a timeout or a 5xx error, it automatically falls back to the other provider. The JSON response includes the provider ultimately used so that clients can display which service handled the request.

