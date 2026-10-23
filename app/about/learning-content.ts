export type LearningBlock = { title: string; body: string };

export type AboutLearningCopy = {
  navigation: string;
  flowTitle: string;
  flowIntro: string;
  choose: LearningBlock;
  stagesLabel: string;
  stages: [string, string, string, string, string];
  loopTitle: string;
  loop: [LearningBlock, LearningBlock, LearningBlock, LearningBlock];
  repeat: string;
  finish: string;
  review: LearningBlock;
  revisit: string;
  exploreTitle: string;
  compare: string;
  investigate: string;
  flowNote: string;
  imageLink: string;
  methodTitle: string;
  methodIntro: string;
  methods: [LearningBlock, LearningBlock, LearningBlock];
  outcomesTitle: string;
  outcomesIntro: string;
  outcomes: [string, string, string, string, string, string];
  evidenceTitle: string;
  evidenceIntro: string;
  evidenceLimit: string;
  assessment: string;
  readMore: string;
};

export const englishLearningCopy: AboutLearningCopy = {
  navigation: "Explore this page",
  flowTitle: "How to play and learn",
  flowIntro: "Make a decision. Read why it matters. Explore another perspective.",
  choose: {
    title: "Choose a person",
    body: "Meet one of twelve fictional people, read their circumstances and begin their five-stage journey.",
  },
  stagesLabel: "Your five stages",
  stages: ["Plan", "Prepare", "Travel", "Arrive", "Build a life"],
  loopTitle: "At every stage",
  loop: [
    { title: "Read", body: "Consider the situation and the available rules." },
    { title: "Choose", body: "Select an answer to the question." },
    { title: "Check", body: "Check your decision to reveal the explanation." },
    { title: "Understand", body: "Read the feedback, common misunderstanding, next step and sources." },
  ],
  repeat: "Continue repeats this loop at the next stage.",
  finish: "After the final stage, complete the journey.",
  review: {
    title: "Review and reflect",
    body: "Use the recap to consider what shaped this person's choices, what was within their control and what support could help.",
  },
  revisit: "You can revisit a decision, check a changed answer and return to the recap.",
  exploreTitle: "Keep exploring",
  compare: "Compare another person's journey",
  investigate: "Explore sources in the Information Hub",
  flowNote: "The stages stay in order. You can finish after checking every decision; all answers do not have to be correct. The score describes this exercise, not a real outcome.",
  imageLink: "Open the original flow diagram (English)",
  methodTitle: "How the learning works",
  methodIntro: "Fictional cases connect information with human circumstances. Guided decisions and explanations create opportunities to reconsider assumptions. Discussion and source-checking activities can extend the experience.",
  methods: [
    { title: "Decide and understand", body: "Use the guidance, make a choice and examine the explanation. Ask what distinction the feedback helped you notice." },
    { title: "Compare circumstances", body: "Compare Kwame and Elena: which circumstances change the guidance, and which concerns remain similar?" },
    { title: "Reflect and investigate", body: "Discuss institutional responsibility through Adama's access barriers, or practise checking a source through Mateo's recruitment concerns." },
  ],
  outcomesTitle: "What you can practise",
  outcomesIntro: "These are intended learning outcomes. A facilitator or worksheet can make comparison, discussion and source evaluation explicit.",
  outcomes: [
    "Distinguish pathways and processes in the selected cases.",
    "Explain a decision and reconsider a misunderstanding.",
    "Compare circumstances without treating one story as universal.",
    "Recognise personal choices, institutional barriers and support.",
    "Check who publishes a source, what it covers and what remains uncertain.",
    "Apply a principle to a new fictional case and identify what else needs checking.",
  ],
  evidenceTitle: "Research behind the approach",
  evidenceIntro: "Research on explanatory feedback, case comparison and source evaluation provides a rationale for these teaching activities. These studies examined other learning settings, not this website.",
  evidenceLimit: "Learning, retention and changes in empathy or attitudes have not been established for this site. The in-game score records supported practice, not a complete assessment of learning.",
  assessment: "To explore understanding further, use an unfamiliar case and ask for a reason, a relevant source and any unresolved questions.",
  readMore: "Read the full methodology, examples and research",
};

export const pedagogyReferences = [
  {
    authors: "Van der Kleij, Feskens & Eggen (2015)",
    title: "Effects of Feedback in a Computer-Based Learning Environment on Students' Learning Outcomes: A Meta-Analysis",
    url: "https://doi.org/10.3102/0034654314564881",
  },
  {
    authors: "Alfieri, Nokes-Malach & Schunn (2013)",
    title: "Learning Through Case Comparisons: A Meta-Analytic Review",
    url: "https://doi.org/10.1080/00461520.2013.775712",
  },
  {
    authors: "Breakstone et al. (2021)",
    title: "Lateral reading: College students learn to critically evaluate internet sources in an online course",
    url: "https://doi.org/10.37016/mr-2020-56",
  },
] as const;
