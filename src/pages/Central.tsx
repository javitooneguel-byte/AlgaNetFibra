import React from 'react';
import { MessageSquare, CheckCircle, Clock, ShieldCheck } from 'lucide-react';

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

  const services = [
    {
      id: "pedir_fibra",
      title: "Quero Pedir Minha Net Fibra",
      description: "Inicie o procedimento de adesão com nosso especialista de prontidão.",
      buttonText: "CHAMAR NO WHATSAPP",
      message: "Olá! Gostaria de pedir a minha Net Fibra. Iniciar o procedimento de adesão com o especialista.",
      color: "bg-green-50 text-green-600 border-green-100",
      btnColor: "bg-green-500 hover:bg-green-600 shadow-[0_4px_18px_rgba(34,197,94,0.35)] hover:shadow-[0_4px_25px_rgba(34,197,94,0.5)]"
    },
    {
      id: "suporte_tecnico",
      title: "Falar com Suporte Técnico",
      description: "Tire dúvidas sobre instalação, cobertura etc.",
      buttonText: "CHAMAR ANA NO WHATSAPP",
      message: "Olá, Ana! Preciso de suporte técnico para tirar dúvidas sobre instalação, cobertura ou conexão.",
      color: "bg-green-50 text-green-600 border-green-100",
      btnColor: "bg-green-500 hover:bg-green-600 shadow-[0_4px_18px_rgba(34,197,94,0.35)] hover:shadow-[0_4px_25px_rgba(34,197,94,0.5)]"
    },
    {
      id: "atualizar_cadastro",
      title: "Atualizar Meus Dados Cadastrais",
      description: "Modifique dados do seu cadastro.",
      buttonText: "CHAMAR ANA NO WHATSAPP",
      message: "Olá, Ana! Preciso atualizar meus dados cadastrais. Gostaria de solicitar a modificação do meu cadastro.",
      color: "bg-green-50 text-green-600 border-green-100",
      btnColor: "bg-green-500 hover:bg-green-600 shadow-[0_4px_18px_rgba(34,197,94,0.35)] hover:shadow-[0_4px_25px_rgba(34,197,94,0.5)]"
    },
    {
      id: "outros_cancelamentos",
      title: "Outras Solicitações e Cancelamentos",
      description: "Atendimento transparente e imediato sem burocracias.",
      buttonText: "CHAMAR ANA NO WHATSAPP",
      message: "Olá, Ana! Gostaria de fazer uma solicitação ou tratar sobre cancelamento com atendimento transparente e imediato.",
      color: "bg-green-50 text-green-600 border-green-100",
      btnColor: "bg-green-500 hover:bg-green-600 shadow-[0_4px_18px_rgba(34,197,94,0.35)] hover:shadow-[0_4px_25px_rgba(34,197,94,0.5)]"
    }
  ];

  return (
    <div id="central_page" className="py-12 md:py-20 bg-slate-50 min-h-screen font-sans">
      
      {/* Page Header */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-4 mb-12">
        <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-100 inline-block">
          Atendimento Direto WhatsApp
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase italic">
          Central de Filial
        </h1>
        <div className="w-20 h-1 bg-green-500 mx-auto rounded-full"></div>
        <p className="text-slate-500 max-w-xl mx-auto text-sm font-medium">
          Diga adeus a ligações demoradas e menus de robôs. Nosso suporte é humano, direto e imediato via WhatsApp.
        </p>
      </section>

      {/* Main Focus Component */}
      <section className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-6 sm:p-10 space-y-8 relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-green-500 to-emerald-400"></div>

          {/* User directive introductory text */}
          <div className="text-center md:text-left border-b border-slate-100 pb-6">
            <h2 className="text-lg sm:text-xl font-bold text-slate-800 flex items-center justify-center md:justify-start gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-ping"></span>
              Selecione o serviço desejado abaixo:
            </h2>
            <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">
              O atendimento iniciará instantaneamente no seu celular ou computador
            </p>
          </div>

          {/* Services Grid Selection */}
          <div className="space-y-6">
            {services.map((svc) => {
              return (
                <div 
                  key={svc.id}
                  id={`service_card_${svc.id}`}
                  className="group bg-slate-50/50 hover:bg-white p-5 rounded-2xl border border-slate-100 hover:border-slate-300 hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border shrink-0 transition-all duration-300 group-hover:scale-110 ${svc.color}`}>
                      <WhatsAppIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-green-600 transition-colors">
                        {svc.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1 font-medium">
                        {svc.description}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0">
                    <a
                      href={`https://wa.me/${zapNumber}?text=${encodeURIComponent(svc.message)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full md:w-auto inline-flex items-center justify-center gap-2.5 text-white font-black text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all duration-300 hover:scale-[1.03] active:scale-95 ${svc.btnColor}`}
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>{svc.buttonText}</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Prompt SLA & Security compliance */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left mt-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-green-600 shrink-0" />
              <div>
                <p className="text-xs font-bold text-slate-800 uppercase tracking-wide">Atendimento 100% Criptografado</p>
                <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Seus dados estão protegidos sob a LGPD</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-500" />
              <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded">
                Tempo de Espera: ~2 min
              </span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
