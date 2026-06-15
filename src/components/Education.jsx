import { education } from "../data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { GradCapIcon } from "./Icons";

export default function Education() {
  return (
    <section className="section" id="education">
      <SectionHeading index="04" eyebrow="Education" title="Where it started." />

      <div className="edu-grid">
        {education.map((e, i) => (
          <Reveal className="edu-card" key={e.school} delay={i * 80}>
            <span className="edu-icon">
              <GradCapIcon width={22} height={22} />
            </span>
            <div className="edu-body">
              <div className="edu-head">
                <h3 className="edu-school">{e.school}</h3>
                <span className="edu-meta">{e.meta}</span>
              </div>
              <p className="edu-detail">{e.detail}</p>
              <p className="edu-foot">
                {e.location} <span className="timeline-sep">·</span> {e.period}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
