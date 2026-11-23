import { createContext, useContext } from 'react'
import * as es from '../data/portfolio'
import * as en from '../data/portfolio.en'
import { ui, type Language } from './ui'

export const content = { es, en }

type LanguageState = { language: Language; setLanguage: (language: Language) => void }

export const LanguageContext = createContext<LanguageState>({
  language: 'es',
  setLanguage: () => {},
})

export function useLanguage() {
  const { language, setLanguage } = useContext(LanguageContext)
  return { language, setLanguage, t: ui[language], content: content[language] }
}

const STORAGE_KEY = 'language'

function isLanguage(value: string | null): value is Language {
  return value === 'es' || value === 'en'
}

const ENGLISH_PATH = /^\/en(\.html)?\/?$/

// The address wins so a shared link opens in its language; then the saved choice
export function initialLanguage(): Language {
  if (ENGLISH_PATH.test(window.location.pathname)) return 'en'
  const fromUrl = new URLSearchParams(window.location.search).get('lang')
  if (isLanguage(fromUrl)) return fromUrl
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (isLanguage(saved)) return saved
  } catch {
    // Storage can be blocked; the default applies
  }
  return 'es'
}

export function rememberLanguage(language: Language) {
  try {
    localStorage.setItem(STORAGE_KEY, language)
  } catch {
    // Storage can be blocked; the choice lasts for this visit
  }
  const url = new URL(window.location.href)
  url.searchParams.delete('lang')
  url.pathname = language === 'en' ? '/en' : '/'
  window.history.replaceState(window.history.state, '', url)
}
