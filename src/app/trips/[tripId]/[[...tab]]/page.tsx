"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { cities, sampleTrip, sampleTransportRoutes } from "@/lib/data";
import { ItineraryItem, Trip, Expense } from "@/lib/models";
import { tripStore } from "@/lib/trip-store";
import ExportModal from "@/components/export-modal";
import { useCurrency } from "@/lib/currency-context";

const tabs = ["overview", "itinerary", "map", "transport", "budget", "calendar", "journal", "packing"];
const title = (tab: string) => tab[0].toUpperCase() + tab.slice(1);

const InteractiveTripMap = dynamic(() => import("@/components/trip-map"), {
  ssr: false,
  loading: () => (
    <div style={{
      height: "450px",
      display: "grid",
      placeItems: "center",
      background: "var(--surface-alt)",
      borderRadius: "var(--radius-lg)",
      color: "var(--ink-500)"
    }}>
      Loading interactive route map...
    </div>
  ),
});

export default function TripHubPage() {
  const params = useParams<{ tripId: string; tab?: string[] }>();
  const router = useRouter();
  const id = params.tripId;
  const tab = params.tab?.[0] && tabs.includes(params.tab[0]) ? params.tab[0] : "overview";

  const [trip, setTrip] = useState<Trip | null>(null);
  const [exportOpen, setExportOpen] = useState(false);

  useEffect(() => {
    const found = tripStore.read().find((item) => item.id === id);
    if (found) {
      setTrip(found);
    } else if (id === sampleTrip.id) {
      setTrip(sampleTrip);
    } else {
      setTrip(null);
    }
  }, [id]);

  const totalSpent = useMemo(
    () => trip?.expenses.reduce((sum, item) => sum + item.amount, 0) ?? 0,
    [trip]
  );

  if (!trip) {
    return (
      <main className="main-content">
        <div style={{ textAlign: "center", padding: "80px 20px" }}>
          <h2 style={{ fontSize: "28px", fontWeight: 700, marginBottom: "12px" }}>Trip Not Found</h2>
          <p style={{ color: "var(--ink-500)", marginBottom: "24px" }}>
            This trip might have been created in another browser session.
          </p>
          <Link href="/trips" className="btn btn-primary">
            Back to My Trips
          </Link>
        </div>
      </main>
    );
  }

  const updateTrip = (updated: Trip) => {
    setTrip(updated);
    if (updated.id !== sampleTrip.id) {
      tripStore.save(updated);
    }
  };

  const toggleStopVisited = (index: number) => {
    updateTrip({
      ...trip,
      stops: trip.stops.map((stop, i) =>
        i === index ? { ...stop, visited: !stop.visited } : stop
      ),
    });
  };

  return (
    <main className="main-content">
      {/* Trip Hub Header */}
      <div className="trip-hub-header">
        <div className="trip-hub-top">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
              <Link href="/trips" style={{ fontSize: "13px", fontWeight: 600, color: "var(--ink-500)" }}>
                ← My Trips
              </Link>
              <span>•</span>
              <span className="badge badge-saffron">
                {trip.id === sampleTrip.id ? "Featured Sample" : "Device Plan"}
              </span>
            </div>
            <h1 className="trip-hub-title">{trip.name}</h1>
            <p style={{ color: "var(--ink-500)", fontSize: "14px" }}>
              {trip.dates} · {trip.stops.length} destinations
            </p>
          </div>

          <div style={{ display: "flex", gap: "10px" }}>
            <button
              onClick={() => setExportOpen(true)}
              className="btn btn-outline btn-sm"
              style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
            >
              <span>📤</span> Export & Share
            </button>
            <Link href={`/shared/${trip.id}`} className="btn btn-outline btn-sm">
              Public Link
            </Link>
            <Link href={`/trips/${trip.id}/edit`} className="btn btn-outline btn-sm">
              Edit Stops
            </Link>
          </div>
        </div>

        {/* Sub Navigation Tabs */}
        <div className="trip-nav-tabs">
          {tabs.map((item) => {
            const isActive = tab === item;
            return (
              <Link
                key={item}
                href={item === "overview" ? `/trips/${id}` : `/trips/${id}/${item}`}
                className={`trip-tab-link ${isActive ? "active" : ""}`}
              >
                {title(item)}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Tab Content Panes */}
      {tab === "overview" && (
        <OverviewTab trip={trip} totalSpent={totalSpent} toggleStopVisited={toggleStopVisited} />
      )}
      {tab === "itinerary" && <ItineraryTab trip={trip} updateTrip={updateTrip} />}
      {tab === "map" && <MapTab trip={trip} />}
      {tab === "transport" && <TransportTab trip={trip} />}
      {tab === "budget" && (
        <BudgetTab trip={trip} totalSpent={totalSpent} updateTrip={updateTrip} />
      )}
      {tab === "calendar" && <CalendarTab trip={trip} />}
      {tab === "journal" && <JournalTab trip={trip} updateTrip={updateTrip} />}
      {tab === "packing" && <TripPackingTab trip={trip} />}
      <ExportModal trip={trip} isOpen={exportOpen} onClose={() => setExportOpen(false)} />
    </main>
  );
}

// --------------------------------------------------------------------------
// 1. OVERVIEW TAB
// --------------------------------------------------------------------------
function OverviewTab({
  trip,
  totalSpent,
  toggleStopVisited,
}: {
  trip: Trip;
  totalSpent: number;
  toggleStopVisited: (index: number) => void;
}) {
  const { formatPrice } = useCurrency();
  const visitedCount = trip.stops.filter((s) => s.visited).length;
  const progressPercent = trip.stops.length
    ? Math.round((visitedCount / trip.stops.length) * 100)
    : 0;

  return (
    <div>
      <div className="dashboard-metrics-grid">
        {/* Progress Card */}
        <div className="metric-card">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span className="badge badge-emerald">TRIP TRACKER</span>
            <span style={{ fontSize: "12px", color: "var(--ink-500)", fontWeight: 600 }}>
              {visitedCount} of {trip.stops.length} Cities Completed
            </span>
          </div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "28px", margin: "16px 0 8px" }}>
            {progressPercent === 100 ? "Journey Completed!" : progressPercent > 0 ? "You're on your way!" : "Almost time to embark."}
          </h2>
          <p style={{ color: "var(--ink-500)", fontSize: "14px" }}>
            Check off destinations as you reach them to track your journey in real time.
          </p>

          <div className="progress-bar-wrap">
            <div className="progress-bar-fill" style={{ width: `${progressPercent}%` }}></div>
          </div>
        </div>

        {/* Budget Metric Card */}
        <div className="metric-card">
          <span className="badge badge-saffron">BUDGET AT A GLANCE</span>
          <div style={{ marginTop: "16px" }}>
            <span style={{ fontSize: "12px", textTransform: "uppercase", color: "var(--ink-400)", fontWeight: 600, display: "block" }}>
              Estimated Expenditure
            </span>
            <strong style={{ fontSize: "32px", color: "var(--ink-900)", letterSpacing: "-0.5px" }}>
              {formatPrice(totalSpent)}
            </strong>
            <span style={{ fontSize: "13px", color: "var(--ink-500)", display: "block", marginTop: "4px" }}>
              of {formatPrice(trip.budget)} target budget
            </span>
          </div>

          <div style={{ marginTop: "18px", paddingTop: "14px", borderTop: "1px solid var(--border)" }}>
            <span style={{ fontSize: "13px", color: trip.budget >= totalSpent ? "var(--emerald-600)" : "#ef4444", fontWeight: 700 }}>
              {trip.budget >= totalSpent
                ? `${formatPrice(trip.budget - totalSpent)} surplus remaining`
                : `${formatPrice(totalSpent - trip.budget)} over budget`}
            </span>
          </div>
        </div>
      </div>

      {/* Route Stops Checklist */}
      <div className="metric-card">
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 700, marginBottom: "16px" }}>
          Route Stops & Progress Checklist
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
          {trip.stops.map((stop, idx) => {
            const city = cities.find((c) => c.id === stop.cityId);
            return (
              <div
                key={`${stop.cityId}-${idx}`}
                style={{
                  padding: "16px",
                  borderRadius: "var(--radius-md)",
                  border: `1px solid ${stop.visited ? "var(--emerald-500)" : "var(--border)"}`,
                  background: stop.visited ? "var(--emerald-50)" : "var(--surface)",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  cursor: "pointer",
                }}
                onClick={() => toggleStopVisited(idx)}
              >
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: stop.visited ? "var(--emerald-500)" : "var(--ink-200)",
                    color: stop.visited ? "#fff" : "var(--ink-700)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "13px",
                    fontWeight: 700,
                  }}
                >
                  {stop.visited ? "✓" : `0${idx + 1}`}
                </div>
                <div>
                  <h4 style={{ fontSize: "16px", fontWeight: 700, color: "var(--ink-900)" }}>
                    {city?.name || stop.cityId}
                  </h4>
                  <p style={{ fontSize: "12px", color: "var(--ink-500)" }}>
                    {city?.state} · {stop.visited ? "Visited" : "Tap to mark visited"}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// --------------------------------------------------------------------------
// 2. ITINERARY TAB
// --------------------------------------------------------------------------
function ItineraryTab({
  trip,
  updateTrip,
}: {
  trip: Trip;
  updateTrip: (updated: Trip) => void;
}) {
  const [selectedStopIdx, setSelectedStopIdx] = useState(0);
  const [activityTitle, setActivityTitle] = useState("");
  const [activityTime, setActivityTime] = useState("10:00");
  const [activityDuration, setActivityDuration] = useState("2 hours");
  const [activityCost, setActivityCost] = useState(200);

  const itinerary = trip.itinerary ?? [];

  const handleAddActivity = () => {
    if (!activityTitle.trim()) return;
    const stop = trip.stops[selectedStopIdx];
    const cityName = cities.find((c) => c.id === stop?.cityId)?.name || "Destination";

    const newItem: ItineraryItem = {
      id: `itin-${Date.now()}`,
      stopIndex: selectedStopIdx,
      time: activityTime,
      title: activityTitle.trim(),
      duration: activityDuration,
      completed: false,
      cost: activityCost,
      location: cityName,
    };

    updateTrip({
      ...trip,
      itinerary: [...itinerary, newItem],
    });
    setActivityTitle("");
  };

  const toggleItemComplete = (id: string) => {
    updateTrip({
      ...trip,
      itinerary: itinerary.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      ),
    });
  };

  const removeItem = (id: string) => {
    updateTrip({
      ...trip,
      itinerary: itinerary.filter((item) => item.id !== id),
    });
  };

  return (
    <div>
      {/* Activity Add Box */}
      <div className="form-box" style={{ marginBottom: "32px" }}>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 700, marginBottom: "16px" }}>
          ＋ Schedule an Activity
        </h3>

        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr 1fr auto", gap: "12px", alignItems: "flex-end" }}>
          <div className="form-group" style={{ margin: 0 }}>
            <label className="form-label">Destination Stop</label>
            <select
              value={selectedStopIdx}
              onChange={(e) => setSelectedStopIdx(Number(e.target.value))}
              className="form-select"
            >
              {trip.stops.map((s, idx) => {
                const c = cities.find((city) => city.id === s.cityId);
                return (
                  <option key={idx} value={idx}>
                    Day {idx + 1}: {c?.name}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="form-group" style={{ margin: 0 }}>
            <label className="form-label">Activity Name</label>
            <input
              type="text"
              placeholder="e.g. Amber Fort Sunrise"
              value={activityTitle}
              onChange={(e) => setActivityTitle(e.target.value)}
              className="form-input"
            />
          </div>

          <div className="form-group" style={{ margin: 0 }}>
            <label className="form-label">Time</label>
            <input
              type="time"
              value={activityTime}
              onChange={(e) => setActivityTime(e.target.value)}
              className="form-input"
            />
          </div>

          <div className="form-group" style={{ margin: 0 }}>
            <label className="form-label">Est. Cost (₹)</label>
            <input
              type="number"
              min="0"
              value={activityCost}
              onChange={(e) => setActivityCost(Number(e.target.value))}
              className="form-input"
            />
          </div>

          <button
            type="button"
            onClick={handleAddActivity}
            className="btn btn-primary"
            style={{ height: "46px" }}
          >
            Add
          </button>
        </div>
      </div>

      {/* Day by Day Schedule */}
      {trip.stops.map((stop, index) => {
        const city = cities.find((c) => c.id === stop.cityId);
        const dayItems = itinerary
          .filter((item) => item.stopIndex === index)
          .sort((a, b) => a.time.localeCompare(b.time));

        return (
          <div key={`${stop.cityId}-${index}`} className="itinerary-day-box">
            <div className="itinerary-day-header">
              <div className="itinerary-day-title">
                <b>DAY 0{index + 1}</b>
                <h3>{city?.name}, {city?.state}</h3>
              </div>
              <span style={{ fontSize: "12px", color: "var(--ink-400)" }}>
                {dayItems.length} {dayItems.length === 1 ? "activity" : "activities"} scheduled
              </span>
            </div>

            {dayItems.length > 0 ? (
              <div>
                {dayItems.map((item) => (
                  <div key={item.id} className="itinerary-item-row">
                    <button
                      type="button"
                      className={`itinerary-check-btn ${item.completed ? "checked" : ""}`}
                      onClick={() => toggleItemComplete(item.id)}
                      aria-label="Toggle complete"
                    >
                      {item.completed ? "✓" : ""}
                    </button>
                    <span className="itinerary-time">{item.time}</span>
                    <div className="itinerary-item-details">
                      <strong style={{ textDecoration: item.completed ? "line-through" : "none", color: item.completed ? "var(--ink-400)" : "var(--ink-900)" }}>
                        {item.title}
                      </strong>
                      <small>
                        ⏱ {item.duration} {item.cost ? `· ₹${item.cost} est.` : ""}
                      </small>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      style={{ color: "var(--ink-400)", padding: "6px" }}
                      aria-label="Remove item"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p style={{ color: "var(--ink-400)", fontSize: "13px", fontStyle: "italic", padding: "10px 0" }}>
                No activities planned for this day yet. Use the tool above to add your first stop.
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

// --------------------------------------------------------------------------
// 3. MAP TAB
// --------------------------------------------------------------------------
function MapTab({ trip }: { trip: Trip }) {
  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 700 }}>
          Interactive Route Map
        </h3>
        <p style={{ color: "var(--ink-500)", fontSize: "14px" }}>
          Visualizing your route across {trip.stops.length} destinations using OpenStreetMap coordinates.
        </p>
      </div>
      <InteractiveTripMap trip={trip} />
    </div>
  );
}

// --------------------------------------------------------------------------
// 4. TRANSPORT TAB
// --------------------------------------------------------------------------
function TransportTab({ trip }: { trip: Trip }) {
  const [selectedTransport, setSelectedTransport] = useState("trans-1");

  return (
    <div>
      <div className="section-header" style={{ marginBottom: "16px" }}>
        <div>
          <p className="eyebrow" style={{ color: "var(--saffron-500)", fontFamily: "var(--font-mono)", fontSize: "11px", fontWeight: 700 }}>
            INTER-CITY TRANSIT
          </p>
          <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "28px" }}>
            Transit Comparison: {cities.find(c => c.id === trip.stops[0]?.cityId)?.name || "Delhi"} → {cities.find(c => c.id === trip.stops[1]?.cityId)?.name || "Jaipur"}
          </h3>
          <p style={{ color: "var(--ink-500)", fontSize: "14px", marginTop: "4px" }}>
            Comparison reflects typical travel times, comfort profiles, and sample prices. Never live API fares.
          </p>
        </div>
      </div>

      <div className="transport-grid">
        {sampleTransportRoutes.map((opt) => {
          const isSelected = selectedTransport === opt.id;
          return (
            <div
              key={opt.id}
              className={`transport-card ${isSelected ? "selected" : ""}`}
            >
              {opt.badge && (
                <span className={`badge ${opt.badge === "Best Overall" ? "badge-emerald" : opt.badge === "Cheapest" ? "badge-indigo" : "badge-saffron"} transport-badge`}>
                  {opt.badge}
                </span>
              )}

              <div className="transport-header">
                <div className="transport-mode">
                  <span>{opt.mode === "Train" ? "🚆" : opt.mode === "Flight" ? "✈️" : opt.mode === "Bus" ? "🚌" : "🚗"}</span>
                  <span>{opt.mode}</span>
                </div>
                <div className="transport-price">
                  ₹{opt.priceEstimated.toLocaleString()}
                  <small>sample est.</small>
                </div>
              </div>

              <div style={{ display: "flex", gap: "10px", fontSize: "13px", color: "var(--ink-500)" }}>
                <span>⏱ {opt.duration}</span>
                <span>•</span>
                <span>🌱 CO₂: {opt.carbonScore}</span>
              </div>

              <p className="transport-rationale">{opt.rationale}</p>

              <button
                type="button"
                className={`btn ${isSelected ? "btn-primary" : "btn-outline"} btn-sm`}
                onClick={() => setSelectedTransport(opt.id)}
              >
                {isSelected ? "✓ Selected Option" : "Select Option"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// --------------------------------------------------------------------------
// 5. BUDGET TAB
// --------------------------------------------------------------------------
function BudgetTab({
  trip,
  totalSpent,
  updateTrip,
}: {
  trip: Trip;
  totalSpent: number;
  updateTrip: (updated: Trip) => void;
}) {
  const { formatPrice } = useCurrency();
  const [newCat, setNewCat] = useState<Expense["category"]>("Stay");
  const [newAmt, setNewAmt] = useState<number>(2500);

  const remaining = trip.budget - totalSpent;
  const isOverBudget = remaining < 0;

  const handleAddExpense = () => {
    if (newAmt <= 0) return;
    updateTrip({
      ...trip,
      expenses: [...trip.expenses, { category: newCat, amount: newAmt }],
    });
  };

  const handleRemoveExpense = (idx: number) => {
    updateTrip({
      ...trip,
      expenses: trip.expenses.filter((_, i) => i !== idx),
    });
  };

  return (
    <div className="budget-card">
      <div className="budget-stats-row">
        <div className="budget-stat-box">
          <h4>TARGET BUDGET</h4>
          <p className="amount">{formatPrice(trip.budget)}</p>
        </div>
        <div className="budget-stat-box">
          <h4>TOTAL ESTIMATE</h4>
          <p className="amount" style={{ color: "var(--saffron-600)" }}>
            {formatPrice(totalSpent)}
          </p>
        </div>
        <div className="budget-stat-box">
          <h4>STATUS</h4>
          <p
            className="amount"
            style={{ color: isOverBudget ? "#ef4444" : "var(--emerald-600)" }}
          >
            {isOverBudget
              ? `-${formatPrice(Math.abs(remaining))}`
              : `+${formatPrice(remaining)}`}
          </p>
        </div>
      </div>

      {/* Breakdown Bars */}
      <h4 style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 700, marginBottom: "16px" }}>
        Expense Category Breakdown
      </h4>

      <div className="budget-bars-list">
        {trip.expenses.map((expense, idx) => {
          const percent = Math.min(
            100,
            Math.round((expense.amount / Math.max(trip.budget, 1)) * 100)
          );
          return (
            <div key={idx} className="budget-bar-item">
              <span style={{ fontWeight: 600 }}>{expense.category}</span>
              <div className="budget-bar-track">
                <div
                  className="budget-bar-fill"
                  style={{ width: `${percent}%` }}
                ></div>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "10px" }}>
                <strong style={{ fontSize: "13px" }}>
                  {formatPrice(expense.amount)}
                </strong>
                <button
                  type="button"
                  onClick={() => handleRemoveExpense(idx)}
                  style={{ color: "var(--ink-400)", padding: "2px 6px" }}
                  aria-label="Remove expense"
                >
                  ✕
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Add Expense Form */}
      <div style={{ marginTop: "32px", borderTop: "1px solid var(--border)", paddingTop: "24px" }}>
        <h5 style={{ fontSize: "14px", fontWeight: 700, marginBottom: "12px" }}>
          ＋ Log New Estimated Cost
        </h5>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
          <select
            value={newCat}
            onChange={(e) => setNewCat(e.target.value as Expense["category"])}
            className="form-select"
            style={{ width: "160px" }}
          >
            <option value="Stay">Stay</option>
            <option value="Transport">Transport</option>
            <option value="Food">Food</option>
            <option value="Activities">Activities</option>
            <option value="Other">Other</option>
          </select>
          <input
            type="number"
            min="100"
            step="100"
            value={newAmt}
            onChange={(e) => setNewAmt(Number(e.target.value))}
            className="form-input"
            style={{ width: "180px" }}
            placeholder="Amount (₹)"
          />
          <button
            type="button"
            onClick={handleAddExpense}
            className="btn btn-primary btn-sm"
          >
            Add Expense
          </button>
        </div>
      </div>
    </div>
  );
}

// --------------------------------------------------------------------------
// 6. CALENDAR TAB
// --------------------------------------------------------------------------
function CalendarTab({ trip }: { trip: Trip }) {
  const itinerary = trip.itinerary ?? [];

  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 700 }}>
          Trip Timeline & Schedule
        </h3>
        <p style={{ color: "var(--ink-500)", fontSize: "14px" }}>
          Sequential daily schedule showing city transitions and activity times.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {trip.stops.map((stop, idx) => {
          const city = cities.find((c) => c.id === stop.cityId);
          const dayItems = itinerary.filter((i) => i.stopIndex === idx);

          return (
            <div
              key={idx}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                padding: "24px",
                display: "grid",
                gridTemplateColumns: "180px 1fr",
                gap: "24px",
              }}
            >
              <div>
                <span className="badge badge-saffron" style={{ marginBottom: "6px" }}>
                  DAY 0{idx + 1}
                </span>
                <h4 style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 700 }}>
                  {city?.name}
                </h4>
                <span style={{ fontSize: "12px", color: "var(--ink-500)" }}>
                  {city?.state}
                </span>
              </div>

              <div>
                {dayItems.length > 0 ? (
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {dayItems.map((item) => (
                      <div
                        key={item.id}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          padding: "8px 12px",
                          background: "var(--canvas)",
                          borderRadius: "var(--radius-sm)",
                          fontSize: "13px",
                        }}
                      >
                        <strong style={{ fontFamily: "var(--font-mono)", color: "var(--saffron-600)" }}>
                          {item.time}
                        </strong>
                        <span>{item.title}</span>
                        <span style={{ marginLeft: "auto", color: "var(--ink-400)", fontSize: "11px" }}>
                          ⏱ {item.duration}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p style={{ color: "var(--ink-400)", fontSize: "13px", fontStyle: "italic" }}>
                    No specific timed activities scheduled for this day yet.
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// --------------------------------------------------------------------------
// 7. JOURNAL TAB
// --------------------------------------------------------------------------
function JournalTab({
  trip,
  updateTrip,
}: {
  trip: Trip;
  updateTrip: (updated: Trip) => void;
}) {
  const [memoText, setMemoText] = useState("");
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    setMemoText(trip.notes || "");
  }, [trip.notes]);

  const handleSaveNotes = () => {
    updateTrip({
      ...trip,
      notes: memoText,
    });
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  return (
    <div className="metric-card">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
        <div>
          <span className="badge badge-indigo">TRAVEL JOURNAL</span>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 700, margin: "6px 0 2px" }}>
            Memos, Memories & Recommendations
          </h3>
          <p style={{ color: "var(--ink-500)", fontSize: "14px" }}>
            Record on-the-go food recommendations, hidden alleys, and travel logs for {trip.name}.
          </p>
        </div>
        <button onClick={handleSaveNotes} className="btn btn-primary btn-sm">
          {savedSuccess ? "✓ Saved Memo" : "Save Journal Notes"}
        </button>
      </div>

      <textarea
        className="form-textarea"
        rows={8}
        placeholder="e.g. Day 1: Best morning chai at the corner haveli stall. Don't forget to take the auto from Ghat 3 instead of walking..."
        value={memoText}
        onChange={(e) => setMemoText(e.target.value)}
        style={{ width: "100%", fontFamily: "inherit", fontSize: "14px", lineHeight: 1.6 }}
      />
    </div>
  );
}

// --------------------------------------------------------------------------
// 8. TRIP PACKING TAB
// --------------------------------------------------------------------------
function TripPackingTab({ trip }: { trip: Trip }) {
  const stopCities = trip.stops.map((s) => cities.find((c) => c.id === s.cityId)).filter(Boolean);
  const [checkedMap, setCheckedMap] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(`trip_packing_${trip.id}`) || "{}");
      setCheckedMap(saved);
    } catch {}
  }, [trip.id]);

  const toggle = (id: string) => {
    const updated = { ...checkedMap, [id]: !checkedMap[id] };
    setCheckedMap(updated);
    try {
      localStorage.setItem(`trip_packing_${trip.id}`, JSON.stringify(updated));
    } catch {}
  };

  const checklistItems = [
    { id: "p-doc-1", text: "Physical Aadhaar / Passport & Voter ID" },
    { id: "p-doc-2", text: "Physical cash buffer (₹3,000) for roadside stalls" },
    { id: "p-doc-3", text: "Offline IRCTC / Flight booking PDFs downloaded" },
    { id: "p-ind-1", text: "Temple scarf or shawl for sacred entrances" },
    { id: "p-ind-2", text: "Slip-on sandals (easy removal outside monuments)" },
    { id: "p-tch-1", text: "10,000+ mAh power bank & high-wattage charging cable" },
    { id: "p-med-1", text: "Mosquito repellent (Odomos) & ORS electrolytes" },
    { id: "p-toi-1", text: "Broad spectrum SPF 50+ Sunscreen & UV sunglasses" },
  ];

  const total = checklistItems.length;
  const done = checklistItems.filter((i) => checkedMap[i.id]).length;
  const pct = Math.round((done / total) * 100);

  return (
    <div className="metric-card">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
        <div>
          <span className="badge badge-emerald">TRIP PACKING CHECKLIST</span>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 700, margin: "6px 0 2px" }}>
            Packing Essentials for {stopCities.map((c) => c?.name).join(" & ")}
          </h3>
          <p style={{ color: "var(--ink-500)", fontSize: "14px" }}>
            Tailored checklist stored for this trip. Check items off as you load your luggage.
          </p>
        </div>
        <div style={{ textAlign: "right" }}>
          <strong style={{ fontSize: "18px", color: "var(--emerald-600)" }}>{done}/{total} Packed</strong>
          <span style={{ fontSize: "12px", color: "var(--ink-400)", display: "block" }}>{pct}% complete</span>
        </div>
      </div>

      <div className="progress-bar-wrap" style={{ marginBottom: "20px" }}>
        <div className="progress-bar-fill" style={{ width: `${pct}%`, background: "var(--emerald-500)" }} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "10px" }}>
        {checklistItems.map((item) => (
          <label
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 14px",
              borderRadius: "var(--radius-md)",
              background: checkedMap[item.id] ? "var(--surface-alt)" : "var(--surface)",
              border: "1px solid var(--border)",
              cursor: "pointer",
              fontSize: "13px",
              color: checkedMap[item.id] ? "var(--ink-400)" : "var(--ink-800)",
              textDecoration: checkedMap[item.id] ? "line-through" : "none",
            }}
          >
            <input
              type="checkbox"
              checked={Boolean(checkedMap[item.id])}
              onChange={() => toggle(item.id)}
              style={{ accentColor: "var(--emerald-500)" }}
            />
            <span>{item.text}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
