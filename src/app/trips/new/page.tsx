"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { cities } from "@/lib/data";
import { TripStop } from "@/lib/models";
import { tripStore } from "@/lib/trip-store";

function NewTripContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialCity = searchParams.get("city") || "delhi";

  const [name, setName] = useState("Golden Heritage & Royal Waters");
  const [budget, setBudget] = useState(50000);
  const [startDate, setStartDate] = useState("2026-10-15");
  const [endDate, setEndDate] = useState("2026-10-22");
  const [stops, setStops] = useState<TripStop[]>([
    { cityId: initialCity, date: "15 Oct" },
    { cityId: initialCity === "jaipur" ? "udaipur" : "jaipur", date: "18 Oct" },
  ]);

  const addStop = () => {
    const remainingCities = cities.filter(
      (c) => !stops.some((s) => s.cityId === c.id)
    );
    const nextCity = remainingCities.length > 0 ? remainingCities[0].id : "goa";
    setStops([...stops, { cityId: nextCity, date: "" }]);
  };

  const removeStop = (index: number) => {
    if (stops.length <= 1) return;
    setStops(stops.filter((_, i) => i !== index));
  };

  const moveStop = (index: number, direction: number) => {
    const targetIndex = index + direction;
    if (targetIndex < 0 || targetIndex >= stops.length) return;
    const newStops = [...stops];
    const temp = newStops[index];
    newStops[index] = newStops[targetIndex];
    newStops[targetIndex] = temp;
    setStops(newStops);
  };

  const updateStopCity = (index: number, cityId: string) => {
    setStops(
      stops.map((stop, i) => (i === index ? { ...stop, cityId } : stop))
    );
  };

  const handleCreate = () => {
    const id = `trip-${Date.now()}`;
    const formattedDates = startDate && endDate ? `${startDate} – ${endDate}` : "Dates to be finalized";
    const selectedCity = cities.find((c) => c.id === stops[0]?.cityId);
    const coverImage = selectedCity?.image || "https://images.pexels.com/photos/28428787/pexels-photo-28428787.jpeg?auto=compress&cs=tinysrgb&h=650&w=940";

    tripStore.save({
      id,
      name: name.trim() || "Untitled Journey",
      dates: formattedDates,
      budget: Number(budget) || 40000,
      stops: stops.map((s, idx) => ({ ...s, visited: false })),
      expenses: [
        { category: "Stay", amount: Math.round(budget * 0.4) },
        { category: "Transport", amount: Math.round(budget * 0.25) },
        { category: "Food", amount: Math.round(budget * 0.15) },
        { category: "Activities", amount: Math.round(budget * 0.1) },
        { category: "Other", amount: Math.round(budget * 0.1) },
      ],
      cover: coverImage,
      public: true,
      itinerary: [
        {
          id: `itin-${Date.now()}-1`,
          stopIndex: 0,
          time: "10:00",
          title: `Explore ${selectedCity?.name || "City"} Landmarks`,
          duration: "3 hours",
          completed: false,
          cost: 150,
          location: selectedCity?.name || "City"
        }
      ]
    });

    router.push(`/trips/${id}`);
  };

  return (
    <main className="main-content" style={{ maxWidth: "800px" }}>
      <div style={{ marginBottom: "24px" }}>
        <Link href="/trips" style={{ fontSize: "13px", fontWeight: 600, color: "var(--ink-500)" }}>
          ← Back to My Trips
        </Link>
      </div>

      <div className="section-title-wrap" style={{ marginBottom: "32px" }}>
        <p className="eyebrow">TRIP ARCHITECT</p>
        <h1 className="section-title">
          Shape a new <em>Journey</em>
        </h1>
        <p className="section-description">
          Define your stops, approximate dates, and total budget. You can customize the day-wise itinerary anytime later.
        </p>
      </div>

      <div className="form-box">
        {/* Trip Title */}
        <div className="form-group">
          <label className="form-label">Trip Name</label>
          <input
            type="text"
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Royal Rajasthan & Sacred River Trail"
          />
        </div>

        {/* Dates */}
        <div className="form-grid-2">
          <div className="form-group">
            <label className="form-label">Start Date</label>
            <input
              type="date"
              className="form-input"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">End Date</label>
            <input
              type="date"
              className="form-input"
              value={endDate}
              min={startDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>

        {/* Budget */}
        <div className="form-group">
          <label className="form-label">Total Estimated Budget (₹)</label>
          <input
            type="number"
            min="5000"
            step="1000"
            className="form-input"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
          />
          <small style={{ color: "var(--ink-400)", fontSize: "11px", marginTop: "4px" }}>
            Helps calculate spending thresholds and category distributions.
          </small>
        </div>

        {/* Stops List */}
        <div className="form-group" style={{ marginTop: "24px" }}>
          <label className="form-label" style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Route Stops ({stops.length})</span>
            <span style={{ fontSize: "11px", color: "var(--ink-400)", fontWeight: 500 }}>
              Use arrows to reorder
            </span>
          </label>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "8px" }}>
            {stops.map((stop, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  background: "var(--canvas)",
                  padding: "12px 16px",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--border)",
                }}
              >
                <span
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: "var(--saffron-500)",
                    color: "#fff",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "12px",
                    fontWeight: 700,
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  0{idx + 1}
                </span>

                <select
                  value={stop.cityId}
                  onChange={(e) => updateStopCity(idx, e.target.value)}
                  className="form-select"
                  style={{ flex: 1 }}
                >
                  {cities.map((city) => (
                    <option key={city.id} value={city.id}>
                      {city.name} — {city.state} ({city.costIndex})
                    </option>
                  ))}
                </select>

                <div style={{ display: "flex", gap: "4px" }}>
                  <button
                    type="button"
                    onClick={() => moveStop(idx, -1)}
                    disabled={idx === 0}
                    style={{
                      padding: "6px 10px",
                      border: "1px solid var(--border)",
                      borderRadius: "var(--radius-sm)",
                      background: idx === 0 ? "transparent" : "#fff",
                      opacity: idx === 0 ? 0.4 : 1,
                    }}
                  >
                    ↑
                  </button>
                  <button
                    type="button"
                    onClick={() => moveStop(idx, 1)}
                    disabled={idx === stops.length - 1}
                    style={{
                      padding: "6px 10px",
                      border: "1px solid var(--border)",
                      borderRadius: "var(--radius-sm)",
                      background: idx === stops.length - 1 ? "transparent" : "#fff",
                      opacity: idx === stops.length - 1 ? 0.4 : 1,
                    }}
                  >
                    ↓
                  </button>
                  <button
                    type="button"
                    onClick={() => removeStop(idx)}
                    disabled={stops.length <= 1}
                    style={{
                      padding: "6px 10px",
                      border: "1px solid var(--border)",
                      borderRadius: "var(--radius-sm)",
                      background: stops.length <= 1 ? "transparent" : "#fff",
                      color: "#ef4444",
                      opacity: stops.length <= 1 ? 0.4 : 1,
                    }}
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={addStop}
            className="btn btn-outline btn-sm"
            style={{ marginTop: "14px", alignSelf: "flex-start" }}
          >
            ＋ Add Another Stop
          </button>
        </div>

        {/* Submit Button */}
        <div style={{ marginTop: "32px", borderTop: "1px solid var(--border)", paddingTop: "24px" }}>
          <button
            type="button"
            onClick={handleCreate}
            className="btn btn-primary btn-block btn-lg"
          >
            Save Trip & Open Trip Hub →
          </button>
        </div>
      </div>
    </main>
  );
}

export default function NewTripPage() {
  return (
    <Suspense fallback={<div style={{ padding: "80px 20px", textAlign: "center" }}>Loading trip wizard...</div>}>
      <NewTripContent />
    </Suspense>
  );
}
