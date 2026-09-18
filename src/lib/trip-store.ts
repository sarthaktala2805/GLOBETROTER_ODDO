import { Trip } from "./models";
const key = "bharatyatra:trips:v1";
/** Browser-only repository; replace with an authenticated API repository later. */
export const tripStore = { read(): Trip[] { if (typeof window === "undefined") return []; try { return JSON.parse(localStorage.getItem(key) ?? "[]") as Trip[]; } catch { return []; } }, save(trip: Trip) { const next = [trip, ...this.read().filter((item) => item.id !== trip.id)]; localStorage.setItem(key, JSON.stringify(next)); return next; } };
