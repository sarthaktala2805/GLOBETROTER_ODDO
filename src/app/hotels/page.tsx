"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { cities, hotels } from "@/lib/data";
import { savedStore } from "@/lib/saved-store";
import { useCurrency } from "@/lib/currency-context";

export default function HotelsPage() {
  const { formatPrice } = useCurrency();
  const [cityId, setCityId] = useState("all");
  const [selectedCat, setSelectedCat] = useState("All");
  const [saved, setSaved] = useState<string[]>([]);

  useEffect(() => {
    setSaved(savedStore.read().map((item) => item.id));
  }, []);

  const categories = ["All", "Heritage", "Boutique", "Luxury", "Homestay"];

  const filteredHotels = useMemo(() => {
    return hotels.filter((hotel) => {
      const matchesCity = cityId === "all" || hotel.cityId === cityId;
      const matchesCat = selectedCat === "All" || hotel.category.toLowerCase() === selectedCat.toLowerCase();
      return matchesCity && matchesCat;
    });
  }, [cityId, selectedCat]);

  const toggleSave = (hotelId: string, hotelName: string, cityName: string) => {
    const key = `stay:${hotelId}`;
    if (saved.includes(key)) {
      savedStore.remove(key);
      setSaved(saved.filter((item) => item !== key));
    } else {
      savedStore.save({
        id: key,
        type: "stay",
        label: hotelName,
        detail: `${cityName} Stay`,
        savedAt: new Date().toISOString(),
      });
      setSaved([...saved, key]);
    }
  };

  return (
    <main className="main-content">
      <div className="section-header">
        <div className="section-title-wrap">
          <p className="eyebrow">CURATED ACCOMMODATION</p>
          <h1 className="section-title">
            Stays & <em>Historic Havens</em>
          </h1>
          <p className="section-description">
            Hand-picked heritage palaces, quiet backwater estates, and atmospheric boutique retreats.
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
              <option value="all">All Locations</option>
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
      {filteredHotels.length > 0 ? (
        <div className="cities-grid">
          {filteredHotels.map((hotel) => {
            const city = cities.find((c) => c.id === hotel.cityId);
            const isSaved = saved.includes(`stay:${hotel.id}`);

            return (
              <article key={hotel.id} className="city-card">
                <div className="city-card-image-wrap" style={{ height: "190px" }}>
                  <img src={hotel.image} alt={hotel.name} className="city-card-img" />
                  <div className="city-card-overlay">
                    <div className="city-card-top">
                      <span className="badge badge-dark">
                        ★ {hotel.rating} ({hotel.reviewsCount})
                      </span>
                      <button
                        className={`city-card-save-btn ${isSaved ? "saved" : ""}`}
                        onClick={() => toggleSave(hotel.id, hotel.name, city?.name || "")}
                        aria-label="Save stay"
                      >
                        {isSaved ? "♥" : "♡"}
                      </button>
                    </div>
                    <div className="city-card-bottom">
                      <span className="badge badge-saffron" style={{ fontSize: "10px" }}>
                        {hotel.category}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="city-card-body">
                  <span style={{ fontSize: "11px", fontFamily: "var(--font-mono)", color: "var(--ink-400)", textTransform: "uppercase" }}>
                    {city?.name}, {city?.state}
                  </span>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 700, margin: "4px 0 8px" }}>
                    {hotel.name}
                  </h3>
                  <p className="city-card-desc">{hotel.description}</p>

                  <div className="city-card-tags">
                    {hotel.amenities.map((amenity) => (
                      <span key={amenity} className="city-card-tag">
                        {amenity}
                      </span>
                    ))}
                  </div>

                  <div className="city-card-footer">
                    <div className="city-card-footer-info">
                      <span className="label">Sample Nightly Est.</span>
                      <span className="value" style={{ color: "var(--saffron-600)" }}>
                        {formatPrice(hotel.estimatedCost)}
                      </span>
                    </div>
                    <Link href={`/cities/${hotel.cityId}`} className="city-card-cta">
                      Explore city <span>→</span>
                    </Link>
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
          <h3>No stays found</h3>
          <p style={{ color: "var(--ink-500)", marginTop: "8px" }}>
            Try selecting a different city or accommodation category.
          </p>
        </div>
      )}
    </main>
  );
}
