import { BLOG, GITHUB, LINKEDIN, MAIN_SITE, X } from "../data/site";

const links = [
  { label: "Main site", href: MAIN_SITE },
  { label: "Blog", href: BLOG },
  { label: "LinkedIn", href: LINKEDIN },
  { label: "GitHub", href: GITHUB },
  { label: "X", href: X },
];

// Stays black in both themes as the page's closing band.
export default function Footer() {
  return (
    <footer className="bg-dark-900 text-slate-400 border-t border-dark-600 pt-12 pb-10 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-dark-600">
          <div>
            <div className="font-display text-2xl text-slate-100">Abu Saleh</div>
            <div className="mt-1">Senior Full-Stack Software Engineer · Bangladesh, GMT+6</div>
          </div>
          <nav aria-label="Profiles" className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-100 hover:underline underline-offset-4"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="pt-6 text-xs">
          &copy; {new Date().getFullYear()} Abu Saleh Muhammad Shaon. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
