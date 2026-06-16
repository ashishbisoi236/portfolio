import { profile } from "../data";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-note">
          © {new Date().getFullYear()} · {profile.name}
        </p>
        <div className="footer-social">
          <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GitHubIcon width={18} height={18} />
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedInIcon width={18} height={18} />
          </a>
          <a href={profile.links.email} aria-label="Email">
            <MailIcon width={18} height={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
