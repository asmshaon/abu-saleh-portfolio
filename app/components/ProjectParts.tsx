import type { Project } from "../data/projects";
import { SlashList } from "./SlashList";

export const labelClass =
  "text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400";

export function TypeChips({ project }: { project: Project }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {project.types.map((type) => (
        <li
          key={type}
          className="text-xs text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-dark-500 rounded-full px-2.5 py-0.5"
        >
          {type}
        </li>
      ))}
    </ul>
  );
}

export function ProblemPairs({ project, columns = 1 }: { project: Project; columns?: 1 | 2 }) {
  return (
    <ul className={`grid gap-x-8 ${columns === 2 ? "md:grid-cols-2" : ""}`}>
      {project.inside.map((pair) => (
        <li
          key={pair.problem}
          className="flex flex-col gap-1 py-3.5 border-t border-slate-200 dark:border-dark-600"
        >
          <span className="text-[0.9375rem] text-slate-600 dark:text-slate-400">{pair.problem}</span>
          <span className="text-[0.9375rem] text-accent">
            <span aria-hidden="true" className="text-slate-400">
              →{" "}
            </span>
            <span className="sr-only">Solved by: </span>
            {pair.solution}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function TechLine({ project }: { project: Project }) {
  if (!project.tech) return null;
  return <SlashList items={project.tech} className="mt-5 text-xs text-slate-500 dark:text-slate-400" />;
}
