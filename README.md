# A New Life in Ireland

An interactive educational website that explores migration and settlement in Ireland through decisions made alongside twelve fictional characters.

**React · TypeScript · Vite**

[Visit the website](https://samobrienolinger.github.io/My-New-Life-in-Ireland/) · [Getting started](#getting-started) · [Repository guide](#repository-guide) · [Checks](#checks-and-review) · [Credits](#credits-and-reuse)

<img src="public/images/harp-heart-logo.png" alt="A New Life in Ireland harp-heart logo" width="160">

## What you can explore

- Character journeys covering work, study, family, EU free movement and international protection.
- Immediate explanations and links to official information.
- A route finder and an Information Hub.
- Multilingual text, keyboard controls and responsive layouts.

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

Use Node.js `>=22.13.0` and npm for the package commands below. Install the package dependencies first when the command uses a local build or test tool.

| Command | Purpose |
| --- | --- |
| `npm run build` | Create the configured application build |
| `npm run build:pages` | Create the GitHub Pages build |
| `npm test` | Build with Vinext, then run the existing Node test suite |
| `npm run lint` | Run the configured linter |

`npm run build` and `npm test` require GNU `timeout`. Linux provides it through GNU coreutils. On macOS, install GNU coreutils and make its `timeout` command available on `PATH` before running either command. The separate `npm run build:pages` command does not use that build wrapper.

For a manual review, follow the main user journey, check keyboard navigation and narrow-screen layouts, and inspect the browser console for missing assets or failed requests.

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
- [Workplace Relations Commission — coming to work in Ireland](https://www.workplacerelations.ie/en/what_you_should_know/coming_to_work_in_ireland/).

The project uses React, Next.js/Vinext, Vite, Tailwind CSS, shadcn UI primitives and Lucide icons. Third-party software retains its own terms; the repository's ownership statement below applies as written.

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
