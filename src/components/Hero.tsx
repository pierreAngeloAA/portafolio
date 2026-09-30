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
            <li key={tech} className="tag">
              {tech}
            </li>
          ))}
        </ul>
        <p className="hero__tagline">{profile.tagline}</p>
        <p className="hero__location">{profile.location}</p>
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
