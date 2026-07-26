import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import type { PersonalInfo } from "../types";

interface NavbarProps {
  personal: PersonalInfo;
}

export const Navbar: React.FC<NavbarProps> = ({ personal }) => {
  const { theme, toggleTheme } = useTheme();

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "GitHub", href: "#github" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();

    setMobileMenuOpen(false);

    window.setTimeout(() => {
      const section = document.querySelector(href);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        window.history.replaceState(null, "", href);
      }
    }, 250);
  };

  const handleHomeNavigation = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    setMobileMenuOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    window.history.replaceState(null, "", window.location.pathname);
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/80 bg-white/80 py-3 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/80 dark:shadow-none"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <a
          href="#"
          onClick={handleHomeNavigation}
          className="group flex items-center gap-3"
          aria-label="Go to homepage"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 transition-all group-hover:border-blue-400 dark:border-blue-500/20 dark:bg-blue-500/10 dark:group-hover:border-blue-400/50">
            <span className="text-lg font-extrabold tracking-tight text-blue-600 dark:text-blue-400">
              VC
            </span>
          </div>

          <div className="hidden flex-col sm:flex">
            <span className="text-sm font-bold tracking-wide text-slate-900 transition-colors group-hover:text-blue-600 dark:text-slate-100 dark:group-hover:text-blue-400">
              {personal.name}
            </span>

            <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
              Full Stack Developer
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white/70 px-3 py-1.5 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:shadow-none lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(event) => handleNavigation(event, link.href)}
              className="rounded-full px-3 py-1.5 text-xs font-medium text-slate-600 transition-all hover:bg-slate-100 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-blue-400"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
            title={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white/70 text-slate-600 transition-all hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-blue-500/30 dark:hover:bg-blue-500/10 dark:hover:text-blue-400"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>

          {/* Resume Desktop */}
          <a
            href={personal.resumeUrl}
            download="Vikas_Chenna_Resume.pdf"
            className="hidden items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-semibold text-white transition-all hover:bg-blue-700 active:scale-95 dark:bg-blue-500 dark:hover:bg-blue-400 sm:flex"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Resume</span>
          </a>

          {/* Mobile Menu */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={
              mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white/70 text-slate-600 transition-all hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10 lg:hidden"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-b border-slate-200 bg-white/95 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/95 lg:hidden"
          >
            <nav className="mx-auto flex max-w-7xl flex-col px-6 py-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(event) => handleNavigation(event, link.href)}
                  className="border-b border-slate-100 py-3 text-sm font-medium text-slate-700 transition-colors hover:text-blue-600 dark:border-white/5 dark:text-slate-300 dark:hover:text-blue-400"
                >
                  {link.name}
                </a>
              ))}

              <a
                href={personal.resumeUrl}
                download="Vikas_Chenna_Resume.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400"
              >
                <Download className="h-4 w-4" />
                <span>Download Resume</span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
