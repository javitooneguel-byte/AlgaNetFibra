import { ShieldCheck, Target, Heart, Eye, Award, Check } from 'lucide-react';

export function Empresa() {
  return (
    <div id="empresa_layout" className="py-12 space-y-20 font-sans text-slate-800">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block">Nossa História</span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Alga Net Fibra: Conectando Caminhos com Qualidade
            </h1>
            <p className="text-gray-500 leading-relaxed text-sm">
              Operada sob a direção corporativa de <strong>WAGNER SENNA 07571517877 (Sennatel)</strong>, a Alga Net Fibra nasceu com um propósito claro: democratizar o acesso à internet corporativa de baixíssima latência e redes residenciais simétricas estáveis.
            </p>
            <p className="text-gray-500 leading-relaxed text-sm">
              Com sede de supervisão de faturamento administrativo na famosa <strong>Rua Carlo Prina, Brooklin Paulista</strong>, em São Paulo, nos tornamos referência na implantação de redes ópticas modernas de padrão GPON, oferecendo planos robustos transparentes e suporte 24 horas por dia.
            </p>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1551703599-6b3dbb898e58?auto=format&fit=crop&w=800&q=80"
              alt="Sala de servidores de alta performance da Sennatel Telecom com cabos de fibra ótica azul e iluminação verde"
              className="rounded-3xl shadow-2xl border border-gray-150 object-cover w-full h-80 sm:h-96"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* MVV Grid (Missão, Visão, Valores) */}
      <section className="bg-slate-100 py-16 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600">Fundamentos</h2>
            <p className="text-2xl sm:text-3.5xl font-extrabold text-slate-950">Missão, Visão e Nossos Valores</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900">Missão</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Prover internet de alta velocidade e fidelidade óptica extrema, simplificando dinâmicas domésticas e impulsionando o faturamento operacional de PMEs através de estabilidade total.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900">Visão</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Ser reconhecida nacionalmente entre as grandes concessionárias de telecomunicação pela transparência tarifária inflexível, qualidade no rádio sem fio roteado e agilidade do suporte in-loco.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900">Valores</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Atuação corporativa justa, atendimento integral humanizado sem filas de espera robóticas de central, responsabilidade legal com faturamentos e governança rígida sob diretrizes da ANATEL.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compromisso com Clientes & Infraestrutura */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative">
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
              alt="Técnico de óculos protetores operando máquina de fusão de fibra de alta tecnologia em campo"
              className="rounded-3xl shadow-xl border border-gray-150 object-cover w-full h-80 sm:h-96"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block">Nosso Compromisso</span>
            <h2 className="text-3xl font-extrabold text-slate-950">Infraestrutura Óptica e Cuidado Integral</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Diferente de provedores que terceirizam 100% da manutenção, a Alga Net Fibra opera com equipes técnicas locais e viaturas próprias de fusão de cabos. Nossa malha utiliza cabeamento blindado do início do faturamento estrutural à ONU na sua empresa.
            </p>

            <ul className="space-y-3.5 text-sm text-slate-800">
              <li className="flex items-start">
                <ShieldCheck className="w-5 h-5 text-blue-600 mr-2.5 shrink-0 mt-0.5" />
                <span>Mapeamento sistemático de instabilidade na subestação</span>
              </li>
              <li className="flex items-start">
                <ShieldCheck className="w-5 h-5 text-blue-600 mr-2.5 shrink-0 mt-0.5" />
                <span>Atendimento humanizado direto por consultor de plantão</span>
              </li>
              <li className="flex items-start">
                <ShieldCheck className="w-5 h-5 text-blue-600 mr-2.5 shrink-0 mt-0.5" />
                <span>Garantia contratual de banda e suporte em comodato sem ônus</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Equipe e Atendimento */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-xs font-bold text-blue-400 uppercase tracking-widest block">Nossa Equipe</h2>
            <p className="text-3xl font-extrabold">Especialistas e Engenheiros Certificados</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Nossa equipe operacional conta com engenheiros de telecomunicações certificados pelo CREA e técnicos de instalação qualificados pelas normativas NR-10 e NR-35 (trabalho em altura e segurança em eletricidade), atuando sempre sob supervisão ativa.
            </p>
          </div>

          <div className="lg:col-span-6 bg-slate-800 p-8 rounded-2xl border border-slate-700 grid grid-cols-2 gap-4">
            <div className="p-4 bg-slate-750/30 rounded-xl space-y-1">
              <Award className="w-6 h-6 text-blue-400 mb-2" />
              <p className="font-bold text-white text-sm">CREA Ativo</p>
              <p className="text-xs text-slate-400">Engenharia interna certificada de rota óptica.</p>
            </div>
            <div className="p-4 bg-slate-750/30 rounded-xl space-y-1">
              <ShieldCheck className="w-6 h-6 text-blue-400 mb-2" />
              <p className="font-bold text-white text-sm">Normas de Campo</p>
              <p className="text-xs text-slate-400">Segurança rígida técnica em postes e rede aérea.</p>
            </div>
            <div className="p-4 bg-slate-750/30 rounded-xl space-y-1">
              <Target className="w-6 h-6 text-blue-400 mb-2" />
              <p className="font-bold text-white text-sm">SLA Rígido</p>
              <p className="text-xs text-slate-400">Tempo de rampa assistida de bocal menor que 8h.</p>
            </div>
            <div className="p-4 bg-slate-750/30 rounded-xl space-y-1">
              <Heart className="w-6 h-6 text-blue-400 mb-2" />
              <p className="font-bold text-white text-sm">ISO 9001</p>
              <p className="text-xs text-slate-400">Padronização de diretrizes para atendimento VIP.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
