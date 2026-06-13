import { profile } from "../data";
import Reveal from "./Reveal";
import { GitHubIcon, LinkedInIcon, MailIcon, ArrowRightIcon } from "./Icons";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <Reveal className="contact-card">
        <div className="contact-glow" aria-hidden="true" />
        <p className="section-eyebrow">
          <span className="section-index">06</span> Contact
        </p>
        <h2 className="contact-title">
          Let's build something <span className="gradient-text">worth shipping.</span>
        </h2>
        <p className="contact-copy">
          I'm open to roles and interesting collaborations. Whether you've got a concrete brief or
          just want to trade ideas, my inbox is always open.
        </p>

        <div className="contact-actions">
          <a href={profile.links.email} className="btn btn-primary">
            Say hello <ArrowRightIcon width={18} height={18} />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost"
          >
            <LinkedInIcon width={18} height={18} /> Connect on LinkedIn
          </a>
        </div>

        <div className="contact-links">
          <a href={profile.links.email} className="contact-link">
            <MailIcon width={18} height={18} /> {profile.email}
          </a>
          <a href={profile.links.github} target="_blank" rel="noreferrer" className="contact-link">
            <GitHubIcon width={18} height={18} /> github.com/ashishbisoi236
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <LinkedInIcon width={18} height={18} /> linkedin.com/in/ashishbisoi
          </a>
        </div>
      </Reveal>
    </section>
  );
}
