export type RouteFilter = "all" | "work" | "study" | "family" | "protection" | "eu";

export const routeFilters: { id: RouteFilter; label: string; description: string }[] = [
  { id: "all", label: "Show everyone", description: "Compare all twelve fictional journeys." },
  { id: "work", label: "I want to work", description: "Employment-permit journeys." },
  { id: "study", label: "I want to study", description: "Course, visa, finance and Stamp 2 decisions." },
  { id: "family", label: "I want to join family", description: "Sponsor, relationship and permission decisions." },
  { id: "protection", label: "I need safety", description: "International-protection and reception decisions." },
  { id: "eu", label: "I am an EU citizen", description: "Free-movement, work and equality decisions." },
];

export function journeyTopic(topic: string | null): RouteFilter {
  return routeFilters.find((item) => item.id === topic)?.id ?? "all";
}

export function browseJourneysHref(topic: string | null, root = "./") {
  const filter = journeyTopic(topic);
  return `${root}${filter === "all" ? "" : `?topic=${filter}`}#choose-character`;
}

export function informationHubHref(topic: string | null, root = "") {
  const filter = journeyTopic(topic);
  const query = filter === "all" || filter === "eu" ? "" : `?topic=${filter}#resource-browser`;
  return `${root}resources/${query}`;
}

export function factsHref(topic: string | null, root = "") {
  const filter = journeyTopic(topic);
  const query = filter === "work" || filter === "protection" ? `?topic=${filter}#facts-list-title` : "";
  return `${root}fact-or-fiction/${query}`;
}
