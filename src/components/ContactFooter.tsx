import React, { useState } from 'react';
import { ArrowRight, Mail, Phone, MapPin, CheckCircle, ChevronUp, Clock, AlertCircle } from 'lucide-react';

export const ContactFooter: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrorMessage('Por favor, informe seu nome completo.');
      setStatus('error');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Por favor, informe um e-mail corporativo válido.');
      setStatus('error');
      return;
    }
    if (!formData.message.trim()) {
      setErrorMessage('Por favor, descreva brevemente seu projeto.');
      setStatus('error');
      return;
    }

    setErrorMessage('');
    setStatus('submitting');

    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });
    }, 1000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative w-full bg-[#141414] text-white border-t border-white/[0.08] overflow-hidden">
      {/* Background Section Title Watermark */}
      <div className="absolute top-10 right-10 text-[120px] sm:text-[180px] font-display font-extrabold text-white/[0.015] pointer-events-none select-none tracking-widest uppercase">
        CONTACTS
      </div>

      <div className="relative z-20 max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24 pt-24 pb-16">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-3 mb-2">
            <span className="w-6 h-px bg-[#c5a880]" />
            <span className="text-[12px] font-mono tracking-[0.25em] text-[#c5a880] uppercase">
              ATENDIMENTO EXCLUSIVO
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.12em] uppercase text-white">
            GET IN <span className="text-[#c5a880]">TOUCH</span>
          </h2>
          <p className="text-sm text-[#8a8a8a] max-w-lg mt-2 font-light">
            Inicie um diálogo sobre seu próximo projeto de vanguarda com nossa diretoria de criação.
          </p>
        </div>

        {/* 2-Column Split: Contact Information vs Direct Minimalist Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-20 border-b border-white/[0.08]">
          {/* LEFT: Contact Information (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-[#1f1f1f] text-[#c5a880] border border-white/[0.08] shrink-0 mt-1">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-mono text-[#8e8e93] tracking-widest uppercase">
                    LINHAS DIRETAS
                  </p>
                  <a
                    href="tel:+551134567890"
                    className="block text-base font-mono text-white hover:text-[#c5a880] transition-colors mt-1"
                  >
                    +55 (11) 3456-7890 (São Paulo)
                  </a>
                  <a
                    href="tel:+12126543335"
                    className="block text-sm font-mono text-[#a3a3a3] hover:text-[#c5a880] transition-colors"
                  >
                    +1 (212) 654-33-35 (New York)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-[#1f1f1f] text-[#c5a880] border border-white/[0.08] shrink-0 mt-1">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-mono text-[#8e8e93] tracking-widest uppercase">
                    CORREIO ELETRÔNICO
                  </p>
                  <a
                    href="mailto:contato@goarch.com"
                    className="block text-base font-mono text-white hover:text-[#c5a880] transition-colors mt-1"
                  >
                    contato@goarch.com
                  </a>
                  <a
                    href="mailto:projects@goarch.com"
                    className="block text-sm font-mono text-[#a3a3a3] hover:text-[#c5a880] transition-colors"
                  >
                    projects@goarch.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-[#1f1f1f] text-[#c5a880] border border-white/[0.08] shrink-0 mt-1">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-mono text-[#8e8e93] tracking-widest uppercase">
                    ATELIÊS DE CRIAÇÃO
                  </p>
                  <p className="text-sm text-white mt-1 leading-snug">
                    Av. Brigadeiro Faria Lima, 4500 · Itaim Bibi, São Paulo - SP
                  </p>
                  <p className="text-xs text-[#8a8a8a] mt-1 leading-snug">
                    57 Quigley Bridge, Manhattan · New York, NY 10007, USA
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-[#1f1f1f] text-[#c5a880] border border-white/[0.08] shrink-0 mt-1">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-mono text-[#8e8e93] tracking-widest uppercase">
                    VISITAS & HORÁRIOS
                  </p>
                  <p className="text-xs text-[#a3a3a3] mt-1 leading-relaxed">
                    Segunda a Sexta-feira: 09:00 — 19:00
                    <br />
                    Atendimento aos sábados mediante agendamento prévio.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 border border-white/[0.08] bg-[#1a1a1a]/60">
              <span className="text-[11px] font-mono text-[#c5a880] uppercase tracking-wider block mb-1">
                GARANTIA DE CONFIDENCIALIDADE
              </span>
              <p className="text-xs text-[#8a8a8a] leading-relaxed">
                Todos os anteprojetos e dados corporativos são regidos por termos estritos de sigilo e NDA arquitetônico.
              </p>
            </div>
          </div>

          {/* RIGHT: Direct Form Layout (7 cols) */}
          <div className="lg:col-span-7 bg-[#1c1c1c] border border-white/[0.08] p-8 sm:p-10 shadow-2xl">
            {status === 'success' ? (
              <div className="py-12 flex flex-col items-center text-center space-y-4 animate-in fade-in duration-500">
                <div className="w-14 h-14 rounded-full bg-[#c5a880]/10 border border-[#c5a880] text-[#c5a880] flex items-center justify-center">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-bold uppercase tracking-wider text-white">
                  MENSAGEM ENVIADA COM SUCESSO
                </h3>
                <p className="text-sm text-[#a3a3a3] max-w-md font-light leading-relaxed">
                  Agradecemos seu contato. Nossa diretoria executiva entrará em contato em até 24 horas úteis com a proposta preliminar.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 px-6 py-2.5 text-xs font-mono tracking-widest uppercase border border-[#c5a880] text-[#c5a880] hover:bg-[#c5a880] hover:text-[#141414] transition-colors"
                >
                  ENVIAR OUTRA MENSAGEM
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {errorMessage && (
                  <div className="flex items-center gap-2 p-3 text-xs text-rose-300 bg-rose-950/40 border border-rose-800">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="form-name"
                      className="block text-[11px] font-mono tracking-widest text-[#a3a3a3] uppercase mb-1.5"
                    >
                      NOME COMPLETO *
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ex: Arthur Vane"
                      required
                      className="w-full px-4 py-3 bg-[#161616] border border-white/[0.1] text-sm text-white placeholder-stone-600 focus:outline-none focus:border-[#c5a880] transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="form-phone"
                      className="block text-[11px] font-mono tracking-widest text-[#a3a3a3] uppercase mb-1.5"
                    >
                      TELEFONE / WHATSAPP
                    </label>
                    <input
                      id="form-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+55 (11) 98765-4321"
                      className="w-full px-4 py-3 bg-[#161616] border border-white/[0.1] text-sm text-white placeholder-stone-600 focus:outline-none focus:border-[#c5a880] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email */}
                  <div>
                    <label
                      htmlFor="form-email"
                      className="block text-[11px] font-mono tracking-widest text-[#a3a3a3] uppercase mb-1.5"
                    >
                      E-MAIL CORPORATIVO *
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu.email@empresa.com"
                      required
                      className="w-full px-4 py-3 bg-[#161616] border border-white/[0.1] text-sm text-white placeholder-stone-600 focus:outline-none focus:border-[#c5a880] transition-colors"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label
                      htmlFor="form-company"
                      className="block text-[11px] font-mono tracking-widest text-[#a3a3a3] uppercase mb-1.5"
                    >
                      EMPRESA / PROPRIEDADE
                    </label>
                    <input
                      id="form-company"
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Nome da incorporadora ou empreendimento"
                      className="w-full px-4 py-3 bg-[#161616] border border-white/[0.1] text-sm text-white placeholder-stone-600 focus:outline-none focus:border-[#c5a880] transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="form-message"
                    className="block text-[11px] font-mono tracking-widest text-[#a3a3a3] uppercase mb-1.5"
                  >
                    DETALHES DO PROJETO *
                  </label>
                  <textarea
                    id="form-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Descreva a tipologia (residencial, cultural, hospitalidade), localização estimada, metragem e expectativas de prazo..."
                    required
                    className="w-full px-4 py-3 bg-[#161616] border border-white/[0.1] text-sm text-white placeholder-stone-600 focus:outline-none focus:border-[#c5a880] transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-[11px] text-[#737373] font-mono">
                    * Campos de preenchimento obrigatório
                  </span>
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-[#c5a880] hover:bg-[#d8be99] active:bg-[#b09268] text-[#141414] font-semibold text-xs tracking-[0.25em] uppercase transition-all duration-300 shadow-lg shadow-[#c5a880]/15 cursor-pointer disabled:opacity-50"
                  >
                    <span>{status === 'submitting' ? 'ENVIANDO...' : 'ENVIAR'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* BOTTOM FOOTER BAR */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#737373] font-mono">
          <div className="flex items-center gap-4">
            <span className="font-display font-bold text-xl text-white tracking-tight">
              go<span className="text-[#c5a880]">.arch</span>
            </span>
            <span className="text-white/20">|</span>
            <span>© 2026 go.arch. Todos os direitos reservados.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-[#c5a880] transition-colors">
              POLÍTICA DE PRIVACIDADE
            </a>
            <a href="#projects" className="hover:text-[#c5a880] transition-colors">
              DIRETRIZES DE SUSTENTABILIDADE
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Voltar ao topo da página"
              className="flex items-center gap-1.5 p-2 bg-[#1a1a1a] hover:bg-[#c5a880] hover:text-[#141414] text-white border border-white/10 transition-colors"
            >
              <span>TOPO</span>
              <ChevronUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
