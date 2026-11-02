import {
  filterImmigrationQuestions, immigrationQuestions,
  immigrationQuestionsReviewed, integrationResearchUrl,
} from "./immigration-questions";
import "./immigration-questions.css";

type Props = { topic: string; query: string; language: string };

export function ImmigrationQuestionsPanel({ topic, query, language }: Props) {
  const questions = filterImmigrationQuestions(topic, query);
  return (
    <section className="immigration-questions" id="understanding-immigration" lang="en" dir="ltr" aria-labelledby="immigration-questions-title">
      <header>
        <p className="eyebrow">Understanding immigration and inclusion</p>
        <h2 id="immigration-questions-title">10 questions worth clarifying</h2>
        <p>A practical guide for people who have moved to Ireland, neighbours, employers, community groups and service providers. Open a question for an explanation, both perspectives and original sources.</p>
        <p className="immigration-questions-scope">These are selected learning themes, not a statistical ranking of the most common misunderstandings. This guide covers the Republic of Ireland, not Northern Ireland, and is not an eligibility assessment or legal advice.</p>
        <p className="immigration-questions-meta">Content reviewed: <time dateTime={immigrationQuestionsReviewed}>2 November 2026</time>. Rules can change; check the linked guidance for a real situation.</p>
        {language !== "en" && <p className="immigration-questions-language" role="note">This new guide is currently available in English. Some linked sources offer other languages. The rest of the Information Hub remains in your selected language.</p>}
      </header>
      <p className="immigration-questions-count" role="status">Showing {questions.length} of {immigrationQuestions.length} learning questions. The search and topic filters above also apply to this guide.</p>
      <div className="immigration-questions-list">
        {questions.map((question) => (
          <details className="immigration-question" id={`question-${question.id}`} key={question.id}>
            <summary><span>{immigrationQuestions.indexOf(question) + 1}. {question.title}</span></summary>
            <div className="immigration-question-body">
              <p>{question.explanation}</p>
              <div className="immigration-question-perspectives">
                <div><h3>For people who have moved to Ireland</h3><p>{question.forNewcomers}</p></div>
                <div><h3>For people engaging with or supporting them</h3><p>{question.forOthers}</p></div>
              </div>
              <p><strong>Practical next step: </strong>{question.nextStep}</p>
              <h3>Check the original sources</h3>
              <ul className="immigration-question-sources">
                {question.sources.map((source) => <li key={source.href}><a href={source.href}>{source.title}</a><span> · {source.publisher}</span></li>)}
              </ul>
            </div>
          </details>
        ))}
      </div>
      {questions.length === 0 && <p>No learning questions match these filters. Try a broader search or choose “All information” above. Source-card results are shown separately below.</p>}
      <p className="immigration-questions-research">Wider research context: <a href={integrationResearchUrl}>ESRI&apos;s Monitoring Report on Integration 2024</a>, published in March 2025, examines employment, education, social inclusion and active citizenship. It does not rank these ten questions.</p>
    </section>
  );
}
