# A New Life in Ireland

An interactive educational website that explores migration and settlement in Ireland through decisions made alongside twelve fictional characters.

**React · TypeScript · Vite**

[Visit the website](https://samobrienolinger.github.io/My-New-Life-in-Ireland/) · [Distinctive proposition](#distinctive-proposition-and-educational-contribution) · [Getting started](#getting-started) · [Repository guide](#repository-guide) · [Checks](#checks-and-review) · [Credits](#credits-and-reuse)

<img src="public/images/harp-heart-logo.png" alt="A New Life in Ireland harp-heart logo" width="160">

## Distinctive proposition and educational contribution

> **Explore why every journey to Ireland is different through fictional decisions that connect human circumstances with Irish migration pathways, rights and authoritative sources.**

The strongest proposition is the **combination of human stories, contrasting migration routes and source-linked learning within one Irish setting**. Twelve fictional characters make different circumstances visible; choices and explanations connect those circumstances to work, study, family, EU free movement and international protection. The route finder and Information Hub provide alternative ways into the subject alongside the character journeys.

### A potentially useful educational combination

| What the site brings together | Potential educational contribution |
| --- | --- |
| Fictional characters, choices and immediate explanations | Encourage learners to examine how circumstances shape the options available, rather than treating migration as one uniform experience. |
| Multiple migration routes within Ireland | Support comparison between different pathways and help distinguish migration generally from seeking international protection. |
| Journeys through departure, arrival and settlement, alongside a route finder and Information Hub | Connect the human experience of moving with the practical questions that arise at different stages. |
| Narrative learning and links to official and specialist information | Give learners a route from an engaging example to the underlying guidance, while keeping fictional learning separate from real eligibility decisions. |

**Its distinctiveness lies in joining narrative understanding with practical, Ireland-specific information literacy.** A story can make a pathway easier to understand; source links allow the learner to inspect the information behind the explanation. Comparing characters within the same national context creates an opportunity to explore how overlapping personal circumstances and institutional requirements produce different journeys. Choices do not imply that people have complete control over migration outcomes.

### Similar product: ODISSEU

[**ODISSEU — interactive migration storytelling game**](https://odisseu-project.eu/en/online-game) is a European educational project offering three character journeys for secondary students. Players make choices that influence stories of forced migration, from leaving a country of origin to reaching a country of asylum. It is a close comparator for the character-and-choice learning method.

A New Life in Ireland's distinguishing proposition is its **combination of several migration routes, an Ireland-specific setting, settlement learning and a route finder/Information Hub with authoritative signposting**. The contribution lies not in inventing migration storytelling but in connecting that method to a comparative understanding of Irish pathways and the sources needed to explore them responsibly.

### Contribution within the wider learning portfolio

Alongside [Saggart & Citywest Together](https://samobrienolinger.github.io/saggart-and-citywest-together/), which connects local knowledge and community supports, and [Stopped: Both Sides](https://samobrienolinger.github.io/stopped-both-sides/), which explores public/Garda encounters, this site supplies the **migration-and-settlement learning layer**. Together they offer a potentially useful combination of migration understanding, local belonging and rights literacy. They remain independent resources for different audiences, not one eligibility or case-management system.

Potential contributions include facilitated discussion, a more nuanced comparison of migration experiences and a better understanding of when to consult an authoritative source. Legal/content review, lived-experience input and learner evaluation are needed to establish accuracy, relevance and educational benefit; no improvement in attitudes or behaviour is claimed as a measured outcome. The comparator description was checked against its official website on **14 September 2026**; no affiliation, endorsement or exhaustive claim of uniqueness is implied.

## What you can explore

- Character journeys covering work, study, family, EU free movement and international protection.
- Twelve strongly stylised graphic novel portraits with redesigned fictional faces, carried from character selection through each journey.
- Immediate explanations, common misunderstandings and practical next steps linked to the relevant guidance.
- A completion recap based on the character and the learner's actual decisions, with answers to revisit and relevant next resources.
- Reflection questions about the character's circumstances, support needs and the limits of individual choice.
- A route finder and an Information Hub.
- Multilingual text, keyboard controls and responsive layouts.
- Specific scenario and answer translations in all ten selectable languages.
- Unfinished journeys saved on the current browser, with separate progress for each character.
- Source publishers, subject areas and recorded consultation dates beside guidance, plus an explanation of the editorial approach on About.

## Using the project

1. Explore what brings a character to Ireland, or use the route finder.
2. Choose one of the twelve fictional people and work through the decisions.
3. Read the explanation after each choice and compare the circumstances that shape different journeys.
4. Use the Information Hub and source links to continue learning.

> **Project notes:** General educational information only. The fictional journeys cannot determine anyone’s eligibility or legal status; follow the official sources for current guidance.

## Getting started

Requires Git, Node.js `>=22.13.0`, npm and a Bash-compatible shell. On Windows, use WSL for the shell scripts and POSIX-style environment assignments in the package commands.

```bash
git clone https://github.com/SamOBrienOlinger/My-New-Life-in-Ireland.git
cd My-New-Life-in-Ireland
npm ci
npm run dev
```

Open the local address printed by the Vite development server.

## Repository guide

| Path | Purpose |
| --- | --- |
| [app/](app/) | Application routes and shared content |
| [public/](public/) | Static files served with the app |
| [tests/](tests/) | Automated test source |
| [github-pages/](github-pages/) | Static GitHub Pages entry points |
| [.github/workflows/](.github/workflows/) | Build, test or deployment workflows |
| [package.json](package.json) | Package dependencies and available commands |

## Checks and review

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

### Journey content and progress

The English source remains in `app/journey-data.ts`. Each non-English catalog in `app/journey-translations/` uses `route:canonical English stage` keys and the original choice IDs. Translate the individual scene, rules, answer labels, feedback and consequences; preserve source URLs, correctness and qualified wording. The catalog tests check all 40 stages and 24 hub descriptions per language. Languages load on demand. Source comparison and automated coverage checks complement fluent-speaker review of wording.

The additional learning copy in `app/learning-copy/` follows the same ten-language coverage and loads alongside each selected journey language. `app/journey-learning.ts` maps every route and stage to a short explanation and next step. Recaps use checked answer IDs, so changing language or answer order does not change the result. Revisit controls restore the selected stage without resetting the attempt; a changed answer must be checked before returning to the recap. Reflection prompts are unscored and request no personal information. Scores describe choices in the exercise, not immigration eligibility or the likelihood of a real outcome.

The Information Hub includes the 24 original resources plus two individually translated additions: NMBI registration for nurses and midwives qualified outside the EU, and Revenue's first-job tax-registration guidance. Priya's journey surfaces professional registration, while relevant work journeys surface tax setup. These practical tasks are separate from immigration permission. New resources participate in the same search and topic filters.

### Source consultation and editorial scope

`app/source-info.ts` records each source's publisher, subject, explicit consultation date and the scope of the check. A date means the linked page was retrieved and its publisher and relevant subject matter were checked. It is not a publisher update date, a legal review or a guarantee that all statements remain current. A blocked or unsuccessful retrieval receives no new consultation date; an unknown URL cannot inherit a date from another page on the same domain. Dates are maintained deliberately and never advance automatically during a build or deployment.

The 18 October 2026 check identified a more suitable current WRC employment-rights overview and a more direct MRCI information-and-support destination. No new salary thresholds, time-limit figures or individual eligibility decisions were introduced. The About page explains the distinction between fictional learning, current source guidance, translations and real-person testimony.

An attempt keeps its answer order, selected answers, checked stages, current stage and reading mode. Correct-answer positions are balanced across the five stages and randomized when an attempt starts. A resume preserves that order; an explicit restart clears that character's current attempt. Completion removes the unfinished save and retains the explored badge. Saving uses browser storage, so progress stays in that browser and can be removed by clearing its site data. If saving is unavailable, the current page remains usable and explains the limitation.

The progress envelope is versioned in `app/journey-progress.ts`. If a future content change alters what existing answer IDs mean, revise the stored-progress version or add a migration before accepting old answers against the new content.

Generate fresh results from the revision you are working on; historical test reports describe earlier runs.

## Deployment

GitHub Pages uses `npm run build:pages`, [vite.pages.config.ts](vite.pages.config.ts) and [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml). Home, About and Resources have static entry points under [github-pages/](github-pages/); output goes to `dist-pages/`.

`npm run build` is the separate Vinext/Sites build. Its wrapper requires a shell environment with GNU `timeout`; it is not interchangeable with the static Pages build.

## Credits and reuse

Created by Sam O'Brien-Olinger. Educational source links used by the project include:

- [Immigration Service Delivery](https://www.irishimmigration.ie/).
- [Employment Permits](https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/).
- [International Protection Office](https://ipo.irishimmigration.ie/).
- [Irish Refugee Council — Information Hub](https://www.irishrefugeecouncil.ie/get-help/information-hub/).
- [Workplace Relations Commission — employment rights](https://www.workplacerelations.ie/en/what_you_should_know/).

The project uses React, Next.js/Vinext, Vite, Tailwind CSS, shadcn UI primitives and Lucide icons. Third-party software retains its own terms; the repository's ownership statement below applies as written.

The character portraits were generated with Create Image. The initial artwork used visual references from The Irish Times’ **New to the Parish** series; the current illustrations substantially redesign the faces, hair and distinguishing details, with bold ink lines and flat graphic novel shading to reduce resemblance to those references. The game’s characters and narratives are fictional. See [portrait references and production notes](public/images/characters/README.md).

Design decisions, original feature notes, historical testing evidence and detailed acknowledgements remain available in the preserved project record:

- [README.md · original project record](https://github.com/SamOBrienOlinger/My-New-Life-in-Ireland/blob/5dd9d57ca44dbffa7fea799d961f856331f3818c/README.md)

Copyright © 2026 Sam O'Brien-Olinger. All rights reserved.

A New Life in Ireland™ and its original source code, written content,
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

## Support

Repository maintained in [Sam O’Brien-Olinger’s GitHub account](https://github.com/SamOBrienOlinger). For a problem or suggested improvement, [open an issue](https://github.com/SamOBrienOlinger/My-New-Life-in-Ireland/issues) with the affected page or command, steps to reproduce, and expected behaviour. Any proposed reuse or redistribution remains subject to the licence terms above.

[Back to top](#a-new-life-in-ireland)
