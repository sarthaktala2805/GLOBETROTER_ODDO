"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cities, sampleTrip } from "@/lib/data";
import { Trip } from "@/lib/models";
import { tripStore } from "@/lib/trip-store";

function TripCard({ trip, isLocal = false }: { trip: Trip; isLocal?: boolean }) {
  const totalSpend = trip.expenses.reduce((sum, item) => sum + item.amount, 0);
  const completedStops = trip.stops.filter((s) => s.visited).length;
  const progressPercent = trip.stops.length
    ? Math.round((completedStops / trip.stops.length) * 100)
    : 0;

  return (
    <article
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-xl)",
        overflow: "hidden",
        boxShadow: "var(--shadow-sm)",
        display: "grid",
        gridTemplateColumns: "280px 1fr auto",
        gap: "24px",
        alignItems: "center",
        transition: "all 0.2s ease",
        marginBottom: "20px",
      }}
      className="trip-card-container"
    >
      {/* Cover */}
      <div style={{ height: "200px", position: "relative", overflow: "hidden", background: "#1e293b" }}>
        <img
          src={trip.cover.startsWith("http") ? trip.cover : "https://images.pexels.com/photos/28428787/pexels-photo-28428787.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"}
          alt={trip.name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.7) 100%)",
          display: "flex",
          alignItems: "flex-end",
          padding: "16px",
          color: "#fff"
        }}>
          <span className="badge badge-saffron" style={{ fontSize: "10px" }}>
            {isLocal ? "Device Draft" : "Featured Route"}
          </span>
        </div>
      </div>

      {/* Trip Info */}
      <div style={{ padding: "16px 0" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
          <span style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--saffron-600)", fontWeight: 600 }}>
            {trip.dates || "Flexible Dates"}
          </span>
          <span>•</span>
          <span style={{ fontSize: "12px", color: "var(--ink-500)" }}>
            {trip.stops.length} destinations
          </span>
        </div>

        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 700, color: "var(--ink-900)", marginBottom: "12px" }}>
          {trip.name}
        </h3>

        {/* Stops Pill Flow */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "14px" }}>
          {trip.stops.map((stop, idx) => {
            const cityName = cities.find((c) => c.id === stop.cityId)?.name || stop.cityId;
            return (
              <span
                key={`${stop.cityId}-${idx}`}
                className="badge badge-indigo"
                style={{ fontSize: "11px", textTransform: "none", display: "inline-flex", alignItems: "center", gap: "4px" }}
              >
                {stop.visited ? "✓" : `0${idx + 1}`} {cityName}
              </span>
            );
          })}
        </div>

        {/* Progress Bar */}
        <div style={{ maxWidth: "340px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "var(--ink-500)", marginBottom: "4px" }}>
            <span>Trip Progress</span>
            <span>{progressPercent}% Complete</span>
          </div>
          <div className="progress-bar-wrap" style={{ margin: 0, height: "6px" }}>
            <div className="progress-bar-fill" style={{ width: `${progressPercent}%` }}></div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div style={{
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "center",
        gap: "12px",
        borderLeft: "1px solid var(--border)",
        height: "100%"
      }}>
        <div style={{ textAlign: "right" }}>
          <span style={{ fontSize: "11px", color: "var(--ink-400)", textTransform: "uppercase", fontWeight: 600, display: "block" }}>
            Estimated Budget
          </span>
          <strong style={{ fontSize: "20px", color: "var(--ink-900)" }}>
            ₹{trip.budget.toLocaleString()}
          </strong>
        </div>

        <Link href={`/trips/${trip.id}`} className="btn btn-primary btn-sm">
          Open Trip Hub →
        </Link>
        <Link href={`/shared/${trip.id}`} style={{ fontSize: "12px", color: "var(--ink-500)", fontWeight: 600 }}>
          Public Link
        </Link>
      </div>
    </article>
  );
}

export default function TripsPage() {
  const [trips, setTrips] = useState<Trip[]>([]);

  useEffect(() => {
    setTrips(tripStore.read());
  }, []);

  return (
    <main className="main-content">
      <div className="section-header">
        <div className="section-title-wrap">
          <p className="eyebrow">YOUR JOURNEYS</p>
          <h1 className="section-title">
            My <em>Trips</em>
          </h1>
          <p className="section-description">
            Manage your personal travel plans, view route timelines, and check budgets. Stored safely in your browser.
          </p>
        </div>
        <Link href="/trips/new" className="btn btn-primary">
          <span>＋</span> Plan New Trip
        </Link>
      </div>

      {/* Local Trips List */}
      {trips.length > 0 && (
        <section style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "14px", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "1px", color: "var(--ink-500)", marginBottom: "16px" }}>
            YOUR LOCAL PLANS ({trips.length})
          </h3>
          {trips.map((trip) => (
            <TripCard key={trip.id} trip={trip} isLocal={true} />
          ))}
        </section>
      )}

      {/* Featured / Sample Trip */}
      <section>
        <h3 style={{ fontSize: "14px", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "1px", color: "var(--ink-500)", marginBottom: "16px" }}>
          EXPLORE PRE-PLANNED SAMPLES
        </h3>
        <TripCard trip={sampleTrip} isLocal={false} />
      </section>
    </main>
  );
}
