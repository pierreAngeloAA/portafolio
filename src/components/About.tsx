import { profile } from '../data/portfolio'

export default function About() {
  return (
    <section id="sobre-mi" className="section">
      <div className="container">
        <h2 className="section__title">Sobre mí</h2>
        <div className="about">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
