import { profile } from '../data/portfolio'

export default function Contact() {
  return (
    <section id="contacto" className="section section--alt">
      <div className="container contact">
        <h2 className="section__title">Contacto</h2>
        <p>¿Tienes un proyecto en mente o una oportunidad? Escríbeme.</p>
        <div className="contact__actions">
          <a href={`mailto:${profile.email}`} className="btn btn--primary">
            {profile.email}
          </a>
          <a
            href={`https://wa.me/${profile.whatsapp.number}`}
            className="btn btn--whatsapp"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp {profile.whatsapp.display}
          </a>
        </div>
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
