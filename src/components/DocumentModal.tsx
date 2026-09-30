import { useState } from 'react'
import type { Education } from '../data/portfolio'
import Modal from './Modal'

type Props = {
  item: Education | null
  onClose: () => void
}

export default function DocumentModal({ item, onClose }: Props) {
  return (
    <Modal
      open={item !== null}
      onClose={onClose}
      labelledBy="document-modal-title"
      className="modal--document"
    >
      {/* key: al abrir otro título se vuelve a mostrar su primer documento */}
      {item && <DocumentViewer key={item.title} item={item} />}
    </Modal>
  )
}

function DocumentViewer({ item }: { item: Education }) {
  const [index, setIndex] = useState(0)
  const documents = item.documents ?? []
  const current = documents[index]

  return (
    <>
      <h3 id="document-modal-title" className="card__title document__title">
        {item.title}
      </h3>
      {documents.length > 1 && (
        <div className="document__tabs" role="tablist">
          {documents.map((doc, i) => (
            <button
              key={doc.src}
              type="button"
              role="tab"
              aria-selected={i === index}
              className="document__tab"
              onClick={() => setIndex(i)}
            >
              {doc.label}
            </button>
          ))}
        </div>
      )}
      {current && (
        <img
          className="document__image"
          src={current.src}
          alt={`${current.label} — ${item.title}`}
        />
      )}
    </>
  )
}
