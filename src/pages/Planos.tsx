import React, { useState } from 'react';
import { PLANS } from '../data';
import { Check, ShieldCheck, Scale, Zap, Info, Wifi, Headphones } from 'lucide-react';

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

export function Planos() {
  const [category, setCategory] = useState<'all' | 'residential' | 'business'>('all');

  const filteredPlans = PLANS.filter((plan) => {
    if (category === 'all') return true;
    return plan.category === category;
  });

  return (
    <div id="planos_page" className="py-12 space-y-16 font-sans">
      
      {/* Header section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Transparência Total</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
          Nossos Planos de Internet por Fibra Óptica
        </h1>
        <p className="text-gray-500 max-w-3xl mx-auto">
          Confira abaixo todos os detalhes dos nossos planos. Comprometimento com preços claros, sem taxas escondidas, aparelhos em comodato de alto nível e isenções completas de instalação.
        </p>

        {/* Categories Tab selector */}
        <div className="inline-flex bg-slate-100 p-1 rounded-xl border border-gray-200 mt-6 shadow-xs">
          <button
            onClick={() => setCategory('all')}
            className={`px-5 py-2 rounded-lg text-xs font-bold transition-all ${
              category === 'all'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            Todos os Planos
          </button>
          <button
            onClick={() => setCategory('residential')}
            className={`px-5 py-2 rounded-lg text-xs font-bold transition-all ${
              category === 'residential'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            Residencial
          </button>
          <button
            onClick={() => setCategory('business')}
            className={`px-5 py-2 rounded-lg text-xs font-bold transition-all ${
              category === 'business'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            Empresarial (PJ)
          </button>
        </div>
      </section>

       {/* Plan Card Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPlans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white rounded-2xl flex flex-col border-2 relative overflow-hidden transition-all duration-300 ${
                plan.popular
                  ? 'border-blue-600 shadow-[0_12px_36px_rgba(37,99,235,0.12)]'
                  : 'border-slate-200 hover:border-slate-350 shadow-sm hover:shadow-md'
              }`}
            >
              {plan.popular && (
                <span className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-black px-3.5 py-1.5 uppercase rounded-bl-lg tracking-wider z-10">
                  Mais Popular
                </span>
              )}

              {/* Card Header Section */}
              <div className="p-6 border-b border-slate-100 bg-slate-50/50">
                <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase block mb-1">
                  {plan.category === 'business' ? 'Corporativo B2B' : 'Uso Residencial'}
                </span>
                <h3 className="text-2xl font-black text-blue-600 uppercase italic tracking-tight">{plan.name}</h3>
                
                <div className="mt-4 flex items-baseline">
                  <span className="text-sm font-bold text-slate-500 mr-1 uppercase">R$</span>
                  <span className="text-4xl font-extrabold text-slate-900 tracking-tighter">{plan.price.split(',')[0]}</span>
                  <span className="text-sm font-bold text-slate-500">,{plan.price.split(',')[1]} /mês</span>
                </div>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed min-h-8">{plan.description}</p>
              </div>

              {/* Technical features list */}
              <div className="p-6 flex-grow space-y-6">
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2.5">Velocidade Física</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex flex-col justify-between">
                      <p className="text-[9px] text-slate-400 uppercase font-bold tracking-wider">Download</p>
                      <p className="font-extrabold text-slate-800 text-lg leading-tight mt-0.5">{plan.download}</p>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex flex-col justify-between">
                      <p className="text-[9px] text-slate-400 uppercase font-bold tracking-wider">Upload</p>
                      <p className="font-extrabold text-slate-800 text-lg leading-tight mt-0.5">{plan.upload}</p>
                    </div>
                  </div>
                </div>

                {/* Transparency items */}
                <div className="space-y-3.5">
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Detalhes do Contrato</h4>
                  
                  <div className="flex items-start text-xs leading-relaxed text-slate-600">
                    <Wifi className="w-4 h-4 text-blue-600 mr-2.5 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900 uppercase text-[9px] tracking-wider">Tecnologia Wi-Fi</p>
                      <p className="text-slate-650">{plan.wifi}</p>
                    </div>
                  </div>

                  <div className="flex items-start text-xs leading-relaxed text-slate-600">
                    <Headphones className="w-4 h-4 text-blue-600 mr-2.5 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900 uppercase text-[9px] tracking-wider">Suporte Técnico</p>
                      <p className="text-slate-650">{plan.support}</p>
                    </div>
                  </div>

                  <div className="flex items-start text-xs leading-relaxed text-slate-600">
                    <Zap className="w-4 h-4 text-blue-600 mr-2.5 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900 uppercase text-[9px] tracking-wider">Instalação & Ativação</p>
                      <p className="text-slate-650">{plan.installation} {plan.taxaInstalacao}</p>
                    </div>
                  </div>

                  <div className="flex items-start text-xs leading-relaxed text-slate-600">
                    <Info className="w-4 h-4 text-blue-600 mr-2.5 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900 uppercase text-[9px] tracking-wider">Equipamentos & Comodato</p>
                      <p className="text-slate-650">{plan.equipments} ({plan.comodato})</p>
                    </div>
                  </div>

                  <div className="flex items-start text-xs leading-relaxed text-slate-600">
                    <Scale className="w-4 h-4 text-blue-600 mr-2.5 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900 uppercase text-[9px] tracking-wider">Fidelidade Regressiva</p>
                      <p className="text-slate-650">{plan.fidelidade}</p>
                    </div>
                  </div>
                </div>

                {/* Included apps list */}
                {plan.appsIncluso.length > 0 && (
                  <div className="pt-4 border-t border-slate-100">
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2.5">Serviços Digitais Inclusos</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {plan.appsIncluso.map((app) => (
                        <span key={app} className="text-[9px] font-bold uppercase tracking-wider bg-blue-50 text-blue-600 px-2.5 py-1 rounded-md border border-blue-100">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6 bg-slate-50 border-t border-slate-100 text-center">
                <a
                  href={`https://wa.me/551196518981?text=Olá! Gostaria de concluir a contratação da fibra no plano: ${encodeURIComponent(plan.name)} - R$ ${plan.price}/mes`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-green-500 hover:bg-green-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-[0_4px_12px_rgba(34,197,94,0.2)] hover:shadow-[0_4px_20px_rgba(34,197,94,0.4)] hover:scale-[1.01] transition-all duration-300"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Contratar via WhatsApp</span>
                </a>
                <p className="mt-2 text-[9px] text-slate-400 font-medium uppercase tracking-wider">Ativação rápida sujeita à viabilidade técnica.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contract terms alert section block (Anatel Transparency) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-amber-50 rounded-2xl border border-amber-200/80 p-6 space-y-3">
        <h4 className="text-sm font-bold text-amber-800 flex items-center">
          <Info className="w-5 h-5 text-amber-600 mr-2" />
          Aviso Legal e Informações Importantes regulados pela ANATEL
        </h4>
        <div className="text-xs text-amber-805 space-y-2 leading-relaxed">
          <p>
            1. <strong>Fidelidade de 12 Meses:</strong> Os benefícios de isenção total de taxas de instalação e facilitação de equipamentos roteadores comodatos estão intrinsecamente vinculados à permanência mínima de 12 meses no plano subscrito. O desligamento imprevisto antes do décimo segundo faturamento enseja multa indenizatória regressiva proporcional ao período que resta cumprir (resolução geral 632 da ANATEL).
          </p>
          <p>
            2. <strong>Comodato Industrial:</strong> Todos os equipamentos de rádio de rede (modens ópticos ONUs, antenas dual-band e roteadores Mesh) são cedidos ao assinante na modalidade de locação gratuita (comodato), persistindo como patrimônio material da Sennatel Telecom. Deverão ser postos em coleta em caso de cancelamento.
          </p>
          <p>
            3. <strong>Velocidade Sem Fio (Wi-Fi):</strong> O rendimento efetivo em testes de velocidade executados sem cabos flutua conforme a configuração de hardware do celular conectado, paredes estruturais do imóvel e perturbações eletromagnéticas do local. Seus testes oficiais de medição de banda devem ser efetuados via cabo de rede na porta gigabit da ONU.
          </p>
        </div>
      </section>

    </div>
  );
}
