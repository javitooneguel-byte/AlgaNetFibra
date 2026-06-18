import { useEffect } from 'react';
import { Route } from '../types';
import { SEO_DATA } from '../data';

interface SEOManagerProps {
  route: Route;
}

export function SEOManager({ route }: SEOManagerProps) {
  const metadata = SEO_DATA[route] || SEO_DATA['/'];

  useEffect(() => {
    // 1. Update Title
    document.title = metadata.title;

    // 2. Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', metadata.description);

    // 3. Update Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', metadata.keywords);

    // 4. Update Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', metadata.canonical);

    // 5. Open Graph Meta Tags
    const ogProperties = {
      'og:title': metadata.title,
      'og:description': metadata.description,
      'og:type': 'website',
      'og:url': metadata.canonical,
      'og:image': 'https://alganetfibra.com.br/assets/images/logo_redonda_1781822224877.jpg',
      'og:site_name': 'Alga Net Fibra',
      'og:locale': 'pt_BR'
    };

    Object.entries(ogProperties).forEach(([prop, val]) => {
      let tag = document.querySelector(`meta[property="${prop}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', prop);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', val);
    });

    // 6. Twitter Card Meta Tags
    const twitterProperties = {
      'twitter:card': 'summary_large_image',
      'twitter:title': metadata.title,
      'twitter:description': metadata.description,
      'twitter:image': 'https://alganetfibra.com.br/assets/images/logo_redonda_1781822224877.jpg'
    };

    Object.entries(twitterProperties).forEach(([name, val]) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', val);
    });

    // 7. Robots Meta Tag
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute('content', 'index, follow');

    // 8. Dynamic Schema.org JSON-LD Injections
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach((scr) => scr.remove());

    const schemas: any[] = [];

    // Common WebSite Schema
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      'name': 'Alga Net Fibra',
      'url': 'https://alganetfibra.com.br/',
      'potentialAction': {
        '@type': 'SearchAction',
        'target': 'https://alganetfibra.com.br/planos?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    });

    // Organization Schema
    const orgSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'Alga Net Fibra',
      'legalName': 'WAGNER SENNA 07571517877',
      'taxID': '97.526.874/0001-19',
      'url': 'https://alganetfibra.com.br/',
      'logo': 'https://alganetfibra.com.br/assets/images/logo_redonda_1781822224877.jpg',
      'contactPoint': [
        {
          '@type': 'ContactPoint',
          'telephone': '+55-11-5531-4995',
          'contactType': 'customer support',
          'email': 'wagner@sennatel.com.br',
          'areaServed': 'BR',
          'availableLanguage': 'Portuguese'
        }
      ]
    };
    schemas.push(orgSchema);

    // LocalBusiness Schema
    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      'name': 'Alga Net Fibra',
      'image': 'https://alganetfibra.com.br/assets/images/logo_redonda_1781822224877.jpg',
      'telephone': '(11) 5531-4995',
      'email': 'wagner@sennatel.com.br',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Rua Carlo Prina, 52, Sala 3',
        'addressLocality': 'Brooklin Paulista, São Paulo',
        'postalCode': '04601-030',
        'addressRegion': 'SP',
        'addressCountry': 'BR'
      },
      'priceRange': '$$',
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          'opens': '08:00',
          'closes': '19:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Saturday'],
          'opens': '08:00',
          'closes': '13:00'
        }
      ],
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': -23.618641,
        'longitude': -46.68538
      }
    };
    schemas.push(localBusinessSchema);

    // Service Schema for Fiber broadband
    const serviceSchema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'serviceType': 'Internet por Fibra Óptica',
      'provider': orgSchema,
      'areaServed': [
        { '@type': 'AdministrativeArea', 'name': 'São Paulo - SP' },
        { '@type': 'AdministrativeArea', 'name': 'Uberlândia - MG' },
        { '@type': 'AdministrativeArea', 'name': 'Franca - SP' },
        { '@type': 'AdministrativeArea', 'name': 'Ribeirão Preto - SP' }
      ],
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'Planos Alga Net Fibra',
        'itemListElement': [
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Alga Net 300 Mega Residencial',
              'description': '300 Mega de internet por fibra óptica com Wi-Fi Gigabit dual-band incluso.'
            },
            'price': '99.90',
            'priceCurrency': 'BRL'
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Alga Net 600 Mega Residencial',
              'description': '600 Mega de internet por fibra óptica com Roteador Wi-Fi 6 de última geração.'
            },
            'price': '119.90',
            'priceCurrency': 'BRL'
          }
        ]
      }
    };
    schemas.push(serviceSchema);

    // BreadcrumbList Schema
    const breadcrumbs = [
      { '@type': 'ListItem', 'position': 1, 'name': 'Início', 'item': 'https://alganetfibra.com.br/' }
    ];
    if (route !== '/') {
      const parts = route.split('/').filter(Boolean);
      parts.forEach((part, index) => {
        const pathStr = `/${parts.slice(0, index + 1).join('/')}`;
        const nameMap: Record<string, string> = {
          'planos': 'Planos',
          'cobertura': 'Cobertura',
          'empresa': 'Empresa',
          'suporte': 'Suporte',
          'faq': 'FAQ',
          'central': 'Central Atendimento',
          'contato': 'Contato',
          'politica-de-privacidade': 'Política de Privacidade',
          'termos-de-uso': 'Termos de Uso',
          'politica-de-cookies': 'Política de Cookies',
          'lgpd': 'LGPD',
          'sitemap': 'Mapa do Site'
        };
        breadcrumbs.push({
          '@type': 'ListItem',
          'position': index + 2,
          'name': nameMap[part] || part,
          'item': `https://alganetfibra.com.br${pathStr}`
        });
      });
    }
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': breadcrumbs
    });

    // FAQPage Schema when on FAQ page or home page
    if (route === '/faq' || route === '/') {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'O que é a internet por fibra óptica?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'A internet por fibra óptica utiliza filamentos de vidro flexíveis para transmitir dados via luz, oferecendo velocidades elevadas, ping extremamente baixo e estabilidade incomparável.'
            }
          },
          {
            '@type': 'Question',
            'name': 'A taxa de instalação da Alga Net Fibra é gratuita?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Sim! A taxa de instalação é grátis para todos os planos residenciais e corporativos sob fidelidade de 12 meses.'
            }
          },
          {
            '@type': 'Question',
            'name': 'O que é o regime de comodato?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'É o empréstimo gratuito dos roteadores de alta performance durante a vigência do contrato, sem cobrança extra pelo hardware.'
            }
          }
        ]
      });
    }

    // Inject all schemas as separate script blocks
    schemas.forEach((schemaObj) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.innerHTML = JSON.stringify(schemaObj);
      document.head.appendChild(script);
    });

  }, [route, metadata]);

  return null;
}
