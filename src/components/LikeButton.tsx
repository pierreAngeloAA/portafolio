import { useEffect, useState } from 'react'

type LikesState = { count: number; liked: boolean }

const API_URL = '/api/likes'

export default function LikeButton() {
  const [likes, setLikes] = useState<LikesState | null>(null)
  const [pending, setPending] = useState(false)
  const [burst, setBurst] = useState(0)

  useEffect(() => {
    fetch(API_URL)
      .then((res) => (res.ok ? res.json() : null))
      .then((data: LikesState | null) => setLikes(data))
      // Sin API (p. ej. en `npm run dev`) el botón simplemente no aparece
      .catch(() => setLikes(null))
  }, [])

  if (!likes) return null

  const toggle = async () => {
    if (pending) return
    const previous = likes
    const liked = !likes.liked
    // Actualización optimista: el número cambia al instante
    setLikes({ liked, count: likes.count + (liked ? 1 : -1) })
    if (liked) setBurst((n) => n + 1)
    setPending(true)
    try {
      const res = await fetch(API_URL, { method: liked ? 'POST' : 'DELETE' })
      if (!res.ok) throw new Error(String(res.status))
      setLikes(await res.json())
    } catch {
      setLikes(previous)
    } finally {
      setPending(false)
    }
  }

  return (
    <button
      type="button"
      className={likes.liked ? 'like-button like-button--liked' : 'like-button'}
      onClick={toggle}
      aria-pressed={likes.liked}
      aria-label={
        likes.liked
          ? `Quitar me gusta. ${likes.count} me gusta`
          : `Me gusta este portafolio. ${likes.count} me gusta`
      }
      title={likes.liked ? '¡Gracias!' : '¿Te gusta mi portafolio?'}
    >
      {/* key: reinicia la animación de la manito en cada like */}
      <svg
        key={burst}
        className="like-button__icon"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M7 10v12" />
        <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
      </svg>
      <span className="like-button__count">{likes.count}</span>
    </button>
  )
}
