export type SavedItem = { id: string; type: "city" | "activity" | "stay"; label: string; detail: string; savedAt: string };
const key = "bharatyatra:saved:v1";
export const savedStore = {
  read(): SavedItem[] { if (typeof window === "undefined") return []; try { return JSON.parse(localStorage.getItem(key) ?? "[]") as SavedItem[]; } catch { return []; } },
  save(item: SavedItem) { const next = [item, ...this.read().filter((saved) => saved.id !== item.id)]; localStorage.setItem(key, JSON.stringify(next)); return next; },
  remove(id: string) { const next = this.read().filter((item) => item.id !== id); localStorage.setItem(key, JSON.stringify(next)); return next; }
};
