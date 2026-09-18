"use client";

import { useState } from "react";
import { Activity } from "@/lib/models";
import { useCurrency } from "@/lib/currency-context";
import { cities } from "@/lib/data";

export default function BookingModal({
  activity,
  isOpen,
  onClose,
}: {
  activity: Activity | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  const { formatPrice } = useCurrency();

  const [date, setDate] = useState("2026-10-18");
  const [slot, setSlot] = useState("09:30 AM (Morning Tour)");
  const [guests, setGuests] = useState(2);
  const [guestName, setGuestName] = useState("Sarthak Verma");
  const [guestContact, setGuestContact] = useState("+91 98765 43210");
  const [confirmed, setConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState("");

  if (!isOpen || !activity) return null;

  const city = cities.find((c) => c.id === activity.cityId);
  const baseCost = activity.estimatedCost || 1200;
  const totalCost = baseCost * guests;

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `BY-ACT-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setConfirmed(true);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(9, 14, 23, 0.75)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "560px",
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius-2xl)",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)",
          padding: "28px",
          overflow: "hidden",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {!confirmed ? (
          /* Step 1: Booking Details Form */
          <form onSubmit={handleConfirm}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
              <div>
                <span className="eyebrow">EXPERIENCE RESERVATION</span>
                <h3 style={{ fontSize: "20px", fontWeight: 700, margin: "4px 0 2px" }}>
                  Book {activity.name}
                </h3>
                <span style={{ fontSize: "13px", color: "var(--ink-500)" }}>
                  📍 {city?.name}, {city?.state} · ⏱ {activity.duration}
                </span>
              </div>
              <button
                type="button"
                onClick={onClose}
                style={{
                  background: "var(--surface-alt)",
                  border: "1px solid var(--border)",
                  borderRadius: "50%",
                  width: "32px",
                  height: "32px",
                  cursor: "pointer",
                  color: "var(--ink-600)",
                }}
              >
                ✕
              </button>
            </div>

            <div className="form-grid-2" style={{ marginTop: "16px" }}>
              <div className="form-group">
                <label className="form-label">Select Date</label>
                <input
                  type="date"
                  className="form-input"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Time Slot</label>
                <select
                  className="form-select"
                  value={slot}
                  onChange={(e) => setSlot(e.target.value)}
                >
                  <option>09:30 AM (Morning Tour)</option>
                  <option>02:30 PM (Afternoon Tour)</option>
                  <option>05:15 PM (Sunset Experience)</option>
                </select>
              </div>
            </div>

            <div className="form-grid-2" style={{ marginTop: "12px" }}>
              <div className="form-group">
                <label className="form-label">Number of Guests</label>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <button
                    type="button"
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    className="btn btn-outline btn-sm"
                    style={{ width: "36px", height: "36px", padding: 0 }}
                  >
                    -
                  </button>
                  <span style={{ fontSize: "16px", fontWeight: 700, minWidth: "30px", textAlign: "center" }}>
                    {guests}
                  </span>
                  <button
                    type="button"
                    onClick={() => setGuests(Math.min(8, guests + 1))}
                    className="btn btn-outline btn-sm"
                    style={{ width: "36px", height: "36px", padding: 0 }}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Total Estimated Fare</label>
                <div style={{ paddingTop: "6px" }}>
                  <strong style={{ fontSize: "20px", color: "var(--saffron-600)" }}>
                    {formatPrice(totalCost)}
                  </strong>
                  <span style={{ fontSize: "12px", color: "var(--ink-400)", display: "block" }}>
                    {formatPrice(baseCost)} × {guests} guests
                  </span>
                </div>
              </div>
            </div>

            <div className="form-grid-2" style={{ marginTop: "12px" }}>
              <div className="form-group">
                <label className="form-label">Lead Traveler Name</label>
                <input
                  type="text"
                  className="form-input"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Mobile (for WhatsApp Voucher)</label>
                <input
                  type="tel"
                  className="form-input"
                  value={guestContact}
                  onChange={(e) => setGuestContact(e.target.value)}
                  required
                />
              </div>
            </div>

            <div style={{ marginTop: "24px", display: "flex", justifyContent: "flex-end", gap: "10px" }}>
              <button type="button" onClick={onClose} className="btn btn-ghost btn-sm">
                Cancel
              </button>
              <button type="submit" className="btn btn-primary btn-sm" style={{ padding: "0 24px", fontWeight: 700 }}>
                Confirm & Generate Voucher →
              </button>
            </div>
          </form>
        ) : (
          /* Step 2: Confirmed Digital Travel Voucher */
          <div>
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
              <span style={{ fontSize: "36px" }}>🎉</span>
              <span className="badge badge-emerald" style={{ display: "inline-block", marginTop: "8px" }}>
                RESERVATION CONFIRMED
              </span>
              <h3 style={{ fontSize: "20px", fontWeight: 800, margin: "6px 0 2px" }}>
                Digital Experience Voucher
              </h3>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "14px", fontWeight: 700, color: "var(--saffron-600)" }}>
                Booking Ref: {bookingRef}
              </span>
            </div>

            <div
              style={{
                background: "var(--surface-alt)",
                borderRadius: "var(--radius-xl)",
                padding: "20px",
                border: "1px dashed var(--border)",
                marginBottom: "20px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px", borderBottom: "1px solid var(--border)", paddingBottom: "10px" }}>
                <div>
                  <span style={{ fontSize: "11px", color: "var(--ink-400)", textTransform: "uppercase" }}>Experience</span>
                  <strong style={{ display: "block", fontSize: "15px", color: "var(--ink-900)" }}>
                    {activity.name}
                  </strong>
                </div>
                <div style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11px", color: "var(--ink-400)", textTransform: "uppercase" }}>Location</span>
                  <strong style={{ display: "block", fontSize: "14px", color: "var(--ink-800)" }}>
                    {city?.name}
                  </strong>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", fontSize: "13px" }}>
                <div>
                  <span style={{ color: "var(--ink-400)", fontSize: "11px" }}>Date & Time</span>
                  <strong style={{ display: "block", color: "var(--ink-800)" }}>{date}</strong>
                  <span style={{ color: "var(--ink-500)", fontSize: "12px" }}>{slot}</span>
                </div>
                <div>
                  <span style={{ color: "var(--ink-400)", fontSize: "11px" }}>Guests & Fare</span>
                  <strong style={{ display: "block", color: "var(--ink-800)" }}>{guests} Guests</strong>
                  <span style={{ color: "var(--saffron-600)", fontWeight: 700, fontSize: "13px" }}>
                    {formatPrice(totalCost)} (Paid / Verified)
                  </span>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <button onClick={handlePrint} className="btn btn-outline btn-sm">
                🖨️ Print / Save Voucher
              </button>
              <button onClick={onClose} className="btn btn-primary btn-sm">
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
