"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { cities, sampleTrip } from "@/lib/data";
import { Trip } from "@/lib/models";
import { tripStore } from "@/lib/trip-store";

export default function SharedTripPage() {
  const params = useParams<{ tripId: string }>();
  const router = useRouter();
  const tripId = params?.tripId;

  const [trip, setTrip] = useState<Trip>(sampleTrip);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (tripId) {
      const found = tripStore.read().find((t) => t.id === tripId);
      if (found) {
        setTrip(found);
      }
    }
  }, [tripId]);

  const copyTripToLocal = () => {
    const newId = `trip-${Date.now()}`;
    const cloned: Trip = {
      ...trip,
      id: newId,
      name: `${trip.name} (My Copy)`,
      public: false,
      stops: trip.stops.map((s) => ({ ...s, visited: false })),
      expenses: trip.expenses.map((e) => ({ ...e })),
      itinerary: trip.itinerary ? trip.itinerary.map((i) => ({ ...i, completed: false })) : []
    };

    tripStore.save(cloned);
    setCopied(true);
    setTimeout(() => {
      router.push(`/trips/${newId}`);
    }, 600);
  };

  const totalEstimate = trip.expenses.reduce((sum, item) => sum + item.amount, 0);

  return (
    <main className="main-content" style={{ maxWidth: "860px" }}>
      <div style={{ textAlign: "center", marginBottom: "36px" }}>
        <span className="badge badge-saffron" style={{ marginBottom: "12px" }}>
          PUBLIC ITINERARY BY BHARATYATRA
        </span>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(34px, 4.5vw, 48px)", color: "var(--ink-900)", marginBottom: "8px" }}>
          {trip.name}
        </h1>
        <p style={{ color: "var(--ink-500)", fontSize: "15px" }}>
          {trip.dates} · {trip.stops.length} destinations · Curated India Route
        </p>
      </div>

      {/* Cover Image */}
      <div style={{
        height: "300px",
        borderRadius: "var(--radius-xl)",
        overflow: "hidden",
        position: "relative",
        marginBottom: "32px",
        boxShadow: "var(--shadow-md)"
      }}>
        <img
          src={trip.cover.startsWith("http") ? trip.cover : "https://images.pexels.com/photos/28428787/pexels-photo-28428787.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"}
          alt={trip.name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 100%)",
          display: "flex",
          alignItems: "flex-end",
          padding: "24px",
          color: "#fff"
        }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 700 }}>
            Curated Multi-City Journey
          </span>
        </div>
      </div>

      {/* Summary Box */}
      <div style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-xl)",
        padding: "32px",
        marginBottom: "32px",
        display: "grid",
        gridTemplateColumns: "1.2fr 0.8fr",
        gap: "32px"
      }}>
        <div>
          <h4 style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--ink-400)", textTransform: "uppercase", marginBottom: "12px" }}>
            ROUTE SEQUENCE
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {trip.stops.map((stop, idx) => {
              const city = cities.find((c) => c.id === stop.cityId);
              return (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    background: "var(--saffron-500)",
                    color: "#fff",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "11px",
                    fontWeight: 700
                  }}>
                    0{idx + 1}
                  </span>
                  <strong style={{ fontSize: "15px" }}>{city?.name || stop.cityId}</strong>
                  <span style={{ fontSize: "12px", color: "var(--ink-400)" }}>{city?.state}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div style={{ borderLeft: "1px solid var(--border)", paddingLeft: "32px" }}>
          <h4 style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--ink-400)", textTransform: "uppercase", marginBottom: "8px" }}>
            ESTIMATED BUDGET
          </h4>
          <p style={{ fontSize: "36px", fontWeight: 800, color: "var(--ink-900)", letterSpacing: "-0.5px" }}>
            ₹{totalEstimate.toLocaleString()}
          </p>
          <p style={{ fontSize: "12px", color: "var(--ink-500)", marginTop: "4px" }}>
            Sample estimates for stays, transit, and experiences.
          </p>
        </div>
      </div>

      {/* Copy / Fork Button */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <button
          type="button"
          onClick={copyTripToLocal}
          className="btn btn-primary btn-lg"
          style={{ minWidth: "300px" }}
        >
          {copied ? "✓ Copied! Opening your planner..." : "Copy This Trip to My Planner ＋"}
        </button>
        <p style={{ color: "var(--ink-500)", fontSize: "13px", marginTop: "10px" }}>
          Creates a fully editable local duplicate stored in your browser.
        </p>
      </div>
    </main>
  );
}
