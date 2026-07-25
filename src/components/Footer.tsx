import React from "react";
import { ArrowUp } from "lucide-react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";
import type { PersonalInfo } from "../types";

interface FooterProps {
  personal: PersonalInfo;
}

export const Footer: React.FC<FooterProps> = ({ personal }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "GitHub", href: "#github" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative z-10 border-t border-slate-200 bg-slate-50/80 pb-10 pt-16 dark:border-white/10 dark:bg-[#040508]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="flex flex-col items-center justify-between gap-8 border-b border-slate-200 pb-12 dark:border-white/10 md:flex-row">
          {/* Brand */}
          <div className="flex flex-col items-center space-y-3 text-center md:items-start md:text-left">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 dark:border-blue-500/20 dark:bg-blue-500/10">
                <span className="text-sm font-extrabold text-blue-600 dark:text-blue-400">
                  VC
                </span>
              </div>

              <span className="text-lg font-bold text-slate-950 dark:text-white">
                {personal.name}
              </span>
            </div>

            <p className="max-w-sm text-xs leading-6 text-slate-500 dark:text-slate-400">
              Full Stack Developer focused on building practical, scalable and
              user-friendly software applications.
            </p>
          </div>

          {/* Navigation */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-medium text-slate-500 dark:text-slate-400"
          >
            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:shadow-none dark:hover:border-blue-500/30 dark:hover:text-blue-400"
            >
              <FaGithub className="h-4 w-4" />
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:shadow-none dark:hover:border-blue-500/30 dark:hover:text-blue-400"
            >
              <FaLinkedin className="h-4 w-4" />
            </a>

            <a
              href={`mailto:${personal.email}`}
              aria-label="Email"
              title="Email"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:shadow-none dark:hover:border-blue-500/30 dark:hover:text-blue-400"
            >
              <FaEnvelope className="h-4 w-4" />
            </a>

            {/* Back To Top */}
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              title="Back to top"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-blue-700 active:scale-95 dark:bg-blue-500 dark:hover:bg-blue-400"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-center text-xs text-slate-500 dark:text-slate-500 sm:flex-row sm:text-left">
          <span>
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </span>

          <span>Built with React, TypeScript, Vite & Tailwind CSS.</span>
        </div>
      </div>
    </footer>
  );
};
