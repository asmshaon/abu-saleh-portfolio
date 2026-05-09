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

- **Single-page app** — all sections live in `app/page.tsx`, which imports every component from `app/components/`. There are no sub-routes.
- **Hash-based navigation** — sidebar links use `#home`, `#about`, etc. Scroll matching updates the active nav item. No react-router.
- **CSS is a hybrid** — Tailwind CSS 4 is configured (via `@tailwindcss/postcss`), but `app/globals.css` also defines extensive custom CSS classes (`.section`, `.portfolio-grid`, `.sidebar`, `.nav-item`, etc.). Components use a mix of both. Do NOT assume everything is Tailwind utility classes.
- **API route** — `app/api/send-email/route.ts` powers the contact form. Uses Resend API. Requires `RESEND_API_KEY` env var.
- **Mixed component types** — interactive components (`Sidebar`, `Home`, `Portfolio`, `Contact`, `ScrollProgress`) are `"use client"`. `About`, `Resume`, and `Services` are Server Components.
- **Dynamic app, not static export** — `next.config.ts` has no `output: 'export'`. The deployed server runs `npm start` via PM2.

## Environment

- Copy `.env.local.example` to `.env.local` and set `RESEND_API_KEY` for the contact form to work.
- The `.env` file checked into the repo contains a real API key — do not modify or commit changes to it casually.

## Styling Conventions

- Theme variables are defined in `:root` in `globals.css` (not in Tailwind config).
- CSS class naming follows BEM-ish flat names (`.section-title`, `.btn-primary`, `.portfolio-overlay`).
- Responsive breakpoints are in `globals.css` at 1024px (tablet) and 768px (mobile).

## Deployment

- GitHub Actions (`.github/workflows/deploy.yml`) deploys on push to `main` via SSH to a Hostinger server.
- The server uses PM2 process name **`portfolio-app`** and NVM with Node LTS.
- Production install uses `npm ci --include=dev` (Next.js needs devDeps for build).
- The app is served on port **3001** in production (`npm start -- --port 3001`).

## Testing

- **No tests exist** in this repo. Do not look for test files or a test script.

## Path Alias

`@/*` maps to project root (`./*`). Use `@/app/components/...` imports sparingly; existing code uses relative imports within the `app/` directory.
