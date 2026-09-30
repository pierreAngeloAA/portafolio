import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <section id="proyectos" className="section">
      <div className="container">
        <h2 className="section__title">Proyectos destacados</h2>
        <div className="projects">
          {projects.map((project) => (
            <article key={project.title} className="card">
              <h3 className="card__title">{project.title}</h3>
              <p className="card__text">{project.description}</p>
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
                    <a href={project.repo} target="_blank" rel="noreferrer">
                      Código
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      Ver sitio
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
