import { useEffect, useRef, useState } from 'react'
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
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!menuOpen) return
    const handleKey = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setMenuOpen(false)
      toggleRef.current?.focus()
    }
    const handlePointer = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) setMenuOpen(false)
    }
    document.addEventListener('keydown', handleKey)
    document.addEventListener('pointerdown', handlePointer)
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.removeEventListener('pointerdown', handlePointer)
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="navbar">
      <nav ref={navRef} className="container navbar__inner">
        <LanguageSwitch />
        <a
          href="#inicio"
          className="navbar__brand"
          aria-label={t.goToTop(profile.name)}
          onClick={closeMenu}
        >
          <span className="navbar__logo" aria-hidden="true">
            {initials}
          </span>
          <span className="navbar__name">{profile.name}</span>
        </a>
        <button
          ref={toggleRef}
          type="button"
          className="navbar__toggle"
          aria-expanded={menuOpen}
          aria-controls="navbar-links"
          aria-label={menuOpen ? t.closeMenu : t.openMenu}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
        <ul
          id="navbar-links"
          className={menuOpen ? 'navbar__links navbar__links--open' : 'navbar__links'}
        >
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} onClick={closeMenu}>
                {t.nav[s.key]}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
