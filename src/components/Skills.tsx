import { useLanguage } from '../i18n/language'

export default function Skills() {
  const { t, content } = useLanguage()

  return (
    <section id="habilidades" className="section section--alt">
      <div className="container">
        <h2 className="section__title">{t.nav.skills}</h2>
        <div className="skills">
          {content.skills.map((skill) => (
            <div key={skill.group} className="skills__group">
              <h3>{skill.group}</h3>
              <ul className="tags">
                {skill.items.map((item) => (
                  <li key={item} className="tag">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
