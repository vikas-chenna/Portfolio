import React from "react";
import { motion } from "framer-motion";
import { Award, Briefcase, Calendar, CheckCircle2, MapPin } from "lucide-react";
import type { ExperienceItem } from "../types";

interface ExperienceProps {
  experiences: ExperienceItem[];
}

export const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section
      id="experience"
      className="relative z-10 border-y border-slate-200 bg-slate-50/60 py-24 dark:border-white/5 dark:bg-[#06070a]/40"
    >
      {" "}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-mono text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
            <Briefcase className="h-3.5 w-3.5" />
            <span>CAREER MILESTONES</span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            Practical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 dark:from-cyan-400 dark:via-blue-500 dark:to-indigo-400">
              Experience
            </span>
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
            Practical experience gained through internships, software projects
            and hands-on development.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-3xl space-y-12 border-l-2 border-blue-200 pl-6 dark:border-blue-500/20 sm:pl-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={`${experience.title}-${experience.organization}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: Math.min(index * 0.08, 0.25),
              }}
              className="group relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] top-1.5 h-5 w-5 rounded-full border-4 border-slate-50 bg-blue-600 transition-transform duration-300 group-hover:scale-125 dark:border-[#08090d] dark:bg-blue-500 sm:-left-[39px]" />

              {/* Card */}
              <div className="space-y-5 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-md dark:border-white/10 dark:bg-[#0f111a]/90 dark:shadow-none dark:hover:border-blue-500/30 sm:p-8">
                {/* Top */}
                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-200 pb-5 dark:border-white/10">
                  <div>
                    <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-cyan-400">
                      {experience.type}
                    </span>

                    <h3 className="mt-3 text-xl font-bold text-slate-950 dark:text-white sm:text-2xl">
                      {experience.title}
                    </h3>

                    <h4 className="mt-1 text-sm font-semibold text-blue-600 dark:text-blue-400">
                      {experience.organization}
                    </h4>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-col items-start gap-2 text-xs text-slate-500 dark:text-slate-400 sm:items-end">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-blue-500" />
                      {experience.duration}
                    </span>

                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400" />
                      {experience.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {experience.description}
                </p>

                {/* Contributions */}
                {experience.highlights.length > 0 && (
                  <div className="space-y-3 pt-1">
                    <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      <Award className="h-3.5 w-3.5 text-amber-500" />
                      Key Contributions
                    </span>

                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {experience.highlights.map(
                        (highlight, highlightIndex) => (
                          <div
                            key={`${highlight}-${highlightIndex}`}
                            className="flex items-start gap-2.5 rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs leading-5 text-slate-700 dark:border-white/5 dark:bg-white/5 dark:text-slate-300"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />

                            <span>{highlight}</span>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
