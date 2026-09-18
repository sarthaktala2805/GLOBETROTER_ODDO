"use client";

import { useState } from "react";

interface GuideTopic {
  id: string;
  title: string;
  icon: string;
  summary: string;
  sections: { subtitle: string; content: string }[];
}

const topics: GuideTopic[] = [
  {
    id: "temple",
    title: "Temple & Sacred Site Etiquette",
    icon: "🪔",
    summary: "Navigating Hindu temples, Sikh Gurudwaras, Islamic mosques, and Buddhist monasteries with deep respect.",
    sections: [
      {
        subtitle: "Footwear Removal Protocols",
        content: "Every temple, mosque, and gurudwara requires taking off shoes outside. Look for the designated 'Joota Ghar' (shoe stall) where attendants give you a token for ₹5–₹10, or keep shoes in a cloth tote bag in your backpack.",
      },
      {
        subtitle: "Modest Dress & Head Coverings",
        content: "Ensure shoulders and knees are covered. In Sikh Gurudwaras (like the Golden Temple) and certain mosques, head covering is strictly mandatory for all genders (scarves are provided free at the entrance).",
      },
      {
        subtitle: "Clockwise Movement (Pradakshina)",
        content: "When walking around Hindu sanctums or Buddhist stupas/monasteries, always walk clockwise (keeping the shrine on your right-hand side).",
      },
      {
        subtitle: "Receiving Prasad & Holy Water",
        content: "Always receive holy offerings (Prasad, Charanamrit, or Kada Prasad) using both hands cupped together or with your right hand. Never offer or receive sacred items with the left hand alone.",
      },
    ],
  },
  {
    id: "food",
    title: "Street Food Hygiene & Safe Dining",
    icon: "🍲",
    summary: "Relishing India's world-famous culinary wonders without upset stomachs.",
    sections: [
      {
        subtitle: "Packaged Water Seal Rule",
        content: "Only drink bottled water with unbroken tamper-evident seal rings (e.g. Bisleri, Kinley, Aquafina). In cafes and luxury stays, safe RO/UV filtered drinking water is standard.",
      },
      {
        subtitle: "Eat Where Locals Queue",
        content: "High footfall guarantees rapid inventory turnover. Street food stalls with bustling crowds cook everything fresh to order in boiling oil or searing tandoors.",
      },
      {
        subtitle: "Prefer Piping Hot Over Cold Cut Items",
        content: "Hot fresh kachoris, steaming idlis, sizzling dosas, and fresh tandoori items are naturally sterilized by heat. Avoid pre-sliced fruits or open salads displayed on roadside carts.",
      },
      {
        subtitle: "Probiotics & Gut Support",
        content: "Freshly whipped dahi (curd), salted buttermilk (chaas with roasted cumin), and sweet lassis contain natural probiotic cultures that ease acclimatization to Indian spices.",
      },
    ],
  },
  {
    id: "scams",
    title: "Common Tourist Traps & How to Avoid Them",
    icon: "🛡️",
    summary: "Essential street smarts to steer clear of aggressive touts and classic diversion schemes.",
    sections: [
      {
        subtitle: "The 'Monument is Closed Today' Scam",
        content: "An auto or taxi driver claims the Red Fort or City Palace is closed for a royal event or festival and offers to take you to a 'special artisan market'. This is almost always a commission racket. Always verify official gates in person.",
      },
      {
        subtitle: "Fake Railway Booking Offices",
        content: "Touts near New Delhi Railway Station claiming your train is cancelled or the foreign tourist counter has shifted. Never follow anyone outside the station building; use the official RailMadad helpline 139 or IRCTC app.",
      },
      {
        subtitle: "Gem & Carpet Export Schemes",
        content: "Polite strangers asking travelers to carry gemstones or high-value handicrafts abroad to evade customs or resell for large profits. Politely decline and walk away.",
      },
      {
        subtitle: "Ride Hailing Security",
        content: "Use app-based rides (Uber, Ola, BluSmart) where routes, driver identities, and fares are tracked via GPS. If taking local auto-rickshaws, negotiate the fare clearly or demand the meter before sitting.",
      },
    ],
  },
  {
    id: "bargaining",
    title: "Bargaining & Market Etiquette",
    icon: "🛍️",
    summary: "Navigating traditional Indian bazaars with humor, respect, and fair value.",
    sections: [
      {
        subtitle: "Where Bargaining is Expected",
        content: "Street flea markets, unbranded clothing stalls, and souvenir handicraft bazaars (like Chandni Chowk, Anjuna Flea, Johari Bazaar) expect polite haggling. Initial quotes are typically 30–40% above fair market price.",
      },
      {
        subtitle: "Where Prices are Fixed",
        content: "Never negotiate in pharmacies, grocery stores, restaurants, government handloom emporiums (Rajasthali, Cauvery, Central Cottage Industries), or any item marked with an official MRP (Maximum Retail Price).",
      },
      {
        subtitle: "The Golden Negotiation Rule",
        content: "Keep negotiations lighthearted and friendly with a smile. Never make an offer unless you are genuinely ready to buy if the merchant agrees to your price.",
      },
    ],
  },
];

export default function GuidePage() {
  const [activeTopicId, setActiveTopicId] = useState("temple");
  const currentTopic = topics.find((t) => t.id === activeTopicId) || topics[0];

  return (
    <main className="main-content">
      {/* Header */}
      <div className="section-header" style={{ marginBottom: "28px" }}>
        <div className="section-title-wrap">
          <p className="eyebrow">CULTURAL WISDOM & STREET SMARTS</p>
          <h1 className="section-title">
            India Travel <em>Guide & Etiquette</em>
          </h1>
          <p className="section-description">
            Essential cultural protocols, temple etiquette, dining hygiene tips, and tourist scam protection for smooth journeys.
          </p>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: "28px" }}>
        {/* Navigation Sidebar */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {topics.map((topic) => {
            const isActive = topic.id === activeTopicId;
            return (
              <button
                key={topic.id}
                onClick={() => setActiveTopicId(topic.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "14px 18px",
                  borderRadius: "var(--radius-xl)",
                  border: `1.5px solid ${isActive ? "var(--saffron-500)" : "var(--border)"}`,
                  background: isActive ? "var(--saffron-50)" : "var(--surface)",
                  color: isActive ? "var(--saffron-700)" : "var(--ink-800)",
                  fontWeight: isActive ? 700 : 500,
                  fontSize: "14px",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.15s ease",
                }}
              >
                <span style={{ fontSize: "20px" }}>{topic.icon}</span>
                <span>{topic.title}</span>
              </button>
            );
          })}

          <div className="metric-card" style={{ marginTop: "14px" }}>
            <span className="badge badge-emerald">ATITHI DEVO BHAVA</span>
            <p style={{ fontSize: "12.5px", color: "var(--ink-600)", marginTop: "8px", lineHeight: 1.5 }}>
              India&apos;s ancient guiding hospitality philosophy is <em>&ldquo;Atithi Devo Bhava&rdquo;</em> (The Guest is akin to the Divine). Mutual respect, patience, and a warm smile will unlock unforgettable goodwill everywhere.
            </p>
          </div>
        </div>

        {/* Content Box */}
        <div
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-2xl)",
            padding: "32px",
            boxShadow: "var(--shadow-sm)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
            <span style={{ fontSize: "32px" }}>{currentTopic.icon}</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 700, margin: 0 }}>
              {currentTopic.title}
            </h2>
          </div>
          <p style={{ fontSize: "14.5px", color: "var(--ink-600)", marginBottom: "28px", lineHeight: 1.6 }}>
            {currentTopic.summary}
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {currentTopic.sections.map((sec, idx) => (
              <div
                key={idx}
                style={{
                  padding: "18px 20px",
                  background: "var(--surface-alt)",
                  borderRadius: "var(--radius-xl)",
                  border: "1px solid var(--border)",
                }}
              >
                <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--ink-900)", marginBottom: "6px" }}>
                  {sec.subtitle}
                </h3>
                <p style={{ fontSize: "13.5px", color: "var(--ink-700)", lineHeight: 1.6, margin: 0 }}>
                  {sec.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
