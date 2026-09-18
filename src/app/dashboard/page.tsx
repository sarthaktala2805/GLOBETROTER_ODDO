"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cities, sampleTrip } from "@/lib/data";
import { Profile, profileStore } from "@/lib/profile-store";
import { SavedItem, savedStore } from "@/lib/saved-store";
import { Trip } from "@/lib/models";
import { tripStore } from "@/lib/trip-store";

export default function DashboardPage() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [trips, setTrips] = useState<Trip[]>([]);
  const [saved, setSaved] = useState<SavedItem[]>([]);

  useEffect(() => {
    setProfile(profileStore.read());
    setTrips(tripStore.read());
    setSaved(savedStore.read());
  }, []);

  const nextTrip = trips[0] || sampleTrip;
  const isSample = trips.length === 0;

  return (
    <main className="main-content">
      <div className="section-header">
        <div className="section-title-wrap">
          <p className="eyebrow">YOUR COMMAND CENTER</p>
          <h1 className="section-title">
            Welcome back, <em>{profile?.displayName ?? "Traveller"}</em>
          </h1>
          <p className="section-description">
            Your personal travel space — manage upcoming multi-city routes, explore saved destinations, and plan budgets.
          </p>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <Link href="/profile" className="btn btn-outline btn-sm">
            Edit Profile
          </Link>
          <Link href="/trips/new" className="btn btn-primary btn-sm">
            <span>＋</span> Plan a Trip
          </Link>
        </div>
      </div>

      {/* Metrics Row */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "20px",
        marginBottom: "32px"
      }}>
        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "24px" }}>
          <span style={{ fontSize: "11px", fontFamily: "var(--font-mono)", color: "var(--ink-400)", textTransform: "uppercase", fontWeight: 600 }}>
            Trips in Planning
          </span>
          <p style={{ fontSize: "32px", fontWeight: 800, color: "var(--ink-900)", margin: "4px 0" }}>
            {trips.length}
          </p>
          <Link href="/trips" style={{ fontSize: "12px", color: "var(--saffron-600)", fontWeight: 600 }}>
            View all trips →
          </Link>
        </div>

        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "24px" }}>
          <span style={{ fontSize: "11px", fontFamily: "var(--font-mono)", color: "var(--ink-400)", textTransform: "uppercase", fontWeight: 600 }}>
            Saved in Wishlist
          </span>
          <p style={{ fontSize: "32px", fontWeight: 800, color: "var(--ink-900)", margin: "4px 0" }}>
            {saved.length}
          </p>
          <Link href="/saved" style={{ fontSize: "12px", color: "var(--saffron-600)", fontWeight: 600 }}>
            Review wishlist →
          </Link>
        </div>

        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "24px" }}>
          <span style={{ fontSize: "11px", fontFamily: "var(--font-mono)", color: "var(--ink-400)", textTransform: "uppercase", fontWeight: 600 }}>
            Travel Style
          </span>
          <p style={{ fontSize: "20px", fontWeight: 700, color: "var(--ink-900)", margin: "8px 0" }}>
            {profile?.travelStyle || "Balanced"}
          </p>
          <Link href="/settings" style={{ fontSize: "12px", color: "var(--saffron-600)", fontWeight: 600 }}>
            Preferences →
          </Link>
        </div>
      </div>

      {/* Featured Next Trip */}
      <section style={{ marginBottom: "40px" }}>
        <h3 style={{ fontSize: "16px", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "1px", color: "var(--ink-500)", marginBottom: "16px" }}>
          {isSample ? "RECOMMENDED STARTER ROUTE" : "UPCOMING JOURNEY"}
        </h3>

        <div style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius-xl)",
          padding: "32px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "32px",
          alignItems: "center"
        }}>
          <div>
            <span className="badge badge-saffron" style={{ marginBottom: "10px" }}>
              {isSample ? "SAMPLE DRAFT" : "ACTIVE PLAN"}
            </span>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "28px", margin: "6px 0 10px", color: "var(--ink-900)" }}>
              {nextTrip.name}
            </h2>
            <p style={{ color: "var(--ink-600)", fontSize: "14px", marginBottom: "20px" }}>
              {nextTrip.dates} · {nextTrip.stops.length} stops across {nextTrip.stops.map(s => cities.find(c => c.id === s.cityId)?.name).filter(Boolean).join(" → ")}
            </p>
            <div style={{ display: "flex", gap: "12px" }}>
              <Link href={`/trips/${nextTrip.id}`} className="btn btn-primary">
                Open Trip Hub →
              </Link>
              <Link href={`/trips/${nextTrip.id}/itinerary`} className="btn btn-outline">
                Day Itinerary
              </Link>
            </div>
          </div>

          <div style={{ height: "220px", borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
            <img
              src={nextTrip.cover.startsWith("http") ? nextTrip.cover : "https://images.pexels.com/photos/28428787/pexels-photo-28428787.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"}
              alt={nextTrip.name}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* Saved Places Preview */}
      {saved.length > 0 && (
        <section>
          <div className="section-header" style={{ marginBottom: "16px" }}>
            <h3 style={{ fontSize: "16px", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "1px", color: "var(--ink-500)" }}>
              RECENTLY SAVED ({saved.length})
            </h3>
            <Link href="/saved" style={{ fontSize: "13px", color: "var(--saffron-600)", fontWeight: 600 }}>
              View all saved →
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "16px" }}>
            {saved.slice(0, 4).map((item) => (
              <div
                key={item.id}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-md)",
                  padding: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
              >
                <div>
                  <span className="badge badge-indigo" style={{ fontSize: "10px", padding: "2px 8px" }}>
                    {item.type}
                  </span>
                  <h4 style={{ fontSize: "15px", fontWeight: 700, margin: "4px 0 2px" }}>{item.label}</h4>
                  <p style={{ fontSize: "12px", color: "var(--ink-500)" }}>{item.detail}</p>
                </div>
                <Link
                  href={item.type === "city" ? `/cities/${item.id.replace("city:", "")}` : "/explore"}
                  style={{ fontSize: "12px", fontWeight: 600, color: "var(--saffron-600)" }}
                >
                  View →
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
