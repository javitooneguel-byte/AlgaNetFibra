import React from 'react';
import { 
  MessageSquare, 
  PhoneCall, 
  Mail, 
  MapPin, 
  Clock, 
  Smartphone,
  ArrowRight,
  ShieldCheck,
  Zap,
  Sparkles,
  Server,
  Headphones
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

export function Central() {
  const zapNumber = "551155314995";
  const emailContact = "contato.alganetfibra.com";

  const departments = [
    {
      id: "vendas",
      title: "Contratar Fibra - Novas Assinaturas",
      description: "Consultoria completa de vendas, planos de ultra velocidade 300 Mega a 1 Giga com Wi-Fi 6 e instalação inclusa no Brooklin.",
      badge: "Vendas Online",
      message: "Olá! Gostaria de consultar a cobertura de fibra óptica e conhecer os melhores planos.",
      color: "border-[#28BEA5]/20 bg-[#28BEA5]/5 text-[#28BEA5]",
      btnStyle: "bg-[#28BEA5] hover:bg-[#28BEA5]/90 text-white shadow-[0_4px_16px_rgba(40,190,165,0.3)] hover:scale-[1.03]"
    },
    {
      id: "suporte",
      title: "Suporte Técnico Especializado",
      description: "Suporte especializado para configurar roteador Wi-Fi, melhorar sinal ou consultar manutenções preventivas.",
      badge: "Suporte Ativo",
      message: "Olá! Preciso de auxílio ou suporte técnico especializado para a minha conexão de internet.",
      color: "border-sky-100 bg-sky-50/50 text-sky-600",
      btnStyle: "bg-sky-600 hover:bg-sky-700 text-white shadow-[0_4px_16px_rgba(2,132,199,0.3)] hover:scale-[1.03]"
    },
    {
      id: "financeiro",
      title: "Financeiro & Segundas Vias",
      description: "Emissão imediata de segunda via de boletos, comprovantes de pagamento e consultas de mensalidades.",
      badge: "Financeiro",
      message: "Olá! Gostaria de falar com o departamento financeiro para conferir minhas faturas ou solicitar o Pix.",
      color: "border-amber-100 bg-amber-50/50 text-amber-600",
      btnStyle: "bg-amber-600 hover:bg-amber-700 text-white shadow-[0_4px_16px_rgba(217,119,6,0.3)] hover:scale-[1.03]"
    }
  ];

  return (
    <div id="contact_page" className="py-12 md:py-24 bg-slate-50 min-h-screen font-sans">
      
      {/* Hero section */}
      <section className="max-w-4xl mx-auto px-4 mb-16 text-center">
        <div className="inline-flex items-center space-x-2 bg-[#28BEA5]/10 border border-[#28BEA5]/20 px-4 py-1.5 rounded-full mb-6">
          <MessageSquare className="w-3.5 h-3.5 text-[#28BEA5]" />
          <span className="text-[11px] font-black text-[#28BEA5] uppercase tracking-wider">Fale Conosco</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-none uppercase italic">
          CANAIS DE <span className="text-[#28BEA5]">CONTATO</span>
        </h1>
        <div className="w-24 h-1.5 bg-[#28BEA5] mx-auto rounded-full mt-4"></div>
        <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base font-medium mt-5 leading-relaxed">
          Evite esperas e burocracia. Nossos canais de atendimento estão prontos para te ajudar imediatamente de forma simples e rápida. Clique em uma das opções abaixo para iniciar sua conversa.
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-4 space-y-8">
        
        {/* Working Hours Banner */}
        <div className="bg-white rounded-3xl border border-slate-100 p-6 md:p-8 shadow-md flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#28BEA5] to-teal-400"></div>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#28BEA5]/10 flex items-center justify-center text-[#28BEA5] shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase text-slate-400 tracking-wider">Horário de Funcionamento</h3>
              <p className="text-base font-black text-slate-800 uppercase tracking-tight mt-0.5">
                Atendimento das <span className="text-[#28BEA5]">07h da manhã até 18h</span>
              </p>
              <p className="text-xs text-slate-500 font-medium">De Segunda a Sábado com agentes especializados.</p>
            </div>
          </div>

          <div className="flex items-center space-x-2 bg-emerald-50 border border-emerald-100 px-3.5 py-1.5 rounded-full shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider">Operadores Disponíveis</span>
          </div>
        </div>

        {/* Contact cards section */}
        <div className="space-y-4">
          <h2 className="text-xs font-black uppercase text-slate-400 tracking-widest flex items-center gap-2">
            <Smartphone className="w-4 h-4 text-slate-400" /> WhatsApp Direto por Setor
          </h2>

          <div className="grid grid-cols-1 gap-4">
            {departments.map((dept) => (
              <div 
                key={dept.id} 
                className="bg-white p-6 rounded-3xl border border-slate-100 hover:border-[#28BEA5]/40 hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-2.5 max-w-xl">
                  <div className="flex items-center gap-2">
                    <span className={`text-[9px] font-extrabold uppercase px-2.5 py-1 rounded-lg border ${dept.color}`}>
                      {dept.badge}
                    </span>
                  </div>
                  <h3 className="text-base md:text-lg font-black text-slate-900 uppercase tracking-tight">
                    {dept.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-medium">
                    {dept.description}
                  </p>
                </div>

                <a
                  href={`https://wa.me/${zapNumber}?text=${encodeURIComponent(dept.message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2.5 text-xs font-extrabold uppercase tracking-widest py-4 px-6 rounded-2xl transition-all duration-300 ${dept.btnStyle} shrink-0`}
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  <span>Enviar Mensagem</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Secondary fast contact buttons (Phone, Email, Base) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full pt-4">
          
          <a 
            href="tel:1155314995" 
            className="bg-white p-6 rounded-3xl border border-slate-100 hover:border-[#28BEA5]/30 hover:shadow-md transition-all duration-300 flex flex-col items-center text-center space-y-3 group"
          >
            <div className="w-12 h-12 rounded-full bg-slate-50 text-slate-800 flex items-center justify-center transition-colors group-hover:bg-[#28BEA5]/10 group-hover:text-[#28BEA5]">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[9px] text-slate-400 font-extrabold uppercase tracking-widest">Ligações por Telefone</p>
              <p className="text-sm font-black text-slate-800 mt-1 uppercase tracking-tight font-mono">(11) 5531-4995</p>
              <p className="text-[10px] text-slate-500 font-medium">Fale conosco por chamada fixo</p>
            </div>
          </a>

          <a 
            href={`mailto:${emailContact}`} 
            className="bg-white p-6 rounded-3xl border border-slate-100 hover:border-[#28BEA5]/30 hover:shadow-md transition-all duration-300 flex flex-col items-center text-center space-y-3 group"
          >
            <div className="w-12 h-12 rounded-full bg-slate-50 text-slate-800 flex items-center justify-center transition-colors group-hover:bg-[#28BEA5]/10 group-hover:text-[#28BEA5]">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[9px] text-slate-400 font-extrabold uppercase tracking-widest">E-mail de Contato</p>
              <p className="text-sm font-black text-slate-800 mt-1 tracking-tight lowercase">{emailContact}</p>
              <p className="text-[10px] text-slate-500 font-medium">Contatos oficiais de mensagens</p>
            </div>
          </a>

          <div 
            className="bg-white p-6 rounded-3xl border border-slate-100 flex flex-col items-center text-center space-y-3"
          >
            <div className="w-12 h-12 rounded-full bg-slate-50 text-[#28BEA5] flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[9px] text-slate-400 font-extrabold uppercase tracking-widest">Sede Principal</p>
              <p className="text-sm font-black text-slate-800 mt-1 uppercase tracking-tight">Brooklin Paulista</p>
              <p className="text-[10px] text-slate-500 font-medium">São Paulo - SP, Brasil</p>
            </div>
          </div>

        </div>

      </div>

      {/* Safety & Compliance Bottom strip */}
      <section className="max-w-4xl mx-auto px-4 mt-16 text-center">
        <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">
          Sennatel Telecomunicações Integradas LTDA • Alga Net Fibra • Brooklin • São Paulo - SP
        </p>
      </section>

    </div>
  );
}
