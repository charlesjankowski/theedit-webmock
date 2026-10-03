/** Pragmatic server-side email check: one "@", a dotted domain, no spaces, sane lengths. */
export function normalizeEmail(input: unknown): string | null {
  if (typeof input !== "string") return null;
  const email = input.trim().toLowerCase();
  if (email.length < 6 || email.length > 254) return null;
  const re = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]{1,64}@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/;
  if (!re.test(email)) return null;
  const tld = email.split(".").pop() ?? "";
  if (tld.length < 2) return null;
  return email;
}
