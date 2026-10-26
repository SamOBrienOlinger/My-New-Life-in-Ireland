/* Editorially curated Irish myth-busters. Source dates are publication dates,
   not invented access or update dates. Re-check rules before publication. */
export type FactTopic = "protection" | "welfare" | "housing" | "work" | "community";
export type FactVerdict = "fact" | "fiction" | "context";
export type EvidenceKind = "official" | "research" | "civil-society";

export type EvidenceSource = {
  id: string;
  title: string;
  publisher: string;
  url: string;
  kind: EvidenceKind;
  published?: string;
};

export type FactEntry = {
  id: string;
  topic: FactTopic;
  verdict: FactVerdict;
  claim: string;
  answer: string;
  context: string;
  evidenceIds: string[];
};

export const editorialCheckDate = "2026-10-26";
export const evidenceSources: Record<string, EvidenceSource> = {
  reception: {
    id: "reception",
    title: "International Protection Accommodation and Supports",
    publisher: "Department of Justice, Home Affairs and Migration",
    url: "https://www.gov.ie/en/department-of-justice-home-affairs-and-migration/collections/international-protection-accommodation-and-supports/",
    kind: "official",
    published: "2026-06-12",
  },
  system: {
    id: "system",
    title: "How our immigration system works",
    publisher: "Department of Justice, Home Affairs and Migration",
    url: "https://www.gov.ie/en/department-of-justice-home-affairs-and-migration/collections/how-our-immigration-system-works/",
    kind: "official",
  },
  temporary: {
    id: "temporary",
    title: "Temporary Protection and Ukraine",
    publisher: "Department of Justice, Home Affairs and Migration",
    url: "https://www.gov.ie/en/department-of-justice-home-affairs-and-migration/collections/temporary-protection-and-ukraine/",
    kind: "official",
    published: "2026-06-12",
  },
  refugeeCouncil: {
    id: "refugeeCouncil",
    title: "International Protection Information Hub",
    publisher: "Irish Refugee Council",
    url: "https://www.irishrefugeecouncil.ie/get-help/information-hub/",
    kind: "civil-society",
  },
  transfers: {
    id: "transfers",
    title: "Social transfers utilisation among migrants and Irish-born in Ireland",
    publisher: "Economic and Social Research Institute (ESRI)",
    url: "https://www.esri.ie/publications/social-transfers-utilisation-among-migrants-and-irish-born-in-ireland",
    kind: "research",
    published: "2026-06-10",
  },
  neighbourhoods: {
    id: "neighbourhoods",
    title: "Urban and more affluent areas in Ireland have higher proportions of migrants",
    publisher: "Economic and Social Research Institute (ESRI)",
    url: "https://www.esri.ie/news/urban-and-more-affluent-areas-in-ireland-have-higher-proportions-of-migrants-new-esri-research",
    kind: "research",
    published: "2026-10-16",
  },
  perceptions: {
    id: "perceptions",
    title: "Overestimating immigration linked to negative attitudes",
    publisher: "Economic and Social Research Institute (ESRI)",
    url: "https://www.esri.ie/news/overestimating-immigration-linked-to-negative-attitudes",
    kind: "research",
    published: "2026-01-15",
  },
  exploitation: {
    id: "exploitation",
    title: "Tied to Exploitation: The Experience of Migrant Workers in Ireland",
    publisher: "Migrant Rights Centre Ireland (MRCI)",
    url: "https://www.mrci.ie/tied-to-exploitation-experience-of-migrant-workers-in-ireland/",
    kind: "civil-society",
    published: "2026-03-23",
  },
  migrantProtection: {
    id: "migrantProtection",
    title: "Employment rights and protection of migrant workers",
    publisher: "Department of Enterprise, Tourism and Employment",
    url: "https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/economic-migration-policy/protection-of-migrant-workers.html",
    kind: "official",
  },
  equality: {
    id: "equality",
    title: "Employment Equality",
    publisher: "Workplace Relations Commission",
    url: "https://www.workplacerelations.ie/en/what_you_should_know/equal-status-and-employment-equality/employment-equality/employment-equality/",
    kind: "official",
  },
  racism: {
    id: "racism",
    title: "iReport: Reporting Racism in Ireland",
    publisher: "Irish Network Against Racism (INAR)",
    url: "https://ireport.ie/",
    kind: "civil-society",
  },
  inarResources: {
    id: "inarResources",
    title: "Anti-racism publications and resources",
    publisher: "Irish Network Against Racism (INAR)",
    url: "https://inar.ie/resources/",
    kind: "civil-society",
  },
  misinformation: {
    id: "misinformation",
    title: "Misinformation about migration",
    publisher: "Department of Justice, Home Affairs and Migration",
    url: "https://www.gov.ie/en/department-of-justice-home-affairs-and-migration/collections/misinformation-about-migration/",
    kind: "official",
  },
};

export const factEntries: FactEntry[] = [
  {
    id: "standard-welfare",
    topic: "welfare",
    verdict: "fiction",
    claim: "Does everyone seeking asylum automatically receive ordinary social welfare payments?",
    answer: "No. People awaiting an international protection decision do not qualify for standard welfare or social housing supports simply by applying. They can receive basic reception supports and, subject to the rules, a Daily Expenses Allowance.",
    context: "This is about applicants awaiting a decision, not people already granted protection or those on other immigration permissions. Different programmes, such as temporary protection for people displaced from Ukraine, have different entitlements. Check the current government guidance for an individual situation.",
    evidenceIds: ["reception", "refugeeCouncil"],
  },
  {
    id: "asylum-employment",
    topic: "protection",
    verdict: "fiction",
    claim: "Are people seeking international protection prohibited from working for the entire application process?",
    answer: "No. Applicants may become eligible for labour market access after six months without a first decision. They need permission before starting work.",
    context: "Eligibility and procedure depend on the application and the rules in force. Having applied for protection is not itself permission to work. People who have been granted protection are in a different legal position. The International Protection Act 2026 changed aspects of the process from 12 June 2026.",
    evidenceIds: ["reception", "refugeeCouncil"],
  },
  {
    id: "automatic-social-housing",
    topic: "housing",
    verdict: "fiction",
    claim: "Does applying for asylum automatically put someone on Ireland's social housing list?",
    answer: "No. IPAS accommodation for applicants and social housing supports are different systems. Applicants awaiting a protection decision are not entitled to join the social housing list solely because they applied.",
    context: "People who have been granted international protection may seek assessment for housing support if they meet the relevant conditions. Neither a grant of status nor an application guarantees a home. Housing demand is a wider public-policy question.",
    evidenceIds: ["system", "reception"],
  },
  {
    id: "protection-categories",
    topic: "protection",
    verdict: "fiction",
    claim: "Do all migrants, refugees and people under temporary protection have the same legal status?",
    answer: "No. Moving for work or study, applying for international protection, receiving refugee status, and receiving temporary protection are distinct routes with different rights and conditions.",
    context: "Temporary protection was activated in response to displacement from Ukraine and is not the same as an international protection application. Rules can also depend on when a person applied. Labels should not be used interchangeably when discussing access to work, accommodation or supports.",
    evidenceIds: ["temporary", "system", "refugeeCouncil"],
  },
  {
    id: "benefit-comparison",
    topic: "welfare",
    verdict: "context",
    claim: "Do higher overall welfare receipt figures prove that migrants claim more unemployment supports?",
    answer: "No. ESRI analysis of 2024 data found at least one of several payments among 61% of immigrants and 56% of Irish-born people aged 15–65. The difference was driven largely by family payments. Unemployment-related receipt was 9% in both groups.",
    context: "A broad measure of welfare receipt is not the same as unemployment payments or net fiscal impact. Patterns vary by payment, age, household circumstances and country-of-birth group. This study does not establish what any individual receives or whether migration causes a particular public-service pressure.",
    evidenceIds: ["transfers"],
  },
  {
    id: "poorest-areas",
    topic: "housing",
    verdict: "fiction",
    claim: "Do migrants in Ireland live only in the most disadvantaged neighbourhoods?",
    answer: "No. ESRI research published in October 2026 found that migrants made up 36% of residents in very affluent Electoral Divisions and 9% in extremely disadvantaged ones.",
    context: "These figures describe the share of residents who were migrants in areas with different classifications. They do not mean that 36% of all migrants live in affluent areas, or that all migrant groups have equal housing opportunities. The research also found generally low residential segregation, with differences between groups.",
    evidenceIds: ["neighbourhoods"],
  },
  {
    id: "population-perceptions",
    topic: "community",
    verdict: "fact",
    claim: "Do people often overestimate how many residents of Ireland were born abroad?",
    answer: "Yes. In an ESRI survey of 1,200 adults published in January 2026, the average estimate was 28%. The highest official estimate used in that study was 22%.",
    context: "This finding concerns perceptions in one representative survey and official measures used for comparison; it is not an up-to-the-minute population count. The same research found that misperceptions were associated with more negative attitudes, but an association does not by itself prove causation.",
    evidenceIds: ["perceptions"],
  },
  {
    id: "permit-equals-fairness",
    topic: "work",
    verdict: "fiction",
    claim: "Does having a valid employment permit guarantee that a migrant worker is treated fairly?",
    answer: "No. Employment law provides protections, but exploitation can still occur. A 2026 MRCI survey of more than 1,000 general employment permit holders found that 71% reported at least one substantial employment-rights breach.",
    context: "This result describes the survey's general-employment-permit population, not every migrant worker in Ireland. It documents reported experiences rather than legal findings in each case. The Department of Enterprise describes measures intended to protect permit holders, but the existence of legal protections does not guarantee compliance.",
    evidenceIds: ["exploitation", "migrantProtection"],
  },
  {
    id: "equality-at-work",
    topic: "work",
    verdict: "fact",
    claim: "Does Irish employment equality law protect workers against discrimination connected with nationality and ethnic origin?",
    answer: "Yes. The Employment Equality Acts prohibit discrimination on the race ground, which includes colour, nationality and ethnic or national origins.",
    context: "Protections apply to specified work-related matters, including recruitment, pay, training and promotion. A complaint must be assessed on its own facts under the relevant legal process. The existence of a legal protection does not mean that discrimination has disappeared.",
    evidenceIds: ["equality", "migrantProtection"],
  },
  {
    id: "reporting-racism",
    topic: "community",
    verdict: "fiction",
    claim: "Can a racist incident only be reported if it has already been treated as a crime?",
    answer: "No. INAR's iReport system accepts reports of racism, including incidents that may not lead to legal action. It supports independent monitoring and understanding of patterns.",
    context: "iReport is not a substitute for contacting An Garda Síochána, the Workplace Relations Commission or other statutory channels when appropriate. Its reports are self-selected incidents, not a representative estimate of the number of racist incidents across Ireland. Seek immediate help if someone is in danger.",
    evidenceIds: ["racism", "inarResources"],
  },
];

export const editorialReading = [
  "A verdict addresses a specific claim, date and group. It is not a judgement about people.",
  "Official sources explain eligibility and procedures; research estimates patterns; NGO reports document experiences and advocacy. They answer different questions.",
  "Published figures and immigration rules can change. Links were checked on 26 October 2026; use the linked publication for current guidance.",
  "The summaries are newly written and are not quotations or endorsements by the organisations linked.",
];
