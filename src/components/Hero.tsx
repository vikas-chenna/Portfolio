import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
ArrowRight,
Check,
Code2,
Copy,
Download,
Mail,
Sparkles,
Terminal,
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import type { PersonalInfo } from '../types';

interface HeroProps {
personal: PersonalInfo;
}

type CodeTab = 'react' | 'php' | 'sql';

export const Hero: React.FC<HeroProps> = ({ personal }) => {
const [titleIndex, setTitleIndex] = useState(0);
const [currentText, setCurrentText] = useState('');
const [isDeleting, setIsDeleting] = useState(false);
const [copied, setCopied] = useState(false);
const [activeCodeTab, setActiveCodeTab] = useState<CodeTab>('react');

const titles = useMemo(
() =>
personal.titles && personal.titles.length > 0
? personal.titles
: [
'Full Stack Developer',
'Web Developer',
'PHP Developer',
'MCA Student @ VNSGU',
],
[personal.titles]
);

/* Typewriter Effect */
useEffect(() => {
const fullText = titles[titleIndex] ?? titles[0];


let delay = isDeleting ? 40 : 75;

if (!isDeleting && currentText === fullText) {
  delay = 1600;
}

if (isDeleting && currentText === '') {
  delay = 300;
}

const timeout = window.setTimeout(() => {
  if (!isDeleting) {
    if (currentText === fullText) {
      setIsDeleting(true);
      return;
    }

    setCurrentText(fullText.slice(0, currentText.length + 1));
    return;
  }

  if (currentText === '') {
    setIsDeleting(false);
    setTitleIndex((previous) => (previous + 1) % titles.length);
    return;
  }

  setCurrentText(fullText.slice(0, currentText.length - 1));
}, delay);

return () => window.clearTimeout(timeout);
 

}, [currentText, isDeleting, titleIndex, titles]);

const codeSnippets: Record<CodeTab, string> = {
react: `// Developer Profile

const developer = {
name: "Vikas Chenna",
location: "Surat, Gujarat, India",
education: "MCA @ VNSGU",

stack: [
"React",
"TypeScript",
"Node.js",
"PHP",
"Java",
"MySQL"
],

focus: "Full Stack Development",
status: "Open to Opportunities"
};

export default developer;`,

 
php: `<?php
 
class FullStackDeveloper
{
public string $name = "Vikas Chenna";

public array $skills = [
    "PHP",
    "MySQL",
    "React",
    "REST APIs"
];

public function build(): string
{
    return "Modern Web Application";
}
 
}
?>`,

 
sql: `-- Developer Profile
 
CREATE TABLE developers (
id INT PRIMARY KEY AUTO_INCREMENT,
 
name VARCHAR(100) NOT NULL,

role VARCHAR(100)
    DEFAULT 'Full Stack Developer',

location VARCHAR(100)
    DEFAULT 'Surat, Gujarat, India',

education VARCHAR(100)
    DEFAULT 'MCA @ VNSGU',

status VARCHAR(50)
    DEFAULT 'Open to Opportunities'

);`,
};

const handleCopyCode = async () => {
try {
await navigator.clipboard.writeText(codeSnippets[activeCodeTab]);

 
  setCopied(true);

  window.setTimeout(() => {
    setCopied(false);
  }, 2000);
} catch {
  setCopied(false);
}
 

};

return ( <section className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-32">

 
  <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

    <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-10">

      {/* LEFT SIDE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-start lg:col-span-7"
      >

        {/* Availability */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-xs font-medium text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400">

          <span className="relative flex h-2 w-2">

            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />

            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />

          </span>

          {personal.status}

        </div>

        {/* Intro */}
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
          Welcome to my portfolio
        </p>

        {/* Name */}
        <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
          Hi, I&apos;m{' '}

          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 dark:from-cyan-400 dark:via-blue-500 dark:to-indigo-400">
            {personal.name}
          </span>

        </h1>

        {/* Dynamic Role */}
        <div className="mt-5 flex min-h-12 items-center">

          <span className="text-xl font-medium text-slate-600 dark:text-slate-300 sm:text-2xl lg:text-3xl">
            I am a{' '}

            <span className="font-semibold text-slate-900 dark:text-white">
              {currentText}
            </span>

            <span className="ml-1 animate-pulse text-blue-600 dark:text-blue-400">
              |
            </span>

          </span>

        </div>

        {/* Description */}
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
          Full Stack Developer and MCA student focused on building modern,
          responsive and practical web applications using{' '}

          <span className="font-medium text-slate-900 dark:text-slate-200">
            React, JavaScript, TypeScript, Node.js, PHP, Java and MySQL.
          </span>
        </p>

        {/* CTA */}
        <div className="mt-8 flex w-full flex-wrap items-center gap-3 sm:w-auto">

          <a
            href="#projects"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-blue-700 active:scale-95 dark:bg-blue-500 dark:hover:bg-blue-400 sm:flex-none"
          >
            View Projects
            <ArrowRight className="h-4 w-4" />
          </a>

          <a
            href="#contact"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-6 py-3.5 text-sm font-semibold text-slate-800 transition-all hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-blue-500/30 dark:hover:bg-blue-500/10 dark:hover:text-blue-400 sm:flex-none"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </a>

          <a
            href={personal.resumeUrl}
            download="Vikas_Chenna_Resume.pdf"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-6 py-3.5 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10 sm:flex-none"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>

        </div>

        {/* Social Links */}
        <div className="mt-10 flex w-full items-center gap-4 border-t border-slate-200 pt-5 dark:border-white/10">

          <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
            Connect
          </span>

          <div className="flex items-center gap-2">

            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              title="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white/70 text-slate-600 transition-all hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-blue-500/30 dark:hover:bg-blue-500/10 dark:hover:text-blue-400"
            >
              <FaGithub className="h-4 w-4" />
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white/70 text-slate-600 transition-all hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-blue-500/30 dark:hover:bg-blue-500/10 dark:hover:text-blue-400"
            >
              <FaLinkedin className="h-4 w-4" />
            </a>

            <a
              href={`mailto:${personal.email}`}
              aria-label="Send Email"
              title="Email"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white/70 text-slate-600 transition-all hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-blue-500/30 dark:hover:bg-blue-500/10 dark:hover:text-blue-400"
            >
              <Mail className="h-4 w-4" />
            </a>

          </div>

        </div>

      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="relative min-w-0 lg:col-span-5"
      >

        {/* Terminal */}
        <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#0d0f18] p-1 shadow-2xl backdrop-blur-xl">

          {/* Header */}
          <div className="flex flex-col gap-3 rounded-t-xl border-b border-white/10 bg-[#131622] px-4 py-3 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex min-w-0 items-center gap-2">

              <div className="h-3 w-3 shrink-0 rounded-full bg-rose-500/80" />
              <div className="h-3 w-3 shrink-0 rounded-full bg-amber-500/80" />
              <div className="h-3 w-3 shrink-0 rounded-full bg-emerald-500/80" />

              <span className="ml-1 flex min-w-0 items-center gap-1.5 truncate text-[11px] font-mono text-slate-400 sm:ml-2 sm:text-xs">
                <Terminal className="h-3.5 w-3.5 shrink-0 text-blue-400" />
                developer.config.ts
              </span>

            </div>

            {/* Tabs */}
            <div className="flex w-full items-center gap-1 rounded-lg bg-white/5 p-1 sm:w-auto">

              {(['react', 'php', 'sql'] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveCodeTab(tab)}
                  className={`flex-1 rounded px-2.5 py-1 text-[10px] font-mono uppercase transition-colors sm:flex-none ${
                    activeCodeTab === tab
                      ? 'bg-blue-500 font-bold text-white'
                      : 'text-slate-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}

            </div>

          </div>

          {/* Body */}
          <div className="terminal-scroll relative h-[260px] overflow-auto p-4 font-mono text-xs text-slate-200 sm:p-5 sm:text-sm">

            <button
              type="button"
              onClick={handleCopyCode}
              className="absolute right-3 top-3 z-10 rounded-lg border border-white/10 bg-[#131622]/90 p-1.5 text-slate-400 transition-all hover:bg-white/10 hover:text-white"
              title={copied ? 'Copied' : 'Copy code'}
              aria-label="Copy code"
            >
              {copied ? (
                <Check className="h-3.5 w-3.5 text-emerald-400" />
              ) : (
                <Copy className="h-3.5 w-3.5" />
              )}
            </button>

            <pre className="min-w-max pr-10 leading-relaxed text-slate-300">
              <code>{codeSnippets[activeCodeTab]}</code>
            </pre>

          </div>

          {/* Terminal Footer */}
          <div className="flex flex-wrap items-center justify-between gap-2 rounded-b-xl border-t border-white/5 bg-[#131622] px-4 py-2.5 text-[10px] font-mono text-slate-400 sm:text-[11px]">

            <span className="flex items-center gap-1 text-emerald-400">
              <Sparkles className="h-3 w-3" />
              Available to Build
            </span>

            <span>
              {activeCodeTab === 'react'
                ? 'TSX'
                : activeCodeTab === 'php'
                  ? 'PHP'
                  : 'SQL'}
              {' '}| UTF-8
            </span>

          </div>

        </div>

        {/* Floating Badge */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -bottom-6 -left-5 hidden items-center gap-2 rounded-xl border border-slate-200 bg-white/90 px-4 py-2.5 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-slate-900/90 sm:flex"
        >
          <Code2 className="h-4 w-4 text-blue-500" />

          <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
            Full Stack Development
          </span>
        </motion.div>

      </motion.div>

    </div>

  </div>

</section>


);
};
