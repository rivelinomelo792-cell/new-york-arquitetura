import React, { useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { PROJECTS } from '../data/content';
import { Project } from '../types';
import { ArchitecturalVisual } from './ArchitecturalVisual';

interface PortfolioProps {
  onSelectProject: (project: Project) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<'todos' | 'arquitetura' | 'interiores' | 'urbanismo'>('todos');
  const [scrollIndex, setScrollIndex] = useState(0);

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeFilter === 'todos') return true;
    return p.category === activeFilter;
  });

  const categories = [
    { id: 'todos', label: 'TODOS OS PROJETOS' },
    { id: 'arquitetura', label: 'ARQUITETURA' },
    { id: 'interiores', label: 'INTERIORES' },
    { id: 'urbanismo', label: 'URBANISMO' },
  ] as const;

  const handleNextCard = () => {
    setScrollIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const handlePrevCard = () => {
    setScrollIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  return (
    <section id="projects" className="relative w-full py-28 md:py-36 bg-[#141414] text-white overflow-hidden border-t border-b border-white/[0.06]">
      {/* Background Section Title Watermark */}
      <div className="absolute top-8 right-12 text-[140px] sm:text-[200px] font-display font-extrabold text-white/[0.015] pointer-events-none select-none tracking-widest uppercase">
        PROJECTS
      </div>

      <div className="relative z-20 max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
        {/* Section Header with Category Filter Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <div className="inline-flex items-center gap-3 mb-2">
              <span className="w-6 h-px bg-[#c5a880]" />
              <span className="text-[12px] font-mono tracking-[0.25em] text-[#c5a880] uppercase">
                PORTFÓLIO DE OBRAS SELECIONADAS
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.12em] uppercase text-white">
              OUR <span className="text-[#c5a880]">PROJECTS</span>
            </h2>
          </div>

          {/* Interactive Filter Controls */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#1c1c1c] border border-white/[0.08]">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveFilter(cat.id);
                  setScrollIndex(0);
                }}
                className={`px-4 py-2 text-xs font-mono tracking-wider transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  activeFilter === cat.id
                    ? 'bg-[#c5a880] text-[#141414] font-bold shadow-md'
                    : 'text-[#a3a3a3] hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel / Slider Navigation Bar */}
        <div className="flex items-center justify-between text-xs font-mono text-[#8a8a8a] mb-6 px-1">
          <div className="flex items-center gap-2">
            <span className="text-[#c5a880] font-bold">
              0{scrollIndex + 1}
            </span>
            <span>/</span>
            <span>0{filteredProjects.length}</span>
            <span className="ml-3 text-[11px] text-[#737373] hidden sm:inline">
              CLIQUE NO CARD PARA DETALHES TÉCNICOS
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrevCard}
              className="flex items-center gap-1.5 hover:text-[#c5a880] transition-colors py-1 px-2 border border-white/[0.1] hover:border-[#c5a880]"
              aria-label="Projeto anterior"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>PREV</span>
            </button>
            <button
              onClick={handleNextCard}
              className="flex items-center gap-1.5 hover:text-[#c5a880] transition-colors py-1 px-2 border border-white/[0.1] hover:border-[#c5a880]"
              aria-label="Próximo projeto"
            >
              <span>NEXT</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 4 Vertical Slide Cards in Go.Arch Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {filteredProjects.map((project, idx) => {
            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group relative h-[480px] sm:h-[540px] lg:h-[600px] border border-white/[0.08] bg-[#1a1a1a] overflow-hidden cursor-pointer flex flex-col justify-between transition-all duration-500 hover:border-[#c5a880]/70 hover:shadow-2xl hover:shadow-black/80"
              >
                {/* Background Architectural Canvas */}
                <div className="absolute inset-0 z-0">
                  <ArchitecturalVisual
                    type={project.imageSvgType}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    overlayOpacity="bg-gradient-to-t from-[#141414] via-[#141414]/50 to-[#141414]/30 group-hover:via-[#141414]/35"
                  />
                </div>

                {/* Vertical Label (ARCHITECTURE) on the left margin, exactly as in go.arch screenshot */}
                <div className="absolute left-4 bottom-24 z-10 hidden sm:flex items-center pointer-events-none">
                  <span className="vertical-rl transform rotate-180 text-[10px] font-mono tracking-[0.35em] text-white/40 group-hover:text-[#c5a880] uppercase transition-colors duration-300">
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Top Card Info */}
                <div className="relative z-10 p-6 flex items-start justify-between">
                  <span className="font-mono text-xs tracking-widest text-[#c5a880] bg-[#141414]/70 px-2 py-0.5 border border-[#c5a880]/30 backdrop-blur-sm">
                    0{idx + 1} · {project.year}
                  </span>
                  <div className="p-2 rounded-full bg-[#141414]/70 border border-white/10 text-white/60 group-hover:text-[#c5a880] group-hover:border-[#c5a880]/50 transition-colors backdrop-blur-sm">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Bottom Card Title and Details */}
                <div className="relative z-10 p-6 pt-12 bg-gradient-to-t from-[#121212] via-[#121212]/90 to-transparent">
                  <p className="text-[11px] font-mono text-[#c5a880] tracking-widest uppercase mb-1">
                    {project.location}
                  </p>
                  <h3 className="font-display text-xl sm:text-2xl font-bold tracking-wide uppercase text-white group-hover:text-[#c5a880] transition-colors leading-tight mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#a3a3a3] line-clamp-2 font-light mb-4">
                    {project.description}
                  </p>

                  <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-[#737373]">
                    <span>ÁREA: {project.area}</span>
                    <span className="text-[#c5a880] group-hover:underline flex items-center gap-1 font-sans">
                      <Eye className="w-3 h-3" /> VER PROJETO
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
