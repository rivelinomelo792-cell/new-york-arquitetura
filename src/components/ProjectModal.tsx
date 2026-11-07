import React, { useEffect, useState } from 'react';
import { X, MapPin, Calendar, Maximize2, Shield, ArrowRight, Layers } from 'lucide-react';
import { Project } from '../types';
import { ArchitecturalVisual } from './ArchitecturalVisual';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onScheduleProposal: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onScheduleProposal,
}) => {
  const [activeTab, setActiveTab] = useState<'visual' | 'blueprint'>('visual');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md animate-in fade-in duration-300">
      <div
        className="relative w-full max-w-5xl max-h-[90vh] bg-[#171717] border border-white/[0.12] shadow-2xl flex flex-col overflow-hidden text-white animate-in zoom-in-95 duration-300"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#141414]">
          <div className="flex items-center gap-3">
            <span className="font-display font-bold text-xl tracking-wider text-white">
              go<span className="text-[#c5a880]">.arch</span>
            </span>
            <span className="text-white/20">|</span>
            <span className="text-xs font-mono tracking-widest text-[#c5a880] uppercase">
              FICHA TÉCNICA · {project.categoryLabel}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#888888] hover:text-white hover:bg-white/[0.06] transition-colors"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="overflow-y-auto flex-1 p-6 sm:p-8 space-y-8">
          {/* Main Title & Subtitle */}
          <div>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#a3a3a3] mb-2">
              <span className="flex items-center gap-1.5 text-[#c5a880]">
                <MapPin className="w-3.5 h-3.5" />
                {project.location}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {project.year}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Maximize2 className="w-3.5 h-3.5" />
                {project.area}
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white">
              {project.title}
            </h2>
            <p className="text-sm font-mono text-[#c5a880] uppercase tracking-wider mt-1">
              {project.subtitle}
            </p>
          </div>

          {/* Visual Showcase with Blueprint / Elevation Tab Switcher */}
          <div className="relative border border-white/[0.08] bg-[#111111] overflow-hidden">
            <div className="absolute top-4 right-4 z-20 flex items-center bg-[#181818]/90 border border-white/10 p-1 backdrop-blur-sm">
              <button
                onClick={() => setActiveTab('visual')}
                className={`px-3 py-1 text-[11px] font-mono tracking-wider transition-colors ${
                  activeTab === 'visual'
                    ? 'bg-[#c5a880] text-[#141414] font-semibold'
                    : 'text-[#999999] hover:text-white'
                }`}
              >
                RENDER 3D
              </button>
              <button
                onClick={() => setActiveTab('blueprint')}
                className={`px-3 py-1 text-[11px] font-mono tracking-wider transition-colors ${
                  activeTab === 'blueprint'
                    ? 'bg-[#c5a880] text-[#141414] font-semibold'
                    : 'text-[#999999] hover:text-white'
                }`}
              >
                BLUEPRINT CAD
              </button>
            </div>

            <div className="h-[300px] sm:h-[400px] w-full relative">
              {activeTab === 'visual' ? (
                <ArchitecturalVisual
                  type={project.imageSvgType}
                  className="w-full h-full object-cover"
                  overlayOpacity="bg-black/20"
                />
              ) : (
                <div className="w-full h-full bg-[#0a111a] flex items-center justify-center p-8 relative overflow-hidden select-none">
                  {/* Architectural CAD grid background */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#13283f_1px,transparent_1px),linear-gradient(to_bottom,#13283f_1px,transparent_1px)] bg-[size:20px_20px] opacity-40" />
                  
                  <svg viewBox="0 0 800 400" className="w-full h-full relative z-10 stroke-[#4a9eff] fill-none">
                    {/* Isometric elevation lines */}
                    <rect x="150" y="80" width="500" height="240" stroke="#4a9eff" strokeWidth="1.5" strokeDasharray="4 2" />
                    <polygon points="150,80 250,30 750,30 650,80" stroke="#7ec3ff" strokeWidth="1.5" />
                    <polygon points="650,80 750,30 750,270 650,320" stroke="#7ec3ff" strokeWidth="1.5" />
                    <line x1="250" y1="30" x2="250" y2="270" stroke="#335577" strokeWidth="1" />
                    {/* Measurement callouts */}
                    <line x1="150" y1="350" x2="650" y2="350" stroke="#c5a880" strokeWidth="1" />
                    <text x="380" y="370" fill="#c5a880" fontSize="12" fontFamily="monospace">
                      L = 64.00m
                    </text>
                    <text x="50" y="200" fill="#c5a880" fontSize="12" fontFamily="monospace">
                      H = 28.50m
                    </text>
                  </svg>
                </div>
              )}
            </div>
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {/* Description & Concept */}
            <div className="space-y-4">
              <h3 className="font-display text-lg font-bold uppercase tracking-wider text-white">
                CONCEITO ARQUITETÔNICO
              </h3>
              <p className="text-sm text-[#b0b0b0] leading-relaxed font-light">
                {project.concept}
              </p>
              <p className="text-sm text-[#8f8f8f] leading-relaxed font-light">
                {project.description}
              </p>
            </div>

            {/* Specifications & Materials */}
            <div className="space-y-5 bg-[#141414] p-6 border border-white/[0.06]">
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[#c5a880]">
                ESPECIFICAÇÕES DE MATERIAIS NOBRES
              </h3>
              <div className="space-y-2">
                {project.materials.map((mat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-mono text-[#d1d1d1]">
                    <Layers className="w-3.5 h-3.5 text-[#c5a880] shrink-0" />
                    <span>{mat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-[#737373]">
                <span>CLIENTE: {project.client}</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <Shield className="w-3 h-3" /> CERTIFICADO LEED PLATINUM
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="px-6 py-4 bg-[#141414] border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs font-mono text-[#737373]">
            INTERESSADO EM UMA PROPOSTA SIMILAR?
          </span>

          <div className="flex items-center gap-4 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-5 py-2.5 border border-white/10 hover:border-white/30 text-xs font-mono tracking-wider uppercase text-[#cccccc] transition-colors"
            >
              FECHAR
            </button>
            <button
              onClick={() => {
                onClose();
                onScheduleProposal(project.title);
              }}
              className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#c5a880] hover:bg-[#d8be99] text-[#141414] font-semibold text-xs font-mono tracking-wider uppercase transition-colors"
            >
              <span>SOLICITAR ANTEPROJETO</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
