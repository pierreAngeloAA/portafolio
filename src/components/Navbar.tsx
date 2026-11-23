import { profile } from '../data/portfolio'
import { useLanguage } from '../i18n/language'
import LanguageSwitch from './LanguageSwitch'

// Section ids stay in Spanish so existing links keep working
const sections = [
  { id: 'sobre-mi', key: 'about' },
  { id: 'experiencia', key: 'experience' },
  { id: 'proyectos', key: 'projects' },
  { id: 'habilidades', key: 'skills' },
  { id: 'formacion', key: 'education' },
  { id: 'contacto', key: 'contact' },
] as const

const initials = profile.name
  .split(' ')
  .map((word) => word[0])
  .join('')

export default function Navbar() {
  const { t } = useLanguage()

  return (
    <header className="navbar">
      <nav className="container navbar__inner">
        <a href="#inicio" className="navbar__brand" aria-label={t.goToTop(profile.name)}>
          <span className="navbar__logo" aria-hidden="true">
            {initials}
          </span>
          <span className="navbar__name">{profile.name}</span>
        </a>
        <ul className="navbar__links">
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`}>{t.nav[s.key]}</a>
            </li>
          ))}
        </ul>
        <LanguageSwitch />
      </nav>
    </header>
  )
}
