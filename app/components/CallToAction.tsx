import { ArrowRight } from "lucide-react";
import { MAIN_SITE_CONTACT } from "../data/site";

export default function CallToAction() {
  return (
    <section className="bg-white dark:bg-dark-900 border-t border-slate-200 dark:border-dark-600 py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-end justify-between gap-8">
        <div>
          <p className="eyebrow mb-3">Let&apos;s talk</p>
          <h2 className="font-display font-medium text-accent text-4xl lg:text-[3.375rem] leading-[1.05]">
            Got a problem worth solving?
          </h2>
          <p className="mt-4 max-w-md text-lg text-slate-600 dark:text-slate-400">
            Tell me what you&apos;re building or what&apos;s in the way, and we&apos;ll take it from there.
          </p>
        </div>
        <a
          href={MAIN_SITE_CONTACT}
          className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-semibold"
        >
          Let&apos;s talk
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
