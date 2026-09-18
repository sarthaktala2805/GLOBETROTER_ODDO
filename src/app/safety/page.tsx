"use client";

import { useState } from "react";
import { cities } from "@/lib/data";

interface EmergencyHelpline {
  number: string;
  name: string;
  description: string;
  badge: string;
  color: string;
}

const nationalHelplines: EmergencyHelpline[] = [
  {
    number: "112",
    name: "National Unified Emergency Hotline",
    description: "Integrated single emergency number across all Indian states for Police, Fire, and Ambulance.",
    badge: "All-India",
    color: "#ef4444",
  },
  {
    number: "1363",
    name: "Ministry of Tourism 24x7 Tourist Helpline",
    description: "Multi-lingual tourist support in 12 languages (English, Hindi, French, German, Spanish, Japanese, etc.).",
    badge: "Tourist Priority",
    color: "#ff6b35",
  },
  {
    number: "139",
    name: "RailMadad (Indian Railways Helpline)",
    description: "Security assistance, medical emergency on board trains, and live PNR train tracking.",
    badge: "Railways",
    color: "#3b82f6",
  },
  {
    number: "1091",
    name: "Women's Safety & Police Helpline",
    description: "Dedicated 24x7 emergency response for women travelers and citizens.",
    badge: "24x7 Police",
    color: "#ec4899",
  },
  {
    number: "108",
    name: "National Ambulance & Medical Service",
    description: "Emergency medical response and hospital patient transit.",
    badge: "Medical",
    color: "#10b981",
  },
];

export default function SafetyPage() {
  const [selectedCityId, setSelectedCityId] = useState("delhi");

  // Personal SOS Card State
  const [travelerName, setTravelerName] = useState("John Doe");
  const [bloodGroup, setBloodGroup] = useState("O+");
  const [emergencyPhone, setEmergencyPhone] = useState("+91 98765 43210");
  const [hotelName, setHotelName] = useState("The Imperial, Janpath");
  const [hotelPhone, setHotelPhone] = useState("+91 11 2334 1234");
  const [allergies, setAllergies] = useState("Penicillin, Peanuts (Mild)");

  const city = cities.find((c) => c.id === selectedCityId) || cities[0];

  const handlePrintCard = () => {
    window.print();
  };

  return (
    <main className="main-content">
      {/* Header */}
      <div className="section-header" style={{ marginBottom: "28px" }}>
        <div className="section-title-wrap">
          <p className="eyebrow" style={{ color: "#ef4444" }}>EMERGENCY ASSISTANCE & TOURIST SAFETY</p>
          <h1 className="section-title">
            Safety & <em>Emergency Hub</em>
          </h1>
          <p className="section-description">
            Verified official Indian emergency helplines, hospital directories, and an offline printable Emergency SOS Card.
          </p>
        </div>
      </div>

      {/* Primary Helplines Grid */}
      <div style={{ marginBottom: "36px" }}>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 700, marginBottom: "16px" }}>
          Official 24x7 All-India Emergency Numbers
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
          {nationalHelplines.map((item) => (
            <div
              key={item.number}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-xl)",
                padding: "20px",
                boxShadow: "var(--shadow-sm)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                  <span
                    style={{
                      fontSize: "24px",
                      fontFamily: "var(--font-mono)",
                      fontWeight: 800,
                      color: item.color,
                      letterSpacing: "1px",
                    }}
                  >
                    📞 {item.number}
                  </span>
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      padding: "3px 8px",
                      borderRadius: "4px",
                      background: "var(--surface-alt)",
                      color: "var(--ink-600)",
                    }}
                  >
                    {item.badge}
                  </span>
                </div>
                <strong style={{ fontSize: "15px", display: "block", color: "var(--ink-900)", marginBottom: "4px" }}>
                  {item.name}
                </strong>
                <p style={{ fontSize: "13px", color: "var(--ink-500)", lineHeight: 1.5, margin: 0 }}>
                  {item.description}
                </p>
              </div>

              <div style={{ marginTop: "16px", paddingTop: "12px", borderTop: "1px solid var(--border)" }}>
                <a
                  href={`tel:${item.number}`}
                  className="btn btn-outline btn-block btn-sm"
                  style={{ color: item.color, borderColor: item.color, fontWeight: 700 }}
                >
                  Dial {item.number} Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Emergency SOS Card Generator */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 380px",
          gap: "28px",
          marginBottom: "40px",
        }}
      >
        {/* Input Form */}
        <div className="form-box">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
            <div>
              <span className="badge badge-saffron">OFFLINE SAFETY PREP</span>
              <h3 style={{ fontSize: "18px", fontWeight: 700, margin: "6px 0 0" }}>
                Generate Your Traveler Emergency Card
              </h3>
            </div>
            <button onClick={handlePrintCard} className="btn btn-primary btn-sm">
              🖨️ Print Wallet Card
            </button>
          </div>
          <p style={{ fontSize: "13px", color: "var(--ink-500)", marginBottom: "20px" }}>
            Print this card or save it as a screenshot on your phone to keep essential contact details accessible even when battery or internet coverage is low.
          </p>

          <div className="form-grid-2">
            <div className="form-group">
              <label className="form-label">Full Name of Traveler</label>
              <input
                className="form-input"
                value={travelerName}
                onChange={(e) => setTravelerName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Blood Group</label>
              <select
                className="form-select"
                value={bloodGroup}
                onChange={(e) => setBloodGroup(e.target.value)}
              >
                {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((bg) => (
                  <option key={bg} value={bg}>{bg}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-grid-2" style={{ marginTop: "12px" }}>
            <div className="form-group">
              <label className="form-label">Emergency Contact Phone</label>
              <input
                className="form-input"
                value={emergencyPhone}
                onChange={(e) => setEmergencyPhone(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Medical Allergies / Conditions</label>
              <input
                className="form-input"
                value={allergies}
                onChange={(e) => setAllergies(e.target.value)}
              />
            </div>
          </div>

          <div className="form-grid-2" style={{ marginTop: "12px" }}>
            <div className="form-group">
              <label className="form-label">Current Hotel / Homestay Name</label>
              <input
                className="form-input"
                value={hotelName}
                onChange={(e) => setHotelName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Hotel Front Desk Contact</label>
              <input
                className="form-input"
                value={hotelPhone}
                onChange={(e) => setHotelPhone(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Live Card Preview */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              background: "var(--surface)",
              border: "2px solid #ef4444",
              borderRadius: "var(--radius-xl)",
              padding: "24px",
              boxShadow: "0 10px 25px -5px rgba(239, 68, 68, 0.15)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--border)", paddingBottom: "12px", marginBottom: "14px" }}>
              <div>
                <span style={{ fontSize: "11px", fontWeight: 800, color: "#ef4444", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                  ✦ EMERGENCY MEDICAL & IDENTITY CARD
                </span>
                <strong style={{ display: "block", fontSize: "18px", color: "var(--ink-900)" }}>
                  {travelerName}
                </strong>
              </div>
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: 800,
                  padding: "4px 10px",
                  borderRadius: "6px",
                  background: "#fee2e2",
                  color: "#991b1b",
                }}
              >
                {bloodGroup}
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "12.5px" }}>
              <div>
                <span style={{ color: "var(--ink-400)", textTransform: "uppercase", fontSize: "10px" }}>Emergency Relative Contact</span>
                <strong style={{ display: "block", color: "var(--ink-800)" }}>{emergencyPhone}</strong>
              </div>

              <div>
                <span style={{ color: "var(--ink-400)", textTransform: "uppercase", fontSize: "10px" }}>Accommodated At</span>
                <strong style={{ display: "block", color: "var(--ink-800)" }}>{hotelName}</strong>
                <span style={{ color: "var(--ink-500)" }}>Ph: {hotelPhone}</span>
              </div>

              <div>
                <span style={{ color: "var(--ink-400)", textTransform: "uppercase", fontSize: "10px" }}>Allergies / Critical Info</span>
                <span style={{ display: "block", color: "#b91c1c", fontWeight: 600 }}>{allergies || "None"}</span>
              </div>

              <div style={{ marginTop: "8px", paddingTop: "10px", borderTop: "1px dashed var(--border)", display: "flex", justifyContent: "space-between", color: "var(--ink-500)", fontSize: "11px" }}>
                <span>Police/Ambulance: <strong>112</strong></span>
                <span>Tourist Help: <strong>1363</strong></span>
              </div>
            </div>
          </div>

          <div className="metric-card">
            <span className="badge badge-emerald">SAFETY TIP</span>
            <p style={{ fontSize: "12.5px", color: "var(--ink-600)", marginTop: "8px", lineHeight: 1.5 }}>
              Always inform your hotel front desk when you depart for remote day treks or late evening safaris, noting your estimated return time.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
