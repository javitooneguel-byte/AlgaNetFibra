import { useRouter } from './utils/router';
import { Layout } from './components/Layout';
import { SEOManager } from './components/SEOManager';

// Import Pages
import { Home } from './pages/Home';
import { Planos } from './pages/Planos';
import { Cobertura } from './pages/Cobertura';
import { Empresa } from './pages/Empresa';
import { Suporte } from './pages/Suporte';
import { Faq } from './pages/Faq';
import { Central } from './pages/Central';
import { Contato } from './pages/Contato';
import { Politicas } from './pages/Politicas';
import { Sitemap } from './pages/Sitemap';

export default function App() {
  const { currentRoute } = useRouter();

  // Dynamic Page Routing
  const renderPage = () => {
    switch (currentRoute) {
      case '/':
        return <Home />;
      case '/planos':
        return <Planos />;
      case '/cobertura':
        return <Cobertura />;
      case '/empresa':
        return <Empresa />;
      case '/suporte':
        return <Suporte />;
      case '/faq':
        return <Faq />;
      case '/central':
        return <Central />;
      case '/contato':
        return <Contato />;
      case '/politica-de-privacidade':
      case '/termos-de-uso':
      case '/politica-de-cookies':
      case '/lgpd':
        return <Politicas route={currentRoute} />;
      case '/sitemap':
        return <Sitemap />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      {/* Complete technical SEO injection with microformats schema.org JSON-LD */}
      <SEOManager route={currentRoute} />
      
      {/* Main layout with sticky header, interactive footer and floating conversion aids */}
      <Layout>{renderPage()}</Layout>
    </>
  );
}
