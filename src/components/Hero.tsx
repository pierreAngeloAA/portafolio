import { useLanguage } from '../i18n/language'

export default function Hero() {
  const { t, content } = useLanguage()
  const { profile } = content

  return (
    <section id="inicio" className="hero">
      <div className="container">
        <p className="hero__greeting">{t.greeting}</p>
        <h1 className="hero__name">
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title={t.linkedinTitle}
          >
            {profile.name}
          </a>
        </h1>
        <h2 className="hero__role">{profile.role}</h2>
        <ul className="tags hero__stack">
          {profile.stack.map((tech) => (
            <li key={tech.name}>
              <a
                className="tag tag--link"
                href={tech.docs}
                target="_blank"
                rel="noopener noreferrer"
                title={t.officialDocs(tech.name)}
              >
                {tech.name}
              </a>
            </li>
          ))}
        </ul>
        <p className="hero__location">
          <a href={profile.locationUrl} target="_blank" rel="noopener noreferrer">
            {profile.location}
          </a>
        </p>
        <div className="hero__actions">
          <a href="#proyectos" className="btn btn--primary">
            {t.seeProjects}
          </a>
          <a href="#contacto" className="btn">
            {t.contactMe}
          </a>
        </div>
      </div>
    </section>
  )
}
