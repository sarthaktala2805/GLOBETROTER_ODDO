"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { cities, sampleTrip, hotels } from "@/lib/data";
import { savedStore } from "@/lib/saved-store";

export default function HomePage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [travelStyle, setTravelStyle] = useState("all");
  const [savedCities, setSavedCities] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];
    return savedStore.read().map((item) => item.id);
  });

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    const queryParam = searchQuery ? `q=${encodeURIComponent(searchQuery)}` : "";
    const styleParam = travelStyle !== "all" ? `cat=${encodeURIComponent(travelStyle)}` : "";
    const params = [queryParam, styleParam].filter(Boolean).join("&");
    router.push(`/explore${params ? `?${params}` : ""}`);
  };

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

  return (
    <>
      {/* Hero Section */}
      <section className="hero-full-width">
        <div className="hero-glow-1"></div>
        <div className="hero-glow-2"></div>
        <div className="hero-wrapper">
          <div className="hero-pill-tag">
            <span>✦</span> Personalized India Travel Planner · Phase 1
          </div>
          <h1 className="hero-title">
            Make room for <br />
            <span className="highlight">the unexpected.</span>
          </h1>
          <p className="hero-subtitle">
            Plan multi-city journeys across 200+ Indian destinations. Compare transport options, build day-by-day itineraries, and keep your budget in clear sight.
          </p>

          {/* Floating Search Bar */}
          <form onSubmit={handleSearch} className="search-widget">
            <div className="search-field">
              <span className="search-field-icon">📍</span>
              <div className="search-field-content">
                <span className="search-field-label">Destination</span>
                <input
                  type="text"
                  className="search-field-input"
                  placeholder="e.g. Jaipur, Varanasi, Goa, Udaipur..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="search-divider"></div>

            <div className="search-field">
              <span className="search-field-icon">✨</span>
              <div className="search-field-content">
                <span className="search-field-label">Travel Style</span>
                <select
                  value={travelStyle}
                  onChange={(e) => setTravelStyle(e.target.value)}
                  className="search-field-input"
                  style={{ background: "transparent", cursor: "pointer" }}
                >
                  <option value="all">All Experiences</option>
                  <option value="Heritage">Heritage & Palaces</option>
                  <option value="Beaches">Coastal & Beaches</option>
                  <option value="Mountains">Himalayan Hills</option>
                  <option value="Spiritual">Spiritual Trails</option>
                  <option value="Food">Culinary Exploration</option>
                </select>
              </div>
            </div>

            <button type="submit" className="search-btn">
              <span>Explore</span>
              <span>→</span>
            </button>
          </form>

          {/* Quick Metrics */}
          <div className="hero-badges-row">
            <div className="hero-badge-item">
              <span className="dot"></span>
              <span>20 Representative Seed Destinations</span>
            </div>
            <div className="hero-badge-item">
              <span className="dot"></span>
              <span>Verified Coordinates & Curated Imagery</span>
            </div>
            <div className="hero-badge-item">
              <span className="dot"></span>
              <span>Multi-City Route Builder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="main-content">
        {/* Quick Category Chips */}
        <div style={{ marginTop: "10px", marginBottom: "40px" }}>
          <div className="chips-bar">
            {[
              { label: "🏰 Heritage & Palaces", query: "Heritage" },
              { label: "🌊 Beaches & Coast", query: "Beaches" },
              { label: "🏔️ Himalayan Hills", query: "Mountains" },
              { label: "🛕 Sacred & Spiritual", query: "Spiritual" },
              { label: "🍛 Culinary Trails", query: "Food" },
              { label: "🛶 Backwaters & Lakes", query: "Lakes" },
            ].map((cat) => (
              <Link
                key={cat.query}
                href={`/explore?cat=${encodeURIComponent(cat.query)}`}
                className="chip"
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Featured Destinations Section */}
        <section style={{ marginBottom: "70px" }}>
          <div className="section-header">
            <div className="section-title-wrap">
              <p className="eyebrow">START YOUR JOURNEY</p>
              <h2 className="section-title">
                India, in every <em>direction.</em>
              </h2>
              <p className="section-description">
                Hand-curated destinations with verified landmarks, seasonal recommendations, and estimated travel profiles.
              </p>
            </div>
            <Link href="/explore" className="btn btn-outline btn-sm">
              See all 20 destinations →
            </Link>
          </div>

          <div className="cities-grid">
            {cities.slice(0, 8).map((city) => {
              const isSaved = savedCities.includes(`city:${city.id}`);
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
                        <span className="badge badge-dark">
                          {city.categories[0]}
                        </span>
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
                        <p className="city-state">{city.state}</p>
                        <h3 className="city-name">{city.name}</h3>
                      </div>
                    </div>
                  </div>

                  <div className="city-card-body">
                    <p className="city-card-desc">{city.shortDescription}</p>
                    <div className="city-card-tags">
                      {city.categories.slice(0, 3).map((tag) => (
                        <span key={tag} className="city-card-tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="city-card-footer">
                      <div className="city-card-footer-info">
                        <span className="label">Best Time</span>
                        <span className="value">{city.bestTimeToVisit.split(" ")[0]} - {city.bestTimeToVisit.split(" ")[2] || "Spring"}</span>
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
        </section>

        {/* Feature Banner: Multi-City Itinerary Visualizer */}
        <section className="feature-banner">
          <div className="feature-banner-content">
            <span className="badge badge-saffron" style={{ marginBottom: "14px" }}>
              INTELLIGENT ROUTE BUILDER
            </span>
            <h2>
              A calmer way to move through India.
            </h2>
            <p>
              Connect royal capitals, coastal hideaways, and spiritual ghats in one unified itinerary. Automatically estimate journey times, train/flight options, and daily budget bounds.
            </p>
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <Link href="/trips/new" className="btn btn-primary">
                Create Your First Trip
              </Link>
              <Link href="/trips/royal-rajasthan" className="btn btn-outline" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", borderColor: "rgba(255,255,255,0.25)" }}>
                View Sample Trip
              </Link>
            </div>
          </div>

          <div className="route-stepper-card">
            <div className="route-stepper-header">
              SAMPLE MULTI-CITY ROUTE
            </div>
            <div className="route-stops-flow">
              {sampleTrip.stops.map((stop, index) => {
                const stopCity = cities.find((c) => c.id === stop.cityId);
                return (
                  <div key={stop.cityId} className="route-stop-row">
                    <span className="route-stop-num">0{index + 1}</span>
                    <span className="route-stop-name">{stopCity?.name}</span>
                    <span className="route-stop-line"></span>
                    <span className="route-stop-badge">{stop.date}</span>
                  </div>
                );
              })}
            </div>
            <div style={{ marginTop: "24px", paddingTop: "18px", borderTop: "1px solid rgba(255,255,255,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "13px", color: "#94a3b8" }}>
              <span>3 Stops · 7 Days</span>
              <strong style={{ color: "#ff8c53" }}>₹65,000 Est. Budget</strong>
            </div>
          </div>
        </section>

        {/* Authentic Stays Preview */}
        <section style={{ marginBottom: "70px" }}>
          <div className="section-header">
            <div className="section-title-wrap">
              <p className="eyebrow">CURATED STAYS & HAVENS</p>
              <h2 className="section-title">
                Places worth <em>waking up in.</em>
              </h2>
              <p className="section-description">
                From 200-year-old Rajasthani havelis to quiet Kerala harbor retreats and Himalayan houseboats.
              </p>
            </div>
            <Link href="/hotels" className="btn btn-outline btn-sm">
              Discover all stays →
            </Link>
          </div>

          <div className="cities-grid">
            {hotels.slice(0, 4).map((hotel) => {
              const hotelCity = cities.find((c) => c.id === hotel.cityId);
              return (
                <article key={hotel.id} className="city-card">
                  <div className="city-card-image-wrap">
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="city-card-img"
                      loading="lazy"
                    />
                    <div className="city-card-overlay">
                      <div className="city-card-top">
                        <span className="badge badge-dark">
                          ★ {hotel.rating} ({hotel.reviewsCount})
                        </span>
                        <span className="badge badge-saffron">
                          {hotel.category}
                        </span>
                      </div>
                      <div className="city-card-bottom">
                        <p className="city-state">{hotelCity?.name}, {hotelCity?.state}</p>
                        <h3 className="city-name" style={{ fontSize: "18px" }}>{hotel.name}</h3>
                      </div>
                    </div>
                  </div>

                  <div className="city-card-body">
                    <p className="city-card-desc">{hotel.description}</p>
                    <div className="city-card-tags">
                      {hotel.amenities.slice(0, 3).map((amenity) => (
                        <span key={amenity} className="city-card-tag">
                          {amenity}
                        </span>
                      ))}
                    </div>

                    <div className="city-card-footer">
                      <div className="city-card-footer-info">
                        <span className="label">Estimated Nightly</span>
                        <span className="value" style={{ color: "var(--saffron-600)" }}>
                          ₹{hotel.estimatedCost.toLocaleString()}
                        </span>
                      </div>
                      <Link href={`/cities/${hotel.cityId}`} className="city-card-cta">
                        View city <span>→</span>
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Why BharatYatra Section */}
        <section style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius-xl)",
          padding: "50px 40px",
          marginBottom: "40px"
        }}>
          <div style={{ textAlign: "center", maxWidth: "650px", margin: "0 auto 40px" }}>
            <p className="eyebrow" style={{ color: "var(--saffron-500)", fontFamily: "var(--font-mono)", fontSize: "12px", fontWeight: 700, letterSpacing: "1.5px" }}>
              BUILT FOR THOUGHTFUL TRAVELLERS
            </p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "36px", margin: "10px 0" }}>
              Plan the details. Keep the feeling.
            </h2>
            <p style={{ color: "var(--ink-500)", fontSize: "15px" }}>
              Designed without clutter or fake marketing timers. Built with honest estimates and respect for India’s vast diversity.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
            <div style={{ padding: "24px", background: "var(--canvas)", borderRadius: "var(--radius-lg)" }}>
              <span style={{ fontSize: "28px" }}>🗺️</span>
              <h3 style={{ fontSize: "18px", fontWeight: 700, margin: "12px 0 8px" }}>Living Multi-City Itineraries</h3>
              <p style={{ fontSize: "13px", color: "var(--ink-600)", lineHeight: "1.6" }}>
                Add stops, reorder destinations, and slot activities by time and date. Everything saves to your browser automatically.
              </p>
            </div>

            <div style={{ padding: "24px", background: "var(--canvas)", borderRadius: "var(--radius-lg)" }}>
              <span style={{ fontSize: "28px" }}>🚂</span>
              <h3 style={{ fontSize: "18px", fontWeight: 700, margin: "12px 0 8px" }}>Transparent Transit Comparisons</h3>
              <p style={{ fontSize: "13px", color: "var(--ink-600)", lineHeight: "1.6" }}>
                Compare Vande Bharat trains, domestic flights, cabs, and state buses with clear trade-offs in comfort, time, and sample cost.
              </p>
            </div>

            <div style={{ padding: "24px", background: "var(--canvas)", borderRadius: "var(--radius-lg)" }}>
              <span style={{ fontSize: "28px" }}>💳</span>
              <h3 style={{ fontSize: "18px", fontWeight: 700, margin: "12px 0 8px" }}>Grounded Budgeting</h3>
              <p style={{ fontSize: "13px", color: "var(--ink-600)", lineHeight: "1.6" }}>
                Categorize expenses across stays, transit, food, and sightseeing with visual progress bars and zero hidden calculations.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
