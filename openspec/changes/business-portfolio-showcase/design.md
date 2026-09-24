## Context

See proposal.md for motivation and the specs for requirements. The current state that shapes the approach:

- **Repo state:** `portfolio/` is its own git repo on `main`, and pushing `main` deploys to production. The working tree already has uncommitted edits: About, Contact and Home components are deleted and staged; `page.tsx`, `AGENTS.md` and `README.md` are modified; `.history/` is untracked editor history.
- **Page:** `app/page.tsx` renders `ScrollProgress`, `Navbar`, then `<main className="main-content">` with Portfolio, Services, Resume and Footer.
- **Navbar:** a fixed top bar (not the sidebar AGENTS.md describes) with `menuItems` for portfolio, services and resume, an inline `ThemeToggle`, LinkedIn/GitHub/X icons and a mobile dropdown. Scroll tracking walks `menuItems`.
- **Styles:** `app/globals.css` is 1,306 lines. It has the violet theme tokens and dozens of custom classes for sections that no longer exist (home, about, skills, stats, resume, services, contact), plus `.section:nth-child(n)` rules keyed to the old section order.
- **Theme and assets:** `providers.tsx` defaults to the dark theme. `Portfolio.tsx` is `"use client"` for no reason (no state). `public/profile.png` and `public/portait-profile.png` are not referenced anywhere.
- **Contact:** no page uses `app/api/send-email/route.ts` any more.
- **Landing reference:** the landing site (`../landing`) already implements the target look. Its `app/globals.css` token block, `btn-primary`, `eyebrow`, nav-link and scroll-progress styles, Newsreader setup and `SlashList` are the reference to copy.

## Goals / Non-Goals

**Goals:**
- **Same brand:** the portfolio looks like the landing site, using the same tokens, fonts and component vocabulary.
- **Single source of project data:** one typed data module holds the projects, so Work, the filter and Approach can't drift apart.
- **Accessible without script:** the filter and expandable detail work by keyboard, and the full content is rendered on the server.

**Non-Goals:**
- A shared package between `landing` and `portfolio`. Styles are copied, not linked, because they are two independent repos and deploys.
- Per-project routes or detail pages. It stays a single page.
- Touching `app/api/send-email/route.ts`, `.env` or the deploy workflow.
- Cleaning `.history/` or unrelated public assets (`next.svg` and similar).

## Decisions

### 1. Replace `globals.css` with the landing token system
The file is rewritten to contain the following, and the 1,300 lines of section-specific classes are dropped:
- the same `@theme inline` block as `../landing/app/globals.css`: ash-scale `dark-*`, `slate-*` and `gray-*`, theme-aware `accent` = `--ink`, `ink-inverse`, and `--font-display`
- the `:root` and `.dark` variables
- the scrollbar, `btn-primary`, `eyebrow`, `landing-nav-link` and scroll-progress styles

All components are rewritten with Tailwind utilities, so none of the old classes are needed. `layout.tsx` adds Newsreader (`--font-newsreader`, `axes: ["opsz"]`, normal and italic) next to Inter, and `providers.tsx` changes to `defaultTheme="light"`.
- *Alternative:* recolor the existing custom classes. Rejected: most of them style removed sections, and keeping two styling systems is what AGENTS.md already warns about.

### 2. Project data in `app/data/projects.ts`
The module exports these:
- `problemTypes`: the seven labels, in filter order.
- `type Project`:
  ```ts
  {
    id, business, region, period, role,
    flagship?: boolean,
    types: ProblemType[],
    challenge, approach, result,
    inside: { problem: string; solution: string }[],   // 2–4 pairs
    tech?: string[]                                    // ≤ 6
  }
  ```
- `projects`: ordered with the flagships first (Gourmeal, car rental, point of sale, tour catalogue), then the others newest first.
- `principles`: `{ title, explanation, example, projectId }[]`.

Keeping the order in the array keeps rendering trivial. Approach principles reference `projectId`, which is type-checked against project ids with `as const`, so a broken link fails the build.
- *Alternative:* data inline at the top of each component, as the landing site does. Rejected here because three components share it.

### 3. Components
- **`Hero.tsx`** (server, `id="top"`): eyebrow "Portfolio", a serif headline, a lede, a "Let's talk" button to the main site and a quiet "See the work ↓" anchor to `#work`. It has no photo or stats, so the work stays the hero of the page.
- **`Work.tsx`** (`"use client"`, `id="work"`): holds the selected filter in state, initially "All".
  - Renders the filter as a `role="group"` of `<button aria-pressed>`, each showing a count, plus an `aria-live="polite"` line: "Showing N of 12 projects".
  - Because the initial state is "All", server-rendered HTML contains every project, which satisfies the no-script requirement.
- **`FlagshipProject.tsx`** and **`ProjectCard.tsx`** (server-compatible, rendered by Work):
  - Flagship: a full-width `<article>` with a left rail (period, region, role, problem types), a right column (challenge, how I solved it, the result in an ink-bordered callout) and the "Inside the problem" pairs shown as a two-column list. The tech footnote comes last.
  - Card: a 2-column grid on `md` and 1 column on phones. It shows the same fields compactly, with "Inside the problem" in a native `<details>/<summary>`. That gives keyboard support and no-JS expand for free.
- **`Approach.tsx`** (server, `id="approach"`): the principles in a 3×2 grid on large screens. Each has the example and a "See the project →" anchor to `#<projectId>`.
- **`CallToAction.tsx`** (server): "Got a problem worth solving?" with the intro "Tell me what you're building or what's in the way, and we'll take it from there." and a "Let's talk" button.
- **`Footer.tsx`**: black in both themes. It holds the name and title with "Bangladesh, GMT+6", and links to the main site, blog, LinkedIn, GitHub and X.
- **`Navbar.tsx`**: `menuItems` = work ("Work") and approach ("Approach"). It has the monochrome restyle from the landing site, keeps the inline theme toggle, and adds the "Let's talk" external button. The mobile menu lists both links plus "Let's talk". The LinkedIn/GitHub/X icons show at `xl` only, since the footer carries them too.
- **`page.tsx`**: ScrollProgress, Navbar, then `<main>` with Hero, Work, Approach, CallToAction, and finally Footer.
- **`SlashList.tsx`**: copied from the landing site for tech footnotes.

### 4. Principle links reset the filter
In `Work`, a `useEffect` registers a document-level click listener. For any anchor whose hash matches a project id, it does the following:
1. Prevents the default jump.
2. Sets the filter to "All".
3. On the next frame, scrolls the project into view (`scroll-mt-24` on each article clears the fixed nav).
4. Updates the hash with `history.pushState`.

It also runs once on mount for a project hash in the initial URL. Without script, the plain anchor still works, because every project is in the HTML.
- *Alternative:* lift the filter state into a context shared with Approach. Rejected: it would turn server components into client ones for one link behavior.

### 5. Calls to action go to the main site
A single constant `MAIN_SITE_CONTACT = "https://asmshaon.tech/#contact"` lives in `app/data/site.ts`, next to `MAIN_SITE`, `BLOG`, `LINKEDIN`, `GITHUB` and `X`. This URL is an assumption: the main site's address isn't in any repo, and the portfolio and blog live on `portfolio.` and `blog.` subdomains. Changing the constant changes every call to action.

### 6. Removals
Delete the following once `grep` shows no references:
- `app/components/Services.tsx` and `app/components/Resume.tsx`
- `app/components/Portfolio.tsx` (replaced by `Work.tsx`)
- `public/projects/*`
- `public/Abu Saleh Muhammad Shaon.pdf`

Once the PDF is deleted, Next serves a 404 for its path.

### 7. Draft content
The wording can be tuned during apply. Every figure comes from the shareable inventory, and figures marked "reported" keep that qualifier. No client, supplier or partner brand names appear, apart from Gourmeal, which the owner asked to name.

**Hero**
- **Headline:** "Real business problems, and how I solved them."
- **Lede:** "12 projects from 16+ years of building payments, point of sale, bookings, marketplaces and SaaS platforms. Each one starts with what the business needed and ends with what changed."

**Metadata**
- **Title:** "Abu Saleh – Portfolio of Business Problems Solved"
- **Description:** "12 projects from 16+ years of building payments, point-of-sale, booking, marketplace and SaaS systems: the challenge, how it was solved, and the result."

**Problem types:** Payments & money · Bookings & travel · Retail & point of sale · Marketplaces · Modernizing legacy systems · Security & reliability · Workflow & automation

**Projects**

Flagships come first, with Gourmeal at the very top. Each entry lists id, period, region, role and types, then challenge / how I solved it / result, then the "Inside the problem" pairs, then tech.

1. **`gourmeal`**: Gourmeal: food ordering from your seat at events and food trucks · May 2026 – present · United States · Lead engineer, team of 4–5 · **flagship, shown first; the only named client** · *Payments & money, Retail & point of sale, Security & reliability*
   - **Challenge:** Fans order from their seats and vendors print tickets in the truck. Prices were partly decided by the phone app, where they could be tampered with, and the order services had never had a security review.
   - **How I solved it:** Moved all pricing and payment onto the server. Wrote the first security review of the order services and fixed what it found.
   - **Result:** 8 security findings identified. The critical, high and medium ones were fixed within three days. The platform is in its pilot stage.
   - **Inside the problem:**
     - The app decided prices → every order priced from the vendor's menu, with a full breakdown before paying.
     - Rates differ by event and vendor → commission, tax and service charge settable per event, vendor or platform, with the most specific rate winning.
     - Print jobs must not be lost or printed twice → a print queue that printers poll, with stale locks recovered.
     - Password guessing on the vendor console → sign-in locked for 5 minutes after 5 failed attempts.
   - **Tech:** Laravel / Go / Stripe / AWS

2. **`car-rental`**: Car-rental comparison and booking across 10+ suppliers · Mar 2015 – Apr 2020 · Australia · Senior backend developer, one of the two largest contributors · *Bookings & travel, Payments & money, Modernizing legacy systems*
   - **Challenge:** Travellers compare and book cars across many rental companies, each with its own system and rules. Airline and airport partners wanted their own branded sites on the same engine.
   - **How I solved it:** Put every supplier behind one booking flow for search, book, change and cancel, so the site and its partner sites never deal with supplier differences. Helped replace the old booking engine while existing bookings kept working.
   - **Result:** 4M+ rentals across 5 countries, with sub-second responses (reported).
   - **Inside the problem:**
     - Every rental company has its own rules for extras, mileage, driver age and error codes → vehicle data normalized into one shape, and supplier errors turned into clear messages.
     - A booking touches the supplier, the payment and the confirmation, and prices can change between search and booking → bookings created in stages, with the customer protected from price rises.
     - The old engine couldn't be switched off in one go → historical bookings imported, and a few features routed to the old engine until their replacements were ready.
     - Staff needed to hear about problems quickly → alerts for price changes, incomplete bookings and automatic cancellations.
   - **Tech:** Laravel / AngularJS / Stripe

3. **`retail-pos`**: Point of sale, delivery and inventory for licensed retailers · Aug 2021 – Apr 2023 · United States · Lead engineer, team of 2–3 · *Retail & point of sale, Security & reliability*
   - **Challenge:** Regulated retailers had to run in-store sales, delivery and online orders while reporting every regulated sale to the state's track-and-trace system.
   - **How I solved it:** One order engine for the till, delivery, pickup and the online store, with state compliance reporting built into the moment a sale completes. Built the public product website and self-service onboarding from the first commit.
   - **Result:** A wholesale product was spun off from the platform, and it kept pace as the company expanded into more US states. I was the top backend contributor and also helped with hiring.
   - **Inside the problem:**
     - Every regulated sale must be reported exactly once, only for tracked items → each completed sale reported automatically, with untracked items skipped.
     - Sales aren't allowed outside business and restricted hours → sales blocked outside those hours, with an exception for untracked goods.
     - Orders come from four channels with different discounts, taxes and fees → one order engine that applies the right rules per channel.
     - New retailers needed to get started without calling sales → demo booking, sign-up and onboarding that follows each state's rules.

4. **`tour-catalogue`**: One catalogue for seven tour operators · Oct 2023 – Sep 2025 · United States · Proposed and designed the architecture; #1 contributor to the API · *Bookings & travel, Modernizing legacy systems, Security & reliability*
   - **Challenge:** Seven tour operators publish tours, departures and prices in their own formats and on their own schedules. Customers need one consistent page, and the old admin site put the public site at risk with every change.
   - **How I solved it:** One tour format fed by a separate reader for each operator, refreshed automatically every day. Admin work moved to a new API, and a new public website was started on top of it.
   - **Result:** Tour and search pages became several times faster (reported), and adding an operator now means adding one reader.
   - **Inside the problem:**
     - Daily updates could leave the site half-updated → data backed up, loaded into temporary tables, then swapped in at once.
     - Rebuilding search would show customers empty results → the new index built in a copy and renamed into place.
     - Failed background jobs went unnoticed until content went stale → alerts on every failure, and when nothing has completed for four hours.
     - Bots and password guessing hit the site → IPs blocked after 3 failed logins in 5 minutes, with search-engine crawlers still allowed.
   - **Tech:** Laravel / Next.js / Redis

5. **`newsletter-platform`**: A financial-newsletter publisher's own email platform · Jan 2026 – Apr 2026 · United States · Senior full-stack engineer, top contributor in the period · *Modernizing legacy systems, Security & reliability, Workflow & automation*
   - **Challenge:** Editors built research reports by hand in several formats. Management had no single view of performance, and the platform was an old codebase of standalone scripts with security holes and manual deploys.
   - **How I solved it:** Built a report generator and a performance dashboard, and moved legacy screens into a structured layer one module at a time.
   - **Result:** Each report is produced as a web page, a PDF and an interactive flipbook from one saved setup. Critical security holes were fixed, and staging now deploys on every push.
   - **Inside the problem:**
     - Reports were made by hand for each campaign → all three formats generated at once, including on a schedule.
     - No single view of email and ad performance → a nine-tab dashboard covering earnings per subscriber, per click and per offer.
     - Old scripts were risky to change → screens moved into the new structure one module at a time.

6. **`fitness-marketplace`**: A marketplace connecting gyms, trainers and clients · Aug 2023 – Oct 2023 · United States · Senior full-stack engineer · *Marketplaces, Payments & money, Workflow & automation*
   - **Challenge:** Gyms, trainers and clients each needed their own view, bookings needed approval, and the team deployed by hand.
   - **How I solved it:** Dashboards for each role, booking approval and an automatic order flow, plus sign-up flows for web and mobile.
   - **Result:** Tests and deploys now run automatically, with a team message after each deploy and automatically numbered mobile builds.
   - **Inside the problem:**
     - Each role signs up differently on web and mobile → separate flows for trainers, gyms and clients.
     - Earnings were hard to see → total and last-30-day earnings on each dashboard.
     - Manual deploys → an automated test-and-deploy pipeline.

7. **`education-marketplace`**: A marketplace for education consultants · Sep 2023 – Oct 2023 · Australia · Led the restructuring · *Marketplaces, Modernizing legacy systems*
   - **Challenge:** A codebase inherited from another team mixed admin and public code, used inconsistent names and had no data layer.
   - **How I solved it:** Split admin and public modules, added a proper data layer, renamed core concepts to match the business, and migrated the existing data.
   - **Result:** A cleaner codebase the business could keep building on, with new home and job-posting pages.
   - **Inside the problem:**
     - Names didn't match the business → "Freelancer" became "Expert" and "Seminar" became "Training" across code and data.
     - Data didn't fit the new structure → migrations and seeders, with skills merged into one table.

8. **`legal-search`**: Searchable contract examples for lawyers, drawn from SEC filings · Mar 2022 – Apr 2025 · United States · Sole engineer · *Modernizing legacy systems, Payments & money*
   - **Challenge:** Lawyers needed real contract examples, buried in decades of public filings where every form is laid out differently.
   - **How I solved it:** Chose the approach and built the whole product: automatic collection and classification of filings, full-text search, alerts and paid subscriptions, replacing the old site.
   - **Result:** Indexed between 100,000 and 1 million contract exhibits (reported).
   - **Inside the problem:**
     - Exhibits are hidden inside filings of many types → filings parsed and each exhibit classified by number and keywords.
     - Lawyers search by clause wording and need to narrow results → full-text search with filters for company, industry, size, law firm and exhibit type.
     - Users want to know about new matches → saved searches that email new exhibits immediately, daily or weekly.

9. **`ewallet`**: An e-wallet for consumers and merchants, plus a marketplace · Jun 2020 – Jul 2021 · Singapore · Main contributor · *Payments & money, Security & reliability, Marketplaces*
   - **Challenge:** Customers send money, pay merchants by QR code and withdraw to banks across several currencies. A transfer must never be applied twice.
   - **How I solved it:** Built money movement, top-ups, withdrawals and identity checks, and most of the marketplace seller portal, where sellers are paid through the wallet.
   - **Result:** Fixed a double-spend race found by a penetration test and closed the wallet's authorization gaps.
   - **Inside the problem:**
     - Simultaneous requests could change a balance twice → each transfer made all-or-nothing and rejected early if checks fail.
     - Fees, commission and rewards must be right → all of them calculated before any money moves.
     - Reports slowed down payments → reads moved to separate read-only database connections.
   - **Tech:** CakePHP / MySQL / Redis / AWS

10. **`hotel-booking`**: Online hotel booking and front-desk system for the Saudi market · Apr 2014 – Apr 2015 · Saudi Arabia · Senior software engineer (on-site, Dhaka) · *Bookings & travel*
    - **Challenge:** Hotels and motels were booked by phone and email. Owners wanted every property listed in one place with fully online booking.
    - **How I solved it:** Learned a new framework for the project, then built property listings with online booking, the mobile booking API, notifications and the front-desk screens.
    - **Result:** Guests book online in Arabic or English, and front-desk staff check in, move rooms and take payments in one system.
    - **Inside the problem:**
      - Guests needed updates without calling → SMS and bilingual email for cancellations and date changes.
      - Front-desk staff juggle check-ins, room moves and payments → one check-in form, a room-transfer flow with charge adjustment, and reports by role.

11. **`travel-store`**: A multi-product online travel store · Jul 2013 – Feb 2015 · Australia · Software developer (part-time, remote) · *Bookings & travel, Modernizing legacy systems*
    - **Challenge:** The store was built for desktop while phone and tablet traffic grew, and cruises couldn't be sold alongside flights and hotels.
    - **How I solved it:** Rebuilt every product module's pages with responsive layouts, and made cruises a bookable itinerary item.
    - **Result:** Every product's pages were rebuilt for phones and tablets, and cruises appeared in itineraries, emails and PDFs.
    - **Inside the problem:**
      - Sign-up friction hurt registrations → sign-in with three social providers.
      - Staff needed to manage destination videos → a video library with admin screens.

12. **`email-tasks`**: Project management that runs from email · Jan 2012 – Apr 2014 · Bangladesh · Senior software engineer (on-site, Dhaka) · *Workflow & automation*
    - **Challenge:** Teams ran projects through email, so decisions and action items lived in inboxes and nobody could see a project's true state.
    - **How I solved it:** Mapped the workflow with the teams, then built the parsing that turns relevant emails into tracked tasks, and the reply loop.
    - **Result:** Teams could run a project from email alone or from the tool, with nothing lost in between (reported).
    - **Inside the problem:**
      - Work fell between email and the project tool → every relevant email becomes a task automatically.
      - People live in their inbox → specially formatted emails and replies update tasks without opening the tool.

Filter coverage:

| Type | Projects |
|---|---|
| Payments | 5 |
| Bookings | 4 |
| Retail | 2 |
| Marketplaces | 3 |
| Legacy | 6 |
| Security | 5 |
| Workflow | 3 |

**Approach principles** (six, each linking to a project)
1. **Don't let the app set the price:** the server decides what a customer pays. The phone app only displays it. *Example: Gourmeal, every order priced from the vendor's menu.* → `gourmeal`
2. **Never show customers half-finished data:** load new data to the side and swap it in at once. *Example: daily updates from seven tour operators.* → `tour-catalogue`
3. **Money moves all-or-nothing:** a transfer either completes fully or not at all. *Example: the e-wallet double-spend fix.* → `ewallet`
4. **Hide the mess behind one clean door:** many suppliers, one simple way to book. *Example: 10+ rental companies behind one booking flow.* → `car-rental`
5. **Replace old systems without stopping the business:** move one piece at a time and keep the old path working until the new one is ready. *Example: the newsletter platform's module-by-module move.* → `newsletter-platform`
6. **Hear about problems before customers do:** alert on failures, and on silence. *Example: alerts when no background job has finished for four hours.* → `tour-catalogue`

## Risks / Trade-offs

- [Main site URL assumed] → It lives in one constant (§5). Confirm before merging to `main`.
- [Figures overstated] → Only the draft figures above are allowed, with "(reported)" kept. Task 6.2 searches for removed claims.
- [Twelve projects make a long page] → The four flagships show full detail. The other eight are compact cards with the detail collapsed, and the filter narrows the list.
- [Committing on `main` would deploy] → Task 1.1 creates a feature branch first. The user's existing uncommitted edits stay in the working tree and are not committed by this change.
- [Unused `send-email` route] → Left in place as a non-goal. It can be removed later if the portfolio will never host a form again.
