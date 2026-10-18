import type { Character, RouteKey, Step } from "./journey-data";
import type { InsightKey, LearningCopy } from "./learning-copy/en";

type FiveInsights = readonly [InsightKey, InsightKey, InsightKey, InsightKey, InsightKey];
export const insightKeysByRoute: Record<RouteKey, FiveInsights> = {
  critical: ["offer", "permissions", "travel", "registration", "workRights"],
  general: ["offer", "permissions", "travel", "registration", "workRights"],
  protection: ["protection", "evidence", "protection", "services", "protectionWork"],
  study: ["study", "permissions", "travel", "participation", "studentWork"],
  family: ["family", "evidence", "travel", "familyWork", "support"],
  "protection-access": ["protection", "access", "access", "participation", "services"],
  "eu-mobility": ["euWork", "euResidence", "euWork", "equality", "equality"],
  "family-safety": ["abuse", "safeContact", "abuse", "evidence", "support"],
};

export type RecapDecision = {
  index: number;
  step: Step;
  chosen: Step["choices"][number];
  informed: Step["choices"][number] | undefined;
  needsReview: boolean;
};

// Answer IDs, not positions or translated labels, determine the recap.
export function buildJourneyRecap(steps: Step[], answers: Record<number, string>, checkedSteps: number[]): RecapDecision[] {
  return steps.flatMap((step, index) => {
    const chosen = step.choices.find((choice) => choice.id === answers[index]);
    if (!chosen || !checkedSteps.includes(index)) return [];
    return [{ index, step, chosen, informed: step.choices.find((choice) => choice.correct), needsReview: !chosen.correct }];
  });
}

export const practicalResourceUrls = {
  nursing: "https://www.nmbi.ie/Registration/Qualified-outside-the-EU",
  tax: "https://www.revenue.ie/en/jobs-and-pensions/starting-your-first-job/what-you-should-do.aspx",
} as const;

export type LearningResource = { title: string; description: string; href: string; topic: "work"; organisation: string };

export function practicalResources(copy: LearningCopy): LearningResource[] {
  return [
    { title: copy.professionalTitle, description: copy.professionalDescription, href: practicalResourceUrls.nursing, topic: "work", organisation: "Nursing and Midwifery Board of Ireland (NMBI)" },
    { title: copy.taxTitle, description: copy.taxDescription, href: practicalResourceUrls.tax, topic: "work", organisation: "Revenue" },
  ];
}

export function practicalResourcesForCharacter(character: Pick<Character, "id" | "route">, copy: LearningCopy): LearningResource[] {
  const resources = practicalResources(copy);
  return resources.filter((resource) => resource.href === practicalResourceUrls.nursing
    ? character.id === "priya"
    : ["critical", "general", "eu-mobility"].includes(character.route));
}

export function guidanceForRecap(decisions: RecapDecision[]): RecapDecision[] {
  // Prioritise questions raised by the user's answers, then settling-in stages.
  const candidates = [...decisions.filter((item) => item.needsReview), ...decisions.slice().reverse()];
  const seen = new Set<string>();
  return candidates.filter((item) => {
    if (seen.has(item.step.sourceUrl)) return false;
    seen.add(item.step.sourceUrl);
    return true;
  }).slice(0, 3);
}

export function resourceTopicForRoute(route: RouteKey): string {
  if (route === "critical" || route === "general" || route === "eu-mobility") return "work";
  if (route === "protection" || route === "protection-access") return "protection";
  if (route === "family" || route === "family-safety") return "family";
  return "study";
}
