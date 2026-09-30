import type { Project } from '../data/portfolio'
import Modal from './Modal'

type Props = {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: Props) {
  return (
    <Modal open={project !== null} onClose={onClose} labelledBy="project-modal-title">
      {project && (
        <>
          <div className="card__header">
            <h3 id="project-modal-title" className="card__title">
              {project.title}
            </h3>
            {project.status && (
              <span className={`badge badge--${project.status.tone}`}>
                {project.status.label}
              </span>
            )}
          </div>
          <p className="modal__description">{project.description}</p>
          {project.highlights && (
            <ul className="card__highlights">
              {project.highlights.map((h) => (
                <li key={h.title}>
                  <h4>{h.title}</h4>
                  <p>{h.text}</p>
                </li>
              ))}
            </ul>
          )}
          <ul className="tags">
            {project.tags.map((tag) => (
              <li key={tag} className="tag">
                {tag}
              </li>
            ))}
          </ul>
          {(project.repo || project.demo) && (
            <div className="card__links">
              {project.repo && (
                <a
                  href={project.repo}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Código
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  className="btn btn--primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver sitio
                </a>
              )}
            </div>
          )}
        </>
      )}
    </Modal>
  )
}
