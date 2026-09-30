import { useEffect, useRef, type MouseEvent } from 'react'
import type { Project } from '../data/portfolio'

type Props = {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (project && !dialog.open) dialog.showModal()
    if (!project && dialog.open) dialog.close()
  }, [project])

  // Un clic sobre el propio <dialog> (y no sobre su contenido) es un clic en el fondo
  const handleClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) onClose()
  }

  return (
    <dialog
      ref={dialogRef}
      className="modal"
      onClose={onClose}
      onClick={handleClick}
      aria-labelledby="modal-title"
    >
      {project && (
        <div className="modal__content">
          <button
            type="button"
            className="modal__close"
            onClick={onClose}
            aria-label="Cerrar"
          >
            ✕
          </button>
          <div className="card__header">
            <h3 id="modal-title" className="card__title">
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
        </div>
      )}
    </dialog>
  )
}
