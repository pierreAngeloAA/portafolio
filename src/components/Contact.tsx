import { profile } from '../data/portfolio'

export default function Contact() {
  return (
    <section id="contacto" className="section section--alt">
      <div className="container contact">
        <h2 className="section__title">Contacto</h2>
        <p>¿Tienes un proyecto en mente o una oportunidad? Escríbeme.</p>
        <a href={`mailto:${profile.email}`} className="btn btn--primary">
          {profile.email}
        </a>
        <div className="contact__links">
          <a href={profile.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
