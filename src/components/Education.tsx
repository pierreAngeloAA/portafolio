import { useState } from 'react'
import type { Education as EducationItem } from '../data/portfolio'
import { useLanguage } from '../i18n/language'
import DocumentModal from './DocumentModal'

export default function Education() {
  const { t, content } = useLanguage()
  const [selected, setSelected] = useState<EducationItem | null>(null)

  return (
    <section id="formacion" className="section">
      <div className="container">
        <h2 className="section__title">{t.nav.education}</h2>
        <div className="education">
          {content.education.map((item) => {
            const documents = item.documents ?? []

            return (
              <article
                key={item.title}
                className={documents.length > 0 ? 'card card--clickable' : 'card'}
              >
                <h3 className="card__title">{item.title}</h3>
                <p className="card__text">
                  {item.place}
                  {item.year && ` · ${item.year}`}
                </p>
                {item.detail && <p className="education__detail">{item.detail}</p>}
                {item.list && (
                  <ul className="education__list">
                    {item.list.map((entry) => (
                      <li key={entry}>{entry}</li>
                    ))}
                  </ul>
                )}
                {documents.length > 0 && (
                  <button
                    type="button"
                    className="card__open"
                    onClick={() => setSelected(item)}
                    aria-haspopup="dialog"
                  >
                    {documents.length > 1 ? t.seeDocuments : t.seeDocument}
                  </button>
                )}
              </article>
            )
          })}
        </div>
        <h3 className="education__languages-title">{t.spokenLanguages}</h3>
        <ul className="tags">
          {content.languages.map((lang) => (
            <li key={lang} className="tag">
              {lang}
            </li>
          ))}
        </ul>
      </div>
      <DocumentModal item={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
