"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cities } from "@/lib/data";
import { SavedItem, savedStore } from "@/lib/saved-store";

export default function SavedPage() {
  const [saved, setSaved] = useState<SavedItem[]>([]);
  const [selectedCityId, setSelectedCityId] = useState("jaipur");
  const [filterType, setFilterType] = useState<string>("all");

  useEffect(() => {
    setSaved(savedStore.read());
  }, []);

  const addCityToSaved = () => {
    const city = cities.find((item) => item.id === selectedCityId);
    if (!city) return;
    const updated = savedStore.save({
      id: `city:${city.id}`,
      type: "city",
      label: city.name,
      detail: city.state,
      savedAt: new Date().toISOString(),
    });
    setSaved(updated);
  };

  const removeItem = (id: string) => {
    const updated = savedStore.remove(id);
    setSaved(updated);
  };

  const filteredItems = saved.filter(
    (item) => filterType === "all" || item.type === filterType
  );

  return (
    <main className="main-content">
      <div className="section-header">
        <div className="section-title-wrap">
          <p className="eyebrow">SAVED DESTINATIONS & STAYS</p>
          <h1 className="section-title">
            Your Personal <em>Wishlist</em>
          </h1>
          <p className="section-description">
            Bookmarks saved across destinations, stays, and experiences. Stored on this device.
          </p>
        </div>
        <Link href="/explore" className="btn btn-outline btn-sm">
          Browse Destinations →
        </Link>
      </div>

      {/* Quick Add Bar & Filter Tabs */}
      <div style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-xl)",
        padding: "20px 24px",
        marginBottom: "32px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "16px",
      }}>
        {/* Type Filter Buttons */}
        <div style={{ display: "flex", gap: "8px" }}>
          {["all", "city", "stay", "activity"].map((t) => (
            <button
              key={t}
              className={`chip ${filterType === t ? "active" : ""}`}
              onClick={() => setFilterType(t)}
            >
              {t === "all" ? "All Saved" : t === "city" ? "Cities" : t === "stay" ? "Stays" : "Activities"}
            </button>
          ))}
        </div>

        {/* Quick Add Dropdown */}
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <select
            value={selectedCityId}
            onChange={(e) => setSelectedCityId(e.target.value)}
            className="form-select"
            style={{ padding: "8px 12px", fontSize: "13px" }}
          >
            {cities.map((city) => (
              <option key={city.id} value={city.id}>
                {city.name}, {city.state}
              </option>
            ))}
          </select>
          <button type="button" onClick={addCityToSaved} className="btn btn-primary btn-sm">
            ＋ Bookmark City
          </button>
        </div>
      </div>

      {/* List of Saved Items */}
      {filteredItems.length > 0 ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {filteredItems.map((item) => (
            <article
              key={item.id}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                padding: "18px 24px",
                display: "flex",
                alignItems: "center",
                gap: "20px",
                transition: "all 0.2s ease"
              }}
            >
              <span className={`badge ${item.type === "city" ? "badge-saffron" : item.type === "stay" ? "badge-emerald" : "badge-indigo"}`}>
                {item.type}
              </span>

              <div style={{ flex: 1 }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 700, margin: 0 }}>
                  {item.label}
                </h3>
                <p style={{ fontSize: "13px", color: "var(--ink-500)", margin: "2px 0 0" }}>
                  {item.detail}
                </p>
              </div>

              <Link
                href={item.type === "city" ? `/cities/${item.id.replace("city:", "")}` : item.type === "stay" ? "/hotels" : "/activities"}
                className="btn btn-outline btn-sm"
              >
                View Details →
              </Link>

              <button
                type="button"
                onClick={() => removeItem(item.id)}
                style={{
                  color: "var(--ink-400)",
                  fontSize: "18px",
                  padding: "4px 8px",
                  cursor: "pointer"
                }}
                aria-label={`Remove ${item.label}`}
              >
                ✕
              </button>
            </article>
          ))}
        </div>
      ) : (
        <div style={{
          textAlign: "center",
          padding: "70px 20px",
          background: "var(--surface)",
          borderRadius: "var(--radius-xl)",
          border: "1px solid var(--border)"
        }}>
          <span style={{ fontSize: "40px", display: "block", marginBottom: "12px" }}>♡</span>
          <h3 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "6px" }}>
            Nothing saved in this view
          </h3>
          <p style={{ color: "var(--ink-500)", fontSize: "14px", marginBottom: "20px" }}>
            Bookmark cities, stays, or activities while browsing to build your dream India collection.
          </p>
          <Link href="/explore" className="btn btn-primary">
            Discover Destinations Now
          </Link>
        </div>
      )}
    </main>
  );
}
