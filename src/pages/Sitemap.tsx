import { Route } from '../types';
import { useRouter } from '../utils/router';
import { Network, Home, MapPin, Briefcase, HelpCircle, FileText, Phone, MessageSquare, ShieldAlert } from 'lucide-react';

export function Sitemap() {
  const { navigate } = useRouter();

  const handleGo = (path: Route) => {
    navigate(path);
  };

  const sections = [
    {
      title: 'Páginas Principais',
      desc: 'Links institucionais e comerciais da operadora.',
      links: [
        { label: 'Página Inicial (Home)', path: '/' as Route, icon: <Home className="w-4 h-4 text-blue-500" /> },
        { label: 'Planos de Fibra Óptica', path: '/planos' as Route, icon: <Network className="w-4 h-4 text-blue-500" /> },
        { label: 'Área de Cobertura Disponível', path: '/cobertura' as Route, icon: <MapPin className="w-4 h-4 text-blue-500" /> },
        { label: 'Nossa Empresa (Quem Somos)', path: '/empresa' as Route, icon: <Briefcase className="w-4 h-4 text-blue-500" /> },
      ],
    },
    {
      title: 'Suporte e Atendimento',
      desc: 'Autoatendimento, 2ª via e canais digitais de faturamento.',
      links: [
        { label: 'Painel de Suporte Técnico', path: '/suporte' as Route, icon: <HelpCircle className="w-4 h-4 text-blue-500" /> },
        { label: 'Perguntas Frequentes (FAQ)', path: '/faq' as Route, icon: <FileText className="w-4 h-4 text-blue-500" /> },
        { label: 'Central de Atendimento', path: '/central' as Route, icon: <MessageSquare className="w-4 h-4 text-blue-500" /> },
        { label: 'Contato Direto', path: '/contato' as Route, icon: <Phone className="w-4 h-4 text-blue-500" /> },
      ],
    },
    {
      title: 'Políticas e Informações Legais',
      desc: 'Termos de conformidade sob leis da ANATEL e LGPD brasileira.',
      links: [
        { label: 'Política de Privacidade', path: '/politica-de-privacidade' as Route, icon: <ShieldAlert className="w-4 h-4 text-blue-500" /> },
        { label: 'Termos de Uso', path: '/termos-de-uso' as Route, icon: <FileText className="w-4 h-4 text-blue-500" /> },
        { label: 'Política de Cookies', path: '/politica-de-cookies' as Route, icon: <FileText className="w-4 h-4 text-blue-500" /> },
        { label: 'Conformidade LGPD', path: '/lgpd' as Route, icon: <FileText className="w-4 h-4 text-blue-500" /> },
        { label: 'Sitemap Principal (Você está aqui)', path: '/sitemap' as Route, icon: <Network className="w-4 h-4 text-blue-500" /> },
      ],
    },
  ];

  return (
    <div id="sitemap_page" className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 font-sans text-slate-800 space-y-12">
      
      {/* Intro */}
      <div className="text-center space-y-3 border-b border-gray-150 pb-8">
        <Network className="w-12 h-12 text-blue-600 mx-auto" />
        <h1 className="text-3xl sm:text-4.5xl font-extrabold text-slate-950 tracking-tight">Mapa do Site</h1>
        <p className="text-gray-500 text-sm max-w-xl mx-auto">
          Veja a estrutura ordenada de links e páginas institucionais no portal oficial da Alga Net Fibra.
        </p>
      </div>

      {/* Lists Sections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {sections.map((sec, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-150 shadow-sm space-y-4">
            <div>
              <h3 className="font-bold text-slate-900 text-base">{sec.title}</h3>
              <p className="text-[10px] text-gray-400 font-medium leading-relaxed mt-1">{sec.desc}</p>
            </div>
            
            <ul className="space-y-3 pt-3 border-t border-gray-100">
              {sec.links.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => handleGo(link.path)}
                    className="flex items-center text-xs text-slate-600 hover:text-blue-600 font-medium text-left focus:outline-none transition-colors"
                  >
                    <span className="mr-2">{link.icon}</span>
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="p-4 bg-slate-50 border border-gray-200 text-[10px] text-gray-400 text-center rounded-xl">
        ALGA NET FIBRA Operadora Privada de Telecomunicações / CNPJ: 97.526.874/0001-19.
      </div>

    </div>
  );
}
