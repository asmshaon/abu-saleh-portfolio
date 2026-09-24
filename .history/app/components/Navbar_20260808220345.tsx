"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import Link from "next/link";

const menuItems = [
  { id: "portfolio", label: "Portfolio" },
  { id: "services", label: "Services" },
  { id: "resume", label: "Experience" },
];

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(t);
  }, []);

  if (!mounted) {
    return (
      <button
        className="text-gray-400 hover:text-white transition-colors p-2"
        aria-label="Toggle theme"
      >
        <div className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="text-gray-400 hover:text-white transition-colors p-2"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
}

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("portfolio");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);

    if (element) {
      const navHeight = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      window.history.pushState(null, "", `#${sectionId}`);
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map((item) =>
        document.getElementById(item.id),
      );
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(menuItems[i].id);
          if (window.location.hash !== `#${menuItems[i].id}`) {
            window.history.replaceState(null, "", `#${menuItems[i].id}`);
          }
          break;
        }
      }
    };

    handleScroll();

    let timeoutId: NodeJS.Timeout;
    const throttledScroll = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(handleScroll, 50);
    };

    window.addEventListener("scroll", throttledScroll);

    const initialHash = window.location.hash.slice(1);
    if (initialHash && menuItems.some((item) => item.id === initialHash)) {
      setTimeout(() => {
        const element = document.getElementById(initialHash);
        if (element) {
          const navHeight = 80;
          window.scrollTo({
            top: element.offsetTop - navHeight,
            behavior: "smooth",
          });
        }
      }, 100);
    }

    return () => {
      window.removeEventListener("scroll", throttledScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-900/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 lg:h-20">
            {/* Logo — left, takes equal space */}
            <div className="flex items-center flex-1">
              <Link
                href="/"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent-light flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">AS</span>
                </div>
                <div className="hidden sm:block">
                  <div className="text-white font-semibold text-sm leading-tight">
                    Abu Saleh
                  </div>
                  <div className="text-gray-400 text-xs leading-tight">
                    Senior Software Engineer
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Links — Centered */}
            <div className="hidden lg:flex items-center gap-8">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`landing-nav-link ${activeSection === item.id ? "active" : ""}`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Right Side — right, takes equal space and pushes content to the end */}
            <div className="flex items-center gap-3 flex-1 justify-end">
              <ThemeToggle />
              <a
                href="https://www.linkedin.com/in/asmshaon"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex text-gray-400 hover:text-white transition-colors p-2"
                aria-label="LinkedIn"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://github.com/asmshaon"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex text-gray-400 hover:text-white transition-colors p-2"
                aria-label="GitHub"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://x.com/asmshaon"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex text-gray-400 hover:text-white transition-colors p-2"
                aria-label="X (Twitter)"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Mobile Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden text-gray-300 p-2"
                aria-label="Menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="fixed top-16 left-0 right-0 bg-dark-800 border-t border-white/5 px-4 py-4 space-y-1 z-40 lg:hidden">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className={`block text-sm font-medium py-2 ${
                activeSection === item.id
                  ? "text-accent-light"
                  : "text-gray-300"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
