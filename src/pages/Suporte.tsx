import React, { useState, useEffect, FormEvent } from 'react';
import { FAQ_ITEMS } from '../data';
import {
  FileText,
  Wrench,
  HelpCircle,
  PhoneCall,
  Laptop,
  CheckCircle,
  AlertTriangle,
  Play,
  RotateCcw,
  Gauge,
  Loader,
  ArrowRight
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

export function Suporte() {
  // Simple billing check state
  const [docInput, setDocInput] = useState('');
  const [billingResult, setBillingResult] = useState<{ status: 'idle' | 'found' | 'none'; desc: string; faturas?: string[] }>({
    status: 'idle',
    desc: '',
  });

  // Ticket open forms
  const [ticketName, setTicketName] = useState('');
  const [ticketPhone, setTicketPhone] = useState('');
  const [ticketCpf, setTicketCpf] = useState('');
  const [ticketIssue, setTicketIssue] = useState('slow');
  const [ticketMsg, setTicketMsg] = useState('');
  const [ticketCreated, setTicketCreated] = useState('');

  // Spped Test simulation states
  const [testState, setTestState] = useState<'idle' | 'connecting' | 'ping' | 'download' | 'upload' | 'complete'>('idle');
  const [ping, setPing] = useState(0);
  const [jitter, setJitter] = useState(0);
  const [downloadSpeed, setDownloadSpeed] = useState(0.0);
  const [uploadSpeed, setUploadSpeed] = useState(0.0);
  const [gaugeValue, setGaugeValue] = useState(0); // 0 to 180 degrees or raw speed values

  const handleBillingCheck = (e: FormEvent) => {
    e.preventDefault();
    const clean = docInput.replace(/\D/g, '');
    if (clean.length < 11) {
      setBillingResult({
        status: 'none',
        desc: 'Insira um CPF (11 dígitos) or CNPJ (14 dígitos) devidamente estruturados.'
      });
      return;
    }

    setBillingResult({
      status: 'found',
      desc: `Identificamos faturas emitidas vinculadas ao documento consultado:`,
      faturas: [
        `Fatura Vencimento 10/${new Date().getMonth() + 1}/2026 - R$ 119,90 - (Status: PAGA)`,
        `Fatura Vencimento 10/${new Date().getMonth() + 2}/2026 - R$ 119,90 - (Status: EM ABERTO)`
      ]
    });
  };

  const handleTicketOpen = (e: FormEvent) => {
    e.preventDefault();
    const randomTicket = Math.floor(100000 + Math.random() * 900000);
    setTicketCreated(`Chamado operacional de urgência Nº #${randomTicket} registrado no sistema central. Aguarde contato em até 10 minutos.`);
  };

  // Speed test mechanism (Interactive Simulation with high fidelity intervals)
  const runSpeedTest = () => {
    setTestState('connecting');
    setPing(0);
    setJitter(0);
    setDownloadSpeed(0);
    setUploadSpeed(0);
    setGaugeValue(0);

    let progress = 0;

    // Step 1: Connecting
    setTimeout(() => {
      setTestState('ping');
      setPing(Math.floor(2 + Math.random() * 4)); // 2 to 5 ms
      setJitter(Math.floor(1 + Math.random() * 2));
      
      // Step 2: Download Test
      setTimeout(() => {
        setTestState('download');
        let currentDl = 0;
        const dlInterval = setInterval(() => {
          currentDl += (580 - currentDl) * 0.15 + (Math.random() * 15 - 7);
          if (currentDl > 600) currentDl = 598.4;
          setDownloadSpeed(Math.round(currentDl * 10) / 10);
          setGaugeValue(Math.min(Math.round(currentDl), 600));

          progress += 5;
          if (progress >= 100) {
            clearInterval(dlInterval);
            
            // Step 3: Upload Test
            setTestState('upload');
            progress = 0;
            let currentUl = 0;
            const ulInterval = setInterval(() => {
              currentUl += (295 - currentUl) * 0.15 + (Math.random() * 10 - 5);
              if (currentUl > 300) currentUl = 299.1;
              setUploadSpeed(Math.round(currentUl * 10) / 10);
              setGaugeValue(Math.min(Math.round(currentUl), 300));
              
              progress += 5;
              if (progress >= 100) {
                clearInterval(ulInterval);
                setTestState('complete');
                setGaugeValue(0);
              }
            }, 100);
          }
        }, 100);
      }, 1000);
    }, 1200);
  };

  return (
    <div id="suporte_page" className="py-12 space-y-20 font-sans text-slate-800">
      
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Autoatendimento</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">Centrais de Ajuda e Suporte</h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-sm">
          Acesse rápidas ferramentas de diagnóstico. Emita sua segunda via de boleto, inicie um teste oficial de internet ou registre ocorrências.
        </p>
      </section>

      {/* Speed Test Widget Section (Highlight of high fidelity craftsmanship) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white p-6 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl space-y-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left space-y-2">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest flex items-center justify-center md:justify-start">
                <Gauge className="w-4 h-4 mr-1.5" /> SpeedTest Alga Net Fibra
              </span>
              <h3 className="text-2xl font-bold">Teste Real de Banda e Latência</h3>
              <p className="text-slate-400 text-xs max-w-md">Para resultados fiéis, encerre temporariamente carregamentos de páginas e downloads ativos de outros computadores no local.</p>
            </div>

            {testState === 'idle' && (
              <button
                onClick={runSpeedTest}
                className="px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm rounded-xl transition shadow-lg hover:shadow-blue-500/10 flex items-center space-x-2"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Iniciar Medidor Técnico</span>
              </button>
            )}

            {testState !== 'idle' && testState !== 'complete' && (
              <div className="flex items-center space-x-2 text-sm text-blue-400 font-bold bg-slate-800 px-4 py-2 rounded-xl border border-slate-700 animate-pulse">
                <Loader className="w-4 h-4 animate-spin" />
                <span className="capitalize">{testState === 'connecting' ? 'Conectando...' : `Medindo ${testState}...`}</span>
              </div>
            )}

            {testState === 'complete' && (
              <button
                onClick={runSpeedTest}
                className="px-5 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-bold text-xs rounded-xl transition flex items-center space-x-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Refazer Medição</span>
              </button>
            )}
          </div>

          {/* Speed test layout indicator */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-t border-slate-800 pt-8">
            
            {/* Left: Speed dials */}
            <div className="md:col-span-8 flex flex-col items-center justify-center space-y-4">
              
              {/* Dial visual */}
              <div className="w-48 h-48 rounded-full border-4 border-slate-800 bg-slate-950 flex flex-col items-center justify-center relative shadow-inner">
                {/* Visual marker blocks scale lines */}
                <div className="absolute inset-4 rounded-full border border-dashed border-slate-800"></div>
                
                <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">{testState === 'upload' ? 'Upload Test' : 'Download Test'}</p>
                <p className="text-4xl font-extrabold tracking-tight mt-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                  {testState === 'download' ? downloadSpeed : testState === 'upload' ? uploadSpeed : testState === 'complete' ? downloadSpeed : '0.0'}
                </p>
                <p className="text-xs text-slate-400 font-bold">Mbps</p>

                {/* Simulated dial indicator */}
                <div 
                  className="absolute w-2 h-16 bg-blue-500 rounded-full origin-bottom bottom-1/2 left-[calc(50%-4px)] transition-transform duration-100"
                  style={{ transform: `rotate(${(gaugeValue / 600) * 180 - 90}deg)` }}
                ></div>
              </div>

              <div className="text-center">
                <p className="text-[10px] text-slate-500 font-mono">SERVERS: SENNATEL TELECOM - SÃO PAULO / SP (100% GPON FIBER)</p>
              </div>

            </div>

            {/* Right: Detailed report metrics */}
            <div className="md:col-span-4 space-y-4">
              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase">Ping (Latência)</p>
                  <p className="text-xl font-bold mt-0.5">{ping > 0 ? `${ping} ms` : '--'}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold text-slate-500 uppercase">Jitter</p>
                  <p className="text-sm font-bold text-slate-400 mt-0.5">{jitter > 0 ? `${jitter} ms` : '--'}</p>
                </div>
              </div>

              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800">
                <p className="text-[10px] font-bold text-slate-500 uppercase">Download Final</p>
                <div className="flex items-baseline justify-between mt-1">
                  <p className="text-2xl font-extrabold text-blue-400">{downloadSpeed > 0 ? `${downloadSpeed}` : '0.0'}</p>
                  <span className="text-[10px] text-slate-500 font-semibold">Mbps</span>
                </div>
              </div>

              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800">
                <p className="text-[10px] font-bold text-slate-500 uppercase">Upload Final</p>
                <div className="flex items-baseline justify-between mt-1">
                  <p className="text-2xl font-extrabold text-emerald-400">{uploadSpeed > 0 ? `${uploadSpeed}` : '0.0'}</p>
                  <span className="text-[10px] text-slate-500 font-semibold">Mbps</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Main Grid: Segunda via vs Abrir Chamado */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Segunda Via Invoice (cpf search) */}
        <div id="segunda_via_widget" className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-150 shadow-lg space-y-6">
          <div className="flex items-center space-x-3 border-b border-gray-100 pb-4">
            <FileText className="w-6 h-6 text-blue-600" />
            <h2 className="text-lg font-bold text-slate-900">Emissão Rápida de 2ª Via de Fatura</h2>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed">Não perca o prazo. Digite apenas o CPF ou CNPJ do titular da assinatura para ver suas faturas digitais ou copiar o código Pix de pagamento.</p>

          <form onSubmit={handleBillingCheck} className="space-y-4">
            <div>
              <label htmlFor="support_doc_input" className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">CPF ou CNPJ Titular</label>
              <input
                type="text"
                id="support_doc_input"
                placeholder="Ex: 000.000.000-00"
                value={docInput}
                onChange={(e) => setDocInput(e.target.value)}
                className="w-full px-4 py-2.5 text-sm border border-gray-250 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-slate-800 font-medium"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-slate-850 hover:bg-slate-900 text-white font-bold text-xs rounded-xl transition shadow"
            >
              Consultar Faturas
            </button>
          </form>

          {/* Results displaying */}
          {billingResult.status !== 'idle' && (
            <div className={`p-4 rounded-xl text-xs space-y-2 border ${billingResult.status === 'found' ? 'bg-emerald-50 text-emerald-800 border-emerald-250' : 'bg-rose-50 text-rose-800 border-rose-200'}`}>
              <p className="font-bold">{billingResult.status === 'found' ? 'Resultado da Busca:' : 'Aviso'}</p>
              <p>{billingResult.desc}</p>
              
              {billingResult.status === 'found' && billingResult.faturas && (
                <div className="space-y-2 pt-2">
                  {billingResult.faturas.map((fatura, idx) => (
                    <div key={idx} className="p-3 bg-white border border-gray-150 rounded-lg flex items-center justify-between text-slate-800 font-medium">
                      <span>{fatura}</span>
                      <a
                        href="https://wa.me/551155314995?text=Preciso+do+link+completo+do+boleto+do+m%C3%AAs+vigente."
                        target="_blank"
                        className="inline-flex items-center gap-1 text-green-600 font-bold hover:underline"
                      >
                        <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />
                        <span>Copiar Pix</span>
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400">
            <span>Dúvidas de débitos?</span>
            <a
              href="https://wa.me/551155314995?text=Gostaria+de+falar+com+o+setor+financeiro+da+Alga+Net."
              target="_blank"
              className="inline-flex items-center gap-1 text-green-600 font-bold hover:underline"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />
              <span>Falar com Financeiro</span>
            </a>
          </div>
        </div>

        {/* Technical ticket creation */}
        <div id="assistência_tecnica_os" className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-150 shadow-lg space-y-6">
          <div className="flex items-center space-x-3 border-b border-gray-100 pb-4">
            <Wrench className="w-6 h-6 text-blue-600" />
            <h2 className="text-lg font-bold text-slate-900">Solicitar Reparo Técnico (Abertura de Ocorrência)</h2>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed">Se notar anomalias persistentes no seu modem, preencha o formulário eletrônico básico. Nossa gerência de campo de São Paulo atua de prontidão.</p>

          <form onSubmit={handleTicketOpen} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="ticket_name" className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Nome</label>
                <input
                  type="text"
                  id="ticket_name"
                  value={ticketName}
                  onChange={(e) => setTicketName(e.target.value)}
                  required
                  placeholder="Ex: Pedro de Souza"
                  className="w-full px-4 py-2 text-xs border border-gray-250 rounded-lg focus:ring-2 focus:ring-blue-600 text-slate-800"
                />
              </div>
              <div>
                <label htmlFor="ticket_phone" className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Telefone/Zap</label>
                <input
                  type="tel"
                  id="ticket_phone"
                  value={ticketPhone}
                  onChange={(e) => setTicketPhone(e.target.value)}
                  required
                  placeholder="Ex: (11) 99888-7777"
                  className="w-full px-4 py-2 text-xs border border-gray-250 rounded-lg focus:ring-2 focus:ring-blue-600 text-slate-800"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="ticket_cpf" className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">CPF Assinante</label>
                <input
                  type="text"
                  id="ticket_cpf"
                  value={ticketCpf}
                  onChange={(e) => setTicketCpf(e.target.value)}
                  required
                  placeholder="Ex: 000.000.000-00"
                  className="w-full px-4 py-2 text-xs border border-gray-250 rounded-lg focus:ring-2 focus:ring-blue-600 text-slate-800"
                />
              </div>
              <div>
                <label htmlFor="ticket_issue" className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Ocorrência Principal</label>
                <select
                  id="ticket_issue"
                  value={ticketIssue}
                  onChange={(e) => setTicketIssue(e.target.value)}
                  className="w-full px-4 py-2 text-xs border border-gray-250 rounded-lg focus:ring-2 focus:ring-blue-600 text-slate-800 bg-white"
                >
                  <option value="slow">Internet Oscilando ou Lenta</option>
                  <option value="down">Internet Caída Totalmente (Luz Vermelha)</option>
                  <option value="wifi">Problemas na Senha do Wi-Fi</option>
                  <option value="address">Mudança de Endereço Residencial</option>
                  <option value="others">Faturas e Dúvidas Gerais</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="ticket_description" className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Breve Resumo</label>
              <textarea
                id="ticket_description"
                rows={2}
                value={ticketMsg}
                onChange={(e) => setTicketMsg(e.target.value)}
                placeholder="Ex: Começou a piscar luz de LOS vermelha no meu roteador hoje à tarde."
                className="w-full px-4 py-2 text-xs border border-gray-250 rounded-lg focus:ring-2 focus:ring-blue-600 text-slate-800"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition shadow"
            >
              Registrar Solicitação de Assistência
            </button>
          </form>

          {ticketCreated && (
            <div className="p-4 bg-emerald-50 text-emerald-800 text-xs rounded-xl border border-emerald-250 font-medium">
              <p>✓ {ticketCreated}</p>
            </div>
          )}
        </div>

      </section>

    </div>
  );
}
