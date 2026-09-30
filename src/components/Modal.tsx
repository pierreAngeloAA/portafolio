import { useEffect, useRef, type MouseEvent, type ReactNode } from 'react'

type Props = {
  open: boolean
  onClose: () => void
  labelledBy: string
  className?: string
  children: ReactNode
}

export default function Modal({ open, onClose, labelledBy, className, children }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  // Un clic sobre el propio <dialog> (y no sobre su contenido) es un clic en el fondo
  const handleClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) onClose()
  }

  return (
    <dialog
      ref={dialogRef}
      className={className ? `modal ${className}` : 'modal'}
      onClose={onClose}
      onClick={handleClick}
      aria-labelledby={labelledBy}
    >
      {open && (
        <div className="modal__content">
          <button
            type="button"
            className="modal__close"
            onClick={onClose}
            aria-label="Cerrar"
          >
            ✕
          </button>
          {children}
        </div>
      )}
    </dialog>
  )
}
