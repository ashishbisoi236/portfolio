import { projects } from "../data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { ArrowRightIcon } from "./Icons";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <SectionHeading
        index="03"
        eyebrow="Projects"
        title="Things I've built for the fun of it."
        kicker="Side projects where I get to play with new stacks end to end."
      />

      <div className="projects-grid">
        {projects.map((p, i) => (
          <Reveal className="project-card" key={p.title} delay={(i % 2) * 90} data-accent={p.accent}>
            <div className="project-glow" aria-hidden="true" />
            <div className="project-top">
              <h3 className="project-title">{p.title}</h3>
              <span className="project-arrow">
                <ArrowRightIcon width={18} height={18} />
              </span>
            </div>
            <p className="project-blurb">{p.blurb}</p>
            <p className="project-desc">{p.description}</p>
            <div className="project-tech">
              {p.tech.map((t) => (
                <span key={t} className="tech-tag">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
