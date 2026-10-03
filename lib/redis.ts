import { Redis } from "@upstash/redis";

/**
 * Upstash Redis client, configured only from Vercel env vars injected by the
 * Marketplace integration. Returns null when not configured (e.g. local dev
 * without `vercel env pull`), so callers can respond with a clear error.
 */
export function getRedis(): Redis | null {
  const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  return new Redis({ url, token });
}
