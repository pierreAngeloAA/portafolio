import { useState } from 'react'
import { projects, type Project } from '../data/portfolio'
import ProjectModal from './ProjectModal'

const VISIBLE_TAGS = 4

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <section id="proyectos" className="section">
      <div className="container">
        <h2 className="section__title">Proyectos destacados</h2>
        <div className="projects">
          {projects.map((project) => {
            const hiddenTags = project.tags.length - VISIBLE_TAGS

            return (
              <article key={project.title} className="card card--clickable">
                <div className="card__header">
                  <h3 className="card__title">{project.title}</h3>
                  {project.status && (
                    <span className={`badge badge--${project.status.tone}`}>
                      {project.status.label}
                    </span>
                  )}
                </div>
                <p className="card__text project-card__summary">
                  {project.description}
                </p>
                <ul className="tags">
                  {project.tags.slice(0, VISIBLE_TAGS).map((tag) => (
                    <li key={tag} className="tag">
                      {tag}
                    </li>
                  ))}
                  {hiddenTags > 0 && <li className="tag">+{hiddenTags}</li>}
                </ul>
                {/* El ::before de este botón cubre toda la tarjeta: cualquier clic la abre */}
                <button
                  type="button"
                  className="card__open"
                  onClick={() => setSelected(project)}
                  aria-haspopup="dialog"
                >
                  Ver detalles →
                </button>
              </article>
            )
          })}
        </div>
      </div>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
