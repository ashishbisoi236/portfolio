import { useEffect, useState } from "react";
import { profile, stats } from "../data";
import { GitHubIcon, LinkedInIcon, MailIcon, ArrowDownIcon, ArrowRightIcon, DownloadIcon } from "./Icons";
import RippleWave from "./RippleWave";

const reducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/** Typewriter that cycles through the role list. */
function useTypewriter(words, { type = 95, erase = 45, hold = 2200, pause = 500 } = {}) {
  const [text, setText] = useState(() => (reducedMotion() ? words[0] : ""));

  useEffect(() => {
    if (reducedMotion()) return;

    let timer;
    let current = ""; // the text currently shown
    let wordIdx = 0;
    let phase = "type";

    // Each tick computes the next frame, updates state, then schedules
    // exactly one follow-up. Scheduling lives OUTSIDE setState so React's
    // StrictMode double-invoking the updater can't spawn parallel chains.
    const tick = () => {
      const word = words[wordIdx % words.length];
      let delay;

      if (phase === "type") {
        current = word.slice(0, current.length + 1);
        if (current === word) {
          phase = "hold";
          delay = hold;
        } else {
          delay = type;
        }
      } else if (phase === "hold") {
        phase = "erase";
        delay = erase;
      } else {
        current = word.slice(0, current.length - 1);
        if (current === "") {
          wordIdx += 1;
          phase = "type";
          delay = pause;
        } else {
          delay = erase;
        }
      }

      setText(current);
      timer = setTimeout(tick, delay);
    };

    timer = setTimeout(tick, type);
    return () => clearTimeout(timer);
  }, [words, type, erase, hold, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(profile.roles, { type: 70, erase: 40, hold: 2200 });

  return (
    <section className="hero" id="top">
      <RippleWave className="hero-decor" color="var(--cat-amber)" rings={24} size={320} step={6} weight={2} />

      <div className="hero-inner">
        <p className="hero-eyebrow">
          <span className="status-dot" /> Available for new opportunities
        </p>

        <h1 className="hero-title">
          Hi, I'm <span className="gradient-text">{profile.firstName}</span>.
          <br />
          I craft <span className="gradient-text">delightful</span> web experiences.
        </h1>

        <p className="hero-role">
          <span className="hero-role-prefix">&gt;</span>{" "}
          <span className="hero-role-text">{typed}</span>
          <span className="caret" aria-hidden="true" />
        </p>

        <p className="hero-tagline">{profile.tagline}</p>

        <div className="hero-cta">
          <a href="#experience" className="btn btn-primary">
            View my work <ArrowRightIcon width={18} height={18} />
          </a>
          <a
            href={profile.links.resume}
            className="btn btn-ghost"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            Resume <DownloadIcon width={18} height={18} />
          </a>
          <a href={profile.links.email} className="btn btn-ghost">
            Get in touch
          </a>
        </div>

        <div className="hero-social">
          <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GitHubIcon />
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a href={profile.links.email} aria-label="Email">
            <MailIcon />
          </a>
        </div>

        <dl className="hero-stats">
          {stats.map((s) => (
            <div key={s.label} className="hero-stat">
              <dt>{s.value}</dt>
              <dd>{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <a href="#about" className="hero-scroll" aria-label="Scroll to about">
        <ArrowDownIcon width={18} height={18} />
      </a>
    </section>
  );
}
