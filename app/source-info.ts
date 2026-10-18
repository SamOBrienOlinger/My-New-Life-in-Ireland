export type SourceScope =
  | "immigration"
  | "employment"
  | "protection"
  | "public-services"
  | "equality"
  | "specialist-support"
  | "professional-registration"
  | "general-information";

export type SourceInfo = {
  publisher: string;
  checkedAt?: string;
  scope: SourceScope;
};

export type SourceVerification = SourceInfo & {
  url: string;
  status: "retrieved" | "not-verified";
  note: string;
};

/**
 * A checked date records when the linked page was retrieved and its publisher
 * and relevant subject matter were checked. It is not the publisher's update
 * date, a legal review, or confirmation that every statement remains current.
 * Dates are explicit: do not advance them when deploying or rendering the site.
 *
 * Verification log, 18 October 2026: public page retrievals only. Pages returning
 * HTTP 403 or a retrieval timeout retain their existing publisher classification
 * but have no checkedAt value. Search snippets alone do not earn a checked date.
 */
const checkedOn = "2026-10-18";

const isd = "Immigration Service Delivery";
const dete = "Department of Enterprise, Tourism and Employment";
const ipo = "International Protection Office";
const ipas = "International Protection Accommodation Service";
const irc = "Irish Refugee Council";
const wrc = "Workplace Relations Commission";
const citizensInformation = "Citizens Information";
const ihrec = "Irish Human Rights and Equality Commission";
const mrci = "Migrant Rights Centre Ireland";

function retrieved(
  url: string,
  publisher: string,
  scope: SourceScope,
  note: string,
): SourceVerification {
  return { url, publisher, scope, checkedAt: checkedOn, status: "retrieved", note };
}

function notVerified(
  url: string,
  publisher: string,
  scope: SourceScope,
  note: string,
): SourceVerification {
  return { url, publisher, scope, status: "not-verified", note };
}

/** Maintainer evidence log; notes describe the limited scope of each check. */
export const sourceVerificationLog: readonly SourceVerification[] = [
  retrieved(
    "https://www.irishimmigration.ie/",
    isd,
    "immigration",
    "Official starting points for work, study, family, border controls and registration; individual conditions are on the linked guidance pages.",
  ),
  retrieved(
    "https://www.irishimmigration.ie/coming-to-work-in-ireland/",
    isd,
    "immigration",
    "Distinguishes employment or atypical permission, any nationality-dependent visa requirement, and registration after arrival.",
  ),
  retrieved(
    "https://www.irishimmigration.ie/registering-your-immigration-permission/",
    isd,
    "immigration",
    "Explains that registration records permission and its conditions; links to first registration, renewal and change-of-permission guidance.",
  ),
  retrieved(
    "https://www.irishimmigration.ie/registering-your-immigration-permission/information-on-registering/immigration-permission-stamps/",
    isd,
    "immigration",
    "Describes stamp-specific activities and residence conditions, IRP evidence, and additional conditions that may appear in a permission letter.",
  ),
  retrieved(
    "https://www.irishimmigration.ie/coming-to-study-in-ireland/",
    isd,
    "immigration",
    "Separates enrolment and fees from any visa requirement and residence registration; links to course, visa and arrival guidance.",
  ),
  retrieved(
    "https://www.irishimmigration.ie/coming-to-join-family-in-ireland/",
    isd,
    "immigration",
    "Organises family routes by sponsor status. Use the applicable linked procedure; the overview includes a notice about 2026 protection-family changes.",
  ),
  retrieved(
    "https://www.irishimmigration.ie/my-situation-has-changed-since-i-arrived-in-ireland/immigration-guidelines-for-victims-of-domestic-abuse/",
    isd,
    "immigration",
    "Guidance is limited to eligible victims whose residence permission depends on the perpetrator; explains applications, evidence, confidentiality and possible outcomes.",
  ),
  retrieved(
    "https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/",
    dete,
    "employment",
    "Official employment-permit categories, eligibility, application guidance and notices; exemptions and route-specific conditions matter.",
  ),
  retrieved(
    "https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/permit-types/critical-skills-employment-permit/",
    dete,
    "employment",
    "Explains the occupation, remuneration, job-offer and employer criteria for this permit. No numeric threshold was copied into this metadata.",
  ),
  retrieved(
    "https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/permit-types/general-employment-permit/",
    dete,
    "employment",
    "Explains employer and occupation requirements and the ineligible occupations list for this permit; links to the applicable detailed criteria.",
  ),
  retrieved(
    "https://ipo.irishimmigration.ie/",
    ipo,
    "protection",
    "Routes applicants to the applicable protection process based on application date; distinguishes application services, accommodation and legal aid.",
  ),
  retrieved(
    "https://ipas.irishimmigration.ie/",
    ipas,
    "protection",
    "Describes reception accommodation and basic supports, with separate pathways for healthcare, education, payments and accommodation concerns.",
  ),
  retrieved(
    "https://ipas.irishimmigration.ie/accommodation/securing-accommodation/",
    ipas,
    "protection",
    "Explains the voluntary vulnerability assessment, reception needs, accommodation pathways and limited medical or exceptional transfer processes.",
  ),
  retrieved(
    "https://www.irishrefugeecouncil.ie/get-help/information-hub/",
    irc,
    "protection",
    "Specialist information hub distinguishes procedures before and after the June 2026 changes; it is not an application decision service.",
  ),
  retrieved(
    "https://www.irishrefugeecouncil.ie/get-help/information-hub/after-12-june-2026/",
    irc,
    "protection",
    "Collection of specialist explanations for the newer application process. Proposed changes are labelled separately from current procedures on linked pages.",
  ),
  retrieved(
    "https://www.irishrefugeecouncil.ie/get-help/services-support/law-centre/",
    irc,
    "specialist-support",
    "Describes early legal advice and targeted representation, including protection, family and reception cases; access is not a guarantee of representation.",
  ),
  retrieved(
    "https://www.irishrefugeecouncil.ie/get-help/",
    irc,
    "specialist-support",
    "Lists information, advocacy, legal, housing, employment, education, youth and resettlement services, each with its own scope.",
  ),
  retrieved(
    "https://www.workplacerelations.ie/en/what_you_should_know/coming_to_work_in_ireland/",
    wrc,
    "employment",
    "Use only for basic employment-rights signposting. Its blanket statement about asylum applicants working is overbroad; use current protection guidance for eligibility.",
  ),
  retrieved(
    "https://www.workplacerelations.ie/en/what_you_should_know/",
    wrc,
    "employment",
    "Employment-rights overview links to hours, wages, leave, employer obligations, equality and complaint routes; preferred over the older migrant-work overview.",
  ),
  retrieved(
    "https://www.workplacerelations.ie/en/what_you_should_know/hours-and-wages/payslips/",
    wrc,
    "employment",
    "Explains wage statements for each payment and the information about gross wages and deductions that a payslip must contain.",
  ),
  retrieved(
    "https://www.mrci.ie/",
    mrci,
    "specialist-support",
    "Confirms its work with migrant workers and families at risk of exploitation, exclusion and discrimination; use Get Info for practical support access.",
  ),
  retrieved(
    "https://www.mrci.ie/get-info/",
    mrci,
    "specialist-support",
    "Offers free confidential information and support on immigration and work, with employment, family and exploitation questions and caseworker contact.",
  ),
  retrieved(
    "https://nascireland.org/",
    "Nasc",
    "specialist-support",
    "Describes immigration information and casework, family reunification, visas, citizenship and reception conditions, plus targeted integration programmes.",
  ),
  retrieved(
    "https://www.womensaid.ie/get-help/",
    "Women’s Aid",
    "specialist-support",
    "Lists domestic-abuse support, interpretation, safety planning, local services and immigration information; individual services explain their intended users.",
  ),
  retrieved(
    "https://www2.hse.ie/services/",
    "Health Service Executive",
    "public-services",
    "Service directory covers GPs, hospitals, urgent care, disability services and healthcare-cost schemes; it does not establish individual eligibility.",
  ),
  retrieved(
    "https://www.nmbi.ie/Registration/Qualified-outside-the-EU",
    "Nursing and Midwifery Board of Ireland",
    "professional-registration",
    "Explains qualification recognition and professional registration for nurses and midwives qualified outside the EU; these are distinct from immigration permission.",
  ),
  retrieved(
    "https://www.revenue.ie/en/jobs-and-pensions/starting-your-first-job/what-you-should-do.aspx",
    "Revenue",
    "public-services",
    "Explains first-job tax registration using a PPS number and myAccount, including avoiding emergency tax; this does not establish a right to work.",
  ),
  notVerified(
    "https://www.citizensinformation.ie/en/moving-country/working-in-ireland/migrant-workers/coming-from-eu-to-work/",
    citizensInformation,
    "employment",
    "Public retrieval returned HTTP 403. The linked page content was not verified in this check.",
  ),
  notVerified(
    "https://www.citizensinformation.ie/en/moving-country/moving-to-ireland/rights-of-residence-in-ireland/residence-rights-eu-national/",
    citizensInformation,
    "immigration",
    "Public retrieval returned HTTP 403. The linked page content was not verified in this check.",
  ),
  notVerified(
    "https://www.citizensinformation.ie/en/education/",
    citizensInformation,
    "public-services",
    "Public retrieval returned HTTP 403. The linked page content was not verified in this check.",
  ),
  notVerified(
    "https://www.citizensinformation.ie/en/housing/",
    citizensInformation,
    "public-services",
    "Public retrieval returned HTTP 403. The linked page content was not verified in this check.",
  ),
  notVerified(
    "https://www.citizensinformation.ie/en/",
    citizensInformation,
    "public-services",
    "Public retrieval returned HTTP 403. The linked page content was not verified in this check.",
  ),
  notVerified(
    "https://www.gov.ie/en/department-of-social-protection/services/get-a-personal-public-service-pps-number/",
    "Department of Social Protection",
    "public-services",
    "Public retrieval returned HTTP 403. The linked page content was not verified in this check.",
  ),
  notVerified(
    "https://www.ihrec.ie/topics/traveller-and-roma",
    ihrec,
    "equality",
    "Public retrieval timed out. The linked page content was not verified in this check.",
  ),
  notVerified(
    "https://www.ihrec.ie/your-rights/race/housing",
    ihrec,
    "equality",
    "Public retrieval timed out. The linked page content was not verified in this check.",
  ),
  notVerified(
    "https://www.ihrec.ie/factsheets/discrimination-against-workers-recruitment-and-promotion",
    ihrec,
    "equality",
    "Public retrieval timed out. The linked page content was not verified in this check.",
  ),
];

function sourceKey(value: string): string {
  try {
    const url = new URL(value);
    url.search = "";
    url.hash = "";
    return url.href.replace(/\/+$/, "");
  } catch {
    return value;
  }
}

const sourcesByUrl = new Map(sourceVerificationLog.map((source) => [sourceKey(source.url), source]));

export function sourceInfo(url: string): SourceInfo {
  const source = sourcesByUrl.get(sourceKey(url));
  if (source) {
    const { publisher, scope, checkedAt } = source;
    return checkedAt ? { publisher, scope, checkedAt } : { publisher, scope };
  }

  // An unrecognised link never inherits another page's checked date, including
  // when it is hosted by a publisher with other entries in the log.
  let publisher = "External source";
  try {
    publisher = new URL(url).hostname.replace(/^www\./, "") || publisher;
  } catch {
    // Keep a neutral publisher label for invalid URLs; do not claim verification.
  }
  return { publisher, scope: "general-information" };
}
