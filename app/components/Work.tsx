"use client";

import { useCallback, useEffect, useState } from "react";
import { problemTypes, projects, type ProblemType } from "../data/projects";
import FlagshipProject from "./FlagshipProject";
import ProjectCard from "./ProjectCard";

type Filter = "All" | ProblemType;

const projectIds = new Set<string>(projects.map((p) => p.id));
const filters: { label: Filter; count: number }[] = [
  { label: "All", count: projects.length },
  ...problemTypes.map((type) => ({
    label: type,
    count: projects.filter((p) => p.types.includes(type)).length,
  })),
];

export default function Work() {
  const [filter, setFilter] = useState<Filter>("All");

  const matches = (types: ProblemType[]) => filter === "All" || types.includes(filter);
  const shown = projects.filter((p) => matches(p.types));
  const cardsShown = shown.filter((p) => !p.flagship).length;

  // Links to a project (e.g. from the Approach section) reset the filter so the
  // project is visible, then scroll to it.
  const showProject = useCallback((id: string) => {
    setFilter("All");
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    });
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as Element | null)?.closest?.("a[href^='#']");
      const id = anchor?.getAttribute("href")?.slice(1);
      if (!id || !projectIds.has(id)) return;
      e.preventDefault();
      showProject(id);
    };
    document.addEventListener("click", onClick);

    // On first load the filter is already "All", so only the scroll is needed.
    const initial = window.location.hash.slice(1);
    if (projectIds.has(initial)) {
      requestAnimationFrame(() => document.getElementById(initial)?.scrollIntoView());
    }

    return () => document.removeEventListener("click", onClick);
  }, [showProject]);

  return (
    <section id="work" className="bg-white dark:bg-dark-900 border-t border-slate-200 dark:border-dark-600 pt-16 pb-20 lg:pt-20 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8">
          <p className="eyebrow mb-3">Work</p>
          <h2 className="font-display font-medium text-accent text-4xl lg:text-5xl leading-tight">
            The challenge, how I solved it, and the result
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Client names are left out on purpose, apart from my current work at Gourmeal. Filter by
            the kind of problem you care about.
          </p>
        </div>

        <div className="sticky top-16 lg:top-20 z-30 bg-white dark:bg-dark-900 py-3.5 border-b border-slate-200 dark:border-dark-600">
          <div role="group" aria-label="Filter projects by problem type" className="flex flex-wrap gap-2">
            {filters.map(({ label, count }) => {
              const active = filter === label;
              return (
                <button
                  key={label}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter(label)}
                  className={`inline-flex items-baseline gap-1.5 rounded-full border px-3 py-1.5 text-[0.84375rem] transition-colors ${
                    active
                      ? "bg-accent text-ink-inverse border-accent"
                      : "text-accent border-slate-300 dark:border-dark-500 hover:border-accent"
                  }`}
                >
                  {label}
                  <span className={`text-xs tabular-nums ${active ? "opacity-70" : "text-slate-500 dark:text-slate-400"}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
          <p aria-live="polite" className="mt-2.5 text-sm text-slate-600 dark:text-slate-400">
            Showing {shown.length} of {projects.length} projects
          </p>
        </div>

        <div>
          {projects
            .filter((p) => p.flagship)
            .map((p) => (
              <FlagshipProject key={p.id} project={p} hidden={!matches(p.types)} />
            ))}
        </div>

        <div hidden={cardsShown === 0} className="mt-14 mb-2 flex flex-wrap items-baseline justify-between gap-3">
          <h3 className="font-display text-accent text-[1.625rem]">More projects</h3>
          <span className="text-sm text-slate-600 dark:text-slate-400">
            Open &ldquo;Inside the problem&rdquo; on any project for the details
          </span>
        </div>
        <div className="grid md:grid-cols-2 gap-x-12">
          {projects
            .filter((p) => !p.flagship)
            .map((p) => (
              <ProjectCard key={p.id} project={p} hidden={!matches(p.types)} />
            ))}
        </div>
      </div>
    </section>
  );
}
