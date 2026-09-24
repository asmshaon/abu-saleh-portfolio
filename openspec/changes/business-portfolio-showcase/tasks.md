## 1. Setup

- [x] 1.1 Create and switch to branch `business-portfolio-showcase` from `main`, keeping the existing uncommitted edits in the working tree. Verify that `git branch --show-current` prints the new branch and `git status` still shows the pre-existing edits.

## 2. Theme and foundations

- [x] 2.1 Rewrite `app/globals.css` as the landing token system (design §1): ash-scale `dark-*`/`slate-*`/`gray-*`, `accent` = `--ink`, `ink-inverse`, `--font-display`, the `:root`/`.dark` variables, scrollbar, `btn-primary`, `eyebrow`, `landing-nav-link` and scroll-progress styles. Drop every old section class. Verify that `grep -nE '#7c3aed|#a78bfa|rgba\(124|linear-gradient' app/globals.css` returns nothing.
- [x] 2.2 Set `defaultTheme="light"` in `app/providers.tsx`. Add Newsreader (`--font-newsreader`, `axes: ["opsz"]`, normal and italic) in `app/layout.tsx`, and set the title and description from design §7. Verify that `npm run build` passes and the tab title reads "Abu Saleh – Portfolio of Business Problems Solved".
- [x] 2.3 Add `app/data/site.ts` with the `MAIN_SITE`, `MAIN_SITE_CONTACT`, `BLOG`, `LINKEDIN`, `GITHUB` and `X` constants (design §5). Verify that `npx tsc --noEmit` passes.

## 3. Content data

- [x] 3.1 Create `app/data/projects.ts` with `problemTypes`, the `Project` type, the 12 `projects` (flagships first, in the order Gourmeal, car rental, point of sale, tour catalogue; then the others newest first) and the 6 `principles`, all from design §7. Principles are typed so that `projectId` must be an existing project id. Verify that `npx tsc --noEmit` passes and that a deliberately wrong `projectId` fails type-checking (then revert that edit).
- [x] 3.2 Check the data against the specs. Verify with a quick script or by reading that every project has 2–4 `inside` pairs and at most 6 `tech` items, and that every problem type matches at least one project (expected counts: Payments 5, Bookings 4, Retail 2, Marketplaces 3, Legacy 6, Security 5, Workflow 3).

## 4. Components

- [x] 4.1 Copy `SlashList.tsx` from `../landing/app/components/`. Verify that it renders slash separators with `aria-hidden`.
- [x] 4.2 Create `Hero.tsx` (design §3): the "Portfolio" eyebrow, the serif headline, the lede, a "Let's talk" button to `MAIN_SITE_CONTACT` and a "See the work ↓" anchor to `#work`. Verify at 375px and 1280px in both themes.
- [x] 4.3 Create `FlagshipProject.tsx` and `ProjectCard.tsx`. The flagship shows every field, with "Inside the problem" visible. The card uses `<details>/<summary>` for "Inside the problem". Both have `id={project.id}` and `scroll-mt-24`, and the tech footnote goes through `SlashList`. Verify that a card's detail opens and closes with Enter/Space from the keyboard.
- [x] 4.4 Create `Work.tsx` (`"use client"`, `id="work"`):
  - filter buttons with counts and `aria-pressed`, in a `role="group"`
  - the `aria-live` "Showing N of 12 projects" line
  - flagships rendered before cards
  - the document click listener and on-mount hash handling that reset the filter to "All" for project anchors (design §4)

  Verify that Gourmeal is the first project with no filter, that filtering "Payments & money" shows 5 projects with flagships first, and that "All" restores 12.
- [x] 4.5 Create `Approach.tsx` (`id="approach"`) with the six principles and "See the project →" anchors. Verify that, with the filter set to "Marketplaces", clicking the car-rental principle link resets the filter to "All" and scrolls to `#car-rental`.
- [x] 4.6 Create `CallToAction.tsx` with the copy from design §3 and a "Let's talk" button to `MAIN_SITE_CONTACT`. Rewrite `Footer.tsx` as a black band in both themes with the name, title, "Bangladesh, GMT+6" and links to the main site, blog, LinkedIn, GitHub and X. Verify that the footer stays black in the light theme.
- [x] 4.7 Rewrite `Navbar.tsx`:
  - `menuItems` = Work, Approach
  - the monochrome restyle, with the theme toggle kept
  - a "Let's talk" external button
  - social icons at `xl` only
  - a mobile menu with Work, Approach and "Let's talk"

  Verify that the active link follows scrolling and that the mobile menu works.
- [x] 4.8 Recolor `ScrollProgress.tsx` if it uses anything beyond the shared CSS classes. Verify that the bar is visible in both themes.

## 5. Page assembly and removals

- [x] 5.1 Update `app/page.tsx` to render ScrollProgress, Navbar, then `<main>` with Hero, Work, Approach and CallToAction, then Footer. Verify that `npm run build` passes.
- [x] 5.2 Delete `Services.tsx`, `Resume.tsx`, `Portfolio.tsx`, `public/projects/*` and `public/Abu Saleh Muhammad Shaon.pdf` once `grep -rn "Services\|Resume\|Portfolio\b\|/projects/\|\.pdf" app` shows no remaining references. Verify that `npm run build` passes and that `curl -sI "localhost:<port>/Abu%20Saleh%20Muhammad%20Shaon.pdf"` returns 404.
- [x] 5.3 Update `AGENTS.md` (Architecture and Styling sections) to describe the new page composition, `app/data/`, the monochrome token system with light as the default, and contact through the main site. Verify that it no longer mentions a sidebar, Services, Resume or a contact form on this site.

## 6. Verification

- [x] 6.1 Run `npm run lint` and `npm run build`. Both pass.
- [x] 6.2 Fetch the rendered page from the dev server and search it for "SPORTS", "mailto:", "tel:", "wa.me", "WhatsApp", "@gmail", "iframe", ".pdf", "AI-powered", "Services", ">Contact<", "15+" and the supplier or partner names from the inventory (for example "G Adventures", "Globus", "Collette", "Hertz", "Avis"). There are no matches.
- [x] 6.3 In the browser, in light and dark at 375px and 1280px:
  - no horizontal scroll
  - every section follows the theme except the black footer
  - a computed-colour scan finds no chromatic UI colour
  - muted text meets 4.5:1 contrast
  - headings use Newsreader
  - a first visit with no stored preference loads light, and the dark choice persists across reloads
- [x] 6.4 Run `openspec validate business-portfolio-showcase --strict`. It passes.
