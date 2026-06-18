import { Route } from '../types';
import { ShieldCheck, Scale, FileText, Lock } from 'lucide-react';

interface PoliticasProps {
  route: Route;
}

export function Politicas({ route }: PoliticasProps) {
  // Let's render the text for the exact policy page
  const getPolicyContent = () => {
    switch (route) {
      case '/politica-de-privacidade':
        return {
          title: 'Política de Privacidade e Segurança de Dados',
          subtitle: 'Seus dados pessoais salvaguardados em conformidade com as diretivas da Anatel e LGPD.',
          icon: <Lock className="w-10 h-10 text-blue-600" />,
          sections: [
            {
              heading: '1. Propósito do Tratamento de Informações',
              paragraphs: [
                'Nós, da ALGA NET FIBRA (registrada e operada corporativamente pela pessoa jurídica WAGNER SENNA 07571517877 sob CNPJ 97.526.874/0001-19, doravante referenciada como "Sennatel Telecom" ou "Provedor"), coletamos seus dados cadastrais (como CPF, RG, nome completo, endereço físico de faturamento e correio eletrônico) estritamente para viabilidade de engenharia de campo, faturamentos bancários de boletos, emissão de faturamento fiscal de telecomunicação e contato direto de auxílio técnico.',
                'Nenhuma informação sob nossa responsabilidade de custódia é negociada, comercializada ou cedida a terceiros, exceto quando exigido judicialmente pelas concessionárias federatitivas ou pela própria Agência Nacional de Telecomunicações (Anatel) nos relatórios normativos.',
              ],
            },
            {
              heading: '2. Direitos de Consentimento',
              paragraphs: [
                'O titular da assinatura possui direito irrevogável de exclusão, retificação ou consulta de dados cadastrais salvaguardados em nossos discos rígidos corporativos, a qualquer momento. Para isso, basta fazer uma solicitação formal enviando correio eletrônico para wagner@sennatel.com.br.',
              ],
            },
            {
              heading: '3. Proteção Cibernética',
              paragraphs: [
                'A Sennatel Telecom adota rígidos protocolos de barreiras de criptografia cibernética (incluindo tecnologia SSL e firewalls de bordas industriais), blindando as bases faturadas do portal contra acessos ilícitos.',
              ],
            },
          ],
        };
      case '/termos-de-uso':
        return {
          title: 'Termos de Uso e Adesão Geral',
          subtitle: 'Contrato de adesão regulamento de prestação de Serviço de Comunicação Multimídia (SCM).',
          icon: <Scale className="w-10 h-10 text-blue-600" />,
          sections: [
            {
              heading: '1. Prestação dos Serviços',
              paragraphs: [
                'Os contratos celebrados junto à ALGA NET FIBRA obedecem estritamente aos regulamentos de telecomunicação. A velocidade disponibilizada para downloads e uploads de pacotes ópticos é entregue no modem ONU do assinante em regime de comodato. A quebra de integridade física dos fios externos do poste ao imóvel por reformas civis particulares acarreta faturamento de deslocamento técnico de manutenção.',
              ],
            },
            {
              heading: '2. Condições de Fidelidade',
              paragraphs: [
                'Conforme normativas de isenção de faturamentos de bocal de instalação estrutural oferecidos no ato da contratação, o assinante concorda à permanência mínima de conformidade contratual regressiva pelo período irrevogável de 12 (doze) meses (fidelidade residencial ou corporativa ativa).',
                'O desligamento solicitado antes da rampa de faturamento de 12 meses enseja multa regressiva de até R$ 350,00, calculada matematicamente proporcional de forma automática sobre as faturas restantes.',
              ],
            },
            {
              heading: '3. Obrigações e Usos Proibidos',
              paragraphs: [
                'O assinante assume a total responsabilidade legal sobre os pacotes de dados de downloads ou uploads gerados em sua conexão sem fio ou via cabo. É vedado o compartilhamento comercial externo de banda e sub-distribuição de rádio a imóveis vizinhos sob pena de rescisão sumária por pirataria de SCM.',
              ],
            },
          ],
        };
      case '/politica-de-cookies':
        return {
          title: 'Política de Cookies e Otimizações de Portal',
          subtitle: 'Entenda didaticamente como e por que cookies otimizam sua vivência no site.',
          icon: <FileText className="w-10 h-10 text-blue-600" />,
          sections: [
            {
              heading: '1. O que são cookies?',
              paragraphs: [
                'Cookies representam arquivos de dados leves de texto gerados no navegador do cliente no ato da visita em portais eletrônicos. Servem para guardar preferências de navegação tais como o preenchimento automático do formulário de faturamento CEP e mapear métricas de visitas do Google Ads.',
              ],
            },
            {
              heading: '2. Tipos de cookies utilizados no site',
              paragraphs: [
                'Estritamente Necessários: Armazenam o CEP consultado pelo usuário e as escolhas de plano para evitar digitações repetidas no checkout.',
                'Marketing e Rastreabilidade: Auxiliam nossos algoritmos de tráfego de Google Ads a apresentar faturamentos transparentes apenas nas subestações de faturamento viáveis para seu respectivo bairro físico.',
              ],
            },
            {
              heading: '3. Controle pelo Assinante',
              paragraphs: [
                'O cliente possui liberdade integral para desligar cookies nas abas de configurações avançadas do Google Chrome ou Firefox. Contudo, isso prejudicará recursos de cálculo automático de viabilidade instalados no portal.',
              ],
            },
          ],
        };
      case '/lgpd':
      default:
        return {
          title: 'LGPD - Conformidade Lei Geral de Proteção de Dados',
          subtitle: 'Ações práticas operacionais para conformidade integral com a Lei 13.709/2018.',
          icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
          sections: [
            {
              heading: '1. Governança e Encarregado de Dados (DPO)',
              paragraphs: [
                'A ALGA NET FIBRA, ciente da importância imposta pela Lei Geral de Proteção de Dados brasileira (Leis Federais 13.709/18 e 13.853/19), elegeu Encarregado Interno de Governança de Dados (DPO) corporativo para responder a questionamentos.',
                'Para contatar o DPO, utilize o e-mail: wagner@sennatel.com.br, sob supervisão operacional de WAGNER SENNA, com sede na Rua Carlo Prina, Brooklin Paulista.',
              ],
            },
            {
              heading: '2. Armazenamento e Minimização de Dados',
              paragraphs: [
                'As bases coletadas de cadastros de CPFs de assinantes permanecem criptografadas e restritas a gerências chaves da Sennatel Telecom, aplicando automatização de desligamentos lógicos das faturas liquidadas findos de prazos regulados da receita fazendária.',
              ],
            },
            {
              heading: '3. Gestão de Consentimentos',
              paragraphs: [
                'Ao submeter dados no formulário de contato do site Alga Net Fibra ou aceitar o termo de cookies, você concede consentimento ativo tácito apenas para os escopos de vendas da fibra, sob plenos direitos de revogabilidade a qualquer momento por WhatsApp central corporativo ou telefone de faturamento: (11) 5531-4995.',
              ],
            },
          ],
        };
    }
  };

  const content = getPolicyContent();

  return (
    <div id="politicas_page" className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 font-sans text-slate-800 space-y-10">
      
      {/* Policy Title Header */}
      <div className="flex flex-col items-center text-center space-y-4 border-b border-gray-150 pb-8">
        <div className="p-4 bg-blue-50 bg-opacity-75 rounded-2xl shadow-sm inline-block">
          {content.icon}
        </div>
        <h1 className="text-2xl sm:text-4.5xl font-extrabold text-slate-950 tracking-tight">{content.title}</h1>
        <p className="text-gray-500 text-xs sm:text-sm max-w-2xl">{content.subtitle}</p>
      </div>

      {/* Policy Sections */}
      <div className="space-y-8 animate-in fade-in duration-300">
        {content.sections.map((sec, idx) => (
          <div key={idx} className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-150 shadow-sm space-y-3.5">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">{sec.heading}</h2>
            {sec.paragraphs.map((p, pidx) => (
              <p key={pidx} className="text-slate-600 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                {p}
              </p>
            ))}
          </div>
        ))}
      </div>

      {/* Trust warning section footer */}
      <div className="p-4 bg-slate-100 rounded-xl border border-gray-200 text-[10px] text-gray-400 text-center leading-relaxed">
        *Este documento é revisado periodicamente conforme orientações da ANATEL, Código de Defesa do Consumidor e do comitê corporativo de segurança da Sennatel Telecomunicações. Última atualização legal documentada: 18 de Junho de 2026.
      </div>

    </div>
  );
}
