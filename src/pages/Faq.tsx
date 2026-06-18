import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data';
import { HelpCircle, ChevronDown, Search } from 'lucide-react';

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

export function Faq() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'geral' | 'financeiro' | 'tecnico' | 'vendas'>('all');
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div id="faq_page" className="py-12 space-y-16 font-sans text-slate-800">
      
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Esclarecendo Dúvidas</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">Central de Dúvidas (FAQ)</h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-sm">
          A Alga Net Fibra preza pela total transparência tarifária e clareza contratual. Explore abaixo as 20 principais perguntas respondidas detalhadamente de acordo com as normas da ANATEL.
        </p>

        {/* Live Filter Search Input */}
        <div className="max-w-md mx-auto pt-4">
          <div className="relative">
            <Search className="absolute left-3.5 top-3.5 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Digite sua dúvida (ex: cancelamento, Wi-Fi 6, IP fixo)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 text-sm font-medium"
            />
          </div>
        </div>
      </section>

      {/* Main FAQ layout */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Categories togglers */}
        <div className="flex flex-wrap justify-center gap-1.5 mb-10">
          {[
            { id: 'all', label: 'Ver Tudo (20+)' },
            { id: 'geral', label: 'Funcionamento Geral' },
            { id: 'tecnico', label: 'Dúvidas Técnicas' },
            { id: 'financeiro', label: 'Boleto & Financeiro' },
            { id: 'vendas', label: 'Adesão & Contratos' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 text-white border-blue-600 shadow'
                  : 'bg-white text-gray-600 border-gray-250 hover:bg-gray-55'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* List of Accordions */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full py-4.5 px-6 flex items-center justify-between text-left font-bold text-slate-900 hover:bg-gray-50/50"
                >
                  <span className="text-sm sm:text-base pr-4 flex items-start">
                    <span className="text-blue-500 font-extrabold mr-2">Q.</span>
                    {item.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 shrink-0 ${openId === item.id ? 'rotate-180 text-blue-600' : ''}`} />
                </button>

                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    openId === item.id ? 'max-h-[30rem] border-t border-gray-100 py-5 px-6 bg-slate-50/40 text-xs sm:text-sm text-gray-650 leading-relaxed' : 'max-h-0 pointer-events-none'
                  }`}
                >
                  <p className="whitespace-pre-line">{item.answer}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border border-gray-200 space-y-2">
              <HelpCircle className="w-12 h-12 text-gray-300 mx-auto" />
              <p className="font-bold text-slate-800">Nenhuma pergunta encontrada</p>
              <p className="text-xs text-gray-500">Tente redefinir seus filtros ou pesquisar por termos alternativos.</p>
            </div>
          )}
        </div>

        {/* CRO WhatsApp assist callout block */}
        <div className="mt-16 bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-bold text-slate-900 text-lg">Ainda com Dúvidas Contratuais?</h4>
            <p className="text-xs text-gray-500">Nossos consultores oficiais atendem ao vivo sem esperas ou robôs.</p>
          </div>
          <a
            href="https://wa.me/551155314995?text=Ol%C3%A1%21+Consultei+o+Faq+e+tenho+outras+duvidas+comerciais."
            target="_blank"
            rel="noopener"
            className="px-5 py-3 bg-green-500 hover:bg-green-600 text-white font-bold text-xs rounded-xl shadow-md transition whitespace-nowrap flex items-center gap-2"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Conversar pelo WhatsApp</span>
          </a>
        </div>

      </section>

    </div>
  );
}
