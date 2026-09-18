"use client";

import { Suspense, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { cities } from "@/lib/data";
import { savedStore } from "@/lib/saved-store";
import { getAllStates, getDestinationById, Region } from "@/lib/destinations";

function ExploreContent() {
  const searchParams = useSearchParams();
  const initialQ = searchParams.get("q") || "";
  const initialCat = searchParams.get("cat") || "All";
  const initialState = searchParams.get("state") || "all";
  const initialRegion = (searchParams.get("region") as Region | "all") || "all";

  const [query, setQuery] = useState(initialQ);
  const [selectedCategory, setSelectedCategory] = useState(initialCat);
  const [selectedState, setSelectedState] = useState<string>(initialState);
  const [selectedRegion, setSelectedRegion] = useState<Region | "all">(initialRegion);
  const [costFilter, setCostFilter] = useState<string>("all");
  const [onlyUnesco, setOnlyUnesco] = useState<boolean>(false);
  const [savedCities, setSavedCities] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];
    return savedStore.read().map((item) => item.id);
  });

  const statesList = useMemo(() => {
    return getAllStates().sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  const regions: (Region | "all")[] = [
    "all",
    "North",
    "South",
    "West",
    "East",
    "Central",
    "North-East",
    "Islands",
  ];

  const categories = [
    "All",
    "Heritage",
    "Beaches",
    "Mountains",
    "Spiritual",
    "Palaces",
    "Lakes",
    "Nature",
    "Food",
    "Culture",
  ];

  const filteredCities = useMemo(() => {
    return cities.filter((city) => {
      const destMeta = getDestinationById(city.id);

      const matchesQuery =
        city.name.toLowerCase().includes(query.toLowerCase()) ||
        city.state.toLowerCase().includes(query.toLowerCase()) ||
        city.shortDescription.toLowerCase().includes(query.toLowerCase()) ||
        (destMeta?.district && destMeta.district.toLowerCase().includes(query.toLowerCase()));

      const matchesCategory =
        selectedCategory === "All" ||
        city.categories.some(
          (c) => c.toLowerCase() === selectedCategory.toLowerCase()
        );

      const matchesCost =
        costFilter === "all" || city.costIndex === costFilter;

      const matchesState =
        selectedState === "all" ||
        city.state.toLowerCase() === selectedState.toLowerCase();

      const matchesRegion =
        selectedRegion === "all" ||
        (destMeta ? destMeta.region === selectedRegion : false);

      const matchesUnesco = !onlyUnesco || (destMeta?.unescoHeritage === true);

      return (
        matchesQuery &&
        matchesCategory &&
        matchesCost &&
        matchesState &&
        matchesRegion &&
        matchesUnesco
      );
    });
  }, [query, selectedCategory, costFilter, selectedState, selectedRegion, onlyUnesco]);

  const toggleSaveCity = (cityId: string, cityName: string, cityState: string) => {
    const key = `city:${cityId}`;
    if (savedCities.includes(key)) {
      savedStore.remove(key);
      setSavedCities(savedCities.filter((id) => id !== key));
    } else {
      savedStore.save({
        id: key,
        type: "city",
        label: cityName,
        detail: cityState,
        savedAt: new Date().toISOString(),
      });
      setSavedCities([...savedCities, key]);
    }
  };

  const handleResetFilters = () => {
    setQuery("");
    setSelectedCategory("All");
    setSelectedState("all");
    setSelectedRegion("all");
    setCostFilter("all");
    setOnlyUnesco(false);
  };

  return (
    <main className="main-content">
      {/* Header Banner */}
      <div className="section-header" style={{ alignItems: "flex-start", flexDirection: "column", gap: "12px" }}>
        <div className="section-title-wrap">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "8px", flexWrap: "wrap" }}>
            <span className="badge badge-saffron">PAN-INDIA DESTINATIONS</span>
            <span className="badge badge-emerald">28 STATES & 8 UNION TERRITORIES</span>
            <span className="badge badge-dark">100% VERIFIED REAL PLACES</span>
          </div>
          <h1 className="section-title">
            Explore <em>Incredible India</em>
          </h1>
          <p className="section-description">
            Discover verified heritage marvels, misty hill stations, pristine coastlines, and ancient temples across every State and Union Territory of India.
          </p>
        </div>

        {/* Region Selector Pills */}
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "12px" }}>
          {regions.map((reg) => (
            <button
              key={reg}
              onClick={() => setSelectedRegion(reg)}
              className={`chip ${selectedRegion === reg ? "active" : ""}`}
              style={{
                fontSize: "13px",
                padding: "6px 14px",
                borderRadius: "999px",
                fontWeight: selectedRegion === reg ? 700 : 500
              }}
            >
              {reg === "all" ? "🌐 All India" : reg}
            </button>
          ))}
        </div>
      </div>

      {/* Filter Toolbar */}
      <div
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius-xl)",
          padding: "20px 24px",
          marginBottom: "32px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          boxShadow: "var(--shadow-sm)",
        }}
      >
        {/* Search, State Selector & Budget Tier */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "14px", alignItems: "center" }}>
          {/* Search Input */}
          <div style={{ position: "relative" }}>
            <span style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "var(--ink-400)" }}>
              ⌕
            </span>
            <input
              type="text"
              placeholder="Search destination, district, or keyword..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="form-input"
              style={{ width: "100%", paddingLeft: "36px", background: "var(--canvas)" }}
            />
          </div>

          {/* State / UT Selector */}
          <div>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="form-select"
              style={{ width: "100%", background: "var(--canvas)", padding: "10px 14px", fontSize: "13px", fontWeight: 600 }}
            >
              <option value="all">📍 All States & UTs ({statesList.length})</option>
              {statesList.map((st) => (
                <option key={st.name} value={st.name}>
                  {st.name} {st.isUT ? "(UT)" : ""} • {st.count} {st.count === 1 ? "destination" : "destinations"}
                </option>
              ))}
            </select>
          </div>

          {/* Budget Tier */}
          <div>
            <select
              value={costFilter}
              onChange={(e) => setCostFilter(e.target.value)}
              className="form-select"
              style={{ width: "100%", background: "var(--canvas)", padding: "10px 14px", fontSize: "13px", fontWeight: 600 }}
            >
              <option value="all">💰 All Budget Tiers</option>
              <option value="Value">Value-friendly (₹)</option>
              <option value="Moderate">Moderate (₹₹)</option>
              <option value="Premium">Premium (₹₹₹)</option>
            </select>
          </div>

          {/* UNESCO World Heritage Toggle */}
          <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", fontSize: "13px", fontWeight: 600, color: "var(--ink-700)" }}>
            <input
              type="checkbox"
              checked={onlyUnesco}
              onChange={(e) => setOnlyUnesco(e.target.checked)}
              style={{ accentColor: "var(--saffron-500)", width: "16px", height: "16px", cursor: "pointer" }}
            />
            <span>🏛️ UNESCO Sites Only</span>
          </label>
        </div>

        {/* Category Chips */}
        <div className="chips-bar" style={{ margin: 0, paddingBottom: 0 }}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`chip ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", flexWrap: "wrap", gap: "10px" }}>
        <p style={{ fontSize: "14px", color: "var(--ink-600)", fontWeight: 600 }}>
          Showing <strong>{filteredCities.length}</strong> verified {filteredCities.length === 1 ? "destination" : "destinations"}
          {selectedRegion !== "all" && ` in ${selectedRegion} India`}
          {selectedState !== "all" && ` · ${selectedState}`}
        </p>

        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          {(query || selectedCategory !== "All" || selectedState !== "all" || selectedRegion !== "all" || costFilter !== "all" || onlyUnesco) && (
            <button onClick={handleResetFilters} className="btn btn-outline btn-sm">
              ✕ Reset Filters
            </button>
          )}
          <Link href="/trips/new" className="btn btn-primary btn-sm">
            <span>＋</span> Plan New Trip
          </Link>
        </div>
      </div>

      {/* Cities Grid */}
      {filteredCities.length > 0 ? (
        <div className="cities-grid">
          {filteredCities.map((city) => {
            const isSaved = savedCities.includes(`city:${city.id}`);
            const destMeta = getDestinationById(city.id);

            return (
              <article key={city.id} className="city-card">
                <div className="city-card-image-wrap">
                  <img
                    src={city.image}
                    alt={city.name}
                    className="city-card-img"
                    loading="lazy"
                  />
                  <div className="city-card-overlay">
                    <div className="city-card-top">
                      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                        <span className="badge badge-saffron">
                          {city.costIndex}
                        </span>
                        {destMeta?.unescoHeritage && (
                          <span className="badge badge-emerald" title="UNESCO World Heritage Site">
                            🏛️ UNESCO
                          </span>
                        )}
                      </div>
                      <button
                        className={`city-card-save-btn ${isSaved ? "saved" : ""}`}
                        onClick={(e) => {
                          e.preventDefault();
                          toggleSaveCity(city.id, city.name, city.state);
                        }}
                        aria-label={isSaved ? "Remove from wishlist" : "Save to wishlist"}
                      >
                        {isSaved ? "♥" : "♡"}
                      </button>
                    </div>
                    <div className="city-card-bottom">
                      <p className="city-state">
                        {destMeta?.district ? `${destMeta.district}, ` : ""}{city.state}
                      </p>
                      <h3 className="city-name">{city.name}</h3>
                    </div>
                  </div>
                </div>

                <div className="city-card-body">
                  <p className="city-card-desc">{city.shortDescription}</p>
                  <div className="city-card-tags">
                    {city.categories.map((tag) => (
                      <span key={tag} className="city-card-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="city-card-footer">
                    <div className="city-card-footer-info">
                      <span className="label">Best Season</span>
                      <span className="value">{city.bestTimeToVisit}</span>
                    </div>
                    <Link href={`/cities/${city.id}`} className="city-card-cta">
                      Explore guide <span>→</span>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div
          style={{
            textAlign: "center",
            padding: "60px 20px",
            background: "var(--surface)",
            borderRadius: "var(--radius-xl)",
            border: "1px solid var(--border)",
          }}
        >
          <span style={{ fontSize: "40px", display: "block", marginBottom: "12px" }}>🔍</span>
          <h3 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "8px" }}>No destinations found</h3>
          <p style={{ color: "var(--ink-500)", marginBottom: "20px", fontSize: "14px" }}>
            Try expanding your search query or choosing a different state or region.
          </p>
          <button className="btn btn-outline btn-sm" onClick={handleResetFilters}>
            Reset All Filters
          </button>
        </div>
      )}
    </main>
  );
}

export default function ExplorePage() {
  return (
    <Suspense fallback={<div style={{ padding: "80px 20px", textAlign: "center" }}>Loading destination catalog...</div>}>
      <ExploreContent />
    </Suspense>
  );
}
