import React from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink, Plus, ShieldCheck, Sparkles } from "lucide-react";
import type { CertificationItem } from "../types";

interface CertificationsProps {
  certifications: CertificationItem[];
}

export const Certifications: React.FC<CertificationsProps> = ({
  certifications,
}) => {
  return (
    <section
      id="certifications"
      className="relative z-10 border-y border-slate-200 bg-slate-50/60 py-24 dark:border-white/5 dark:bg-[#06070a]/40"
    >
      {" "}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-mono text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
            <Award className="h-3.5 w-3.5" />
            <span>VERIFIED CREDENTIALS</span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            Certifications &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 dark:from-cyan-400 dark:via-blue-500 dark:to-indigo-400">
              Credentials
            </span>
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
            Certifications and credentials earned through technical learning,
            practical training and professional development.
          </p>
        </div>

        {/* Certifications */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certification, index) => (
            <motion.article
              key={`${certification.title}-${certification.issuer}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: Math.min(index * 0.08, 0.25),
              }}
              className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md dark:border-white/10 dark:bg-[#0f111a]/90 dark:shadow-none dark:hover:border-blue-500/30"
            >
              <div>
                {/* Badge + Date */}
                <div className="mb-5 flex items-center justify-between gap-3">
                  <span className="rounded-md border border-blue-200 bg-blue-50 px-2.5 py-1 text-[10px] font-bold text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-cyan-400">
                    {certification.badge}
                  </span>

                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    {certification.date}
                  </span>
                </div>

                {/* Certificate */}
                <div className="mb-4 flex items-start gap-3">
                  <div className="mt-0.5 shrink-0 rounded-xl border border-blue-200 bg-blue-50 p-2.5 text-blue-600 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
                    <ShieldCheck className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="text-base font-bold leading-6 text-slate-950 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-cyan-400">
                      {certification.title}
                    </h3>

                    <p className="mt-1 text-xs font-semibold text-blue-600 dark:text-blue-400">
                      {certification.issuer}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="mb-5 text-xs leading-6 text-slate-600 dark:text-slate-300">
                  {certification.description}
                </p>
              </div>

              {/* Footer */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-4 dark:border-white/10">
                <span className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                  <Sparkles className="h-3 w-3" />
                  Verified Certificate
                </span>

                {certification.credentialUrl &&
                  certification.credentialUrl !== "#" && (
                    <a
                      href={certification.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs font-semibold text-blue-600 transition-colors hover:text-blue-800 dark:text-cyan-400 dark:hover:text-cyan-300"
                    >
                      View Credential
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
              </div>
            </motion.article>
          ))}

          {/* Future Certifications */}
          <div className="flex min-h-[220px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white/40 p-6 text-center dark:border-white/10 dark:bg-white/[0.02]">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 dark:bg-white/5 dark:text-slate-400">
              <Plus className="h-5 w-5" />
            </div>

            <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-300">
              Continuous Learning
            </h4>

            <p className="mt-1 max-w-xs text-xs leading-5 text-slate-500">
              More certifications and technical credentials will be added as I
              continue expanding my skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
