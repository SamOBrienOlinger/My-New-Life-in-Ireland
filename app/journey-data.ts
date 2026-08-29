export type RouteKey = "critical" | "general" | "protection" | "study" | "family";
export type RouteFilter = "all" | "work" | "study" | "family" | "protection";

export type Character = {
  id: string;
  name: string;
  initials: string;
  pronouns: string;
  origin: string;
  role: string;
  route: RouteKey;
  filter: Exclude<RouteFilter, "all">;
  identity: string;
  summary: string;
  stakes: string;
  tone: string;
};

export type Choice = {
  id: string;
  label: string;
  correct?: boolean;
  feedback: string;
  consequence: string;
};

export type Step = {
  stage: "Plan" | "Prepare" | "Travel" | "Arrive" | "Build a life";
  eyebrow: string;
  title: string;
  scene: string;
  question: string;
  law: string;
  plainLaw: string;
  sourceLabel: string;
  sourceUrl: string;
  choices: Choice[];
};

export const characters: Character[] = [
  {
    id: "kwame",
    name: "Kwame Mensah",
    initials: "KM",
    pronouns: "he / him",
    origin: "Ghana",
    role: "Civil engineer",
    route: "critical",
    filter: "work",
    identity: "Moving alone for a two-year engineering role",
    summary: "Kwame has an offer to work on renewable-energy infrastructure.",
    stakes: "The start date is close, and his employer assumes the job offer is enough.",
    tone: "ochre",
  },
  {
    id: "mateo",
    name: "Mateo Álvarez",
    initials: "MA",
    pronouns: "he / him",
    origin: "Argentina",
    role: "Chef",
    route: "general",
    filter: "work",
    identity: "An experienced chef planning his first move abroad",
    summary: "Mateo has found an Irish employer, but the job and offer still need to qualify.",
    stakes: "A recruiter wants a cash payment and is pressuring him to travel quickly.",
    tone: "coral",
  },
  {
    id: "farid",
    name: "Farid Rahimi",
    initials: "FR",
    pronouns: "he / him",
    origin: "Afghanistan",
    role: "Journalist",
    route: "protection",
    filter: "protection",
    identity: "Seeking safety after threats connected to his work",
    summary: "Farid cannot safely return home and wants to ask Ireland for protection.",
    stakes: "He is exhausted, has incomplete documents and is afraid he will not be believed.",
    tone: "blue",
  },
  {
    id: "priya",
    name: "Priya Nair",
    initials: "PN",
    pronouns: "she / her",
    origin: "India",
    role: "Registered nurse",
    route: "critical",
    filter: "work",
    identity: "Joining a hospital team while building a life in Ireland",
    summary: "Priya has a qualifying nursing offer and must arrange permission before travel.",
    stakes: "She needs to coordinate professional registration, immigration and a realistic move date.",
    tone: "green",
  },
  {
    id: "mariam",
    name: "Mariam Diallo",
    initials: "MD",
    pronouns: "she / her",
    origin: "Guinea",
    role: "Teacher and parent",
    route: "protection",
    filter: "protection",
    identity: "Travelling with her eight-year-old daughter",
    summary: "Mariam is asking for protection and must also navigate school and family needs.",
    stakes: "Every decision affects both her own safety and her daughter’s wellbeing.",
    tone: "plum",
  },
  {
    id: "sofia",
    name: "Sofía Quispe",
    initials: "SQ",
    pronouns: "she / her",
    origin: "Peru",
    role: "Healthcare assistant",
    route: "general",
    filter: "work",
    identity: "Recruited for a full-time care role",
    summary: "Sofía has a job offer, but a contract alone does not give permission to work.",
    stakes: "She needs to recognise fair recruitment, lawful deductions and workplace rights.",
    tone: "rose",
  },
  {
    id: "valentina",
    name: "Valentina Rojas",
    initials: "VR",
    pronouns: "she / her",
    origin: "Colombia",
    role: "Graphic designer",
    route: "protection",
    filter: "protection",
    identity: "A trans woman whose safety concerns are personal and specific",
    summary: "Valentina needs to explain why she personally fears persecution or serious harm.",
    stakes: "She must decide when and how to disclose sensitive information and ask for support.",
    tone: "violet",
  },
  {
    id: "noor",
    name: "Noor Haddad",
    initials: "NH",
    pronouns: "they / them",
    origin: "Lebanon",
    role: "Postgraduate student",
    route: "study",
    filter: "study",
    identity: "Queer and non-binary, beginning a community-development master’s",
    summary: "Noor has a college offer and is planning the financial, visa and housing steps.",
    stakes: "The course is real, but the cost of living is much higher than they expected.",
    tone: "teal",
  },
  {
    id: "river",
    name: "River Okafor",
    initials: "RO",
    pronouns: "they / she",
    origin: "South Africa",
    role: "Software engineer",
    route: "family",
    filter: "family",
    identity: "Gender-fluid and moving to live with an Irish spouse",
    summary: "River wants to understand the family route and what permission may allow after arrival.",
    stakes: "Their remote employer assumes they can keep working before Irish permission is registered.",
    tone: "amber",
  },
];

const official = {
  permits: "https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/",
  critical: "https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/permit-types/critical-skills-employment-permit/",
  general: "https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/permit-types/general-employment-permit/",
  work: "https://www.irishimmigration.ie/coming-to-work-in-ireland/",
  register: "https://www.irishimmigration.ie/registering-your-immigration-permission/",
  family: "https://www.irishimmigration.ie/coming-to-join-family-in-ireland/",
  study: "https://www.irishimmigration.ie/coming-to-study-in-ireland/",
  ipo: "https://ipo.irishimmigration.ie/",
  ipas: "https://ipas.irishimmigration.ie/",
  refugeeCouncil: "https://www.irishrefugeecouncil.ie/get-help/information-hub/after-12-june-2026/",
  wrc: "https://www.workplacerelations.ie/en/what_you_should_know/coming_to_work_in_ireland/",
};

export const stepsByRoute: Record<RouteKey, Step[]> = {
  critical: [
    {
      stage: "Plan",
      eyebrow: "Four months before the move",
      title: "A strong offer is only the beginning",
      scene: "The contract has arrived. The employer says the role is in demand and asks for an immediate start.",
      question: "What should happen before flights or notice are arranged?",
      law: "A Critical Skills Employment Permit depends on the occupation, remuneration, contract and employer meeting the current statutory criteria.",
      plainLaw: "Check the real job, pay, contract and employer against today’s official rules before relying on the offer.",
      sourceLabel: "Critical Skills Employment Permit",
      sourceUrl: official.critical,
      choices: [
        { id: "verify", label: "Check the occupation, pay, contract and employer, then submit the correct permit application.", correct: true, feedback: "This protects the move from being built on an ineligible offer.", consequence: "The timeline becomes realistic and the job is tested against the current rules." },
        { id: "contract", label: "Treat the signed contract as permission to work.", feedback: "A contract and an employment permit perform different legal functions.", consequence: "Travel or resignation could happen before the necessary permission exists." },
        { id: "visitor", label: "Enter as a visitor and complete the permit after starting.", feedback: "Visitor status does not authorise ordinary employment.", consequence: "The job and immigration position could both be put at risk." },
      ],
    },
    {
      stage: "Prepare",
      eyebrow: "Documents and timing",
      title: "One approval does not replace every other step",
      scene: "The permit is granted. A friend says that means no other immigration check is necessary.",
      question: "What is the safer plan?",
      law: "An employment permit authorises specified employment. A visa-required national must also obtain the appropriate long-stay visa before travelling.",
      plainLaw: "Permit, visa, border permission and residence registration are separate stages.",
      sourceLabel: "Coming to work in Ireland",
      sourceUrl: official.work,
      choices: [
        { id: "sequence", label: "Check visa requirements, prepare evidence and keep each approval accessible for travel.", correct: true, feedback: "Correct. Each document answers a different question.", consequence: "The traveller can explain the purpose of the move at the border." },
        { id: "permitvisa", label: "Assume the employment permit is automatically a travel visa.", feedback: "That is not correct for visa-required nationals.", consequence: "Boarding or entry may be disrupted even though the permit is valid." },
        { id: "agent", label: "Give every original document to an unverified agent.", feedback: "Keep control of identity documents and verify anyone offering paid help.", consequence: "Losing access to original documents creates delay and exploitation risks." },
      ],
    },
    {
      stage: "Travel",
      eyebrow: "At the Irish border",
      title: "Be ready to explain the purpose of travel",
      scene: "The immigration officer asks where the traveller will stay and which employer is expecting them.",
      question: "What should they do?",
      law: "A visa permits travel to the border; an immigration officer decides entry. Supporting documents should show the genuine purpose and arrangements.",
      plainLaw: "Carry truthful, consistent evidence of the job, permission and first address.",
      sourceLabel: "Irish Immigration Service",
      sourceUrl: official.work,
      choices: [
        { id: "answer", label: "Answer truthfully and show the permit, visa if required, contract and accommodation details.", correct: true, feedback: "Clear, consistent evidence supports the stated purpose of travel.", consequence: "The officer can assess the work journey using the correct documents." },
        { id: "tourism", label: "Say it is only a holiday to avoid questions about work.", feedback: "The account should match the real purpose and documents.", consequence: "Conflicting information can cause serious difficulty at the border." },
        { id: "phone", label: "Rely entirely on a recruiter answering the phone.", feedback: "The traveller should understand and carry their own key information.", consequence: "If the recruiter is unavailable, the purpose of travel may be unclear." },
      ],
    },
    {
      stage: "Arrive",
      eyebrow: "The first 90 days",
      title: "Registration turns permission into evidence",
      scene: "Work has started, but housing searches and appointments make the first weeks difficult.",
      question: "Which task should remain on the plan?",
      law: "People from outside the EU, UK and Switzerland staying more than 90 days generally must register their Irish immigration permission.",
      plainLaw: "Arrange registration and keep the permission, address and employment details accurate.",
      sourceLabel: "Registering immigration permission",
      sourceUrl: official.register,
      choices: [
        { id: "register", label: "Arrange registration, follow the official appointment process and keep evidence of attempts.", correct: true, feedback: "The Irish Residence Permit records the permission and its conditions.", consequence: "The person has clearer evidence of lawful residence and what the permission allows." },
        { id: "pps", label: "Assume a PPS number replaces immigration registration.", feedback: "A PPS number is for public-service and tax interactions, not immigration permission.", consequence: "A useful administrative number would be mistaken for legal residence evidence." },
        { id: "contract", label: "Assume the employer’s contract replaces an IRP.", feedback: "Employment paperwork does not replace residence registration.", consequence: "The person may struggle to prove their immigration conditions." },
      ],
    },
    {
      stage: "Build a life",
      eyebrow: "Workplace and future",
      title: "Status does not cancel employment rights",
      scene: "A manager says migrant staff receive lower pay and fewer breaks during their first months.",
      question: "What response protects both work and immigration position?",
      law: "Migrant workers lawfully employed in Ireland have core employment protections. Permit conditions and employment rights must both be considered when problems arise.",
      plainLaw: "Keep records, seek reliable advice and do not accept unlawful treatment because of migrant status.",
      sourceLabel: "Workplace Relations Commission",
      sourceUrl: official.wrc,
      choices: [
        { id: "records", label: "Save rosters and payslips, ask for correction and contact the WRC or a qualified adviser.", correct: true, feedback: "Evidence and timely advice help protect both sets of rights.", consequence: "The concern can be addressed without pretending the permit conditions do not matter." },
        { id: "accept", label: "Accept it because permit holders have fewer employment rights.", feedback: "Immigration status does not remove core workplace protections.", consequence: "Underpayment or unsafe conditions may continue unchallenged." },
        { id: "disappear", label: "Leave immediately and begin another job without checking the permit conditions.", feedback: "Changing employment may require an official process or a new permit.", consequence: "A workplace problem could become an immigration problem too." },
      ],
    },
  ],
  general: [
    {
      stage: "Plan", eyebrow: "Before paying anyone", title: "Test the real job, not the sales pitch",
      scene: "A recruiter promises that any signed Irish contract guarantees a permit and asks for cash.",
      question: "What is the best first decision?",
      law: "A General Employment Permit depends on the occupation, remuneration, employer and other current requirements. Some occupations are ineligible and a Labour Market Needs Test may apply.",
      plainLaw: "Verify the employer and actual duties, then check the current permit rules before paying or travelling.", sourceLabel: "General Employment Permit", sourceUrl: official.general,
      choices: [
        { id: "check", label: "Verify the employer, duties, pay and permit eligibility through official sources.", correct: true, feedback: "A genuine offer still has to meet the legal criteria.", consequence: "Fraud and ineligible-job risks are identified before money or travel is committed." },
        { id: "cash", label: "Pay cash and let the recruiter keep the passport.", feedback: "Passport retention and pressure for untraceable payment are warning signs.", consequence: "The worker becomes more vulnerable to fraud and control." },
        { id: "promise", label: "Rely on the recruiter’s promise instead of checking the occupation.", feedback: "The official criteria, not a promise, decide permit eligibility.", consequence: "The planned route may fail after substantial expense." },
      ],
    },
    {
      stage: "Prepare", eyebrow: "The correct order", title: "Permission must come before the move",
      scene: "The employer needs staff now and suggests entering as a tourist while paperwork catches up.",
      question: "Which sequence is reliable?",
      law: "A first employment-permit journey normally requires the permit before work begins, followed by a long-stay visa where required and registration after arrival.",
      plainLaw: "Do not use visitor status as a shortcut into ordinary employment.", sourceLabel: "Employment permits", sourceUrl: official.permits,
      choices: [
        { id: "order", label: "Permit first, visa if required, border control, then registration after arrival.", correct: true, feedback: "This keeps the journey aligned with the intended route.", consequence: "The worker arrives with an explainable and documented legal basis." },
        { id: "tourist", label: "Enter as a tourist and start on the first shift.", feedback: "Visitor status is not ordinary work permission.", consequence: "Both the worker and employer may face serious consequences." },
        { id: "pps", label: "Apply for a PPS number and treat it as the work permit.", feedback: "A PPS number does not create immigration or employment permission.", consequence: "The essential permit step remains unfinished." },
      ],
    },
    {
      stage: "Travel", eyebrow: "Departure day", title: "Carry your own evidence",
      scene: "The recruiter says all documents are stored in the company office and the traveller needs only a phone screenshot.",
      question: "What should the traveller do?",
      law: "The traveller may need to demonstrate the purpose and conditions of the journey to the carrier and at Irish border control.",
      plainLaw: "Keep secure access to your passport, approvals, contract and first-address details.", sourceLabel: "Coming to work in Ireland", sourceUrl: official.work,
      choices: [
        { id: "copies", label: "Carry the originals required for travel plus secure copies and employer details.", correct: true, feedback: "The traveller should be able to explain their own journey.", consequence: "A missing phone signal or unavailable recruiter does not remove all evidence." },
        { id: "company", label: "Travel without documents because the company has them.", feedback: "Do not surrender control of essential identity and permission documents.", consequence: "The traveller may be unable to establish the purpose of travel." },
        { id: "different", label: "Give a different reason for travel from the one in the application.", feedback: "Information should be truthful and consistent.", consequence: "Contradictions may undermine the journey at the border." },
      ],
    },
    {
      stage: "Arrive", eyebrow: "The first weeks", title: "Separate urgent needs from legal permissions",
      scene: "A bank, landlord and employer each ask for different documents while the registration appointment is pending.",
      question: "How should the person respond?",
      law: "An IRP records immigration permission. Other systems, including tax, banking and housing, have their own requirements and do not replace it.",
      plainLaw: "Use official checklists, keep appointment evidence and ask each service what it specifically requires.", sourceLabel: "Registering immigration permission", sourceUrl: official.register,
      choices: [
        { id: "organise", label: "Keep a document file, follow registration instructions and ask each service for its own checklist.", correct: true, feedback: "This reduces confusion between separate systems.", consequence: "Delays remain difficult, but the person can show what has been completed." },
        { id: "one", label: "Assume one document must work for every service.", feedback: "Irish systems ask different questions for different purposes.", consequence: "Applications may stall because the wrong evidence is repeatedly supplied." },
        { id: "fake", label: "Alter an address document to speed things up.", feedback: "Never submit false or altered evidence.", consequence: "A short-term shortcut creates serious legal and trust risks." },
      ],
    },
    {
      stage: "Build a life", eyebrow: "Fair work", title: "Spot exploitation early",
      scene: "The payslip contains unexplained deductions and the employer asks to hold the passport for ‘safe keeping’.",
      question: "What is the strongest response?",
      law: "Workers should receive lawful pay, terms and payslips. Keeping records and using the WRC or specialist migrant support can help address exploitation.",
      plainLaw: "Keep your passport, save evidence and seek confidential advice.", sourceLabel: "Workplace Relations Commission", sourceUrl: official.wrc,
      choices: [
        { id: "evidence", label: "Keep the passport, save records, request an explanation and contact the WRC or an adviser.", correct: true, feedback: "Clear records make it easier to understand and challenge the problem.", consequence: "The worker can seek help without relying only on the employer’s account." },
        { id: "hand", label: "Hand over the passport because the employer arranged the permit.", feedback: "The worker should retain control of personal identity documents.", consequence: "The employer gains a powerful means of control." },
        { id: "nothing", label: "Ignore deductions because migrant workers cannot complain.", feedback: "Migrant workers have enforceable employment rights.", consequence: "Unlawful treatment may continue or worsen." },
      ],
    },
  ],
  protection: [
    {
      stage: "Plan", eyebrow: "A need for safety", title: "Protection is about personal risk",
      scene: "Return feels unsafe. Friends offer conflicting advice and one person suggests inventing a stronger story.",
      question: "What principle should guide the next step?",
      law: "International protection is for people who fear persecution or face a real risk of serious harm. Each application is assessed on its individual facts under the law applying when it is made.",
      plainLaw: "Tell your own truthful story and get confidential legal information as early as possible.", sourceLabel: "Irish Refugee Council: applications after 12 June 2026", sourceUrl: official.refugeeCouncil,
      choices: [
        { id: "truth", label: "Keep personal evidence where safe, tell the truth and seek reliable legal information.", correct: true, feedback: "A protection claim must be the person’s own account.", consequence: "The case begins with accurate information and appropriate support." },
        { id: "copy", label: "Copy a story that worked for someone else.", feedback: "Invented or borrowed information can seriously damage credibility.", consequence: "The process may focus on contradictions rather than the real fear." },
        { id: "work", label: "Present protection as a faster employment route.", feedback: "Protection and labour migration have different purposes.", consequence: "The genuine legal basis of the journey is obscured." },
      ],
    },
    {
      stage: "Prepare", eyebrow: "Safety and evidence", title: "Documents help, but safety comes first",
      scene: "Some evidence is on a damaged phone. Other documents were impossible to bring.",
      question: "What is the responsible approach?",
      law: "Applicants should provide available information, cooperate with the process and explain missing evidence truthfully. Interpretation, vulnerability and accessibility needs should be raised.",
      plainLaw: "Do not invent missing documents. Explain what exists, what is missing and why.", sourceLabel: "International Protection Office", sourceUrl: official.ipo,
      choices: [
        { id: "explain", label: "Preserve what is safe, explain gaps and ask for an interpreter or accessibility support when needed.", correct: true, feedback: "The process should hear the person’s own account with appropriate support.", consequence: "Missing evidence is addressed openly rather than concealed." },
        { id: "forge", label: "Create replacement documents that look official.", feedback: "False documents can seriously harm a claim.", consequence: "Attention shifts away from the real circumstances and towards deception." },
        { id: "silence", label: "Never mention trauma, identity or disability even when relevant.", feedback: "Sensitive information can be discussed confidentially with qualified support.", consequence: "Important protection or procedural needs may remain unseen." },
      ],
    },
    {
      stage: "Travel", eyebrow: "Reaching Ireland", title: "Say clearly that protection is needed",
      scene: "At an Irish port of entry, fear and exhaustion make it difficult to explain why return is unsafe.",
      question: "What should the person communicate?",
      law: "A person seeking asylum should clearly state that they want international protection and cooperate with the applicable registration and screening process.",
      plainLaw: "Use direct words: ‘I want to apply for international protection. I am afraid to return.’",
      sourceLabel: "International Protection Office", sourceUrl: official.ipo,
      choices: [
        { id: "ask", label: "Clearly ask for international protection and request interpretation if needed.", correct: true, feedback: "Clear communication helps direct the person into the correct process.", consequence: "The stated fear of return can be recorded and assessed." },
        { id: "tourist", label: "Hide the fear and say the visit is only tourism.", feedback: "That does not communicate the need for protection.", consequence: "The person may not enter the process intended to assess the risk." },
        { id: "script", label: "Repeat a memorised account that is not accurate.", feedback: "Use the person’s own truthful words.", consequence: "Inconsistencies may make an already difficult interview harder." },
      ],
    },
    {
      stage: "Arrive", eyebrow: "The application and reception system", title: "IPO and IPAS have different roles",
      scene: "The applicant needs legal information, accommodation and help with a child’s school place.",
      question: "Which plan recognises the different responsibilities?",
      law: "The IPO examines protection applications. IPAS is responsible for reception accommodation and related supports. Legal Aid and independent organisations provide separate assistance.",
      plainLaw: "Case decision, accommodation and legal advice come from different services.", sourceLabel: "IPAS accommodation and supports", sourceUrl: official.ipas,
      choices: [
        { id: "roles", label: "Engage with IPO about the case, IPAS about reception needs and a lawyer about legal advice.", correct: true, feedback: "Separating the roles makes it easier to ask the right body for help.", consequence: "Urgent needs and the legal application can progress through the appropriate channels." },
        { id: "manager", label: "Ask an accommodation manager to approve refugee status.", feedback: "Accommodation staff do not decide the protection claim.", consequence: "Time is lost asking the wrong person for a legal decision." },
        { id: "address", label: "Move without updating the authorities or legal adviser.", feedback: "Contact information should be kept current.", consequence: "Important appointments or decisions could be missed." },
      ],
    },
    {
      stage: "Build a life", eyebrow: "Waiting and participating", title: "Check current rights instead of relying on rumours",
      scene: "An employer offers work, while other residents disagree about when applicants may enter the labour market.",
      question: "What should the applicant do?",
      law: "Labour-market access depends on the law, timing and conditions applying to the individual application. Education, health, complaints and child supports have separate rules.",
      plainLaw: "Check current eligibility and obtain the required permission before starting work.", sourceLabel: "Irish Refugee Council Information Hub", sourceUrl: official.refugeeCouncil,
      choices: [
        { id: "current", label: "Check the current rule for this application and start only after any required permission is granted.", correct: true, feedback: "This avoids applying an old rule or another person’s circumstances to the case.", consequence: "The job decision rests on current, individual information." },
        { id: "rumour", label: "Start because another resident was allowed to work.", feedback: "Another person may have applied under different rules or at a different time.", consequence: "The applicant may act without the permission their own case requires." },
        { id: "never", label: "Assume applicants can never study, work or raise concerns.", feedback: "Applicants have rights and routes to support, although conditions apply.", consequence: "Opportunities and protections may be missed unnecessarily." },
      ],
    },
  ],
  study: [
    {
      stage: "Plan", eyebrow: "Before accepting a place", title: "Check the course and the full cost",
      scene: "The college offer looks exciting, but the budget covers tuition and only six weeks of rent.",
      question: "What should be tested before committing?",
      law: "Study permission depends on the course, provider, finances, insurance and other current immigration requirements.",
      plainLaw: "Confirm the programme qualifies and make a realistic plan for fees, housing, insurance and daily life.", sourceLabel: "Coming to study in Ireland", sourceUrl: official.study,
      choices: [
        { id: "budget", label: "Verify the course and provider, then calculate tuition, housing, insurance and living costs.", correct: true, feedback: "Admission is only one part of a viable study journey.", consequence: "The student can judge whether the plan is financially and legally realistic." },
        { id: "job", label: "Assume a part-time job will cover every cost immediately.", feedback: "Work rights are limited by permission and employment is not guaranteed.", consequence: "The student may arrive without enough resources for basic needs." },
        { id: "deposit", label: "Pay an unverified agent before checking the programme.", feedback: "Verify the institution, programme and payment channel first.", consequence: "Fees may be lost on a course that does not support the intended permission." },
      ],
    },
    {
      stage: "Prepare", eyebrow: "Permission before departure", title: "Admission is not a visa",
      scene: "The acceptance email arrives and the student assumes it is the only document needed to travel.",
      question: "What is the correct next move?",
      law: "Visa-required students generally need the appropriate long-stay study visa. All students must be able to show the purpose and conditions of study.",
      plainLaw: "Follow the official student immigration checklist; a college offer does not replace travel permission.", sourceLabel: "Coming to study in Ireland", sourceUrl: official.study,
      choices: [
        { id: "visa", label: "Follow the official visa process if required and organise the financial, insurance and course evidence.", correct: true, feedback: "This connects the admission offer to the correct immigration route.", consequence: "Travel is supported by a complete and consistent study plan." },
        { id: "offer", label: "Use the acceptance email as an automatic visa.", feedback: "Admission and immigration permission are separate.", consequence: "Travel could fail before the course begins." },
        { id: "tourist", label: "Enter as a tourist and switch quietly after classes start.", feedback: "Use the correct study route before travel.", consequence: "The student may be unable to register the intended permission." },
      ],
    },
    {
      stage: "Travel", eyebrow: "At border control", title: "The study plan must make sense",
      scene: "The officer asks where the student will live, how the course is funded and when it begins.",
      question: "How should the student respond?",
      law: "Entry is assessed at the border. Documents and answers should demonstrate a genuine, prepared course of study.",
      plainLaw: "Carry truthful evidence of the course, finances, insurance and first accommodation.", sourceLabel: "Irish Immigration Service", sourceUrl: official.study,
      choices: [
        { id: "show", label: "Answer truthfully and show the course, payment, insurance, finance and accommodation evidence.", correct: true, feedback: "The documents support the stated study purpose.", consequence: "The officer can understand the plan without relying on assumptions." },
        { id: "work", label: "Say the main purpose is full-time work.", feedback: "That conflicts with a study application.", consequence: "The purpose of travel appears inconsistent." },
        { id: "guess", label: "Guess the college address and course dates.", feedback: "Students should know the basic details of their own programme.", consequence: "The study plan may not appear genuine or prepared." },
      ],
    },
    {
      stage: "Arrive", eyebrow: "The first term", title: "Register and keep the course active",
      scene: "Housing problems make it tempting to postpone registration and miss classes.",
      question: "Which response best protects the study journey?",
      law: "Eligible non-EEA students staying more than 90 days must register their permission and continue meeting the attendance and course conditions attached to it.",
      plainLaw: "Register, stay engaged with the course and tell the college early when serious problems affect attendance.", sourceLabel: "Registering immigration permission", sourceUrl: official.register,
      choices: [
        { id: "support", label: "Arrange registration, attend the course and contact student support early about housing or wellbeing.", correct: true, feedback: "Immigration and academic responsibilities are easier to protect with early support.", consequence: "Problems are recorded before they become unexplained absence or loss of status." },
        { id: "skip", label: "Stop attending without telling the college.", feedback: "Course engagement is important to the permission.", consequence: "Academic and immigration consequences may compound the housing problem." },
        { id: "pps", label: "Use a PPS number instead of registration.", feedback: "A PPS number is not study permission.", consequence: "The required residence-registration step remains incomplete." },
      ],
    },
    {
      stage: "Build a life", eyebrow: "Work, community and next steps", title: "Student work has boundaries",
      scene: "An employer offers full-time hours during term and says nobody checks student conditions.",
      question: "What should the student do?",
      law: "A student’s right to work depends on the stamp and current conditions. Exceeding those conditions can affect immigration status and study.",
      plainLaw: "Check the hours and dates allowed by the current student permission before accepting a roster.", sourceLabel: "Immigration permission stamps", sourceUrl: "https://www.irishimmigration.ie/registering-your-immigration-permission/information-on-registering/immigration-permission-stamps/",
      choices: [
        { id: "limits", label: "Check the current Stamp 2 conditions and accept only work that fits them.", correct: true, feedback: "Permission conditions matter even when an employer offers more hours.", consequence: "Employment supports the student rather than undermining the course and status." },
        { id: "full", label: "Take unrestricted hours because the employer approved them.", feedback: "An employer cannot enlarge immigration permission.", consequence: "The student may breach the conditions of stay." },
        { id: "cash", label: "Work off the books so the hours are invisible.", feedback: "Undeclared work creates employment, tax and immigration risks.", consequence: "The student loses important workplace protections and creates further risk." },
      ],
    },
  ],
  family: [
    {
      stage: "Plan", eyebrow: "Before the move", title: "The sponsor determines the route",
      scene: "A spouse in Ireland believes marriage automatically gives the same rights as Irish citizenship.",
      question: "What needs to be established first?",
      law: "Family routes differ depending on whether the sponsor is Irish, UK, EEA or Swiss, non-EEA, or a beneficiary of international protection.",
      plainLaw: "Identify the sponsor’s exact status and the relationship category before choosing a form or visa.", sourceLabel: "Coming to join family in Ireland", sourceUrl: official.family,
      choices: [
        { id: "sponsor", label: "Check the sponsor’s status, the relationship category and the current financial and document rules.", correct: true, feedback: "That identifies the correct family route.", consequence: "The application is built for the actual sponsor and relationship." },
        { id: "marriage", label: "Assume a marriage certificate grants automatic entry and work rights.", feedback: "The relationship evidence is important, but an immigration process still applies.", consequence: "Travel or work may be attempted without the required permission." },
        { id: "form", label: "Use the first family form found online, regardless of sponsor status.", feedback: "Different sponsors and family members follow different processes.", consequence: "The wrong application can cause avoidable delay or refusal." },
      ],
    },
    {
      stage: "Prepare", eyebrow: "Evidence and permission", title: "Show a genuine family plan",
      scene: "The couple has years of messages and visits, but their housing and financial evidence is disorganised.",
      question: "What is the best preparation?",
      law: "Family applications may examine the qualifying relationship, sponsor eligibility, finances, accommodation, dependency and other route-specific criteria.",
      plainLaw: "Use the official checklist and organise truthful evidence of the relationship and practical plan.", sourceLabel: "Join family guidance", sourceUrl: official.family,
      choices: [
        { id: "file", label: "Build a clear evidence file using the checklist and explain any genuine gaps.", correct: true, feedback: "Organised, truthful evidence makes the application easier to assess.", consequence: "The family’s real history and plan are visible without manufactured material." },
        { id: "fake", label: "Create documents for periods when little evidence exists.", feedback: "False evidence can seriously damage the application.", consequence: "Trust in the whole application may be undermined." },
        { id: "ignore", label: "Ignore financial or housing requirements because the relationship is genuine.", feedback: "A genuine relationship does not remove every route condition.", consequence: "A preventable evidence gap may delay or defeat the application." },
      ],
    },
    {
      stage: "Travel", eyebrow: "Arrival as a family member", title: "State the real purpose at the border",
      scene: "The traveller has the relevant visa or preclearance and plans to live with the sponsor.",
      question: "What should happen at entry?",
      law: "Where a visa or preclearance is required, it supports travel for the stated family purpose. Entry and the initial permission are considered at the border.",
      plainLaw: "Explain the family purpose honestly and carry the approval and sponsor details.", sourceLabel: "Coming to join family", sourceUrl: official.family,
      choices: [
        { id: "family", label: "State the family purpose and show the approval, relationship and sponsor-address details.", correct: true, feedback: "The explanation matches the application and documents.", consequence: "The officer can assess entry on the intended family basis." },
        { id: "holiday", label: "Say it is only a short holiday despite plans to remain.", feedback: "The stated purpose should be truthful.", consequence: "The account conflicts with the family application and intended stay." },
        { id: "none", label: "Carry no sponsor contact or accommodation information.", feedback: "Basic evidence of the family and arrival plan should be accessible.", consequence: "The traveller may struggle to explain where and with whom they will live." },
      ],
    },
    {
      stage: "Arrive", eyebrow: "Registration and conditions", title: "Do not guess what the stamp allows",
      scene: "A remote employer wants the family member to resume work immediately from an Irish address.",
      question: "What should the person do before working?",
      law: "The right to work depends on the immigration permission granted. Family permissions can differ according to the sponsor and route.",
      plainLaw: "Register the permission where required and confirm its work conditions before starting or resuming employment in Ireland.", sourceLabel: "Immigration permission stamps", sourceUrl: "https://www.irishimmigration.ie/registering-your-immigration-permission/information-on-registering/immigration-permission-stamps/",
      choices: [
        { id: "stamp", label: "Complete the required registration and check exactly what the permission permits.", correct: true, feedback: "The stamp or IRP conditions answer the work question.", consequence: "Employment begins only when the Irish permission supports it." },
        { id: "spouse", label: "Assume every spouse automatically has unrestricted work rights.", feedback: "Family permissions are not all identical.", consequence: "Work may begin before the necessary condition is satisfied." },
        { id: "remote", label: "Assume foreign remote work is outside Irish immigration conditions.", feedback: "Working while physically in Ireland can still engage Irish immigration, tax and employment rules.", consequence: "A remote arrangement creates unexpected legal and tax issues." },
      ],
    },
    {
      stage: "Build a life", eyebrow: "Independence and belonging", title: "Build support beyond the sponsor",
      scene: "The move feels isolating, and the family member depends on the sponsor for every document, appointment and social contact.",
      question: "Which step creates greater security?",
      law: "Migrants can seek independent information about immigration, work, health, safety and local services. Emergency and specialist supports remain available when relationships become unsafe.",
      plainLaw: "Keep copies of your own documents and learn how to reach independent services.", sourceLabel: "Irish Immigration Service", sourceUrl: official.family,
      choices: [
        { id: "network", label: "Keep personal document copies and connect with independent advice, community and health services.", correct: true, feedback: "A wider support network improves practical independence and safety.", consequence: "The person can make informed decisions without relying on one relationship for everything." },
        { id: "all", label: "Let the sponsor keep every document and password.", feedback: "Adults should retain safe access to their own identity and account information.", consequence: "Every practical decision becomes dependent on the sponsor." },
        { id: "silent", label: "Avoid support because asking questions might affect status.", feedback: "Reliable, confidential information helps people understand their options.", consequence: "Problems may become more serious before help is sought." },
      ],
    },
  ],
};

export const routeMeta = {
  critical: { label: "Critical Skills Employment Permit", short: "Skilled work", family: "work" as const },
  general: { label: "General Employment Permit", short: "Employment", family: "work" as const },
  protection: { label: "International protection", short: "Protection", family: "protection" as const },
  study: { label: "Long-stay study", short: "Study", family: "study" as const },
  family: { label: "Join family", short: "Family", family: "family" as const },
};

export const routeFilters: { id: RouteFilter; label: string; description: string }[] = [
  { id: "all", label: "Show everyone", description: "Compare all nine fictional journeys." },
  { id: "work", label: "I want to work", description: "Employment-permit journeys." },
  { id: "study", label: "I want to study", description: "Course, visa, finance and Stamp 2 decisions." },
  { id: "family", label: "I want to join family", description: "Sponsor, relationship and permission decisions." },
  { id: "protection", label: "I need safety", description: "International-protection and reception decisions." },
];
