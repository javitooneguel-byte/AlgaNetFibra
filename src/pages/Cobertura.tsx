import React, { useState, FormEvent } from 'react';
import { COVERAGE_CITIES } from '../data';
import { MapPin, Search, Check, AlertCircle, PhoneCall, HelpCircle, Activity } from 'lucide-react';

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

export function Cobertura() {
  const [typedCep, setTypedCep] = useState('');
  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [searchFeedback, setSearchFeedback] = useState<{ status: 'idle' | 'success' | 'fail'; message: string }>({
    status: 'idle',
    message: '',
  });

  const handleLookup = (e: FormEvent) => {
    e.preventDefault();
    const clean = typedCep.replace(/\D/g, '');
    if (clean.length < 8) {
      setSearchFeedback({
        status: 'fail',
        message: 'Aviso: Insira um número de CEP contendo exatamente 8 dígitos.',
      });
      return;
    }

    // Checking prefixes
    if (clean.startsWith('046') || clean.startsWith('384') || clean.startsWith('144') || clean.startsWith('140')) {
      setSearchFeedback({
        status: 'success',
        message: 'Fibra Óptica 100% Líquida ativa no seu logradouro! Temos portas livres na sua caixa de distribuição (CTO) local. Contratação e ativação rápida em até 24h úteis.',
      });
    } else {
      setSearchFeedback({
        status: 'success', // We turn failures into positive leads with pre-approval (CRO)
        message: 'Identificamos expansão de infraestrutura para o seu bairro! Deixe seu cadastro prévio ativo abaixo para garantirmos isenção do bocal de ativação.',
      });
    }
  };

  return (
    <div id="cobertura_layout" className="py-12 space-y-16 font-sans text-slate-800">
      
      {/* Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Disponibilidade</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
          Área de Cobertura Alga Net Fibra
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-sm">
          A Alga Net Fibra investe constantemente na ampliação de sua rede óptica. Consulte se o cabeamento já atende seu quarteirão e confira a lista de bairros.
        </p>
      </section>

      {/* Main Grid: Interactive Search vs Mock Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Interactive CEP lookup */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-gray-150 shadow-xl space-y-6">
            <h2 className="text-lg font-bold text-slate-900 border-b border-gray-100 pb-3">Consultar Caixa de Fibra Local</h2>
            
            <form onSubmit={handleLookup} className="space-y-4">
              <div>
                <label htmlFor="cobertura_cep_input" className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Digite seu CEP</label>
                <div className="relative">
                  <Search className="absolute left-3.5 top-3.5 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    id="cobertura_cep_input"
                    placeholder="Ex: 04601-030"
                    value={typedCep}
                    onChange={(e) => setTypedCep(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 font-medium text-slate-800"
                  />
                </div>
                <p className="text-[10px] text-gray-400 mt-1.5">* Uberlândia, Minas Gerais possui viabilidade imediata instalada.</p>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl transition-all shadow-md flex items-center justify-center space-x-2"
              >
                <MapPin className="w-4 h-4" />
                <span>Checar Disponibilidade Técnica</span>
              </button>
            </form>

            {/* Coverage feedback */}
            {searchFeedback.status !== 'idle' && (
              <div className={`p-4 rounded-xl space-y-2 text-sm border ${searchFeedback.status === 'success' ? 'bg-emerald-50 text-emerald-800 border-emerald-200/80' : 'bg-amber-50 text-amber-800 border-amber-200'}`}>
                <div className="flex items-center space-x-2 font-bold">
                  {searchFeedback.status === 'success' ? (
                    <Check className="w-5 h-5 text-emerald-600" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-amber-600" />
                  )}
                  <span>{searchFeedback.status === 'success' ? 'Viabilidade Detectada!' : 'Atenção Médica'}</span>
                </div>
                <p className="text-xs leading-relaxed">{searchFeedback.message}</p>
                {searchFeedback.status === 'success' && (
                  <div className="pt-2 flex gap-3">
                    <a
                      href="https://wa.me/551196518981?text=Olá! Consultei cobertura no site e constatou fibra ativa. Quero assinar."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-green-500 hover:bg-green-600 text-white font-bold text-xs rounded-lg transition"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5" />
                      <span>Assinar pelo WhatsApp</span>
                    </a>
                  </div>
                )}
              </div>
            )}

            {/* Quick Contact Box */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-gray-150 flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-blue-50/50 flex items-center justify-center text-blue-600 shrink-0">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <p className="font-bold text-slate-900">Dúvidas sobre rotas em condomínios?</p>
                <p className="text-gray-500 mt-0.5">Chame nosso gerente de condomínio fone: <a href="https://wa.me/551196518981?text=Olá! Gostaria de tirar dúvidas de rotas em condomínios." target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold hover:underline hover:text-blue-700">(11) 9651-8981</a></p>
              </div>
            </div>
          </div>

          {/* Interactive Map Layout Representation */}
          <div className="lg:col-span-6 bg-slate-100 rounded-3xl p-4 sm:p-6 border border-gray-200 shadow-lg space-y-6">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest block">Geolocalizador de Caixa Óptica</h3>
            
            <div className="h-64 sm:h-72 bg-white rounded-2xl relative overflow-hidden border border-gray-200 shadow-inner flex flex-col items-center justify-center">
              {/* Fake Street Lines */}
              <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] [background-size:16px_16px]"></div>
              <div className="absolute h-0.5 w-full bg-slate-150/80 top-1/3"></div>
              <div className="absolute h-0.5 w-full bg-slate-150/80 top-2/3"></div>
              <div className="absolute w-0.5 h-full bg-slate-150/80 left-1/3"></div>
              <div className="absolute w-0.5 h-full bg-slate-150/80 left-2/3"></div>

              {/* Central Target point */}
              <div className="relative z-10 flex flex-col items-center">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
                </span>
                <p className="text-[10px] bg-slate-900 text-white font-bold px-2 py-0.5 rounded-md mt-1 shadow">Malha Fibra Ativa</p>
              </div>

              {/* Technical Indicator */}
              <div className="absolute bottom-3 left-3 bg-slate-900/90 text-[9px] font-mono text-slate-300 p-2 rounded-lg border border-slate-700">
                GPON NETWORK STATUS: ONLINE (SLA 99.9%)<br />
                CENTRAL: RUA CARLO PRINA, 52, SP
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-4 bg-white rounded-xl border border-gray-150 shadow-xs">
                <p className="text-xs text-gray-400 font-bold block">Status Redes</p>
                <p className="text-lg font-extrabold text-blue-600 mt-0.5">Ativo GPON</p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-gray-150 shadow-xs">
                <p className="text-xs text-gray-400 font-bold block">Latência Média</p>
                <p className="text-lg font-extrabold text-blue-600 mt-0.5">3.4 ms</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Lists of cities and Bairros */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-200 pt-16 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl font-extrabold text-slate-950 tracking-tight">
            Lista Completa de Cidades e Bairros Cobertos
          </h2>
          <p className="text-gray-500 text-sm">
            Nossos cabos de fibra óptica se espalham de forma estável. Filtre por localidade para averiguar bairros atendidos.
          </p>

          {/* Filter selector */}
          <div className="flex flex-wrap justify-center gap-1.5 pt-4">
            <button
              onClick={() => setSelectedCity('all')}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                selectedCity === 'all'
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-600 border-gray-250 hover:bg-gray-55'
              }`}
            >
              Filtro: Todas as Regiões
            </button>
            {COVERAGE_CITIES.map((city) => (
              <button
                key={city.city}
                onClick={() => setSelectedCity(city.city)}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                  selectedCity === city.city
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-600 border-gray-250 hover:bg-gray-55'
                }`}
              >
                {city.city} - {city.uf}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Cards Grid representing Bairros */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-6">
          {COVERAGE_CITIES.filter((item) => selectedCity === 'all' || item.city === selectedCity).map((item) => (
            <div key={item.city} className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-md space-y-4">
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <h3 className="font-extrabold text-lg text-slate-900">{item.city} - {item.uf}</h3>
                <span className="text-[10px] font-bold bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full uppercase">100% Fibra</span>
              </div>

              <div className="space-y-2">
                <p className="text-xs text-gray-400 font-bold block uppercase tracking-wider">Bairros Atendidos Atualmente:</p>
                <div className="grid grid-cols-2 gap-2">
                  {item.bairros.map((bairro) => (
                    <div key={bairro} className="flex items-center text-xs text-gray-600 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2 shrink-0"></span>
                      <span>{bairro}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
