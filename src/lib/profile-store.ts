export type Profile = { displayName: string; travelStyle: string; emailUpdates: "essential" | "all" | "none" };
const key = "bharatyatra:profile:v1";
const fallback: Profile = { displayName: "Traveller", travelStyle: "Balanced and unhurried", emailUpdates: "essential" };
export const profileStore = { read(): Profile { if (typeof window === "undefined") return fallback; try { return { ...fallback, ...JSON.parse(localStorage.getItem(key) ?? "{}") }; } catch { return fallback; } }, save(profile: Profile) { localStorage.setItem(key, JSON.stringify(profile)); return profile; } };
