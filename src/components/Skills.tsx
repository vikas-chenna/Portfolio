import React, { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Search, Sparkles } from "lucide-react";
import type { SkillItem } from "../types";

interface SkillsProps {
  skills: SkillItem[];
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    "Frontend",
    "Backend",
    "Database",
    "Programming",
    "Tools",
  ];

  const filteredSkills = skills.filter((skill) => {
    const matchesCategory =
      selectedCategory === "All" || skill.category === selectedCategory;

    const matchesSearch = skill.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="skills"
      className="relative z-10 border-y border-slate-200 bg-slate-50/60 py-24 dark:border-white/5 dark:bg-[#06070a]/40"
    >
      {" "}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-mono text-cyan-700 dark:border-cyan-500/20 dark:bg-cyan-500/10 dark:text-cyan-400">
            <Cpu className="h-3.5 w-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            Skills &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 dark:from-cyan-400 dark:via-blue-500 dark:to-indigo-400">
              Technologies
            </span>
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
            Technologies and tools I use across frontend, backend, databases,
            programming and software development.
          </p>
        </div>

        {/* Filters + Search */}
        <div className="mb-10 flex flex-col items-center justify-between gap-4 lg:flex-row">
          {/* Categories */}
          <div className="flex w-full flex-wrap items-center justify-center gap-1.5 rounded-2xl border border-slate-200 bg-white/70 p-1.5 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:shadow-none lg:w-auto">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white shadow-sm dark:bg-blue-500"
                    : "text-slate-600 hover:bg-slate-100 hover:text-blue-600 dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-blue-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

            <input
              type="text"
              placeholder="Search skills..."
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white/80 py-2.5 pl-10 pr-4 text-xs text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/10 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-blue-500/50"
            />
          </div>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: Math.min(index * 0.04, 0.3),
              }}
              className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md dark:border-white/10 dark:bg-[#0f111a]/80 dark:shadow-none dark:hover:border-blue-500/30"
            >
              <div>
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-2.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-blue-100 bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-100 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400 dark:group-hover:bg-blue-500/15">
                      <Sparkles className="h-4 w-4" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="truncate text-sm font-bold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                        {skill.name}
                      </h3>

                      <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
                        {skill.category}
                      </span>
                    </div>
                  </div>

                  
                </div>

                {skill.status && (
                  <span className="mb-3 inline-block rounded-md border border-amber-200 bg-amber-50 px-2 py-1 text-[10px] font-medium text-amber-700 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-400">
                    {skill.status}
                  </span>
                )}
              </div>

            </motion.div>
          ))}
        </div>

        {/* Empty Search */}
        {filteredSkills.length === 0 && (
          <div className="py-16 text-center text-sm text-slate-500 dark:text-slate-400">
            No matching skills found.
          </div>
        )}
      </div>
    </section>
  );
};
