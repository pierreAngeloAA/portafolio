import { profile } from '../data/portfolio'

const sections = [
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'formacion', label: 'Formación' },
  { id: 'contacto', label: 'Contacto' },
]

export default function Navbar() {
  return (
    <header className="navbar">
      <nav className="container navbar__inner">
        <a href="#inicio" className="navbar__brand">
          {profile.name}
        </a>
        <ul className="navbar__links">
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`}>{s.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
