import type { LearningCopy } from './en';

const copy = {
  recapTitle: "O seu percurso com {name}",
  recapIntro: "Reveja as suas decisões, volte aos pontos que merecem outra análise e encontre fontes úteis para os próximos passos.",
  decisionsTitle: "As suas decisões, explicadas",
  revisitCount: "Decisões a rever: {count}",
  allConsidered: "Identificou a opção mais informada em todas as etapas. Explore as razões e os recursos abaixo.",
  yourChoice: "Escolheu",
  informedChoice: "Escolha mais informada",
  worthRevisiting: "Merece outra análise",
  saferOption: "Uma opção a considerar",
  revisitDecision: "Rever esta decisão",
  revisitLabel: "Rever {stage}: {title}",
  returnToRecap: "Voltar ao resumo do seu percurso",
  misunderstanding: "Um equívoco comum",
  nextStep: "Um próximo passo útil",
  checkSource: "Consultar as orientações",
  relatedResources: "Fontes para este percurso",
  relatedIntro: "Comece pelas questões levantadas pelas suas decisões. Cada fonte tem a sua própria finalidade e condições.",
  openResource: "Abrir recurso",
  reflectTitle: "Pare um momento e reflita",
  reflectIntro: "Pense nas circunstâncias desta pessoa fictícia. Estas perguntas não têm pontuação.",
  controlPrompt: "O que estava sob o controlo desta pessoa e o que dependia de outras pessoas, serviços ou circunstâncias?",
  supportPrompt: "Que apoio poderia tornar o próximo passo mais fácil de gerir?",
  livedContext: "Tenha em conta as circunstâncias da pessoa",
  sourcePublisher: "Publicado por",
  sourceScope: "Abrange",
  sourceChecked: "Fonte consultada",
  sourceUndated: "Data de consulta não registada",
  sourceDateMeaning: "A data de consulta indica quando a página ligada foi verificada para este projeto. Não é a data de atualização da entidade que a publica, nem uma garantia de que uma regra não mudou.",
  sourceMethod: "Como utilizamos e verificamos as fontes",
  sourceMethodIntro: "As orientações remetem para o organismo público responsável ou para uma organização especializada identificada. A entidade que publica a fonte, o tema e a data de consulta aparecem junto de cada fonte quando esses dados foram registados. Abra a fonte para verificar as condições atuais e a quem se aplica.",
  sourceMethodContent: "As histórias simplificam uma situação para fins de aprendizagem. A explicação analisa a decisão nessa cena; não pode avaliar a elegibilidade de uma pessoa real. Uma pontuação reflete as escolhas feitas no exercício, não a preparação para imigrar nem o resultado provável de um pedido.",
  sourceMethodTranslation: "As traduções procuram preservar as mesmas situações, o significado das respostas e as ligações para as fontes. São auxiliares de aprendizagem, não traduções oficiais das orientações ligadas. A informação atual da entidade que publicou o original continua a ser a referência para decisões reais.",
  sourceMethodReflection: "As perguntas de reflexão exploram obstáculos apresentados nas histórias fictícias, incluindo a incerteza, as responsabilidades de prestação de cuidados, as necessidades de acessibilidade e a dependência de outras pessoas. Não pretendem representar a experiência de todas as pessoas migrantes nem ser o testemunho de uma pessoa real.",
  sourceMethodLink: "Saiba mais sobre as nossas fontes",
  professionalTitle: "Registo profissional de enfermagem e obstetrícia",
  professionalDescription: "Para enfermeiros e parteiras que obtiveram a sua qualificação fora da UE: verifique o reconhecimento das qualificações e o registo profissional junto do NMBI, bem como os requisitos de imigração aplicáveis.",
  professionalAction: "Verifique as etapas do registo profissional para este posto de enfermagem.",
  taxTitle: "Registar o primeiro emprego para efeitos fiscais",
  taxDescription: "Para quem começa o primeiro emprego na Irlanda: a Revenue explica como registar o emprego com um número PPS e o myAccount, e como isso ajuda a evitar a retenção de imposto de emergência.",
  taxAction: "Consulte as etapas de registo do primeiro emprego na Revenue ao preparar-se para começar a trabalhar.",
  scopes: {
    immigration: "Autorizações e condições de imigração",
    employment: "Autorizações de trabalho e direitos laborais",
    protection: "Proteção internacional e acolhimento",
    "public-services": "Serviços públicos e vida quotidiana",
    equality: "Igualdade e discriminação",
    "specialist-support": "Informação e apoio especializados independentes",
    "professional-registration": "Qualificações e registo profissionais",
    "general-information": "Informação geral e encaminhamento",
  },
  insights: {
    offer: {
      explanation: "Uma oferta de emprego não é uma autorização de trabalho. É ainda necessário verificar as funções reais, o empregador e os critérios atuais da autorização.",
      action: "Compare a oferta escrita com a lista oficial de requisitos e anote o que ainda precisa de confirmação.",
    },
    permissions: {
      explanation: "Uma aprovação não conclui todas as etapas de imigração. A autorização para trabalhar, o visto quando exigido, a entrada no país e o registo de residência respondem a questões diferentes.",
      action: "Faça uma lista das aprovações e dos documentos necessários para este percurso, utilizando a fonte atual.",
    },
    travel: {
      explanation: "Uma aprovação não dispensa a explicação do verdadeiro motivo da viagem. O relato da pessoa e os documentos comprovativos devem ser coerentes.",
      action: "Identifique os documentos que explicam esta viagem e mantenha-os em segurança e acessíveis durante a deslocação.",
    },
    registration: {
      explanation: "Um número PPS, uma marcação e uma autorização de imigração têm finalidades diferentes. Concluir o processo de um serviço não conclui os dos outros.",
      action: "Verifique que etapas de registo se aplicam e mantenha um registo separado de cada marcação e requisito.",
    },
    workRights: {
      explanation: "Depender de um empregador não significa aceitar todas as suas exigências. As condições de imigração e os direitos laborais são questões distintas a verificar junto do serviço competente.",
      action: "Guarde em segurança registos de horas, remunerações e mensagens, e identifique uma fonte independente de aconselhamento laboral.",
    },
    protection: {
      explanation: "Não há um guião que garanta proteção. Importam as circunstâncias próprias da pessoa, um relato verdadeiro e o procedimento aplicável.",
      action: "Utilize a informação sobre proteção que se aplica ao pedido e identifique onde solicitar apoio jurídico independente.",
    },
    evidence: {
      explanation: "A falta de provas não é motivo para as inventar. Explicar lacunas reais e perguntar que outras provas podem ajudar é diferente de alterar a história.",
      action: "Liste as provas existentes, o que falta e o que precisa de ser discutido com um consultor.",
    },
    services: {
      explanation: "Um serviço que ajuda numa necessidade pode não decidir sobre outra. O alojamento, as decisões de proteção, os cuidados de saúde e o aconselhamento jurídico têm funções diferentes.",
      action: "Associe a questão imediata ao serviço responsável e registe quem deve contactar a seguir.",
    },
    protectionWork: {
      explanation: "A experiência de outro requerente pode não estabelecer o direito desta pessoa a trabalhar. É necessário verificar o procedimento aplicável, os prazos e a autorização individual.",
      action: "Consulte as orientações atuais sobre o acesso ao mercado de trabalho e a autorização da pessoa antes de fazer um plano de trabalho.",
    },
    study: {
      explanation: "Uma oferta de admissão numa instituição de ensino não resolve a imigração, o alojamento ou as questões financeiras. Um plano de estudos viável precisa de considerar cada um destes aspetos.",
      action: "Utilize a lista de requisitos para estudantes para identificar questões relativas ao curso, ao financiamento, ao seguro e ao alojamento que ainda precisam de resolução.",
    },
    studentWork: {
      explanation: "Uma autorização de estudante não é uma autorização ilimitada para trabalhar. Importam a categoria de autorização registada no título de residência, as horas permitidas e as datas relevantes.",
      action: "Compare o horário de trabalho proposto com as condições atuais da autorização de estudante.",
    },
    family: {
      explanation: "Não existe um único pedido familiar que sirva para todas as pessoas. O estatuto da pessoa que patrocina a reunião familiar e a relação familiar determinam as orientações a utilizar.",
      action: "Encontre as orientações para esta pessoa e esta relação familiar e, depois, analise os respetivos requisitos de prova.",
    },
    familyWork: {
      explanation: "Juntar-se à família não esclarece, por si só, todos os direitos de trabalho. É necessário verificar as condições da autorização de imigração que a pessoa efetivamente tem.",
      action: "Verifique a autorização registada e as suas condições de trabalho antes de confiar numa suposição do empregador.",
    },
    support: {
      explanation: "Uma autorização, por si só, não resolve questões de alojamento, saúde, rendimento ou isolamento. Necessidades diferentes podem exigir fontes de ajuda diferentes.",
      action: "Escolha uma necessidade imediata e identifique um serviço independente adequado ou um contacto na comunidade.",
    },
    access: {
      explanation: "Ter um serviço à disposição não significa que esse serviço seja acessível. Uma deficiência visível pode também ser apenas uma parte das necessidades de apoio de uma pessoa.",
      action: "Descreva o obstáculo específico, peça que as necessidades sejam registadas e identifique o contacto competente para apoio ou reclamações.",
    },
    participation: {
      explanation: "A dificuldade em participar não deve ser tratada como falta de interesse. Necessidades de interpretação, saúde ou acessibilidade podem exigir que o apoio seja discutido com antecedência.",
      action: "Informe o serviço competente e o consultor sobre o apoio que poderá ser necessário para participar no atendimento agendado.",
    },
    euWork: {
      explanation: "A cidadania da UE altera a questão da autorização de trabalho. O registo fiscal e o número PPS são distintos do fundamento do direito de uma pessoa a trabalhar.",
      action: "Consulte as orientações para cidadãos da UE e trate separadamente cada requisito dos serviços públicos.",
    },
    euResidence: {
      explanation: "A livre circulação não significa que todas as situações de residência tenham condições idênticas. É necessário considerar o fundamento e a duração da estada.",
      action: "Identifique o fundamento de residência aplicável e as provas que poderão ser necessárias para esta situação.",
    },
    equality: {
      explanation: "Uma recusa ou um incidente no trabalho pode levantar mais de uma questão de igualdade. A identidade de uma pessoa, por si só, não determina se uma reclamação por via legal terá êxito.",
      action: "Guarde um registo factual do que aconteceu e procure aconselhamento atempado sobre o procedimento adequado e os prazos.",
    },
    abuse: {
      explanation: "A ameaça de um parceiro abusivo não é uma decisão de imigração. O apoio à segurança e o aconselhamento sobre uma autorização independente respondem a necessidades relacionadas, mas diferentes.",
      action: "Identifique uma forma segura de contactar apoio especializado e informe-se sobre o processo aplicável para obter uma autorização independente.",
    },
    safeContact: {
      explanation: "Um meio de contacto só é útil se a pessoa o puder utilizar em segurança. Um dispositivo, uma conta ou um intérprete partilhado pode não garantir privacidade.",
      action: "Considere um meio de contacto mais seguro com um serviço de apoio especializado, tendo em conta as circunstâncias da pessoa.",
    },
  },
  reflections: {
    critical: "Como poderiam uma data de início, os requisitos profissionais ou a pressão de um empregador afetar o tempo disponível para tomar uma decisão informada?",
    general: "Como poderiam as taxas de recrutamento, o controlo dos documentos ou a dependência de um empregador tornar mais difícil questionar um acordo inseguro?",
    protection: "Como poderiam o medo, a exaustão, a separação da família ou a falta de documentos afetar a capacidade de alguém explicar o que aconteceu?",
    study: "Como poderiam os custos do alojamento, a pressão financeira ou o sentimento de isolamento afetar a capacidade de um estudante continuar o curso?",
    family: "Como poderia uma pessoa criar acesso independente à informação, aos documentos e ao apoio enquanto se instala com a família?",
    "protection-access": "Como seria um acesso efetivo quando é necessário considerar em conjunto a mobilidade, a dor, a parentalidade e as marcações?",
    "eu-mobility": "Como podem os direitos formais e as experiências quotidianas diferir quando o racismo, a discriminação etária ou a transfobia afetam o acesso ao trabalho e à habitação?",
    "family-safety": "Como poderiam o controlo financeiro, as barreiras linguísticas, as crianças e um dispositivo vigiado limitar as opções que parecem disponíveis?",
  },
} satisfies LearningCopy;

export default copy;
