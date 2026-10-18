import type { LearningCopy } from './en';

const copy = {
  recapTitle: "Votre parcours avec {name}",
  recapIntro: "Revenez sur vos décisions, réexaminez les points qui le méritent et trouvez des sources utiles pour la suite.",
  decisionsTitle: "Vos décisions, expliquées",
  revisitCount: "Décisions à revoir : {count}",
  allConsidered: "Vous avez repéré l’option la plus éclairée à chaque étape. Explorez les raisons et les ressources ci-dessous.",
  yourChoice: "Vous avez choisi",
  informedChoice: "Choix plus éclairé",
  worthRevisiting: "À réexaminer",
  saferOption: "Une option à envisager",
  revisitDecision: "Revoir cette décision",
  revisitLabel: "Revoir {stage} : {title}",
  returnToRecap: "Retour à votre récapitulatif",
  misunderstanding: "Un malentendu fréquent",
  nextStep: "Une prochaine démarche utile",
  checkSource: "Consulter les recommandations",
  relatedResources: "Sources pour ce parcours",
  relatedIntro: "Partez des questions soulevées par vos décisions. Chaque source a son propre objectif et ses propres conditions.",
  openResource: "Ouvrir la ressource",
  reflectTitle: "Prenez un moment pour réfléchir",
  reflectIntro: "Réfléchissez à la situation de cette personne fictive. Ces questions ne donnent lieu à aucun score.",
  controlPrompt: "Qu’est-ce qui était sous le contrôle de cette personne, et qu’est-ce qui dépendait d’autres personnes, des services ou des circonstances ?",
  supportPrompt: "Quel soutien pourrait rendre la prochaine étape plus facile à gérer ?",
  livedContext: "Gardez à l’esprit la situation de la personne",
  sourcePublisher: "Publié par",
  sourceScope: "Sujet traité",
  sourceChecked: "Source consultée",
  sourceUndated: "Date de consultation non consignée",
  sourceDateMeaning: "La date de consultation indique quand la page liée a été vérifiée pour ce projet. Ce n’est ni la date de mise à jour de l’organisme qui la publie, ni une garantie qu’une règle n’a pas changé.",
  sourceMethod: "Comment nous utilisons et vérifions les sources",
  sourceMethodIntro: "Les recommandations renvoient à l’organisme public qui en est responsable ou à une organisation spécialisée identifiée. L’organisme qui publie la source, le sujet et la date de consultation figurent à côté de chaque source lorsque ces informations ont été consignées. Ouvrez la source pour vérifier ses conditions actuelles et les personnes auxquelles elle s’applique.",
  sourceMethodContent: "Les récits simplifient une situation à des fins d’apprentissage. Le retour explique la décision dans cette scène ; il ne peut pas évaluer l’admissibilité d’une personne réelle. Un score reflète les choix faits dans l’exercice, pas le degré de préparation à l’immigration ni l’issue probable d’une demande.",
  sourceMethodTranslation: "Les traductions visent à préserver les mêmes situations, le sens des réponses et les liens vers les sources. Ce sont des supports d’apprentissage, pas des traductions officielles des recommandations liées. Les informations actuelles de l’organisme d’origine restent la référence pour les décisions réelles.",
  sourceMethodReflection: "Les questions de réflexion explorent les obstacles présentés dans les récits fictifs, notamment l’incertitude, les responsabilités de soins et d’accompagnement, les besoins d’accessibilité et la dépendance envers autrui. Elles ne prétendent ni représenter l’expérience de chaque personne migrante ni constituer le témoignage d’une personne réelle.",
  sourceMethodLink: "En savoir plus sur nos sources",
  professionalTitle: "Inscription des infirmiers, infirmières et sages-femmes",
  professionalDescription: "Pour les infirmiers, infirmières et sages-femmes ayant obtenu leur qualification hors de l’UE : vérifiez la reconnaissance des qualifications et l’inscription professionnelle auprès du NMBI, ainsi que les exigences d’immigration applicables.",
  professionalAction: "Vérifiez les étapes d’inscription professionnelle pour ce poste en soins infirmiers.",
  taxTitle: "Enregistrer son premier emploi auprès des services fiscaux",
  taxDescription: "Pour les personnes qui commencent leur premier emploi en Irlande : Revenue explique comment enregistrer cet emploi à l’aide d’un numéro PPS et de myAccount, et comment cela aide à éviter la retenue d’impôt d’urgence.",
  taxAction: "Consultez les étapes d’enregistrement d’un premier emploi auprès de Revenue lorsque vous vous préparez à commencer à travailler.",
  scopes: {
    immigration: "Autorisations et conditions d’immigration",
    employment: "Permis de travail et droits au travail",
    protection: "Protection internationale et accueil",
    "public-services": "Services publics et vie quotidienne",
    equality: "Égalité et discrimination",
    "specialist-support": "Informations et soutien spécialisés indépendants",
    "professional-registration": "Qualifications et inscription professionnelles",
    "general-information": "Informations générales et orientation",
  },
  insights: {
    offer: {
      explanation: "Une offre d’emploi n’est pas un permis de travail. Les tâches réelles, l’employeur et les critères actuels du permis doivent encore être vérifiés.",
      action: "Comparez l’offre écrite à la liste officielle des éléments à vérifier et notez ce qui reste à confirmer.",
    },
    permissions: {
      explanation: "Une approbation ne suffit pas à accomplir toutes les démarches d’immigration. L’autorisation de travailler, le visa lorsqu’il est requis, l’entrée sur le territoire et l’enregistrement du séjour répondent à des questions différentes.",
      action: "À l’aide de la source actuelle, dressez la liste des autorisations et documents nécessaires pour cette voie.",
    },
    travel: {
      explanation: "Une approbation ne dispense pas d’expliquer le véritable motif du voyage. Le récit de la personne et ses justificatifs doivent être cohérents.",
      action: "Repérez les documents qui expliquent ce voyage et gardez-les en sécurité et accessibles pendant le déplacement.",
    },
    registration: {
      explanation: "Un numéro PPS, un rendez-vous et une autorisation d’immigration remplissent des fonctions différentes. Achever les démarches auprès d’un service ne signifie pas avoir achevé celles des autres.",
      action: "Vérifiez quelles démarches d’enregistrement s’appliquent et gardez une trace distincte de chaque rendez-vous et exigence.",
    },
    workRights: {
      explanation: "Dépendre d’un employeur ne signifie pas devoir accepter toutes ses exigences. Les conditions d’immigration et les droits au travail sont des questions distinctes à vérifier auprès du service compétent.",
      action: "Conservez en sécurité les relevés d’heures, de rémunération et les messages, et repérez une source indépendante de conseils en droit du travail.",
    },
    protection: {
      explanation: "Aucun récit prédéfini ne garantit une protection. La situation propre à la personne, un récit véridique et la procédure applicable comptent.",
      action: "Utilisez les informations sur la protection qui s’appliquent à la demande et repérez où solliciter une aide juridique indépendante.",
    },
    evidence: {
      explanation: "L’absence de preuves n’est pas une raison d’en inventer. Expliquer de véritables lacunes et demander quelles autres preuves pourraient être utiles est différent de modifier le récit.",
      action: "Dressez la liste des preuves disponibles, de celles qui manquent et des points à discuter avec un conseiller.",
    },
    services: {
      explanation: "Un service qui répond à un besoin n’est pas nécessairement compétent pour en trancher un autre. L’hébergement, les décisions de protection, les soins de santé et les conseils juridiques ont des rôles différents.",
      action: "Reliez la question immédiate au service responsable et notez qui contacter ensuite.",
    },
    protectionWork: {
      explanation: "L’expérience d’une autre personne ayant déposé une demande ne suffit pas nécessairement à établir le droit au travail de cette personne. Il faut vérifier la procédure applicable, les délais et l’autorisation individuelle.",
      action: "Vérifiez les recommandations actuelles sur l’accès au marché du travail et l’autorisation de la personne avant d’élaborer un projet professionnel.",
    },
    study: {
      explanation: "Une offre d’admission dans un établissement ne règle pas les démarches d’immigration, le logement ou le financement. Un projet d’études réalisable doit prendre en compte chacun de ces aspects.",
      action: "Utilisez la liste des démarches étudiantes pour repérer les questions encore à résoudre concernant la formation, le financement, l’assurance et le logement.",
    },
    studentWork: {
      explanation: "Une autorisation étudiante ne donne pas un droit illimité au travail. La catégorie inscrite sur le titre de séjour, les heures autorisées et les dates applicables comptent.",
      action: "Comparez les horaires de travail envisagés aux conditions actuelles de l’autorisation étudiante.",
    },
    family: {
      explanation: "Il n’existe pas de demande familiale unique qui convienne à tout le monde. Le statut de la personne qui parraine la demande et le lien familial déterminent les recommandations à utiliser.",
      action: "Trouvez les recommandations correspondant à cette personne et à ce lien familial, puis examinez les exigences en matière de preuves.",
    },
    familyWork: {
      explanation: "Rejoindre sa famille ne suffit pas à déterminer tous les droits au travail. Il faut vérifier les conditions de l’autorisation d’immigration effectivement accordée à la personne.",
      action: "Vérifiez l’autorisation enregistrée et ses conditions de travail avant de vous fier à une supposition de l’employeur.",
    },
    support: {
      explanation: "Une autorisation ne résout pas à elle seule les questions de logement, de santé, de revenus ou d’isolement. Des besoins différents peuvent nécessiter des sources d’aide différentes.",
      action: "Choisissez un besoin immédiat et repérez un service indépendant adapté ou un contact au sein de la communauté.",
    },
    access: {
      explanation: "Se voir proposer un service ne signifie pas qu’il soit accessible. Un handicap visible peut aussi ne représenter qu’une partie des besoins de soutien d’une personne.",
      action: "Décrivez l’obstacle précis, demandez que les besoins soient consignés et identifiez le contact compétent pour obtenir du soutien ou déposer une réclamation.",
    },
    participation: {
      explanation: "Les difficultés à participer ne doivent pas être considérées comme un manque d’intérêt. Les besoins d’interprétariat, de santé ou d’accessibilité peuvent nécessiter de discuter d’un soutien à l’avance.",
      action: "Indiquez au service compétent et au conseiller le soutien qui pourrait être nécessaire pour participer au rendez-vous.",
    },
    euWork: {
      explanation: "La citoyenneté de l’UE change la question du permis de travail. L’enregistrement fiscal et le numéro PPS sont distincts du fondement du droit au travail d’une personne.",
      action: "Consultez les recommandations destinées aux citoyens de l’UE et traitez séparément chaque exigence des services publics.",
    },
    euResidence: {
      explanation: "La libre circulation ne signifie pas que toutes les situations de séjour sont soumises à des conditions identiques. Il faut tenir compte du fondement et de la durée du séjour.",
      action: "Identifiez le fondement de séjour applicable et les preuves qui pourraient être nécessaires dans cette situation.",
    },
    equality: {
      explanation: "Un refus ou un incident au travail peut soulever plusieurs questions d’égalité. L’identité d’une personne ne détermine pas à elle seule si un recours juridique aboutira.",
      action: "Conservez un compte rendu factuel des événements et demandez conseil à temps sur la procédure appropriée et les délais.",
    },
    abuse: {
      explanation: "La menace d’un partenaire violent n’est pas une décision d’immigration. Le soutien pour se mettre en sécurité et les conseils sur une autorisation indépendante répondent à des besoins liés mais distincts.",
      action: "Repérez un moyen sûr de contacter un service de soutien spécialisé et renseignez-vous sur la procédure applicable pour obtenir une autorisation indépendante.",
    },
    safeContact: {
      explanation: "Un moyen de contact n’est utile que si la personne peut l’utiliser en sécurité. Un appareil, un compte ou un interprète partagé peut ne pas garantir la confidentialité.",
      action: "Envisagez un moyen de contact plus sûr avec un service de soutien spécialisé, en tenant compte de la situation de la personne.",
    },
  },
  reflections: {
    critical: "Comment une date de prise de poste, des exigences professionnelles ou la pression d’un employeur pourraient-elles influer sur le temps disponible pour prendre une décision éclairée ?",
    general: "Comment des frais de recrutement, le contrôle des documents ou la dépendance envers un employeur pourraient-ils rendre plus difficile la remise en question d’un arrangement risqué ?",
    protection: "Comment la peur, l’épuisement, la séparation familiale ou l’absence de documents pourraient-ils affecter la capacité d’une personne à expliquer ce qui s’est passé ?",
    study: "Comment le coût du logement, la pression financière ou le sentiment d’isolement pourraient-ils affecter la capacité d’un étudiant à poursuivre sa formation ?",
    family: "Comment une personne pourrait-elle accéder de façon autonome à l’information, aux documents et au soutien tout en s’installant auprès de sa famille ?",
    "protection-access": "À quoi ressemblerait un accès réellement adapté lorsqu’il faut tenir compte à la fois de la mobilité, de la douleur, de la parentalité et des rendez-vous ?",
    "eu-mobility": "Comment les droits formels et le vécu quotidien peuvent-ils différer lorsque le racisme, la discrimination liée à l’âge ou la transphobie affectent l’accès à l’emploi et au logement ?",
    "family-safety": "Comment le contrôle financier, les barrières linguistiques, les enfants et un appareil surveillé pourraient-ils limiter les options qui semblent disponibles ?",
  },
} satisfies LearningCopy;

export default copy;
