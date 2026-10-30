<p align="center">
  <img src="public/images/harp-heart-logo.png" width="96" alt="Journeys to Ireland harp-heart logo">
</p>

<h1 align="center">Journeys to Ireland</h1>

<p align="center">
  <strong>Every journey to Ireland is different.</strong><br>
  Explore migration and settlement through fictional people, decisions and explanations.
</p>

<p align="center">
  <a href="https://samobrienolinger.github.io/My-New-Life-in-Ireland/#choose-character"><strong>Start a character journey →</strong></a>
  &nbsp; · &nbsp;
  <a href="https://samobrienolinger.github.io/My-New-Life-in-Ireland/resources/"><strong>Explore the Information Hub →</strong></a>
</p>

<p align="center">
  <a href="https://samobrienolinger.github.io/My-New-Life-in-Ireland/">
    <img src="public/images/ireland-rural-dublin-hero.webp" width="880" alt="Visit Journeys to Ireland: eight people walking beside a river, with rural fields on the left and Dublin landmarks on the right.">
  </a>
</p>

<p align="center">
  <strong>12 fictional characters</strong> &nbsp; · &nbsp; <strong>5 stages per journey</strong> &nbsp; · &nbsp; <strong>10 languages</strong><br>
  Decide. Adapt. Navigate. This is your new life in Ireland.
</p>

<p align="center">
  <a href="#using-the-project">Start here</a> ·
  <a href="https://samobrienolinger.github.io/My-New-Life-in-Ireland/search/">Search the site</a> ·
  <a href="https://samobrienolinger.github.io/My-New-Life-in-Ireland/fact-or-fiction/">Fact or Fiction</a> ·
  <a href="#how-a-journey-works">Journey guide</a> ·
  <a href="#meet-the-characters">Characters</a> ·
  <a href="#languages">🌐 Languages</a> ·
  <a href="#save-and-return">Save &amp; return</a> ·
  <a href="#learning-methodology-and-outcomes">Learning &amp; outcomes</a> ·
  <a href="#evidence-and-educational-approach">Evidence</a> ·
  <a href="#getting-started">Developers</a>
</p>

---

Follow a fictional person's circumstances from planning a move to building a life in Ireland. Make decisions, read the explanations and use the linked guidance to explore the questions behind each journey.

> [!NOTE]
> **An educational experience.** The characters and stories are fictional. The journeys and route finder cannot determine anyone's eligibility or legal status, and do not provide legal advice. Follow the official sources for current guidance about a real situation.

## Staggered lower-page entrances

The Journey Journal, Fact or Fiction teaser, Practical Information and Official Guidance sections use the dedicated `app/home-section-motion.ts` module introduced in PR #13. Each section enters once per mounted homepage, with a 700 ms fade and 14 px rise. Its content follows in 100 ms steps, with delays capped at 500 ms. The shared page-motion hook excludes these sections from its generic entrances, preventing competing animations.

Keyboard focus or pointer interaction immediately settles the relevant section. Reduced-motion preferences skip the entrances; switching to reduced motion cancels active animations and pending delays. Missing IntersectionObserver or Web Animations support leaves the content readable. The effect does not change layout, links, translations or saved journeys.

The server-rendered version includes the lower sections before JavaScript runs. The GitHub Pages version mounts the interactive app in the browser; its homepage has a separate `<noscript>` fallback with section summaries and direct guidance links. Journeys, translations, the evidence hub and saved journals still require JavaScript on GitHub Pages. The fallback cannot read or alter saved progress.

Regression coverage lives in `tests/browser/home-section-motion.spec.ts`, `tests/browser/home-no-script.spec.ts` and `tests/rendered-html.test.mjs`. Browser tests check the actual GitHub Pages build in Chromium, Firefox and WebKit; server-rendered checks run with `npm test`.

## Consistent site navigation

The same seven navigation links now appear in the mobile menu and every page footer: Home, Journeys, About, Information Hub, Fact or Fiction, Search and Official guidance. Footer links use the matching language labels from all ten supported languages, and remain within the GitHub Pages site path. The **Back to the top** button is available in every footer, including the active five-stage journey. A matching floating shortcut becomes visible after scrolling and hides when the footer control is in view. Either button scrolls to the top, returns keyboard focus to the main landmark and preserves the current journey. Reduced-motion preferences are respected. All links and controls have touch-friendly targets and responsive wrapping.

## Using the project

**Choose the way you want to explore.** You can start with a story or go straight to the information.

| Start here | What you can do |
| --- | --- |
| **[Follow a character](https://samobrienolinger.github.io/My-New-Life-in-Ireland/#choose-character)** | Meet one of twelve fictional people and consider the decisions in their five-stage journey. |
| **[Try the route finder](https://samobrienolinger.github.io/My-New-Life-in-Ireland/#route-finder)** | Filter characters by a broad reason for moving, such as work, study or family. This is an educational filter, not an eligibility checker. |
| **[Browse the Information Hub](https://samobrienolinger.github.io/My-New-Life-in-Ireland/resources/)** | Search official and specialist resources, or filter by topic to find a useful starting point. |
| **[Fact or Fiction](https://samobrienolinger.github.io/My-New-Life-in-Ireland/fact-or-fiction/)** | Reveal answers to ten commonly repeated claims; search by topic and check the original Irish sources. |
| **[Search the site](https://samobrienolinger.github.io/My-New-Life-in-Ireland/search/)** | Find a character, decision-stage explanation, myth-buster, Information Hub resource or learning topic with keywords. |

### Site-wide keyword search

The [Search page](https://samobrienolinger.github.io/My-New-Life-in-Ireland/search/) uses a compact, browser-local index generated from the site's actual characters, stage content, decision feedback, Fact or Fiction summaries, practical resource catalogue and About/learning sections. It supports multi-word terms, Unicode scripts, case and accent differences, result excerpts, highlighted matches, filters for the four sections and shareable `?q=` URLs. The homepage also offers a search field and every page links to Search in desktop and mobile navigation, including during a journey.

Results link to the relevant site content. Decision-stage matches open their character, with a clear note that the five stages must be completed in order; Fact or Fiction links expand the relevant evidence card, and Information Hub links open a filtered resource listing. The index does not send queries to any third-party service or read personal progress, answers or reflections. Results are from the site's own published content, not a general web search. Search interface copy is available in all ten site languages. Add `tests/browser/site-search.spec.ts` to browser regression coverage.

### Fact or Fiction: the evidence hub

The source-linked hub checks ten claims about international protection, welfare, housing, migrant workers, public perceptions and reporting racism. It provides **Fact**, **Fiction** and **Needs context** verdicts, topic filters, search, deep links and an accessible reveal pattern. Content is available in the same ten learning languages as the journeys; linked publications may be in English. It cites INAR, MRCI, ESRI, the Irish Refugee Council and official government/WRC guidance. The publication dates are distinguished from the **26 October 2026 source-link check**. Each entry explains its scope and limits: self-selected reports are not population statistics, and a 2024 study is not a current entitlement checker. These independent educational summaries are not endorsed by the sources and should be reviewed when laws or evidence change.

Static GitHub Pages entry: `github-pages/fact-or-fiction/`; Next route: `app/fact-or-fiction/`. Automated page checks: `tests/browser/facts.spec.ts`.

### How a journey works

**Plan → Prepare → Travel → Arrive → Build a life**

1. **Choose a person.** Browse the carousel or select **View all people**, then use **Walk with [name]** to start or resume directly. Selecting a profile also exposes the existing start, continue and restart controls.
2. **Read the situation.** Each chapter has an illustration and the character's circumstances. Choose **With guidance** to read the explanation first, or **Try first** to make a decision before opening it. The plain-language and detailed versions remain available.
3. **Make and check a decision.** Select a response, then choose **Check decision** to reveal the feedback and stated consequences.
4. **Learn why it matters.** Read the learning point, common misunderstanding, practical next step and supporting sources. **What if I chose differently?** compares another answer's explanation without changing your saved choice. **Useful words** provides a small glossary with source links.
5. **Continue through the five stages.** Select **Continue** after checking each decision. At the last stage, select **Complete journey**.
6. **Reflect and explore further.** The completed journey enters your local learning journal. Add a reflection, download a text summary, review the recap or revisit a decision. Guided comparisons pair Kwame with Elena and Mariam with Adama, using the existing story explanations and sources.

> [!TIP]
> **You can learn by reconsidering.** The chapter navigation and recap let you revisit explored decisions without resetting the attempt. Check a changed answer before completing the journey again. On a phone, open **About [name]** to revisit the character's circumstances and chapters. The five stages stay in sequence; your choices change the feedback and stated consequences.

The recap counts informed decisions in the exercise. **You do not need five correct answers to finish**, and the result does not predict immigration eligibility or a real-world outcome. Reflection questions are unscored and request no personal information.

**[See the visual journey guide on the About page →](https://samobrienolinger.github.io/My-New-Life-in-Ireland/about/#how-to-play)**

## Meet the characters

**Twelve fictional people. Different circumstances, reasons for moving and support needs.** Their graphic novel portraits stay with them from selection through the journey.

<p align="center">
  <img src="public/images/characters/priya.webp" width="96" alt="Priya, a fictional character illustrated in graphic novel style">
  <img src="public/images/characters/mateo.webp" width="96" alt="Mateo, a fictional character illustrated in graphic novel style">
  <img src="public/images/characters/noor.webp" width="96" alt="Noor, a fictional character illustrated in graphic novel style">
  <img src="public/images/characters/elena.webp" width="96" alt="Elena, a fictional character illustrated in graphic novel style">
  <img src="public/images/characters/kwame.webp" width="96" alt="Kwame, a fictional character illustrated in graphic novel style">
  <img src="public/images/characters/mariam.webp" width="96" alt="Mariam, a fictional character illustrated in graphic novel style">
</p>

<p align="center">
  <img src="public/images/characters/sofia.webp" width="96" alt="Sofia, a fictional character illustrated in graphic novel style">
  <img src="public/images/characters/farid.webp" width="96" alt="Farid, a fictional character illustrated in graphic novel style">
  <img src="public/images/characters/leila.webp" width="96" alt="Leila, a fictional character illustrated in graphic novel style">
  <img src="public/images/characters/adama.webp" width="96" alt="Adama, a fictional character illustrated in graphic novel style">
  <img src="public/images/characters/valentina.webp" width="96" alt="Valentina, a fictional character illustrated in graphic novel style">
  <img src="public/images/characters/river.webp" width="96" alt="River, a fictional character illustrated in graphic novel style">
</p>

<p align="center">
  <a href="https://samobrienolinger.github.io/My-New-Life-in-Ireland/#choose-character"><strong>Meet all 12 people and choose a journey →</strong></a>
</p>

The characters are fictional composites, not real-person testimony or representatives of every migrant's experience. Comparing their journeys is an opportunity to examine how personal circumstances and institutional requirements shape the available options. Choices do not imply complete control over migration outcomes.

## What you can explore

| Area | Questions and resources |
| --- | --- |
| **Migration pathways** | Work, study, family, EU free movement and international protection, with different circumstances and support needs. |
| **Planning and arrival** | Preparing to move, residence, registration and finding the relevant official guidance. |
| **Building a life** | Housing, healthcare, everyday services, work, social welfare and other settlement questions. |
| **Practical next steps** | Professional registration in Priya's journey and tax setup in relevant work journeys, kept distinct from immigration permission. |
| **Further learning** | Decision-specific sources, reflection prompts and relevant Citizens Information guides after each completed journey. |

The **Information Hub contains 40 resources**, including 14 Citizens Information moving guides. Use its search and topic filters, or begin with the [Moving to Ireland overview](https://www.citizensinformation.ie/en/moving-country/moving-to-ireland/). Returning-home guidance addresses Irish citizens; it is not an additional fictional character route.

**[Open the Information Hub →](https://samobrienolinger.github.io/My-New-Life-in-Ireland/resources/)**

<a name="language-and-reading"></a>

## Languages

Choose a language using the site's language control. Scenario text, answers and learning explanations are available in **ten languages**.

| Support | Available options |
| --- | --- |
| **Language** | English · Gaeilge · Arabic · Mandarin Chinese · French · Portuguese · Spanish · Dutch · Farsi/Persian · isiXhosa |
| **Reading** | **Plain-language version** or **Detailed version** for the rule explanation. |
| **Audio** | **Listen**, **Pause**, **Resume** and **Stop** control narration. **Audio options** adjusts speed and includes choices or checked feedback. Guidance is narrated when revealed or after the decision is checked. |
| **Useful words** | Short explanations of permission, registration, employment permits and PPS numbers, with links to official guidance. |

Arabic and Farsi use right-to-left layouts. Changing language keeps your chosen answers and decision results. Translations are learning aids, not official translations of the underlying guidance. Available voices and speech support vary by browser and language.

The interface includes keyboard controls, visible focus, stage-heading focus and feedback announcements. Motion effects respect reduced-motion preferences. Automated checks do not replace fluent-speaker review or manual accessibility testing, and do not certify the experience for every person or device.

## Save and return

**Unfinished journeys can be saved in your current browser, separately for each character.**

| When you… | What happens |
| --- | --- |
| **Return to an unfinished journey** | **Continue with [name]** or the character's **Walk with [name]** card restores the stage, answers, checked decisions, answer order, reading mode and guidance preference. |
| **Try another character** | Their progress is separate; changing characters does not delete the other unfinished attempt. |
| **Restart this journey** | Replaces that character's unfinished attempt with a fresh start. |
| **Complete a journey** | Removes the unfinished save, retains an **Explored** badge and saves the latest completed decisions for that person in the learning journal. |
| **Write a journal reflection** | Use **Save reflection** to keep the note in this browser. A downloaded summary includes the current text, including any unsaved draft. |
| **Remove a journal entry** | An inline confirmation removes that completed entry and note; other characters' unfinished saves remain available. |
| **Return after a story update** | Your reflection and completion date remain available. The journal requests a fresh journey before displaying updated decision explanations. |

Progress stays in that browser and does not automatically synchronise across devices. Clearing the site's browser data removes its local saves. If saving is unavailable, the page explains the limitation and remains usable while it stays open.

---

## Learning methodology and outcomes

**Make a decision. Understand the explanation. Compare circumstances. Check the source.**

Journeys to Ireland uses **guided, scenario-based learning**. Fictional cases give information a human context; visible rules support decisions; feedback explains why a choice matters. Recaps, reflection prompts, alternative characters and source links provide opportunities to reconsider assumptions and investigate further.

The design aligns with research on [explanatory feedback](https://doi.org/10.3102/0034654314564881) and provides material for [structured case comparison](https://doi.org/10.1080/00461520.2013.775712). A facilitator or worksheet can extend the experience into a lesson that makes reasoning, comparison and source evaluation explicit.

> [!NOTE]
> **A pedagogical rationale, with outcomes still to evaluate.** The studies below concern other interventions and audiences. They support the educational approach but do not establish this website's effectiveness, retention, transfer, empathy gains or changes in attitudes and behaviour.

### From a journey to a structured lesson

| Phase | In the website | Suggested lesson activity |
| --- | --- | --- |
| **Orient** | Choose a fictional character and read their circumstances. | Identify the immediate issue and set a learning goal. |
| **Decide** | Read the scene and available rules, then choose an answer. | Explain the reason **before** checking. |
| **Examine feedback** | Read the explanation and revisit a decision if useful. | Explain which distinction or misunderstanding became clearer. |
| **Compare** | Explore another character. | Identify what stays the same and which circumstances change the guidance. |
| **Debrief and investigate** | Use the reflection prompts and source links. | Discuss personal action, institutional barriers and support; evaluate a relevant source. |
| **Apply** | Use the exercise as a starting point. | Analyse an unfamiliar fictional case and identify what still needs checking. |

The five stages follow a fixed sequence. Choices change the feedback and stated consequences; they do not create different subsequent story branches. Rules remain visible, so the activity supports **application with guidance**. Written reasoning, structured comparison and fresh-case assessment are proposed lesson activities, not requirements already enforced by the interface. See [journey interaction](app/page.tsx) and [learning guidance](app/journey-learning.ts).

### Intended learning outcomes

After the relevant activities, learners should be able to demonstrate the following. These are **intended outcomes**, not measured results from the website.

| Learners should be able to… | Evidence to look for |
| --- | --- |
| **Distinguish relevant pathways and processes** | Explain which circumstances matter and where permissions, procedures or services need separate checks. |
| **Justify a decision and revise a misunderstanding** | Give an initial reason, then explain what the feedback clarified. |
| **Compare circumstances without overgeneralising** | Identify a meaningful similarity and consequential differences between two characters. |
| **Examine agency, barriers and support** | Identify an available action, a constraint outside the person's control and a relevant institutional response. |
| **Evaluate relevant information** | Identify a source's publisher, scope, currency information and relevant passage, while recognising remaining uncertainty. |
| **Apply a principle to a fresh situation** | Explain a response to an unfamiliar vignette and identify missing information or a needed source check. |
| **Recognise the exercise's limits** | Explain why a fictional case cannot determine a real person's status or outcome, and identify an appropriate next question or source. |

**[Read the shorter overview on the About page →](https://samobrienolinger.github.io/My-New-Life-in-Ireland/about/#learning-methodology)**

<details>
<summary><strong>Explore three teaching examples: work routes, recruitment and access</strong></summary>

These are proposed teaching activities using the [existing fictional scenarios](app/journey-data.ts), rather than activities already evaluated with learners.

#### Kwame and Elena: identify the circumstance that changes the guidance

Kwame's story involves an engineering job offer and an employer's assumption that the offer is sufficient. Elena's story involves a recruiter selling an employment permit that the case explains she does not need under her EU route. Both seek work, but the guidance is not interchangeable.

Ask learners:

- What practical aim do they share?
- Which stated circumstance changes the relevant guidance?
- Which concerns, such as checking the employer, remain relevant to both?
- What else would you need to know before applying either example to another person?

**Look for:** an explanation of the route-relevant distinction and a meaningful similarity, with limits to the comparison. Follow with a new vignette that changes one relevant circumstance and ask whether the earlier reasoning still applies.

#### Mateo: investigate a recruitment claim

Mateo faces a recruiter's demand for money and pressure to travel quickly. Choose a claim that needs checking, then use a linked source or the Information Hub to identify its publisher, intended scope, available update information and the passage relevant to the question. For an unfamiliar website, model checking the organisation through independent sources.

**Look for:** a clear connection between the claim and the evidence, plus an explanation of what remains unanswered. A copied URL or a click alone does not demonstrate source evaluation. Discuss how urgency and unequal bargaining power can affect decisions.

#### Adama: separate individual action from institutional responsibility

Adama's cases include accommodation she cannot use safely, barriers to interview participation and needs spread across several services. Ask learners to map **an action available to Adama**, **a barrier outside her control** and **a service or institutional response**.

Ask: What is the difference between being offered a service and being able to use it? Which changes require another actor? How would the situation change if access had been planned from the start?

**Look for:** recognition of both possible action and structural constraint, without attributing the entire outcome to Adama's choices. A fictional exercise does not reproduce a person's lived experience.

</details>

<details>
<summary><strong>Read the supporting research and its limits</strong></summary>

#### Feedback, comparison and supported learning

- **Explanatory feedback.** Van der Kleij, Feskens and Eggen's **2015** meta-analysis found stronger learning effects for feedback containing explanations than for correctness-only feedback or simply supplying the answer, particularly for higher-order outcomes. This supports the site's explanations and prompts to articulate what has been learned. [Effects of feedback in a computer-based learning environment](https://doi.org/10.3102/0034654314564881).
- **Case comparison.** Alfieri, Nokes-Malach and Schunn's **2013** meta-analysis found that explicit comparison activities commonly improved learning relative to several alternative approaches. This supports focused questions about consequential similarities and differences; offering another character alone does not establish that comparison occurred. [Learning through case comparisons](https://doi.org/10.1080/00461520.2013.775712).
- **Accompanying instruction.** Wouters and colleagues' **2013** meta-analysis found advantages for learning and retention, but no statistically significant overall motivation advantage over conventional instruction. Larger learning advantages were associated with supplementary instruction, repeated sessions and group work. This supports using the site within a broader lesson; this particular format was not tested. [Cognitive and motivational effects of serious games](https://doi.org/10.1037/a0031311).

#### Migration education and information literacy

- **Policy and personal narratives.** Wierszewski and O'Dell's **2025** teaching study combined policy simulation, refugee narratives, story exchange and policy revision. Student work, surveys and instructor observations indicated positive educational outcomes. It provides a relevant example of connecting institutions with individual circumstances, while its multi-part course cannot establish the effect of this website. [Teaching refugee and migrant policy and experiences using simulation and story](https://doi.org/10.20343/teachlearninqu.13.21).
- **Source evaluation.** Breakstone and colleagues' **2021** study reported improvement after explicit online instruction in lateral reading: leaving an unfamiliar site to investigate it through other sources. Its pre/post design had no control group. The practical lesson is to model and assess source checking; authoritative links alone are not equivalent to that activity. [Lateral reading in an online course](https://doi.org/10.37016/mr-2020-56).

#### Perspective-taking and attitudes: mixed findings

Cross, Atherton and Stiff's **2025** study of *Path Out* reported more favourable explicit attitude and empathy measures than a comparison game; the implicit-attitude difference was not statistically significant. [A path out](https://doi.org/10.3390/bs15050583).

Van 't Riet and colleagues' **2018** experiments with *Against All Odds* found no substantial advantage in willingness to help relative to comparison conditions. [Immersion, identification and willingness to help](https://doi.org/10.1080/01973533.2018.1459301).

These studies concern other games. They justify investigating attitudes rather than assuming improvement. Confidence, enjoyment, empathy and supportive behaviour should be measured separately from understanding and decision reasoning.

</details>

<details>
<summary><strong>Plan a facilitated session and assess learning</strong></summary>

#### An illustrative 45-minute session

These are proposed teaching allocations, **not measured completion times**. Adjust for reading, language, discussion and access needs. Use selected stages for the second-character comparison.

| Time | Activity |
| --- | --- |
| 0–4 minutes | Introduce the fictional scope and lesson goal, without requiring personal disclosure. |
| 4–8 minutes | Use two short baseline questions about the selected learning goals. |
| 8–20 minutes | Complete one journey, giving reasons before checking decisions. |
| 20–28 minutes | Compare relevant stages from another character. |
| 28–36 minutes | Use the recap and reflection prompts to discuss changed reasoning, barriers and support. |
| 36–42 minutes | Complete a source-check task and a brief unfamiliar vignette. |
| 42–45 minutes | Exit response: one distinction learned, one uncertainty and one source to consult. |

A useful debrief connects **a case, a general principle, a boundary or exception, and a relevant source**. For independent use, a worksheet can carry the same prompts.

#### Evaluating the intended outcomes

For an initial pilot, prioritise decision reasoning, comparison and source selection. Agree tasks and success criteria in advance, and involve relevant specialists, lived-experience contributors and intended learners in reviewing clarity, representation and relevance.

- Use comparable baseline and post-activity tasks with different surface details. If supported reasoning is the goal, allow sources in both.
- Assess explanations as well as selections, using criteria for accuracy, reasoning, source relevance and recognition of uncertainty.
- Use unfamiliar cases to assess application beyond the original questions. A later task is needed when making claims about retention.
- For stronger effectiveness claims, compare with equivalent content and learning time in a static guide, with random allocation where feasible.
- Report the participants, task conditions, prior knowledge and missing responses. If a facilitator and worksheet form part of the lesson, evaluate that complete intervention.

The current score records supported performance on the exercise's questions. Rules and explanations are available, and revising answers changes the score. It should not be the sole measure of prior knowledge, retained understanding or application elsewhere.

</details>

## Evidence and educational approach

**Stories introduce the questions; sources help you investigate them.** Each journey connects fictional decisions with official or specialist guidance. Source information identifies the publisher, subject and recorded consultation date where available.

A consultation date records a limited retrieval and subject check. It is **not** a publisher update date, a legal review or a guarantee that the information remains current. Some linked Citizens Information pages could not be fully retrieved during the documented check; the source record explains those limits.

The project offers opportunities for discussion, comparison and information literacy. Legal/content review, lived-experience input and learner evaluation remain necessary to establish accuracy, relevance and educational benefit. Improved attitudes or behaviour are not claimed as measured outcomes.

**[Read about the project and editorial approach](https://samobrienolinger.github.io/My-New-Life-in-Ireland/about/)** · **[Inspect the source record](app/source-info.ts)**

<details>
<summary><strong>Read the source-review details, educational rationale and related projects</strong></summary>

### Source consultation and editorial scope

`app/source-info.ts` records each source's publisher, subject, explicit consultation date and the scope of the check. A date means the linked page was retrieved and its publisher and relevant subject matter were checked. It is not a publisher update date, a legal review or a guarantee that all statements remain current. A blocked or unsuccessful retrieval receives no new consultation date; an unknown URL cannot inherit a date from another page on the same domain. Dates are maintained deliberately and never advance automatically during a build or deployment.

The 18 October 2026 check identified a more suitable current WRC employment-rights overview and a more direct MRCI information-and-support destination. No new salary thresholds, time-limit figures or individual eligibility decisions were introduced. The About page explains the distinction between fictional learning, current source guidance, translations and real-person testimony.

The Citizens Information additions of 20 October 2026 use production URLs, titles and topic scopes identified in indexed Citizens Information results. Automated page requests returned HTTP 403, so the full page bodies were not reviewed and no consultation date is claimed. The short descriptions signpost the linked guidance; they do not reproduce detailed eligibility rules. The keyed catalogue and journey mapping are in `app/moving-guide.ts`, with the verification limits recorded in `app/source-info.ts`.

### Educational source links

- [Immigration Service Delivery](https://www.irishimmigration.ie/).
- [Employment Permits](https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/).
- [International Protection Office](https://ipo.irishimmigration.ie/).
- [Irish Refugee Council — Information Hub](https://www.irishrefugeecouncil.ie/get-help/information-hub/).
- [Workplace Relations Commission — employment rights](https://www.workplacerelations.ie/en/what_you_should_know/).

### Distinctive proposition and educational contribution

> **Explore why every journey to Ireland is different through fictional decisions that connect human circumstances with Irish migration pathways, rights and authoritative sources.**

The strongest proposition is the **combination of human stories, contrasting migration routes and source-linked learning within one Irish setting**. Twelve fictional characters make different circumstances visible; choices and explanations connect those circumstances to work, study, family, EU free movement and international protection. The route finder and Information Hub provide alternative ways into the subject alongside the character journeys.

#### A potentially useful educational combination

| What the site brings together | Potential educational contribution |
| --- | --- |
| Fictional characters, choices and immediate explanations | Encourage learners to examine how circumstances shape the options available, rather than treating migration as one uniform experience. |
| Multiple migration routes within Ireland | Support comparison between different pathways and help distinguish migration generally from seeking international protection. |
| Journeys through departure, arrival and settlement, alongside a route finder and Information Hub | Connect the human experience of moving with the practical questions that arise at different stages. |
| Narrative learning and links to official and specialist information | Give learners a route from an engaging example to the underlying guidance, while keeping fictional learning separate from real eligibility decisions. |

**Its distinctiveness lies in joining narrative understanding with practical, Ireland-specific information literacy.** A story can make a pathway easier to understand; source links allow the learner to inspect the information behind the explanation. Comparing characters within the same national context creates an opportunity to explore how overlapping personal circumstances and institutional requirements produce different journeys. Choices do not imply that people have complete control over migration outcomes.

#### Similar product: ODISSEU

[**ODISSEU — interactive migration storytelling game**](https://odisseu-project.eu/en/online-game) is a European educational project offering three character journeys for secondary students. Players make choices that influence stories of forced migration, from leaving a country of origin to reaching a country of asylum. It is a close comparator for the character-and-choice learning method.

Journeys to Ireland's distinguishing proposition is its **combination of several migration routes, an Ireland-specific setting, settlement learning and a route finder/Information Hub with authoritative signposting**. The contribution lies not in inventing migration storytelling but in connecting that method to a comparative understanding of Irish pathways and the sources needed to explore them responsibly.

#### Contribution within the wider learning portfolio

Alongside [Saggart & Citywest Together](https://samobrienolinger.github.io/saggart-and-citywest-together/), which connects local knowledge and community supports, and [Stopped: Both Sides](https://samobrienolinger.github.io/stopped-both-sides/), which explores public/Garda encounters, this site supplies the **migration-and-settlement learning layer**. Together they offer a potentially useful combination of migration understanding, local belonging and rights literacy. They remain independent resources for different audiences, not one eligibility or case-management system.

Potential contributions include facilitated discussion, a more nuanced comparison of migration experiences and a better understanding of when to consult an authoritative source. Legal/content review, lived-experience input and learner evaluation are needed to establish accuracy, relevance and educational benefit; no improvement in attitudes or behaviour is claimed as a measured outcome. The comparator description was checked against its official website on **14 September 2026**; no affiliation, endorsement or exhaustive claim of uniqueness is implied.

</details>

## Getting started

**For developers and maintainers.** Built with **React, TypeScript and Vite**, with a separate static build for GitHub Pages.

To use the learning experience, [visit the live website](https://samobrienolinger.github.io/My-New-Life-in-Ireland/). Local setup, test commands and publishing details are below. Repository access and any proposed reuse remain subject to [LICENSE.md](LICENSE.md).

<details>
<summary><strong>Open local setup, repository guide, checks and deployment</strong></summary>

### Local setup

Requires Git, Node.js `>=22.13.0`, npm and a Bash-compatible shell. On Windows, use WSL for the shell scripts and POSIX-style environment assignments in the package commands.

```bash
git clone https://github.com/SamOBrienOlinger/My-New-Life-in-Ireland.git
cd My-New-Life-in-Ireland
npm ci
npm run dev
```

Open the local address printed by the Vite development server.

### Repository guide

| Path | Purpose |
| --- | --- |
| [app/](app/) | Application routes and shared content |
| [public/](public/) | Static files served with the app |
| [tests/](tests/) | Automated test source |
| [github-pages/](github-pages/) | Static GitHub Pages entry points |
| [.github/workflows/](.github/workflows/) | Build, test or deployment workflows |
| [package.json](package.json) | Package dependencies and available commands |

### Checks and review

Use Node.js `>=22.13.0`, npm and a Bash-compatible shell for the commands below. Install the package dependencies before running build, test or lint commands.

| Command | Purpose |
| --- | --- |
| `npm run build` | Create the configured application build |
| `npm run build:pages` | Create the GitHub Pages build |
| `npm run typecheck:pages` | Check types for the static website and browser tests |
| `npm run test:journeys` | Check all translated scenarios and resources, saved-state validation and answer ordering |
| `npm run test:browser` | Build Pages and check the main interactions in Chromium, Firefox and WebKit |
| `npm test` | Build with Vinext, then run the existing Node test suite |
| `npm run lint` | Run the configured linter |

`npm run build` and `npm test` require GNU `timeout`. Linux provides it through GNU coreutils. On macOS, install GNU coreutils and make its `timeout` command available on `PATH` before running either command. The separate `npm run build:pages` command does not use that build wrapper.

For a manual review, follow the main user journey, check keyboard navigation and narrow-screen layouts, and inspect the browser console for missing assets or failed requests.

Before the first browser-test run, install the test browsers with `npx playwright install --with-deps chromium firefox webkit`. The suite covers hub visits, refresh and resume, independent character saves, restarting, completion, language changes, blocked storage, keyboard focus and Arabic/Farsi layouts at 320px and 390px. The Pages workflow runs these checks on pull requests and before deployment.

#### Responsive layout checks

After building Pages, run `npx playwright test tests/browser/responsive.spec.ts` for the focused responsive suite, or `npm run test:browser` for the complete regression suite. The responsive checks run in Chromium, Firefox and WebKit and cover:

- Home, About and Information Hub pages, expanded decisions, completed journals and revealed comparisons at 16 viewport sizes from 320px to 2560px wide. The matrix includes both sides of the 760px, 900px and 1024px layout changes, plus short landscape views.
- Component bounds and readable text, alongside document width, so hiding page overflow cannot conceal a broken card or control. The carousel and topic filters retain their intentional horizontal scrolling, with checks that their offscreen items remain reachable.
- 200% root text size, including a 320px layout, Arabic and Farsi right-to-left layouts, and longer Dutch labels. Narrow viewport checks also exercise the reflow needed when browser zoom reduces the available CSS width.
- Primary controls with at least 44px touch targets, menu scrolling, Escape and focus recovery when crossing into desktop navigation, and carousel position after rotation or switching views.
- Preserved answers, answer ordering and unsaved journal text while the viewport changes.

The layouts use content wrapping and intrinsic grid sizes as well as breakpoints. Below 901px, the character context becomes an expandable panel above the journey. Short viewports use normal page scrolling instead of sticky journey actions. Native selectors and notes remain readable at phone sizes, and navigation respects device safe areas.

These are browser-engine regression checks. Physical-device testing remains useful for operating-system controls, on-screen keyboards and browser chrome.

### Journey content and progress

The English source remains in `app/journey-data.ts`. Each non-English catalog in `app/journey-translations/` uses `route:canonical English stage` keys and the original choice IDs. Translate the individual scene, rules, answer labels, feedback and consequences; preserve source URLs, correctness and qualified wording. The catalog tests check all 40 stages and 24 hub descriptions per language. Languages load on demand. Source comparison and automated coverage checks complement fluent-speaker review of wording.

The additional learning copy in `app/learning-copy/` follows the same ten-language coverage and loads alongside each selected journey language. `app/journey-learning.ts` maps every route and stage to a short explanation and next step. Recaps use checked answer IDs, so changing language or answer order does not change the result. Revisit controls restore the selected stage without resetting the attempt; a changed answer must be checked before returning to the recap. Reflection prompts are unscored and request no personal information. Scores describe choices in the exercise, not immigration eligibility or the likelihood of a real outcome.

The Information Hub includes 40 resources: the 24 original sources, NMBI registration and Revenue's first-job tax guide, plus 14 Citizens Information guides on preparing a move, residence, family, registration, work, study, everyday services, housing, healthcare, social welfare, retirement and returning to Ireland. A prominent moving-guide introduction links to the [Moving to Ireland overview](https://www.citizensinformation.ie/en/moving-country/moving-to-ireland/) and its before-travel checklist. All additions have titles and descriptions in the ten supported languages and participate in the existing search and topic filters. The arrival filter is labelled “Planning and arrival” to include preparation before travelling.

Priya's journey surfaces professional registration, while relevant work journeys surface tax setup. These practical tasks are separate from immigration permission. Each completed journey also offers a relevant Citizens Information guide in a separate follow-on section, preserving the decision-specific sources and practical stage guidance. Returning-home guidance explicitly addresses Irish citizens; it is not a new fictional character route.

An attempt keeps its answer order, selected answers, checked stages, current stage and reading mode. Correct-answer positions are balanced across the five stages and randomized when an attempt starts. A resume preserves that order; an explicit restart clears that character's current attempt. Completion removes the unfinished save and retains the explored badge. Saving uses browser storage, so progress stays in that browser and can be removed by clearing its site data. If saving is unavailable, the current page remains usable and explains the limitation.

The progress envelope is versioned in `app/journey-progress.ts`. If a future content change alters what existing answer IDs mean, revise the stored-progress version or add a migration before accepting old answers against the new content.

### Motion and reading continuity

`app/use-page-motion.ts` adds small, once-only entrances to selected homepage and recap content. Content is fully visible by default, including when animation or intersection observation is unavailable. Stable content IDs prevent replays when changing language or re-filtering characters. Keyboard focus or a pointer press settles an active card immediately. Stage text uses a brief fade while the heading, answers and navigation controls remain stationary; the existing immediate focus and scrolling behavior is retained. Reduced-motion preferences skip these entrances, cancel them if the preference changes, and remove CSS animation and delay. Directional button cues preserve RTL icon mirroring.

Generate fresh results from the revision you are working on; historical test reports describe earlier runs.

### Deployment

GitHub Pages uses `npm run build:pages`, [vite.pages.config.ts](vite.pages.config.ts) and [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml). Home, About and Resources have static entry points under [github-pages/](github-pages/); output goes to `dist-pages/`.

`npm run build` is the separate Vinext/Sites build. Its wrapper requires a shell environment with GNU `timeout`; it is not interchangeable with the static Pages build.

</details>

### Find the relevant file

| You want to understand… | Start with… |
| --- | --- |
| **Characters, scenarios and choices** | [Journey data](app/journey-data.ts) and [the main experience](app/page.tsx) |
| **Translations and learning explanations** | [Journey translations](app/journey-translations/), [learning copy](app/learning-copy/) and [stage learning map](app/journey-learning.ts) |
| **Saving and resuming** | [Journey progress](app/journey-progress.ts) |
| **Information Hub and source provenance** | [Resources page](app/resources/page.tsx), [moving guides](app/moving-guide.ts) and [source records](app/source-info.ts) |
| **Artwork and attribution** | [Character portrait production notes](public/images/characters/README.md) |

## Support

**[Report a problem or suggest an improvement →](https://github.com/SamOBrienOlinger/My-New-Life-in-Ireland/issues)**

Include the affected page or command, steps to reproduce and expected behaviour. For a display or language issue, include the browser, device and selected language. Repository maintained in [Sam O’Brien-Olinger's GitHub account](https://github.com/SamOBrienOlinger). Any proposed reuse or redistribution remains subject to the licence terms below.

## Credits and reuse

Created by **Sam O'Brien-Olinger**.

<details>
<summary><strong>Artwork, technology and the original project record</strong></summary>

The project uses React, Next.js/Vinext, Vite, Tailwind CSS, shadcn UI primitives and Lucide icons. Third-party software retains its own terms; the repository's ownership statement below applies as written.

The character portraits were generated with Create Image. The initial artwork used visual references from The Irish Times’ **New to the Parish** series; the current illustrations substantially redesign the faces, hair and distinguishing details, with bold ink lines and flat graphic novel shading to reduce resemblance to those references. The game’s characters and narratives are fictional. See [portrait references and production notes](public/images/characters/README.md).

Design decisions, original feature notes, historical testing evidence and detailed acknowledgements remain available in the preserved project record:

- [README.md · original project record](https://github.com/SamOBrienOlinger/My-New-Life-in-Ireland/blob/5dd9d57ca44dbffa7fea799d961f856331f3818c/README.md)

</details>

Copyright © 2026 Sam O'Brien-Olinger. All rights reserved.

Journeys to Ireland™ and its original source code, written content,
characters, fictional narratives, decision pathways, educational materials,
artwork, visual identity and interface designs are the intellectual property of
Sam O'Brien-Olinger, except where third-party material is separately identified.

This repository is publicly accessible for viewing and portfolio demonstration
purposes only. Public availability does not make the project open source and
does not grant permission to reuse it.

No permission is granted to copy, reproduce, modify, adapt, translate, publish,
distribute, sublicense, sell, commercially exploit, deploy, host, publicly
display or create derivative works from this project, in whole or in part,
without the copyright owner's prior written permission.

See [LICENSE.md](LICENSE.md) for the complete terms.

---

<p align="center">
  <strong>Explore another person's circumstances. Keep asking questions.</strong><br>
  <a href="https://samobrienolinger.github.io/My-New-Life-in-Ireland/#choose-character">Choose a character</a> ·
  <a href="https://samobrienolinger.github.io/My-New-Life-in-Ireland/resources/">Visit the Information Hub</a> ·
  <a href="#journeys-to-ireland">Back to top ↑</a>
</p>
