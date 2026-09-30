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
      {/* key: reinicia la animación del corazón en cada like */}
      <svg
        key={burst}
        className="like-button__heart"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 21s-7.5-4.6-9.6-9.3C.9 8.2 3 4.5 6.6 4.5c2.1 0 3.6 1.2 4.4 2.6.8-1.4 2.3-2.6 4.4-2.6 3.6 0 5.7 3.7 4.2 7.2C19.5 16.4 12 21 12 21z" />
      </svg>
      <span className="like-button__count">{likes.count}</span>
    </button>
  )
}
