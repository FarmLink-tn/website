# FarmLink Platform Monorepo

This repository now hosts the production website inside the [`agrimate-website/`](agrimate-website) directory so the codebase can be vendored into a brand new Git project without losing history.

## Project layout
- `agrimate-website/` – full dynamic PHP application, including marketing pages, dashboards, and API endpoints.

To treat the site as its own repository, run:

```bash
cd agrimate-website
rm -rf .git
git init
```

You can then add your own remote and push the freshly initialised repository that contains the entire website.

For local development instructions and runtime requirements, see [`agrimate-website/README.md`](agrimate-website/README.md).
