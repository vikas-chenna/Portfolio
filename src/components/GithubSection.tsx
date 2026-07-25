import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  ExternalLink,
  GitFork,
  Loader2,
  Star,
  Users,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
}

interface GitHubUser {
  login: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
  public_gists: number;
  html_url: string;
  bio: string | null;
}

const GITHUB_USERNAME = "vikas-chenna";

export const GithubSection: React.FC = () => {
  const [userData, setUserData] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        setHasError(false);

        const [userResponse, reposResponse] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`,
          ),
        ]);

        if (!userResponse.ok || !reposResponse.ok) {
          throw new Error("Unable to fetch GitHub data");
        }

        const user: GitHubUser = await userResponse.json();
        const repositories: GitHubRepo[] = await reposResponse.json();

        setUserData(user);
        setRepos(repositories);
      } catch {
        setHasError(true);
        setUserData(null);
        setRepos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  return (
    <section
      id="github"
      className="relative z-10 border-y border-slate-200 bg-slate-50/60 py-24 dark:border-white/5 dark:bg-[#06070a]/40"
    >
      {" "}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-mono text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
            <FaGithub className="h-3.5 w-3.5" />
            <span>LIVE GITHUB INTEGRATION</span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            GitHub{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 dark:from-cyan-400 dark:via-blue-500 dark:to-indigo-400">
              Activity & Repositories
            </span>
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
            Live public profile statistics and recently updated repositories
            fetched directly from GitHub.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex flex-col items-center justify-center gap-3 py-16 text-slate-500 dark:text-slate-400">
            <Loader2 className="h-7 w-7 animate-spin text-blue-600 dark:text-blue-400" />

            <span className="text-xs font-mono">
              Fetching GitHub profile...
            </span>
          </div>
        )}

        {/* Error */}
        {!loading && hasError && (
          <div className="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white/80 p-8 text-center shadow-sm dark:border-white/10 dark:bg-[#0f111a]/90">
            <FaGithub className="mx-auto h-8 w-8 text-slate-500 dark:text-slate-400" />

            <h3 className="mt-4 font-bold text-slate-900 dark:text-white">
              GitHub data is temporarily unavailable
            </h3>

            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              You can still visit my GitHub profile directly.
            </p>

            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400"
            >
              View GitHub Profile
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        )}

        {/* Content */}
        {!loading && !hasError && userData && (
          <div className="space-y-10">
            {/* Profile */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-between gap-7 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm dark:border-white/10 dark:bg-[#0f111a]/90 dark:shadow-none md:flex-row sm:p-8"
            >
              <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
                <img
                  src={userData.avatar_url}
                  alt={`${userData.login} GitHub profile`}
                  className="h-20 w-20 rounded-2xl border-2 border-blue-200 object-cover dark:border-blue-500/30"
                />

                <div>
                  <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                    <h3 className="text-xl font-bold text-slate-950 dark:text-white sm:text-2xl">
                      @{userData.login}
                    </h3>

                    <span className="rounded-full border border-blue-200 bg-blue-50 px-2 py-0.5 text-[10px] font-medium text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
                      Developer
                    </span>
                  </div>

                  <p className="mt-2 max-w-md text-xs leading-6 text-slate-500 dark:text-slate-400">
                    {userData.bio || "Full Stack Developer"}
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                <div className="min-w-[90px] rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-center dark:border-white/5 dark:bg-white/5">
                  <div className="mb-1 flex items-center justify-center gap-1.5 text-xs text-blue-600 dark:text-cyan-400">
                    <BookOpen className="h-3.5 w-3.5" />
                    <span>Repos</span>
                  </div>

                  <span className="text-lg font-bold text-slate-950 dark:text-white">
                    {userData.public_repos}
                  </span>
                </div>

                <div className="min-w-[90px] rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-center dark:border-white/5 dark:bg-white/5">
                  <div className="mb-1 flex items-center justify-center gap-1.5 text-xs text-blue-600 dark:text-blue-400">
                    <Users className="h-3.5 w-3.5" />
                    <span>Followers</span>
                  </div>

                  <span className="text-lg font-bold text-slate-950 dark:text-white">
                    {userData.followers}
                  </span>
                </div>

                <a
                  href={userData.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-xs font-semibold text-white transition-all hover:bg-blue-700 active:scale-95 dark:bg-blue-500 dark:hover:bg-blue-400"
                >
                  View Profile
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>

            {/* Repositories */}
            {repos.length > 0 && (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {repos.map((repo, index) => (
                  <motion.a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: Math.min(index * 0.08, 0.25),
                    }}
                    className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md dark:border-white/10 dark:bg-[#0f111a]/80 dark:shadow-none dark:hover:border-blue-500/30"
                  >
                    <div>
                      <div className="mb-3 flex items-start justify-between gap-3">
                        <div className="flex min-w-0 items-center gap-2">
                          <BookOpen className="h-4 w-4 shrink-0 text-blue-600 dark:text-cyan-400" />

                          <h4 className="truncate text-sm font-bold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-cyan-400">
                            {repo.name}
                          </h4>
                        </div>

                        {repo.language && (
                          <span className="shrink-0 rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] font-mono text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                            {repo.language}
                          </span>
                        )}
                      </div>

                      <p className="mb-5 line-clamp-2 text-xs leading-6 text-slate-500 dark:text-slate-400">
                        {repo.description || "Public GitHub repository"}
                      </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-slate-200 pt-4 text-xs text-slate-500 dark:border-white/10 dark:text-slate-400">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Star className="h-3.5 w-3.5 text-amber-500" />
                          {repo.stargazers_count}
                        </span>

                        <span className="flex items-center gap-1">
                          <GitFork className="h-3.5 w-3.5 text-blue-500" />
                          {repo.forks_count}
                        </span>
                      </div>

                      <span className="text-[10px] font-medium transition-colors group-hover:text-blue-600 dark:group-hover:text-cyan-400">
                        View Source →
                      </span>
                    </div>
                  </motion.a>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
