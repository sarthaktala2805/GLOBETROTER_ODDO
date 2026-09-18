"use client";

import { useEffect, useState } from "react";
import { cities } from "@/lib/data";

interface PackingItem {
  id: string;
  category: "Clothing" | "Toiletries" | "Health" | "Tech" | "Documents" | "India Essentials";
  text: string;
  checked: boolean;
  essential?: boolean;
}

export default function PackingPage() {
  const [selectedCityId, setSelectedCityId] = useState("leh");
  const [season, setSeason] = useState<"Winter" | "Summer" | "Monsoon" | "Spring">("Summer");
  const [customText, setCustomText] = useState("");
  const [customCategory, setCustomCategory] = useState<PackingItem["category"]>("Clothing");
  const [items, setItems] = useState<PackingItem[]>([]);

  const city = cities.find((c) => c.id === selectedCityId) || cities[0];

  useEffect(() => {
    // Generate items based on destination and season
    const isCold = selectedCityId === "leh" || selectedCityId === "shimla" || selectedCityId === "gangtok";
    const isBeach = selectedCityId === "goa" || selectedCityId === "pondicherry" || selectedCityId === "kochi";
    const isHeritage = selectedCityId === "jaipur" || selectedCityId === "jaisalmer" || selectedCityId === "varanasi";
    const isRainy = selectedCityId === "shillong" || selectedCityId === "munnar";

    const baseList: PackingItem[] = [
      // Documents & Money
      { id: "doc-1", category: "Documents", text: "Physical Government ID (Aadhaar / Passport / Voter ID)", checked: false, essential: true },
      { id: "doc-2", category: "Documents", text: "Physical cash buffer (₹2,000–₹5,000 for rural/remote areas)", checked: false, essential: true },
      { id: "doc-3", category: "Documents", text: "Active UPI payment apps (PhonePe, GPay, Paytm) with offline biometric", checked: false, essential: true },
      { id: "doc-4", category: "Documents", text: "Downloaded offline tickets & hotel booking vouchers (PDF)", checked: false },

      // India Essentials
      { id: "ind-1", category: "India Essentials", text: "Cotton scarf or dupatta for sacred temple entries & dust protection", checked: false, essential: true },
      { id: "ind-2", category: "India Essentials", text: "Slip-on footwear / sandals (convenient for shoes-off temple grounds)", checked: false },
      { id: "ind-3", category: "India Essentials", text: "Pocket hand sanitizer and disinfectant wipes", checked: false },
      { id: "ind-4", category: "India Essentials", text: "Reusable insulated water bottle", checked: false },

      // Health
      { id: "hlt-1", category: "Health", text: "Mosquito repellent spray (Odomos / Citronella)", checked: false, essential: true },
      { id: "hlt-2", category: "Health", text: "ORS rehydration salts / Electrolyte sachets", checked: false, essential: true },
      { id: "hlt-3", category: "Health", text: "Antacids & personal motion sickness tablets (Avomine)", checked: false },

      // Tech
      { id: "tch-1", category: "Tech", text: "High-capacity power bank (10,000+ mAh) for long transit days", checked: false, essential: true },
      { id: "tch-2", category: "Tech", text: "Dual USB-C fast charger and braided cable", checked: false },
      { id: "tch-3", category: "Tech", text: "Earphones / noise-cancelling buds for Indian train/bus journeys", checked: false },

      // Toiletries
      { id: "toi-1", category: "Toiletries", text: "High SPF 50+ Sunscreen (PA++++)", checked: false, essential: true },
      { id: "toi-2", category: "Toiletries", text: "Lip balm with sun protection", checked: false },
      { id: "toi-3", category: "Toiletries", text: "Travel-size shampoo, soap, and toothbrush kit", checked: false },
    ];

    // Climate-specific items
    if (isCold || season === "Winter") {
      baseList.push(
        { id: "cld-1", category: "Clothing", text: "Merino wool thermal inner tops & bottoms", checked: false, essential: true },
        { id: "cld-2", category: "Clothing", text: "Windproof & waterproof hooded fleece jacket", checked: false, essential: true },
        { id: "cld-3", category: "Clothing", text: "Woolen beanie cap and neck buff", checked: false },
        { id: "cld-4", category: "Clothing", text: "Thick trekking socks (minimum 3 pairs)", checked: false },
        { id: "cld-5", category: "Health", text: "Diamox (Acetazolamide) for high-altitude acclimatization (Ladakh)", checked: false, essential: isCold }
      );
    } else if (isBeach) {
      baseList.push(
        { id: "bch-1", category: "Clothing", text: "Breathable linen shirts and cotton shorts", checked: false, essential: true },
        { id: "bch-2", category: "Clothing", text: "Swimwear / rash guards & quick-dry microfiber towel", checked: false },
        { id: "bch-3", category: "Clothing", text: "Polarized UV sunglasses & straw sun hat", checked: false, essential: true },
        { id: "bch-4", category: "Toiletries", text: "Waterproof dry bag for boat rides and beach walks", checked: false }
      );
    } else if (isRainy || season === "Monsoon") {
      baseList.push(
        { id: "rain-1", category: "Clothing", text: "Compact sturdy umbrella or lightweight breathable raincoat", checked: false, essential: true },
        { id: "rain-2", category: "Clothing", text: "Waterproof trekking shoes with deep rubber grip", checked: false, essential: true },
        { id: "rain-3", category: "Tech", text: "Waterproof phone pouch for cloudbursts and waterfalls", checked: false },
        { id: "rain-4", category: "Clothing", text: "Quick-drying synthetic moisture-wicking tees", checked: false }
      );
    } else {
      baseList.push(
        { id: "gen-1", category: "Clothing", text: "Breathable loose-fitting cotton or khadi tops and trousers", checked: false, essential: true },
        { id: "gen-2", category: "Clothing", text: "Comfortable cushioned walking shoes for marble and stone pavements", checked: false, essential: true },
        { id: "gen-3", category: "Clothing", text: "Light evening cardigan or wrap for air-conditioned transit", checked: false }
      );
    }

    // Restore saved check status if present
    try {
      const savedChecks = JSON.parse(localStorage.getItem(`packing_${selectedCityId}`) || "{}");
      const hydrated = baseList.map((item) => ({
        ...item,
        checked: Boolean(savedChecks[item.id]),
      }));
      setItems(hydrated);
    } catch {
      setItems(baseList);
    }
  }, [selectedCityId, season]);

  const toggleItem = (id: string) => {
    const updated = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(updated);

    try {
      const checksMap = updated.reduce((acc, curr) => {
        if (curr.checked) acc[curr.id] = true;
        return acc;
      }, {} as Record<string, boolean>);
      localStorage.setItem(`packing_${selectedCityId}`, JSON.stringify(checksMap));
    } catch {}
  };

  const handleAddCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customText.trim()) return;

    const newItem: PackingItem = {
      id: `custom-${Date.now()}`,
      category: customCategory,
      text: customText.trim(),
      checked: false,
    };
    setItems([...items, newItem]);
    setCustomText("");
  };

  const checkedCount = items.filter((i) => i.checked).length;
  const progressPercent = items.length ? Math.round((checkedCount / items.length) * 100) : 0;

  const categories: PackingItem["category"][] = [
    "Documents",
    "India Essentials",
    "Clothing",
    "Health",
    "Tech",
    "Toiletries",
  ];

  return (
    <main className="main-content">
      {/* Header */}
      <div className="section-header" style={{ marginBottom: "28px" }}>
        <div className="section-title-wrap">
          <p className="eyebrow">PRE-TRAVEL PREPARATION</p>
          <h1 className="section-title">
            Smart Packing <em>Advisor</em>
          </h1>
          <p className="section-description">
            Climate, season, and culturally-informed packing checklists tailored specifically for Indian journeys.
          </p>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <button onClick={() => window.print()} className="btn btn-outline btn-sm">
            🖨️ Print Checklist
          </button>
        </div>
      </div>

      {/* Selector & Progress Bar */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "16px",
          background: "var(--surface)",
          padding: "20px 24px",
          borderRadius: "var(--radius-xl)",
          border: "1px solid var(--border)",
          boxShadow: "var(--shadow-sm)",
          marginBottom: "24px",
        }}
      >
        <div>
          <label className="form-label" style={{ fontSize: "12px" }}>Destination</label>
          <select
            value={selectedCityId}
            onChange={(e) => setSelectedCityId(e.target.value)}
            className="form-select"
            style={{ width: "100%", fontSize: "13.5px" }}
          >
            {cities.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name} ({c.state})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="form-label" style={{ fontSize: "12px" }}>Season / Weather</label>
          <select
            value={season}
            onChange={(e) => setSeason(e.target.value as any)}
            className="form-select"
            style={{ width: "100%", fontSize: "13.5px" }}
          >
            <option value="Summer">Summer (March - June)</option>
            <option value="Monsoon">Monsoon (July - September)</option>
            <option value="Winter">Winter / Snow (Nov - Feb)</option>
            <option value="Spring">Pleasant Spring / Autumn</option>
          </select>
        </div>

        <div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
            <label className="form-label" style={{ fontSize: "12px", margin: 0 }}>Packing Progress</label>
            <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--emerald-600)" }}>
              {checkedCount} / {items.length} Packed ({progressPercent}%)
            </span>
          </div>
          <div className="progress-bar-wrap" style={{ marginTop: "8px" }}>
            <div className="progress-bar-fill" style={{ width: `${progressPercent}%`, background: "var(--emerald-500)" }} />
          </div>
        </div>
      </div>

      {/* Regional Advice Notice */}
      <div
        style={{
          padding: "16px 20px",
          background: "var(--saffron-50)",
          border: "1px solid rgba(255, 107, 53, 0.25)",
          borderRadius: "var(--radius-lg)",
          marginBottom: "28px",
          display: "flex",
          alignItems: "center",
          gap: "14px",
        }}
      >
        <span style={{ fontSize: "24px" }}>💡</span>
        <div style={{ fontSize: "13.5px", color: "var(--ink-800)", lineHeight: 1.5 }}>
          <strong>Traveler Tip for {city.name}:</strong> Best time to visit is{" "}
          <strong>{city.bestTimeToVisit}</strong>. Always ensure you have a physical ID card and a modest scarf or stole when visiting active spiritual sites and heritage monuments.
        </div>
      </div>

      {/* Categorized Checklists Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "20px" }}>
        {categories.map((cat) => {
          const catItems = items.filter((i) => i.category === cat);
          if (catItems.length === 0) return null;

          return (
            <div
              key={cat}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-xl)",
                padding: "20px",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--ink-900)" }}>
                  {cat === "Documents" ? "📄" : cat === "India Essentials" ? "✦" : cat === "Clothing" ? "👕" : cat === "Health" ? "💊" : cat === "Tech" ? "🔌" : "🧴"}{" "}
                  {cat}
                </h3>
                <span style={{ fontSize: "11px", fontWeight: 600, color: "var(--ink-400)" }}>
                  {catItems.filter((i) => i.checked).length}/{catItems.length}
                </span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {catItems.map((item) => (
                  <label
                    key={item.id}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      padding: "8px 10px",
                      borderRadius: "var(--radius-md)",
                      background: item.checked ? "var(--surface-alt)" : "transparent",
                      cursor: "pointer",
                      transition: "background 0.1s ease",
                      fontSize: "13px",
                      color: item.checked ? "var(--ink-400)" : "var(--ink-800)",
                      textDecoration: item.checked ? "line-through" : "none",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={() => toggleItem(item.id)}
                      style={{ marginTop: "2px", accentColor: "var(--saffron-500)" }}
                    />
                    <span style={{ flex: 1 }}>
                      {item.text}
                      {item.essential && (
                        <span
                          style={{
                            marginLeft: "6px",
                            fontSize: "10px",
                            padding: "1px 5px",
                            borderRadius: "4px",
                            background: "var(--saffron-50)",
                            color: "var(--saffron-600)",
                            fontWeight: 700,
                          }}
                        >
                          ESSENTIAL
                        </span>
                      )}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Add Custom Item */}
      <form
        onSubmit={handleAddCustom}
        style={{
          marginTop: "32px",
          display: "flex",
          gap: "12px",
          background: "var(--surface)",
          padding: "16px 20px",
          borderRadius: "var(--radius-xl)",
          border: "1px solid var(--border)",
        }}
      >
        <input
          type="text"
          placeholder="Add custom item to your packing list... (e.g. Extra power bank, Yoga mat)"
          value={customText}
          onChange={(e) => setCustomText(e.target.value)}
          className="form-input"
          style={{ flex: 1 }}
        />
        <select
          value={customCategory}
          onChange={(e) => setCustomCategory(e.target.value as any)}
          className="form-select"
          style={{ width: "160px" }}
        >
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <button type="submit" className="btn btn-primary btn-sm" style={{ padding: "0 20px" }}>
          ＋ Add Item
        </button>
      </form>
    </main>
  );
}
