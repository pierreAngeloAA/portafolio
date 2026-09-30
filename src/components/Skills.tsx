import { skills } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="habilidades" className="section section--alt">
      <div className="container">
        <h2 className="section__title">Habilidades</h2>
        <div className="skills">
          {skills.map((skill) => (
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
