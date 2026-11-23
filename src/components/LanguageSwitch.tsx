import { useLanguage } from '../i18n/language'
import type { Language } from '../i18n/ui'

const options: { code: Language; name: string }[] = [
  { code: 'es', name: 'Español' },
  { code: 'en', name: 'English' },
]

export default function LanguageSwitch() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <div className="language-switch" role="group" aria-label={t.languageSwitch}>
      {options.map(({ code, name }) => (
        <button
          key={code}
          type="button"
          lang={code}
          className="language-switch__option"
          aria-pressed={language === code}
          aria-label={name}
          title={name}
          onClick={() => setLanguage(code)}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
