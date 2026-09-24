import type { Project } from "../data/projects";
import { labelClass, ProblemPairs, TechLine, TypeChips } from "./ProjectParts";

export default function ProjectCard({ project, hidden }: { project: Project; hidden?: boolean }) {
  return (
    <article
      id={project.id}
      hidden={hidden}
      className="scroll-mt-40 flex flex-col py-8 border-t border-slate-200 dark:border-dark-600"
    >
      <p className="flex flex-wrap gap-x-3.5 gap-y-1 text-sm text-slate-600 dark:text-slate-400 mb-2.5">
        <span className="font-medium text-accent">{project.period}</span>
        <span>{project.region}</span>
        <span>{project.role}</span>
      </p>
      <h3 className="font-display text-accent text-2xl leading-snug mb-4">{project.business}</h3>

      <dl className="space-y-2 text-[0.9375rem]">
        {[
          ["Challenge", project.challenge],
          ["Solved by", project.approach],
          ["Result", project.result],
        ].map(([term, value]) => (
          <div key={term} className="grid sm:grid-cols-[6rem_1fr] gap-x-3.5 gap-y-0.5">
            <dt className={`${labelClass} sm:mt-1`}>{term}</dt>
            <dd className={term === "Result" ? "text-accent font-medium" : "text-slate-700 dark:text-slate-300"}>
              {value}
            </dd>
          </div>
        ))}
      </dl>

      <details className="group mt-4 border border-slate-200 dark:border-dark-600 rounded-md">
        <summary className="flex items-center justify-between cursor-pointer list-none px-3.5 py-2.5 text-sm font-semibold text-accent [&::-webkit-details-marker]:hidden">
          Inside the problem
          <span aria-hidden="true" className="text-lg leading-none font-normal group-open:hidden">
            +
          </span>
          <span aria-hidden="true" className="text-lg leading-none font-normal hidden group-open:inline">
            –
          </span>
        </summary>
        <div className="px-3.5 pb-1.5">
          <ProblemPairs project={project} />
        </div>
      </details>

      <div className="mt-4">
        <TypeChips project={project} />
      </div>
      <TechLine project={project} />
    </article>
  );
}
