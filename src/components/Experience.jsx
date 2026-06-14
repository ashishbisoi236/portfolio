import { experiences } from "../data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <SectionHeading
        index="02"
        eyebrow="Experience"
        title="Where I've shipped."
        kicker="Four years across enterprise and consumer product teams."
      />

      <div className="timeline">
        {experiences.map((exp, i) => (
          <Reveal
            className="timeline-item"
            key={exp.company}
            delay={i * 80}
            style={{ "--card-accent": `var(--cat-${exp.accent})` }}
          >
            <div className="timeline-marker">
              <span className={`timeline-dot ${exp.current ? "is-current" : ""}`} />
              {i < experiences.length - 1 && <span className="timeline-line" />}
            </div>

            <article className="timeline-card">
              <div className="timeline-head">
                <div>
                  <h3 className="timeline-role">{exp.role}</h3>
                  <p className="timeline-company">
                    {exp.company}
                    <span className="timeline-sep">·</span>
                    <span className="timeline-loc">{exp.location}</span>
                  </p>
                </div>
                <span className={`timeline-period ${exp.current ? "is-current" : ""}`}>
                  {exp.period}
                </span>
              </div>

              <p className="timeline-summary">{exp.summary}</p>

              <ul className="timeline-points">
                {exp.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>

              <div className="timeline-tech">
                {exp.tech.map((t) => (
                  <span key={t} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
