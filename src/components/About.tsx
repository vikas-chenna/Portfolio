import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Code,
  GraduationCap,
  HeartHandshake,
  MapPin,
  Target,
  User,
} from "lucide-react";
import type { PersonalInfo } from "../types";

interface AboutProps {
  personal: PersonalInfo;
}

export const About: React.FC<AboutProps> = ({ personal }) => {
  const highlights = [
    {
      icon: MapPin,
      label: "Location",
      value: personal.location,
      color: "text-blue-600 dark:text-blue-400",
      background: "bg-blue-50 dark:bg-blue-500/10",
      border: "border-blue-200 dark:border-blue-500/20",
    },
    {
      icon: GraduationCap,
      label: "Education",
      value: "MCA Student @ VNSGU",
      color: "text-indigo-600 dark:text-indigo-400",
      background: "bg-indigo-50 dark:bg-indigo-500/10",
      border: "border-indigo-200 dark:border-indigo-500/20",
    },
    {
      icon: Briefcase,
      label: "Experience",
      value: "IBM SkillsBuild AI Virtual Intern",
      color: "text-cyan-600 dark:text-cyan-400",
      background: "bg-cyan-50 dark:bg-cyan-500/10",
      border: "border-cyan-200 dark:border-cyan-500/20",
    },
    {
      icon: Target,
      label: "Target Role",
      value: "Full Stack Software Engineer",
      color: "text-emerald-600 dark:text-emerald-400",
      background: "bg-emerald-50 dark:bg-emerald-500/10",
      border: "border-emerald-200 dark:border-emerald-500/20",
    },
  ];

  return (
    <section id="about" className="relative z-10 py-24">
      {" "}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-mono text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
            <User className="h-3.5 w-3.5" />
            <span>GET TO KNOW ME</span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 dark:from-cyan-400 dark:via-blue-500 dark:to-indigo-400">
              Vikas Chenna
            </span>
          </h2>

          <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500" />
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12">
          {/* Main About Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white/80 p-7 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-[#0f111a]/80 dark:shadow-xl sm:p-8 lg:col-span-7"
          >
            <div className="space-y-6">
              {/* Card Heading */}
              <div className="flex items-center gap-3">
                <div className="rounded-xl border border-blue-200 bg-blue-50 p-3 text-blue-600 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
                  <Code className="h-6 w-6" />
                </div>

                <h3 className="text-xl font-bold text-slate-950 dark:text-white sm:text-2xl">
                  Crafting Scalable Digital Experiences
                </h3>
              </div>

              {/* Bio */}
              <p className="text-base leading-8 text-slate-600 dark:text-slate-300">
                {personal.aboutBio}
              </p>

              {/* Career Objective */}
              <div className="space-y-2 rounded-xl border border-slate-200 bg-slate-50/80 p-5 dark:border-white/10 dark:bg-white/5">
                <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
                  <Target className="h-4 w-4" />
                  Career Objective
                </span>

                <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                  “{personal.careerObjective}”
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6 dark:border-white/10">
              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <HeartHandshake className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />

                <span>Driven by Clean Code & User Experience</span>
              </div>

              <a
                href="#contact"
                className="text-xs font-semibold text-blue-600 transition-colors hover:text-blue-800 dark:text-blue-400 dark:hover:text-cyan-400"
              >
                Let's Build Together →
              </a>
            </div>
          </motion.div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md dark:border-white/10 dark:bg-[#0f111a]/80 dark:shadow-none dark:hover:border-white/20"
                >
                  <div
                    className={`rounded-xl border p-3 ${item.background} ${item.border} ${item.color}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="min-w-0">
                    <span className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400">
                      {item.label}
                    </span>

                    <h4 className="mt-1 text-sm font-bold leading-6 text-slate-900 dark:text-white sm:text-base">
                      {item.value}
                    </h4>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
