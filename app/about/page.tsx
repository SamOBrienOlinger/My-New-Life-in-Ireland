import { ArrowLeft, BookOpen, Copyright, ExternalLink, Scale, ShieldCheck } from "lucide-react";

const repositoryUrl =
  "https://github.com/SamOBrienOlinger/My-New-Life-in-Ireland";

export default function AboutPage() {
  return (
    <main className="about-page">
      <header className="about-topbar">
        <a className="brand-button" href="../">
          <span className="brand-mark" aria-hidden="true">MN</span>
          <span>My New Life in Ireland</span>
        </a>
        <div className="nav-links">
          <a className="nav-link" href="../resources/">Information hub</a>
          <a className="nav-link" href="../#official-guidance">Official guidance</a>
        </div>
      </header>

      <section className="about-hero">
        <div className="about-hero-inner">
          <a className="about-back-link" href="../">
            <ArrowLeft size={17} aria-hidden="true" /> Return to the experience
          </a>
          <p className="eyebrow">About the project</p>
          <h1>Understanding the choices behind a new life in Ireland.</h1>
          <p>
            My New Life in Ireland is an interactive educational project. It
            helps people explore work, study, family and international
            protection pathways through the decisions faced by nine fictional characters.
          </p>
        </div>
      </section>

      <section className="about-content" aria-label="About My New Life in Ireland">
        <article className="about-card">
          <BookOpen size={24} aria-hidden="true" />
          <div>
            <h2>How the experience works</h2>
            <p>
              Each character is a fictional composite created for learning.
              Each five-stage journey moves from planning and preparation to
              travel, arrival and building a life. Choices introduce employment
              permits, visas, study, family reunification, immigration
              registration, international protection, IPAS accommodation,
              workplace rights and independent support.
            </p>
            <p>
              The characters do not represent real people or promise a
              particular legal outcome. Every real application depends on the
              person&apos;s individual facts and the rules in force at the time.
            </p>
          </div>
        </article>

        <article className="about-card">
          <ShieldCheck size={24} aria-hidden="true" />
          <div>
            <h2>Information and limitations</h2>
            <p>
              The project links to official Irish sources so visitors can check
              current requirements before acting. Its content is general
              educational information, not legal advice, and it cannot decide
              eligibility, immigration status or the outcome of an application.
            </p>
            <p>
              Immigration rules, salary thresholds, occupation lists,
              procedures and personal circumstances can change. For a real
              case, use the official sources and seek suitably qualified advice
              where needed.
            </p>
            <a className="about-action" href="../resources/">
              Open the Ireland information hub <ExternalLink size={16} aria-hidden="true" />
            </a>
          </div>
        </article>

        <article className="about-card">
          <Copyright size={24} aria-hidden="true" />
          <div>
            <h2>Creator, copyright and ownership</h2>
            <p>
              My New Life in Ireland was created and is owned by Sam
              O&apos;Brien-Olinger. Copyright © 2026 Sam O&apos;Brien-Olinger. All
              rights reserved.
            </p>
            <p>
              The original source code, written content, fictional characters,
              narratives, decision pathways, educational materials, artwork,
              visual identity and interface designs are protected, except where
              third-party material is separately identified. Public access to
              the repository does not make the project open source or grant
              permission to reuse, reproduce, adapt, deploy or create derivative
              works from it.
            </p>
            <a className="about-action" href={`${repositoryUrl}/blob/dev-1/LICENSE.md`} target="_blank" rel="noreferrer">
              Read the complete licence terms <ExternalLink size={16} aria-hidden="true" />
            </a>
          </div>
        </article>

        <article className="about-card">
          <Scale size={24} aria-hidden="true" />
          <div>
            <h2>Source transparency</h2>
            <p>
              The public repository records the project&apos;s code, documentation,
              ownership terms and deployment configuration. Third-party
              libraries and linked official publications remain subject to
              their own licences and terms.
            </p>
            <a className="about-action" href={repositoryUrl} target="_blank" rel="noreferrer">
              View the repository <ExternalLink size={16} aria-hidden="true" />
            </a>
          </div>
        </article>
      </section>

      <footer className="site-footer about-footer">
        <div className="site-footer-brand">
          <strong>My New Life in Ireland</strong>
          <span>Interactive migration pathways</span>
          <a href="../">Return to the experience</a>
        </div>
        <div className="site-footer-copy">
          <p>General educational information only. This project does not provide legal advice.</p>
          <p>Copyright © 2026 Sam O&apos;Brien-Olinger. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
