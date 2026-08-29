"use client";

import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  ExternalLink,
  Info,
  MapPin,
  RotateCcw,
  Scale,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type RouteKey = "critical" | "general" | "protection";
type Character = {
  id: string;
  name: string;
  initials: string;
  pronouns: string;
  origin: string;
  role: string;
  route: RouteKey;
  identity: string;
  summary: string;
  tone: string;
};
type Choice = { id: string; label: string; correct?: boolean; feedback: string };
type Step = {
  eyebrow: string;
  title: string;
  scene: string;
  question: string;
  law: string;
  choices: Choice[];
};

const characters: Character[] = [
  {
    id: "kwame",
    name: "Kwame Mensah",
    initials: "KM",
    pronouns: "he / him",
    origin: "Ghana",
    role: "Civil engineer",
    route: "critical",
    identity: "Moving alone for a two-year engineering role",
    summary: "Kwame has an offer to work on renewable-energy infrastructure.",
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
    identity: "An experienced chef planning his first move abroad",
    summary: "Mateo has found an Irish employer, but the job and offer still need to qualify.",
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
    identity: "Seeking safety after threats connected to his work",
    summary: "Farid cannot safely return home and wants to ask Ireland for protection.",
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
    identity: "Joining a hospital team while building a life in Ireland",
    summary: "Priya has a qualifying nursing offer and must arrange permission before travel.",
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
    identity: "Travelling with her eight-year-old daughter",
    summary: "Mariam is asking for protection and must also navigate school and family needs.",
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
    identity: "Recruited for a full-time care role",
    summary: "Sofía has a job offer, but a contract alone does not give permission to work.",
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
    identity: "A trans woman whose safety concerns are personal and specific",
    summary: "Valentina needs to explain why she personally fears persecution or serious harm.",
    tone: "violet",
  },
  {
    id: "noor",
    name: "Noor Haddad",
    initials: "NH",
    pronouns: "they / them",
    origin: "Lebanon",
    role: "Community organiser",
    route: "protection",
    identity: "Queer and non-binary, looking for safety and stability",
    summary: "Noor's identity may be relevant to their claim, but every application is individual.",
    tone: "teal",
  },
  {
    id: "river",
    name: "River Okafor",
    initials: "RO",
    pronouns: "they / she",
    origin: "South Africa",
    role: "Software engineer",
    route: "critical",
    identity: "Gender-fluid and relocating with an Irish technology company",
    summary: "River has a skilled role and wants to understand immigration and workplace rights.",
    tone: "amber",
  },
];

const stepsByRoute: Record<RouteKey, Step[]> = {
  critical: [
    {
      eyebrow: "Before travelling",
      title: "The job offer comes first",
      scene: "A signed offer has arrived. The start date is four months away.",
      question: "What should happen next?",
      law: "Most non-EEA, non-Swiss and non-UK nationals need the relevant permission before coming to Ireland to work. A Critical Skills application should be received at least 12 weeks before the proposed start date.",
      choices: [
        {
          id: "permit",
          label: "Check that the role and pay qualify, then apply for the employment permit.",
          correct: true,
          feedback: "Correct. The occupation, salary, contract and employer must meet the current rules.",
        },
        {
          id: "visitor",
          label: "Travel as a visitor and start work while the permit is processed.",
          feedback: "A visitor permission does not allow someone to take up ordinary employment.",
        },
        {
          id: "pps",
          label: "Apply for a PPS number because that is permission to work.",
          feedback: "A PPS number is not immigration permission and does not create a right to work.",
        },
      ],
    },
    {
      eyebrow: "Permission to travel",
      title: "A permit is not always a visa",
      scene: "The employment permit is approved. Flights are available, but another check remains.",
      question: "What is the safe next step?",
      law: "An employment permit authorises the employment. A visa-required national must also obtain a long-stay D visa before travel. A visa allows travel to the border, but does not guarantee entry.",
      choices: [
        {
          id: "visa-check",
          label: "Check the official visa list and, if required, obtain a long-stay D visa.",
          correct: true,
          feedback: "Correct. Permit, visa and permission to enter are related but separate.",
        },
        {
          id: "permit-is-visa",
          label: "Book the flight because every employment permit is automatically a visa.",
          feedback: "Visa-required nationals need a separate visa after the permit is granted.",
        },
        {
          id: "tourist-visa",
          label: "Use a short-stay tourist visa because the job is approved.",
          feedback: "A short-stay visa is not the correct route for taking up long-term employment.",
        },
      ],
    },
    {
      eyebrow: "After arrival",
      title: "Register the permission",
      scene: "At border control, the documents are accepted and the person is admitted.",
      question: "What must be arranged for a stay longer than 90 days?",
      law: "A non-EU, non-UK and non-Swiss national staying more than 90 days must register their permission. First-time registration results in an Irish Residence Permit card as evidence of lawful residence.",
      choices: [
        {
          id: "register",
          label: "Arrange first-time registration and keep permission and address details current.",
          correct: true,
          feedback: "Correct. The IRP is important evidence, but it is not a general identity card.",
        },
        {
          id: "contract-only",
          label: "Do nothing because the employment contract replaces registration.",
          feedback: "A contract does not replace immigration registration.",
        },
        {
          id: "wait-year",
          label: "Wait until the end of the first year to register.",
          feedback: "That is too late. Registration should be arranged within the official period.",
        },
      ],
    },
    {
      eyebrow: "At work",
      title: "Immigration status does not erase employment rights",
      scene: "A manager says migrant staff can be paid less during a settling-in period.",
      question: "How should the character respond?",
      law: "Legally employed migrant workers have core Irish employment rights, including written terms, lawful pay, rest breaks, annual leave, payslips and limits on average weekly hours.",
      choices: [
        {
          id: "record-report",
          label: "Keep records, request lawful terms and seek WRC advice if it is not corrected.",
          correct: true,
          feedback: "Correct. The employer must comply with employment law.",
        },
        {
          id: "accept",
          label: "Accept it because permit holders have fewer workplace rights.",
          feedback: "False. Legally employed migrant workers are protected by Irish employment law.",
        },
        {
          id: "leave",
          label: "Stop attending work without advice and ignore the permit conditions.",
          feedback: "Get employment and immigration advice while keeping clear records.",
        },
      ],
    },
  ],
  general: [
    {
      eyebrow: "Before travelling",
      title: "Test the job against the rules",
      scene: "An employer offers a contract. The recruiter says any job with a contract qualifies.",
      question: "What should be checked before paying a fee or booking a flight?",
      law: "A General Employment Permit depends on the occupation, pay, employer and other conditions. Some occupations are ineligible. A Labour Market Needs Test is generally required unless an exemption applies.",
      choices: [
        {
          id: "eligibility",
          label: "Check current occupation lists, salary rules, employer eligibility and process.",
          correct: true,
          feedback: "Correct. The real duties, pay, hours and employer must satisfy current rules.",
        },
        {
          id: "contract",
          label: "Sign and travel because the contract is the permission.",
          feedback: "A contract is evidence, but it is not an employment permit.",
        },
        {
          id: "cash",
          label: "Pay the recruiter in cash and let them keep all original documents.",
          feedback: "That creates exploitation and fraud risks. Keep original identity documents.",
        },
      ],
    },
    {
      eyebrow: "Permission to travel",
      title: "Complete the steps in the right order",
      scene: "The permit application succeeds. The character wants to travel the next day.",
      question: "Which sequence is reliable?",
      law: "For work lasting more than 90 days, permission comes first. A visa-required national then applies for a long-stay D visa and registers after arrival.",
      choices: [
        {
          id: "sequence",
          label: "Permit, visa if required, border control, then registration after arrival.",
          correct: true,
          feedback: "Correct. Each step has a different purpose.",
        },
        {
          id: "tourist",
          label: "Tourist visa, start work, then apply for the permit from Ireland.",
          feedback: "First-time applicants generally apply while resident outside Ireland.",
        },
        {
          id: "pps",
          label: "PPS number, flight, then ask the employer to arrange status later.",
          feedback: "A PPS number is not permission to enter, live or work in Ireland.",
        },
      ],
    },
    {
      eyebrow: "After arrival",
      title: "Know what the permit covers",
      scene: "Another company offers better pay during the first month.",
      question: "Can the character simply change employer and occupation?",
      law: "A permit is issued for the employer and occupation named on it. A change may need a new permit or an official change-of-employer process.",
      choices: [
        {
          id: "check",
          label: "Check the permit conditions and get the required approval before changing.",
          correct: true,
          feedback: "Correct. Do not assume one job's permit covers another.",
        },
        {
          id: "any",
          label: "Start because every permit allows any job in Ireland.",
          feedback: "A permit is linked to the authorised employment.",
        },
        {
          id: "weekend",
          label: "Work both jobs quietly because weekend work does not count.",
          feedback: "The day of the week does not remove legal conditions.",
        },
      ],
    },
    {
      eyebrow: "At work",
      title: "Spot exploitation early",
      scene: "The payslip has unexplained deductions and the roster removes adequate breaks.",
      question: "What is the most useful first response?",
      law: "Legally employed migrants have core workplace protections. Employees should receive written terms and payslips, lawful pay, rest and leave.",
      choices: [
        {
          id: "evidence",
          label: "Save records, ask for an explanation and contact the WRC or an adviser.",
          correct: true,
          feedback: "Correct. Clear records help a worker understand the issue and seek a remedy.",
        },
        {
          id: "no-rights",
          label: "Accept it because the permit belongs to the employer.",
          feedback: "The worker still has enforceable employment rights.",
        },
        {
          id: "passport",
          label: "Give the employer the passport as security until the contract ends.",
          feedback: "Keep control of identity documents. Passport retention is a warning sign.",
        },
      ],
    },
  ],
  protection: [
    {
      eyebrow: "Asking for protection",
      title: "Protection is not a work visa",
      scene: "The character reaches Ireland and says they cannot return safely.",
      question: "What should they do?",
      law: "A person has the right to ask Ireland for protection from persecution or a real risk of serious harm. They should say this as soon as possible at a port of entry or through the official in-person process.",
      choices: [
        {
          id: "protection",
          label: "Clearly ask for international protection and explain the personal fear of return.",
          correct: true,
          feedback: "Correct. The claim must be truthful and based on a need for protection.",
        },
        {
          id: "work",
          label: "Describe it as a faster route to get a job.",
          feedback: "International protection is not a substitute for a work-permit application.",
        },
        {
          id: "hide",
          label: "Leave out identity details even when they are central to the fear.",
          feedback: "Give a truthful account and seek confidential legal advice about sensitive details.",
        },
      ],
    },
    {
      eyebrow: "The application",
      title: "Tell the story carefully and truthfully",
      scene: "There are interviews and forms. The character needs an interpreter.",
      question: "Which support should they use?",
      law: "Applicants must cooperate, attend interviews, provide information and keep contact details current. Interpretation is available. The Legal Aid Board can provide confidential advice.",
      choices: [
        {
          id: "support",
          label: "Ask for an interpreter and legal advice, and explain vulnerability or access needs.",
          correct: true,
          feedback: "Correct. The account should be the person's own, complete and truthful.",
        },
        {
          id: "copy",
          label: "Copy another applicant's successful story.",
          feedback: "Each claim is individual. Invented information can damage credibility.",
        },
        {
          id: "mail",
          label: "Move address and wait for officials to find the new location.",
          feedback: "Applicants must keep their address and contact information updated.",
        },
      ],
    },
    {
      eyebrow: "Accommodation and daily life",
      title: "IPO and IPAS do different jobs",
      scene: "After applying, the character needs somewhere to stay.",
      question: "Which statement is accurate?",
      law: "The International Protection Office handles the application. IPAS provides accommodation and basic supports. IPAS does not decide refugee status or subsidiary protection.",
      choices: [
        {
          id: "different",
          label: "Engage with IPO about the case and with IPAS about accommodation and supports.",
          correct: true,
          feedback: "Correct. The systems interact, but their responsibilities differ.",
        },
        {
          id: "manager",
          label: "Ask the accommodation-centre manager to approve the claim.",
          feedback: "The centre manager does not decide protection status.",
        },
        {
          id: "silent",
          label: "Stay silent about safety or facilities because residents cannot complain.",
          feedback: "Residents can raise concerns and use the IPAS complaints process.",
        },
      ],
    },
    {
      eyebrow: "Accessing work",
      title: "The six-month rule has conditions",
      scene: "Five months pass with no first decision. A local employer offers a job.",
      question: "When can the character begin work?",
      law: "An eligible applicant can seek Labour Market Access Permission after five months if no first decision has issued. They cannot work until six months have passed and permission is received. Delays must not be attributable to the applicant.",
      choices: [
        {
          id: "permission",
          label: "Use the official process and start only when eligible and permission is received.",
          correct: true,
          feedback: "Correct. Permission can cover employment and self-employment.",
        },
        {
          id: "five",
          label: "Start at five months because applying is the same as permission.",
          feedback: "Five months is not automatic permission to work.",
        },
        {
          id: "never",
          label: "Decline permanently because protection applicants can never work.",
          feedback: "Eligible applicants can receive Labour Market Access Permission.",
        },
      ],
    },
  ],
};

const routeMeta: Record<RouteKey, { label: string; short: string; icon: typeof ShieldCheck }> = {
  critical: { label: "Critical Skills Employment Permit", short: "Skilled work", icon: BriefcaseBusiness },
  general: { label: "General Employment Permit", short: "Employment", icon: BriefcaseBusiness },
  protection: { label: "International protection", short: "Protection", icon: ShieldCheck },
};

const officialSources = [
  ["Employment permits", "https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/"],
  ["Coming to work in Ireland", "https://www.irishimmigration.ie/coming-to-work-in-ireland/"],
  ["International Protection Office", "https://ipo.irishimmigration.ie/"],
  ["IPAS accommodation and supports", "https://ipas.irishimmigration.ie/"],
  ["Labour Market Access Permission", "https://www.irishimmigration.ie/my-situation-has-changed-since-i-arrived-in-ireland/labour-market-access-permission/"],
  ["Workplace Relations Commission", "https://www.workplacerelations.ie/en/what_you_should_know/coming_to_work_in_ireland/"],
];

export default function Home() {
  const [selectedId, setSelectedId] = useState("");
  const [started, setStarted] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [choiceId, setChoiceId] = useState("");
  const [checked, setChecked] = useState(false);
  const [completed, setCompleted] = useState(false);
  const character = useMemo(() => characters.find((item) => item.id === selectedId), [selectedId]);
  const steps = character ? stepsByRoute[character.route] : [];
  const step = steps[stepIndex];
  const choice = step?.choices.find((item) => item.id === choiceId);
  const RouteIcon = character ? routeMeta[character.route].icon : Users;

  function beginJourney() {
    if (!character) return;
    setStarted(true);
    setStepIndex(0);
    setChoiceId("");
    setChecked(false);
    setCompleted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function nextStep() {
    if (stepIndex === steps.length - 1) setCompleted(true);
    else {
      setStepIndex((current) => current + 1);
      setChoiceId("");
      setChecked(false);
    }
  }

  function previousStep() {
    if (stepIndex === 0) return;
    setStepIndex((current) => current - 1);
    setChoiceId("");
    setChecked(false);
  }

  function resetJourney(target?: string) {
    setStarted(false);
    setCompleted(false);
    setStepIndex(0);
    setChoiceId("");
    setChecked(false);
    setSelectedId("");
    window.setTimeout(() => {
      if (target) document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
      else window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  }

  if (started && character) {
    return (
      <main className="journey-shell">
        <header className="journey-topbar">
          <button className="brand-button" type="button" onClick={() => resetJourney()}>
            <span className="brand-mark" aria-hidden="true">MN</span>
            <span>My New Life in Ireland</span>
          </button>
          <button className="quiet-button" type="button" onClick={() => resetJourney()}>
            <Users size={17} aria-hidden="true" /> Change character
          </button>
        </header>

        <div className="journey-layout">
          <aside className="character-rail" aria-label="Selected character">
            <div className={"avatar avatar-" + character.tone}>{character.initials}</div>
            <p className="mini-label">You are walking with</p>
            <h1>{character.name}</h1>
            <p>{character.pronouns}</p>
            <div className="rail-detail"><MapPin size={16} aria-hidden="true" /><span>{character.origin}</span></div>
            <div className="rail-detail"><RouteIcon size={16} aria-hidden="true" /><span>{character.role}</span></div>
            <div className="route-pill">{routeMeta[character.route].label}</div>
            <p className="identity-note">{character.identity}</p>
          </aside>

          <section className="decision-panel" aria-live="polite">
            {!completed && step ? (
              <>
                <div className="progress-row">
                  <span>Decision {stepIndex + 1} of {steps.length}</span>
                  <span>{Math.round(((stepIndex + 1) / steps.length) * 100)}%</span>
                </div>
                <Progress value={((stepIndex + 1) / steps.length) * 100} aria-label="Journey progress" />

                <div className="decision-heading">
                  <p className="eyebrow">{step.eyebrow}</p>
                  <h2>{step.title}</h2>
                  <p className="scene">{step.scene}</p>
                </div>

                <div className="law-card">
                  <Scale size={22} aria-hidden="true" />
                  <div><strong>What the rules mean here</strong><p>{step.law}</p></div>
                </div>

                <fieldset className="choice-fieldset">
                  <legend>{step.question}</legend>
                  <RadioGroup
                    value={choiceId}
                    onValueChange={(value) => {
                      setChoiceId(value);
                      setChecked(false);
                    }}
                    className="choice-list"
                  >
                    {step.choices.map((item, index) => (
                      <label className={"choice-card " + (choiceId === item.id ? "selected" : "")} key={item.id}>
                        <RadioGroupItem value={item.id} id={stepIndex + "-" + item.id} />
                        <span className="choice-letter" aria-hidden="true">{String.fromCharCode(65 + index)}</span>
                        <span>{item.label}</span>
                      </label>
                    ))}
                  </RadioGroup>
                </fieldset>

                {checked && choice ? (
                  <div className={"feedback-card " + (choice.correct ? "correct" : "consider")}>
                    {choice.correct ? <CheckCircle2 size={22} aria-hidden="true" /> : <Info size={22} aria-hidden="true" />}
                    <div>
                      <strong>{choice.correct ? "Good decision" : "Pause and reconsider"}</strong>
                      <p>{choice.feedback}</p>
                    </div>
                  </div>
                ) : null}

                <div className="decision-actions">
                  <button className="quiet-button" type="button" onClick={previousStep} disabled={stepIndex === 0}>
                    <ArrowLeft size={17} aria-hidden="true" /> Back
                  </button>
                  {!checked ? (
                    <button className="primary-button" type="button" disabled={!choiceId} onClick={() => setChecked(true)}>
                      Check decision <ArrowRight size={17} aria-hidden="true" />
                    </button>
                  ) : (
                    <button className="primary-button" type="button" onClick={nextStep}>
                      {stepIndex === steps.length - 1 ? "Complete journey" : "Continue"}
                      <ArrowRight size={17} aria-hidden="true" />
                    </button>
                  )}
                </div>
              </>
            ) : (
              <div className="completion-card">
                <div className="completion-icon"><CheckCircle2 size={34} aria-hidden="true" /></div>
                <p className="eyebrow">Journey complete</p>
                <h2>You walked part of {character.name}&apos;s path.</h2>
                <p>The route is more than forms. It affects when someone can travel, work, find accommodation, ask for help and plan a future.</p>
                <div className="takeaway-grid">
                  <article><strong>Permission matters</strong><span>Visa, residence and work permission are different legal steps.</span></article>
                  <article><strong>Rights still apply</strong><span>Migrant status does not cancel dignity, safety or workplace rights.</span></article>
                  <article><strong>Every case is individual</strong><span>Nationality or identity alone does not decide a protection claim.</span></article>
                </div>
                <div className="completion-actions">
                  <button className="primary-button" type="button" onClick={() => resetJourney()}>
                    <RotateCcw size={17} aria-hidden="true" /> Choose another person
                  </button>
                  <button className="text-link button-link" type="button" onClick={() => resetJourney("#official-guidance")}>
                    Official guidance <ArrowRight size={16} aria-hidden="true" />
                  </button>
                </div>
              </div>
            )}
          </section>
        </div>
        <footer className="journey-footer">
          <span>Fictional composite story. General information only. Rules and circumstances change.</span>
          <span>Copyright © 2026 Sam O&apos;Brien-Olinger. All rights reserved.</span>
          <a href="about/">About and ownership</a>
        </footer>
      </main>
    );
  }

  return (
    <main>
      <section className="hero-section" id="top">
        <nav className="home-nav" aria-label="Main navigation">
          <a className="brand-button" href="#top"><span className="brand-mark" aria-hidden="true">MN</span><span>My New Life in Ireland</span></a>
          <div className="nav-links">
            <a className="nav-link" href="about/">About</a>
            <a className="nav-link" href="#official-guidance">Official guidance</a>
          </div>
        </nav>
        <div className="hero-content">
          <p className="eyebrow">Walk a mile in my shoes</p>
          <h1>Nine people. Different routes. Decisions that shape a life.</h1>
          <p className="hero-copy">Choose a fictional character and make decisions with them as they navigate work, protection, accommodation and rights in Ireland.</p>
          <a className="primary-button hero-button" href="#choose-character">Choose a character <ArrowRight size={18} aria-hidden="true" /></a>
        </div>
      </section>

      <section className="orientation-strip" aria-label="Important distinction">
        <Info size={22} aria-hidden="true" />
        <p><strong>Know the difference:</strong> the International Protection Office examines protection applications. IPAS provides accommodation and basic supports. IPAS does not decide a person&apos;s claim.</p>
      </section>

      <section className="character-section" id="choose-character">
        <div className="section-heading">
          <div><p className="eyebrow">Start the experience</p><h2>Whose journey will you take?</h2></div>
          <p>These are fictional composite stories. Gender, sexuality, family and profession affect lived experience, but the law still examines each person&apos;s circumstances.</p>
        </div>

        <RadioGroup value={selectedId} onValueChange={setSelectedId} className="character-grid" aria-label="Choose a character">
          {characters.map((item) => {
            const Icon = routeMeta[item.route].icon;
            return (
              <label className={"character-card " + (selectedId === item.id ? "selected" : "")} key={item.id}>
                <RadioGroupItem value={item.id} id={item.id} className="sr-only" />
                <div className="card-topline">
                  <div className={"avatar avatar-" + item.tone}>{item.initials}</div>
                  <span className="route-tag"><Icon size={14} aria-hidden="true" />{routeMeta[item.route].short}</span>
                </div>
                <h3>{item.name}</h3>
                <p className="character-meta">{item.pronouns} · {item.origin}</p>
                <p className="character-role">{item.role}</p>
                <p className="character-summary">{item.summary}</p>
                <span className="card-action">Walk with {item.name.split(" ")[0]} <ArrowRight size={16} aria-hidden="true" /></span>
              </label>
            );
          })}
        </RadioGroup>

        <div className="start-bar" aria-live="polite">
          {character ? (
            <>
              <div><span className="mini-label">Selected journey</span><strong>{character.name} · {routeMeta[character.route].label}</strong></div>
              <button className="primary-button" type="button" onClick={beginJourney}>Begin the journey <ArrowRight size={18} aria-hidden="true" /></button>
            </>
          ) : <p>Select one of the nine characters to begin.</p>}
        </div>
      </section>

      <section className="guidance-section" id="official-guidance">
        <div className="guidance-intro">
          <p className="eyebrow">Check before you act</p>
          <h2>Use the official source for a real case.</h2>
          <p>This experience explains common decisions. It is not legal advice and cannot decide eligibility. Rules, salary thresholds, occupation lists and procedures can change.</p>
          <span>Content reviewed 29 August 2026.</span>
        </div>
        <div className="source-list">
          {officialSources.map(([label, href]) => (
            <a href={href} target="_blank" rel="noreferrer" key={href}><span>{label}</span><ExternalLink size={17} aria-hidden="true" /></a>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-footer-brand">
          <strong>My New Life in Ireland</strong>
          <span>Interactive migration pathways</span>
          <a href="about/">About and ownership</a>
        </div>
        <div className="site-footer-copy">
          <p>Designed to build understanding, not to replace professional advice.</p>
          <p>Copyright © 2026 Sam O&apos;Brien-Olinger. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
