"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useCurrency, CurrencyCode } from "@/lib/currency-context";
import { useLanguage, LanguageCode, languages } from "@/lib/language-context";
import SpotlightSearch from "./spotlight-search";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const { currency, setCurrency } = useCurrency();
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { label: t("explore", "Explore"), href: "/explore" },
    { label: t("stays", "Stays"), href: "/hotels" },
    { label: t("activities", "Activities"), href: "/activities" },
    { label: t("myTrips", "My Trips"), href: "/trips" },
    { label: t("split", "Split & Pay"), href: "/split" },
    { label: t("calculator", "Calculator"), href: "/calculator" },
    { label: t("packing", "Packing"), href: "/packing" },
    { label: t("safety", "Safety"), href: "/safety" },
    { label: t("guide", "Guide"), href: "/guide" },
  ];

  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("bharatyatra_theme") as "light" | "dark";
      if (savedTheme) {
        setTheme(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme);
      } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark");
        document.documentElement.setAttribute("data-theme", "dark");
      }
    } catch {
      // ignore SSR exception
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("bharatyatra_theme", next);
    } catch {
      // ignore
    }
  };

  return (
    <>
      <header className="site-header">
        <div className="nav-container">
          {/* Brand */}
          <Link href="/" className="brand-link">
            <span className="brand-symbol">✦</span>
            <span>Bharat<span style={{ color: "#ff6b35" }}>Yatra</span></span>
          </Link>

          {/* Desktop Navigation */}
          <nav>
            <ul className="nav-links">
              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`nav-link ${isActive ? "active" : ""}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link
                  href="/trips/generator"
                  className={`nav-link ${pathname.startsWith("/trips/generator") ? "active" : ""}`}
                  style={{
                    color: "var(--saffron-600)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    fontWeight: 600,
                  }}
                >
                  <span style={{ fontSize: "13px" }}>✨</span> {t("aiPlanner", "AI Planner")}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Header Actions */}
          <div className="nav-actions">
            {/* Spotlight Search Trigger */}
            <button
              onClick={() => setSearchOpen(true)}
              className="btn btn-ghost btn-sm"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "var(--ink-600)",
                background: "var(--surface-alt)",
                border: "1px solid var(--border)",
                padding: "6px 12px",
                borderRadius: "var(--radius-full)",
                fontSize: "13px",
              }}
              title="Global Search (Cmd+K / Ctrl+K)"
            >
              <span>🔍</span>
              <span className="desktop-only" style={{ color: "var(--ink-500)" }}>{t("searchBtn", "Search...")}</span>
              <kbd
                className="desktop-only"
                style={{
                  fontSize: "10.5px",
                  padding: "1px 5px",
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "4px",
                  color: "var(--ink-400)",
                }}
              >
                ⌘K
              </kbd>
            </button>

            {/* Indian Language Selector */}
            <div style={{ position: "relative" }}>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as LanguageCode)}
                className="form-select"
                style={{
                  padding: "6px 10px",
                  fontSize: "12px",
                  fontWeight: 600,
                  height: "34px",
                  borderRadius: "var(--radius-full)",
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  color: "var(--ink-800)",
                  cursor: "pointer",
                }}
                aria-label="Select Indian language"
                title="Select language (Gujarati, Hindi, Tamil, Bengali, Marathi, etc.)"
              >
                {languages.map((l) => (
                  <option key={l.code} value={l.code}>
                    {l.nativeName} ({l.name})
                  </option>
                ))}
              </select>
            </div>

            {/* Currency Switcher */}
            <div style={{ position: "relative" }}>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
                className="form-select"
                style={{
                  padding: "6px 10px",
                  fontSize: "12.5px",
                  fontWeight: 600,
                  height: "34px",
                  borderRadius: "var(--radius-full)",
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  color: "var(--ink-800)",
                  cursor: "pointer",
                }}
                aria-label="Select currency"
              >
                <option value="INR">₹ INR</option>
                <option value="USD">$ USD</option>
                <option value="EUR">€ EUR</option>
                <option value="GBP">£ GBP</option>
              </select>
            </div>

            {/* Dark / Light Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "34px",
                height: "34px",
                borderRadius: "var(--radius-full)",
                background: "var(--surface-alt)",
                border: "1px solid var(--border)",
                fontSize: "16px",
                cursor: "pointer",
                color: "var(--ink-800)",
                transition: "all 0.15s ease",
              }}
              title={`Switch to ${theme === "light" ? "Dark" : "Light"} mode`}
              aria-label="Toggle theme"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>

            <Link href="/dashboard" className="btn btn-outline btn-sm desktop-only" style={{ fontWeight: 600 }}>
              {t("dashboard", "Dashboard")}
            </Link>

            <Link href="/trips/new" className="btn btn-primary btn-sm">
              <span>＋</span> {t("planTrip", "Plan a Trip")}
            </Link>

            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div style={{
            background: "var(--surface)",
            borderBottom: "1px solid var(--border)",
            padding: "20px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setSearchOpen(true);
              }}
              className="btn btn-outline btn-block btn-sm"
              style={{ justifyContent: "flex-start", gap: "8px" }}
            >
              <span>🔍</span> {t("searchPlaceholder", "Search destinations, stays...")}
            </button>

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  padding: "10px 14px",
                  borderRadius: "8px",
                  fontWeight: 600,
                  color: pathname.startsWith(item.href) ? "var(--saffron-600)" : "var(--ink-800)",
                  background: pathname.startsWith(item.href) ? "var(--saffron-50)" : "transparent"
                }}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/trips/generator"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                padding: "10px 14px",
                borderRadius: "8px",
                fontWeight: 600,
                color: "var(--saffron-600)",
                background: "var(--saffron-50)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span>✨</span> {t("aiPlanner", "Smart AI Itinerary Generator")}
            </Link>

            <div style={{ borderTop: "1px solid var(--border)", paddingTop: "12px", display: "flex", gap: "10px" }}>
              <Link
                href="/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className="btn btn-outline btn-block btn-sm"
              >
                {t("dashboard", "Dashboard")}
              </Link>
              <Link
                href="/trips/new"
                onClick={() => setMobileMenuOpen(false)}
                className="btn btn-primary btn-block btn-sm"
              >
                {t("planTrip", "Plan a Trip")}
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Global Command Palette */}
      <SpotlightSearch isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
