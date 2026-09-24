import { principles } from "../data/projects";

export default function Approach() {
  return (
    <section
      id="approach"
      className="bg-slate-50 dark:bg-dark-800 border-t border-slate-200 dark:border-dark-600 py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="eyebrow mb-3">Approach</p>
          <h2 className="font-display font-medium text-accent text-4xl lg:text-5xl leading-tight">
            How I think about a problem
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Six habits that show up in almost every project, each with the place it came from.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 dark:bg-dark-600 border border-slate-200 dark:border-dark-600">
          {principles.map((principle) => (
            <div key={principle.title} className="flex flex-col gap-2.5 bg-slate-50 dark:bg-dark-800 p-7">
              <h3 className="font-display text-accent text-[1.4375rem] leading-snug">{principle.title}</h3>
              <p className="text-[0.9375rem] text-slate-600 dark:text-slate-400">{principle.explanation}</p>
              <p className="mt-auto pt-3 border-t border-slate-200 dark:border-dark-600 text-[0.90625rem] text-slate-700 dark:text-slate-300">
                <span className="font-semibold text-accent">Example:</span> {principle.example}
              </p>
              <a
                href={`#${principle.projectId}`}
                className="self-start text-sm text-accent border-b border-slate-300 dark:border-dark-500 hover:border-accent transition-colors"
              >
                See the project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
