import React from 'react';

export const BackgroundCanvas: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none">
      {/* Primary Blue Glow */}
      <div className="absolute -top-64 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/10" />

      {/* Secondary Cyan Glow */}
      <div className="absolute top-1/2 -right-64 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-3xl dark:bg-cyan-500/5" />
    </div>
  );
};