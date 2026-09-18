"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { cities, hotels, activities } from "@/lib/data";
import { tripStore } from "@/lib/trip-store";

interface SearchResult {
  id: string;
  category: "Destination" | "Stay" | "Experience" | "My Trip" | "Action";
  title: string;
  subtitle: string;
  url: string;
  badge?: string;
}

export default function SpotlightSearch({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  const results: SearchResult[] = useMemo(() => {
    const q = query.trim().toLowerCase();

    const quickActions: SearchResult[] = [
      {
        id: "act-smart-generator",
        category: "Action",
        title: "✨ Smart AI Itinerary Generator",
        subtitle: "Generate tailored multi-day schedule for any vibe and budget",
        url: "/trips/generator",
        badge: "AI Tool",
      },
      {
        id: "act-split",
        category: "Action",
        title: "💸 Group Travel Budget & UPI Split Calculator",
        subtitle: "Debt minimization with 1-click Google Pay & PhonePe UPI links",
        url: "/split",
        badge: "Finance",
      },
      {
        id: "act-safety",
        category: "Action",
        title: "🚨 Emergency & Safety Hub (112 / 1363)",
        subtitle: "Tourist helplines, hospital directory, and printable SOS card",
        url: "/safety",
        badge: "Safety",
      },
      {
        id: "act-guide",
        category: "Action",
        title: "🪔 Cultural Etiquette & Scam Protection Guide",
        subtitle: "Temple protocols, safe dining rules, and bazaar bargaining",
        url: "/guide",
        badge: "Guide",
      },
      {
        id: "act-calculator",
        category: "Action",
        title: "🚗 Transit, Fuel & FASTag Toll Calculator",
        subtitle: "Calculate road trip distance, tolls, fuel, and train fares",
        url: "/calculator",
        badge: "Utility",
      },
      {
        id: "act-packing",
        category: "Action",
        title: "🧳 Smart Packing Advisor",
        subtitle: "Climate & season-aware packing checklists for India",
        url: "/packing",
        badge: "Packing",
      },
      {
        id: "act-compare",
        category: "Action",
        title: "⚖️ Compare Indian Destinations",
        subtitle: "Side-by-side weather, budget, and sight evaluations",
        url: "/compare",
        badge: "Compare",
      },
      {
        id: "act-new-trip",
        category: "Action",
        title: "＋ Create New Custom Trip",
        subtitle: "Step-by-step route wizard and city stop builder",
        url: "/trips/new",
        badge: "Planner",
      },
      {
        id: "act-saved",
        category: "Action",
        title: "🔖 Open Saved Wishlist",
        subtitle: "View bookmarked havens, cities, and attractions",
        url: "/saved",
        badge: "Wishlist",
      },
    ];

    if (!q) {
      return quickActions;
    }

    const matchedCities: SearchResult[] = cities
      .filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.state.toLowerCase().includes(q) ||
          c.shortDescription.toLowerCase().includes(q)
      )
      .slice(0, 4)
      .map((c) => ({
        id: `city-${c.id}`,
        category: "Destination",
        title: c.name,
        subtitle: `${c.state} · Best in ${c.bestTimeToVisit} · ${c.costIndex} Tier`,
        url: `/cities/${c.id}`,
        badge: c.state,
      }));

    const matchedHotels: SearchResult[] = hotels
      .filter((h) => {
        const cityName = cities.find((c) => c.id === h.cityId)?.name || "";
        return (
          h.name.toLowerCase().includes(q) ||
          cityName.toLowerCase().includes(q) ||
          h.category.toLowerCase().includes(q)
        );
      })
      .slice(0, 3)
      .map((h) => {
        const cityName = cities.find((c) => c.id === h.cityId)?.name || "India";
        return {
          id: `hotel-${h.id}`,
          category: "Stay",
          title: h.name,
          subtitle: `${cityName} · ★ ${h.rating} (${h.reviewsCount} reviews)`,
          url: `/hotels`,
          badge: h.category,
        };
      });

    const matchedActivities: SearchResult[] = activities
      .filter(
        (a) =>
          a.name.toLowerCase().includes(q) ||
          a.category.toLowerCase().includes(q) ||
          a.description.toLowerCase().includes(q)
      )
      .slice(0, 3)
      .map((a) => ({
        id: `act-${a.id}`,
        category: "Experience",
        title: a.name,
        subtitle: `${a.category} · ${a.duration} · Entry ₹${a.estimatedCost}`,
        url: `/activities`,
        badge: a.category,
      }));

    let matchedTrips: SearchResult[] = [];
    try {
      matchedTrips = tripStore
        .read()
        .filter((t) => t.name.toLowerCase().includes(q))
        .slice(0, 2)
        .map((t) => ({
          id: `trip-${t.id}`,
          category: "My Trip",
          title: t.name,
          subtitle: `${t.stops.length} stops · Budget ₹${t.budget.toLocaleString("en-IN")}`,
          url: `/trips/${t.id}`,
          badge: "Trip",
        }));
    } catch {
      // ignore
    }

    return [
      ...matchedCities,
      ...matchedHotels,
      ...matchedActivities,
      ...matchedTrips,
      ...quickActions.filter((a) => a.title.toLowerCase().includes(q)),
    ];
  }, [query]);

  useEffect(() => {
    if (selectedIndex >= results.length) {
      setSelectedIndex(0);
    }
  }, [results.length, selectedIndex]);

  const handleSelect = (item: SearchResult) => {
    onClose();
    router.push(item.url);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(results.length, 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + results.length) % Math.max(results.length, 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (results[selectedIndex]) {
        handleSelect(results[selectedIndex]);
      }
    } else if (e.key === "Escape") {
      e.preventDefault();
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(9, 14, 23, 0.75)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "10vh 16px 24px",
        animation: "fadeIn 0.15s ease-out",
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "640px",
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius-2xl)",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search Input Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "16px 20px",
            borderBottom: "1px solid var(--border)",
            background: "var(--surface)",
          }}
        >
          <span style={{ fontSize: "20px", color: "var(--saffron-500)" }}>🔍</span>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search destinations, stays, experiences, or trips... (e.g. Jaipur, Houseboat, Aarti)"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            style={{
              flex: 1,
              border: "none",
              outline: "none",
              background: "transparent",
              fontSize: "16px",
              fontWeight: 500,
              color: "var(--ink-900)",
              fontFamily: "inherit",
            }}
          />
          <kbd
            style={{
              fontSize: "11px",
              padding: "3px 7px",
              background: "var(--surface-alt)",
              border: "1px solid var(--border)",
              borderRadius: "6px",
              color: "var(--ink-500)",
              fontWeight: 600,
            }}
          >
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div
          style={{
            maxHeight: "380px",
            overflowY: "auto",
            padding: "8px",
          }}
        >
          {results.length === 0 ? (
            <div style={{ textAlign: "center", padding: "40px 16px", color: "var(--ink-500)" }}>
              <p style={{ fontSize: "15px", fontWeight: 600, marginBottom: "4px" }}>No results found for &ldquo;{query}&rdquo;</p>
              <p style={{ fontSize: "13px" }}>Try searching for &ldquo;Kerala&rdquo;, &ldquo;Palace&rdquo;, &ldquo;Trek&rdquo;, or &ldquo;Generator&rdquo;</p>
            </div>
          ) : (
            results.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              const categoryColor =
                item.category === "Destination"
                  ? "var(--saffron-500)"
                  : item.category === "Stay"
                  ? "var(--emerald-500)"
                  : item.category === "Experience"
                  ? "var(--indigo-500)"
                  : "var(--amber-500)";

              return (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "12px 16px",
                    borderRadius: "var(--radius-lg)",
                    cursor: "pointer",
                    background: isSelected ? "var(--surface-alt)" : "transparent",
                    transition: "all 0.12s ease",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", minWidth: 0 }}>
                    <div
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: categoryColor,
                        flexShrink: 0,
                      }}
                    />
                    <div style={{ minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span
                          style={{
                            fontSize: "14.5px",
                            fontWeight: 600,
                            color: "var(--ink-900)",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {item.title}
                        </span>
                        {item.badge && (
                          <span
                            style={{
                              fontSize: "11px",
                              padding: "2px 6px",
                              borderRadius: "4px",
                              background: "var(--surface-sunken)",
                              color: "var(--ink-600)",
                              fontWeight: 500,
                            }}
                          >
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p
                        style={{
                          fontSize: "12.5px",
                          color: "var(--ink-500)",
                          margin: 0,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: "11.5px",
                      color: isSelected ? "var(--saffron-600)" : "var(--ink-400)",
                      fontWeight: 600,
                      flexShrink: 0,
                      marginLeft: "12px",
                    }}
                  >
                    {item.category} →
                  </span>
                </div>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div
          style={{
            padding: "10px 16px",
            borderTop: "1px solid var(--border)",
            background: "var(--surface-sunken)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "11.5px",
            color: "var(--ink-500)",
          }}
        >
          <div style={{ display: "flex", gap: "12px" }}>
            <span><kbd style={{ padding: "1px 4px", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "3px" }}>↑</kbd> <kbd style={{ padding: "1px 4px", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "3px" }}>↓</kbd> Navigate</span>
            <span><kbd style={{ padding: "1px 4px", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "3px" }}>↵</kbd> Select</span>
          </div>
          <span>✦ BharatYatra Quick Search</span>
        </div>
      </div>
    </div>
  );
}
