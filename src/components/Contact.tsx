import { useEffect, useState } from 'react'
import { profile } from '../data/portfolio'

async function copyToClipboard(text: string) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text)
    return
  }
  // Respaldo para contextos sin HTTPS (p. ej. al abrir la web por IP en la red local)
  const textarea = document.createElement('textarea')
  textarea.value = text
  textarea.style.position = 'fixed'
  textarea.style.opacity = '0'
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand('copy')
  textarea.remove()
}

export default function Contact() {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const timeout = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(timeout)
  }, [copied])

  const handleCopyEmail = async () => {
    try {
      await copyToClipboard(profile.email)
      setCopied(true)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contacto" className="section section--alt">
      <div className="container contact">
        <h2 className="section__title">Contacto</h2>
        <p>¿Tienes un proyecto en mente o una oportunidad? Escríbeme.</p>
        <div className="contact__actions">
          <button
            type="button"
            className="btn btn--primary"
            onClick={handleCopyEmail}
            aria-live="polite"
          >
            {copied ? '¡Email copiado!' : profile.email}
          </button>
          <a
            href={`https://wa.me/${profile.whatsapp}`}
            className="btn btn--whatsapp"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
          <a
            href={profile.links.github}
            className="btn btn--github"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href={profile.links.linkedin}
            className="btn btn--linkedin"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
