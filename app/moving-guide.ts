import type { RouteKey } from "./journey-data.ts";
import type { LearningCopy } from "./learning-copy/en.ts";
import type { SourceScope } from "./source-info.ts";

type GuideId = keyof LearningCopy["movingGuide"]["resources"];
type GuideTopic = "arrival" | "immigration" | "work" | "study" | "daily-life" | "family";
type GuideDefinition = { id: GuideId; href: string; topic: GuideTopic; scope: SourceScope };

// Production Citizens Information links. Keep IDs independent of translated titles.
export const movingGuideDefinitions = [
  { id: "overview", href: "https://www.citizensinformation.ie/en/moving-country/moving-to-ireland/", topic: "arrival", scope: "general-information" },
  { id: "beforeArrival", href: "https://www.citizensinformation.ie/en/moving-country/moving-to-ireland/before-you-come-to-ireland/", topic: "arrival", scope: "general-information" },
  { id: "settling", href: "https://www.citizensinformation.ie/en/moving-country/moving-to-ireland/coming-to-live-in-ireland/", topic: "daily-life", scope: "general-information" },
  { id: "residence", href: "https://www.citizensinformation.ie/en/moving-country/moving-to-ireland/rights-of-residence-in-ireland/", topic: "immigration", scope: "immigration" },
  { id: "family", href: "https://www.citizensinformation.ie/en/moving-country/moving-to-ireland/rights-of-residence-in-ireland/residence-rights-of-family-members/", topic: "family", scope: "immigration" },
  { id: "registration", href: "https://www.citizensinformation.ie/en/moving-country/moving-to-ireland/rights-of-residence-in-ireland/registration-of-non-eea-nationals-in-ireland/", topic: "arrival", scope: "immigration" },
  { id: "work", href: "https://www.citizensinformation.ie/en/moving-country/working-in-ireland/migrant-workers/coming-to-work-in-ireland/", topic: "work", scope: "employment" },
  { id: "study", href: "https://www.citizensinformation.ie/en/moving-country/moving-to-ireland/studying-in-ireland/", topic: "study", scope: "public-services" },
  { id: "systems", href: "https://www.citizensinformation.ie/en/moving-country/moving-to-ireland/introduction-to-the-irish-system/", topic: "daily-life", scope: "public-services" },
  { id: "housing", href: "https://www.citizensinformation.ie/en/moving-country/moving-to-ireland/introduction-to-the-irish-system/accommodation/", topic: "daily-life", scope: "public-services" },
  { id: "health", href: "https://www.citizensinformation.ie/en/moving-country/moving-to-ireland/introduction-to-the-irish-system/health-care-in-ireland/", topic: "daily-life", scope: "public-services" },
  { id: "socialSecurity", href: "https://www.citizensinformation.ie/en/moving-country/moving-to-ireland/introduction-to-the-irish-system/moving-to-ireland-and-your-social-security-entitlements/", topic: "daily-life", scope: "public-services" },
  { id: "retirement", href: "https://www.citizensinformation.ie/en/moving-country/moving-to-ireland/coming-to-live-in-ireland/retiring-to-ireland/", topic: "daily-life", scope: "general-information" },
  { id: "returning", href: "https://www.citizensinformation.ie/en/returning-to-ireland/overview-of-returning-to-ireland/", topic: "arrival", scope: "general-information" },
] as const satisfies readonly GuideDefinition[];

export type MovingGuideResource = GuideDefinition & {
  title: string; description: string; organisation: string; rightsAndAdvice: boolean;
};

export function movingGuideResources(copy: LearningCopy): MovingGuideResource[] {
  return movingGuideDefinitions.map((definition) => ({
    ...definition,
    ...copy.movingGuide.resources[definition.id],
    organisation: "Citizens Information",
    rightsAndAdvice: ["residence", "family", "registration", "work", "socialSecurity"].includes(definition.id),
  }));
}

const guideForRoute: Record<RouteKey, GuideId> = {
  critical: "work", general: "work", study: "study", family: "family",
  protection: "systems", "protection-access": "health",
  "eu-mobility": "residence", "family-safety": "systems",
};

export function movingGuideForRoute(route: RouteKey, copy: LearningCopy): MovingGuideResource {
  return movingGuideResources(copy).find(({ id }) => id === guideForRoute[route])!;
}
