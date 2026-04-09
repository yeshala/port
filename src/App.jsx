import React from 'react'
import { dossier } from './context'

const metrics = dossier.sections.proof.cards

function Section({ eyebrow, title, children }) {
  return (
    <section className="panel">
      <div className="eyebrow">{eyebrow}</div>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  )
}

export default function App() {
  return (
    <div className="shell">
      <div className="glow glow-left" />
      <div className="glow glow-right" />

      <header className="hero panel">
        <div className="eyebrow">{dossier.sections.hero.eyebrow}</div>
        <h1>{dossier.sections.hero.headline}</h1>
        <p className="lede">{dossier.sections.hero.subheadline}</p>
        <div className="hero-meta">
          <span>{dossier.candidate.title}</span>
          <span>{dossier.candidate.location}</span>
          <span>{dossier.mission.target}</span>
        </div>
      </header>

      <Section eyebrow={dossier.sections.fit.eyebrow} title={dossier.sections.fit.title}>
        <p className="lede small">{dossier.mission.thesis}</p>
        <ul className="bullets">
          {dossier.sections.fit.bullets.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </Section>

      <Section eyebrow={dossier.sections.proof.eyebrow} title={dossier.sections.proof.title}>
        <div className="card-grid">
          {metrics.map((card) => (
            <article className="metric-card" key={card.label}>
              <div className="metric-label">{card.label}</div>
              <div className="metric-value">{card.metric}</div>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow={dossier.sections.reliability.eyebrow} title={dossier.sections.reliability.title}>
        <ul className="bullets">
          {dossier.sections.reliability.bullets.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </Section>

      <Section eyebrow={dossier.sections.systems.eyebrow} title={dossier.sections.systems.title}>
        <div className="systems-grid">
          {dossier.sections.systems.columns.map(([k, v]) => (
            <div className="system-row" key={k}>
              <div className="system-key">{k}</div>
              <div className="system-value">{v}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow={dossier.sections.leadership.eyebrow} title={dossier.sections.leadership.title}>
        <ul className="bullets">
          {dossier.sections.leadership.bullets.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </Section>

      <Section eyebrow={dossier.sections.closing.eyebrow} title={dossier.sections.closing.title}>
        <p className="lede small">{dossier.sections.closing.body}</p>
      </Section>
    </div>
  )
}
