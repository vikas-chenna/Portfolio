import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsMobile(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      if (target) {
        const clickable = target.closest('a, button, input, textarea, select, [role="button"]');
        setIsPointer(!!clickable);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  if (isMobile) return null;

  return (
    <>
      {/* Outer Glowing Ring */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[99] rounded-full transition-transform duration-100 ease-out -translate-x-1/2 -translate-y-1/2 border border-brand-purple/40 bg-brand-blue/5 backdrop-blur-[1px] ${
          isPointer ? 'w-12 h-12 border-brand-pink scale-125 bg-brand-pink/10' : 'w-8 h-8'
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      />
      {/* Center Dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[100] w-2 h-2 rounded-full bg-brand-cyan shadow-glow-cyan -translate-x-1/2 -translate-y-1/2"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      />
    </>
  );
};
