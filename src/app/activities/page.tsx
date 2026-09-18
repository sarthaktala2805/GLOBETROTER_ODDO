"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { activities, cities } from "@/lib/data";
import { savedStore } from "@/lib/saved-store";
import { useCurrency } from "@/lib/currency-context";
import { Activity } from "@/lib/models";
import BookingModal from "@/components/booking-modal";

export default function ActivitiesPage() {
  const { formatPrice } = useCurrency();
  const [cityId, setCityId] = useState("all");
  const [selectedCat, setSelectedCat] = useState("All");
  const [saved, setSaved] = useState<string[]>([]);
  const [bookingActivity, setBookingActivity] = useState<Activity | null>(null);

  useEffect(() => {
    setSaved(savedStore.read().map((item) => item.id));
  }, []);

  const categories = ["All", "Heritage", "Culture", "Food", "Adventure", "Nature", "Spiritual", "Scenic"];

  const filteredActivities = useMemo(() => {
    return activities.filter((act) => {
      const matchesCity = cityId === "all" || act.cityId === cityId;
      const matchesCat = selectedCat === "All" || act.category.toLowerCase().includes(selectedCat.toLowerCase());
      return matchesCity && matchesCat;
    });
  }, [cityId, selectedCat]);

  const toggleSave = (actId: string, actName: string, cityName: string) => {
    const key = `activity:${actId}`;
    if (saved.includes(key)) {
      savedStore.remove(key);
      setSaved(saved.filter((item) => item !== key));
    } else {
      savedStore.save({
        id: key,
        type: "activity",
        label: actName,
        detail: `${cityName} Experience`,
        savedAt: new Date().toISOString(),
      });
      setSaved([...saved, key]);
    }
  };

  return (
    <main className="main-content">
      <div className="section-header">
        <div className="section-title-wrap">
          <p className="eyebrow">EXPERIENCE EXPLORER</p>
          <h1 className="section-title">
            Things to <em>Do & Experience</em>
          </h1>
          <p className="section-description">
            Curated cultural heritage walks, morning river boat rides, spice trails, and mountain adventures across India.
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-xl)",
        padding: "20px 24px",
        marginBottom: "32px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", color: "var(--ink-500)" }}>
              Filter by City:
            </span>
            <select
              value={cityId}
              onChange={(e) => setCityId(e.target.value)}
              className="form-select"
              style={{ background: "var(--canvas)", minWidth: "200px" }}
            >
              <option value="all">Everywhere in India</option>
              {cities.map((city) => (
                <option key={city.id} value={city.id}>
                  {city.name}, {city.state}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="chips-bar" style={{ margin: 0, paddingBottom: 0 }}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`chip ${selectedCat === cat ? "active" : ""}`}
              onClick={() => setSelectedCat(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results Grid */}
      {filteredActivities.length > 0 ? (
        <div className="cities-grid">
          {filteredActivities.map((act) => {
            const city = cities.find((c) => c.id === act.cityId);
            const isSaved = saved.includes(`activity:${act.id}`);

            return (
              <article key={act.id} className="city-card">
                <div className="city-card-image-wrap" style={{ height: "180px" }}>
                  <img src={act.image} alt={act.name} className="city-card-img" />
                  <div className="city-card-overlay">
                    <div className="city-card-top">
                      <span className="badge badge-dark">
                        ★ {act.rating}
                      </span>
                      <button
                        className={`city-card-save-btn ${isSaved ? "saved" : ""}`}
                        onClick={() => toggleSave(act.id, act.name, city?.name || "")}
                        aria-label="Save activity"
                      >
                        {isSaved ? "♥" : "♡"}
                      </button>
                    </div>
                    <div className="city-card-bottom">
                      <span className="badge badge-saffron" style={{ fontSize: "10px" }}>
                        {act.category}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="city-card-body">
                  <span style={{ fontSize: "11px", fontFamily: "var(--font-mono)", color: "var(--ink-400)", textTransform: "uppercase" }}>
                    {city?.name}, {city?.state}
                  </span>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 700, margin: "4px 0 8px" }}>
                    {act.name}
                  </h3>
                  <p className="city-card-desc">{act.description}</p>

                  <div className="city-card-footer">
                    <div className="city-card-footer-info">
                      <span className="label">Estimated Entry / Cost</span>
                      <span className="value" style={{ color: "var(--saffron-600)" }}>
                        {act.estimatedCost > 0 ? `${formatPrice(act.estimatedCost)} est.` : "Free Entry"}
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <span style={{ fontSize: "11px", color: "var(--ink-500)", fontWeight: 600 }}>
                        ⏱ {act.duration}
                      </span>
                      <button
                        type="button"
                        onClick={() => setBookingActivity(act)}
                        className="btn btn-outline btn-sm"
                        style={{ padding: "3px 8px", fontSize: "11px", fontWeight: 700 }}
                      >
                        Book Voucher →
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div style={{
          textAlign: "center",
          padding: "60px 20px",
          background: "var(--surface)",
          borderRadius: "var(--radius-xl)",
          border: "1px solid var(--border)"
        }}>
          <h3>No activities found</h3>
          <p style={{ color: "var(--ink-500)", marginTop: "8px" }}>
            Try selecting a different city or category filter.
          </p>
        </div>
      )}

      {/* Booking Modal */}
      <BookingModal
        activity={bookingActivity}
        isOpen={Boolean(bookingActivity)}
        onClose={() => setBookingActivity(null)}
      />
    </main>
  );
}
