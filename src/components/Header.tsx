import React, { useState, useEffect } from 'react';
import { Route } from '../types';
import { useRouter } from '../utils/router';
import { Menu, X, ChevronDown, Phone, ShieldCheck, HelpCircle } from 'lucide-react';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={props.className}
    {...props}
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.062 5.248 5.303 0 11.758 0c3.129.001 6.07 1.218 8.281 3.431 2.211 2.212 3.425 5.155 3.423 8.286-.005 6.503-5.245 11.751-11.7 11.751-2.003-.001-3.97-.514-5.705-1.487L0 24zm6.541-4.119c1.66.986 3.292 1.502 4.962 1.503 5.182 0 9.4-4.211 9.404-9.395.002-2.512-.975-4.873-2.752-6.65a9.345 9.345 0 0 0-6.658-2.748c-5.185 0-9.405 4.213-9.409 9.398-.002 1.77.47 3.498 1.368 5.048L2.247 21.75l4.351-1.869zm11.234-5.228c-.294-.146-1.736-.856-2.004-.954-.268-.099-.463-.146-.658.146-.195.293-.755.955-.926 1.151-.17.195-.341.219-.635.073-.293-.146-1.238-.456-2.359-1.455-.873-.778-1.462-1.74-1.633-2.032-.17-.293-.018-.452.129-.597.132-.131.293-.341.439-.512.146-.17.195-.293.293-.488.098-.195.049-.366-.024-.512-.073-.146-.658-1.586-.902-2.172-.238-.57-.479-.493-.658-.502-.17-.008-.366-.01-.561-.01s-.512.073-.78.366c-.268.293-1.024 1.001-1.024 2.44 0 1.439 1.048 2.83 1.195 3.025.146.195 2.062 3.149 4.993 4.414.697.301 1.242.481 1.667.616.7.223 1.338.192 1.843.117.563-.084 1.736-.708 1.98-1.391.243-.683.243-1.269.17-1.39-.073-.122-.268-.195-.561-.341z" />
  </svg>
);

export function Header() {
  const { currentRoute, navigate } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [policiesOpen, setPoliciesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll for premium visual blur on header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Início', path: '/' as Route },
    { label: 'Planos', path: '/planos' as Route },
    { label: 'Cobertura', path: '/cobertura' as Route },
    { label: 'Empresa', path: '/empresa' as Route },
    { label: 'Suporte', path: '/suporte' as Route },
    { label: 'FAQ', path: '/faq' as Route },
    { label: 'Central', path: '/central' as Route },
    { label: 'Contato', path: '/contato' as Route },
  ];

  const policyItems = [
    { label: 'Política de Privacidade', path: '/politica-de-privacidade' as Route },
    { label: 'Termos de Uso', path: '/termos-de-uso' as Route },
    { label: 'Política de Cookies', path: '/politica-de-cookies' as Route },
    { label: 'LGPD', path: '/lgpd' as Route },
  ];

  const handleLinkClick = (path: Route) => {
    navigate(path);
    setIsOpen(false);
    setPoliciesOpen(false);
  };

  return (
    <header
      id="site_header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2 border-b border-gray-150'
          : 'bg-white py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          
          {/* Logo - NO BRAND TEXT in Header, only custom round logo per user instructions */}
          <button
            id="header_logo"
            onClick={() => handleLinkClick('/')}
            aria-label="Ir para a página inicial"
            className="group flex items-center focus:outline-none"
          >
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#28BEA5] bg-white shadow-md flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-[#28BEA5]/80">
              <img
                src="https://i.ibb.co/4Rj1ffHW/images-2.jpg"
                alt="Logo Alga Net Fibra"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback if image fails to render
                  (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/alga-net-logo/150/150';
                }}
              />
            </div>
            {/* Semantic spacing for screens */}
            <span className="sr-only">Alga Net Fibra</span>
          </button>

          {/* Desktop Navigation */}
          <nav id="desktop_nav" className="hidden lg:flex items-center gap-6" aria-label="Navegação Principal">
            {menuItems.map((item) => (
              <button
                key={item.path}
                id={`menu_item_${item.label.toLowerCase()}`}
                onClick={() => handleLinkClick(item.path)}
                className={`text-[11px] font-bold uppercase tracking-wider transition-all duration-200 ${
                  currentRoute === item.path
                    ? 'text-[#28BEA5] border-b-2 border-[#28BEA5] pb-1 rounded-none px-1'
                    : 'text-slate-600 hover:text-[#28BEA5] pb-1 border-b-2 border-transparent px-1'
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Policies Dropdown Menu */}
            <div className="relative">
              <button
                id="menu_item_politicas_toggle"
                onClick={() => setPoliciesOpen(!policiesOpen)}
                onBlur={() => setTimeout(() => setPoliciesOpen(false), 200)}
                className={`flex items-center space-x-1 text-[11px] font-bold uppercase tracking-wider transition-all duration-200 ${
                  policiesOpen
                    ? 'text-[#28BEA5] border-b-2 border-[#28BEA5] pb-1 rounded-none px-1'
                    : 'text-slate-600 hover:text-[#28BEA5] pb-1 border-b-2 border-transparent px-1'
                }`}
                aria-expanded={policiesOpen}
              >
                <span>Políticas</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${policiesOpen ? 'rotate-180 text-[#28BEA5]' : ''}`} />
              </button>

              {/* Submenu */}
              {policiesOpen && (
                <div
                  id="policies_submenu"
                  className="absolute right-0 mt-2 w-56 rounded-xl shadow-xl bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 z-50 focus:outline-none transition-all duration-200 animate-in fade-in slide-in-from-top-2"
                >
                  <div className="py-2.5">
                    {policyItems.map((item) => (
                      <button
                        key={item.path}
                        id={`submenu_item_${item.label.replace(/\s+/g, '_').toLowerCase()}`}
                        onClick={() => handleLinkClick(item.path)}
                        className={`w-full text-left block px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
                          currentRoute === item.path
                            ? 'text-[#28BEA5] bg-[#28BEA5]/5'
                            : 'text-slate-600 hover:text-[#28BEA5] hover:bg-gray-50'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Desktop Right CTA (Very high CRO value for campaigns) */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://wa.me/551196518981?text=Olá! Gostaria de falar com o atendimento."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-[11px] font-bold uppercase tracking-wider text-slate-600 hover:text-[#28BEA5] transition"
              id="cta_call"
            >
              <Phone className="w-4 h-4 text-[#28BEA5] mr-1.5" />
              <span>(11) 9651-8981</span>
            </a>
            <a
              href="https://wa.me/551196518981?text=Olá! Gostaria de consultar a cobertura da fibra e conhecer os planos."
              target="_blank"
              rel="noopener noreferrer"
              id="cta_whatsapp_header"
              className="inline-flex items-center justify-center bg-[#28BEA5] hover:bg-[#28BEA5]/90 text-white font-bold text-xs py-2 px-5 rounded-full transition-all duration-300 shadow-[0_4px_12px_rgba(40,190,165,0.3)] hover:shadow-[0_4px_20px_rgba(40,190,165,0.5)] hover:scale-[1.03] focus:outline-none"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 mr-1.5" />
              <span>Assinar Fibra</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="mobile_menu_button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-[#28BEA5] hover:bg-gray-100 focus:outline-none"
              aria-label="Abrir menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        id="mobile_drawer"
        className={`lg:hidden overflow-hidden transition-all duration-300 border-t border-gray-100 ${
          isOpen ? 'max-h-screen opacity-100 py-4 bg-white' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-4 space-y-1 pb-4">
          {menuItems.map((item) => (
            <button
              key={item.path}
              id={`mobile_menu_item_${item.label.toLowerCase()}`}
              onClick={() => handleLinkClick(item.path)}
              className={`w-full text-left block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                currentRoute === item.path
                  ? 'text-[#28BEA5] bg-[#28BEA5]/5'
                  : 'text-gray-700 hover:text-[#28BEA5] hover:bg-gray-50'
              }`}
            >
              {item.label}
            </button>
          ))}

          {/* Submenu headers on mobile are flattened for easier tapping */}
          <div className="pt-2 border-t border-gray-100 mt-2">
            <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
              Políticas Legais
            </p>
            {policyItems.map((item) => (
              <button
                key={item.path}
                id={`mobile_submenu_item_${item.label.replace(/\s+/g, '_').toLowerCase()}`}
                onClick={() => handleLinkClick(item.path)}
                className={`w-full text-left block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentRoute === item.path
                    ? 'text-[#28BEA5] bg-[#28BEA5]/5'
                    : 'text-gray-600 hover:text-[#28BEA5] hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-gray-100 space-y-2">
            <a
              href="https://wa.me/551196518981?text=Olá! Gostaria de falar com o atendimento."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 text-base font-medium text-gray-700 hover:text-[#28BEA5]"
            >
              <Phone className="w-5 h-5 text-[#28BEA5] mr-2" />
              <span>(11) 9651-8981</span>
            </a>
            <a
              href="https://wa.me/551196518981?text=Olá! Gostaria de consultar a cobertura da fibra e conhecer os planos."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center bg-[#28BEA5] hover:bg-[#28BEA5]/90 text-white font-medium py-3 px-4 rounded-xl transition shadow shadow-[#28BEA5]/20"
            >
              <WhatsAppIcon className="w-5 h-5 mr-2" />
              <span>Falar com Atendente</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
