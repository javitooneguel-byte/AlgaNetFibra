import { useEffect, useState } from 'react';
import { Route } from '../types';

let listeners: Array<(r: Route) => void> = [];

const getCleanRoute = (): Route => {
  const path = window.location.pathname;
  const validRoutes: Route[] = [
    '/',
    '/planos',
    '/cobertura',
    '/empresa',
    '/suporte',
    '/faq',
    '/central',
    '/contato',
    '/politica-de-privacidade',
    '/termos-de-uso',
    '/politica-de-cookies',
    '/lgpd',
    '/sitemap',
  ];
  return validRoutes.includes(path as Route) ? (path as Route) : '/';
};

export function navigateTo(route: Route) {
  window.history.pushState(null, '', route);
  listeners.forEach((listener) => listener(route));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function useRouter(): { currentRoute: Route; navigate: (route: Route) => void } {
  const [currentRoute, setCurrentRoute] = useState<Route>(getCleanRoute());

  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(getCleanRoute());
    };

    const handleCustomNavigation = (r: Route) => {
      setCurrentRoute(r);
    };

    listeners.push(handleCustomNavigation);
    window.addEventListener('popstate', handlePopState);

    return () => {
      listeners = listeners.filter((lst) => lst !== handleCustomNavigation);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return {
    currentRoute,
    navigate: navigateTo,
  };
}
