import React from 'react';
import { ArrowRight, Shield, Award, Building, Sparkles } from 'lucide-react';
import { CLIENT_PARTNERS, KEY_METRICS } from '../data/content';

interface MetricsClientsProps {
  onWorkTogether: () => void;
}

export const MetricsClients: React.FC<MetricsClientsProps> = ({ onWorkTogether }) => {
  return (
    <section id="clients" className="relative w-full py-28 md:py-36 bg-[#181818] text-white overflow-hidden">
      {/* Background Section Title Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[140px] sm:text-[220px] md:text-[280px] font-display font-extrabold text-white/[0.012] pointer-events-none select-none tracking-widest uppercase">
        CLIENTS
      </div>

      <div className="relative z-20 max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
        {/* GIANT STAT DISPLAY: "12 ANOS DE MERCADO" directly from go.arch */}
        <div className="flex flex-col items-center justify-center text-center mb-24">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            {/* Massive Metallic Golden Number 12 */}
            <div className="font-display text-8xl sm:text-9xl md:text-[180px] lg:text-[220px] font-extrabold tracking-tighter leading-none num-gold-metallic select-none">
              12
            </div>

            {/* Accompanying architectural subtitle */}
            <div className="text-left max-w-xs pt-2">
              <span className="block font-display text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wider text-white leading-tight">
                ANOS DE SUCESSO NO MERCADO
              </span>
              <span className="block text-xs font-mono text-[#a3a3a3] tracking-[0.2em] uppercase mt-2">
                EXCELÊNCIA & VANGUARDA GLOBAL
              </span>
            </div>
          </div>

          {/* Supporting metrics strip */}
          <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 mt-12 border-t border-white/[0.08]">
            {KEY_METRICS.map((metric, i) => (
              <div key={i} className="text-center p-3">
                <span className="block font-display text-3xl sm:text-4xl font-bold text-[#c5a880] tabular-nums">
                  {metric.value}
                </span>
                <span className="block text-xs font-mono font-semibold tracking-wider text-white uppercase mt-1">
                  {metric.label}
                </span>
                <span className="block text-[11px] text-[#737373] mt-1 font-light">
                  {metric.sublabel}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION: OUR CLIENTS */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-2 justify-center">
            <span className="w-6 h-px bg-[#c5a880]" />
            <span className="text-[12px] font-mono tracking-[0.25em] text-[#c5a880] uppercase">
              RELAÇÕES INSTITUCIONAIS
            </span>
            <span className="w-6 h-px bg-[#c5a880]" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.12em] uppercase text-white">
            OUR <span className="text-[#c5a880]">CLIENTS</span>
          </h2>
          <p className="text-sm text-[#8a8a8a] max-w-xl mx-auto mt-3 font-light">
            Colaboramos com os principais fundos de investimento, redes de hospitalidade de luxo e colecionadores privados ao redor do mundo.
          </p>
        </div>

        {/* Subtle, Monochromatic Partner Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 mb-16">
          {CLIENT_PARTNERS.map((partner, idx) => (
            <div
              key={idx}
              className="group p-6 sm:p-8 bg-[#1a1a1a]/80 border border-white/[0.06] hover:border-[#c5a880]/50 transition-all duration-300 flex flex-col items-center justify-center text-center cursor-default hover:bg-[#202020]"
            >
              {/* Monochromatic Architectural Crest / Icon */}
              <div className="w-10 h-10 mb-3 flex items-center justify-center text-white/40 group-hover:text-[#c5a880] transition-colors">
                {partner.symbol === 'shield' && <Shield className="w-6 h-6 stroke-[1.5]" />}
                {partner.symbol === 'diamond' && <Sparkles className="w-6 h-6 stroke-[1.5]" />}
                {partner.symbol === 'pillar' && <Building className="w-6 h-6 stroke-[1.5]" />}
                {partner.symbol === 'circle-grid' && <Award className="w-6 h-6 stroke-[1.5]" />}
                {partner.symbol === 'monogram' && (
                  <span className="font-display font-bold text-lg tracking-wider text-white/50 group-hover:text-[#c5a880]">
                    {partner.initials}
                  </span>
                )}
              </div>

              {/* Name */}
              <h3 className="font-display text-base font-bold tracking-[0.15em] text-[#d4d4d4] group-hover:text-white uppercase transition-colors">
                {partner.name}
              </h3>
              <span className="text-[10px] font-mono tracking-widest text-[#737373] uppercase mt-1">
                {partner.role}
              </span>
            </div>
          ))}
        </div>

        {/* Centered CTA: WORK TOGETHER → */}
        <div className="flex flex-col items-center justify-center">
          <button
            onClick={onWorkTogether}
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#c5a880] hover:bg-[#d8be99] active:bg-[#b09268] text-[#141414] font-semibold text-xs tracking-[0.25em] uppercase transition-all duration-300 shadow-xl shadow-[#c5a880]/15 group cursor-pointer"
          >
            <span>WORK TOGETHER</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          <span className="text-[11px] font-mono text-[#737373] tracking-widest uppercase mt-3">
            AGENDAMENTO DE CONSULTORIA CONFIDENCIAL
          </span>
        </div>
      </div>
    </section>
  );
};
