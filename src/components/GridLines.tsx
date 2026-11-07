import React from 'react';

export const GridLines: React.FC = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-10 w-full h-full max-w-[1440px] mx-auto overflow-hidden">
      <div className="relative w-full h-full flex justify-between px-6 sm:px-12 md:px-16 lg:px-24">
        {/* 5 Vertical Architectural Guide Lines */}
        <div className="h-full w-px bg-white/[0.04]" />
        <div className="h-full w-px bg-white/[0.035] hidden sm:block" />
        <div className="h-full w-px bg-white/[0.04]" />
        <div className="h-full w-px bg-white/[0.035] hidden sm:block" />
        <div className="h-full w-px bg-white/[0.04]" />
      </div>
    </div>
  );
};
