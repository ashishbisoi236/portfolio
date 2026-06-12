import './App.css'
import { profile, experiences, projects, skills } from './data'

function App() {
  return (
    <div className="portfolio-container">
      <header className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Frontend Engineer</p>
          <h1>{profile.name}</h1>
          <p className="hero-description">{profile.description}</p>
          <div className="hero-actions">
            <a href={profile.links.email} className="button primary">
              Email me
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="button outline"
            >
              LinkedIn
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="button outline"
            >
              GitHub
            </a>
          </div>
        </div>

        <aside className="hero-panel">
          <div className="hero-panel-heading">Highlights</div>
          <div className="hero-list">
            <div className="hero-pill">5 years experience</div>
            <div className="hero-pill">React microfrontends</div>
            <div className="hero-pill">Analytics & dashboards</div>
            <div className="hero-pill">Enterprise workflows</div>
          </div>
          <div className="hero-stats">
            <div>
              <strong>3</strong>
              <span>Companies</span>
            </div>
            <div>
              <strong>4</strong>
              <span>Major platforms</span>
            </div>
            <div>
              <strong>{projects.length}</strong>
              <span>Projects</span>
            </div>
          </div>
        </aside>
      </header>

      <main>
        <section className="section skills-section">
          <div className="section-header">
            <h2>Core skills</h2>
            <p>Engineering strengths that power my resume and product work.</p>
          </div>
          <div className="skills-grid">
            {skills.map((skill) => (
              <span key={skill} className="skill-pill">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="section about-section">
          <div className="section-header">
            <h2>About</h2>
            <p>Experienced in building product-grade frontend systems, dashboard experiences, and developer-friendly microfrontends.</p>
          </div>
          <div className="profile-grid">
            <div>
              <p>
                <strong>Title:</strong> {profile.title}
              </p>
              <p>
                <strong>Email:</strong>{' '}
                <a href={profile.links.email}>{profile.links.email.replace('mailto:', '')}</a>
              </p>
            </div>
            <div>
              <p>
                <strong>GitHub:</strong>{' '}
                <a href={profile.links.github} target="_blank" rel="noreferrer">
                  {profile.links.github.replace('https://', '')}
                </a>
              </p>
              <p>
                <strong>LinkedIn:</strong>{' '}
                <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
                  {profile.links.linkedin.replace('https://', '')}
                </a>
              </p>
            </div>
          </div>
        </section>

        <section className="section experience-section">
          <div className="section-header">
            <h2>Experience</h2>
            <p>Impact-focused roles across modern enterprise and consumer platforms.</p>
          </div>
          <div className="cards-grid">
            {experiences.map((experience) => (
              <article key={experience.company} className="card">
                <div className="card-title">
                  <div>
                    <h3>{experience.role}</h3>
                    <p className="company-name">{experience.company}</p>
                  </div>
                  <p className="period">{experience.period}</p>
                </div>
                <ul>
                  {experience.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section projects-section">
          <div className="section-header">
            <h2>Projects</h2>
            <p>Product work, APIs, and user-centric web experiences.</p>
          </div>
          <div className="cards-grid project-grid">
            {projects.map((project) => (
              <article key={project.title} className="card project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
