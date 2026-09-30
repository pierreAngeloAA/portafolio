import { education, languages } from '../data/portfolio'

export default function Education() {
  return (
    <section id="formacion" className="section">
      <div className="container">
        <h2 className="section__title">Formación</h2>
        <div className="education">
          {education.map((item) => (
            <article key={item.title} className="card">
              <h3 className="card__title">{item.title}</h3>
              <p className="card__text">
                {item.place}
                {item.year && ` · ${item.year}`}
              </p>
              {item.detail && <p className="education__detail">{item.detail}</p>}
            </article>
          ))}
        </div>
        <h3 className="education__languages-title">Idiomas</h3>
        <ul className="tags">
          {languages.map((lang) => (
            <li key={lang} className="tag">
              {lang}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
