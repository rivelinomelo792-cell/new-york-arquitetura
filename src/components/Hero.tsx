import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Instagram, Twitter, Globe } from 'lucide-react';
import { HERO_SLIDES } from '../data/content';
import { ArchitecturalVisual } from './ArchitecturalVisual';

interface HeroProps {
  onLearnMore: (projectId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onLearnMore }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const currentSlide = HERO_SLIDES[currentSlideIndex];

  const handleNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  const handlePrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlideIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  const currentProjectId =
    currentSlide.id === 1
      ? 'concert-hall-ny'
      : currentSlide.id === 2
      ? 'paris-residence'
      : 'london-hotel';

  return (
    <section id="hero" className="relative w-full min-h-screen flex items-stretch bg-[#171717] overflow-hidden select-none">
      {/* Background Architectural Canvas & Visuals */}
      <div className="absolute inset-0 z-0">
        <ArchitecturalVisual
          type={currentSlide.imageType}
          overlayOpacity="bg-gradient-to-r from-[#141414]/90 via-[#141414]/60 to-[#141414]/30"
          className="w-full h-full transition-opacity duration-700"
        />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      </div>

      {/* Main Container Layout */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto min-h-screen flex flex-col md:flex-row pt-28 pb-12 px-6 sm:px-12 md:px-16 lg:px-24">
        {/* LEFT COLUMN: Architectural sidebar with slide number, controls, vertical branding & socials */}
        <div className="w-full md:w-36 lg:w-48 shrink-0 flex md:flex-col justify-between items-start md:items-start border-b md:border-b-0 md:border-r border-white/[0.08] pb-6 md:pb-12 md:pr-8 mb-8 md:mb-0">
          {/* Slide Indicator (01 / 03) */}
          <div className="flex flex-col">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#c5a880] tabular-nums transition-all duration-300">
                {currentSlide.slideNumber}
              </span>
              <span className="text-sm font-mono text-[#737373]">
                / 0{HERO_SLIDES.length}
              </span>
            </div>

            {/* Slide Next/Prev controls */}
            <div className="flex items-center gap-4 mt-3 sm:mt-5 text-[11px] font-mono tracking-widest text-[#a3a3a3]">
              <button
                onClick={handlePrev}
                className="hover:text-[#c5a880] transition-colors flex items-center gap-1 cursor-pointer py-1 group"
                aria-label="Slide anterior"
              >
                <ChevronLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                <span>PREV</span>
              </button>
              <span className="text-white/20">|</span>
              <button
                onClick={handleNext}
                className="hover:text-[#c5a880] transition-colors flex items-center gap-1 cursor-pointer py-1 group"
                aria-label="Próximo slide"
              >
                <span>NEXT</span>
                <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Vertical Architectural Studio Watermark / Label */}
          <div className="hidden md:flex items-center gap-3 my-auto py-8">
            <span className="vertical-rl transform rotate-180 text-[11px] font-mono tracking-[0.35em] text-[#737373] uppercase">
              ARCHITECTURE BÜRO
            </span>
            <div className="h-16 w-px bg-white/[0.1]" />
          </div>

          {/* Social Links on bottom left */}
          <div className="flex md:flex-col items-center md:items-start gap-4 text-[#8a8a8a]">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram da go.arch"
              className="p-1.5 hover:text-[#c5a880] hover:scale-110 transition-all duration-200"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter / X da go.arch"
              className="p-1.5 hover:text-[#c5a880] hover:scale-110 transition-all duration-200"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="https://behance.net"
              target="_blank"
              rel="noreferrer"
              aria-label="Behance portfolio da go.arch"
              className="p-1.5 hover:text-[#c5a880] hover:scale-110 transition-all duration-200"
            >
              <Globe className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: Featured Project Hero Content */}
        <div className="flex-1 flex flex-col justify-center md:pl-10 lg:pl-16 max-w-4xl">
          {/* Category Tagline */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[12px] font-mono tracking-[0.25em] text-[#c5a880] uppercase">
              {currentSlide.category}
            </span>
            <span className="text-white/20">·</span>
            <span className="text-[12px] font-mono tracking-widest text-[#8a8a8a] uppercase">
              {currentSlide.location}
            </span>
          </div>

          {/* Large Architectural All-Caps Title */}
          <h1
            key={currentSlide.title}
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[0.08em] uppercase text-white leading-[0.95] mb-6 animate-in fade-in slide-in-from-bottom-3 duration-500"
          >
            {currentSlide.title}
          </h1>

          {/* Refined Descriptive Excerpt */}
          <p
            key={currentSlide.description}
            className="text-base sm:text-lg text-[#b3b3b3] font-light leading-relaxed max-w-2xl mb-8 sm:mb-10 animate-in fade-in duration-700"
          >
            {currentSlide.description}
          </p>

          {/* CTA & Interaction Controls */}
          <div className="flex flex-wrap items-center gap-5 sm:gap-6">
            <button
              onClick={() => onLearnMore(currentProjectId)}
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#c5a880] hover:bg-[#d8be99] active:bg-[#b5966d] text-[#141414] font-semibold text-xs tracking-[0.2em] uppercase transition-all duration-300 shadow-xl shadow-[#c5a880]/15 group cursor-pointer"
            >
              <span>SAIBA MAIS</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/20 hover:border-[#c5a880] text-white hover:text-[#c5a880] text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-300"
            >
              <span>VER PORTFÓLIO</span>
            </a>
          </div>

          {/* Carousel dots pagination on mobile/tablet */}
          <div className="flex items-center gap-2.5 mt-10">
            {HERO_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlideIndex(idx)}
                aria-label={`Ir para slide ${slide.slideNumber}`}
                className={`h-1.5 transition-all duration-300 ${
                  currentSlideIndex === idx ? 'w-8 bg-[#c5a880]' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt at the bottom */}
      <a
        href="#about"
        className="hidden md:flex absolute bottom-8 right-12 z-20 items-center gap-3 text-[11px] font-mono tracking-[0.25em] text-[#737373] hover:text-[#c5a880] transition-colors uppercase group"
      >
        <span>EXPLORE O ATELIÊ</span>
        <div className="w-10 h-px bg-white/20 group-hover:bg-[#c5a880] group-hover:w-16 transition-all duration-300" />
      </a>
    </section>
  );
};
