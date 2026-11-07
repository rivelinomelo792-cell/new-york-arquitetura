import { Project, HeroSlide, ClientPartner } from '../types';

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    slideNumber: '01',
    title: 'CONCERT HALL IN NEW YORK',
    subtitle: 'Arquitetura Cultural & Acústica',
    location: 'Manhattan, New York',
    description:
      'Concert Hall é a arquitetura de uma nova geração. Um edifício que existe não apenas na dimensão espacial, mas no diálogo permanente entre o tempo, a ressonância harmônica e a vida urbana.',
    imageType: 'concert-hall',
    category: 'CULTURAL / ARQUITETURA',
  },
  {
    id: 2,
    slideNumber: '02',
    title: 'RESIDENTIAL CARE PROJECT IN PARIS',
    subtitle: 'Complexo Residencial Contemporâneo',
    location: 'Saint-Germain, Paris',
    description:
      'Uma ode à elegância escultural e ao bem-estar coletivo. Estruturas fluidas em balanço que integram luz natural, jardins suspensos e privacidade absoluta em pleno coração parisiense.',
    imageType: 'paris-care',
    category: 'RESIDENCIAL / ALTO PADRÃO',
  },
  {
    id: 3,
    slideNumber: '03',
    title: 'MODERN HOTEL IN LONDON',
    subtitle: 'Hospitalidade de Vanguarda',
    location: 'Mayfair, London',
    description:
      'Fachada envidraçada paramétrica com iluminação adaptativa. Uma silhueta monumental que redefine a hotelaria internacional através do luxo silencioso e da eficiência energética.',
    imageType: 'london-hotel',
    category: 'HOSPITALIDADE / CORPORATIVO',
  },
];

export const SPECIALTIES = [
  {
    id: 'arquitetura',
    number: '01',
    title: 'ARQUITETURA',
    subtitle: 'Architecture & Master Building',
    description:
      'Projetos monumentais, residenciais unifamiliares de luxo, sedes corporativas e complexos culturais desenhados com precisão estrutural milimétrica e estética atemporal.',
    features: ['Modelagem Paramétrica BIM', 'Engenharia Estrutural Avançada', 'Sustentabilidade & Certificação LEED'],
  },
  {
    id: 'interiores',
    number: '02',
    title: 'INTERIORES',
    subtitle: 'Interior Architecture & Curation',
    description:
      'Curadoria de materiais nobres (mármores raros, madeiras certificadas, metais foscos), iluminação cênica integrada e mobiliário autoral assinado para criar atmosferas de puro refúgio.',
    features: ['Desenho de Marcenaria sob Medida', 'Lighting Design Acústico', 'Consultoria de Arte & Colecionismo'],
  },
  {
    id: 'planejamento',
    number: '03',
    title: 'PLANEJAMENTO',
    subtitle: 'Urban & Landscape Planning',
    description:
      'Masterplans territoriais, análise bioclimática e integração harmoniosa com a topografia e a vegetação nativa, potencializando o valor do solo e o convívio comunitário.',
    features: ['Estudos de Impacto & Zoneamento', 'Paisagismo Regenerativo', 'Projeção de Mobilidade Inteligente'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'paris-residence',
    title: 'RESIDENTIAL CARE PROJECT IN PARIS',
    subtitle: 'Pavilhão Escultural Saint-Germain',
    category: 'arquitetura',
    categoryLabel: 'ARQUITETURA',
    location: 'Paris, França',
    year: '2025',
    area: '4.850 m²',
    client: 'Groupe Patrimoine Privé',
    description:
      'Estrutura ondulada e contínua com beirais curvos em concreto polido branco, criando transições suaves entre áreas residenciais privadas e pátios arborizados semi-abertos.',
    concept:
      'Eliminar a rigidez das fachadas tradicionais através de curvas paramétricas que captam a trajetória solar durante as quatro estações europeias.',
    materials: ['Concreto Branco Aparente', 'Vidro Duplo Baixo-Emissivo', 'Painéis de Carvalho Francês', 'Aço Corten'],
    imageSvgType: 'paris-care',
    heroHeadline: 'RESIDENTIAL CARE IN PARIS',
    heroExcerpt: 'Equilíbrio sutil entre privacidade e abertura cênica em Paris.',
  },
  {
    id: 'concert-hall-ny',
    title: 'CONCERT HALL IN NEW YORK',
    subtitle: 'Sala Sinfônica & Centro de Performance',
    category: 'arquitetura',
    categoryLabel: 'ARQUITETURA',
    location: 'Nova York, EUA',
    year: '2024',
    area: '12.400 m²',
    client: 'Lincoln Cultural Foundation',
    description:
      'Uma concha acústica monumental envolta por pele de vidro curvo e nervuras de aço estrutural. O projeto alcançou reverberação acústica perfeita de 1.95 segundos sem sistemas eletroacústicos.',
    concept:
      'A forma arquitetônica gerada a partir das equações matemáticas das ondas sonoras das cordas de violoncelo.',
    materials: ['Vidro Estrutural Curvado', 'Nervuras de Titânio Fosco', 'Pinho Suíço Acústico', 'Granito Negro'],
    imageSvgType: 'concert-hall',
    heroHeadline: 'CONCERT HALL IN NEW YORK',
    heroExcerpt: 'Acústica pura esculpida em vidro, aço e madeira nobre.',
  },
  {
    id: 'london-hotel',
    title: 'MODERN HOTEL IN LONDON',
    subtitle: 'Hotel Boutique & Spa Urbano',
    category: 'interiores',
    categoryLabel: 'INTERIORES & HOSPITALIDADE',
    location: 'Londres, Reino Unido',
    year: '2024',
    area: '9.200 m²',
    client: 'Mayfair Luxury Collection',
    description:
      'Interior minimalista que combina a sobriedade britânica com a leveza contemporânea. Ambientes de pé-direito duplo, lareiras lineares em mármore nero marquina e iluminação oculta.',
    concept:
      'Criar uma transição suave da intensidade urbana de Londres para uma atmosfera de quietude e contemplação sensorial.',
    materials: ['Mármore Nero Marquina', 'Bronze Escovado', 'Couro Natural Tratado', 'Vidro Canelado'],
    imageSvgType: 'london-hotel',
    heroHeadline: 'MODERN HOTEL IN LONDON',
    heroExcerpt: 'O auge do luxo silencioso e do design sensorial em Mayfair.',
  },
  {
    id: 'sao-paulo-villa',
    title: 'VILLA MINIMALISTA SÃO PAULO',
    subtitle: 'Residência Unifamiliar nos Jardins',
    category: 'arquitetura',
    categoryLabel: 'ARQUITETURA RESIDENCIAL',
    location: 'São Paulo, Brasil',
    year: '2025',
    area: '1.680 m²',
    client: 'Colecionador Privado',
    description:
      'Volumes em concreto pigmentado em balanço de 12 metros sobre um espelho d’água negro que reflete palmeiras imperiais. Grandes panos de vidro que se recolhem totalmente na estrutura.',
    concept:
      'Dissolver a fronteira entre a arquitetura e a exuberância da flora tropical brasileira.',
    materials: ['Concreto Pigmentado Cinza-Chumbo', 'Espelho d’Água em Pedra Hitam', 'Madeira Cumaru', 'Aço Inox Escovado'],
    imageSvgType: 'sao-paulo-villa',
    heroHeadline: 'VILLA NOS JARDINS',
    heroExcerpt: 'Volumes em balanço e fusão orgânica com o paisagismo tropical.',
  },
];

export const CLIENT_PARTNERS: ClientPartner[] = [
  { name: 'JOHNSON BANK', role: 'Corporate Headquarters', initials: 'JB', symbol: 'shield' },
  { name: 'METROPOL GROUP', role: 'Urban Development', initials: 'MG', symbol: 'diamond' },
  { name: 'FOSTER & ALLIANCE', role: 'Architectural Engineering', initials: 'FA', symbol: 'pillar' },
  { name: 'ZAHA URBAN LAB', role: 'Parametric Consulting', initials: 'ZL', symbol: 'circle-grid' },
  { name: 'ARTEFACTO LUXURY', role: 'Furniture Curation', initials: 'AL', symbol: 'monogram' },
  { name: 'BROOKFIELD PRIME', role: 'Real Estate Asset', initials: 'BP', symbol: 'shield' },
  { name: 'FASANO HOSPITALITY', role: 'Resort & Residences', initials: 'FH', symbol: 'diamond' },
  { name: 'METROPOLIS TECH', role: 'Smart City Campus', initials: 'MT', symbol: 'pillar' },
];

export const KEY_METRICS = [
  { value: '12', label: 'ANOS DE MERCADO', sublabel: 'Consistência e excelência construtiva' },
  { value: '140+', label: 'PROJETOS EXECUTADOS', sublabel: 'Em 8 países e 3 continentes' },
  { value: '18', label: 'PRÊMIOS GLOBAIS', sublabel: 'WAF, ArchDaily e Pritzker Mentions' },
  { value: '98%', label: 'FIDELIDADE DE CLIENTES', sublabel: 'Relações contínuas e duradouras' },
];
