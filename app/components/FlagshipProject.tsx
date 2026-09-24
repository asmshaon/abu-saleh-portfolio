import type { Project } from "../data/projects";
import { labelClass, ProblemPairs, TechLine, TypeChips } from "./ProjectParts";

export default function FlagshipProject({ project, hidden }: { project: Project; hidden?: boolean }) {
  return (
    <article
      id={project.id}
      hidden={hidden}
      className="scroll-mt-40 grid md:grid-cols-[14.5rem_1fr] gap-6 md:gap-12 py-12 border-b border-slate-200 dark:border-dark-600"
    >
      <div>
        <span className="inline-block mb-4 px-2 py-0.5 rounded-sm bg-accent text-ink-inverse text-[0.6875rem] font-semibold uppercase tracking-[0.14em]">
          {project.label ?? "Flagship"}
        </span>
        <dl className="flex flex-row flex-wrap md:flex-col gap-x-7 gap-y-3.5 text-sm">
          {[
            ["When", project.period],
            ["Where", project.region],
            ["Role", project.role],
          ].map(([term, value]) => (
            <div key={term}>
              <dt className={labelClass}>{term}</dt>
              <dd className="mt-0.5 text-accent">{value}</dd>
            </div>
          ))}
          <div>
            <dt className={labelClass}>Problems</dt>
            <dd className="mt-1.5">
              <TypeChips project={project} />
            </dd>
          </div>
        </dl>
      </div>

      <div className="max-w-3xl">
        <h3 className="font-display text-accent text-[1.75rem] lg:text-[2.375rem] leading-[1.12] mb-6">
          {project.business}
        </h3>

        <div className="grid md:grid-cols-2 gap-7">
          <div>
            <p className={`${labelClass} mb-1.5`}>The challenge</p>
            <p className="text-slate-700 dark:text-slate-300">{project.challenge}</p>
          </div>
          <div>
            <p className={`${labelClass} mb-1.5`}>How I solved it</p>
            <p className="text-slate-700 dark:text-slate-300">{project.approach}</p>
          </div>
        </div>

        <div className="mt-7 px-5 py-4 border-l-2 border-accent bg-slate-50 dark:bg-dark-800">
          <p className={`${labelClass} mb-1`}>The result</p>
          <p className="text-accent font-medium text-[1.0625rem]">{project.result}</p>
        </div>

        <p className="font-display text-accent text-xl mt-9 mb-3">Inside the problem</p>
        <ProblemPairs project={project} columns={2} />
        <TechLine project={project} />
      </div>
    </article>
  );
}
