import { skillGroups } from "../data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <SectionHeading
        index="04"
        eyebrow="Skills"
        title="The toolkit."
        kicker="What I reach for to design, build, and ship."
      />

      <div className="skills-grid">
        {skillGroups.map((group, i) => (
          <Reveal className="skill-card" key={group.label} delay={i * 70}>
            <h3 className="skill-card-label">{group.label}</h3>
            <div className="skill-tags">
              {group.items.map((item) => (
                <span key={item} className="skill-tag">
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
