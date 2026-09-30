import { createHash } from 'node:crypto'
import { Redis } from '@upstash/redis'

// Likes con los que arranca el contador; en Redis solo se guardan los reales
const BASE_LIKES = 21

const COUNT_KEY = 'likes:count'
const VOTER_TTL_SECONDS = 60 * 60 * 24 * 365

// El Marketplace de Vercel puede inyectar las credenciales con cualquiera de los dos prefijos
const url = process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL
const token = process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN

const redis = url && token ? new Redis({ url, token }) : null

// Un visitante = IP + navegador, hasheados: no se guarda la IP en claro
function voterKey(request: Request) {
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    request.headers.get('x-real-ip') ??
    'unknown'
  const userAgent = request.headers.get('user-agent') ?? ''
  const hash = createHash('sha256').update(`${token}:${ip}:${userAgent}`).digest('hex')
  return `likes:voter:${hash}`
}

async function state(request: Request) {
  const [count, liked] = await Promise.all([
    redis!.get<number>(COUNT_KEY),
    redis!.exists(voterKey(request)),
  ])
  return { count: BASE_LIKES + (count ?? 0), liked: liked === 1 }
}

function json(body: unknown, status = 200) {
  return Response.json(body, {
    status,
    headers: { 'Cache-Control': 'no-store' },
  })
}

export async function GET(request: Request) {
  if (!redis) return json({ error: 'likes_unavailable' }, 503)
  return json(await state(request))
}

// Dar like. SET NX garantiza que el mismo visitante solo sume una vez
export async function POST(request: Request) {
  if (!redis) return json({ error: 'likes_unavailable' }, 503)
  const added = await redis.set(voterKey(request), 1, { nx: true, ex: VOTER_TTL_SECONDS })
  if (added) await redis.incr(COUNT_KEY)
  return json(await state(request))
}

// Quitar el like. Solo resta si ese visitante lo había dado
export async function DELETE(request: Request) {
  if (!redis) return json({ error: 'likes_unavailable' }, 503)
  const removed = await redis.del(voterKey(request))
  if (removed) await redis.decr(COUNT_KEY)
  return json(await state(request))
}
