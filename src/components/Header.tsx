import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onOpenProposal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenProposal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'INÍCIO', href: '#hero' },
    { label: 'SOBRE NÓS', href: '#about' },
    { label: 'PROJETOS', href: '#projects' },
    { label: 'CLIENTES', href: '#clients' },
    { label: 'CONTATO', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#141414]/90 backdrop-blur-md py-4 border-b border-white/[0.06] shadow-2xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#hero"
          className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-white whitespace-nowrap shrink-0 group flex items-center"
        >
          <span>go</span>
          <span className="text-[#c5a880] transition-colors group-hover:text-white">.arch</span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-[13px] font-medium tracking-[0.2em] text-[#a3a3a3]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#c5a880] transition-colors duration-200 whitespace-nowrap shrink-0 py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#c5a880] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action + Direct Contact */}
        <div className="flex items-center gap-5 shrink-0">
          <a
            href="tel:+551134567890"
            className="hidden sm:inline-block text-[13px] font-mono tracking-wider text-[#999999] hover:text-[#c5a880] transition-colors"
          >
            +55 (11) 3456-7890
          </a>

          <button
            onClick={onOpenProposal}
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-[0.18em] text-[#141414] bg-[#c5a880] hover:bg-[#d8be99] active:bg-[#b09268] transition-all duration-300 whitespace-nowrap shrink-0 group shadow-lg shadow-[#c5a880]/10"
          >
            <span>CONSULTORIA</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menu de navegação"
            className="lg:hidden p-2 text-[#cccccc] hover:text-[#c5a880] transition-colors focus:outline-none focus:ring-1 focus:ring-[#c5a880]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#161616] border-b border-white/[0.08] px-8 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium tracking-[0.2em] text-[#cccccc] hover:text-[#c5a880] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-white/[0.06] flex flex-col gap-3">
            <a
              href="tel:+551134567890"
              className="text-xs font-mono text-[#a3a3a3] hover:text-[#c5a880]"
            >
              Telefone: +55 (11) 3456-7890
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenProposal();
              }}
              className="w-full py-3 text-center text-xs font-semibold tracking-[0.18em] text-[#141414] bg-[#c5a880] hover:bg-[#d8be99] transition-colors"
            >
              AGENDAR CONSULTORIA ARQUITETÔNICA
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
