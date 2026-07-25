import React from "react";
import { motion } from "framer-motion";
import { Calendar, GraduationCap, MapPin } from "lucide-react";
import type { EducationItem } from "../types";

interface EducationProps {
  education: EducationItem[];
}

export const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section id="education" className="relative z-10 py-24">
      {" "}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-mono text-cyan-700 dark:border-cyan-500/20 dark:bg-cyan-500/10 dark:text-cyan-400">
            <GraduationCap className="h-3.5 w-3.5" />
            <span>ACADEMIC BACKGROUND</span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            Education &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 dark:from-cyan-400 dark:via-blue-500 dark:to-indigo-400">
              Qualifications
            </span>
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
            My academic journey in computer applications, software development,
            databases and modern computing technologies.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {education.map((edu, index) => {
            const completed =
              edu.status === "Graduated" || edu.status === "Completed";

            return (
              <motion.article
                key={`${edu.degree}-${edu.institution}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: Math.min(index * 0.08, 0.25),
                }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-md dark:border-white/10 dark:bg-[#0f111a]/90 dark:shadow-none dark:hover:border-cyan-500/30 sm:p-8"
              >
                <div>
                  {/* Status + Period */}
                  <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-semibold ${
                        completed
                          ? "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400"
                          : "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400"
                      }`}
                    >
                      {edu.status}
                    </span>

                    <span className="flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400">
                      <Calendar className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400" />
                      {edu.period}
                    </span>
                  </div>

                  {/* Degree */}
                  <h3 className="mb-1 text-xl font-bold leading-snug text-slate-950 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-cyan-400 sm:text-2xl">
                    {edu.degree}
                  </h3>

                  {/* Institution */}
                  <h4 className="mb-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
                    {edu.institution}
                  </h4>

                  {/* Location */}
                  <div className="mb-6 flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{edu.location}</span>
                  </div>

                  {/* Details */}
                  <p className="mb-6 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {edu.details}
                  </p>
                </div>

                {/* Score */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-5 dark:border-white/10">
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    Academic Score
                  </span>

                  <span className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-bold text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-cyan-400">
                    {edu.score}
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
