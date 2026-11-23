import { useLanguage } from '../i18n/language'

export default function About() {
  const { t, content } = useLanguage()
  const { profile } = content

  return (
    <section id="sobre-mi" className="section">
      <div className="container">
        <h2 className="section__title">{t.nav.about}</h2>
        <div className="about">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
