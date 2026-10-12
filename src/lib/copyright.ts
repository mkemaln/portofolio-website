/**
 * Prerendered once and reused, so the build stays fully static instead of
 * blocking on `new Date()` at request time.
 */
export async function getCopyrightYear(): Promise<number> {
  "use cache";
  return new Date().getFullYear();
}
