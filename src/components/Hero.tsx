import { profile } from '../data/portfolio'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container">
        <p className="hero__greeting">Hola, soy</p>
        <h1 className="hero__name">{profile.name}</h1>
        <h2 className="hero__role">{profile.role}</h2>
        <ul className="tags hero__stack">
          {profile.stack.map((tech) => (
            <li key={tech.name}>
              <a
                className="tag tag--link"
                href={tech.docs}
                target="_blank"
                rel="noopener noreferrer"
                title={`Documentación oficial de ${tech.name}`}
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
            Ver proyectos
          </a>
          <a href="#contacto" className="btn">
            Contactar
          </a>
        </div>
      </div>
    </section>
  )
}
