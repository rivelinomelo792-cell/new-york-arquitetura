import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { MetricsClients } from './components/MetricsClients';
import { ContactFooter } from './components/ContactFooter';
import { GridLines } from './components/GridLines';
import { ProjectModal } from './components/ProjectModal';
import { ProposalModal } from './components/ProposalModal';
import { Project } from './types';
import { PROJECTS } from './data/content';
import { Eye, X } from 'lucide-react';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [proposalModalOpen, setProposalModalOpen] = useState(false);
  const [proposalDefaultProject, setProposalDefaultProject] = useState('');
  const [showReferenceDrawer, setShowReferenceDrawer] = useState(false);

  const handleLearnMore = (projectId: string) => {
    const proj = PROJECTS.find((p) => p.id === projectId) || PROJECTS[1];
    setSelectedProject(proj);
  };

  const handleScheduleProposal = (projectTitle?: string) => {
    setProposalDefaultProject(projectTitle || '');
    setProposalModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#171717] text-[#e5e5e5] font-body selection:bg-[#c5a880] selection:text-[#141414]">
      {/* Signature Vertical Architectural Grid Lines */}
      <GridLines />

      {/* Top Navigation Bar */}
      <Header onOpenProposal={() => handleScheduleProposal()} />

      {/* Main Landing Page Flow */}
      <main className="relative z-20">
        {/* 1. Hero Section */}
        <Hero onLearnMore={handleLearnMore} />

        {/* 2. About Section */}
        <About />

        {/* 3. Portfolio Section */}
        <Portfolio onSelectProject={(project) => setSelectedProject(project)} />

        {/* 4. Metrics & Clients Section */}
        <MetricsClients onWorkTogether={() => handleScheduleProposal()} />

        {/* 5. Contact & Footer Section */}
        <ContactFooter />
      </main>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onScheduleProposal={(title) => handleScheduleProposal(title)}
      />

      {/* Private Proposal / Consultation Modal */}
      <ProposalModal
        isOpen={proposalModalOpen}
        onClose={() => setProposalModalOpen(false)}
        defaultProject={proposalDefaultProject}
      />

      {/* Floating Blueprint Reference Comparison Toggle */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => setShowReferenceDrawer(true)}
          className="group flex items-center gap-2.5 px-3.5 py-2 bg-[#1f1f1f]/95 border border-[#c5a880]/40 text-[#c5a880] hover:text-[#141414] hover:bg-[#c5a880] transition-all duration-300 shadow-xl backdrop-blur-md text-[11px] font-mono tracking-widest cursor-pointer"
          title="Ver o layout original go.arch enviado como referência"
        >
          <Eye className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">REFERÊNCIA GO.ARCH</span>
        </button>
      </div>

      {/* Reference Image Drawer / Lightbox */}
      {showReferenceDrawer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-lg animate-in fade-in duration-300">
          <div className="relative w-full max-w-4xl max-h-[92vh] bg-[#141414] border border-[#c5a880]/50 flex flex-col overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#181818]">
              <div className="flex items-center gap-3">
                <span className="font-display font-bold text-lg text-white">
                  go<span className="text-[#c5a880]">.arch</span>
                </span>
                <span className="text-white/20">|</span>
                <span className="text-xs font-mono text-[#c5a880] tracking-widest">
                  LAYOUT DE REFERÊNCIA ORIGINAL
                </span>
              </div>
              <button
                onClick={() => setShowReferenceDrawer(false)}
                className="p-1.5 text-[#888888] hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto p-4 sm:p-6 bg-[#0d0d0d] flex flex-col items-center">
              <img
                src="/assets/aistudio/image_d8058117.png"
                alt="Layout de referência go.arch com Hero, About, Portfolio, Metrics 12 e Contato"
                className="w-full max-w-2xl border border-white/10 shadow-2xl"
                loading="lazy"
              />
              <p className="text-xs font-mono text-[#8a8a8a] mt-4 text-center">
                Design minimalista em Dark Mode com linhas de grade verticais, tipografia condensada e acentos em dourado.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
