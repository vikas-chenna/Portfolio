import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Star, Trophy } from "lucide-react";
import type { AchievementItem } from "../types";

interface AchievementsProps {
  achievements: AchievementItem[];
}

export const Achievements: React.FC<AchievementsProps> = ({ achievements }) => {
  return (
    <section id="achievements" className="relative z-10 py-24">
      {" "}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-mono text-amber-700 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-400">
            <Trophy className="h-3.5 w-3.5" />
            <span>HONORS & RECOGNITION</span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            Key{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 dark:from-amber-300 dark:via-amber-400 dark:to-orange-400">
              Achievements
            </span>
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
            Academic accomplishments, project milestones and recognition earned
            through learning and practical development.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => (
            <motion.article
              key={`${achievement.title}-${achievement.date}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: Math.min(index * 0.08, 0.25),
              }}
              className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-md dark:border-white/10 dark:bg-[#0f111a]/90 dark:shadow-none dark:hover:border-amber-500/30"
            >
              <div>
                {/* Category + Date */}
                <div className="mb-5 flex items-center justify-between gap-3">
                  <span className="rounded-md border border-amber-200 bg-amber-50 px-2.5 py-1 text-[10px] font-bold text-amber-700 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-400">
                    {achievement.category}
                  </span>

                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    {achievement.date}
                  </span>
                </div>

                {/* Title */}
                <div className="mb-4 flex items-start gap-3">
                  <div className="mt-0.5 shrink-0 rounded-xl border border-amber-200 bg-amber-50 p-2.5 text-amber-600 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-400">
                    <Star className="h-5 w-5" />
                  </div>

                  <h3 className="text-base font-bold leading-6 text-slate-950 transition-colors group-hover:text-amber-700 dark:text-white dark:group-hover:text-amber-300">
                    {achievement.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs leading-6 text-slate-600 dark:text-slate-300">
                  {achievement.description}
                </p>
              </div>

              {/* Footer */}
              <div className="mt-5 flex items-center gap-1.5 border-t border-slate-200 pt-4 text-[11px] text-slate-500 dark:border-white/10 dark:text-slate-400">
                <Sparkles className="h-3 w-3 text-amber-500" />
                <span>Achievement</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
