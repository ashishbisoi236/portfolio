import { profile, skillGroups } from "../data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { MapPinIcon, SparkIcon } from "./Icons";

const focus = [
  "Microfrontend architecture",
  "Complex enterprise workflows",
  "Backend APIs (Node, Express, FastAPI)",
  "Analytics dashboards",
  "AI-assisted development",
  "Testing & reliability",
];

export default function About() {
  const topSkills = skillGroups.find((g) => g.label === "Libraries & Frameworks")?.items ?? [];

  return (
    <section className="section" id="about">
      <SectionHeading
        index="01"
        eyebrow="About"
        title="Turning intricate product requirements into software that feels effortless."
      />

      <div className="about-grid">
        <Reveal className="about-copy">
          <p>{profile.summary}</p>
          <p>
            Most of my work lives at the messy intersection of complex business logic and clean UX —
            role-based access, maker-checker approvals, bulk data flows — the kind of features where
            a thoughtful interface makes all the difference. I'm currently doing that at{" "}
            <strong>Fynd</strong>.
          </p>
          <p className="about-location">
            <MapPinIcon width={18} height={18} /> {profile.location}
          </p>
        </Reveal>

        <Reveal className="about-card" delay={120}>
          <div className="about-card-row">
            <span className="about-card-label">
              <SparkIcon width={16} height={16} /> Currently focused on
            </span>
            <ul className="about-focus">
              {focus.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
          <div className="about-card-row">
            <span className="about-card-label">Daily drivers</span>
            <div className="about-chips">
              {topSkills.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
