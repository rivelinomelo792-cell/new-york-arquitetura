import React, { useState, useEffect } from 'react';
import { X, CheckCircle, ArrowRight } from 'lucide-react';

interface ProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export const ProposalModal: React.FC<ProposalModalProps> = ({
  isOpen,
  onClose,
  defaultProject = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    serviceType: defaultProject ? `Interesse no projeto: ${defaultProject}` : 'Arquitetura Residencial de Alto Padrão',
    investmentTier: 'R$ 2M — R$ 10M (ou US$ 500k+)',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultProject) {
      setFormData((prev) => ({
        ...prev,
        serviceType: `Interesse no projeto: ${defaultProject}`,
      }));
    }
  }, [defaultProject]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
      <div
        className="relative w-full max-w-2xl bg-[#171717] border border-white/[0.12] shadow-2xl p-6 sm:p-8 text-white animate-in zoom-in-95 duration-300"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1 text-[#888888] hover:text-white transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-10 text-center space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#c5a880]/10 border border-[#c5a880] text-[#c5a880] flex items-center justify-center">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl font-bold uppercase tracking-wider text-white">
              SOLICITAÇÃO RECEBIDA COM SUCESSO
            </h3>
            <p className="text-sm text-[#a3a3a3] max-w-md mx-auto leading-relaxed">
              Nossa equipe sênior entrará em contato via WhatsApp / E-mail para apresentar o catálogo confidencial de soluções e agendar uma reunião técnica presencial ou virtual.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 bg-[#c5a880] text-[#141414] font-semibold text-xs font-mono tracking-widest uppercase hover:bg-[#d8be99] transition-colors"
              >
                CONCLUÍDO
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <span className="text-[11px] font-mono tracking-[0.25em] text-[#c5a880] uppercase block mb-1">
                CONSULTORIA EXCLUSIVA
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wide text-white">
                AGENDAR REUNIÃO TÉCNICA COM O ATELIÊ
              </h2>
              <p className="text-xs text-[#8a8a8a] mt-1 font-light">
                Compartilhe as diretrizes do seu terreno ou empreendimento para receber um diagnóstico espacial preliminar.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-mono tracking-widest text-[#a3a3a3] uppercase mb-1">
                  NOME COMPLETO *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Seu nome"
                  className="w-full px-3.5 py-2.5 bg-[#141414] border border-white/[0.1] text-sm text-white placeholder-stone-600 focus:outline-none focus:border-[#c5a880]"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono tracking-widest text-[#a3a3a3] uppercase mb-1">
                  WHATSAPP / TELEFONE *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+55 (11) 99999-9999"
                  className="w-full px-3.5 py-2.5 bg-[#141414] border border-white/[0.1] text-sm text-white placeholder-stone-600 focus:outline-none focus:border-[#c5a880]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-mono tracking-widest text-[#a3a3a3] uppercase mb-1">
                  E-MAIL CORPORATIVO / PESSOAL *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="seu@email.com"
                  className="w-full px-3.5 py-2.5 bg-[#141414] border border-white/[0.1] text-sm text-white placeholder-stone-600 focus:outline-none focus:border-[#c5a880]"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono tracking-widest text-[#a3a3a3] uppercase mb-1">
                  CIDADE / LOCAL DA OBRA
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="Ex: São Paulo, Paris, Miami..."
                  className="w-full px-3.5 py-2.5 bg-[#141414] border border-white/[0.1] text-sm text-white placeholder-stone-600 focus:outline-none focus:border-[#c5a880]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-mono tracking-widest text-[#a3a3a3] uppercase mb-1">
                TIPOLOGIA DE PROJETO
              </label>
              <select
                value={formData.serviceType}
                onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[#141414] border border-white/[0.1] text-sm text-white focus:outline-none focus:border-[#c5a880]"
              >
                <option value="Arquitetura Residencial de Alto Padrão">Arquitetura Residencial de Alto Padrão</option>
                <option value="Complexo Cultural ou Institucional">Complexo Cultural ou Institucional</option>
                <option value="Hospitalidade de Luxo / Hotel Boutique">Hospitalidade de Luxo / Hotel Boutique</option>
                <option value="Design de Interiores & Curadoria de Arte">Design de Interiores & Curadoria de Arte</option>
                <option value="Masterplan & Urbanismo Sustentável">Masterplan & Urbanismo Sustentável</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-mono tracking-widest text-[#a3a3a3] uppercase mb-1">
                DETALHES OU OBSERVAÇÕES
              </label>
              <textarea
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Área aproximada do terreno, cronograma previsto ou particularidades..."
                className="w-full px-3.5 py-2 bg-[#141414] border border-white/[0.1] text-sm text-white placeholder-stone-600 focus:outline-none focus:border-[#c5a880] resize-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 text-xs font-mono tracking-wider uppercase text-[#a3a3a3] hover:text-white"
              >
                CANCELAR
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-7 py-3 bg-[#c5a880] hover:bg-[#d8be99] text-[#141414] font-semibold text-xs font-mono tracking-wider uppercase transition-colors"
              >
                <span>CONFIRMAR AGENDAMENTO</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
