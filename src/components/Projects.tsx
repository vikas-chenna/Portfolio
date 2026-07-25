import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ExternalLink, Info, Sparkles, X } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import type { ProjectItem } from "../types";

interface ProjectsProps {
  projects: ProjectItem[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [activeModalProject, setActiveModalProject] =
    useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="relative z-10 py-24">
      {" "}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-mono text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
            <FaGithub className="h-3.5 w-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 dark:from-cyan-400 dark:via-blue-500 dark:to-indigo-400">
              Projects
            </span>
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
            Projects where I applied frontend, backend, databases and software
            engineering concepts to build practical applications.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: Math.min(index * 0.08, 0.25),
              }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg dark:border-white/10 dark:bg-[#0f111a]/90 dark:shadow-none dark:hover:border-blue-500/30"
            >
              <div>
                {/* Badge + Live */}
                <div className="mb-5 flex items-center justify-between gap-3">
                  <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[11px] font-semibold text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
                    {project.badge}
                  </span>

                  {project.demo && (
                    <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-600 dark:text-emerald-400">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      Live
                    </span>
                  )}
                </div>

                {/* Title */}
                <div className="mb-4 space-y-2">
                  <h3 className="text-2xl font-bold text-slate-950 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                    {project.title}
                  </h3>

                  <p className="text-xs font-mono text-blue-600 dark:text-cyan-400">
                    {project.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="mb-6 line-clamp-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-mono text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-5 dark:border-white/10">
                <button
                  type="button"
                  onClick={() => setActiveModalProject(project)}
                  className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-semibold text-slate-700 transition-all hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-blue-500/30 dark:hover:bg-blue-500/10 dark:hover:text-blue-400"
                >
                  <Info className="h-3.5 w-3.5" />
                  Project Details
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} GitHub repository`}
                    title="View GitHub Repository"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-600 transition-all hover:border-slate-300 hover:bg-slate-100 hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
                  >
                    <FaGithub className="h-4 w-4" />
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-semibold text-white transition-all hover:bg-blue-700 active:scale-95 dark:bg-blue-500 dark:hover:bg-blue-400"
                    >
                      Live Demo
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {activeModalProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalProject(null)}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-md"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.2 }}
                onClick={(event) => event.stopPropagation()}
                className="project-modal-scroll relative max-h-[90vh] w-full max-w-2xl space-y-6 overflow-y-auto rounded-3xl border border-slate-200 bg-white p-6 text-slate-900 shadow-2xl dark:border-white/10 dark:bg-[#0e1018] dark:text-white sm:p-8"
              >
                {/* Close */}
                <button
                  type="button"
                  onClick={() => setActiveModalProject(null)}
                  aria-label="Close project details"
                  className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>

                {/* Title */}
                <div className="pr-12">
                  <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
                    {activeModalProject.badge}
                  </span>

                  <h3 className="mt-4 text-2xl font-extrabold sm:text-3xl">
                    {activeModalProject.title}
                  </h3>

                  <p className="mt-1 text-sm font-mono text-blue-600 dark:text-cyan-400">
                    {activeModalProject.tagline}
                  </p>
                </div>

                {/* Overview */}
                <div>
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Overview
                  </h4>

                  <p className="text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
                    {activeModalProject.description}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h4 className="mb-3 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    <Sparkles className="h-3.5 w-3.5 text-blue-500" />
                    Key Features
                  </h4>

                  <div className="space-y-2.5">
                    {activeModalProject.features.map((feature, index) => (
                      <div
                        key={`${feature}-${index}`}
                        className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-700 dark:border-white/5 dark:bg-white/5 dark:text-slate-200 sm:text-sm"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />

                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Technologies Used
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-mono text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-cyan-400"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center justify-end gap-3 border-t border-slate-200 pt-5 dark:border-white/10">
                  <a
                    href={activeModalProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-5 py-2.5 text-xs font-semibold text-slate-700 transition-all hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                  >
                    <FaGithub className="h-4 w-4" />
                    View Repository
                  </a>

                  {activeModalProject.demo && (
                    <a
                      href={activeModalProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white transition-all hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400"
                    >
                      Launch Demo
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
