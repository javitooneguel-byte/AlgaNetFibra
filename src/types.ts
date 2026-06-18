export type Route =
  | '/'
  | '/planos'
  | '/cobertura'
  | '/empresa'
  | '/suporte'
  | '/faq'
  | '/central'
  | '/contato'
  | '/politica-de-privacidade'
  | '/termos-de-uso'
  | '/politica-de-cookies'
  | '/lgpd'
  | '/sitemap';

export interface Plan {
  id: string;
  name: string;
  speed: string;
  download: string;
  upload: string;
  price: string;
  popular: boolean;
  category: 'residential' | 'business';
  wifi: string;
  support: string;
  installation: string;
  equipments: string;
  fidelidade: string;
  comodato: string;
  taxaInstalacao: string;
  description: string;
  appsIncluso: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'geral' | 'financeiro' | 'tecnico' | 'vendas';
}

export interface Review {
  id: string;
  name: string;
  city: string;
  role: string;
  stars: number;
  text: string;
}

export interface CityCoverage {
  city: string;
  uf: string;
  bairros: string[];
}

export interface SeoMetadata {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
}
