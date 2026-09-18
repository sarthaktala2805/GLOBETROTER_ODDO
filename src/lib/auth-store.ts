export type LocalSession = { name: string; email: string; createdAt: string };
const key = "bharatyatra:session:v1";
/** Development-only session adapter. It deliberately never stores passwords. */
export const authStore = { read(): LocalSession | null { if (typeof window === "undefined") return null; try { return JSON.parse(localStorage.getItem(key) ?? "null") as LocalSession | null; } catch { return null; } }, start(session: LocalSession) { localStorage.setItem(key, JSON.stringify(session)); return session; }, end() { localStorage.removeItem(key); } };
