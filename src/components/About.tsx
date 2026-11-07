import React, { useState } from 'react';
import { Building2, Compass, Layers, CheckCircle2 } from 'lucide-react';
import { SPECIALTIES } from '../data/content';
import { ArchitecturalVisual } from './ArchitecturalVisual';

export const About: React.FC = () => {
  const [activeSpecialty, setActiveSpecialty] = useState(0);

  const icons = [Building2, Layers, Compass];

  return (
    <section id="about" className="relative w-full py-28 md:py-36 bg-[#181818] text-[#f5f5f5] overflow-hidden">
      {/* Background Architectural Watermark or elevation grid */}
      <div className="absolute top-12 left-10 text-[120px] sm:text-[180px] font-display font-extrabold text-white/[0.015] pointer-events-none select-none tracking-widest uppercase">
        ABOUT
      </div>

      <div className="relative z-20 max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <div className="inline-flex items-center gap-3 mb-2">
            <span className="w-6 h-px bg-[#c5a880]" />
            <span className="text-[12px] font-mono tracking-[0.25em] text-[#c5a880] uppercase">
              MANIFESTO INSTITUCIONAL
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.12em] uppercase text-white">
            ABOUT <span className="text-[#c5a880]">GO.ARCH</span>
          </h2>
        </div>

        {/* 3-Column Structured Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* COLUMN 1: Slogan & Institutional Text (5 cols) */}
          <div className="lg:col-span-5 flex flex-col pr-0 lg:pr-8">
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight uppercase tracking-wide text-white mb-6">
              Transformamos ideias em obras de arte.
            </h3>

            <div className="space-y-4 text-[#a3a3a3] text-[15px] sm:text-[16px] leading-relaxed font-light">
              <p>
                Para cada projeto estabelecemos relações de confiança profunda com parceiros e clientes que compartilham nosso compromisso com a excelência. Unimos o rigor técnico ao arrojo formal para conceber espaços que se tornam marcos atemporais.
              </p>
              <p>
                Nossa metodologia é fundamentada em quatro pilares inegociáveis: valor sociocultural, impacto experiencial dos usuários, vanguarda construtiva e inteligência econômica e ambiental.
              </p>
            </div>

            {/* Signature or Founder Mark */}
            <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between">
              <div>
                <p className="font-display text-base font-semibold tracking-wider text-white">
                  STUDIO GO.ARCH
                </p>
                <p className="text-xs font-mono text-[#737373] tracking-widest">
                  EST. 2014 · SÃO PAULO & NY
                </p>
              </div>
              <div className="text-right">
                <span className="text-[11px] font-mono tracking-widest text-[#c5a880] border border-[#c5a880]/30 px-2.5 py-1">
                  PRITZKER CIRCLE MEMBER
                </span>
              </div>
            </div>
          </div>

          {/* COLUMN 2: Specializations List (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between py-2 border-t lg:border-t-0 lg:border-l lg:border-r border-white/[0.08] lg:px-8">
            <div>
              <p className="text-xs font-mono tracking-[0.25em] text-[#8e8e93] uppercase mb-6">
                NOSSAS ESPECIALIDADES:
              </p>

              <div className="space-y-6">
                {SPECIALTIES.map((spec, index) => {
                  const Icon = icons[index % icons.length];
                  const isActive = activeSpecialty === index;
                  return (
                    <div
                      key={spec.id}
                      onClick={() => setActiveSpecialty(index)}
                      className={`p-5 cursor-pointer transition-all duration-300 border ${
                        isActive
                          ? 'border-[#c5a880]/60 bg-[#202020] shadow-lg shadow-black/40'
                          : 'border-white/[0.06] bg-[#1a1a1a]/40 hover:border-white/[0.2] hover:bg-[#1f1f1f]'
                      }`}
                    >
                      <div className="flex items-center gap-4 mb-2">
                        <div
                          className={`p-2 transition-colors ${
                            isActive ? 'text-[#c5a880] bg-[#c5a880]/10' : 'text-[#888888]'
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono text-[#c5a880]">
                              {spec.number}.
                            </span>
                            <h4 className="font-display text-lg font-bold tracking-wider text-white uppercase">
                              {spec.title}
                            </h4>
                          </div>
                          <span className="text-[11px] text-[#737373] font-mono block">
                            {spec.subtitle}
                          </span>
                        </div>
                      </div>

                      <p className="text-xs text-[#a1a1aa] leading-relaxed mt-2 pl-1">
                        {spec.description}
                      </p>

                      {/* Expandable details when active */}
                      {isActive && (
                        <div className="mt-3 pt-3 border-t border-white/[0.06] space-y-1.5 pl-1 animate-in fade-in duration-300">
                          {spec.features.map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-center gap-2 text-[11px] text-[#cccccc]">
                              <CheckCircle2 className="w-3 h-3 text-[#c5a880] shrink-0" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* COLUMN 3: Conceptual B&W Artwork (3 cols) */}
          <div className="lg:col-span-3 flex flex-col items-center">
            <div className="w-full max-w-sm aspect-square relative border border-white/[0.1] shadow-2xl group overflow-hidden bg-black">
              <ArchitecturalVisual
                type="concept-bw"
                className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                overlayOpacity="bg-black/10 group-hover:bg-black/0"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-[#121212]/90 backdrop-blur-sm p-3 border border-white/[0.08] flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-mono tracking-widest text-[#c5a880] uppercase">
                    ESTUDO PARAMÉTRICO
                  </p>
                  <p className="text-xs font-display font-medium text-white">
                    Vórtice Acústico 04
                  </p>
                </div>
                <span className="text-[10px] font-mono text-[#737373]">
                  SÉRIE B&W
                </span>
              </div>
            </div>
            <p className="text-[11px] font-mono text-[#737373] tracking-widest uppercase mt-4 text-center">
              GEOMETRIA COMPUTACIONAL & RESSONÂNCIA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
