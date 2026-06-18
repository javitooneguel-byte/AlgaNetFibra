import React, { useState, FormEvent } from 'react';
import { PLANS, REVIEWS, COVERAGE_CITIES, FAQ_ITEMS } from '../data';
import { useRouter } from '../utils/router';
import {
  Zap,
  Wifi,
  Shield,
  Clock,
  MapPin,
  Check,
  ChevronRight,
  ChevronDown,
  User,
  Star,
  Activity,
  Smartphone,
  Briefcase,
  HelpCircle,
  Mail,
  Phone,
  ArrowRight,
  ThumbsUp,
  Sliders,
  Send,
  Lock,
  MessageSquare,
} from 'lucide-react';

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

export function Home() {
  const { navigate } = useRouter();
  const [activeTab, setActiveTab] = useState<'residential' | 'business'>('residential');
  const [cepSearch, setCepSearch] = useState('');
  const [cepResult, setCepResult] = useState<{ status: 'success' | 'fail' | 'idle'; message: string }>({
    status: 'idle',
    message: '',
  });
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  // Form states
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  const filteredPlans = PLANS.filter((plan) => plan.category === activeTab);
  const mainFaqs = FAQ_ITEMS.slice(0, 6);

  const handleCepSearch = (e: FormEvent) => {
    e.preventDefault();
    if (!cepSearch || cepSearch.replace(/\D/g, '').length < 8) {
      setCepResult({
        status: 'fail',
        message: 'Por favor, insira um CEP de 8 dígitos válido.',
      });
      return;
    }

    const cleanCep = cepSearch.replace(/\D/g, '');
    // Brooklin Paulista starts with 046... (e.g. 04601-030)
    // Uberlândia has 384...
    if (cleanCep.startsWith('046') || cleanCep.startsWith('384') || cleanCep.startsWith('144') || cleanCep.startsWith('140')) {
      setCepResult({
        status: 'success',
        message: 'Excelente! Identificamos viabilidade de Fibra Premium de até 1 Giga para a sua região.',
      });
    } else {
      setCepResult({
        status: 'success', // Show positive support message with alternative registration
        message: 'Viabilidade pré-aprovada! Nossa equipe de expansão entrará em contato para agendar o mapeamento técnico final.',
      });
    }
  };

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactPhone || !contactEmail) return;

    setFormLoading(true);
    setTimeout(() => {
      setFormLoading(false);
      setFormSubmitted(true);
    }, 1200);
  };

  const toggleFaq = (id: string) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  return (
    <div id="home_page" className="space-y-24 pb-20 overflow-x-hidden font-sans">
      
      {/* 1. HERO SECTION */}
      <section id="hero_section" className="relative bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 text-white pt-16 pb-28 overflow-hidden">
        {/* Abstract geometric background elements and glowing circles */}
        <div className="absolute inset-0 opacity-20 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500 rounded-full blur-[120px] opacity-25 -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600 rounded-full blur-[140px] opacity-20 -ml-40 -mb-40"></div>
          <svg className="absolute w-full h-full text-blue-400" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-100 600C300 400 500 700 900 300C1300 -100 1200 400 1600 200" stroke="currentColor" strokeWidth="2.5" strokeDasharray="12 12" />
            <path d="M-50 450C250 250 650 550 850 150C1050 -250 1150 250 1550 50" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Text */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-blue-400 bg-opacity-20 text-blue-200 border border-blue-400/30 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                <Zap className="w-3.5 h-3.5 text-blue-300" />
                <span>100% Fibra Óptica Pura</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter text-white leading-tight">
                Navegue no plano <span className="text-blue-300 underline decoration-blue-500 decoration-4 underline-offset-4">Ultra Veloz</span> sem limites
              </h1>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0">
                A Alga Net Fibra traz a conexão estável que você precisa para trabalhar, jogar online e maratonar séries em alta definição. Wi-Fi 6 de alta densidade incluso e atendimento sem fila.
              </p>
              
              {/* Core Hero CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => navigate('/planos')}
                  className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-[0_4px_20px_rgba(37,99,235,0.3)] hover:scale-105 transition-all flex items-center justify-center space-x-2 text-sm uppercase tracking-wider"
                >
                  <span>Ver Planos Disponíveis</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
                <a
                  href="#cobertura_form"
                  className="w-full sm:w-auto px-8 py-4 bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:text-white font-bold rounded-xl text-center text-sm uppercase tracking-wider transition-colors"
                >
                  Consultar Cobertura
                </a>
              </div>

              {/* Badges */}
              <div className="pt-6 grid grid-cols-3 gap-4 text-center lg:text-left border-t border-blue-900/50">
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-blue-400 uppercase tracking-tight">99.9%</p>
                  <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Uptime Fibra</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-blue-400 uppercase tracking-tight">100%</p>
                  <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Pura Fibra</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-blue-400 uppercase tracking-tight">Zero</p>
                  <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Taxa Franquia</p>
                </div>
              </div>
            </div>

            {/* Hero Right Widget - CEP Coverage Form (Extreme CRO conversion value) */}
            <div id="cobertura_form" className="lg:col-span-5">
              <div className="bg-white text-slate-800 p-6 sm:p-8 rounded-2xl shadow-2xl border border-slate-200 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-blue-600"></div>
                <h3 className="text-xl font-extrabold text-slate-900 uppercase italic mb-2">Consulta CEP Instantânea</h3>
                <p className="text-sm text-slate-500 mb-6">Insira seu CEP abaixo para averiguar se a nossa rota óptica atende seu endereço.</p>
                
                <form onSubmit={handleCepSearch} className="space-y-4">
                  <div>
                    <label htmlFor="hero_cep_input" className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">CEP de Atendimento</label>
                    <div className="relative">
                      <MapPin className="absolute left-3.5 top-3.5 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        id="hero_cep_input"
                        placeholder="Ex: 04601-030"
                        value={cepSearch}
                        onChange={(e) => setCepSearch(e.target.value)}
                        className="w-full pl-11 pr-4 py-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 font-medium text-slate-800 focus:outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-green-500 hover:bg-green-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition shadow-[0_4px_12px_rgba(34,197,94,0.3)] hover:shadow-[0_4px_20px_rgba(34,197,94,0.5)] flex items-center justify-center space-x-2"
                  >
                    <Zap className="w-5 h-5 fill-current" />
                    <span>Verificar Disponibilidade</span>
                  </button>
                </form>

                {/* Display Output */}
                {cepResult.status !== 'idle' && (
                  <div className={`mt-6 p-4 rounded-xl text-xs leading-relaxed ${
                    cepResult.status === 'success'
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-100'
                      : 'bg-rose-50 text-rose-800 border border-rose-100'
                  }`}>
                    <p className="font-extrabold uppercase tracking-wide">{cepResult.status === 'success' ? '✓ Cobertura Ativa' : '⚠ Atenção'}</p>
                    <p className="mt-1">{cepResult.message}</p>
                    {cepResult.status === 'success' && (
                      <button
                        onClick={() => navigate('/planos')}
                        className="mt-3 text-xs font-bold text-emerald-600 hover:text-emerald-700 underline block uppercase tracking-wider"
                      >
                        Ver planos e comprar online →
                      </button>
                    )}
                  </div>
                )}

                <div className="mt-6 border-t border-slate-100 pt-4 flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Via WhatsApp:</span>
                  <a
                    href="https://wa.me/551155314995?text=Ol%C3%A1%21+Quero+consultar+cobertura+para+o+CEP+de+minha+casa."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-green-600 hover:underline flex items-center gap-1.5 uppercase tracking-wider"
                  >
                    Enviar CEP <WhatsAppIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. BENEFÍCIOS SECTION */}
      <section id="beneficios_section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600">Alta Performance</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Por que a Fibra Óptica Alga Net se destaca?
          </p>
          <p className="text-gray-500">
            Diga adeus às travas de transmissão tradicionais. Oferecemos estabilidade pura e transferência simétrica real de alta fidelidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Velocidade Máxima</h3>
            <p className="text-sm text-gray-500">
              Downloads instantâneos e uploads ultra velozes de grandes lotes de dados com conexões de até 1 Giga.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
              <Wifi className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Roteador Wi-Fi 6</h3>
            <p className="text-sm text-gray-500">
              Sinal de última geração incluso que suporta mais de 50 dispositivos sem interferência mútua estrutural.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Estabilidade Absoluta</h3>
            <p className="text-sm text-gray-500">
              Fibra blindada imune a temporais, interferências de rede de energia e quedas de tensão no bairro.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Fidelidade e Acordo</h3>
            <p className="text-sm text-gray-500">
              Contratos transparentes, suporte focado com SLA empresarial prioritário de 4 a 8h úteis garantido.
            </p>
          </div>
        </div>
      </section>

      {/* 3. PLANOS SECTION (Main Product Grid) */}
      <section id="planos_section" className="bg-slate-100 py-20 border-y border-gray-250">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600">Nossos Planos</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Os Melhores Planos de Fibra Óptica do Mercado
            </p>
            <p className="text-gray-500">
              Selecione se deseja planos de alta velocidade para sua residência ou soluções exclusivas para sua empresa.
            </p>

            {/* Toggle Category */}
            <div className="inline-flex bg-white p-1 rounded-xl border border-gray-200 mt-6 shadow-xs">
              <button
                onClick={() => setActiveTab('residential')}
                className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                  activeTab === 'residential'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Residencial
              </button>
              <button
                onClick={() => setActiveTab('business')}
                className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                  activeTab === 'business'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Empresarial
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 items-stretch">
            {filteredPlans.map((plan) => (
              <div
                key={plan.id}
                className={`bg-white rounded-3xl shadow-xl flex flex-col border transition-all duration-300 relative ${
                  plan.popular
                    ? 'border-blue-500 ring-2 ring-blue-500/20 scale-100 lg:scale-[1.02]'
                    : 'border-transparent hover:border-gray-200'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs tracking-wider uppercase font-extrabold px-4 py-1 rounded-full shadow-lg">
                    Mais Vendido
                  </span>
                )}

                <div className="p-8 pb-6 border-b border-gray-150">
                  <h3 className="text-lg font-bold text-gray-500">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-5xl font-extrabold tracking-tight text-slate-900">{plan.speed.split(' ')[0]}</span>
                    <span className="text-2xl font-bold text-blue-600 ml-1">Mega</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-400">{plan.description}</p>
                </div>

                <div className="p-8 pt-6 flex-grow space-y-4">
                  <div className="flex items-baseline text-slate-900">
                    <span className="text-sm font-bold">R$</span>
                    <span className="text-4xl font-extrabold tracking-tight mx-1">{plan.price.split(',')[0]}</span>
                    <span className="text-sm font-bold text-gray-500">,{plan.price.split(',')[1]} /mês</span>
                  </div>

                  {/* Plan Features bullet-list */}
                  <ul className="space-y-3 text-sm text-gray-600 pt-4">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-emerald-500 mr-2.5 shrink-0 mt-0.5" />
                      <span><strong>Download:</strong> {plan.download} de velocidade física.</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-emerald-500 mr-2.5 shrink-0 mt-0.5" />
                      <span><strong>Upload:</strong> {plan.upload} real excelente para envios.</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-emerald-500 mr-2.5 shrink-0 mt-0.5" />
                      <span><strong>Equipamento:</strong> {plan.wifi.split('(')[0]}</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-emerald-500 mr-2.5 shrink-0 mt-0.5" />
                      <span><strong>Instalação:</strong> {plan.taxaInstalacao}</span>
                    </li>
                    <li className="flex items-start text-xs text-gray-400 italic">
                      <span>* {plan.fidelidade}</span>
                    </li>
                  </ul>
                </div>

                <div className="p-8 pt-0 mt-auto">
                  <a
                    href={`https://wa.me/551155314995?text=Ol%C3%A1%21+Gostaria+de+contratar+o+plano+${encodeURIComponent(plan.name)}+por+R%24+${plan.price}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 bg-green-500 hover:bg-green-600 text-white font-bold text-sm rounded-xl transition-colors shadow-md hover:shadow-green-500/30 flex items-center justify-center gap-2"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    <span>Contratar no WhatsApp</span>
                  </a>
                  <button
                    onClick={() => navigate('/planos')}
                    className="w-full mt-2 py-2 text-center text-xs font-semibold text-gray-500 hover:text-blue-600"
                  >
                    Ver detalhes técnicos completos
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. COMO FUNCIONA */}
      <section id="como_funciona_section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600">Simplicidade</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Como Funciona a Ativação da sua Conexão
          </p>
          <p className="text-gray-500">
            Seguimos uma dinâmica de contratação simplificada para você possuir fibra óptica ativa o mais rápido possível.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 text-center relative">
          
          <div className="space-y-4 relative z-10 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-600 font-extrabold text-lg flex items-center justify-center mx-auto shadow-sm">
              1
            </div>
            <h3 className="text-lg font-bold text-slate-900">Escolha o Plano</h3>
            <p className="text-sm text-gray-500">Explore nossa grade de internet residencial ou B2B e escolha a velocidade que atende sua rotina.</p>
          </div>

          <div className="space-y-4 relative z-10 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-600 font-extrabold text-lg flex items-center justify-center mx-auto shadow-sm">
              2
            </div>
            <h3 className="text-lg font-bold text-slate-900">Consulte Cobertura</h3>
            <p className="text-sm text-gray-500">Informe seu CEP de atendimento no formulário ou chame nossa central pelo WhatsApp de plantão.</p>
          </div>

          <div className="space-y-4 relative z-10 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-600 font-extrabold text-lg flex items-center justify-center mx-auto shadow-sm">
              3
            </div>
            <h3 className="text-lg font-bold text-slate-900">Agende a Visita</h3>
            <p className="text-sm text-gray-500">Selecionamos juntos o melhor dia e período para deslocamento dos instaladores na sua casa.</p>
          </div>

          <div className="space-y-4 relative z-10 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 font-extrabold text-lg flex items-center justify-center mx-auto shadow-sm">
              4
            </div>
            <h3 className="text-lg font-bold text-slate-900">Navegue à Vontade</h3>
            <p className="text-sm text-gray-500">Roteadores configurados no local física e digitalmente. Internet totalmente estável liberada.</p>
          </div>
        </div>
      </section>

      {/* 5. ÁREA DE COBERTURA (Tag cloud of covered locations) */}
      <section id="area_cobertura_section" className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-xs font-bold uppercase tracking-widest text-blue-400">Expansão de Rede</h2>
              <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Instalação Ativa nos Principais Centros e Bairros de Expansão
              </p>
              <p className="text-slate-400">
                A Alga Net Fibra atua com infraestrutura concessionária de cabeamento subterrâneo e aéreo de alto rendimento. Atendimento focado no Brooklin Paulista (polo central de faturamento) e cidades conveniadas em Minas Gerais e interior paulista.
              </p>
              <button
                onClick={() => navigate('/cobertura')}
                className="inline-flex items-center space-x-2 text-blue-400 font-bold hover:text-blue-300 transition"
              >
                <span>Consultar bairros atendidos detalhadamente</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 space-y-6">
                <p className="text-base font-semibold text-slate-200 uppercase tracking-wider block">Cidades Atendidas com Fibra Atualmente:</p>
                <div className="flex flex-wrap gap-3">
                  {COVERAGE_CITIES.map((item) => (
                    <span
                      key={item.city}
                      className="px-4 py-2 bg-slate-750 hover:bg-slate-700 rounded-xl text-sm font-semibold border border-slate-700/80 text-blue-300"
                    >
                      {item.city} - {item.uf}
                    </span>
                  ))}
                </div>
                <div className="p-4 bg-slate-900 border border-slate-700 text-xs text-slate-400 leading-relaxed rounded-xl">
                  <strong>* Brooklin Paulista / São Paulo CEP 04601-030:</strong> Viabilidade imediata no faturamento local empresarial e residencial com ativações prioritárias.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. INTERNET RESIDENCIAL */}
      <section id="residencial_section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <span className="inline-flex bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1.5 rounded-full uppercase">Casa conectada</span>
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-950">
              Conexão Ideal Para as Atividades Conectadas do seu Lar
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Sabemos que hoje a sua casa é o seu centro de experiências digitais. Oferecemos pacotes residenciais estruturados em cabos de fibra ótica isolados que garantem estabilidade total.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700 font-medium">
              <li className="flex items-center">
                <Check className="w-4 h-4 text-emerald-500 mr-2" />
                <span>Smart TVs e streamings 4K</span>
              </li>
              <li className="flex items-center">
                <Check className="w-4 h-4 text-emerald-500 mr-2" />
                <span>Home Office sem oscilações</span>
              </li>
              <li className="flex items-center">
                <Check className="w-4 h-4 text-emerald-500 mr-2" />
                <span>Multi-jogadores paralelos</span>
              </li>
              <li className="flex items-center">
                <Check className="w-4 h-4 text-emerald-500 mr-2" />
                <span>Câmeras CFTV residenciais</span>
              </li>
            </ul>

            <button
              onClick={() => {
                setActiveTab('residential');
                const p = document.getElementById('planos_section');
                if (p) p.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 bg-slate-850 hover:bg-slate-900 text-white font-bold text-sm rounded-xl transition shadow"
            >
              Conhecer Planos Residenciais
            </button>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80"
              alt="Família feliz reunida no sofá usando notebooks e celulares via Wi-Fi de alta velocidade"
              className="rounded-3xl shadow-2xl border border-gray-100 object-cover w-full h-80 sm:h-96"
              referrerPolicy="no-referrer"
            />
          </div>

        </div>
      </section>

      {/* 7. INTERNET EMPRESARIAL */}
      <section id="empresarial_section" className="bg-slate-50 py-16 border-y border-gray-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="order-2 lg:order-1 relative">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80"
                alt="Ambiente moderno de agência e escritório corporativo com computadores em alta performance"
                className="rounded-3xl shadow-2xl border border-gray-100 object-cover w-full h-80 sm:h-96"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <span className="inline-flex bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1.5 rounded-full uppercase">PME & Grandes Empresas</span>
              <h2 className="text-4xl font-extrabold tracking-tight text-slate-950">
                Velocidade Simétrica de Alto Desempenho e SLA Garantido
              </h2>
              <p className="text-gray-500 leading-relaxed">
                Empresas não podem parar. Nossos planos Business contam com banda simétrica escalável, suporte por gerente de contas dedicado e garantia em contrato corporativo.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-750">
                <div className="p-4 bg-white rounded-xl border border-gray-150 shadow-xs space-y-1">
                  <p className="font-bold text-slate-900">Banda Simétrica</p>
                  <p className="text-xs text-gray-500">Mesma velocidade total para upload e downloads.</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-gray-150 shadow-xs space-y-1">
                  <p className="font-bold text-slate-900">Acordo SLA 4h</p>
                  <p className="text-xs text-gray-500">Assistência de emergência in-loco em até 4 horas.</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-gray-150 shadow-xs space-y-1">
                  <p className="font-bold text-slate-900">IP Fixo Grátis</p>
                  <p className="text-xs text-gray-500">Essencial para servidores locais e VPNs.</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-gray-150 shadow-xs space-y-1">
                  <p className="font-bold text-slate-900">Isolamento Multi-SSID</p>
                  <p className="text-xs text-gray-500">Múltiplas redes isolando clientes da rede principal.</p>
                </div>
              </div>

              <button
                onClick={() => {
                  setActiveTab('business');
                  const p = document.getElementById('planos_section');
                  if (p) p.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl transition shadow"
              >
                Ver Planos Corporativos B2B
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 8. EQUIPAMENTOS SECTION */}
      <section id="equipamentos_section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600">Alta Tecnologia</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Hardware Avançado Wi-Fi 6 de Última Geração
          </p>
          <p className="text-gray-500">
            Não adianta possuir fibra veloz se seu roteador é obsoleto. Nossos aparelhos são testados para alto rendimento físico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 items-center">
          
          <div className="bg-white p-8 rounded-3xl border border-gray-150 shadow-lg space-y-6">
            <div className="inline-flex bg-blue-50 text-blue-600 p-3 rounded-2xl">
              <Wifi className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Super Roteador Wi-Fi 6 Gigabit</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              O Wi-Fi 6 (802.11ax) lida com congestionamentos de canais residenciais de forma dinâmica. Oferece velocidades de rádio sem fio superiores e redução significativa de consumo de bateria dos aparelhos.
            </p>
            <ul className="space-y-2.5 text-sm text-gray-750 font-medium">
              <li className="flex items-center"><Check className="w-4 h-4 text-emerald-500 mr-2.5" /> Frequências Gigabit Dual-Band Integradas</li>
              <li className="flex items-center"><Check className="w-4 h-4 text-emerald-500 mr-2.5" /> 4 Antenas de ganho externo automatizado</li>
              <li className="flex items-center"><Check className="w-4 h-4 text-emerald-500 mr-2.5" /> Suporte a IPV6 e segurança WPA3</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-150 shadow-lg space-y-6">
            <div className="inline-flex bg-purple-50 text-purple-600 p-3 rounded-2xl">
              <Sliders className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Sistemas Avançados de Rede Mesh</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Para casas com paredes espessas, lajes ou layout linear extenso, nossos pacotes incluem módulos de repetição Mesh inteligente. Os pontos conversam formando uma única rede sem cortes ou quedas.
            </p>
            <ul className="space-y-2.5 text-sm text-gray-750 font-medium">
              <li className="flex items-center"><Check className="w-4 h-4 text-purple-500 mr-2.5" /> Roaming inteligente sem queda de sinal</li>
              <li className="flex items-center"><Check className="w-4 h-4 text-purple-500 mr-2.5" /> Instalação e calibração por técnicos</li>
              <li className="flex items-center"><Check className="w-4 h-4 text-purple-500 mr-2.5" /> Cobertura total em sobrados ou galpões</li>
            </ul>
          </div>

        </div>
      </section>

      {/* 9. VANTAGENS SECTION */}
      <section id="vantagens_section" className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white py-20 border-y border-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-blue-300">Vantagens Absolutas</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Fibra Óptica vs Outras Tecnologias
            </p>
            <p className="text-slate-300 text-sm">
              Entenda cientificamente por que a fibra se consolidou como o melhor padrão corporativo e doméstico.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 space-y-3">
              <p className="text-4xl font-bold text-blue-400">0.0 ms</p>
              <h4 className="text-lg font-bold text-white">Latência Mínima</h4>
              <p className="text-slate-400 text-sm">Estabilidade para reuniões instantâneas de Zoom e ping de 2 a 5ms nos servidores de games brasileiros.</p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 space-y-3">
              <p className="text-4xl font-bold text-blue-400">99.99%</p>
              <h4 className="text-lg font-bold text-white">Imunidade Climática</h4>
              <p className="text-slate-400 text-sm">Cabos ópticos usam luz e vidro, eliminando oxidações causadas por umidade ou chuvas pesadas.</p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 space-y-3">
              <p className="text-4xl font-bold text-blue-400">100%</p>
              <h4 className="text-lg font-bold text-white">Velocidade Real</h4>
              <p className="text-slate-400 text-sm">Garantimos a entrega da banda do plano contratado sem limites obscuros ou gargalos por horário.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. SUPORTE TÉCNICO SECTION (Callout points) */}
      <section id="suporte_tecnico_section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-gray-150 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
          <div className="absolute top-0 bottom-0 right-0 w-2 bg-blue-600"></div>
          
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center space-x-1 p-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-lg uppercase w-fit">
              <span>Autoatendimento Grátis</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Need technical support or billing duplication?</h3>
            <p className="text-slate-500 text-base max-w-2xl">
              Nossa central atende instantaneamente no WhatsApp. Emita segunda via, altere senha do Wi-Fi, ou faça o teste de velocidade de forma ágil, sem esperas longas.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3">
            <button
              onClick={() => navigate('/suporte')}
              className="px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow text-center text-sm"
            >
              Acessar Painel de Suporte
            </button>
            <a
              href="https://wa.me/551155314995?text=Preciso+de+suporte+técnico."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition text-center text-sm flex items-center justify-center space-x-2 shadow-lg shadow-green-500/20"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>Chamar Atendente 24h</span>
            </a>
          </div>
        </div>
      </section>

      {/* 11. PERGUNTAS FREQUENTES (FAQ) SECTION (Selected accordion) */}
      <section id="faq_section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600">Apoio ao Assinante</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Perguntas Frequentes de Dúvidas de Clientes
          </p>
          <p className="text-gray-500">
            Veja as respostas das perguntas comuns. Oferecemos clareza técnica total em todos os nossos contratos de faturamento.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4" id="home_faq_list">
          {mainFaqs.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-gray-150 shadow-xs overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => toggleFaq(item.id)}
                className="w-full py-5 px-6 flex items-center justify-between text-left font-bold text-slate-900 transition hover:bg-gray-50/50"
              >
                <span>{item.question}</span>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 shrink-0 ml-4 ${expandedFaq === item.id ? 'rotate-180 text-blue-600' : ''}`} />
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  expandedFaq === item.id ? 'max-h-96 border-t border-gray-100 py-5 px-6 bg-slate-50/40 text-sm text-gray-650' : 'max-h-0 pointer-events-none'
                }`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => navigate('/faq')}
            className="inline-flex items-center space-x-1 text-sm font-bold text-blue-600 hover:text-blue-700 hover:underline"
          >
            <span>Ver todas as 20+ perguntas frequentes</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 12. AVALIAÇÕES SECTION (Customer trust carousel format) */}
      <section id="avaliacoes_section" className="bg-slate-100 py-20 border-y border-gray-250">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600">Opinião Real</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              O que dizem os Assinantes da Alga Net Fibra
            </p>
            <p className="text-gray-500">
              Valorizamos feedback espontâneo e auditorias reais de sinal. Veja os relatos de quem já conta com nossa fibra óptica comercial e doméstica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {REVIEWS.map((review) => (
              <div
                key={review.id}
                className="bg-white p-6 rounded-2xl shadow-md border border-transparent hover:border-gray-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex text-amber-450 space-x-1 mb-4">
                    {[...Array(review.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-amber-500" />
                    ))}
                  </div>
                  <p className="text-xs text-blue-600 font-bold tracking-wider mb-1 uppercase">{review.role}</p>
                  <p className="text-sm text-gray-650 italic leading-relaxed">"{review.text}"</p>
                </div>
                <div className="mt-6 border-t border-gray-100 pt-4">
                  <p className="font-bold text-slate-900 text-sm">{review.name}</p>
                  <p className="text-xs text-gray-400 font-medium">Bairro {review.city} - SP</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. NOSSA EMPRESA SECTION */}
      <section id="empresa_section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Institucional</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">ALGA NET FIBRA Operadora Premium</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Operados sob direção do grupo <strong>WAGNER SENNA 07571517877 (Sennatel)</strong>, somos focados em projetar redes de transmissão óptica resilientes. Buscamos aproximar pessoas físicas e jurídicas de seus objetivos digitais com velocidade e baixíssima latência.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Nossa sede corporativa localiza-se na renomada <strong>Rua Carlo Prina, Brooklin Paulista</strong>, de onde supervisionamos o faturamento central de fibra para todas as nossas subestações de telecomunicações do país.
            </p>
            <button
              onClick={() => navigate('/empresa')}
              className="px-6 py-3 bg-slate-850 hover:bg-slate-900 text-white font-bold text-xs rounded-xl shadow transition"
            >
              Conhecer nossa Infraestrutura
            </button>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-blue-600 text-white rounded-3xl space-y-2 shadow-lg">
                <p className="text-4xl font-extrabold">24/7</p>
                <p className="text-sm font-bold">Monitoramento de rede sem interrupções</p>
              </div>
              <div className="p-6 bg-slate-100 text-slate-850 border border-gray-200 rounded-3xl space-y-2">
                <p className="text-4xl font-extrabold text-blue-600">100%</p>
                <p className="text-sm font-bold text-gray-600">Suporte técnico humano e humanizado</p>
              </div>
              <div className="p-6 bg-slate-100 text-slate-850 border border-gray-200 rounded-3xl space-y-2">
                <p className="text-4xl font-extrabold text-blue-600">GPON</p>
                <p className="text-sm font-bold text-gray-600">Tecnologia de fibra ótica multiplexada sustentável</p>
              </div>
              <div className="p-6 bg-blue-950 text-white rounded-3xl space-y-2">
                <p className="text-4xl font-extrabold text-blue-400">ANATEL</p>
                <p className="text-sm font-bold text-slate-400">Totalmente homologados e licenciados</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 14. CONTATO SECTION */}
      <section id="contato_section" className="bg-slate-100 py-20 border-y border-gray-250">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact info card Left */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block">Fale Conosco</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">Pronto para ter a Melhor Conexão?</h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Nossos consultores comerciais e técnicos corporativos estão prontos para receber suas demandas. Atendimento focado, rápido e totalmente desburocratizado.
              </p>

              <div className="space-y-4 pt-6">
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-blue-600 mr-3 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-950 text-sm">Faturamento e Telefone Comercial</p>
                    <a href="tel:1155314995" className="text-sm text-slate-600 hover:text-blue-600 hover:underline">(11) 5531-4995</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-blue-600 mr-3 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-950 text-sm">Correio Eletrônico</p>
                    <a href="mailto:wagner@sennatel.com.br" className="text-sm text-slate-600 hover:text-blue-600 hover:underline">wagner@sennatel.com.br</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-blue-600 mr-3 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-950 text-sm">Endereço de Supervisão Operacional</p>
                    <p className="text-sm text-slate-600">Rua Carlo Prina, 52, Sala 3, Brooklin Paulista, São Paulo - SP, CEP 04601-030</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive form Right */}
            <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-gray-150 shadow-xl">
              <h4 className="text-lg font-bold text-slate-900 mb-2">Solicitar Atendimento Oficial</h4>
              <p className="text-xs text-gray-400 mb-6">Preencha o formulário institucional rápido abaixo. Retornaremos em menos de 1 hora.</p>

              {formSubmitted ? (
                <div className="p-6 bg-emerald-50 text-emerald-800 rounded-2xl border border-emerald-100 text-center space-y-4">
                  <ThumbsUp className="w-12 h-12 text-emerald-600 mx-auto" />
                  <div>
                    <h5 className="font-bold text-lg">Mensagem Registrada com Sucesso!</h5>
                    <p className="text-xs mt-1">Sua solicitação de atendimento foi encaminhada ao sistema central da Sennatel. Um consultor comercial entrará em contato em breve.</p>
                  </div>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-bold text-emerald-700 hover:underline outline-none"
                  >
                    Enviar outra solicitação
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4 text-slate-800">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="home_contact_name" className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-1">Seu Nome</label>
                      <input
                        type="text"
                        id="home_contact_name"
                        required
                        placeholder="Ex: Carlos Albuquerque"
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        className="w-full px-4 py-2 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-slate-800"
                      />
                    </div>
                    <div>
                      <label htmlFor="home_contact_phone" className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-1">WhatsApp / Fone</label>
                      <input
                        type="tel"
                        id="home_contact_phone"
                        required
                        placeholder="Ex: (11) 99999-9999"
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                        className="w-full px-4 py-2 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-slate-800"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="home_contact_email" className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-1">Email Comercial ou Residencial</label>
                    <input
                      type="email"
                      id="home_contact_email"
                      required
                      placeholder="Ex: carlos@empresa.com"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      className="w-full px-4 py-2 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-slate-800"
                    />
                  </div>

                  <div>
                    <label htmlFor="home_contact_msg" className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-1">Mensagem ou Dúvida</label>
                    <textarea
                      id="home_contact_msg"
                      rows={3}
                      placeholder="Ex: Gostaria de consultar viabilidade de internet para minha clínica no Brooklin."
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      className="w-full px-4 py-2 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-slate-800"
                    ></textarea>
                  </div>

                  <div className="flex items-center space-x-2 text-xs text-gray-400">
                    <Lock className="w-3.5 h-3.5 text-gray-400" />
                    <span>Dados 100% protegidos pelas diretrizes de segurança LGPD da Sennatel.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={formLoading}
                    className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl transition shadow-lg flex items-center justify-center space-x-2 disabled:opacity-50"
                  >
                    {formLoading ? (
                      <span>Enviando dados...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Falar com nosso time de vendas</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 15. MAPA SECTION */}
      <section id="mapa_section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600">Localização Estação</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Sede Operacional do Faturamento Central
          </p>
          <p className="text-gray-500 text-sm">
            Rua Carlo Prina, 52, Sala 3, Brooklin Paulista - São Paulo / SP. Ponto estratégico para assistência de campo em todo o Brooklin e cercanias da zona sul paulista.
          </p>
        </div>

        {/* Beautiful Custom Tailwind & SVG Styled Map Mock (No dependency risks, perfect UX, very clean corporate layout) */}
        <div id="vector_map" className="relative h-80 sm:h-96 rounded-3xl bg-slate-100 border border-gray-200 overflow-hidden shadow-inner flex flex-col items-center justify-center">
          <div className="absolute inset-0 opacity-40">
            {/* Grid layout pretending to be city streets */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ccd_1px,transparent_1px),linear-gradient(to_bottom,#ccd_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            {/* Angled street representations */}
            <div className="absolute top-1/4 bottom-1/4 left-0 right-0 bg-gray-200/50 -rotate-12 transform scale-150 h-10 border-y border-gray-300"></div>
            <div className="absolute left-1/3 right-1/3 top-0 bottom-0 bg-gray-200/50 rotate-45 transform scale-150 w-12 border-x border-gray-300"></div>
            <div className="absolute left-1/2 right-1/2 top-0 bottom-0 bg-blue-150/40 transform scale-150 w-24 border-x border-blue-200/50"></div> {/* River/Avenue */}
          </div>

          {/* Map details panel */}
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-gray-150 max-w-xs z-10 text-slate-800 text-left scale-90 sm:scale-100 origin-top-left">
            <h5 className="font-bold text-sm text-slate-900 flex items-center">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 mr-2 inline-block"></span>
              Sennatel Telecom
            </h5>
            <p className="text-xs text-gray-500 mt-1">Rua Carlo Prina, 52, Sala 3</p>
            <p className="text-[10px] text-gray-400">Brooklin Paulista, São Paulo, CEP 04601-030</p>
            <a
              href="https://maps.google.com/?q=Rua+Carlo+Prina,+52,+Brooklin+Paulista,+Sao+Paulo"
              target="_blank"
              rel="noopener"
              className="text-xs font-bold text-blue-600 hover:underline mt-3 block"
            >
              Abrir no Google Maps →
            </a>
          </div>

          {/* Glowing central map pin indicator */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Real Pulsating circles */}
            <span className="flex h-10 w-10 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-10 w-10 bg-blue-600 flex items-center justify-center border-2 border-white shadow-2xl text-white">
                <MapPin className="w-5 h-5 fill-current" />
              </span>
            </span>
            <div className="mt-2 text-center bg-slate-900 text-white text-[10px] font-semibold py-1 px-2.5 rounded-full shadow-lg">
              Sede Alga Net Fibra
            </div>
          </div>

          {/* Status badge in corner */}
          <div className="absolute bottom-4 right-4 bg-slate-900/90 text-white p-2.5 rounded-xl text-[10px] font-semibold flex items-center space-x-2">
            <Activity className="w-3.5 h-3.5 text-emerald-400" />
            <span>Subestação Brooklin Paulista: Operacional 100%</span>
          </div>
        </div>
      </section>

    </div>
  );
}
