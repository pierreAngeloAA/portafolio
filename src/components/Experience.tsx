import { useLanguage } from '../i18n/language'

export default function Experience() {
  const { t, content } = useLanguage()

  return (
    <section id="experiencia" className="section section--alt">
      <div className="container">
        <h2 className="section__title">{t.nav.experience}</h2>
        <ol className="timeline">
          {content.experience.map((job) => (
            <li key={job.role + job.company} className="timeline__item">
              <p className="timeline__period">{job.period}</p>
              <h3 className="timeline__role">{job.role}</h3>
              <p className="timeline__company">
                {job.company} · {job.location}
              </p>
              <p className="timeline__summary">{job.summary}</p>
              <ul className="tags">
                {job.tags.map((tag) => (
                  <li key={tag} className="tag">
                    {tag}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
