import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { initialLanguage, LanguageContext, rememberLanguage } from './language'
import { ui, type Language } from './ui'

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setCurrent] = useState<Language>(initialLanguage)

  useEffect(() => {
    document.documentElement.lang = language
    document.title = ui[language].pageTitle
  }, [language])

  const value = useMemo(
    () => ({
      language,
      setLanguage: (next: Language) => {
        rememberLanguage(next)
        setCurrent(next)
      },
    }),
    [language],
  )

  return <LanguageContext value={value}>{children}</LanguageContext>
}
