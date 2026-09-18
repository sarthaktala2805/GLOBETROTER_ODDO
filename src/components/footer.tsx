import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>
            <span style={{ color: "#ff6b35" }}>✦</span> BharatYatra
          </h3>
          <p>
            India’s modern travel planning companion. Designed to help you create, visualize, and budget multi-city journeys across historic, cultural, and natural destinations.
          </p>
          <div style={{ marginTop: "18px", display: "flex", gap: "10px" }}>
            <span className="badge badge-dark">20+ Seed Cities</span>
            <span className="badge badge-dark">Local-First Privacy</span>
          </div>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <ul className="footer-links">
            <li><Link href="/explore">All Destinations</Link></li>
            <li><Link href="/hotels">Stays & Havens</Link></li>
            <li><Link href="/activities">Things to Do</Link></li>
            <li><Link href="/safety">🚨 Emergency & Safety Hub</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Planning Tools</h4>
          <ul className="footer-links">
            <li><Link href="/trips/generator">✨ Smart AI Planner</Link></li>
            <li><Link href="/split">💸 Group UPI Split</Link></li>
            <li><Link href="/calculator">🚗 Transit & Toll Calculator</Link></li>
            <li><Link href="/packing">🧳 Packing Advisor</Link></li>
            <li><Link href="/guide">📖 Cultural & Etiquette Guide</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Product Note</h4>
          <p style={{ fontSize: "13px", lineHeight: "1.6", color: "#64748b" }}>
            Phase 1 seed release. All transit fares, hotel rates, and timings are curated sample estimates and clearly marked. No live booking or paid APIs.
          </p>
          <div style={{ marginTop: "16px" }}>
            <Link href="/settings" style={{ fontSize: "13px", color: "var(--saffron-500)", fontWeight: 600 }}>
              Device Settings & Preferences →
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 BharatYatra Technologies. Crafted for thoughtful travel in India.</p>
        <p style={{ fontSize: "12px", color: "#64748b" }}>
          Next.js App Router · TypeScript · OpenStreetMap
        </p>
      </div>
    </footer>
  );
}
