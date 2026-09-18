"use client";

import { useState } from "react";
import { cities } from "@/lib/data";
import { useCurrency } from "@/lib/currency-context";

export default function TransitCalculatorPage() {
  const { formatPrice } = useCurrency();

  const [fromCityId, setFromCityId] = useState("delhi");
  const [toCityId, setToCityId] = useState("jaipur");
  const [vehicleType, setVehicleType] = useState<"petrol" | "diesel" | "ev">("petrol");
  const [acUsage, setAcUsage] = useState(true);

  const fromCity = cities.find((c) => c.id === fromCityId) || cities[0];
  const toCity = cities.find((c) => c.id === toCityId) || cities[1];

  // Calculate approximate distance between cities using Haversine formula
  const calculateDistance = () => {
    if (fromCity.id === toCity.id) return 30; // local city drive

    const R = 6371; // Earth's radius in km
    const dLat = ((toCity.latitude - fromCity.latitude) * Math.PI) / 180;
    const dLon = ((toCity.longitude - fromCity.longitude) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((fromCity.latitude * Math.PI) / 180) *
        Math.cos((toCity.latitude * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const aerialKm = R * c;

    // Multiply by 1.28 to account for Indian road curves, expressway alignment, and ghats
    return Math.round(aerialKm * 1.28);
  };

  const distanceKm = calculateDistance();
  const drivingHours = (distanceKm / 62).toFixed(1);

  // FASTag Toll estimate: ~₹1.85 per km across NHAI National Highways and expressways
  const estimatedToll = Math.round(distanceKm * 1.85);

  // Fuel calculation
  const getFuelDetails = () => {
    if (vehicleType === "petrol") {
      const mileage = acUsage ? 14.5 : 16.0;
      const ratePerLitre = 96.72; // Avg Delhi/NCR - Rajasthan - MH price
      const litresNeeded = distanceKm / mileage;
      const cost = Math.round(litresNeeded * ratePerLitre);
      return { litres: litresNeeded.toFixed(1), cost, rate: ratePerLitre, unit: "Litres" };
    } else if (vehicleType === "diesel") {
      const mileage = acUsage ? 13.0 : 14.5;
      const ratePerLitre = 89.62;
      const litresNeeded = distanceKm / mileage;
      const cost = Math.round(litresNeeded * ratePerLitre);
      return { litres: litresNeeded.toFixed(1), cost, rate: ratePerLitre, unit: "Litres" };
    } else {
      // EV (Electric Vehicle)
      const efficiency = 6.8; // km per kWh
      const costPerKwh = 16.5; // Commercial DC Fast charger (Tata Power, Zeon, Statiq)
      const kwhNeeded = distanceKm / efficiency;
      const cost = Math.round(kwhNeeded * costPerKwh);
      return { litres: kwhNeeded.toFixed(1), cost, rate: costPerKwh, unit: "kWh" };
    }
  };

  const fuel = getFuelDetails();
  const totalRoadTripCost = fuel.cost + estimatedToll;

  // Alternatives benchmark
  const trainSleeper = Math.round(distanceKm * 0.55 + 120);
  const train3AC = Math.round(distanceKm * 1.45 + 320);
  const trainVandeBharat = Math.round(distanceKm * 2.2 + 450);
  const flightEst = Math.max(3200, Math.round(distanceKm * 5.5));

  return (
    <main className="main-content">
      {/* Header */}
      <div className="section-header" style={{ marginBottom: "28px" }}>
        <div className="section-title-wrap">
          <p className="eyebrow">ROAD TRIP & TRANSIT CALCULATOR</p>
          <h1 className="section-title">
            Fuel, Tolls & <em>Transit Estimator</em>
          </h1>
          <p className="section-description">
            Accurate National Highway (NHAI) FASTag toll charges, vehicle fuel consumption, and train vs flight comparisons for journeys across India.
          </p>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: "28px" }}>
        {/* Route Selector Box */}
        <div className="form-box">
          <div className="form-grid-2">
            <div className="form-group">
              <label className="form-label">Origin City (Starting Point)</label>
              <select
                value={fromCityId}
                onChange={(e) => setFromCityId(e.target.value)}
                className="form-select"
              >
                {cities.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name} ({c.state})
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Destination City</label>
              <select
                value={toCityId}
                onChange={(e) => setToCityId(e.target.value)}
                className="form-select"
              >
                {cities.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name} ({c.state})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div style={{ marginTop: "16px", borderTop: "1px solid var(--border)", paddingTop: "16px" }}>
            <label className="form-label">Vehicle Powertrain</label>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px", marginTop: "8px" }}>
              {(["petrol", "diesel", "ev"] as const).map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setVehicleType(v)}
                  className={`btn btn-sm ${vehicleType === v ? "btn-primary" : "btn-outline"}`}
                  style={{ textTransform: "capitalize" }}
                >
                  {v === "petrol" ? "⛽ Petrol Car" : v === "diesel" ? "🛢️ Diesel SUV" : "⚡ Electric (EV)"}
                </button>
              ))}
            </div>
          </div>

          <div style={{ marginTop: "18px", display: "flex", alignItems: "center", gap: "10px" }}>
            <input
              type="checkbox"
              id="acCheckbox"
              checked={acUsage}
              onChange={(e) => setAcUsage(e.target.checked)}
              style={{ accentColor: "var(--saffron-500)", width: "16px", height: "16px" }}
            />
            <label htmlFor="acCheckbox" style={{ fontSize: "13.5px", color: "var(--ink-700)", cursor: "pointer" }}>
              Continuous Air Conditioning (AC) usage during travel (~10% extra consumption)
            </label>
          </div>

          {/* Road Trip Route Summary Card */}
          <div
            style={{
              marginTop: "24px",
              padding: "20px",
              background: "var(--surface-alt)",
              borderRadius: "var(--radius-xl)",
              border: "1px solid var(--border)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <div>
                <span className="badge badge-emerald">ROAD ROUTE OVERVIEW</span>
                <h3 style={{ fontSize: "20px", fontWeight: 700, margin: "6px 0 2px" }}>
                  {fromCity.name} ➔ {toCity.name}
                </h3>
                <span style={{ fontSize: "13px", color: "var(--ink-500)" }}>
                  Via National Highway / Expressway Corridors
                </span>
              </div>
              <div style={{ textAlign: "right" }}>
                <span style={{ fontSize: "24px", fontWeight: 800, color: "var(--ink-900)" }}>
                  {distanceKm} km
                </span>
                <span style={{ fontSize: "12px", color: "var(--ink-500)", display: "block" }}>
                  ≈ {drivingHours} hrs drive
                </span>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px", borderTop: "1px solid var(--border)", paddingTop: "14px" }}>
              <div>
                <span style={{ fontSize: "11px", color: "var(--ink-400)", textTransform: "uppercase" }}>Estimated Fuel</span>
                <strong style={{ fontSize: "16px", display: "block", color: "var(--ink-800)" }}>
                  {formatPrice(fuel.cost)}
                </strong>
                <span style={{ fontSize: "11.5px", color: "var(--ink-500)" }}>
                  {fuel.litres} {fuel.unit}
                </span>
              </div>

              <div>
                <span style={{ fontSize: "11px", color: "var(--ink-400)", textTransform: "uppercase" }}>FASTag Tolls</span>
                <strong style={{ fontSize: "16px", display: "block", color: "var(--ink-800)" }}>
                  {formatPrice(estimatedToll)}
                </strong>
                <span style={{ fontSize: "11.5px", color: "var(--ink-500)" }}>
                  ≈ {Math.max(1, Math.round(distanceKm / 75))} Toll Plazas
                </span>
              </div>

              <div>
                <span style={{ fontSize: "11px", color: "var(--saffron-600)", fontWeight: 700, textTransform: "uppercase" }}>Total Road Cost</span>
                <strong style={{ fontSize: "18px", display: "block", color: "var(--saffron-600)" }}>
                  {formatPrice(totalRoadTripCost)}
                </strong>
                <span style={{ fontSize: "11.5px", color: "var(--ink-500)" }}>
                  Excl. driver & stops
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Transit Mode Benchmark Sidecar */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div className="metric-card">
            <span className="badge badge-indigo">MODE COMPARISON</span>
            <h4 style={{ fontFamily: "var(--font-display)", fontSize: "16px", margin: "10px 0 14px", fontWeight: 700 }}>
              Alternate Transit Options
            </h4>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {/* Vande Bharat / Express Train */}
              <div style={{ padding: "12px", background: "var(--surface-alt)", borderRadius: "var(--radius-lg)", border: "1px solid var(--border)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <strong style={{ fontSize: "14px", color: "var(--ink-900)" }}>🚆 Train (Vande Bharat / 3AC)</strong>
                  <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--ink-900)" }}>
                    {formatPrice(train3AC)}–{formatPrice(trainVandeBharat)}
                  </span>
                </div>
                <span style={{ fontSize: "12px", color: "var(--ink-500)", display: "block", marginTop: "2px" }}>
                  Direct central-station connectivity, scenic and relaxing.
                </span>
              </div>

              {/* Sleeper Train */}
              <div style={{ padding: "12px", background: "var(--surface-alt)", borderRadius: "var(--radius-lg)", border: "1px solid var(--border)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <strong style={{ fontSize: "14px", color: "var(--ink-900)" }}>🚂 Budget Train (Sleeper)</strong>
                  <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--emerald-600)" }}>
                    {formatPrice(trainSleeper)}
                  </span>
                </div>
                <span style={{ fontSize: "12px", color: "var(--ink-500)", display: "block", marginTop: "2px" }}>
                  Most economical option for budget travelers and backpackers.
                </span>
              </div>

              {/* Flight */}
              <div style={{ padding: "12px", background: "var(--surface-alt)", borderRadius: "var(--radius-lg)", border: "1px solid var(--border)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <strong style={{ fontSize: "14px", color: "var(--ink-900)" }}>✈️ Domestic Flight</strong>
                  <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--ink-900)" }}>
                    {formatPrice(flightEst)}
                  </span>
                </div>
                <span style={{ fontSize: "12px", color: "var(--ink-500)", display: "block", marginTop: "2px" }}>
                  Fastest for routes over 500 km (add ~2.5 hrs airport transit).
                </span>
              </div>
            </div>
          </div>

          <div className="metric-card">
            <span className="badge badge-saffron">FASTAG TIP</span>
            <p style={{ fontSize: "13px", color: "var(--ink-600)", marginTop: "10px", lineHeight: 1.5 }}>
              Always maintain a minimum balance of <strong>₹500</strong> in your FASTag wallet before embarking on National Highway toll plazas to avoid double-cash lane penalties.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
