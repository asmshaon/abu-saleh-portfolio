# AGENTS.md — Abu Saleh Portfolio

## Commands

```bash
npm run dev       # dev server on :3000
npm run build     # production build
npm start         # production server
npm run lint      # ESLint (eslint-config-next + core-web-vitals + typescript)
```

**No typecheck script.** TypeScript is checked only at build time. Run `npx tsc --noEmit` for a faster feedback loop.

## Architecture

- **Single-page app.** `app/page.tsx` stacks ScrollProgress, Navbar, then `<main>` with Hero, Work, Approach and CallToAction, followed by Footer. There are no sub-routes.
- **Content lives in `app/data/`.**
  - `projects.ts` holds the 12 projects (flagships first) and the Approach principles.
  - `site.ts` holds the outbound links (main site, blog, profiles).
  - Principle `projectId`s are type-checked against project ids.
  - Projects come from the shareable career inventory. Clients stay anonymous except Gourmeal, the current engagement. Every figure must appear in that inventory.
- **Hash-based navigation.** The top Navbar links to `#work` and `#approach`, and scroll matching updates the active item. Any in-page link to a project id (for example `#car-rental`) is caught by `Work`, which resets the filter to "All" and scrolls to that project.
- **Components.**
  - `Work` (the problem-type filter), `Navbar` and `ScrollProgress` are `"use client"`.
  - Hero, Approach, CallToAction and Footer are Server Components.
  - `FlagshipProject` and `ProjectCard` render inside `Work`, and "Inside the problem" on cards uses native `<details>`.
- **No contact form or direct contact details on this site.** Every "Let's talk" button goes to the main site's contact form (`MAIN_SITE_CONTACT`). Don't add an email, phone, WhatsApp, map or CV download.
- **`app/api/send-email/route.ts`** is left over from the old contact form and is no longer used by any page.
- **Dynamic app, not static export.** `next.config.ts` has no `output: 'export'`. The deployed server runs `npm start` via PM2.

## Environment

- The `.env` file checked into the repo contains a real API key. Do not modify or commit changes to it casually.

## Styling Conventions

- The look matches the main landing site (`../landing`): monochrome black, white and neutral ash only, with no colored accents, gradients or glows. Light is the default theme and dark is available through the toggle.
- `app/globals.css` holds the same token system as the landing site:
  - `dark-*`, `slate-*` and `gray-*` all resolve to one neutral ash scale.
  - `accent` is theme-aware ink (`--ink`) and `ink-inverse` is its opposite.
  - `font-display` is the Newsreader serif for headings.
  - A few shared classes: `btn-primary`, `eyebrow`, nav-link and scroll-progress styles.
- Everything else is Tailwind utilities. Style both themes (pattern: `bg-slate-50 dark:bg-dark-800`). Every section follows the theme except `Footer`, which stays black.

## Deployment

- GitHub Actions (`.github/workflows/deploy.yml`) deploys on push to `main` via SSH to a Hostinger server.
- The server uses PM2 process name **`portfolio-app`** and NVM with Node LTS.
- Production install uses `npm ci --include=dev` (Next.js needs devDeps for build).
- The app is served on port **3001** in production (`npm start -- --port 3001`).

## Testing

- **No tests exist** in this repo. Do not look for test files or a test script.

## Path Alias

`@/*` maps to project root (`./*`). Use `@/app/components/...` imports sparingly; existing code uses relative imports within the `app/` directory.
