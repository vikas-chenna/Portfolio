import React, { useEffect, useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import type { PortfolioData } from './types';
import { fallbackPortfolioData, fetchPortfolioData } from './data/portfolioData';

import { BackgroundCanvas } from './components/BackgroundCanvas';
import { ScrollProgress } from './components/ScrollProgress';
import { CustomCursor } from './components/CustomCursor';
import { PageLoader } from './components/PageLoader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { GithubSection } from './components/GithubSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const AppContent: React.FC = () => {
  const [data, setData] = useState<PortfolioData>(fallbackPortfolioData);
  const [, setPageLoaded] = useState(false);

  useEffect(() => {
    fetchPortfolioData().then((fetched) => {
      if (fetched) setData(fetched);
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] selection:bg-blue-500/30 font-sans overflow-x-hidden transition-colors duration-300">
      {/* Top Scroll Indicator */}
      <ScrollProgress />

      {/* Mouse Cursor Follow Glow */}
      <CustomCursor />

      {/* Initial Animated Page Loader */}
      <PageLoader onComplete={() => setPageLoaded(true)} />

      {/* Background Mesh Glow */}
      <BackgroundCanvas />

      {/* Glassmorphic Navbar Header */}
      <Navbar personal={data.personal} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero personal={data.personal} />
        <About personal={data.personal} />
        <Skills skills={data.skills} />
        <Projects projects={data.projects} />
        <Experience experiences={data.experience} />
        <Education education={eduDataAdapter(data.education)} />
        <Certifications certifications={data.certifications} />
        <Achievements achievements={data.achievements} />
        <GithubSection />
        <Contact personal={data.personal} />
      </main>

      {/* Footer */}
      <Footer personal={data.personal} />
    </div>
  );
};

function eduDataAdapter(edu: PortfolioData['education']) {
  return edu.map(e => ({
    degree: e.degree,
    institution: e.institution,
    location: e.location,
    score: e.score,
    period: e.period,
    status: e.status,
    details: e.details
  }));
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
