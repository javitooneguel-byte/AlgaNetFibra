import React, { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Clock, Send, ThumbsUp, HelpCircle, Shield } from 'lucide-react';

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

export function Contato() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('São Paulo');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !email) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      // clear
      setName('');
      setPhone('');
      setEmail('');
      setMessage('');
    }, 1200);
  };

  return (
    <div id="contato_page" className="py-12 space-y-16 font-sans text-slate-800">
      
      {/* Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Fale Conosco</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">Canais de Contato</h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-sm">
          A Alga Net Fibra atua com faturamento central unificado. Entre em contato por telefone comercial, mídias eletrônicas, formulário institucional ou visitando nossa sede operacional.
        </p>
      </section>

      {/* Main Grid: Info cards vs Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Cards Side */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-xl font-bold text-slate-900 border-b border-gray-150 pb-3 block">Informações Oficiais</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              
              <div className="p-5 bg-white rounded-2xl border border-gray-150 shadow-xs flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-sm text-slate-900">Atendimento Telefônico</p>
                  <a href="https://wa.me/551196518981?text=Olá! Gostaria de falar com o atendimento." target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline">
                    (11) 9651-8981
                  </a>
                  <p className="text-[10px] text-gray-400 mt-1">Clique para chamar no WhatsApp.</p>
                </div>
              </div>

              <div className="p-5 bg-white rounded-2xl border border-gray-150 shadow-xs flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center text-green-600 shrink-0">
                  <WhatsAppIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-sm text-slate-900">WhatsApp Comercial</p>
                  <a href="https://wa.me/551196518981?text=Olá! Gostaria de conhecer os planos." target="_blank" rel="noopener noreferrer" className="text-xs text-green-600 hover:underline font-bold inline-flex items-center gap-1">
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                    <span>(11) 9651-8981</span>
                  </a>
                  <p className="text-[10px] text-gray-400 mt-1">Conexão instantânea para vendas e suporte.</p>
                </div>
              </div>

              <div className="p-5 bg-white rounded-2xl border border-gray-150 shadow-xs flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-sm text-slate-900">E-mail Corporativo</p>
                  <a href="https://wa.me/551196518981?text=Olá! Gostaria de falar com o atendimento da Alga Net por email." target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline break-all block">
                    contato.alganetfibra.com
                  </a>
                  <p className="text-[10px] text-gray-400 mt-1">Clique para chamar no WhatsApp.</p>
                </div>
              </div>

              <div className="p-5 bg-white rounded-2xl border border-gray-150 shadow-xs flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-sm text-slate-900">Endereço de Supervisão</p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Uberlândia<br />
                    Minas Gerais, Brasil
                  </p>
                </div>
              </div>

              <div className="p-5 bg-white rounded-2xl border border-gray-150 shadow-xs flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-sm text-slate-900">Horário Administrativo</p>
                  <p className="text-xs text-gray-650">Segunda a Sexta: 08:00 às 19:00</p>
                  <p className="text-xs text-gray-650">Sábado: 08:00 às 13:00</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">* Atendimento de plantão técnico 24/7 de forma ininterrupta.</p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact form Side */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-gray-150 shadow-xl space-y-6">
            <h2 className="text-lg font-bold text-slate-900 border-b border-gray-100 pb-3">Enviar Mensagem Institucional</h2>
            
            {success ? (
              <div className="p-6 bg-emerald-50 text-emerald-800 rounded-2xl border border-emerald-250 text-center space-y-4">
                <ThumbsUp className="w-12 h-12 text-emerald-600 mx-auto" />
                <div>
                  <h4 className="font-bold text-lg">Solicitação Enviada!</h4>
                  <p className="text-xs mt-1">Sua mensagem comercial foi devidamente registrada no faturamento central executivo da Sennatel. Um consultor entrará em contato.</p>
                </div>
                <button
                  onClick={() => setSuccess(false)}
                  className="text-xs font-bold text-emerald-700 hover:underline focus:outline-none"
                >
                  Enviar nova mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact_page_name" className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-1.5">Seu Nome *</label>
                    <input
                      type="text"
                      id="contact_page_name"
                      required
                      placeholder="Carlos Silva"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 text-slate-850"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact_page_phone" className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-1.5">WhatsApp / Celular *</label>
                    <input
                      type="tel"
                      id="contact_page_phone"
                      required
                      placeholder="(11) 99999-9999"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 text-slate-850"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact_page_email" className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-1.5">E-mail para Retorno *</label>
                    <input
                      type="email"
                      id="contact_page_email"
                      required
                      placeholder="carlos@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 text-slate-850"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact_page_city" className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-1.5">Sua Cidade *</label>
                    <select
                      id="contact_page_city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-4 py-2 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 text-slate-850 bg-white"
                    >
                      <option value="São Paulo">São Paulo - SP</option>
                      <option value="Uberlândia">Uberlândia - MG</option>
                      <option value="Franca">Franca - SP</option>
                      <option value="Ribeirão Preto">Ribeirão Preto - SP</option>
                      <option value="Campinas">Campinas - SP</option>
                      <option value="Uberaba">Uberaba - MG</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact_page_msg" className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-1.5">Mensagem ou Demanda</label>
                  <textarea
                    id="contact_page_msg"
                    rows={4}
                    placeholder="Escreva qual o escopo ou dúvidas técnicas que você quer avaliar..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 text-slate-850"
                  ></textarea>
                </div>

                <div className="flex items-center space-x-2 text-xs text-gray-400 p-2 border border-gray-100 rounded-xl">
                  <Shield className="w-5 h-5 text-gray-300 shrink-0" />
                  <span>Seus dados são criptografados e confidenciais nos termos gerais de LGPD da Sennatel.</span>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl transition shadow-lg flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {loading ? (
                    <span>Registrando dados comerciais...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Enviar Mensagem ao Faturamento Central</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* Map visual mock representational */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-150 pt-16 space-y-6">
        <h3 className="font-extrabold text-lg text-slate-900 uppercase tracking-widest text-center">Localização Operacional</h3>
        <p className="text-xs text-gray-500 text-center max-w-xl mx-auto">Uberlândia, Minas Gerais. Estação central interligada a nossa malha concessionária de postes e caixas ópticas.</p>
        
        <div className="h-80 bg-slate-100 rounded-3xl border border-gray-200 relative overflow-hidden flex flex-col items-center justify-center shadow-inner">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ccd_1.2px,transparent_1.2px),linear-gradient(to_bottom,#ccd_1.2px,transparent_1.2px)] bg-[size:32px_32px] opacity-35"></div>
          <div className="absolute h-10 w-full bg-slate-200/50 top-1/2 -skew-y-6 flex items-center justify-center border-y border-gray-300 text-[10px] font-bold text-gray-400 tracking-widest select-none">AVENIDA AFONSO PENA</div>
          <div className="absolute w-12 h-full bg-slate-200/50 left-[48%] rotate-12 flex items-center justify-center border-x border-gray-300 text-[10px] font-bold text-gray-400 tracking-widest select-none">CENTRO</div>
          
          <div className="relative z-10 flex flex-col items-center">
            <span className="flex h-8 w-8 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-8 w-8 bg-blue-600 border-2 border-white flex items-center justify-center text-white font-bold text-xs shadow-2xl">
                <MapPin className="w-4 h-4 fill-current text-white" />
              </span>
            </span>
            <p className="mt-1.5 bg-slate-900 text-white font-bold text-[9px] py-0.5 px-2.5 rounded-full shadow">Sede Corporativa Alga Net</p>
          </div>
        </div>
      </section>

    </div>
  );
}
