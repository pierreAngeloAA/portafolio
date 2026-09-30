import { experience } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experiencia" className="section section--alt">
      <div className="container">
        <h2 className="section__title">Experiencia</h2>
        <ol className="timeline">
          {experience.map((job) => (
            <li key={job.role + job.company} className="timeline__item">
              <p className="timeline__period">{job.period}</p>
              <h3 className="timeline__role">{job.role}</h3>
              <p className="timeline__company">
                {job.company} · {job.location}
              </p>
              <ul className="timeline__highlights">
                {job.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
