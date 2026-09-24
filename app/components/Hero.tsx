import { ArrowRight } from "lucide-react";
import { MAIN_SITE_CONTACT } from "../data/site";

export default function Hero() {
  return (
    <section id="top" className="bg-white dark:bg-dark-900 pt-32 pb-16 lg:pt-40 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="eyebrow mb-4">Portfolio · Abu Saleh, Senior Full-Stack Software Engineer</p>
        <h1 className="font-display font-medium text-accent text-[2.5rem] sm:text-6xl lg:text-[4.875rem] leading-[1.02] tracking-tight max-w-5xl">
          Real business problems,{" "}
          <em className="text-slate-500 dark:text-slate-400">and how I solved them.</em>
        </h1>
        <p className="mt-6 mb-8 max-w-2xl text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          12 projects from 16+ years of building payments, point of sale, bookings, marketplaces and
          SaaS platforms. Each one starts with what the business needed and ends with what changed.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={MAIN_SITE_CONTACT}
            className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-semibold"
          >
            Let&apos;s talk
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#work"
            className="inline-flex items-center px-6 py-3 rounded-md text-sm font-semibold text-accent border border-slate-300 dark:border-dark-500 hover:border-accent transition-colors"
          >
            See the work ↓
          </a>
        </div>
      </div>
    </section>
  );
}
