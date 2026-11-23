# Portfolio — Pierre Algarín

Personal portfolio site: experience, projects, skills, education and contact.

## Stack

- React 19 + TypeScript + Vite
- Oxlint
- Vercel (hosting and the `api/likes.ts` serverless function)
- Upstash Redis for the like counter, with voters hashed from IP + user agent so no IP is stored in clear

## Editing the content

All the text lives in **`src/data/portfolio.ts`**: experience, projects (with repo and demo links), skills and education. The components in `src/components/` only render that data.

## Development

```bash
npm ci
npm run dev       # http://localhost:5173
npm run lint
npm run build     # type-check + production build in dist/
```

The like button needs `UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN` (or Vercel's `KV_REST_API_*`). Without them `/api/likes` answers `503 likes_unavailable` and the rest of the site works normally.

## Deploy

Vercel builds and deploys every push to `main`. Work happens on `staging` and is promoted to `main` when ready.
