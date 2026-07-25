import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const PageLoader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setLoading(false);
            onComplete();
          }, 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#08090d] text-white select-none"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center gap-6"
          >
            {/* Animated Logo Shield */}
            <div className="relative flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-brand-blue/20 via-brand-purple/20 to-brand-pink/20 border border-white/10 shadow-glow-purple">
              <span className="text-3xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-purple to-brand-pink">
                VC
              </span>
              {/* Spinner border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent border-t-brand-cyan border-r-brand-purple animate-spin-slow" />
            </div>

            <div className="flex flex-col items-center gap-2">
              <h2 className="text-xl font-bold tracking-wide">Vikas Chenna</h2>
              <p className="text-xs font-mono text-slate-400">Full Stack Web Engineering</p>
            </div>

            {/* Progress bar */}
            <div className="w-56 h-1.5 bg-white/10 rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-brand-blue via-brand-purple to-brand-pink shadow-glow-blue"
                style={{ width: `${progress}%` }}
              />
            </div>

            <span className="text-xs font-mono text-slate-400">{progress}%</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
