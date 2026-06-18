import React, { ReactNode, useState, useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { ArrowUp, Zap, HelpCircle } from 'lucide-react';
import { Route } from '../types';
import { navigateTo } from '../utils/router';

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

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    // Show WhatsApp tooltip after 3 seconds for higher engagement CRO
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-800 antialiased selection:bg-blue-600 selection:text-white">
      {/* Header */}
      <Header />

      {/* Main Content Area */}
      <main id="main_content" className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Elements Drawer (WhatsApp and Back to Top) */}
      <div id="floating_controls" className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
        
        {/* WhatsApp Floating Button with Active Tooltip (High conversion impact) */}
        <div className="relative group">
          {showTooltip && (
            <div className="absolute right-14 top-1/2 -translate-y-1/2 bg-white text-slate-800 font-semibold text-xs py-2 px-3.5 rounded-xl shadow-xl border border-gray-100 flex items-center whitespace-nowrap animate-in fade-in slide-in-from-right-3 duration-300">
              <span className="flex h-2 w-2 relative mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Fale conosco no WhatsApp!
              <button 
                onClick={() => setShowTooltip(false)} 
                className="ml-2.5 text-slate-400 hover:text-slate-600 text-xs font-bold focus:outline-none"
                aria-label="Minimizar dica"
              >
                ×
              </button>
            </div>
          )}
          
          <a
            href="https://wa.me/551155314995?text=Ol%C3%A1%21+Gostaria+de+consultar+a+cobertura+da+fibra+e+conhecer+os+planos."
            target="_blank"
            rel="noopener noreferrer"
            id="floating_whatsapp_btn"
            className="flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-emerald-200 focus:outline-none focus:ring-4 focus:ring-emerald-300"
            aria-label="Atendimento pelo WhatsApp"
          >
            <WhatsAppIcon className="w-6 h-6" />
          </a>
        </div>

        {/* Support floating quick helper */}
        <div className="bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center w-10 h-10 rounded-full shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer"
             onClick={() => navigateTo('/suporte' as Route)}
             title="Painel de Ajuda Rápida"
        >
          <HelpCircle className="w-5 h-5" />
        </div>

        {/* Back to Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            id="back_to_top_btn"
            className="flex items-center justify-center w-10 h-10 bg-slate-800 hover:bg-slate-700 text-white rounded-full shadow-lg transition-all duration-300 transform scale-100 animate-in fade-in zoom-in-75 duration-200 focus:outline-none"
            aria-label="Voltar para o topo"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Safe cookies/LGPD quick banner bar (Mandatory for CRO, Compliance, and Google Ads validation) */}
      <CookieConsentBanner />
    </div>
  );
}

function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('alga_net_cookies_consent');
    if (!consent) {
      const timer = setTimeout(() => {
        setVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('alga_net_cookies_consent', 'accepted');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      id="lgpd_cookies_banner"
      className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900 border-t border-slate-800 text-slate-300 py-4 px-4 sm:px-6 shadow-2xl animate-in slide-in-from-bottom"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-slate-300 text-center md:text-left max-w-4xl">
          <p>
            Utilizamos cookies essenciais, tecnologias semelhantes e dados de marketing para personalizar conteúdos, anúncios de Google Ads e otimizar sua experiência de navegação em conformidade com a <strong>LGPD (Lei Geral de Proteção de Dados)</strong>. Ao navegar, você concorda.{' '}
            <button
              onClick={() => navigateTo('/politica-de-cookies' as Route)}
              className="text-blue-400 hover:underline inline font-medium focus:outline-none"
            >
              Leia nossa Política de Cookies
            </button>
            .
          </p>
        </div>
        <div className="flex space-x-3 shrink-0">
          <button
            onClick={() => navigateTo('/lgpd' as Route)}
            className="px-4 py-1.5 rounded-lg border border-slate-700 text-xs hover:bg-slate-800 text-slate-400 transition"
          >
            Ver Detalhes
          </button>
          <button
            onClick={accept}
            className="px-5 py-1.5 rounded-lg bg-blue-600 text-white text-xs hover:bg-blue-500 font-semibold transition"
          >
            Prosseguir
          </button>
        </div>
      </div>
    </div>
  );
}
