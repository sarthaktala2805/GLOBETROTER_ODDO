"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { cities, sampleTrip } from "@/lib/data";
import { Trip } from "@/lib/models";
import { tripStore } from "@/lib/trip-store";

export default function EditTripPage() {
  const { tripId } = useParams<{ tripId: string }>();
  const router = useRouter();
  const [trip, setTrip] = useState<Trip | null>(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const found = tripStore.read().find((item) => item.id === tripId);
    if (found) {
      setTrip(found);
    } else if (tripId === sampleTrip.id) {
      setTrip(sampleTrip);
    }
  }, [tripId]);

  if (!trip) {
    return (
      <main className="main-content">
        <div style={{ textAlign: "center", padding: "80px 20px" }}>
          <h3>Trip Draft Unavailable</h3>
          <p style={{ color: "var(--ink-500)", margin: "14px 0" }}>Only drafts created in this browser can be modified.</p>
          <Link href="/trips" className="btn btn-primary">
            Back to My Trips
          </Link>
        </div>
      </main>
    );
  }

  const updateStopCity = (index: number, cityId: string) => {
    setTrip({
      ...trip,
      stops: trip.stops.map((stop, i) => (i === index ? { ...stop, cityId } : stop)),
    });
  };

  const moveStop = (index: number, direction: number) => {
    const to = index + direction;
    if (to < 0 || to >= trip.stops.length) return;
    const newStops = [...trip.stops];
    const temp = newStops[index];
    newStops[index] = newStops[to];
    newStops[to] = temp;
    setTrip({ ...trip, stops: newStops });
  };

  const removeStop = (index: number) => {
    if (trip.stops.length <= 1) return;
    setTrip({
      ...trip,
      stops: trip.stops.filter((_, i) => i !== index),
    });
  };

  const addStop = () => {
    setTrip({
      ...trip,
      stops: [...trip.stops, { cityId: "goa", date: "" }],
    });
  };

  const handleSave = () => {
    if (trip.id !== sampleTrip.id) {
      tripStore.save(trip);
    }
    setSaved(true);
    setTimeout(() => {
      router.push(`/trips/${trip.id}`);
    }, 400);
  };

  return (
    <main className="main-content" style={{ maxWidth: "800px" }}>
      <div style={{ marginBottom: "20px" }}>
        <Link href={`/trips/${trip.id}`} style={{ fontSize: "13px", fontWeight: 600, color: "var(--ink-500)" }}>
          ← Back to Trip Hub
        </Link>
      </div>

      <div className="section-title-wrap" style={{ marginBottom: "32px" }}>
        <p className="eyebrow">EDIT JOURNEY</p>
        <h1 className="section-title">
          Modify <em>Route & Budget</em>
        </h1>
      </div>

      <div className="form-box">
        <div className="form-group">
          <label className="form-label">Trip Title</label>
          <input
            className="form-input"
            value={trip.name}
            onChange={(e) => setTrip({ ...trip, name: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Target Budget (₹)</label>
          <input
            type="number"
            min="0"
            className="form-input"
            value={trip.budget}
            onChange={(e) => setTrip({ ...trip, budget: Number(e.target.value) })}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Stops ({trip.stops.length})</label>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {trip.stops.map((stop, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "12px 14px",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--border)",
                  background: "var(--canvas)",
                }}
              >
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--saffron-600)", fontWeight: 700 }}>
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
                      {city.name}, {city.state}
                    </option>
                  ))}
                </select>

                <div style={{ display: "flex", gap: "4px" }}>
                  <button
                    type="button"
                    onClick={() => moveStop(idx, -1)}
                    disabled={idx === 0}
                    style={{ padding: "6px 10px", border: "1px solid var(--border)", borderRadius: "4px", background: "#fff" }}
                  >
                    ↑
                  </button>
                  <button
                    type="button"
                    onClick={() => moveStop(idx, 1)}
                    disabled={idx === trip.stops.length - 1}
                    style={{ padding: "6px 10px", border: "1px solid var(--border)", borderRadius: "4px", background: "#fff" }}
                  >
                    ↓
                  </button>
                  <button
                    type="button"
                    onClick={() => removeStop(idx)}
                    disabled={trip.stops.length <= 1}
                    style={{ padding: "6px 10px", border: "1px solid var(--border)", borderRadius: "4px", background: "#fff", color: "#ef4444" }}
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
            style={{ marginTop: "12px", alignSelf: "flex-start" }}
          >
            ＋ Add Another Stop
          </button>
        </div>

        <div style={{ display: "flex", gap: "12px", marginTop: "32px", borderTop: "1px solid var(--border)", paddingTop: "20px" }}>
          <button type="button" onClick={handleSave} className="btn btn-primary btn-block">
            {saved ? "✓ Changes Saved!" : "Save Changes"}
          </button>
          <Link href={`/trips/${trip.id}`} className="btn btn-outline">
            Cancel
          </Link>
        </div>
      </div>
    </main>
  );
}
