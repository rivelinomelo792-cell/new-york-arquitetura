export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'arquitetura' | 'interiores' | 'urbanismo';
  categoryLabel: string;
  location: string;
  year: string;
  area: string;
  client: string;
  description: string;
  concept: string;
  materials: string[];
  imageSvgType: 'concert-hall' | 'paris-care' | 'london-hotel' | 'sao-paulo-villa';
  heroHeadline: string;
  heroExcerpt: string;
}

export interface HeroSlide {
  id: number;
  slideNumber: string;
  title: string;
  subtitle: string;
  location: string;
  description: string;
  imageType: 'concert-hall' | 'paris-care' | 'london-hotel';
  category: string;
}

export interface ClientPartner {
  name: string;
  role: string;
  initials: string;
  symbol: 'diamond' | 'shield' | 'circle-grid' | 'pillar' | 'monogram';
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  serviceInterest: string;
}
