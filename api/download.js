export const config = { runtime: 'edge' };

const LIMIT   = 5;      // max downloads per IP per window
const WINDOW  = 86400;  // 24 hours in seconds
const FILE_URL  = 'https://raw.githubusercontent.com/agsketchup/toolbar-layout/main/download/ags_toolbar_layout_2.0.0.rbz';
const FILE_NAME = 'ags_toolbar_layout_2.0.0.rbz';

export default async function handler(req) {
  const ip  = (req.headers.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0].trim();
  const key = `dl:${ip}`;

  const base  = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  // Env not configured yet (local dev or first deploy) → serve freely
  if (!base || !token) return serveFile();

  const h = { Authorization: `Bearer ${token}` };

  // Atomic increment
  const { result: count } = await fetch(`${base}/incr/${key}`, { method: 'POST', headers: h })
    .then(r => r.json());

  // Set TTL on first hit
  if (count === 1) {
    await fetch(`${base}/expire/${key}/${WINDOW}`, { method: 'POST', headers: h });
  }

  if (count > LIMIT) {
    return new Response(
      `Download limit reached (${LIMIT} per 24 h per IP). Please try again later.`,
      {
        status: 429,
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Retry-After': String(WINDOW),
          'X-RateLimit-Limit': String(LIMIT),
          'X-RateLimit-Remaining': '0',
        },
      }
    );
  }

  return serveFile(LIMIT - count);
}

async function serveFile(remaining = null) {
  const upstream = await fetch(FILE_URL);
  const headers = {
    'Content-Type': 'application/octet-stream',
    'Content-Disposition': `attachment; filename="${FILE_NAME}"`,
    'Cache-Control': 'no-store',
    'X-RateLimit-Limit': String(LIMIT),
  };
  if (remaining !== null) headers['X-RateLimit-Remaining'] = String(remaining);
  return new Response(upstream.body, { status: 200, headers });
}
