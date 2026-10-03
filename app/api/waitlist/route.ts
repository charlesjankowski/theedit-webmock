import { Ratelimit } from "@upstash/ratelimit";
import { normalizeEmail } from "@/lib/email";
import { getRedis } from "@/lib/redis";

// Stored data: a single hash, field = email, value = ISO timestamp. Nothing else.
const WAITLIST_KEY = "waitlist:emails";

let ratelimit: Ratelimit | null = null;

function json(body: { ok: boolean; message: string }, status: number) {
  return Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

/** Rate-limit keys use a hash of the IP, so raw IPs are never written to the database. */
async function hashKey(value: string) {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
  return Array.from(new Uint8Array(digest).slice(0, 16), (b) => b.toString(16).padStart(2, "0")).join("");
}

export async function POST(request: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return json({ ok: false, message: "Something went wrong reading that. Please try again." }, 400);
  }

  // Honeypot: real visitors never see or fill this field. Pretend success for bots.
  if (typeof payload.company === "string" && payload.company.trim() !== "") {
    return json({ ok: true, message: "Thanks! You're on the list." }, 200);
  }

  const email = normalizeEmail(payload.email);
  if (!email) {
    return json({ ok: false, message: "Please enter a valid email address." }, 422);
  }

  const redis = getRedis();
  if (!redis) {
    console.error("waitlist: Redis is not configured (missing KV_REST_API_URL / KV_REST_API_TOKEN)");
    return json({ ok: false, message: "Signups are temporarily unavailable. Please try again later." }, 503);
  }

  ratelimit ??= new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(5, "10 m"),
    prefix: "waitlist:rl",
  });

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const { success } = await ratelimit.limit(await hashKey(ip));
  if (!success) {
    return json({ ok: false, message: "Too many attempts. Please wait a few minutes and try again." }, 429);
  }

  try {
    // hsetnx keeps the original signup time if the email is already on the list.
    await redis.hsetnx(WAITLIST_KEY, email, new Date().toISOString());
  } catch (err) {
    console.error("waitlist: write failed", err);
    return json({ ok: false, message: "We couldn't save your email just now. Please try again." }, 500);
  }

  // Same response for new and existing emails, so the list can't be probed.
  return json({ ok: true, message: "Thanks! You're on the list. We'll email you when YourEdit launches." }, 200);
}
