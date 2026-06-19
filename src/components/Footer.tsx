import { Route } from '../types';
import { useRouter } from '../utils/router';
import { MapPin, Phone, Mail, FileText, CheckCircle } from 'lucide-react';

export function Footer() {
  const { navigate } = useRouter();

  const handleLinkClick = (path: Route) => {
    navigate(path);
  };

  const linksMain = [
    { label: 'Início', path: '/' as Route },
    { label: 'Planos', path: '/planos' as Route },
    { label: 'Cobertura', path: '/cobertura' as Route },
    { label: 'Empresa', path: '/empresa' as Route },
    { label: 'Suporte', path: '/suporte' as Route },
    { label: 'FAQ', path: '/faq' as Route },
    { label: 'Central de Atendimento', path: '/central' as Route },
    { label: 'Contato', path: '/contato' as Route },
  ];

  const linksLegal = [
    { label: 'Política de Privacidade', path: '/politica-de-privacidade' as Route },
    { label: 'Termos de Uso', path: '/termos-de-uso' as Route },
    { label: 'Política de Cookies', path: '/politica-de-cookies' as Route },
    { label: 'LGPD', path: '/lgpd' as Route },
    { label: 'Mapa do Site', path: '/sitemap' as Route },
  ];

  return (
    <footer id="site_footer" className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Presentation (The brand ALGA NET FIBRA explicitly shown only here as per rules) */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-blue-500 bg-white">
                <img
                  src="https://i.ibb.co/4Rj1ffHW/images-2.jpg"
                  alt="Alga Net Fibra Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-bold text-white tracking-wider">ALGA NET FIBRA</span>
            </div>
            <p className="text-sm text-slate-400">
              Conexão estável e ultraveloz por fibra óptica pura de ponta a ponta. Tecnologia de última geração com atendimento humanizado, ágil e transparente para sua casa ou empresa.
            </p>
            <div className="flex items-center space-x-2 text-xs text-blue-400 bg-slate-800/60 p-2.5 rounded-lg border border-slate-700 w-fit">
              <CheckCircle className="w-4 h-4" />
              <span>Homologado pela Anatel</span>
            </div>
          </div>

          {/* Quick Links Menu */}
          <div>
            <h3 className="text-white text-base font-semibold tracking-wide uppercase mb-4">Navegação</h3>
            <ul className="space-y-2 text-sm">
              {linksMain.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => handleLinkClick(link.path)}
                    className="hover:text-blue-400 text-slate-400 transition-colors flex items-center py-1 text-left focus:outline-none"
                  >
                    <span className="mr-1.5 text-blue-500">•</span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal / Policies Menu */}
          <div>
            <h3 className="text-white text-base font-semibold tracking-wide uppercase mb-4">Políticas e Legal</h3>
            <ul className="space-y-2 text-sm">
              {linksLegal.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => handleLinkClick(link.path)}
                    className="hover:text-blue-400 text-slate-400 transition-colors flex items-center py-1 text-left focus:outline-none"
                  >
                    <FileText className="w-4 h-4 mr-2 text-slate-550" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white text-base font-semibold tracking-wide uppercase mb-4">Fale Conosco</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-blue-500 mr-3 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <a href="https://wa.me/551196518981?text=Olá! Gostaria de falar com o atendimento da Alga Net." target="_blank" rel="noopener noreferrer" className="hover:text-white transition font-medium text-slate-200 block">
                    (11) 9651-8981
                  </a>
                  <p className="text-xs text-slate-500">Chame agora no WhatsApp</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-blue-500 mr-3 shrink-0 mt-0.5" />
                <a href="https://wa.me/551196518981?text=Olá! Gostaria de falar com o atendimento da Alga Net por email." target="_blank" rel="noopener noreferrer" className="hover:text-white transition text-slate-300 break-all block">
                  contato.alganetfibra.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-500 mr-3 shrink-0 mt-0.5" />
                <span>
                  Uberlândia<br />
                  Minas Gerais, Brasil<br />
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-8"></div>

        {/* Legal Disclaimer / CNPJ Requirements per rules */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-xs text-slate-500">
          <div className="space-y-2 text-center lg:text-left">
            <p>
              Operado por: <strong className="text-slate-400">WAGNER SENNA 07571517877</strong>
            </p>
            <p>
              CNPJ: <strong className="text-slate-400">97.526.874/0001-19</strong>
            </p>
            <p className="max-w-xl text-slate-600 leading-relaxed">
              *A Alga Net Fibra é uma marca comercial devidamente regulamentada e autorizada à prestação de Serviços de Comunicação Multimídia (SCM) perante a ANATEL. Isenção de taxa de instalação mediante fidelidade de 12 meses nos termos contratuais. Aparelhos comodatos sujeitos a termos de restituição.
            </p>
          </div>
          <div className="text-center lg:text-right space-y-1 shrink-0">
            <p>© {new Date().getFullYear()} ALGA NET FIBRA. Todos os direitos reservados.</p>
            <p className="text-slate-600">Sennatel Telecomunicações Integradas.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
