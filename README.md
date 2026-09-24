# Abu Saleh Muhammad Shaon — Portfolio

Personal portfolio of **Abu Saleh Muhammad Shaon**, a Senior Full-Stack Software Engineer and Solution Architect with 15+ years of experience building scalable, high-availability, and cost-efficient web applications.

**Live:** [portfolio.asmshaon.tech](https://portfolio.asmshaon.tech/)

Built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4.

## About Me

Full Stack Developer and Solution Architect skilled in PHP, Node.js, and React, with strong expertise in AI integration, payment systems, and cloud-native architecture. Top-Rated Plus on Upwork with 25K+ hours and a 100% job success rate.

- **LinkedIn:** [linkedin.com/in/asmshaon](https://www.linkedin.com/in/asmshaon)
- **GitHub:** [github.com/asmshaon](https://github.com/asmshaon)
- **X:** [x.com/asmshaon](https://x.com/asmshaon)
- **Location:** Bangladesh (GMT+6)

## Sections

The site is a single page with hash-based navigation:

1. **Portfolio** (`#portfolio`): selected projects, including a B2B car booking engine, a B2C travel/cruise/hotel platform, and a sports e-commerce SaaS
2. **Services** (`#services`): full-stack development, system design and architecture, backend, frontend, API development and integration, cloud-native and DevOps
3. **Experience** (`#resume`): summary, education, certifications, work history, and a downloadable PDF resume

## Features

- Single-page layout with smooth scrolling and hash-based navigation (the URL hash updates as you scroll)
- Dark/light theme toggle via `next-themes` (dark by default)
- Scroll progress indicator
- Responsive layout with a mobile menu
- Downloadable resume (`public/Abu Saleh Muhammad Shaon.pdf`)

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19, TypeScript 5
- **Styling:** Tailwind CSS 4 plus custom CSS in `app/globals.css`
- **Icons:** lucide-react and inline SVG
- **Theming:** next-themes
- **Email:** Resend (contact API route)
- **Hosting:** Node.js server managed by PM2, deployed with GitHub Actions

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
npm install
cp .env.local.example .env.local   # then set RESEND_API_KEY
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start the dev server     |
| `npm run build` | Create a production build |
| `npm start`     | Run the production server |
| `npm run lint`  | Run ESLint               |

There is no typecheck script. Run `npx tsc --noEmit` to type-check.

## Environment Variables

| Variable         | Description                                                                 |
| ---------------- | --------------------------------------------------------------------------- |
| `RESEND_API_KEY` | API key from [Resend](https://resend.com/api-keys), used by `app/api/send-email` |

## Project Structure

```
abu-saleh-portfolio/
├── app/
│   ├── api/send-email/route.ts   # Contact form email endpoint (Resend)
│   ├── components/
│   │   ├── Navbar.tsx            # Top navigation, theme toggle, social links
│   │   ├── ScrollProgress.tsx    # Scroll progress bar
│   │   ├── Portfolio.tsx         # Portfolio section
│   │   ├── Services.tsx          # Services section
│   │   ├── Resume.tsx            # Experience section
│   │   └── Footer.tsx            # Footer
│   ├── globals.css               # Theme variables and custom styles
│   ├── layout.tsx                # Root layout and metadata
│   ├── page.tsx                  # Page composition
│   └── providers.tsx             # Theme provider
├── public/
│   ├── projects/                 # Project screenshots
│   ├── profile.png               # Profile photo
│   └── Abu Saleh Muhammad Shaon.pdf  # Resume
└── package.json
```

## Updating Content

| What to change              | File                                   |
| --------------------------- | -------------------------------------- |
| Name, title, social links   | `app/components/Navbar.tsx`            |
| Projects                    | `app/components/Portfolio.tsx`, images in `public/projects/` |
| Services                    | `app/components/Services.tsx`          |
| Experience and education    | `app/components/Resume.tsx`            |
| Resume PDF                  | `public/Abu Saleh Muhammad Shaon.pdf`  |
| Page title and description  | `app/layout.tsx`                       |
| Colors                      | `:root` and `.dark` in `app/globals.css` |

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which connects to the server over SSH and:

1. Pulls the latest code into `/var/www/portfolio`
2. Installs dependencies with `npm ci --include=dev`
3. Builds with `npm run build`
4. Reloads (or starts) the PM2 process `portfolio-app` on port **3001**

Required GitHub secrets: `SERVER_HOST`, `SERVER_USER`, `SSH_PRIVATE_KEY`.

## License

© Abu Saleh Muhammad Shaon. All rights reserved.
