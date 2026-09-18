"use client";

import Link from "next/link";
import { useState } from "react";
import { cities, hotels } from "@/lib/data";
import { useCurrency } from "@/lib/currency-context";

export default function ComparePage() {
  const { formatPrice } = useCurrency();

  const [city1Id, setCity1Id] = useState("jaipur");
  const [city2Id, setCity2Id] = useState("udaipur");
  const [city3Id, setCity3Id] = useState("kochi");

  const city1 = cities.find((c) => c.id === city1Id) || cities[0];
  const city2 = cities.find((c) => c.id === city2Id) || cities[1];
  const city3 = cities.find((c) => c.id === city3Id) || cities[2];

  const comparedCities = [city1, city2, city3];

  const getEstimatedDailySpend = (costIndex: string) => {
    switch (costIndex) {
      case "Value":
        return 2200;
      case "Moderate":
        return 4800;
      case "Premium":
        return 11500;
      default:
        return 4500;
    }
  };

  return (
    <main className="main-content">
      {/* Header */}
      <div className="section-header" style={{ marginBottom: "28px" }}>
        <div className="section-title-wrap">
          <p className="eyebrow">DESTINATION BENCHMARK</p>
          <h1 className="section-title">
            Compare <em>Destinations</em>
          </h1>
          <p className="section-description">
            Evaluate climate, budget expectations, signature sights, and travel styles side-by-side to choose your next Indian adventure.
          </p>
        </div>
      </div>

      {/* Comparison Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
          alignItems: "stretch",
        }}
      >
        {comparedCities.map((city, idx) => {
          const cityHotels = hotels.filter((h) => h.cityId === city.id);
          const topHotel = cityHotels.length > 0 ? cityHotels[0] : null;
          const dailyBudget = getEstimatedDailySpend(city.costIndex);

          return (
            <div
              key={city.id}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-2xl)",
                overflow: "hidden",
                boxShadow: "var(--shadow-md)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* City Selector Dropdown */}
              <div style={{ padding: "16px", background: "var(--surface-alt)", borderBottom: "1px solid var(--border)" }}>
                <label className="form-label" style={{ fontSize: "11px", marginBottom: "4px" }}>
                  Destination 0{idx + 1}
                </label>
                <select
                  value={city.id}
                  onChange={(e) => {
                    const newId = e.target.value;
                    if (idx === 0) setCity1Id(newId);
                    else if (idx === 1) setCity2Id(newId);
                    else setCity3Id(newId);
                  }}
                  className="form-select"
                  style={{ width: "100%", fontSize: "14px", fontWeight: 700 }}
                >
                  {cities.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name} ({c.state})
                    </option>
                  ))}
                </select>
              </div>

              {/* Photo Banner */}
              <div style={{ position: "relative", height: "180px" }}>
                <img
                  src={city.image}
                  alt={city.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(15, 23, 42, 0.8) 0%, transparent 60%)",
                  }}
                />
                <div style={{ position: "absolute", bottom: "14px", left: "16px", right: "16px" }}>
                  <h3 style={{ color: "#fff", fontSize: "22px", fontFamily: "var(--font-display)", fontWeight: 700, margin: 0 }}>
                    {city.name}
                  </h3>
                  <span style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "12px" }}>
                    {city.state}
                  </span>
                </div>
              </div>

              {/* Matrix Specifications */}
              <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "16px", flex: 1 }}>
                {/* Best Season */}
                <div style={{ borderBottom: "1px solid var(--border)", paddingBottom: "12px" }}>
                  <span style={{ fontSize: "11px", color: "var(--ink-400)", textTransform: "uppercase", fontWeight: 600 }}>
                    🌤️ Best Travel Season
                  </span>
                  <strong style={{ display: "block", fontSize: "14px", color: "var(--ink-900)", marginTop: "2px" }}>
                    {city.bestTimeToVisit}
                  </strong>
                </div>

                {/* Daily Budget Expectation */}
                <div style={{ borderBottom: "1px solid var(--border)", paddingBottom: "12px" }}>
                  <span style={{ fontSize: "11px", color: "var(--ink-400)", textTransform: "uppercase", fontWeight: 600 }}>
                    💰 Budget Tier & Daily Avg.
                  </span>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "6px", marginTop: "2px" }}>
                    <span className={`badge ${city.costIndex === "Value" ? "badge-emerald" : city.costIndex === "Moderate" ? "badge-indigo" : "badge-saffron"}`}>
                      {city.costIndex}
                    </span>
                    <strong style={{ fontSize: "14px", color: "var(--ink-800)" }}>
                      ≈ {formatPrice(dailyBudget)} / day
                    </strong>
                  </div>
                </div>

                {/* Vibe Tags */}
                <div style={{ borderBottom: "1px solid var(--border)", paddingBottom: "12px" }}>
                  <span style={{ fontSize: "11px", color: "var(--ink-400)", textTransform: "uppercase", fontWeight: 600 }}>
                    🏷️ Experience Categories
                  </span>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "6px" }}>
                    {city.categories.map((cat) => (
                      <span key={cat} className="city-card-tag" style={{ fontSize: "10.5px" }}>
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Top Attractions */}
                <div style={{ borderBottom: "1px solid var(--border)", paddingBottom: "12px" }}>
                  <span style={{ fontSize: "11px", color: "var(--ink-400)", textTransform: "uppercase", fontWeight: 600 }}>
                    📍 Top Attractions
                  </span>
                  <ul style={{ margin: "6px 0 0", paddingLeft: "16px", fontSize: "12.5px", color: "var(--ink-700)", lineHeight: 1.5 }}>
                    {city.attractions.slice(0, 3).map((a) => (
                      <li key={a.name}>{a.name}</li>
                    ))}
                  </ul>
                </div>

                {/* Top Stay */}
                {topHotel && (
                  <div>
                    <span style={{ fontSize: "11px", color: "var(--ink-400)", textTransform: "uppercase", fontWeight: 600 }}>
                      🏨 Featured Stay
                    </span>
                    <div style={{ marginTop: "4px" }}>
                      <strong style={{ fontSize: "13.5px", display: "block", color: "var(--ink-900)" }}>
                        {topHotel.name}
                      </strong>
                      <span style={{ fontSize: "12px", color: "var(--saffron-600)", fontWeight: 600 }}>
                        {formatPrice(topHotel.estimatedCost)} / night · ★ {topHotel.rating}
                      </span>
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div style={{ marginTop: "auto", paddingTop: "16px" }}>
                  <Link
                    href={`/cities/${city.id}`}
                    className="btn btn-outline btn-block btn-sm"
                    style={{ fontWeight: 600 }}
                  >
                    View Destination Guide →
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
