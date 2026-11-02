/** Editorial learning guide, not a prevalence ranking or an eligibility assessment. */
export const immigrationQuestionsReviewed = "2026-11-02";
export const integrationResearchUrl = "https://www.esri.ie/publications/monitoring-report-on-integration-2024";

export type QuestionTopic = "arrival" | "immigration" | "protection" | "work" | "study" | "daily-life" | "family" | "rights";
export type ImmigrationQuestion = {
  id: string;
  title: string;
  topics: readonly QuestionTopic[];
  keywords: string;
  explanation: string;
  forNewcomers: string;
  forOthers: string;
  nextStep: string;
  sources: readonly { title: string; publisher: string; href: string }[];
};

export const immigrationQuestions: readonly ImmigrationQuestion[] = [
  {
    id: "status-and-identity",
    title: "Migrant, asylum applicant or refugee: does the label change the answer?",
    topics: ["immigration", "protection", "rights"],
    keywords: "asylum seeker refugee migrant immigrant citizenship identity terminology temporary protection subsidiary protection Ukraine",
    explanation: "Moving to Ireland does not put everyone into one legal category. Someone applying for international protection is not in the same position as someone already granted refugee status or subsidiary protection. Temporary protection is a separate system. Work, study and family routes have their own conditions.",
    forNewcomers: "Use the wording on your own permission or decision when seeking advice. A neighbour's experience may involve a different route.",
    forOthers: "Do not infer a person's status or citizenship from their name, appearance or accent. Ask about status only when it is relevant to the service or task, and explain why.",
    nextStep: "Identify the relevant route before discussing entitlements. Ask a qualified adviser where the documents or terminology are unclear.",
    sources: [
      { title: "Asylum and refugee status", publisher: "UNHCR", href: "https://help.unhcr.org/global/asylum-and-refugee-status/" },
      { title: "Temporary protection for people fleeing Ukraine", publisher: "Immigration Service Delivery", href: "https://www.irishimmigration.ie/information-on-temporary-protection-for-people-fleeing-the-conflict-in-ukraine/" },
      { title: "Immigration permission stamps", publisher: "Immigration Service Delivery", href: "https://www.irishimmigration.ie/registering-your-immigration-permission/information-on-registering/immigration-permission-stamps/" },
    ],
  },
  {
    id: "documents-and-services",
    title: "Visa, residence permission, IRP or PPS number: which document does what?",
    topics: ["arrival", "immigration", "family"],
    keywords: "documents visa passport IRP Irish Residence Permit PPS PPSN registration public services family reunification",
    explanation: "A visa, permission to enter or remain, an Irish Residence Permit (IRP) and a Personal Public Service (PPS) number serve different purposes. An IRP records a registered immigration permission. A PPS number is an identifier for public services and official transactions, not a substitute for immigration permission or a benefit award.",
    forNewcomers: "Ask which document is needed for the particular application and why. Keep your immigration, employment and public-service paperwork distinct.",
    forOthers: "Do not treat a PPS number as proof of a right to work, or assume that every person must hold an IRP. Check the requirements for their route.",
    nextStep: "Use the official registration and PPS guidance separately. For joining family, check the route that applies to the sponsor rather than assuming one universal rule.",
    sources: [
      { title: "Irish Residence Permit", publisher: "Immigration Service Delivery", href: "https://www.irishimmigration.ie/registering-your-immigration-permission/information-on-registering/irish-residence-permit/" },
      { title: "Get a Personal Public Service number", publisher: "Department of Social Protection", href: "https://www.gov.ie/en/department-of-social-protection/services/get-a-personal-public-service-pps-number/" },
      { title: "Coming to join family in Ireland", publisher: "Immigration Service Delivery", href: "https://www.irishimmigration.ie/coming-to-join-family-in-ireland/" },
    ],
  },
  {
    id: "work-permission-and-rights",
    title: "Who may work, and do the same workplace protections apply?",
    topics: ["work", "immigration", "protection", "rights"],
    keywords: "employment job employer permit salary wages exploitation student work labour labor market access",
    explanation: "Permission to work and rights at work are separate questions. Some people need an employment permit; others have a different basis for working. Immigration permissions can also restrict work. Employers still need to follow the employment-rights rules that apply to the job, including pay, working time and written terms.",
    forNewcomers: "Check your own permission before accepting work. Seek independent advice about withheld pay, unsafe conditions or an employer controlling your documents.",
    forOthers: "Check the actual permission and any conditions. Do not assume all non-Irish workers need the same permit or that migrant status justifies poorer conditions.",
    nextStep: "Use the WRC for workplace rules and the relevant immigration or permit authority for work permission. Get specialist advice where status or exploitation is involved.",
    sources: [
      { title: "Employment permits", publisher: "Workplace Relations Commission", href: "https://www.workplacerelations.ie/en/what_you_should_know/coming_to_work_in_ireland/employment-permits/" },
      { title: "Rights and obligations at work", publisher: "Workplace Relations Commission", href: "https://www.workplacerelations.ie/en/what_you_should_know/" },
      { title: "Information for migrant workers", publisher: "Migrant Rights Centre Ireland", href: "https://www.mrci.ie/get-info/" },
    ],
  },
  {
    id: "welfare-and-habitual-residence",
    title: "Who can receive social welfare, and what does habitual residence mean?",
    topics: ["daily-life", "arrival", "rights"],
    keywords: "welfare benefits payment entitlement habitual residence HRC PPS public services social protection",
    explanation: "There is no single welfare entitlement shared by everyone who moves to Ireland. Eligibility depends on the payment and the person's circumstances. The habitual residence condition applies to specified payments regardless of nationality. Having a PPS number does not, by itself, establish eligibility.",
    forNewcomers: "Ask about the exact payment, the evidence required and the reasons for any decision. Do not assume that another person's award applies to you.",
    forOthers: "Avoid claims that everyone receives the same supports or that no migrant can qualify. Check the particular scheme rather than using nationality as a shortcut.",
    nextStep: "Read the current scheme rules and habitual residence guidance. Seek independent advice about a refusal or a possible review or appeal.",
    sources: [
      { title: "Habitual residence condition", publisher: "Department of Social Protection", href: "https://www.gov.ie/en/department-of-social-protection/publications/habitual-residence-condition/" },
      { title: "PPS number: purpose and application", publisher: "Department of Social Protection", href: "https://www.gov.ie/en/department-of-social-protection/services/get-a-personal-public-service-pps-number/" },
    ],
  },
  {
    id: "housing-and-accommodation",
    title: "Is IPAS accommodation the same as renting or social housing?",
    topics: ["daily-life", "protection", "rights"],
    keywords: "housing home landlord tenant rent deposit IPAS direct provision accommodation council social housing HAP",
    explanation: "IPAS reception accommodation, a private tenancy and social housing are different arrangements. Their rules and routes for resolving problems are not interchangeable. IPAS supports people applying for international protection; ordinary tenancy guidance should not automatically be applied to a reception centre or every room-sharing arrangement.",
    forNewcomers: "Find out what kind of accommodation agreement you have and which body can help with a concern. Keep records of payments and correspondence.",
    forOthers: "Do not describe reception accommodation as an allocation of a permanent council home. Identify the relevant system before giving housing advice.",
    nextStep: "Use IPAS for reception information and the RTB for covered tenancies. Ask the local authority about the current rules for housing supports.",
    sources: [
      { title: "Reception accommodation and supports", publisher: "International Protection Accommodation Services", href: "https://ipas.irishimmigration.ie/" },
      { title: "Tenant rights and responsibilities", publisher: "Residential Tenancies Board", href: "https://rtb.ie/renting/rights-responsibilities/tenant-rights-responsibilities/" },
      { title: "Integration, housing and wider social inclusion", publisher: "ESRI", href: integrationResearchUrl },
    ],
  },
  {
    id: "healthcare-and-medical-cards",
    title: "How do GP care, medical cards and emergency services fit together?",
    topics: ["daily-life", "arrival", "protection"],
    keywords: "health healthcare health care doctor GP medical card hospital emergency HSE interpreter",
    explanation: "Finding a GP, qualifying for a medical card and getting emergency care are different questions. Medical-card eligibility depends on circumstances, with assessment and automatic-qualification routes. Immigration permission alone does not explain which services are free or whether a particular GP can take a new patient.",
    forNewcomers: "Ask the HSE which route applies to you and what documents are needed. Tell the service about any communication support you need.",
    forOthers: "Separate eligibility, charges and practical access. Avoid promising that all treatment is free, or telling someone they cannot seek help simply because they are a migrant.",
    nextStep: "Use HSE guidance for medical cards and local services. For an immediate emergency, call 112 or 999.",
    sources: [
      { title: "What a medical card covers and who can apply", publisher: "Health Service Executive", href: "https://www.hse.ie/services/schemes-allowances/medical-cards/about-the-medical-card/what-it-covers/" },
      { title: "Find HSE services", publisher: "Health Service Executive", href: "https://www2.hse.ie/services/" },
    ],
  },
  {
    id: "education-and-qualifications",
    title: "How do school places and overseas qualifications work?",
    topics: ["study", "work", "family"],
    keywords: "education school enrolment enrollment college university qualifications degree NARIC QQI professional registration",
    explanation: "School admission, college entry and recognition of qualifications are separate processes. Schools apply their admissions policies. QQI's NARIC comparability statements explain how an overseas academic qualification compares with an Irish award; they are advisory and are not a professional licence or a guarantee of admission or employment.",
    forNewcomers: "Ask schools about their application process. For an overseas qualification, identify whether you need academic comparability, an admissions decision or professional registration.",
    forOthers: "Do not equate unfamiliar qualifications or limited English with lack of ability. Employers, admissions staff and professional regulators have different recognition responsibilities.",
    nextStep: "Use Tusla's school-enrolment guidance and QQI's NARIC service. For a regulated profession, check the relevant Irish regulator separately.",
    sources: [
      { title: "How do I enrol my child in school?", publisher: "Tusla", href: "https://www.tusla.ie/tess/information-for-parents-and-guardians-tess/education-welfare-service/how-do-i-enrol-my-child-in-school/" },
      { title: "Recognition of foreign qualifications", publisher: "Quality and Qualifications Ireland", href: "https://www.qqi.ie/recognition-of-foreign-qualifications" },
    ],
  },
  {
    id: "language-and-interpreting",
    title: "When is an interpreter needed rather than a translation app?",
    topics: ["daily-life", "arrival", "study", "rights"],
    keywords: "language English translation interpreting interpreter communication literacy forms consent accessibility",
    explanation: "Conversational English does not necessarily mean someone understands technical forms or a complex explanation. Written translation and spoken interpreting address different needs. HIQA's health and social-care guidance recommends identifying communication needs, speaking directly to the person and using an interpreter approved by the service where needed.",
    forNewcomers: "Say which language and format help you understand. Ask for an explanation of unfamiliar terms and for interpreting support when a decision is important.",
    forOthers: "Use plain language and check understanding respectfully. For sensitive or high-stakes matters, follow the service's interpreting arrangements rather than relying on an app or a child.",
    nextStep: "Ask the relevant service what communication support it can arrange. The linked health guidance is a practical model, not a promise that every service offers identical support.",
    sources: [
      { title: "Good communication in health and social care", publisher: "HIQA", href: "https://www.hiqa.ie/sites/default/files/2025-11/Good-communication/Communication%20in%20Health%20and%20Social%20Care.html" },
      { title: "Multilingual aid and language identification", publisher: "Health Service Executive", href: "https://about.hse.ie/news/new-hse-resource-available-to-support-patient-communication/" },
    ],
  },
  {
    id: "culture-and-respect",
    title: "How do I ask about culture, religion or personal preferences respectfully?",
    topics: ["daily-life", "family", "work"],
    keywords: "culture cultural religion faith food diet names pronunciation respect belonging integration community trauma bias",
    explanation: "A person's nationality is not a reliable guide to their individual beliefs, preferences or experiences. HSE intercultural training addresses respectful services, unconscious bias and trauma-aware practice. These are useful prompts for reflection, not a checklist that assigns behaviour to whole communities.",
    forNewcomers: "You can explain a preference or ask why something is being requested. You do not need to speak for everyone from your country or community.",
    forOthers: "Ask open, relevant questions about the individual, such as how to pronounce their name or what would help them participate. Do not press someone to describe traumatic experiences.",
    nextStep: "Agree the practical arrangements with the person. Use intercultural learning to question assumptions rather than to reinforce stereotypes.",
    sources: [
      { title: "Intercultural awareness and inclusive practice", publisher: "Health Service Executive", href: "https://healthservice.hse.ie/staff/training-and-development/national-social-inclusion-office-training-programmes/intercultural-awareness-elearning-programme/" },
    ],
  },
  {
    id: "discrimination-and-help",
    title: "When is unfair treatment discrimination, and where can someone get help?",
    topics: ["rights", "work", "daily-life", "study"],
    keywords: "discrimination racism racist equality complaint WRC race nationality ethnic origin services housing harassment",
    explanation: "Irish equality law addresses discrimination in employment and in access to goods and services, including relevant housing and education situations. Race-related protections include nationality and ethnic or national origins. Whether a particular incident meets the legal test depends on the facts and the applicable law; not every unfair experience has the same complaint route.",
    forNewcomers: "Keep a factual record of what happened and seek advice promptly. Ask which process applies and whether there are notification or complaint deadlines.",
    forOthers: "Take a concern seriously, explain the available routes and avoid dismissing it as a cultural misunderstanding. Do not promise a legal outcome.",
    nextStep: "Start with the WRC's equality guidance and seek appropriate advice for the situation. Equality complaints are distinct from reporting a suspected crime or an immediate safety risk.",
    sources: [
      { title: "Equal status: services, accommodation and education", publisher: "Workplace Relations Commission", href: "https://www.workplacerelations.ie/en/what_you_should_know/equal-status-and-employment-equality/equal-status/" },
      { title: "Employment rights and equality guidance", publisher: "Workplace Relations Commission", href: "https://www.workplacerelations.ie/en/what_you_should_know/" },
    ],
  },
];

/** Use the hub's existing topic and query controls without altering its source-card count. */
export function filterImmigrationQuestions(topic = "all", query = ""): readonly ImmigrationQuestion[] {
  const terms = query.trim().toLocaleLowerCase("en").split(/\s+/).filter(Boolean);
  return immigrationQuestions.filter((question) => {
    if (topic !== "all" && !question.topics.some((value) => value === topic)) return false;
    const text = [question.title, question.keywords, question.explanation, question.forNewcomers,
      question.forOthers, question.nextStep, ...question.topics,
      ...question.sources.map((source) => `${source.title} ${source.publisher}`)].join(" ").toLocaleLowerCase("en");
    return terms.every((term) => text.includes(term));
  });
}
