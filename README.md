# My New Life in Ireland

An interactive educational website that helps users understand different
pathways into Ireland by making decisions alongside fictional characters.

Users choose from nine characters and explore realistic decisions involving
employment permits, visas, immigration registration, international protection,
IPAS accommodation, labour-market access and workplace rights.

## Live website

[Open My New Life in Ireland](https://samobrienolinger.github.io/My-New-Life-in-Ireland/)

## The experience

- Nine fictional composite characters with varied backgrounds, professions,
  family circumstances, gender identities and sexual identities.
- Critical Skills Employment Permit journeys.
- General Employment Permit journeys.
- International protection and IPAS journeys.
- Four decisions within each pathway.
- Immediate explanations showing why a decision is appropriate or risky.
- Direct links to current official Irish sources.
- Responsive and keyboard-accessible controls.

The project distinguishes between the International Protection Office, which
handles protection applications, and the International Protection Accommodation
Service, which provides accommodation and basic supports.

## Official information sources

The educational content links to official guidance from:

- [Department of Enterprise, Tourism and Employment](https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/)
- [Immigration Service Delivery](https://www.irishimmigration.ie/)
- [International Protection Office](https://ipo.irishimmigration.ie/)
- [International Protection Accommodation Service](https://ipas.irishimmigration.ie/)
- [Workplace Relations Commission](https://www.workplacerelations.ie/)

The website provides general educational information only. It is not legal
advice and cannot determine a person's eligibility or legal status.

## Technology

- React 19
- Next.js 16
- Vinext and Vite
- TypeScript
- Tailwind CSS
- Shadcn UI primitives
- Lucide icons

## Run locally

Node.js 22.13 or later is required.

    npm ci
    npm run dev

Create a production build with:

    npm run build

## GitHub Pages deployment

Pushes to `main` are automatically built and deployed by the workflow in
`.github/workflows/deploy-pages.yml`.

Create the static Pages build locally with:

    npm run build:pages

## Copyright, ownership and permitted use

Copyright © 2026 Sam O'Brien-Olinger. All rights reserved.

My New Life in Ireland™ and its original source code, written content,
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
