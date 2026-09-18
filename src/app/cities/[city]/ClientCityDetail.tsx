"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { savedStore } from "@/lib/saved-store";
import { compareRouteModes } from "@/lib/destinations/transport-engine";

const ORIGIN_HUBS = [
  { name: "Delhi", lat: 28.6139, lng: 77.209 },
  { name: "Mumbai", lat: 19.076, lng: 72.8777 },
  { name: "Bengaluru", lat: 12.9716, lng: 77.5946 },
  { name: "Kolkata", lat: 22.5726, lng: 88.3639 },
  { name: "Chennai", lat: 13.0827, lng: 80.2707 },
  { name: "Hyderabad", lat: 17.385, lng: 78.4867 },
  { name: "Ahmedabad", lat: 23.0225, lng: 72.5714 },
];

export default function ClientCityDetail({
  city,
  cityId,
  destMeta,
  nearbyAttractions,
  verifiedStays,
  connectivity,
}: any) {
  const [saved, setSaved] = useState(false);
  const [selectedOriginName, setSelectedOriginName] = useState("Delhi");

  useEffect(() => {
    if (cityId) {
      setSaved(savedStore.read().some((item: any) => item.id === `city:${cityId}`));
    }
  }, [cityId]);

  const transitComparison = useMemo(() => {
    if (!cityId) return null;
    const origin = ORIGIN_HUBS.find((h) => h.name === selectedOriginName) || ORIGIN_HUBS[0];
    return compareRouteModes(origin, cityId);
  }, [cityId, selectedOriginName]);

  const toggleSave = () => {
    if (saved) {
      savedStore.remove(`city:${city.id}`);
      setSaved(false);
    } else {
      savedStore.save({
        id: `city:${city.id}`,
        type: "city",
        label: city.name,
        detail: city.state,
        savedAt: new Date().toISOString(),
      });
      setSaved(true);
    }
  };

  const modeIcons: Record<string, string> = {
    Flight: "✈️",
    Train: "🚆",
    Bus: "🚌",
    Car: "🚗",
    Taxi: "🚖",
  };

  return (
    <main className="main-content">
      <section className="detail-hero-banner">
        <img src={city.image} alt={city.name} />
        <div className="detail-hero-banner-overlay">
          <div className="detail-hero-top">
            <Link href="/explore" className="detail-hero-back">
              ← Back to Destinations
            </Link>
            <div style={{ display: "flex", gap: "10px" }}>
              <button
                onClick={toggleSave}
                className="btn btn-sm"
                style={{
                  background: saved ? "#ffffff" : "rgba(255, 255, 255, 0.18)",
                  backdropFilter: "blur(8px)",
                  color: saved ? "#ef4444" : "#ffffff",
                  fontWeight: 600,
                  border: "1px solid rgba(255,255,255,0.25)",
                }}
              >
                {saved ? "♥ Saved to Wishlist" : "♡ Save Destination"}
              </button>
              <Link href={`/trips/new?city=${city.id}`} className="btn btn-primary btn-sm">
                <span>＋</span> Plan Trip Here
              </Link>
            </div>
          </div>

          <div className="detail-hero-content">
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "8px" }}>
              <span className="badge badge-saffron">
                {destMeta?.district ? `${destMeta.district}, ` : ""}{city.state}, India
              </span>
              {destMeta?.region && (
                <span className="badge badge-emerald">
                  {destMeta.region} India
                </span>
              )}
              {destMeta?.unescoHeritage && (
                <span className="badge badge-dark">
                  🏛️ UNESCO World Heritage
                </span>
              )}
            </div>
            <h1>{city.name}</h1>
            <p className="tagline">{city.tagline}</p>
          </div>
        </div>
      </section>

      <div className="detail-grid">
        <div>
          <div className="facts-card">
            <div className="fact-item">
              <span className="fact-label">Experience Style</span>
              <span className="fact-value">{city.categories.join(" · ")}</span>
            </div>
            <div className="fact-item">
              <span className="fact-label">Cost Profile</span>
              <span className="fact-value">{city.costIndex} Tier</span>
            </div>
            <div className="fact-item">
              <span className="fact-label">Best Season</span>
              <span className="fact-value">{city.bestTimeToVisit}</span>
            </div>
            {destMeta?.recommendedDuration && (
              <div className="fact-item">
                <span className="fact-label">Ideal Stay</span>
                <span className="fact-value">{destMeta.recommendedDuration}</span>
              </div>
            )}
          </div>

          <section style={{ marginBottom: "40px" }}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "28px", marginBottom: "14px", color: "var(--ink-900)" }}>
              Get to know {city.name}
            </h2>
            <p style={{ fontSize: "16px", lineHeight: "1.7", color: "var(--ink-700)", marginBottom: "16px" }}>
              {destMeta ? destMeta.detailedDescription : city.description}
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "16px",
                marginTop: "20px",
                padding: "18px 20px",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
              }}
            >
              {destMeta?.openingHours && (
                <div>
                  <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--ink-400)", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                    Standard Visiting Hours
                  </span>
                  <p style={{ fontSize: "14px", fontWeight: 600, color: "var(--ink-800)", marginTop: "4px" }}>
                    🕒 {destMeta.openingHours}
                  </p>
                </div>
              )}

              {destMeta?.entryFee && (
                <div>
                  <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--ink-400)", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                    Verified Entry Fee (ASI / State)
                  </span>
                  <p style={{ fontSize: "14px", fontWeight: 600, color: "var(--ink-800)", marginTop: "4px" }}>
                    🎫 Indian: {destMeta.entryFee.indianInr > 0 ? `₹${destMeta.entryFee.indianInr}` : "Free"}
                    {destMeta.entryFee.foreignInr ? ` · Foreign: ₹${destMeta.entryFee.foreignInr}` : ""}
                  </p>
                </div>
              )}

              {destMeta?.officialSources && destMeta.officialSources.length > 0 && (
                <div>
                  <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--ink-400)", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                    Government Tourism Authority
                  </span>
                  <div style={{ marginTop: "4px" }}>
                    {destMeta.officialSources.map((src: any) => (
                      <a
                        key={src.tourismBoardName}
                        href={src.url}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          fontSize: "13px",
                          fontWeight: 600,
                          color: "var(--saffron-600)",
                          textDecoration: "underline",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        🏛️ {src.tourismBoardName} ↗
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <p style={{ fontSize: "12px", color: "var(--ink-400)", fontStyle: "italic", marginTop: "8px" }}>
              Photo credit: {city.imageCredit} · Coordinates: {city.latitude.toFixed(3)}° N, {city.longitude.toFixed(3)}° E
            </p>
          </section>

          <section style={{ marginBottom: "50px" }}>
            <div className="section-header" style={{ marginBottom: "16px", alignItems: "flex-start", flexDirection: "column", gap: "6px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", width: "100%", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
                <div>
                  <p className="eyebrow" style={{ color: "var(--saffron-500)", fontFamily: "var(--font-mono)", fontSize: "11px", fontWeight: 700 }}>
                    MULTI-MODAL TRAVEL COMPARATOR
                  </p>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "24px" }}>
                    How to reach {city.name}
                  </h3>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--ink-500)" }}>
                    Departing from:
                  </span>
                  <select
                    value={selectedOriginName}
                    onChange={(e) => setSelectedOriginName(e.target.value)}
                    className="form-select"
                    style={{ background: "var(--canvas)", padding: "6px 12px", fontSize: "13px", fontWeight: 600 }}
                  >
                    {ORIGIN_HUBS.map((hub) => (
                      <option key={hub.name} value={hub.name}>
                        {hub.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {transitComparison && (
                <p style={{ fontSize: "13px", color: "var(--ink-500)" }}>
                  Comparing routes from <strong>{transitComparison.originName}</strong> to <strong>{transitComparison.destinationName}</strong> (approx. {transitComparison.distanceKm} km direct).
                </p>
              )}
            </div>

            {transitComparison && (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "14px" }}>
                {transitComparison.options.map((opt: any) => (
                  <div
                    key={opt.mode}
                    style={{
                      background: "var(--surface)",
                      border: opt.recommendationBadge ? "2px solid var(--saffron-500)" : "1px solid var(--border)",
                      borderRadius: "var(--radius-lg)",
                      padding: "16px",
                      position: "relative",
                      boxShadow: "var(--shadow-sm)",
                    }}
                  >
                    {opt.recommendationBadge && (
                      <span
                        className="badge badge-saffron"
                        style={{
                          position: "absolute",
                          top: "-10px",
                          right: "12px",
                          fontSize: "10px",
                          padding: "2px 8px",
                          boxShadow: "var(--shadow-xs)",
                        }}
                      >
                        ⭐ {opt.recommendationBadge}
                      </span>
                    )}

                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                      <span style={{ fontSize: "24px" }}>{modeIcons[opt.mode] || "🚗"}</span>
                      <div>
                        <h4 style={{ fontSize: "16px", fontWeight: 700, margin: 0 }}>{opt.mode}</h4>
                        <span style={{ fontSize: "12px", color: "var(--ink-400)" }}>{opt.travelTimeFormatted}</span>
                      </div>
                    </div>

                    <div style={{ margin: "10px 0", borderTop: "1px solid var(--border)", paddingTop: "10px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                        <span style={{ fontSize: "12px", color: "var(--ink-500)" }}>Est. Fare:</span>
                        <strong style={{ fontSize: "14px", color: "var(--saffron-600)" }}>
                          ₹{opt.estimatedCostInr.toLocaleString()}
                        </strong>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                        <span style={{ fontSize: "12px", color: "var(--ink-500)" }}>Comfort:</span>
                        <span style={{ fontSize: "12px", fontWeight: 600 }}>★ {opt.comfortRating}/5</span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span style={{ fontSize: "12px", color: "var(--ink-500)" }}>CO₂ Footprint:</span>
                        <span style={{ fontSize: "12px", color: "var(--emerald-600)", fontWeight: 600 }}>~{opt.co2KgEstimate} kg</span>
                      </div>
                    </div>

                    <p style={{ fontSize: "11px", color: "var(--ink-500)", margin: "8px 0 0", lineHeight: "1.4" }}>
                      {opt.routeHighlights}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {connectivity && (
              <div
                style={{
                  background: "var(--canvas)",
                  border: "1px dashed var(--border)",
                  borderRadius: "var(--radius-md)",
                  padding: "14px 18px",
                  marginTop: "16px",
                  fontSize: "13px",
                  color: "var(--ink-600)",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "20px",
                }}
              >
                <div>
                  <strong>✈️ Nearest Airport:</strong> {connectivity.nearestAirport.name} ({connectivity.nearestAirport.code}) · {connectivity.nearestAirport.distanceKm} km ({connectivity.nearestAirport.driveTime} drive)
                </div>
                <div>
                  <strong>🚆 Nearest Railway:</strong> {connectivity.nearestRailwayStation.name} ({connectivity.nearestRailwayStation.code}) · {connectivity.nearestRailwayStation.distanceKm} km ({connectivity.nearestRailwayStation.driveTime} drive)
                </div>
              </div>
            )}
          </section>

          <section style={{ marginBottom: "50px" }}>
            <div className="section-header" style={{ marginBottom: "20px" }}>
              <div>
                <p className="eyebrow" style={{ color: "var(--saffron-500)", fontFamily: "var(--font-mono)", fontSize: "11px", fontWeight: 700 }}>
                  NOTABLE EXPERIENCES
                </p>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "24px" }}>
                  Key Landmarks & Highlights
                </h3>
              </div>
              <Link href="/activities" className="btn btn-outline btn-sm">
                Explore all activities →
              </Link>
            </div>

            <div className="attractions-list">
              {city.attractions.map((attraction: any, index: number) => (
                <div key={attraction.name} className="attraction-card">
                  <div className="attraction-info">
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                      <span className="badge badge-saffron" style={{ fontSize: "10px", padding: "2px 8px" }}>
                        0{index + 1}
                      </span>
                      <span style={{ fontSize: "12px", color: "var(--ink-400)", fontWeight: 600 }}>
                        {attraction.category}
                      </span>
                    </div>
                    <h3>{attraction.name}</h3>
                    <p>{attraction.description}</p>
                    <div className="attraction-meta">
                      <span>⏱ {attraction.duration}</span>
                      <span>•</span>
                      <span>₹{attraction.estimatedCost > 0 ? `${attraction.estimatedCost} est. entry` : "Free access"}</span>
                    </div>
                  </div>
                  <Link href={`/trips/new?city=${city.id}`} className="btn btn-outline btn-sm" style={{ whiteSpace: "nowrap" }}>
                    ＋ Add to Trip
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {nearbyAttractions.length > 0 && (
            <section style={{ marginBottom: "50px" }}>
              <div className="section-header" style={{ marginBottom: "20px" }}>
                <div>
                  <p className="eyebrow" style={{ color: "var(--saffron-500)", fontFamily: "var(--font-mono)", fontSize: "11px", fontWeight: 700 }}>
                    EXCURSIONS & CIRCUIT EXTENSIONS
                  </p>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "24px" }}>
                    Worthwhile Stops Near {city.name}
                  </h3>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
                {nearbyAttractions.map((att: any) => (
                  <div
                    key={att.id}
                    style={{
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                      borderRadius: "var(--radius-lg)",
                      padding: "16px 18px",
                      boxShadow: "var(--shadow-sm)",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "6px" }}>
                      <span className="badge badge-emerald" style={{ fontSize: "11px" }}>
                        {att.category}
                      </span>
                      <span style={{ fontSize: "12px", fontWeight: 600, color: "var(--ink-500)" }}>
                        📍 {att.distanceKm} km ({att.travelTimeMinutes} min)
                      </span>
                    </div>
                    <h4 style={{ fontSize: "16px", fontWeight: 700, margin: "6px 0" }}>{att.name}</h4>
                    <p style={{ fontSize: "13px", color: "var(--ink-600)", lineHeight: "1.5" }}>
                      {att.whyVisit}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {verifiedStays.length > 0 && (
            <section style={{ marginBottom: "40px" }}>
              <div className="section-header" style={{ marginBottom: "20px" }}>
                <div>
                  <p className="eyebrow" style={{ color: "var(--saffron-500)", fontFamily: "var(--font-mono)", fontSize: "11px", fontWeight: 700 }}>
                    VERIFIED ACCOMMODATIONS
                  </p>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "24px" }}>
                    Where to Stay in {city.name}
                  </h3>
                </div>
                <Link href="/hotels" className="btn btn-outline btn-sm">
                  View all stays →
                </Link>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
                {verifiedStays.map((stay: any) => (
                  <div key={stay.id} className="city-card">
                    <div className="city-card-image-wrap" style={{ height: "160px" }}>
                      <img src={stay.image} alt={stay.name} className="city-card-img" />
                      <div className="city-card-overlay">
                        <span className="badge badge-dark">★ {stay.rating || 4.5}</span>
                        <span className="badge badge-saffron">{stay.type}</span>
                      </div>
                    </div>
                    <div className="city-card-body" style={{ padding: "16px" }}>
                      <h4 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "4px" }}>{stay.name}</h4>
                      <p style={{ fontSize: "12px", color: "var(--ink-500)", marginBottom: "8px" }}>
                        {stay.locationDescription}
                      </p>

                      <div style={{ display: "flex", gap: "4px", flexWrap: "wrap", marginBottom: "12px" }}>
                        {stay.amenities.slice(0, 3).map((am: any) => (
                          <span
                            key={am}
                            style={{
                              fontSize: "10px",
                              background: "var(--canvas)",
                              padding: "2px 6px",
                              borderRadius: "4px",
                              color: "var(--ink-600)",
                            }}
                          >
                            {am}
                          </span>
                        ))}
                      </div>

                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--border)", paddingTop: "10px" }}>
                        <div>
                          <span style={{ fontSize: "13px", fontWeight: 700, color: "var(--saffron-600)" }}>
                            ₹{stay.priceRangeInr ? stay.priceRangeInr.min.toLocaleString() : "2,500"}
                          </span>
                          <small style={{ fontSize: "10px", color: "var(--ink-400)" }}> / night</small>
                        </div>
                        <span style={{ fontSize: "11px", color: "var(--ink-400)", fontWeight: 500 }}>
                          ✓ {stay.verifiedSource}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        <aside>
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-xl)",
              padding: "26px",
              boxShadow: "var(--shadow-sm)",
              position: "sticky",
              top: "96px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div>
              <span className="badge badge-emerald" style={{ marginBottom: "10px" }}>
                Ready to travel?
              </span>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 700 }}>
                Build a trip to {city.name}
              </h3>
              <p style={{ fontSize: "13px", color: "var(--ink-600)", marginTop: "6px" }}>
                Create a customized day-by-day plan for {city.name} and neighboring circuits.
              </p>
            </div>

            <Link href={`/trips/new?city=${city.id}`} className="btn btn-primary btn-block">
              Start Trip with {city.name}
            </Link>

            {destMeta?.estimatedBudgetPerDay && (
              <div
                style={{
                  background: "var(--canvas)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)",
                  padding: "16px",
                }}
              >
                <h4 style={{ fontSize: "13px", fontWeight: 700, textTransform: "uppercase", color: "var(--ink-500)", marginBottom: "10px" }}>
                  Estimated Budget / Day (Per Person)
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "13px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span>🎒 Backpacker:</span>
                    <strong>₹{destMeta.estimatedBudgetPerDay.backpackerInr.toLocaleString()}</strong>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span>🏨 Mid-Range:</span>
                    <strong>₹{destMeta.estimatedBudgetPerDay.midRangeInr.toLocaleString()}</strong>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span>✨ Luxury Comfort:</span>
                    <strong>₹{destMeta.estimatedBudgetPerDay.luxuryInr.toLocaleString()}</strong>
                  </div>
                </div>
              </div>
            )}

            <div style={{ borderTop: "1px solid var(--border)", paddingTop: "16px", fontSize: "12px", color: "var(--ink-500)", display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ display: "flex", gap: "8px" }}>
                <span>💡</span>
                <span>
                  <strong>Ideal season:</strong> {destMeta?.bestTimeToVisit.season || city.bestTimeToVisit}
                </span>
              </div>
              <div style={{ display: "flex", gap: "8px" }}>
                <span>🛡️</span>
                <span>100% verified non-commercial pricing data for conscious Indian travellers.</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
