## Why

The portfolio site (portfolio.asmshaon.tech) is the "see the work" page linked from the main landing site. It isn't doing that job yet:
- **Too little work:** it shows only three image tiles with a title and a category. One of them, "SPORTS Ecommerce", isn't in the career inventory.
- **Wrong focus for its readers:** its Services and Experience sections repeat a skills-and-resume story. The site is aimed at recruiters and business readers, who need to see which problems were solved and what changed as a result.
- **Doesn't match the landing site:** the landing site was just redesigned in black, white and ash, with business-first copy, anonymized case studies drawn from the career inventory, and contact through its form only. The portfolio should look and read like the same brand.

## What Changes

- **Projects from the inventory:** the three tiles are replaced with 12 anonymized projects from the shareable career inventory. Each one shows the business, the period, the role, **the challenge, how I solved it, and the result**. Each also has an expandable "Inside the problem" list of 2–4 concrete problem→solution pairs, which put the problem-solving front and centre. Four flagship projects get a larger layout: **Gourmeal** (the current engagement, named at the owner's request and shown first), car rental, point of sale for regulated retail, and the tour catalogue.
- **Filter by problem:** visitors can narrow the projects by the kind of business problem, such as payments and money movement, bookings and travel, retail and point of sale, marketplaces, modernizing legacy systems, security and reliability, and workflow and automation.
- **How I approach problems (new):** a short section of working principles, each backed by a real example from the projects, for example "never trust the phone app with the price" or "never leave the site half-updated".
- **Visual theme:** the same monochrome black, white and ash palette and the same Newsreader + Inter type as the landing site. Light is the default and dark is on the toggle. The old violet accent and gradients are removed.
- **Simpler page:** the page is a hero, the projects, the approach section, a call to action and a footer. The nav has only Work and Approach, plus a "Let's talk" button.
- **BREAKING (removals):**
  - The Services and Experience (Resume) sections and their menu items are removed.
  - The CV download (`public/Abu Saleh Muhammad Shaon.pdf`) is removed.
  - The project screenshots in `public/projects/` are removed, along with the unsupported "SPORTS Ecommerce" tile.
- **Contact:** the portfolio has no form of its own. "Let's talk" sends visitors to the main site's contact form. No email address, phone number, WhatsApp or map appears. LinkedIn, GitHub, X and the blog stay linked.
- **Metadata:** the title and description drop the "AI-powered applications" claim and match the business-first positioning, including 16+ years.

## Capabilities

### New Capabilities
- `portfolio-projects`: the set of 12 projects, anonymized apart from Gourmeal, and how each one is presented (challenge, approach, result, the problem→solution detail, flagship layout). Every figure must be traceable to the inventory, and technology appears only as a footnote.
- `problem-filter`: filtering the projects by business problem type.
- `problem-solving-approach`: the principles section, with each principle tied to a real project.
- `portfolio-navigation-and-contact`: the reduced navigation, the removed sections and CV download, and "Let's talk" as the only call to action, leading to the main site's form with no direct contact details.
- `monochrome-visual-theme`: the black, white and ash palette, light by default, both themes, legible contrast, and the greyscale treatment.

### Modified Capabilities
(none, since the project had no specs before this change)

## Impact

- **Code:**
  - `app/page.tsx`, `app/layout.tsx`, `app/providers.tsx` and `app/globals.css`. The 1,300-line custom stylesheet is reduced to tokens and a few shared classes.
  - `app/components/Navbar.tsx`, `Footer.tsx`, `ScrollProgress.tsx` and `Portfolio.tsx`, which is rewritten.
  - New components for the hero, the approach section and the call to action.
  - Deleted: `Services.tsx`, `Resume.tsx`, `public/projects/*` and the CV PDF.
- **Existing uncommitted work:** the working tree already has uncommitted edits (About, Contact and Home components deleted and staged; `page.tsx`, `AGENTS.md` and `README.md` modified). This change builds on top of them.
- **API:** `app/api/send-email/route.ts` is no longer used by any page. It is left in place and untouched, as is the committed `.env`.
- **Dependencies:** none added.
- **Content source:** only the shareable edition of the career inventory, never the PRIVATE edition.
- **Deployment:** pushing to `main` deploys to production (PM2 `portfolio-app` on port 3001).
