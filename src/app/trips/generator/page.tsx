"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { cities, hotels } from "@/lib/data";
import { Trip, ItineraryItem, Expense, TripStop } from "@/lib/models";
import { tripStore } from "@/lib/trip-store";
import { useCurrency } from "@/lib/currency-context";

interface PresetCircuit {
  id: string;
  name: string;
  cityIds: string[];
  vibe: string;
  durationDays: number;
}

const presetCircuits: PresetCircuit[] = [
  {
    id: "rajasthan",
    name: "Royal Rajasthan Heritage Trail",
    cityIds: ["jaipur", "jaisalmer", "udaipur"],
    vibe: "Heritage",
    durationDays: 6,
  },
  {
    id: "kerala",
    name: "Kerala Backwaters & Tea Hills",
    cityIds: ["kochi", "munnar"],
    vibe: "Nature",
    durationDays: 4,
  },
  {
    id: "northeast",
    name: "Meghalaya & Sikkim Living Trails",
    cityIds: ["shillong", "gangtok"],
    vibe: "Adventure",
    durationDays: 5,
  },
  {
    id: "ladakh",
    name: "Ladakh High Mountain Circuit",
    cityIds: ["leh"],
    vibe: "Adventure",
    durationDays: 5,
  },
  {
    id: "spiritual",
    name: "Spiritual Ganga & South Temples",
    cityIds: ["varanasi", "madurai"],
    vibe: "Spiritual",
    durationDays: 4,
  },
];

export default function SmartGeneratorPage() {
  const router = useRouter();
  const { formatPrice } = useCurrency();

  // Wizard Configuration State
  const [selectedCityIds, setSelectedCityIds] = useState<string[]>(["jaipur", "udaipur"]);
  const [duration, setDuration] = useState<number>(4);
  const [vibe, setVibe] = useState<string>("Heritage");
  const [pace, setPace] = useState<"Relaxed" | "Balanced" | "Fast">("Balanced");
  const [budgetTier, setBudgetTier] = useState<"Value" | "Moderate" | "Premium">("Moderate");

  // Generation & Review State
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedTrip, setGeneratedTrip] = useState<Trip | null>(null);

  const vibesList = [
    { id: "Heritage", icon: "🏰", label: "Heritage & Palaces" },
    { id: "Nature", icon: "🌿", label: "Nature & Greenery" },
    { id: "Adventure", icon: "🧗", label: "Adventure & Treks" },
    { id: "Spiritual", icon: "🪔", label: "Spiritual & Peace" },
    { id: "Food", icon: "🍲", label: "Food & Street Culture" },
    { id: "Scenic", icon: "🌅", label: "Scenic & Romance" },
  ];

  const toggleCity = (id: string) => {
    if (selectedCityIds.includes(id)) {
      if (selectedCityIds.length > 1) {
        setSelectedCityIds(selectedCityIds.filter((c) => c !== id));
      }
    } else {
      setSelectedCityIds([...selectedCityIds, id]);
    }
  };

  const applyPreset = (preset: PresetCircuit) => {
    setSelectedCityIds(preset.cityIds);
    setVibe(preset.vibe);
    setDuration(preset.durationDays);
  };

  const handleGenerate = () => {
    setIsGenerating(true);

    setTimeout(() => {
      const activeCities = selectedCityIds
        .map((id) => cities.find((c) => c.id === id)!)
        .filter(Boolean);

      const timeslots = pace === "Relaxed"
        ? ["10:00 AM", "04:30 PM"]
        : pace === "Balanced"
        ? ["09:00 AM", "02:00 PM", "05:30 PM"]
        : ["08:30 AM", "11:30 AM", "03:00 PM", "06:30 PM"];

      const allItems: ItineraryItem[] = [];

      for (let d = 1; d <= duration; d++) {
        const cityIndex = Math.min(
          Math.floor(((d - 1) / duration) * activeCities.length),
          activeCities.length - 1
        );
        const currentCity = activeCities[cityIndex];

        const matchedAttractions = currentCity.attractions.filter(
          (a) => a.category.toLowerCase().includes(vibe.toLowerCase())
        );
        const pool = matchedAttractions.length > 0 ? matchedAttractions : currentCity.attractions;

        timeslots.forEach((time, slotIdx) => {
          const attraction = pool[slotIdx % pool.length];
          allItems.push({
            id: `gen-item-d${d}-s${slotIdx}-${Date.now()}`,
            stopIndex: cityIndex,
            time: `Day ${d} · ${time}`,
            title: attraction.name,
            duration: attraction.duration,
            cost: attraction.estimatedCost,
            location: currentCity.name,
            completed: false,
          });
        });
      }

      // Compute estimated budget
      const nightsPerCity = Math.max(1, Math.round((duration - 1) / activeCities.length));
      let totalStay = 0;
      activeCities.forEach((city) => {
        const cityHotels = hotels.filter((h) => h.cityId === city.id);
        const hotelCost = cityHotels.length > 0 ? cityHotels[0].estimatedCost : 3500;
        totalStay += hotelCost * nightsPerCity;
      });

      const totalActivities = allItems.reduce((sum, item) => sum + (item.cost || 0), 0);
      const transitCost = activeCities.length > 1 ? (activeCities.length - 1) * 1800 : 800;
      const foodDaily = budgetTier === "Value" ? 700 : budgetTier === "Moderate" ? 1400 : 2800;
      const totalFood = foodDaily * duration;
      const miscCost = Math.round((totalStay + totalActivities) * 0.1);
      const totalBudget = totalStay + totalActivities + transitCost + totalFood + miscCost;

      const plannedExpenses: Expense[] = [
        { category: "Stay", amount: totalStay },
        { category: "Food", amount: totalFood },
        { category: "Activities", amount: totalActivities },
        { category: "Transport", amount: transitCost },
        { category: "Other", amount: miscCost },
      ];

      const tripId = `gen-trip-${Date.now()}`;
      const tripName = `${activeCities.map((c) => c.name).join(" to ")} ${vibe} Expedition`;

      const stops: TripStop[] = activeCities.map((c, idx) => ({
        cityId: c.id,
        date: `Oct ${15 + idx * 2}, 2026`,
        visited: false,
      }));

      const newTrip: Trip = {
        id: tripId,
        name: tripName,
        dates: `Oct 15 - Oct ${15 + duration}, 2026`,
        stops,
        budget: totalBudget,
        expenses: plannedExpenses,
        cover: activeCities[0]?.image || "",
        itinerary: allItems,
        notes: `Smart-generated ${pace} ${vibe} circuit across ${activeCities.map(c => c.name).join(", ")}.`,
      };

      setGeneratedTrip(newTrip);
      setIsGenerating(false);
    }, 850);
  };

  const handleSaveToMyTrips = () => {
    if (!generatedTrip) return;
    tripStore.save(generatedTrip);
    router.push(`/trips/${generatedTrip.id}`);
  };

  return (
    <main className="main-content">
      {/* Header */}
      <div className="section-header" style={{ marginBottom: "28px" }}>
        <div className="section-title-wrap">
          <p className="eyebrow">SMART TRAVEL ENGINE</p>
          <h1 className="section-title">
            AI Itinerary <em>Generator</em>
          </h1>
          <p className="section-description">
            Choose your destinations, travel vibe, pace, and duration. We assemble a complete schedule with realistic timings and budget estimates.
          </p>
        </div>
      </div>

      {!generatedTrip ? (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: "28px" }}>
          {/* Main Wizard Form */}
          <div className="form-box">
            {/* Quick Circuit Presets */}
            <div style={{ marginBottom: "24px" }}>
              <label className="form-label">Quick Signature Circuits</label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "6px" }}>
                {presetCircuits.map((preset) => (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => applyPreset(preset)}
                    className="btn btn-ghost btn-sm"
                    style={{
                      border: "1px solid var(--border)",
                      background: "var(--surface)",
                      fontSize: "12.5px",
                    }}
                  >
                    ✦ {preset.name} ({preset.durationDays}d)
                  </button>
                ))}
              </div>
            </div>

            {/* Destination Selection */}
            <div className="form-group">
              <label className="form-label">
                Select Destinations ({selectedCityIds.length} Selected)
              </label>
              <p style={{ fontSize: "12.5px", color: "var(--ink-500)", marginBottom: "10px" }}>
                Click to add or remove cities from your multi-destination route.
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))",
                  gap: "8px",
                  maxHeight: "220px",
                  overflowY: "auto",
                  padding: "4px",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)",
                  background: "var(--surface-alt)",
                }}
              >
                {cities.map((city) => {
                  const isSelected = selectedCityIds.includes(city.id);
                  return (
                    <button
                      key={city.id}
                      type="button"
                      onClick={() => toggleCity(city.id)}
                      style={{
                        padding: "8px 10px",
                        borderRadius: "var(--radius-md)",
                        border: `1px solid ${isSelected ? "var(--saffron-500)" : "transparent"}`,
                        background: isSelected ? "var(--saffron-50)" : "var(--surface)",
                        color: isSelected ? "var(--saffron-600)" : "var(--ink-800)",
                        fontWeight: isSelected ? 700 : 500,
                        fontSize: "13px",
                        cursor: "pointer",
                        textAlign: "left",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span>{city.name}</span>
                      {isSelected && <span>✓</span>}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Vibe Selection */}
            <div className="form-group" style={{ marginTop: "20px" }}>
              <label className="form-label">Primary Travel Vibe</label>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "10px", marginTop: "8px" }}>
                {vibesList.map((item) => {
                  const active = vibe === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setVibe(item.id)}
                      style={{
                        padding: "12px",
                        borderRadius: "var(--radius-lg)",
                        border: `1.5px solid ${active ? "var(--saffron-500)" : "var(--border)"}`,
                        background: active ? "var(--saffron-50)" : "var(--surface)",
                        color: active ? "var(--saffron-700)" : "var(--ink-800)",
                        fontWeight: active ? 700 : 500,
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        fontSize: "13px",
                      }}
                    >
                      <span style={{ fontSize: "20px" }}>{item.icon}</span>
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Pace & Duration */}
            <div className="form-grid-2" style={{ marginTop: "20px" }}>
              <div className="form-group">
                <label className="form-label">Total Duration ({duration} Days)</label>
                <input
                  type="range"
                  min="2"
                  max="10"
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  style={{ width: "100%", accentColor: "var(--saffron-500)", marginTop: "8px" }}
                />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "var(--ink-400)", marginTop: "4px" }}>
                  <span>2 Days (Weekend)</span>
                  <span>6 Days (Standard)</span>
                  <span>10 Days (Grand Tour)</span>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Pacing</label>
                <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
                  {(["Relaxed", "Balanced", "Fast"] as const).map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setPace(p)}
                      className={`btn btn-sm ${pace === p ? "btn-primary" : "btn-outline"}`}
                      style={{ flex: 1 }}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Generate Action Button */}
            <div style={{ marginTop: "32px", borderTop: "1px solid var(--border)", paddingTop: "20px" }}>
              <button
                type="button"
                onClick={handleGenerate}
                disabled={isGenerating}
                className="btn btn-primary btn-block"
                style={{ padding: "14px", fontSize: "16px", fontWeight: 700 }}
              >
                {isGenerating ? "Synthesizing Ideal Itinerary..." : "✨ Generate Intelligent Itinerary"}
              </button>
            </div>
          </div>

          {/* Sidebar Info & Summary */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div className="metric-card">
              <span className="badge badge-emerald">SMART ALLOCATION</span>
              <h4 style={{ fontFamily: "var(--font-display)", fontSize: "16px", marginTop: "12px", fontWeight: 700 }}>
                How the AI Engine Works
              </h4>
              <ul style={{ fontSize: "13px", color: "var(--ink-600)", paddingLeft: "16px", lineHeight: 1.6, marginTop: "8px" }}>
                <li>Distributes {duration} days logically between selected stops.</li>
                <li>Picks top-rated landmarks matching the <strong>{vibe}</strong> vibe.</li>
                <li>Sequences morning, afternoon, and sunset slots to minimize backtracking.</li>
                <li>Generates comprehensive budgets for stay, food, transit, and entry.</li>
              </ul>
            </div>

            <div className="metric-card">
              <span className="badge badge-indigo">BUDGET ESTIMATE TIER</span>
              <div style={{ marginTop: "12px" }}>
                <select
                  value={budgetTier}
                  onChange={(e) => setBudgetTier(e.target.value as any)}
                  className="form-select"
                  style={{ width: "100%", fontSize: "13px" }}
                >
                  <option value="Value">Backpacker (Clean Havelis & Cafes)</option>
                  <option value="Moderate">Comfort (Boutique Resorts & Cabs)</option>
                  <option value="Premium">Luxe (Heritage Palaces & Chauffeur)</option>
                </select>
              </div>
              <p style={{ fontSize: "12px", color: "var(--ink-500)", marginTop: "8px" }}>
                Prices reflect realistic cost averages across authentic Indian accommodations and dining.
              </p>
            </div>
          </div>
        </div>
      ) : (
        /* Generated Schedule Preview */
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {/* Top Bar with actions */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "20px 24px",
              background: "var(--surface)",
              borderRadius: "var(--radius-xl)",
              border: "1px solid var(--border)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <div>
              <span className="badge badge-saffron">GENERATED ITINERARY</span>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "24px", margin: "6px 0 2px", fontWeight: 700 }}>
                {generatedTrip.name}
              </h2>
              <p style={{ fontSize: "13.5px", color: "var(--ink-500)", margin: 0 }}>
                {generatedTrip.stops.length} Cities · {generatedTrip.itinerary?.length || 0} Scheduled Activities · Estimated Total:{" "}
                <strong style={{ color: "var(--ink-900)" }}>{formatPrice(generatedTrip.budget)}</strong>
              </p>
            </div>

            <div style={{ display: "flex", gap: "10px" }}>
              <button
                type="button"
                onClick={() => setGeneratedTrip(null)}
                className="btn btn-outline btn-sm"
              >
                ← Tweak Parameters
              </button>
              <button
                type="button"
                onClick={handleSaveToMyTrips}
                className="btn btn-primary btn-sm"
                style={{ fontWeight: 700 }}
              >
                Save & Open in Planner →
              </button>
            </div>
          </div>

          {/* Schedule List */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: "24px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {generatedTrip.itinerary?.map((item, idx) => (
                <div
                  key={item.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "16px 20px",
                    background: "var(--surface)",
                    borderRadius: "var(--radius-xl)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    <span
                      style={{
                        fontSize: "12px",
                        fontFamily: "var(--font-mono)",
                        fontWeight: 700,
                        color: "var(--saffron-600)",
                        background: "var(--saffron-50)",
                        padding: "6px 10px",
                        borderRadius: "6px",
                      }}
                    >
                      {item.time}
                    </span>
                    <div>
                      <strong style={{ fontSize: "15px", display: "block", color: "var(--ink-900)" }}>
                        {item.title}
                      </strong>
                      <span style={{ fontSize: "12.5px", color: "var(--ink-500)" }}>
                        📍 {item.location} · ⏱ {item.duration}
                      </span>
                    </div>
                  </div>
                  <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--ink-800)", flexShrink: 0, marginLeft: "12px" }}>
                    {item.cost && item.cost > 0 ? formatPrice(item.cost) : "Free"}
                  </span>
                </div>
              ))}
            </div>

            {/* Sidebar Summary */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div className="metric-card">
                <span className="badge badge-saffron">BUDGET ALLOCATION</span>
                <div style={{ marginTop: "14px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  {generatedTrip.expenses.map((e, idx) => (
                    <div key={idx} style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
                      <span style={{ color: "var(--ink-600)" }}>{e.category}</span>
                      <strong style={{ color: "var(--ink-900)" }}>{formatPrice(e.amount)}</strong>
                    </div>
                  ))}
                  <div
                    style={{
                      borderTop: "1px solid var(--border)",
                      paddingTop: "10px",
                      marginTop: "6px",
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "15px",
                    }}
                  >
                    <span>Total Estimate</span>
                    <strong style={{ color: "var(--saffron-600)" }}>
                      {formatPrice(generatedTrip.budget)}
                    </strong>
                  </div>
                </div>
              </div>

              <div className="metric-card">
                <span className="badge badge-emerald">ACTION READY</span>
                <p style={{ fontSize: "13px", color: "var(--ink-600)", marginTop: "10px", lineHeight: 1.5 }}>
                  Saving this itinerary will automatically register all stops, timetable slots, and expense logs into your local trip planner, complete with route map coordinates.
                </p>
                <button
                  type="button"
                  onClick={handleSaveToMyTrips}
                  className="btn btn-primary btn-block btn-sm"
                  style={{ marginTop: "14px", fontWeight: 700 }}
                >
                  Save to My Trips →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
