import { Plan, FAQItem, Review, CityCoverage, SeoMetadata } from './types';

export const PLANS: Plan[] = [
  {
    id: 'res-300',
    name: 'Alga Net 300 Mega',
    speed: '300 Mega',
    download: '300 Mbps',
    upload: '150 Mbps',
    price: '99,90',
    popular: false,
    category: 'residential',
    wifi: 'Roteador Dual-Band Wi-Fi 5 de alta performance incluso para cobertura ampla.',
    support: 'Suporte técnico padrão 24 horas por dia, 7 dias por semana por telefone ou WhatsApp.',
    installation: 'Grátis mediante adesão ao contrato de fidelidade de 12 meses.',
    equipments: 'Roteador Wi-Fi Gigabit cedido em regime de comodato (devolução ao encerrar o contrato).',
    fidelidade: 'Fidelidade de 12 meses. Cancelamento antecipado gera multa proporcional regulamentada pela Anatel.',
    comodato: 'Sim, aparelhos em comodato (ONU Fiber + Roteador Gigabit Wi-Fi).',
    taxaInstalacao: 'Instalação gratuita. Sem taxa de ativação se houver fidelidade ativa.',
    description: 'Perfeito para navegar, assistir a filmes em Full HD e trabalhar em home office de forma estável.',
    appsIncluso: ['Alga Banca', 'Alga Games', 'Suporte Especializado']
  },
  {
    id: 'res-600',
    name: 'Alga Net 600 Mega',
    speed: '600 Mega',
    download: '600 Mbps',
    upload: '300 Mbps',
    price: '119,90',
    popular: true,
    category: 'residential',
    wifi: 'Roteador Wi-Fi 6 de Última Geração (máxima estabilidade e baixa latência).',
    support: 'Suporte técnico prioritário 24/7 com atendimento telefônico preferencial e técnico in-loco rápido.',
    installation: 'Totalmente Grátis com fidelidade ativa.',
    equipments: 'Modem ONU Fibra + Super Roteador Wi-Fi 6 cedidos em regime de comodato.',
    fidelidade: 'Fidelidade de 12 meses. Multa contratual regressiva sob regras vigentes.',
    comodato: 'Sim, equipamentos de alto desempenho em comodato (ONU Integrada ou Roteador Wi-Fi 6 separado).',
    taxaInstalacao: 'Isenção total da taxa de instalação de R$ 350,00 mediante fidelidade de 12 meses.',
    description: 'O melhor custo-benefício! Ideal para streaming simultâneo em 4K, downloads rápidos e jogos online competitivos.',
    appsIncluso: ['Alga Banca Premium', 'Alga Play Multitela', 'Clube de Vantagens', 'Sennatel Proteção Premium']
  },
  {
    id: 'res-1000',
    name: 'Alga Net 1 Giga Plus',
    speed: '1 Giga',
    download: '1000 Mbps',
    upload: '500 Mbps',
    price: '169,90',
    popular: false,
    category: 'residential',
    wifi: 'Super Wi-Fi 6 Mesh integrado com 2 módulos (cobertura total em qualquer tipo de residência).',
    support: 'Suporte VIP com equipe exclusiva, agendamento prioritário com técnico em até 12h úteis.',
    installation: 'Grátis no regime de fidelidade de 12 meses.',
    equipments: 'Kit Fibra Ultra: 1 ONU Gigabit + 2 Aparelhos Smart Roteadores Wi-Fi 6 Mesh inclusos por comodato.',
    fidelidade: 'Fidelidade de 12 meses. Quebra de contrato acarreta cobrança de multa proporcional.',
    comodato: 'Sim, 100% comodato para todos os módulos de rede instalados.',
    taxaInstalacao: 'Taxa de R$ 500,00 totalmente isenta mediante fidelidade de 12 meses.',
    description: 'Ultravelocidade para famílias numerosas, entusiastas de tecnologia, download massivo de arquivos e streaming 8K.',
    appsIncluso: ['Alga Banca Premium', 'Alga Play Plus', 'Clube VIP', 'Sennatel Segurança Total', 'Assistência Técnica Residencial']
  },
  {
    id: 'corp-500',
    name: 'Alga Net PME 500 Mega',
    speed: '500 Mega CORP',
    download: '500 Mbps',
    upload: '250 Mbps',
    price: '199,90',
    popular: false,
    category: 'business',
    wifi: 'Roteador Wi-Fi 6 Empresarial com suporte a mútiplas conexões simultâneas e Rede de Visitantes.',
    support: 'SLA de atendimento técnico de até 8 horas úteis. Canal exclusivo B2B 24h via chat e telefone.',
    installation: 'Grátis mediante contrato empresarial de 12 meses.',
    equipments: 'Roteador corporativo profissional de alta densidade em regime de comodato.',
    fidelidade: 'Fidelidade PJ de 12 meses (renovável). Multas regulamentadas pelo contrato corporativo.',
    comodato: 'Sim, equipamentos de nível corporativo cedidos em comodato.',
    taxaInstalacao: 'Taxa de ativação grátis para contratos de 12 meses com faturamento faturado mensalmente.',
    description: 'Excelente para pequenos escritórios, consultórios e comércios locais que precisam de alta estabilidade diária.',
    appsIncluso: ['Sennatel Backup Nuvem 50GB', 'Sennatel Firewall Básico', 'Suporte Corporativo VIP']
  },
  {
    id: 'corp-800',
    name: 'Alga Net Business 800 Mega',
    speed: '800 Mega CORP',
    download: '800 Mbps',
    upload: '400 Mbps',
    price: '299,90',
    popular: true,
    category: 'business',
    wifi: 'Roteador Corporativo Avançado Tri-Band + 1 Ponto de Acesso extra para escritório integrado.',
    support: 'SLA Avançado com atendimento prioritário 24/7 e solução técnica in-loco em até 4 horas.',
    installation: 'Instalação física total gratuita mediante contrato corporativo ativo de 12 meses.',
    equipments: 'ONU Gigabit Industrial + Roteador Dual-Core corporativo avançado sob regime de comodato.',
    fidelidade: 'Fidelidade corporativa de 12 meses, conforme legislação brasileira de telecomunicações.',
    comodato: 'Aparelhos empresariais fornecidos gratuitamente na modalidade comodato.',
    taxaInstalacao: 'Isenção da taxa de instalação/ativação estrutural corporativa.',
    description: 'Ideal para médias empresas, escritórios integrados, hotéis e locais com alto tráfego de clientes conectados.',
    appsIncluso: ['Sennatel Backup Nuvem 150GB', 'Sennatel Firewall Avançado', 'IP Fixo (opcional sob consulta)', 'Gestor Web de Tráfego']
  },
  {
    id: 'corp-1000',
    name: 'Alga Net Corporativo 1 Giga',
    speed: '1 Giga CORP',
    download: '1000 Mbps',
    upload: '1000 Mbps (Simétrico)',
    price: '499,90',
    popular: false,
    category: 'business',
    wifi: 'Sistema de Redes Corporativas Wi-Fi 6 Corporativa com isolamento de redes e suporte a mais de 150 dispositivos.',
    support: 'SLA Ultra Prioritário (atendimento em até 4h útil). Gerente de contas dedicado por telefone.',
    installation: 'Instalação técnica grátis incluída na modalidade anual.',
    equipments: 'Switch gerenciável + ONU óptica industrial + roteador Mesh Tri-Band empresarial em formato comodato.',
    fidelidade: 'Fidelidade padrão PJ de 12 meses.',
    comodato: 'Sim, equipamentos cedidos sob comodato, com seguro contra queima por sobrecarga.',
    taxaInstalacao: 'Isenção da taxa técnica de implantação de fibra óptica subterrânea/aérea.',
    description: 'Conexão simétrica absoluta (mesmo download e upload) com garantia de banda e IP Fixo incluso gratuitamente. O topo da estabilidade.',
    appsIncluso: ['Sennatel Backup Ilimitado', 'Sennatel Firewall Pro', 'IP Fixo Incluso', 'Auditoria de Rede Mensal', 'Gerente Dedicado']
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Mariana Silva',
    city: 'Brooklin',
    role: 'Home Office - Designer',
    stars: 5,
    text: 'A Alga Net Fibra mudou minha rotina de trabalho. Faço uploads de arquivos de vídeo pesados e chamadas de vídeo sem travar em nenhum momento. O Wi-Fi 6 deles tem um alcance impressionante!'
  },
  {
    id: '2',
    name: 'Roberto Camargo',
    city: 'São Paulo',
    role: 'Empresário - Clínica Médica',
    stars: 5,
    text: 'Contratamos o plano corporate Alga Net Business para nosso consultório e a internet nunca caiu. Pacientes navegam rápido na sala de espera através da rede isolada de convidados, e nossos sistemas de prontuários estão sempre online.'
  },
  {
    id: '3',
    name: 'Gabriel Barbosa',
    city: 'Chácara Santo Antônio',
    role: 'Gamer & Streamer',
    stars: 5,
    text: 'O ping nos jogos caiu pela metade! Consigo realizar lives na Twitch no canal Full HD 60fps enquanto minha família assiste séries na Netflix sem flutuação nenhuma de sinal. Melhor fibra que já tive.'
  },
  {
    id: '4',
    name: 'Ana Cláudia Vieira',
    city: 'Vila Olímpia',
    role: 'Arquiteta',
    stars: 5,
    text: 'A instalação foi agendada no meu horário e o técnico foi super atencioso. Deixou tudo limpo e explicou como configurar a senha no aplicativo. Além de rápido, o preço é de fato transparente e justo.'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'geral',
    question: 'O que é a internet por fibra óptica?',
    answer: 'A internet por fibra óptica utiliza filamentos de vidro ou plástico flexível extremamente finos para transmitir dados através de sinais de luz. Isso permite alcançar velocidades incrivelmente maiores, menor latência (ping baixo) e menor suscetibilidade a interferências climáticas ou eletromagnéticas em comparação com cabos de cobre tradicionais ou conexões de rádio.'
  },
  {
    id: 'faq-2',
    category: 'vendas',
    question: 'A taxa de instalação da Alga Net Fibra é gratuita?',
    answer: 'Sim! A taxa de instalação da Alga Net Fibra é totalmente gratuita para todos os planos residenciais e corporativos, desde que seja cumprido o período estipulado de adesão ao contrato com permanência mínima (fidelidade) de 12 meses.'
  },
  {
    id: 'faq-3',
    category: 'geral',
    question: 'O que é regime de comodato nos planos de internet?',
    answer: 'O comodato significa que os equipamentos necessários para o funcionamento da sua internet por fibra óptica (como o modem ONU e o roteador Wi-Fi) são emprestados gratuitamente pela Alga Net Fibra para você durante a vigência do contrato. Ao fim de sua assinatura, os equipamentos pertencentes à operadora devem ser restituídos em perfeito estado de conservação.'
  },
  {
    id: 'faq-4',
    category: 'tecnico',
    question: 'Quais equipamentos de Wi-Fi estão incluídos nos planos da Alga Net Fibra?',
    answer: 'Utilizamos apenas roteadores modernos de alto rendimento. Nos planos de entrada, oferecemos roteadores Gigabit Ethernet Dual-Band (frequências de 2.4 GHz e 5.0 GHz). A partir de planos maiores de 600 Mega, instalamos o novíssimo Roteador Wi-Fi 6, que lida muito melhor com múltiplos aparelhos em paralelo e elimina gargalos. Nos planos premium, implementamos sistemas automatizados de Wi-Fi Mesh.'
  },
  {
    id: 'faq-5',
    category: 'financeiro',
    question: 'Como faço para pagar minha mensalidade?',
    answer: 'Você pode pagar suas mensalidades através de Boleto Bancário impresso ou digital, Débito Automático no seu banco preferido, ou de forma rápida pelo PIX utilizando o QR Code presente em todas as faturas digitais enviadas no seu e-mail cadastrado ou WhatsApp corporativo da Central.'
  },
  {
    id: 'faq-6',
    category: 'financeiro',
    question: 'Onde consigo emitir a segunda via da minha fatura?',
    answer: 'A emissão de 2ª via é gratuita e realizada de forma instantânea. Você pode retirá-la na nossa Central de Autoatendimento ou através do nosso WhatsApp oficial, enviando apenas o CPF ou CNPJ do titular da conta.'
  },
  {
    id: 'faq-7',
    category: 'tecnico',
    question: 'Por que o Wi-Fi pode registrar velocidade inferior ao cabo de rede?',
    answer: 'As ondas de rádio do sinal Wi-Fi sofrem interferência de paredes, lajes, espelhos, eletrodomésticos e outras redes sem fio vizinhas, reduzindo o rendimento em distâncias maiores. Para testar com máxima precisão a banda contratada de 300M, 600M ou 1G, deve-se realizar o teste através de um cabo de rede gigabit categoria 5e ou 6 conectado diretamente de um computador capaz à porta LAN Gigabit do roteador.'
  },
  {
    id: 'faq-8',
    category: 'tecnico',
    question: 'Como funciona o teste de velocidade de internet?',
    answer: 'Nosso teste de velocidade mede dinamicamente o download (velocidade que você puxa dados do servidor de teste), o upload (velocidade que você envia dados para a internet) e o ping ou latência (tempo que o pacote de dados leva para ir e voltar). Certifique-se de pausar downloads ativos antes de iniciar para obter taxas confiáveis.'
  },
  {
    id: 'faq-9',
    category: 'vendas',
    question: 'Há limite de consumo ou franquia mensal de dados?',
    answer: 'Não! Na Alga Net Fibra você pode navegar sem limites. Não existe nenhuma barreira de tráfego, redução de velocidade contratada ou corte de internet pelo uso constante de download ou upload doméstico e corporativo.'
  },
  {
    id: 'faq-10',
    category: 'tecnico',
    question: 'Qual a diferença entre frequências de 2.4 GHz e 5.0 GHz?',
    answer: 'A frequência de 2.4 GHz possui maior alcance de sinal e consegue atravessar obstáculos físicos (como paredes) com mais facilidade, entretanto possui velocidade limite menor. Já a frequência de 5.0 GHz oferece velocidades extremamente superiores e menos interferência, contudo possui alcance geográfico menor e é bloqueada mais facilmente por barreiras.'
  },
  {
    id: 'faq-11',
    category: 'geral',
    question: 'Como funciona o prazo de atendimento técnico da Alga Net Fibra?',
    answer: 'Nosso suporte via WhatsApp é automatizado e conta com profissionais humanos de prontidão 24/7. Caso seja constatada avaria física, o agendamento de visita residencial ocorre em até 12 a 24 horas úteis. Em conexões corporativas (foco B2B), possuímos rígidos acordos jurídicos de nível de serviço (SLA), provendo assistência presencial de emergência em até 4 a 8 horas úteis.'
  },
  {
    id: 'faq-12',
    category: 'vendas',
    question: 'Posso alterar a senha do meu roteador Wi-Fi sozinho?',
    answer: 'Sim! Você pode entrar em contato direto com nosso atendimento pelo WhatsApp para solicitar a mudança automática de nome e senha, ou acessar as configurações internas do roteador indicadas na etiqueta do fabricante localizada no verso do aparelho, protegida por senha de segurança industrial.'
  },
  {
    id: 'faq-13',
    category: 'tecnico',
    question: 'Quais os requisitos mínimos no computador para alcançar velocidades Gigabit?',
    answer: 'Para usufruir de planos superiores a 100 Mega (como 300, 600 ou 1000 Mega), seu computador de mesa ou notebook precisa possuir uma placa de rede compatível com padrão Gigabit Ethernet (10/100/1000 Mbps). Placas antigas Fast Ethernet (10/100) ficam limitadas a apenas 100 Mbps de tráfego real físico.'
  },
  {
    id: 'faq-14',
    category: 'vendas',
    question: 'Posso realizar a portabilidade de telefone fixo para a Alga Net Fibra?',
    answer: 'Sim! Caso sua empresa ou residência precise manter o mesmo número de telefone analógico ou digital tradicional, realizamos todo o trâmite legal de portabilidade telefônica direto com nossa operadora sem burocracias, mantendo o serviço funcionando.'
  },
  {
    id: 'faq-15',
    category: 'vendas',
    question: 'Como funciona a ativação da internet residencial e empresarial?',
    answer: 'Após escolher o plano e fornecer os dados de cadastro e comprovante de endereço, nós analisamos a viabilidade técnica e agendamos a visita dos técnicos. A instalação leva em média cerca de 1 a 2 horas, dependendo da rota dos postes até a caixa de fibra de distribuição óptica (CTO) mais próxima.'
  },
  {
    id: 'faq-16',
    category: 'geral',
    question: 'Quais as vantagens de contratar planos empresariais?',
    answer: 'Os planos empresariais (PJ) contam com IP Fixo incluso ou sob contratação (essencial para servidores de CFTV, conexões VPN corporativas seguras), maior taxa de upload garantida por fibra simétrica, além de contrato corporativo com canais de suprimentos prioritários e acordos de alta disponibilidade SLA assinados em cartório.'
  },
  {
    id: 'faq-17',
    category: 'tecnico',
    question: 'O temporal prejudica minha conexão de internet de fibra óptica?',
    answer: 'Diferente dos cabos tradicionais metálicos de telefonia ou TVs a cabo comuns, os cabos de fibra óptica pura não conduzem eletricidade. Isso significa que ventanias, temporais e descargas na rede elétrica nacional não queimam nem causam oscilação de sinal no fio de vidro externo, mantendo sua conexão segura e blindada contra instabilidade.'
  },
  {
    id: 'faq-18',
    category: 'vendas',
    question: 'Qual o tempo mínimo de contratação de internet para não pagar multa?',
    answer: 'A fidelidade regulamentar em contratos de adesão ao consumidor final no Brasil tem duração padrão de 12 meses contados da ativação. Após completar esse tempo linear, o cliente pode manter os serviços sem qualquer tempo forçado obrigatório, podendo efetuar cancelamento sem multas rescisórias quando decidir.'
  },
  {
    id: 'faq-19',
    category: 'financeiro',
    question: 'O valor da fatura possui reajuste dinâmico no meio do ano?',
    answer: 'Não. Os planos mantêm os mesmos preços originais de contratação de forma firme durante o curso do período mínimo da fidelidade anual (12 meses). Eventuais reajustes inflacionários anuais só ocorrem com embasamento nas normativas governamentais de telecomunicação de forma transparente declarada.'
  },
  {
    id: 'faq-20',
    category: 'tecnico',
    question: 'O que devo fazer caso minha internet pare de funcionar repentinamente?',
    answer: 'Primeiro, verifique se a tomada de força dos equipamentos está perfeitamente ligada e se não há luzes vermelhas acesas no modem ONU/Roteador. Tente desliga-los da tomada elétrica por 30 segundos e ligar novamente. Se persistir a falta de conexão, chame nossa central pelo WhatsApp ou fone para verificarmos problemas de rota gerais na subestação do bairro.'
  }
];

export const COVERAGE_CITIES: CityCoverage[] = [
  {
    city: 'São Paulo',
    uf: 'SP',
    bairros: ['Brooklin Paulista', 'Campo Belo', 'Vila Olímpia', 'Chácara Santo Antônio', 'Moema', 'Itaim Bibi', 'Pinheiros', 'Morumbi', 'Santo Amaro', 'Vila Mariana']
  },
  {
    city: 'Uberlândia',
    uf: 'MG',
    bairros: ['Centro', 'Brasil', 'Santa Mônica', 'Tibery', 'Umuarama', 'Cazeca', 'Saraiva', 'Granada', 'Morada da Colina', 'Altamira', 'Pampulha']
  },
  {
    city: 'Franca',
    uf: 'SP',
    bairros: ['Centro', 'Estação', 'Cidade Nova', 'Parque Universitário', 'São José', 'Guanabara', 'Parque dos Pinhais', 'Aeroporto', 'Parque Progresso']
  },
  {
    city: 'Ribeirão Preto',
    uf: 'SP',
    bairros: ['Centro', 'Vila Tibério', 'Ipiranga', 'Campos Elíseos', 'Ribeirânia', 'Jardim Paulista', 'Alto da Boa Vista', 'Jardim Irajá', 'Nova Aliança']
  },
  {
    city: 'Campinas',
    uf: 'SP',
    bairros: ['Cambuí', 'Taquaral', 'Guanabara', 'Barão Geraldo', 'Castelo', 'Centro', 'Nova Campinas', 'Parque Prado', 'Vila Itapura']
  },
  {
    city: 'Uberaba',
    uf: 'MG',
    bairros: ['Abadia', 'Centro', 'Mercês', 'Estados Unidos', 'Nossa Senhora da Abadia', 'Jardim América', 'Santa Maria', 'Fabrício']
  }
];

export const SEO_DATA: Record<string, SeoMetadata> = {
  '/': {
    title: 'Central de Atendimento ao Cliente e WhatsApp | Alga Net Fibra',
    description: 'Entre em contato direto com os nossos especialistas. Canais oficiais de vendas, financeiro e consultaria técnica ágil via fone e botão flutuante WhatsApp.',
    keywords: 'central de atendimento, numero whatsapp, tempo resposta suporte, falar com atendente',
    canonical: 'https://alganetfibra.com.br/'
  },
  '/planos': {
    title: 'Planos de Internet Fibra Óptica | Alga Net Fibra',
    description: 'Conheça nossos planos residenciais e corporativos de internet por fibra. Velocidades de 300, 600 e 1000 Mega de alta estabilidade e sem limite de consumo.',
    keywords: 'planos de internet, comprar internet, ultra fibra, internet pme, menor preço fibra, wifi gratis',
    canonical: 'https://alganetfibra.com.br/planos'
  },
  '/cobertura': {
    title: 'Área de Cobertura de Fibra Óptica | Alga Net Fibra',
    description: 'Consulte a disponibilidade de cobertura da nossa rede de fibra de alto desempenho no seu endereço. Atendimento Premium em São Paulo, Uberlândia, Franca e região.',
    keywords: 'cobertura internet, disponibilidade fibra, bairros atendidos, cidades com fibra optical',
    canonical: 'https://alganetfibra.com.br/cobertura'
  },
  '/empresa': {
    title: 'Quem Somos, Missão e Nossa Infraestrutura | Alga Net Fibra',
    description: 'Saiba mais sobre a Alga Net Fibra, operada pela Sennatel. Nossa missão, comprometimento com alta confiabilidade e expansão contínua da melhor malha óptica.',
    keywords: 'empresa sennatel, quem somos alga net, wagner senna, infraestrutura fibra de vidro',
    canonical: 'https://alganetfibra.com.br/empresa'
  },
  '/suporte': {
    title: 'Suporte Técnico, 2ª Via de Boleto e Teste de Banda | Alga Net Fibra',
    description: 'Precisa de suporte? Acesse nossa central oficial de assistência. Faça o teste de velocidade de rede, abra chamados e emita segundas vias de forma fácil.',
    keywords: 'segunda via fatura, whatsapp suporte, abrir atendimento tecnico, speed test internet',
    canonical: 'https://alganetfibra.com.br/suporte'
  },
  '/faq': {
    title: 'Perguntas Frequentes (FAQ) sobre Fibra Óptica | Alga Net Fibra',
    description: 'Esclareça suas dúvidas técnicas e financeiras em mais de 20 perguntas respondidas detalhadamente sobre funcionamento da internet, fidelidade, comodato e Wi-Fi.',
    keywords: 'duvida internet, o que é comodato, multa fidelidade, diferença frequencias wifi, ping baixo fibra',
    canonical: 'https://alganetfibra.com.br/faq'
  },
  '/central': {
    title: 'Alga Net Fibra | Internet Banda Larga Fibra Óptica Residencial e Comercial',
    description: 'Navegue em ultravelocidade com o melhor provedor de internet de fibra óptica. Planos de 300 Mega a 1 Giga com Wi-Fi 6 gratuito, instalação inclusa e estabilidade absoluta.',
    keywords: 'internet fibra, fibra óptica, internet banda larga, alga net, sennatel, planos residencial, internet empresa, wifi 6, alta velocidade, brooklin paulista',
    canonical: 'https://alganetfibra.com.br/central'
  },
  '/contato': {
    title: 'Endereço, Telefone e Canais de Contato | Alga Net Fibra',
    description: 'Fale conosco no Brooklin Paulista. Telefone (11) 5531-4995, email wagner@sennatel.com.br e formulário direto de contato para soluções corporativas ou residenciais.',
    keywords: 'wagner senna sennatel, telefone sennatel, brooklin paulista endereço comercial, email de contato telecom',
    canonical: 'https://alganetfibra.com.br/contato'
  },
  '/politica-de-privacidade': {
    title: 'Política de Privacidade | Alga Net Fibra',
    description: 'Nossa transparência com a segurança dos seus dados. Conheça as políticas de tratamento de informações de acordo com regulamentos vigentes de telecomunicação.',
    keywords: 'politica privacidade, segurança de dados, privacidade internet',
    canonical: 'https://alganetfibra.com.br/politica-de-privacidade'
  },
  '/termos-de-uso': {
    title: 'Termos de Uso e Contrato de Prestação de Serviços | Alga Net Fibra',
    description: 'Regulamento jurídico de prestação de serviços de telecomunicações, regras gerais de adesão, direitos e obrigações contratuais do provedor e do usuário.',
    keywords: 'termos de uso, regulamento anatel, termos assinantes',
    canonical: 'https://alganetfibra.com.br/termos-de-uso'
  },
  '/politica-de-cookies': {
    title: 'Política de Cookies e Navegabilidade Clientes | Alga Net Fibra',
    description: 'Explicamos didaticamente como utilizamos cookies e ferramentas web necessárias para otimizar sua navegação nas ferramentas da nossa loja oficial eletrônica.',
    keywords: 'politica cookies, rastreabilidade segura, otimizacao de portal',
    canonical: 'https://alganetfibra.com.br/politica-de-cookies'
  },
  '/lgpd': {
    title: 'Conformidade LGPD (Lei Geral de Proteção de Dados) | Alga Net Fibra',
    description: 'Medidas práticas de segurança cibernética e governança corporativa adotadas pela Alga Net Fibra em total adequação com a Lei 13.709/2018 (LGPD).',
    keywords: 'lei geral protecao dados, seguranca 13709, encarregado lgpd sennatel',
    canonical: 'https://alganetfibra.com.br/lgpd'
  },
  '/sitemap': {
    title: 'Mapa do Site (Sitemap) | Alga Net Fibra',
    description: 'Encontre facilmente todos os recursos, páginas legais, cidades de cobertura e canais digitais do portal da Alga Net Fibra pelo painel estruturado.',
    keywords: 'mapa de links, navegabilidade total, sitemap institucional',
    canonical: 'https://alganetfibra.com.br/sitemap'
  }
};
